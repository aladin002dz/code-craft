import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { RenderFlashingBox } from '../common/RenderFlashingBox';
import { 
  Boxes, 
  Check, 
  Trash2, 
  Plus, 
  Split
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';

interface UserProfile {
  name: string;
  role: string;
  level: number;
}

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export const Chapter5ComplexState: React.FC = () => {
  const { playTone } = useProgress();
  const { t } = useLanguage();

  // Object State Sandbox
  const [user, setUser] = useState<UserProfile>({
    name: 'Alex Johnson',
    role: 'Frontend Engineer',
    level: 1,
  });

  const [objectLogs, setObjectLogs] = useState<string[]>([
    'Initial object stored at memory address 0x3F8A.'
  ]);

  // Broken in-place mutation
  const handleMutateDirectly = () => {
    playTone('error');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Demonstrating bug
    user.level += 1;
    user.role = 'Senior Frontend Engineer';
    // Passing the SAME object reference
    setUser(user);
    setObjectLogs(prev => [
      `❌ Mutated in place! user.level is ${user.level} in RAM, but Object.is(prev, next) returned true. React skipped rendering!`,
      ...prev.slice(0, 3)
    ]);
  };

  // Correct immutable update
  const handleUpdateImmutable = () => {
    playTone('success');
    setUser(prev => ({
      ...prev,
      level: prev.level + 1,
      role: prev.level >= 2 ? 'Lead Architect' : 'Senior Engineer',
    }));
    setObjectLogs(prev => [
      `✅ Created fresh object with spread syntax (...prev). React detected new reference and re-rendered successfully!`,
      ...prev.slice(0, 3)
    ]);
  };

  // Array State Sandbox (Todos)
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: 'Master useState fundamentals', completed: true },
    { id: 2, text: 'Learn React Fiber linked list', completed: true },
    { id: 3, text: 'Avoid direct array mutations', completed: false },
  ]);

  const [newTodoText, setNewTodoText] = useState('');

  // Add Todo (...prev, newItem)
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    playTone('click');
    const item: TodoItem = {
      id: Date.now(),
      text: newTodoText.trim(),
      completed: false,
    };
    setTodos(prev => [...prev, item]);
    setNewTodoText('');
  };

  // Toggle Todo (prev.map)
  const handleToggleTodo = (id: number) => {
    playTone('step');
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete Todo (prev.filter)
  const handleDeleteTodo = (id: number) => {
    playTone('step');
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-teal-950/40 via-slate-900/80 to-slate-950 border border-teal-800/40 p-6 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 p-8 opacity-10 pointer-events-none">
          <Boxes className="w-64 h-64 text-teal-400" />
        </div>
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="emerald" size="md">{t.chapter5.badge1}</Badge>
            <Badge variant="cyan" size="md">{t.chapter5.badge2}</Badge>
            <span className="text-xs text-slate-400 font-mono">⏱️ {t.chapter5.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.chapter5.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">{t.chapter5.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            {t.chapter5.subtitle}
          </p>
        </div>
      </div>

      {/* Why Mutation Fails Card */}
      <Card
        title={t.chapter5.shallowTitle}
        subtitle={t.chapter5.shallowSubtitle}
        icon={<Boxes className="w-5 h-5 text-teal-400" />}
        badge={<Badge variant="emerald">{t.chapter5.shallowBadge}</Badge>}
        glowColor="cyan"
      >
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>{t.chapter5.shallowDesc}</p>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-teal-300 flex items-center justify-between overflow-x-auto" dir="ltr">
            <span>{t.chapter5.shallowPointer}</span>
          </div>
        </div>
      </Card>

      {/* Object State Interactive Lab */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Split className="w-5 h-5 text-teal-400" />
          <h2 className="text-xl font-bold text-white">{t.chapter5.objLabTitle}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Object Mutation Code Comparison */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-2">
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">{t.chapter5.trapTitle}</div>
              <pre className="font-mono text-xs text-rose-200 p-2 rounded bg-slate-950 overflow-x-auto" dir="ltr">
{`// ❌ Mutates object in place -> Same reference -> Skipped render\nuser.level += 1;\nsetUser(user);`}
              </pre>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{t.chapter5.spreadTitle}</div>
              <pre className="font-mono text-xs text-emerald-200 p-2 rounded bg-slate-950 overflow-x-auto" dir="ltr">
{`// ✅ Spread creates brand new object in memory\nsetUser(prev => ({\n  ...prev,\n  level: prev.level + 1\n}));`}
              </pre>
            </div>
          </div>

          {/* Interactive Object Card */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <RenderFlashingBox label="UserProfileCard" flashColor="cyan" className="bg-slate-950">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white">{user.name}</h3>
                    <p className="text-xs text-teal-400 font-mono">{user.role}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-800 text-xs font-mono font-bold">
                    Level {user.level}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={handleMutateDirectly}
                    className="px-3 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all shadow-md shadow-rose-950/40"
                  >
                    {t.chapter5.mutateDirectBtn}
                  </button>
                  <button
                    onClick={handleUpdateImmutable}
                    className="px-3 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-teal-500/20"
                  >
                    {t.chapter5.updateSpreadBtn}
                  </button>
                </div>
              </div>
            </RenderFlashingBox>

            {/* Logs */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-400 max-h-24 overflow-y-auto" dir="ltr">
              {objectLogs.map((log, i) => (
                <div key={i} className="text-teal-300/90 leading-relaxed">&gt; {log}</div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Array State Interactive Lab (Pure Methods) */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Boxes className="w-5 h-5 text-cyan-400" />
          <span>{t.chapter5.arrayLabTitle}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold">{t.chapter5.opAdd}</span>
            <div className="text-slate-300" dir="ltr">[...prev, newItem]</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-cyan-400 font-bold">{t.chapter5.opUpdate}</span>
            <div className="text-slate-300" dir="ltr">prev.map(item =&gt; ...)</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-rose-400 font-bold">{t.chapter5.opRemove}</span>
            <div className="text-slate-300" dir="ltr">prev.filter(item =&gt; ...)</div>
          </div>
        </div>

        {/* Live Todo Playground */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <RenderFlashingBox label="ImmutableTodoList" flashColor="cyan" className="bg-slate-950">
            <div className="space-y-4">
              
              {/* Form Input */}
              <form onSubmit={handleAddTodo} className="flex gap-2">
                <input
                  type="text"
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                  placeholder={t.chapter5.taskPlaceholder}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>{t.chapter5.addTaskBtn}</span>
                </button>
              </form>

              {/* Todo Items */}
              <div className="space-y-2">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      todo.completed
                        ? 'bg-slate-900/40 border-slate-800 text-slate-500'
                        : 'bg-slate-900 border-slate-800 text-slate-200'
                    }`}
                  >
                    <button
                      onClick={() => handleToggleTodo(todo.id)}
                      className="flex items-center gap-3 flex-1 text-left rtl:text-right"
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                        todo.completed
                          ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                          : 'border-slate-700 bg-slate-950'
                      }`}>
                        {todo.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className={`text-sm ${todo.completed ? 'line-through text-slate-500' : 'font-medium'}`}>
                        {todo.text}
                      </span>
                    </button>

                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/30 transition-colors"
                      title="Delete item via .filter()"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </RenderFlashingBox>
        </div>
      </div>

    </div>
  );
};
