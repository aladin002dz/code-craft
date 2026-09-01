import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { RenderFlashingBox } from '../common/RenderFlashingBox';
import { 
  Copy, 
  Layers, 
  Trash2, 
  Plus, 
  Check, 
  AlertOctagon, 
  Database
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

interface User {
  name: string;
  role: string;
  avatar: string;
}

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const Chapter5ComplexState: React.FC = () => {
  const { playTone } = useProgress();

  // Object demo state
  const [user, setUser] = useState<User>({
    name: 'Sarah Connor',
    role: 'Cyberpunk Rebel',
    avatar: '👩‍🎤'
  });
  const [objectLogs, setObjectLogs] = useState<string[]>([]);

  // Array demo state
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Learn useState snapshot model', completed: true },
    { id: 2, text: 'Avoid direct object mutation', completed: false },
    { id: 3, text: 'Master array immutable updates', completed: false },
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');
  const [arrayLogs, setArrayLogs] = useState<string[]>([]);

  // Mutating object trap demonstration
  const handleMutateObjectDirectly = () => {
    playTone('error');
    // Direct mutation in place!
    user.name = 'Sarah (Mutated in RAM)';
    setUser(user); // Passing same object reference!
    setObjectLogs(prev => [
      `⚠️ user.name changed in memory to "${user.name}", but Object.is(prev, next) returned TRUE! React skipped rendering.`,
      ...prev.slice(0, 3)
    ]);
  };

  // Correct immutable object update
  const handleUpdateObjectImmutably = () => {
    playTone('click');
    const roles = ['Tech Lead', 'Staff Engineer', 'Architect', 'DevOps Ninja'];
    const randomRole = roles[Math.floor(Math.random() * roles.length)];
    
    setUser(prev => ({
      ...prev,
      name: 'Sarah Connor',
      role: randomRole
    }));
    setObjectLogs(prev => [
      `✨ Created brand-new object reference via {...prev, role: "${randomRole}"}. React detected change and rendered!`,
      ...prev.slice(0, 3)
    ]);
  };

  // Immutable Add Task
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    playTone('click');
    const item: Task = {
      id: Date.now(),
      text: newTaskInput.trim(),
      completed: false
    };
    setTasks(prev => [...prev, item]);
    setNewTaskInput('');
    setArrayLogs(prev => [
      `✅ Added task via [...prev, newTask]. Fresh array reference generated!`,
      ...prev.slice(0, 3)
    ]);
  };

  // Immutable Toggle Task
  const handleToggleTask = (id: number) => {
    playTone('step');
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    setArrayLogs(prev => [
      `🔄 Toggled task #${id} using tasks.map(...) producing a new array with updated item.`,
      ...prev.slice(0, 3)
    ]);
  };

  // Immutable Delete Task
  const handleDeleteTask = (id: number) => {
    playTone('click');
    setTasks(prev => prev.filter(t => t.id !== id));
    setArrayLogs(prev => [
      `🗑️ Deleted task #${id} using tasks.filter(t => t.id !== ${id}).`,
      ...prev.slice(0, 3)
    ]);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-teal-950/40 via-slate-900/80 to-slate-950 border border-teal-800/40 p-6 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Database className="w-64 h-64 text-teal-400" />
        </div>
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="purple" size="md">Module 5</Badge>
            <Badge variant="cyan" size="md">Immutability Patterns</Badge>
            <span className="text-xs text-slate-400 font-mono">⏱️ 6 min read + interactive lab</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Managing Complex State: <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Objects & Arrays</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            In JavaScript, objects and arrays are passed by reference.
            Mutating an object in place keeps the same memory pointer, tricking React into thinking nothing changed!
            Let's master clean immutable patterns.
          </p>
        </div>
      </div>

      {/* Object.is Shallow Equality Explanation Card */}
      <Card
        title="Why Mutation Fails: Object.is(prev, next)"
        subtitle="React compares memory references, NOT deep values"
        icon={<AlertOctagon className="w-5 h-5 text-amber-400" />}
        badge={<Badge variant="amber">Shallow Equality</Badge>}
        glowColor="amber"
      >
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            When you call <code className="text-amber-300 bg-amber-950/40 px-1.5 py-0.5 rounded">setUser(nextUser)</code>, React performs a shallow equality check:
          </p>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300">
            Object.is(previousState, nextState) === true ? Bailout_No_Render : Schedule_Render
          </div>
          <p>
            If you mutated properties on the existing object, the memory pointer did not change. React assumes the data is identical and skips re-rendering!
          </p>
        </div>
      </Card>

      {/* Interactive Object State Lab */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Copy className="w-5 h-5 text-cyan-400" />
          <span>Interactive Object Mutation vs Immutability Lab</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Object Code Examples */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-2">
              <div className="text-xs font-bold text-rose-400 uppercase">❌ The Mutation Trap (Broken):</div>
              <pre className="p-2 rounded bg-slate-950 font-mono text-xs text-rose-200 overflow-x-auto">
{`function handleMutate() {
  user.name = 'New Name'; // Mutates RAM
  setUser(user);          // Same reference -> Skipped!
}`}
              </pre>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
              <div className="text-xs font-bold text-emerald-400 uppercase">✅ The Spread Pattern (Correct):</div>
              <pre className="p-2 rounded bg-slate-950 font-mono text-xs text-emerald-200 overflow-x-auto">
{`function handleUpdate() {
  setUser(prev => ({
    ...prev,
    role: 'Tech Lead' // Brand new reference!
  }));
}`}
              </pre>
            </div>
          </div>

          {/* Live Object Widget */}
          <div className="space-y-4">
            <RenderFlashingBox label="UserProfileComponent" flashColor="cyan" className="bg-slate-950">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4">
                  <div className="text-4xl p-3 rounded-2xl bg-slate-800 border border-slate-700">
                    {user.avatar}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{user.name}</div>
                    <div className="text-xs font-mono text-cyan-400 font-semibold">{user.role}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={handleMutateObjectDirectly}
                    className="px-4 py-2.5 rounded-xl bg-rose-900/60 hover:bg-rose-800 text-rose-200 border border-rose-700/60 font-bold text-xs transition-all"
                  >
                    Mutate Directly (user.name = ...)
                  </button>
                  <button
                    onClick={handleUpdateObjectImmutably}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-teal-500/20"
                  >
                    Update via Spread (...prev)
                  </button>
                </div>
              </div>
            </RenderFlashingBox>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-400 max-h-24 overflow-y-auto">
              {objectLogs.length === 0 ? '> Click buttons to test object updating' : objectLogs.map((l, i) => <div key={i}>&gt; {l}</div>)}
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Array Immutability Sandbox */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-400" />
          <span>Interactive Array Operations Lab</span>
        </h2>

        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
          
          {/* Quick Operations Cheatsheet */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-cyan-400 font-bold">1. Adding:</span>
              <div className="text-slate-300 mt-1">[...prev, newItem]</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-emerald-400 font-bold">2. Updating:</span>
              <div className="text-slate-300 mt-1">prev.map(item =&gt; ...)</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-rose-400 font-bold">3. Removing:</span>
              <div className="text-slate-300 mt-1">prev.filter(t =&gt; t.id !== id)</div>
            </div>
          </div>

          {/* Live Task List */}
          <RenderFlashingBox label="TodoListComponent" flashColor="emerald" className="bg-slate-900/60">
            <div className="space-y-4">
              
              {/* Form Input */}
              <form onSubmit={handleAddTask} className="flex gap-2">
                <input
                  type="text"
                  value={newTaskInput}
                  onChange={(e) => setNewTaskInput(e.target.value)}
                  placeholder="Type a new task to add immutably..."
                  className="flex-1 px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
                />
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add [...prev, item]</span>
                </button>
              </form>

              {/* Items */}
              <div className="space-y-2">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <button
                      onClick={() => handleToggleTask(task.id)}
                      className="flex items-center gap-3 text-left flex-1"
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                        task.completed
                          ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                          : 'border-slate-700 hover:border-cyan-400'
                      }`}>
                        {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className={`text-sm ${task.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                        {task.text}
                      </span>
                    </button>

                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/30 transition-colors"
                      title="Delete via .filter()"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </RenderFlashingBox>

          {/* Trace log */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-400 max-h-24 overflow-y-auto">
            {arrayLogs.length === 0 ? '> Add, toggle, or delete tasks above' : arrayLogs.map((l, i) => <div key={i} className="text-emerald-300/90">&gt; {l}</div>)}
          </div>

        </div>
      </div>

    </div>
  );
};
