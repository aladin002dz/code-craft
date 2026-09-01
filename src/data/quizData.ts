import type { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    title: 'The Triple Increment Trap',
    scenario: 'You have a counter initialized at 0. When the button is clicked, what will be logged and what will the UI display on the next render?',
    codeSnippet: `function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  }

  return <button onClick={handleClick}>{count}</button>;
}`,
    options: [
      {
        id: 'A',
        text: 'Logs 0 to console, UI renders 1',
        explanation: 'Correct! State inside the current render is a fixed snapshot (count is 0 throughout handleClick). setCount(0 + 1) is queued 3 times, resulting in 1. The console.log prints the current snapshot (0).'
      },
      {
        id: 'B',
        text: 'Logs 3 to console, UI renders 3',
        explanation: 'Incorrect. Calling setCount does NOT immediately mutate count in the current execution scope.'
      },
      {
        id: 'C',
        text: 'Logs 1 to console, UI renders 3',
        explanation: 'Incorrect. Because direct values setCount(count + 1) were used instead of updaters, all three calls evaluate to setCount(0 + 1).'
      },
      {
        id: 'D',
        text: 'Logs 0 to console, UI renders 3',
        explanation: 'Incorrect. To reach 3, you must use functional updaters like setCount(c => c + 1).'
      }
    ],
    correctOptionId: 'A',
    keyTakeaway: 'State variables are constants within each render snapshot. Use updater functions setCount(prev => prev + 1) when new state depends on previous state.'
  },
  {
    id: 2,
    title: 'Delayed State Access & Closures',
    scenario: 'A user clicks the button once, and immediately (before 3 seconds pass) clicks it twice more. What alert message appears after 3 seconds?',
    codeSnippet: `function DelayedAlert() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert('Count is: ' + count);
    }, 3000);
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment ({count})</button>
      <button onClick={handleAlertClick}>Show Alert in 3s</button>
    </div>
  );
}`,
    options: [
      {
        id: 'A',
        text: 'Alert shows the latest count (2 or 3) because state is reactive',
        explanation: 'Incorrect. React state does NOT act like a mutable pointer or Vue ref in this context.'
      },
      {
        id: 'B',
        text: 'Alert shows the count at the exact moment the button was clicked (e.g. 0)',
        explanation: 'Correct! The setTimeout closure captures the count variable from the specific render snapshot when handleAlertClick was triggered.'
      },
      {
        id: 'C',
        text: 'Throws a React Hook closure error',
        explanation: 'Incorrect. This is valid JavaScript closure behavior.'
      },
      {
        id: 'D',
        text: 'Alert shows undefined because component re-rendered',
        explanation: 'Incorrect. The closed-over variable remains in memory in the closure scope.'
      }
    ],
    correctOptionId: 'B',
    keyTakeaway: 'Event handlers capture the state values of the specific render they were created in.'
  },
  {
    id: 3,
    title: 'Object Mutation Mystery',
    scenario: 'Why does clicking the button below NOT update the user\'s name on the screen?',
    codeSnippet: `function UserProfile() {
  const [user, setUser] = useState({ name: 'Alex', age: 25 });

  function updateName() {
    user.name = 'Jordan';
    setUser(user);
  }

  return <h1>{user.name}</h1>;
}`,
    options: [
      {
        id: 'A',
        text: 'Objects cannot be stored in useState; you must use separate state variables',
        explanation: 'Incorrect. You can store objects in useState without issue.'
      },
      {
        id: 'B',
        text: 'React uses Object.is() shallow reference comparison; since the object reference did not change, React bails out of re-rendering',
        explanation: 'Correct! Mutating the existing object in place does not change its reference address in memory. setUser(user) passes the same object reference, so React skips rendering.'
      },
      {
        id: 'C',
        text: 'useState only accepts strings and numbers',
        explanation: 'Incorrect. Any valid JS data type can be used as state.'
      },
      {
        id: 'D',
        text: 'The component crashes with a read-only TypeError',
        explanation: 'Incorrect. JavaScript objects are mutable by default, but React won\'t detect the change.'
      }
    ],
    correctOptionId: 'B',
    keyTakeaway: 'Always treat React state as immutable. Create a new object copy: setUser({ ...user, name: "Jordan" }).'
  },
  {
    id: 4,
    title: 'Expensive Initial Calculations',
    scenario: 'Which code snippet calculates the initial state efficiently without running createHugeMatrix() on every single re-render?',
    codeSnippet: `// Option 1
const [matrix, setMatrix] = useState(createHugeMatrix());

// Option 2
const [matrix, setMatrix] = useState(() => createHugeMatrix());`,
    options: [
      {
        id: 'A',
        text: 'Option 1 is faster because functions take memory to instantiate',
        explanation: 'Incorrect. In Option 1, createHugeMatrix() executes every time the component function is called during any re-render, even though React ignores the result after mount.'
      },
      {
        id: 'B',
        text: 'Option 2 (Lazy Initializer) is efficient because React will only invoke the callback on the initial mount',
        explanation: 'Correct! Passing an initializer function () => compute() tells React to only call it once during initial mount.'
      },
      {
        id: 'C',
        text: 'Both behave identically with zero performance difference',
        explanation: 'Incorrect. Option 1 re-runs the expensive calculation on every render.'
      },
      {
        id: 'D',
        text: 'Option 2 causes memory leaks in React 18',
        explanation: 'Incorrect. Lazy initialization is an official, recommended React pattern.'
      }
    ],
    correctOptionId: 'B',
    keyTakeaway: 'Use lazy initialization useState(() => compute()) when initial state calculation is CPU or memory intensive.'
  },
  {
    id: 5,
    title: 'Conditional Hook Placement',
    scenario: 'Why is putting useState inside an `if` block strictly prohibited in React?',
    codeSnippet: `function BadComponent({ isVip }) {
  if (isVip) {
    const [vipBadge, setVipBadge] = useState('GOLD');
  }
  const [points, setPoints] = useState(0);

  return <div>Points: {points}</div>;
}`,
    options: [
      {
        id: 'A',
        text: 'React stores hooks in an indexed linked list per Fiber node; changing the order breaks state-to-hook mapping on subsequent renders',
        explanation: 'Correct! React relies on the exact invocation order of hooks to match each hook with its stored state in fiber.memoizedState.'
      },
      {
        id: 'B',
        text: 'JavaScript doesn\'t allow functions inside if statements',
        explanation: 'Incorrect. JS allows functions inside conditionals, but React\'s internal linked list architecture requires fixed call order.'
      },
      {
        id: 'C',
        text: 'The variable vipBadge would be garbage collected immediately',
        explanation: 'Incorrect. It is React\'s internal Fiber state pointer that becomes misaligned.'
      },
      {
        id: 'D',
        text: 'Conditional rendering only works with useReducer',
        explanation: 'Incorrect. No hook can be called conditionally.'
      }
    ],
    correctOptionId: 'A',
    keyTakeaway: 'Always call hooks at the top level of your component so hook order remains constant between renders.'
  },
  {
    id: 6,
    title: 'Redundant State Anti-Pattern',
    scenario: 'Which implementation of a Full Name component represents best practice in React?',
    codeSnippet: `// Approach A
const [firstName, setFirstName] = useState('Jane');
const [lastName, setLastName] = useState('Doe');
const [fullName, setFullName] = useState('Jane Doe'); // Synced via useEffect

// Approach B
const [firstName, setFirstName] = useState('Jane');
const [lastName, setLastName] = useState('Doe');
const fullName = firstName + ' ' + lastName; // Derived directly during render`,
    options: [
      {
        id: 'A',
        text: 'Approach A is better because fullName is cached in state',
        explanation: 'Incorrect. Approach A creates redundant state that can easily fall out of sync and triggers extra render passes.'
      },
      {
        id: 'B',
        text: 'Approach B is better: calculate derived values directly during render to prevent redundant state and sync bugs',
        explanation: 'Correct! If something can be calculated from existing state or props, don\'t put it in state.'
      },
      {
        id: 'C',
        text: 'Both are identical in terms of React lifecycle',
        explanation: 'Incorrect. Approach A triggers secondary renders and boilerplate synchronization code.'
      },
      {
        id: 'D',
        text: 'Neither; fullName must always be fetched from a backend API',
        explanation: 'Incorrect.'
      }
    ],
    correctOptionId: 'B',
    keyTakeaway: 'Don\'t put redundant or derived values in state. Calculate them on-the-fly during render.'
  },
  {
    id: 7,
    title: 'Array State Modification',
    scenario: 'What is the correct way to delete an item by ID from an array state `todos`?',
    codeSnippet: `const [todos, setTodos] = useState([
  { id: 1, text: 'Buy milk' },
  { id: 2, text: 'Clean desk' },
  { id: 3, text: 'Learn React' }
]);`,
    options: [
      {
        id: 'A',
        text: 'todos.splice(todos.findIndex(t => t.id === 2), 1); setTodos(todos);',
        explanation: 'Incorrect. splice() mutates the existing array in-place, keeping the exact same array reference.'
      },
      {
        id: 'B',
        text: 'setTodos(todos.filter(t => t.id !== 2));',
        explanation: 'Correct! Array.prototype.filter returns a brand new array reference without mutating the original state.'
      },
      {
        id: 'C',
        text: 'delete todos[1]; setTodos(todos);',
        explanation: 'Incorrect. delete leaves an empty hole in the array and mutates the original reference.'
      },
      {
        id: 'D',
        text: 'setTodos(todos.pop());',
        explanation: 'Incorrect. pop() mutates the array and returns the popped element, not the remaining array.'
      }
    ],
    correctOptionId: 'B',
    keyTakeaway: 'Use non-mutating array methods like filter(), map(), concat(), or the spread operator [...items] to produce fresh array copies.'
  },
  {
    id: 8,
    title: 'Automatic Batching in React 18 & 19',
    scenario: 'In React 18+, when both state updates inside a setTimeout or async fetch execute, how many re-renders occur?',
    codeSnippet: `function BatchingDemo() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleAsyncClick() {
    setTimeout(() => {
      setCount(c => c + 1);
      setFlag(f => !f);
    }, 1000);
  }

  return <div>{count} - {String(flag)}</div>;
}`,
    options: [
      {
        id: 'A',
        text: '2 re-renders because timeouts were never batched in any React version',
        explanation: 'Incorrect. React 18 introduced Automatic Batching across all contexts, including promises, setTimeout, and native events.'
      },
      {
        id: 'B',
        text: '1 single re-render because React 18+ automatically batches state updates across async callbacks and microtasks',
        explanation: 'Correct! React 18 automatically batches multiple setState calls into one single render pass for optimal performance.'
      },
      {
        id: 'C',
        text: '0 re-renders because async functions are ignored by React',
        explanation: 'Incorrect. React still re-renders after the batch resolves.'
      },
      {
        id: 'D',
        text: 'Infinite re-renders',
        explanation: 'Incorrect.'
      }
    ],
    correctOptionId: 'B',
    keyTakeaway: 'React 18+ features Automatic Batching, combining multiple state updates inside promises, timeouts, and handlers into a single render pass.'
  }
];
