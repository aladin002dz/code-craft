import type { CheatSheetItem } from '../types';

export const CHEAT_SHEET_ITEMS: CheatSheetItem[] = [
  {
    category: '1. Updating Based on Previous State',
    rule: 'Use a functional updater whenever the next state depends on the previous state.',
    dontCode: `// ❌ Risky (Uses stale closure snapshot)
setCount(count + 1);
setCount(count + 1); // Only increments by 1 total!`,
    doCode: `// ✅ Safe (Receives the queued pending state)
setCount(prev => prev + 1);
setCount(prev => prev + 1); // Correctly increments by 2!`,
    explanation: 'State variables are frozen per render snapshot. Functional updaters queue functions that evaluate consecutively.'
  },
  {
    category: '2. Object State Immutability',
    rule: 'Never mutate state objects in place. Always copy existing fields using spread syntax.',
    dontCode: `// ❌ Will NOT trigger re-render (Same memory reference)
user.age = 26;
setUser(user);`,
    doCode: `// ✅ Creates fresh object reference
setUser(prev => ({
  ...prev,
  age: 26
}));`,
    explanation: 'React performs an Object.is() comparison between previous and next state. If the reference is identical, React skips rendering.'
  },
  {
    category: '3. Array State Operations',
    rule: 'Use pure array methods that return new arrays (e.g., .filter, .map, [...array]).',
    dontCode: `// ❌ Mutates array in place
todos.push(newTodo);
todos.splice(index, 1);
setTodos(todos);`,
    doCode: `// ✅ Adding: [...todos, newTodo]
// ✅ Removing: todos.filter(t => t.id !== id)
// ✅ Updating: todos.map(t => t.id === id ? {...t, done: true} : t)
setTodos(prev => [...prev, newTodo]);`,
    explanation: 'Never use push(), pop(), splice(), sort(), or reverse() directly on state arrays.'
  },
  {
    category: '4. Expensive Initial State',
    rule: 'Pass a function to useState (lazy initial state) if initial computation is expensive.',
    dontCode: `// ❌ Runs parseHugeJson() on EVERY re-render!
const [data, setData] = useState(parseHugeJson(rawString));`,
    doCode: `// ✅ Runs parseHugeJson() ONLY on initial mount!
const [data, setData] = useState(() => parseHugeJson(rawString));`,
    explanation: 'Passing a callback tells React to invoke it only during the initial component mount.'
  },
  {
    category: '5. Derived State vs Redundant State',
    rule: 'Avoid redundant state for values that can be computed during render.',
    dontCode: `// ❌ Redundant state requires fragile synchronization
const [items, setItems] = useState([]);
const [total, setTotal] = useState(0); // Needs sync on every item change`,
    doCode: `// ✅ Compute directly during render
const [items, setItems] = useState([]);
const total = items.reduce((acc, item) => acc + item.price, 0);`,
    explanation: 'Redundant state leads to out-of-sync bugs and wasted render cycles.'
  },
  {
    category: '6. Rules of Hooks',
    rule: 'Only call useState at the top level of React functions, never in loops or conditions.',
    dontCode: `// ❌ Breaks React Fiber hooks linked list ordering
if (isLoggedIn) {
  const [session, setSession] = useState(null);
}`,
    doCode: `// ✅ Call unconditionally at top level
const [session, setSession] = useState(null);
// Handle condition in UI logic instead`,
    explanation: 'React identifies hooks by their execution sequence in the Fiber node memoizedState linked list.'
  }
];
