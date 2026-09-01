import type { Language, QuizQuestion, CheatSheetItem, Chapter } from '../types';

export const TRANSLATIONS: Record<Language, {
  header: {
    brandSubtitle: string;
    badge: string;
    progress: string;
    renderFlashOn: string;
    renderFlashOff: string;
    cheatSheet: string;
    moduleSelect: string;
    langName: string;
  };
  footer: {
    prev: string;
    next: string;
    complete: string;
    completed: string;
    reset: string;
    resetConfirm: string;
    builtWith: string;
  };
  cheatSheetModal: {
    title: string;
    subtitle: string;
    ruleNumber: string;
    why: string;
    dont: string;
    do: string;
    copy: string;
    copied: string;
    closeTip: string;
    gotIt: string;
  };
  chapters: Chapter[];
  cheatSheet: CheatSheetItem[];
  quizQuestions: QuizQuestion[];
  chapter1: {
    badge1: string;
    badge2: string;
    readTime: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    prob1Title: string;
    prob1Subtitle: string;
    prob1Badge: string;
    prob1Desc: string;
    prob1Box: string;
    prob2Title: string;
    prob2Subtitle: string;
    prob2Badge: string;
    prob2Desc: string;
    prob2Box: string;
    sandboxTitle: string;
    sandboxSubtitle: string;
    varTitle: string;
    varBadge: string;
    varUiDisplay: string;
    varUiStuck: string;
    varRamValue: string;
    varIncrementBtn: string;
    varRerenderBtn: string;
    stateTitle: string;
    stateBadge: string;
    stateUiDisplay: string;
    stateUiAuto: string;
    stateFiberValue: string;
    stateIncrementBtn: string;
    stateResetBtn: string;
    consoleTrace: string;
    modelTitle: string;
    modelDesc: string;
  };
  chapter2: {
    badge1: string;
    badge2: string;
    readTime: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    microscopeTitle: string;
    microscopeSubtitle: string;
    destructuringTitle: string;
    destructuringBadge: string;
    destructuringDesc: string;
    stateVarTitle: string;
    stateVarBadge: string;
    stateVarDesc: string;
    setterTitle: string;
    setterBadge: string;
    setterDesc: string;
    hookTitle: string;
    hookBadge: string;
    hookDesc: string;
    initialTitle: string;
    initialBadge: string;
    initialDesc: string;
    whyArrayTitle: string;
    whyArraySubtitle: string;
    whyArrayBadge: string;
    ifObject: string;
    ifObjectDesc: string;
    withArray: string;
    withArrayDesc: string;
    lazyTitle: string;
    lazyBadge: string;
    lazyDesc: string;
    eagerTitle: string;
    eagerBadge: string;
    eagerRenders: string;
    eagerRuns: string;
    eagerWarning: string;
    eagerBtn: string;
    lazyCardTitle: string;
    lazyCardBadge: string;
    lazyRendersLabel: string;
    lazyRunsLabel: string;
    lazySuccess: string;
    lazyBtn: string;
    resetBenchmark: string;
  };
  chapter3: {
    badge1: string;
    badge2: string;
    readTime: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    analogyTitle: string;
    analogySubtitle: string;
    analogyBadge: string;
    analogyDesc: string;
    stepperTitle: string;
    directModeBtn: string;
    funcModeBtn: string;
    step1Title: string;
    step1Desc: string;
    step1Badge: string;
    step2Title: string;
    step2DescDirect: string;
    step2DescFunc: string;
    step2Badge: string;
    step3Title: string;
    step3DescDirect: string;
    step3DescFunc: string;
    step3Badge: string;
    step4Title: string;
    step4DescDirect: string;
    step4DescFunc: string;
    step4Badge: string;
    stepOf: string;
    queueLabel: string;
    queueEmpty: string;
    queuePending: string;
    queueing: string;
    noUpdatesQueued: string;
    resetTimeline: string;
    nextStep: string;
    startOver: string;
    liveComparisonTitle: string;
    directTitle: string;
    directBadge: string;
    directBtn: string;
    funcTitle: string;
    funcBadge: string;
    funcBtn: string;
  };
  chapter4: {
    badge1: string;
    badge2: string;
    readTime: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    fiberTitle: string;
    fiberSubtitle: string;
    fiberBadge: string;
    fiberDesc: string;
    linkedListHeader: string;
    hook1Label: string;
    hook2Label: string;
    hook3Label: string;
    noticeNoKeys: string;
    simTitle: string;
    simBadge: string;
    simDesc: string;
    illegalCode: string;
    alignmentHeader: string;
    inSyncTitle: string;
    corruptTitle: string;
    corruptDesc: string;
    rule1Title: string;
    rule1Subtitle: string;
    rule1Desc: string;
    rule2Title: string;
    rule2Subtitle: string;
    rule2Desc: string;
  };
  chapter5: {
    badge1: string;
    badge2: string;
    readTime: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    shallowTitle: string;
    shallowSubtitle: string;
    shallowBadge: string;
    shallowDesc: string;
    shallowPointer: string;
    objLabTitle: string;
    trapTitle: string;
    spreadTitle: string;
    mutateDirectBtn: string;
    updateSpreadBtn: string;
    arrayLabTitle: string;
    opAdd: string;
    opUpdate: string;
    opRemove: string;
    taskPlaceholder: string;
    addTaskBtn: string;
  };
  chapter6: {
    badge1: string;
    badge2: string;
    readTime: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    tab1Title: string;
    tab1Badge: string;
    tab1Desc: string;
    tab2Title: string;
    tab2Badge: string;
    tab2Desc: string;
    tab3Title: string;
    tab3Badge: string;
    tab3Desc: string;
    tab4Title: string;
    tab4Badge: string;
    tab4Desc: string;
    shoppingTitle: string;
    shoppingItems: string;
    couponPlaceholder: string;
    applyCouponBtn: string;
    subtotal: string;
    discount: string;
    tax: string;
    grandTotal: string;
    derivedStateTitle: string;
    derivedStateDesc: string;
    wizardStep1: string;
    wizardStep2: string;
    wizardStep3: string;
    wizardSubmitted: string;
    wizardSubmittedDesc: string;
    wizardStartOver: string;
    undoRedoTitle: string;
    undoBtn: string;
    redoBtn: string;
    activeColor: string;
    chooseColor: string;
    past: string;
    present: string;
    future: string;
    customHookTitle: string;
    toggleDemo: string;
    counterDemo: string;
  };
  chapter7: {
    badge1: string;
    badge2: string;
    readTime: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    questionOf: string;
    score: string;
    optionSelected: string;
    chooseOption: string;
    checkAnswer: string;
    nextQuestion: string;
    viewResults: string;
    quizCompleted: string;
    finalScore: string;
    certTitle: string;
    certMaster: string;
    certPractitioner: string;
    certMasterDesc: string;
    certPractitionerDesc: string;
    retakeBtn: string;
    openCheatSheetBtn: string;
  };
}> = {
  en: {
    header: {
      brandSubtitle: 'Master React State, Snapshots & Internals Visually',
      badge: 'Interactive Guide',
      progress: 'Progress:',
      renderFlashOn: 'Render Flash: ON',
      renderFlashOff: 'Render Flash: OFF',
      cheatSheet: 'Cheat Sheet',
      moduleSelect: 'Select Module',
      langName: 'English',
    },
    footer: {
      prev: 'Previous',
      next: 'Next',
      complete: 'Complete & Next Module',
      completed: 'Module Completed!',
      reset: 'Reset Progress',
      resetConfirm: 'Reset all your progress?',
      builtWith: 'Built with React 19, TypeScript, Tailwind CSS & Framer Motion.',
    },
    cheatSheetModal: {
      title: 'React useState Pro Cheat Sheet',
      subtitle: 'Essential rules, immutable patterns, and pro-tips for React state',
      ruleNumber: 'Rule #',
      why: 'Why:',
      dont: "DON'T (Anti-pattern)",
      do: 'DO (Recommended)',
      copy: 'Copy',
      copied: 'Copied',
      closeTip: 'Tip: Press ESC or click Close to return to the interactive guide',
      gotIt: 'Got it!',
    },
    chapters: [
      { id: 'why-state', number: 1, title: "The 'Why State?' Dilemma", shortTitle: '1. Why State?', subtitle: 'Mental Models', badge: 'Foundation', color: 'cyan', readTime: '4 min' },
      { id: 'anatomy', number: 2, title: 'Anatomy & Mechanics of useState', shortTitle: '2. Anatomy', subtitle: 'Syntax & Performance', badge: 'Syntax', color: 'purple', readTime: '5 min' },
      { id: 'snapshot-queue', number: 3, title: 'State as a Snapshot & Queueing', shortTitle: '3. Snapshot & Queue', subtitle: 'Core Mental Model', badge: 'Deep Dive', color: 'indigo', readTime: '6 min' },
      { id: 'fiber-hooks', number: 4, title: 'Fiber Nodes & The Linked List', shortTitle: '4. Fiber Internals', subtitle: 'React Internals', badge: 'Under Hood', color: 'purple', readTime: '7 min' },
      { id: 'complex-state', number: 5, title: 'Objects & Arrays Immutability', shortTitle: '5. Complex State', subtitle: 'Immutability Patterns', badge: 'Patterns', color: 'teal', readTime: '6 min' },
      { id: 'interactive-labs', number: 6, title: 'Interactive Real-world Labs', shortTitle: '6. Live Labs', subtitle: 'Hands-On Practice', badge: 'Practice', color: 'emerald', readTime: '4 Labs' },
      { id: 'quiz', number: 7, title: 'Mastery Quiz & Certification', shortTitle: '7. Quiz Arena', subtitle: 'Mastery Certification', badge: 'Challenge', color: 'amber', readTime: '8 Questions' },
    ],
    cheatSheet: [
      {
        category: '1. Updating Based on Previous State',
        rule: 'Use a functional updater whenever the next state depends on the previous state.',
        dontCode: `// ❌ Risky (Uses stale closure snapshot)\nsetCount(count + 1);\nsetCount(count + 1); // Only increments by 1 total!`,
        doCode: `// ✅ Safe (Receives the queued pending state)\nsetCount(prev => prev + 1);\nsetCount(prev => prev + 1); // Correctly increments by 2!`,
        explanation: 'State variables are frozen per render snapshot. Functional updaters queue functions that evaluate consecutively.'
      },
      {
        category: '2. Object State Immutability',
        rule: 'Never mutate state objects in place. Always copy existing fields using spread syntax.',
        dontCode: `// ❌ Will NOT trigger re-render (Same memory reference)\nuser.age = 26;\nsetUser(user);`,
        doCode: `// ✅ Creates fresh object reference\nsetUser(prev => ({\n  ...prev,\n  age: 26\n}));`,
        explanation: 'React performs an Object.is() comparison between previous and next state. If the reference is identical, React skips rendering.'
      },
      {
        category: '3. Array State Operations',
        rule: 'Use pure array methods that return new arrays (e.g., .filter, .map, [...array]).',
        dontCode: `// ❌ Mutates array in place\ntodos.push(newTodo);\ntodos.splice(index, 1);\nsetTodos(todos);`,
        doCode: `// ✅ Adding: [...todos, newTodo]\n// ✅ Removing: todos.filter(t => t.id !== id)\n// ✅ Updating: todos.map(t => t.id === id ? {...t, done: true} : t)\nsetTodos(prev => [...prev, newTodo]);`,
        explanation: 'Never use push(), pop(), splice(), sort(), or reverse() directly on state arrays.'
      },
      {
        category: '4. Expensive Initial State',
        rule: 'Pass a function to useState (lazy initial state) if initial computation is expensive.',
        dontCode: `// ❌ Runs parseHugeJson() on EVERY re-render!\nconst [data, setData] = useState(parseHugeJson(rawString));`,
        doCode: `// ✅ Runs parseHugeJson() ONLY on initial mount!\nconst [data, setData] = useState(() => parseHugeJson(rawString));`,
        explanation: 'Passing a callback tells React to invoke it only during the initial component mount.'
      },
      {
        category: '5. Derived State vs Redundant State',
        rule: 'Avoid redundant state for values that can be computed during render.',
        dontCode: `// ❌ Redundant state requires fragile synchronization\nconst [items, setItems] = useState([]);\nconst [total, setTotal] = useState(0);`,
        doCode: `// ✅ Compute directly during render\nconst [items, setItems] = useState([]);\nconst total = items.reduce((acc, item) => acc + item.price, 0);`,
        explanation: 'Redundant state leads to out-of-sync bugs and wasted render cycles.'
      },
      {
        category: '6. Rules of Hooks',
        rule: 'Only call useState at the top level of React functions, never in loops or conditions.',
        dontCode: `// ❌ Breaks React Fiber hooks linked list ordering\nif (isLoggedIn) {\n  const [session, setSession] = useState(null);\n}`,
        doCode: `// ✅ Call unconditionally at top level\nconst [session, setSession] = useState(null);\n// Handle condition in UI logic instead`,
        explanation: 'React identifies hooks by their execution sequence in the Fiber node memoizedState linked list.'
      }
    ],
    quizQuestions: [
      {
        id: 1,
        title: 'The Triple Increment Trap',
        scenario: 'You have a counter initialized at 0. When the button is clicked, what will be logged and what will the UI display on the next render?',
        codeSnippet: `function Counter() {\n  const [count, setCount] = useState(0);\n\n  function handleClick() {\n    setCount(count + 1);\n    setCount(count + 1);\n    setCount(count + 1);\n    console.log(count);\n  }\n\n  return <button onClick={handleClick}>{count}</button>;\n}`,
        options: [
          { id: 'A', text: 'Logs 0 to console, UI renders 1', explanation: 'Correct! State inside the current render is a fixed snapshot (count is 0 throughout handleClick). setCount(0 + 1) is queued 3 times, resulting in 1. The console.log prints the current snapshot (0).' },
          { id: 'B', text: 'Logs 3 to console, UI renders 3', explanation: 'Incorrect. Calling setCount does NOT immediately mutate count in the current execution scope.' },
          { id: 'C', text: 'Logs 1 to console, UI renders 3', explanation: 'Incorrect. Because direct values setCount(count + 1) were used instead of updaters, all three calls evaluate to setCount(0 + 1).' },
          { id: 'D', text: 'Logs 0 to console, UI renders 3', explanation: 'Incorrect. To reach 3, you must use functional updaters like setCount(c => c + 1).' }
        ],
        correctOptionId: 'A',
        keyTakeaway: 'State variables are constants within each render snapshot. Use updater functions setCount(prev => prev + 1) when new state depends on previous state.'
      },
      {
        id: 2,
        title: 'Delayed State Access & Closures',
        scenario: 'A user clicks the button once, and immediately (before 3 seconds pass) clicks it twice more. What alert message appears after 3 seconds?',
        codeSnippet: `function DelayedAlert() {\n  const [count, setCount] = useState(0);\n\n  function handleAlertClick() {\n    setTimeout(() => {\n      alert('Count is: ' + count);\n    }, 3000);\n  }\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Increment ({count})</button>\n      <button onClick={handleAlertClick}>Show Alert in 3s</button>\n    </div>\n  );\n}`,
        options: [
          { id: 'A', text: 'Alert shows the latest count (2 or 3) because state is reactive', explanation: 'Incorrect. React state does NOT act like a mutable pointer in this closure context.' },
          { id: 'B', text: 'Alert shows the count at the exact moment the button was clicked (e.g. 0)', explanation: 'Correct! The setTimeout closure captures the count variable from the specific render snapshot when handleAlertClick was triggered.' },
          { id: 'C', text: 'Throws a React Hook closure error', explanation: 'Incorrect. This is standard JavaScript closure behavior.' },
          { id: 'D', text: 'Alert shows undefined because component re-rendered', explanation: 'Incorrect. The closed-over variable remains in memory in closure scope.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'Event handlers capture the state values of the specific render snapshot they were created in.'
      },
      {
        id: 3,
        title: 'Object Mutation Mystery',
        scenario: 'Why does clicking the button below NOT update the user\'s name on the screen?',
        codeSnippet: `function UserProfile() {\n  const [user, setUser] = useState({ name: 'Alex', age: 25 });\n\n  function updateName() {\n    user.name = 'Jordan';\n    setUser(user);\n  }\n\n  return <h1>{user.name}</h1>;\n}`,
        options: [
          { id: 'A', text: 'Objects cannot be stored in useState', explanation: 'Incorrect. You can store objects in useState.' },
          { id: 'B', text: 'React uses Object.is() shallow reference comparison; since the object reference did not change, React bails out of re-rendering', explanation: 'Correct! Mutating the existing object in place does not change its reference address in memory. setUser(user) passes the same object reference, so React skips rendering.' },
          { id: 'C', text: 'useState only accepts strings and numbers', explanation: 'Incorrect.' },
          { id: 'D', text: 'The component crashes with a read-only TypeError', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'Always treat React state as immutable. Create a new object copy: setUser({ ...user, name: "Jordan" }).'
      },
      {
        id: 4,
        title: 'Expensive Initial Calculations',
        scenario: 'Which code snippet calculates the initial state efficiently without running createHugeMatrix() on every single re-render?',
        codeSnippet: `// Option 1\nconst [matrix, setMatrix] = useState(createHugeMatrix());\n\n// Option 2\nconst [matrix, setMatrix] = useState(() => createHugeMatrix());`,
        options: [
          { id: 'A', text: 'Option 1 is faster because functions take memory to instantiate', explanation: 'Incorrect. In Option 1, createHugeMatrix() executes every time the component function is called during any re-render.' },
          { id: 'B', text: 'Option 2 (Lazy Initializer) is efficient because React will only invoke the callback on the initial mount', explanation: 'Correct! Passing an initializer function () => compute() tells React to only call it once during initial mount.' },
          { id: 'C', text: 'Both behave identically with zero performance difference', explanation: 'Incorrect.' },
          { id: 'D', text: 'Option 2 causes memory leaks in React 18', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'Use lazy initialization useState(() => compute()) when initial state calculation is CPU or memory intensive.'
      },
      {
        id: 5,
        title: 'Conditional Hook Placement',
        scenario: 'Why is putting useState inside an `if` block strictly prohibited in React?',
        codeSnippet: `function BadComponent({ isVip }) {\n  if (isVip) {\n    const [vipBadge, setVipBadge] = useState('GOLD');\n  }\n  const [points, setPoints] = useState(0);\n\n  return <div>Points: {points}</div>;\n}`,
        options: [
          { id: 'A', text: 'React stores hooks in an indexed linked list per Fiber node; changing the order breaks state-to-hook mapping on subsequent renders', explanation: 'Correct! React relies on the exact invocation order of hooks to match each hook with its stored state in fiber.memoizedState.' },
          { id: 'B', text: 'JavaScript doesn\'t allow functions inside if statements', explanation: 'Incorrect.' },
          { id: 'C', text: 'The variable vipBadge would be garbage collected immediately', explanation: 'Incorrect.' },
          { id: 'D', text: 'Conditional rendering only works with useReducer', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'A',
        keyTakeaway: 'Always call hooks at the top level of your component so hook order remains constant between renders.'
      },
      {
        id: 6,
        title: 'Redundant State Anti-Pattern',
        scenario: 'Which implementation of a Full Name component represents best practice in React?',
        codeSnippet: `// Approach A\nconst [firstName, setFirstName] = useState('Jane');\nconst [lastName, setLastName] = useState('Doe');\nconst [fullName, setFullName] = useState('Jane Doe'); // Synced via useEffect\n\n// Approach B\nconst [firstName, setFirstName] = useState('Jane');\nconst [lastName, setLastName] = useState('Doe');\nconst fullName = firstName + ' ' + lastName; // Derived directly during render`,
        options: [
          { id: 'A', text: 'Approach A is better because fullName is cached in state', explanation: 'Incorrect. Approach A creates redundant state that can easily fall out of sync.' },
          { id: 'B', text: 'Approach B is better: calculate derived values directly during render to prevent redundant state and sync bugs', explanation: 'Correct! If something can be calculated from existing state or props, don\'t put it in state.' },
          { id: 'C', text: 'Both are identical in terms of React lifecycle', explanation: 'Incorrect.' },
          { id: 'D', text: 'Neither; fullName must always be fetched from a backend API', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'Don\'t put redundant or derived values in state. Calculate them on-the-fly during render.'
      },
      {
        id: 7,
        title: 'Array State Modification',
        scenario: 'What is the correct way to delete an item by ID from an array state `todos`?',
        codeSnippet: `const [todos, setTodos] = useState([\n  { id: 1, text: 'Buy milk' },\n  { id: 2, text: 'Clean desk' },\n  { id: 3, text: 'Learn React' }\n]);`,
        options: [
          { id: 'A', text: 'todos.splice(todos.findIndex(t => t.id === 2), 1); setTodos(todos);', explanation: 'Incorrect. splice() mutates the existing array in-place, keeping the exact same array reference.' },
          { id: 'B', text: 'setTodos(todos.filter(t => t.id !== 2));', explanation: 'Correct! Array.prototype.filter returns a brand new array reference without mutating the original state.' },
          { id: 'C', text: 'delete todos[1]; setTodos(todos);', explanation: 'Incorrect.' },
          { id: 'D', text: 'setTodos(todos.pop());', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'Use non-mutating array methods like filter(), map(), concat(), or the spread operator [...items] to produce fresh array copies.'
      },
      {
        id: 8,
        title: 'Automatic Batching in React 18 & 19',
        scenario: 'In React 18+, when both state updates inside a setTimeout or async fetch execute, how many re-renders occur?',
        codeSnippet: `function BatchingDemo() {\n  const [count, setCount] = useState(0);\n  const [flag, setFlag] = useState(false);\n\n  function handleAsyncClick() {\n    setTimeout(() => {\n      setCount(c => c + 1);\n      setFlag(f => !f);\n    }, 1000);\n  }\n\n  return <div>{count} - {String(flag)}</div>;\n}`,
        options: [
          { id: 'A', text: '2 re-renders because timeouts were never batched in any React version', explanation: 'Incorrect. React 18 introduced Automatic Batching across all contexts.' },
          { id: 'B', text: '1 single re-render because React 18+ automatically batches state updates across async callbacks and microtasks', explanation: 'Correct! React 18 automatically batches multiple setState calls into one single render pass for optimal performance.' },
          { id: 'C', text: '0 re-renders because async functions are ignored by React', explanation: 'Incorrect.' },
          { id: 'D', text: 'Infinite re-renders', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'React 18+ features Automatic Batching, combining multiple state updates inside promises, timeouts, and handlers into a single render pass.'
      }
    ],
    chapter1: {
      badge1: 'Module 1',
      badge2: 'Mental Models',
      readTime: '4 min read + live sandbox',
      title: 'The',
      titleAccent: '"Why State?" Dilemma',
      subtitle: 'Every beginner asks: "Why can\'t I just declare let count = 0 and increment it?" Let\'s dissect why normal variables fail in React and why React needs a specialized state engine.',
      prob1Title: 'Problem #1: Scope Oblivion',
      prob1Subtitle: 'Local variables do not persist across renders',
      prob1Badge: 'RAM Stack',
      prob1Desc: 'In React, your component is just a JavaScript function. When React renders your component, it executes that function from line 1 to the end.',
      prob1Box: 'When a JavaScript function returns, its local call-stack variables are garbage collected. Next time the function is called, `let count = 0` runs again from scratch!',
      prob2Title: 'Problem #2: React is Unaware',
      prob2Subtitle: 'Mutations don\'t trigger re-rendering',
      prob2Badge: 'Reconciliation',
      prob2Desc: 'Doing count = count + 1 changes 4 bytes in your computer\'s RAM. However, React does not watch or poll your variables.',
      prob2Box: 'Without calling a React setter function, React has zero idea anything changed, so it will never re-run the component or update the DOM.',
      sandboxTitle: 'Interactive Comparison Sandbox',
      sandboxSubtitle: 'Click both buttons and watch what happens to the UI and memory',
      varTitle: 'Regular JavaScript Variable',
      varBadge: 'Fails in React',
      varUiDisplay: 'Rendered UI Display:',
      varUiStuck: '(UI is stuck at 0 because no re-render was triggered!)',
      varRamValue: 'Actual Value in RAM:',
      varIncrementBtn: 'Increment Variable',
      varRerenderBtn: 'Re-render',
      stateTitle: 'React useState Hook',
      stateBadge: 'The React Way',
      stateUiDisplay: 'Rendered UI Display:',
      stateUiAuto: '(UI updates automatically on every render!)',
      stateFiberValue: 'Stored in React Fiber Node:',
      stateIncrementBtn: 'Increment with setCount()',
      stateResetBtn: 'Reset',
      consoleTrace: 'Console Trace:',
      modelTitle: 'The Fundamental Mental Model',
      modelDesc: 'Think of useState as a persistent vault that lives outside your function component. When your component runs, it asks React: "Give me my stored value from the vault." When you call setCount, you update the vault and ring React\'s doorbell to re-run your component with the updated value!',
    },
    chapter2: {
      badge1: 'Module 2',
      badge2: 'Syntax & Performance',
      readTime: '5 min read + interactive lab',
      title: 'Anatomy of',
      titleAccent: 'useState & Lazy Initialization',
      subtitle: 'Let\'s put the syntax under an interactive microscope to understand what each token does, why array destructuring was chosen, and how lazy initial state prevents hidden performance bottlenecks.',
      microscopeTitle: 'Interactive Syntax Microscope',
      microscopeSubtitle: 'Click any part of the declaration below to inspect its purpose, rules, and internal behavior:',
      destructuringTitle: 'JavaScript Array Destructuring `[ ... ]`',
      destructuringBadge: 'JS Feature',
      destructuringDesc: 'useState returns a 2-element tuple: [currentValue, updateFunction]. Array destructuring lets you name these two variables whatever you want concisely without renaming object properties.',
      stateVarTitle: 'The State Variable (`count`)',
      stateVarBadge: 'Read-only Value',
      stateVarDesc: 'Holds the value of this state for the CURRENT render. It is a constant within this specific function execution. You cannot reassign it directly.',
      setterTitle: 'The Setter / Dispatcher (`setCount`)',
      setterBadge: 'Trigger / Dispatcher',
      setterDesc: 'A function that accepts either a new value or an updater callback. Calling it informs React that state has changed and schedules a re-render.',
      hookTitle: 'The `useState` Hook Identifier',
      hookBadge: 'React API',
      hookDesc: 'A built-in React hook. The "use" prefix tells React and linters that this function must adhere to the Rules of Hooks (top level only).',
      initialTitle: 'Initial State Argument `(initialValue)`',
      initialBadge: 'Mount Argument',
      initialDesc: 'The value state will have on the VERY FIRST render (mount). On subsequent re-renders, React ignores this argument and returns the latest state stored in the Fiber node.',
      whyArrayTitle: 'Why Array Destructuring Instead of Object?',
      whyArraySubtitle: 'The clever ergonomics of React Hook design',
      whyArrayBadge: 'Architecture',
      ifObject: 'If useState returned an Object:',
      ifObjectDesc: 'You would have to alias every single property with : alias.',
      withArray: 'With Array Destructuring (The React Way):',
      withArrayDesc: 'Positional array unpacking gives you complete freedom to name variables intuitively.',
      lazyTitle: 'Lazy Initial State Benchmark Lab',
      lazyBadge: 'Performance Pro-Tip',
      lazyDesc: 'If your initial state requires heavy computation, passing a direct function call useState(compute()) runs that function on every single re-render! Using a lazy callback useState(() => compute()) runs it only once on mount.',
      eagerTitle: 'Eager Initializer (Slow)',
      eagerBadge: 'Re-computes Every Render',
      eagerRenders: 'Total Re-renders:',
      eagerRuns: 'Times Expensive Fn Ran:',
      eagerWarning: '⚠️ Wasting CPU: Called multiple times for 0 reason!',
      eagerBtn: 'Trigger Re-render (Calls compute again!)',
      lazyCardTitle: 'Lazy Initializer (Fast & Optimal)',
      lazyCardBadge: 'Runs Once on Mount',
      lazyRendersLabel: 'Total Re-renders:',
      lazyRunsLabel: 'Times Expensive Fn Ran:',
      lazySuccess: '✨ Perfect: Executed only 1 time during initial mount!',
      lazyBtn: 'Trigger Re-render (Zero CPU wasted!)',
      resetBenchmark: 'Reset Benchmark Numbers',
    },
    chapter3: {
      badge1: 'Module 3',
      badge2: 'Core Mental Model',
      readTime: '6 min read + animated timeline',
      title: 'State as a',
      titleAccent: 'Snapshot & The Queueing Mystery',
      subtitle: 'One of the most common React gotchas: "Why didn\'t my state update immediately inside my event handler?" Let\'s understand how snapshots work and master updater functions.',
      analogyTitle: 'The Snapshot Analogy',
      analogySubtitle: 'Rendering is taking a photograph of your UI at an exact moment',
      analogyBadge: 'Mental Model',
      analogyDesc: 'When React calls your component, it hands it a snapshot of state for that specific render. The props, state variables, and event handlers are all frozen constants inside that function frame.',
      stepperTitle: 'Interactive Queue & Snapshot Stepper',
      directModeBtn: 'Direct: setCount(count + 1)',
      funcModeBtn: 'Functional: setCount(c => c + 1)',
      step1Title: 'Initial Render Snapshot',
      step1Desc: 'Component renders with state snapshot count = 0. In this execution frame, count is a constant (0).',
      step1Badge: 'Render 1 (count = 0)',
      step2Title: 'Event Handler Executes',
      step2DescDirect: 'setCount(count + 1) is called 3 times. Since count is 0 in this snapshot, it evaluates to setCount(0 + 1) three times!',
      step2DescFunc: 'setCount(prev => prev + 1) is called 3 times. React queues 3 updater functions into its internal update buffer.',
      step2Badge: 'Event Triggered',
      step3Title: 'React Processes the State Queue',
      step3DescDirect: 'React inspects the queue: ["set to 1", "set to 1", "set to 1"]. Final calculated state: 1.',
      step3DescFunc: 'React inspects the queue: [0 => 0+1 (1), 1 => 1+1 (2), 2 => 2+1 (3)]. Final calculated state: 3.',
      step3Badge: 'Queue Evaluation',
      step4Title: 'Re-render with New Snapshot',
      step4DescDirect: 'React invokes the component function again with count = 1. DOM is updated to 1.',
      step4DescFunc: 'React invokes the component function again with count = 3. DOM is updated to 3.',
      step4Badge: 'Render 2 (Committed)',
      stepOf: 'Step',
      queueLabel: 'React Internal Update Queue:',
      queueEmpty: 'Empty []',
      queuePending: 'Pending Evaluation',
      queueing: 'Queueing...',
      noUpdatesQueued: 'No updates queued yet.',
      resetTimeline: 'Reset Timeline',
      nextStep: 'Next Step',
      startOver: 'Start Over',
      liveComparisonTitle: 'Hands-on Live Comparison',
      directTitle: 'Direct 3x Update',
      directBadge: 'Increments by 1',
      directBtn: 'Run 3x setCount(count + 1)',
      funcTitle: 'Functional Updater 3x',
      funcBadge: 'Increments by 3',
      funcBtn: 'Run 3x setCount(prev => prev + 1)',
    },
    chapter4: {
      badge1: 'Module 4',
      badge2: 'React Internals',
      readTime: '7 min read + Fiber simulator',
      title: 'Under the Hood:',
      titleAccent: 'React Fiber & The Hooks Linked List',
      subtitle: 'Ever wondered how React knows which state belongs to which useState call without passing unique string keys? Let\'s dive into the internal Fiber Node linked list.',
      fiberTitle: 'How React Stores State in Memory',
      fiberSubtitle: 'The fiber.memoizedState Singly Linked List',
      fiberBadge: 'Fiber Architecture',
      fiberDesc: 'When React renders a component, it creates a Fiber Node (a plain JavaScript object tracking component metadata, DOM nodes, and state). All hooks are stored in a linear singly-linked list referenced by fiber.memoizedState.',
      linkedListHeader: 'fiber.memoizedState (Hooks Linked List Structure):',
      hook1Label: 'Hook #1 (useState)',
      hook2Label: 'Hook #2 (useState)',
      hook3Label: 'Hook #3 (useState)',
      noticeNoKeys: 'Notice that React stores NO variable names. It only knows: "1st hook call gets Hook #1, 2nd hook call gets Hook #2".',
      simTitle: '"Break the Rules of Hooks" Simulator',
      simBadge: 'Interactive Experiment',
      simDesc: 'What happens when a hook is wrapped inside an if (condition) block? Toggle the switch below to simulate what happens during the next render!',
      illegalCode: 'Illegal Component Code:',
      alignmentHeader: 'Fiber Node State Pointer Alignment:',
      inSyncTitle: 'Render 1 (isVip = true): Pointers In Sync',
      corruptTitle: 'Render 2 (isVip = false): STATE POINTER CORRUPTION!',
      corruptDesc: 'Hook #1 was skipped! Hook pointers mismatched and React crashed with invalid hook count.',
      rule1Title: 'Rule #1: Top Level Only',
      rule1Subtitle: 'Never call hooks inside loops, conditions, or nested functions',
      rule1Desc: 'By following this rule, you guarantee that hooks are called in the exact same sequence on every single render. This allows React to correctly match internal state.',
      rule2Title: 'Rule #2: React Functions Only',
      rule2Subtitle: 'Only call hooks from React function components or custom hooks',
      rule2Desc: 'Do not call hooks from regular JavaScript functions. Hooks require an active React Fiber rendering context.',
    },
    chapter5: {
      badge1: 'Module 5',
      badge2: 'Immutability Patterns',
      readTime: '6 min read + interactive lab',
      title: 'Managing Complex State:',
      titleAccent: 'Objects & Arrays',
      subtitle: 'In JavaScript, objects and arrays are passed by reference. Mutating an object in place keeps the same memory pointer, tricking React into thinking nothing changed! Let\'s master clean immutable patterns.',
      shallowTitle: 'Why Mutation Fails: Object.is(prev, next)',
      shallowSubtitle: 'React compares memory references, NOT deep values',
      shallowBadge: 'Shallow Equality',
      shallowDesc: 'When you call setUser(nextUser), React performs a shallow equality check. If you mutated properties on the existing object, the memory pointer did not change and React skips rendering!',
      shallowPointer: 'Object.is(previousState, nextState) === true ? Bailout_No_Render : Schedule_Render',
      objLabTitle: 'Interactive Object Mutation vs Immutability Lab',
      trapTitle: '❌ The Mutation Trap (Broken):',
      spreadTitle: '✅ The Spread Pattern (Correct):',
      mutateDirectBtn: 'Mutate Directly (user.name = ...)',
      updateSpreadBtn: 'Update via Spread (...prev)',
      arrayLabTitle: 'Interactive Array Operations Lab',
      opAdd: '1. Adding:',
      opUpdate: '2. Updating:',
      opRemove: '3. Removing:',
      taskPlaceholder: 'Type a new task to add immutably...',
      addTaskBtn: 'Add [...prev, item]',
    },
    chapter6: {
      badge1: 'Module 6',
      badge2: 'Hands-On Practice',
      readTime: '4 Interactive Live Sandboxes',
      title: 'Interactive',
      titleAccent: 'Real-World Labs',
      subtitle: 'Put state theory into practice. Explore 4 production-grade state patterns used in modern web applications.',
      tab1Title: '1. Shopping Cart & Derived State',
      tab1Badge: 'Derived State',
      tab1Desc: 'Learn how to calculate totals and discounts without creating redundant state.',
      tab2Title: '2. Multi-Step Form Wizard',
      tab2Badge: 'Consolidated State',
      tab2Desc: 'Manage complex multi-field form data with a single state object.',
      tab3Title: '3. Undo / Redo Time Machine',
      tab3Badge: 'State Stacks',
      tab3Desc: 'Implement past, present, and future state history arrays.',
      tab4Title: '4. Custom Hook Encapsulation',
      tab4Badge: 'Reusable Logic',
      tab4Desc: 'Encapsulate state logic into useToggle and useCounter custom hooks.',
      shoppingTitle: 'Your Cart Items',
      shoppingItems: 'items',
      couponPlaceholder: 'Promo Code (Try REACT20)',
      applyCouponBtn: 'Apply',
      subtotal: 'Subtotal:',
      discount: 'Discount',
      tax: 'Estimated Tax (8%):',
      grandTotal: 'Grand Total:',
      derivedStateTitle: 'Key Lesson: Avoid Redundant State',
      derivedStateDesc: 'If a value can be computed from existing state or props during render, compute it directly on the fly!',
      wizardStep1: 'Step 1: Account Information',
      wizardStep2: 'Step 2: Professional Profile',
      wizardStep3: 'Step 3: Review & Submit',
      wizardSubmitted: 'Form Successfully Submitted!',
      wizardSubmittedDesc: 'State was preserved across all 3 steps in a single cohesive object.',
      wizardStartOver: 'Start Over',
      undoRedoTitle: 'Interactive State Time Machine',
      undoBtn: 'Undo',
      redoBtn: 'Redo',
      activeColor: 'Active State:',
      chooseColor: 'Choose Color (Creates New State Snapshot):',
      past: 'PAST',
      present: 'PRESENT',
      future: 'FUTURE',
      customHookTitle: 'Custom Hook Encapsulation',
      toggleDemo: '1. useToggle() Hook Demo',
      counterDemo: '2. useCounter() Hook Demo',
    },
    chapter7: {
      badge1: 'Module 7',
      badge2: 'Mastery Certification',
      readTime: '8 Real-World Interview Questions',
      title: 'Mastery',
      titleAccent: 'Quiz & Certification',
      subtitle: 'Test your deep understanding of closures, snapshots, batching, Fiber pointers, and immutable patterns.',
      questionOf: 'Question',
      score: 'Score:',
      optionSelected: 'Option selected',
      chooseOption: 'Choose an option to continue',
      checkAnswer: 'Check Answer',
      nextQuestion: 'Next Question',
      viewResults: 'View Final Results',
      quizCompleted: 'Quiz Completed!',
      finalScore: 'You scored',
      certTitle: 'React State Certification',
      certMaster: 'Master Certified',
      certPractitioner: 'Practitioner',
      certMasterDesc: 'Outstanding work! You have proven a deep and rigorous understanding of React state, snapshots, Fiber linked lists, and immutability.',
      certPractitionerDesc: 'Great effort! Review the cheat sheet and re-take the tricky questions to achieve 100% mastery.',
      retakeBtn: 'Retake Quiz',
      openCheatSheetBtn: 'Open Cheat Sheet',
    }
  },
  fr: {
    header: {
      brandSubtitle: 'Maîtrisez l\'état React, les snapshots et le fonctionnement interne',
      badge: 'Guide Interactif',
      progress: 'Progression :',
      renderFlashOn: 'Flash Rendu : ACTIVÉ',
      renderFlashOff: 'Flash Rendu : DÉSACTIVÉ',
      cheatSheet: 'Aide-mémoire',
      moduleSelect: 'Sélectionner un module',
      langName: 'Français',
    },
    footer: {
      prev: 'Précédent',
      next: 'Suivant',
      complete: 'Valider et Passer au suivant',
      completed: 'Module Terminé !',
      reset: 'Réinitialiser la progression',
      resetConfirm: 'Voulez-vous réinitialiser toute votre progression ?',
      builtWith: 'Conçu avec React 19, TypeScript, Tailwind CSS & Framer Motion.',
    },
    cheatSheetModal: {
      title: 'Aide-Mémoire Pro React useState',
      subtitle: 'Règles fondamentales, motifs immuables et astuces pour l\'état React',
      ruleNumber: 'Règle n°',
      why: 'Pourquoi :',
      dont: 'À ÉVITER (Mauvaise pratique)',
      do: 'À FAIRE (Recommandé)',
      copy: 'Copier',
      copied: 'Copié',
      closeTip: 'Astuce : Appuyez sur Échap ou cliquez sur Fermer pour revenir',
      gotIt: 'Compris !',
    },
    chapters: [
      { id: 'why-state', number: 1, title: "Le dilemme 'Pourquoi un State ?'", shortTitle: '1. Pourquoi State ?', subtitle: 'Modèles mentaux', badge: 'Fondation', color: 'cyan', readTime: '4 min' },
      { id: 'anatomy', number: 2, title: 'Anatomie & Mécanismes de useState', shortTitle: '2. Anatomie', subtitle: 'Syntaxe & Performance', badge: 'Syntaxe', color: 'purple', readTime: '5 min' },
      { id: 'snapshot-queue', number: 3, title: 'L\'État comme Instantané (Snapshot) & File d\'attente', shortTitle: '3. Snapshot & Queue', subtitle: 'Modèle mental clé', badge: 'Approfondi', color: 'indigo', readTime: '6 min' },
      { id: 'fiber-hooks', number: 4, title: 'Noeuds Fiber & Liste Chaînée des Hooks', shortTitle: '4. Internes Fiber', subtitle: 'Internes de React', badge: 'Sous le capot', color: 'purple', readTime: '7 min' },
      { id: 'complex-state', number: 5, title: 'Immuabilité des Objets & Tableaux', shortTitle: '5. État complexe', subtitle: 'Motifs d\'immuabilité', badge: 'Patrons', color: 'teal', readTime: '6 min' },
      { id: 'interactive-labs', number: 6, title: 'Laboratoires Interactifs Réels', shortTitle: '6. Ateliers', subtitle: 'Pratique concrète', badge: 'Pratique', color: 'emerald', readTime: '4 Ateliers' },
      { id: 'quiz', number: 7, title: 'Quiz de Maîtrise & Certification', shortTitle: '7. Arène Quiz', subtitle: 'Certification', badge: 'Défi', color: 'amber', readTime: '8 Questions' },
    ],
    cheatSheet: [
      {
        category: '1. Mise à jour basée sur l\'état précédent',
        rule: 'Utilisez toujours une fonction de mise à jour (updater) quand le nouvel état dépend du précédent.',
        dontCode: `// ❌ Risqué (Utilise un instantané figé)\nsetCount(count + 1);\nsetCount(count + 1); // N'incrémente que de 1 au total !`,
        doCode: `// ✅ Sûr (Reçoit l'état en attente)\nsetCount(prev => prev + 1);\nsetCount(prev => prev + 1); // Incrémente correctement de 2 !`,
        explanation: 'Les variables d\'état sont figées par instantané de rendu. Les fonctions d\'actualisation s\'exécutent de façon séquentielle.'
      },
      {
        category: '2. Immuabilité des Objets',
        rule: 'Ne mutez jamais les objets d\'état directement. Copiez toujours les champs existants avec la syntaxe de décomposition (...).',
        dontCode: `// ❌ Ne déclenchera AUCUN re-rendu (Même référence mémoire)\nuser.age = 26;\nsetUser(user);`,
        doCode: `// ✅ Crée une nouvelle référence d'objet\nsetUser(prev => ({\n  ...prev,\n  age: 26\n}));`,
        explanation: 'React utilise la comparaison Object.is(). Si la référence mémoire est identique, React annule le rendu.'
      },
      {
        category: '3. Opérations sur les Tableaux',
        rule: 'Utilisez des méthodes pures renvoyant un nouveau tableau (.filter, .map, [...array]).',
        dontCode: `// ❌ Mute le tableau sur place\ntodos.push(newTodo);\ntodos.splice(index, 1);\nsetTodos(todos);`,
        doCode: `// ✅ Ajout : [...todos, newTodo]\n// ✅ Suppression : todos.filter(t => t.id !== id)\n// ✅ Modification : todos.map(t => t.id === id ? {...t, done: true} : t)\nsetTodos(prev => [...prev, newTodo]);`,
        explanation: 'N\'utilisez jamais push(), pop(), splice(), sort() ou reverse() directement sur un tableau d\'état.'
      },
      {
        category: '4. Calcul Initial Coûteux (Lazy Initial State)',
        rule: 'Passez une fonction à useState si le calcul initial est lourd (lecture localStorage, parsing JSON).',
        dontCode: `// ❌ Exécute parseHugeJson() à CHAQUE re-rendu !\nconst [data, setData] = useState(parseHugeJson(rawString));`,
        doCode: `// ✅ Exécute parseHugeJson() UNIQUEMENT au montage initial !\nconst [data, setData] = useState(() => parseHugeJson(rawString));`,
        explanation: 'Passer un callback indique à React de ne l\'appeler qu\'une seule fois lors du premier montage.'
      },
      {
        category: '5. État Dérivé vs État Redondant',
        rule: 'Évitez les états redondants qui peuvent être calculés directement lors du rendu.',
        dontCode: `// ❌ L'état redondant nécessite une synchronisation fragile\nconst [items, setItems] = useState([]);\nconst [total, setTotal] = useState(0);`,
        doCode: `// ✅ Calculé directement pendant le rendu\nconst [items, setItems] = useState([]);\nconst total = items.reduce((acc, item) => acc + item.price, 0);`,
        explanation: 'Les états redondants causent des bugs de désynchronisation et des rendus inutiles.'
      },
      {
        category: '6. Règles des Hooks',
        rule: 'N\'appelez useState qu\'au niveau supérieur de vos fonctions React, jamais dans des conditions ou boucles.',
        dontCode: `// ❌ Casse l'ordre de la liste chaînée Fiber\nif (isLoggedIn) {\n  const [session, setSession] = useState(null);\n}`,
        doCode: `// ✅ Appel inconditionnel au niveau supérieur\nconst [session, setSession] = useState(null);\n// Gérez la condition dans le rendu JSX`,
        explanation: 'React identifie les hooks uniquement par leur ordre d\'exécution séquentiel dans le noeud Fiber.'
      }
    ],
    quizQuestions: [
      {
        id: 1,
        title: 'Le Piège du Triple Incrément',
        scenario: 'Vous avez un compteur initialisé à 0. Lorsque le bouton est cliqué, qu\'affiche la console et quel nombre sera rendu à l\'écran ?',
        codeSnippet: `function Counter() {\n  const [count, setCount] = useState(0);\n\n  function handleClick() {\n    setCount(count + 1);\n    setCount(count + 1);\n    setCount(count + 1);\n    console.log(count);\n  }\n\n  return <button onClick={handleClick}>{count}</button>;\n}`,
        options: [
          { id: 'A', text: 'Affiche 0 dans la console, l\'UI affiche 1', explanation: 'Correct ! L\'état dans le rendu actuel est un instantané figé (count vaut 0 durant tout handleClick). setCount(0 + 1) est mis en file 3 fois, aboutissant à 1. La console affiche l\'instantané actuel (0).' },
          { id: 'B', text: 'Affiche 3 dans la console, l\'UI affiche 3', explanation: 'Incorrect. L\'appel à setCount ne mute pas immédiatement count dans la portée locale.' },
          { id: 'C', text: 'Affiche 1 dans la console, l\'UI affiche 3', explanation: 'Incorrect. Comme des valeurs directes setCount(count + 1) ont été utilisées, chaque appel évalue setCount(0 + 1).' },
          { id: 'D', text: 'Affiche 0 dans la console, l\'UI affiche 3', explanation: 'Incorrect. Pour obtenir 3, il faut utiliser des updaters comme setCount(c => c + 1).' }
        ],
        correctOptionId: 'A',
        keyTakeaway: 'Les variables d\'état sont constantes au sein d\'un instantané de rendu. Utilisez setCount(prev => prev + 1) quand le nouvel état dépend du précédent.'
      },
      {
        id: 2,
        title: 'Accès différé à l\'état & Fermetures (Closures)',
        scenario: 'Un utilisateur clique une fois sur "Show Alert in 3s", puis immédiatement clique deux fois sur "Increment". Quel message apparaît après 3 secondes ?',
        codeSnippet: `function DelayedAlert() {\n  const [count, setCount] = useState(0);\n\n  function handleAlertClick() {\n    setTimeout(() => {\n      alert('Count is: ' + count);\n    }, 3000);\n  }\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Increment ({count})</button>\n      <button onClick={handleAlertClick}>Show Alert in 3s</button>\n    </div>\n  );\n}`,
        options: [
          { id: 'A', text: 'L\'alerte affiche le dernier count (2 ou 3) car le state est réactif', explanation: 'Incorrect. L\'état React ne fonctionne pas comme un pointeur mutable dans ce contexte de closure.' },
          { id: 'B', text: 'L\'alerte affiche la valeur au moment exact du clic (ex: 0)', explanation: 'Correct ! La closure du setTimeout capture la variable count de l\'instantané spécifique au moment où handleAlertClick a été déclenché.' },
          { id: 'C', text: 'Provoque une erreur de closure React', explanation: 'Incorrect.' },
          { id: 'D', text: 'L\'alerte affiche undefined car le composant a été re-rendu', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'Les gestionnaires d\'événements capturent les valeurs d\'état de l\'instantané de rendu dans lequel ils ont été créés.'
      },
      {
        id: 3,
        title: 'Le Mystère de la Mutation d\'Objet',
        scenario: 'Pourquoi le clic sur le bouton ci-dessous ne met-il PAS à jour le nom de l\'utilisateur à l\'écran ?',
        codeSnippet: `function UserProfile() {\n  const [user, setUser] = useState({ name: 'Alex', age: 25 });\n\n  function updateName() {\n    user.name = 'Jordan';\n    setUser(user);\n  }\n\n  return <h1>{user.name}</h1>;\n}`,
        options: [
          { id: 'A', text: 'Les objets ne peuvent pas être stockés dans useState', explanation: 'Incorrect.' },
          { id: 'B', text: 'React effectue une comparaison superficielle Object.is() ; comme la référence d\'objet n\'a pas changé, React annule le rendu', explanation: 'Correct ! Muter l\'objet existant ne change pas son adresse mémoire. setUser(user) passe la même référence, donc React ignore la mise à jour.' },
          { id: 'C', text: 'useState n\'accepte que les nombres et les chaînes', explanation: 'Incorrect.' },
          { id: 'D', text: 'Le composant plante avec une TypeError', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'Traitez toujours l\'état comme immuable. Créez un nouvel objet : setUser({ ...user, name: "Jordan" }).'
      },
      {
        id: 4,
        title: 'Calculs Initiaux Coûteux',
        scenario: 'Quel extrait initialise l\'état efficacement sans réexécuter createHugeMatrix() à chaque re-rendu ?',
        codeSnippet: `// Option 1\nconst [matrix, setMatrix] = useState(createHugeMatrix());\n\n// Option 2\nconst [matrix, setMatrix] = useState(() => createHugeMatrix());`,
        options: [
          { id: 'A', text: 'Option 1 est plus rapide', explanation: 'Incorrect.' },
          { id: 'B', text: 'Option 2 (Initialisation paresseuse) est optimale car la fonction n\'est invoquée qu\'au premier montage', explanation: 'Correct ! Passer une fonction () => compute() indique à React de ne l\'appeler qu\'une seule fois.' },
          { id: 'C', text: 'Les deux sont strictement identiques', explanation: 'Incorrect.' },
          { id: 'D', text: 'Option 2 cause des fuites de mémoire', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'Utilisez useState(() => compute()) lorsque l\'initialisation nécessite un calcul lourd.'
      },
      {
        id: 5,
        title: 'Appel Conditionnel de Hooks',
        scenario: 'Pourquoi est-il strictement interdit d\'appeler useState dans un bloc `if` ?',
        codeSnippet: `function BadComponent({ isVip }) {\n  if (isVip) {\n    const [vipBadge, setVipBadge] = useState('GOLD');\n  }\n  const [points, setPoints] = useState(0);\n\n  return <div>Points: {points}</div>;\n}`,
        options: [
          { id: 'A', text: 'React stocke les hooks dans une liste chaînée indexée sur le Fiber ; changer l\'ordre corrompt l\'association état-hook', explanation: 'Correct ! React dépend strictement de l\'ordre séquentiel d\'appel des hooks pour les associer à leur état stocké.' },
          { id: 'B', text: 'JavaScript n\'autorise pas les fonctions dans les if', explanation: 'Incorrect.' },
          { id: 'C', text: 'La variable vipBadge serait supprimée par le garbage collector', explanation: 'Incorrect.' },
          { id: 'D', text: 'Le rendu conditionnel ne marche qu\'avec useReducer', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'A',
        keyTakeaway: 'Appelez toujours vos hooks au niveau supérieur pour maintenir un ordre constant d\'un rendu à l\'autre.'
      },
      {
        id: 6,
        title: 'Anti-Patron d\'État Redondant',
        scenario: 'Quelle approche pour un composant "Nom Complet" représente la bonne pratique React ?',
        codeSnippet: `// Approche A\nconst [firstName, setFirstName] = useState('Jane');\nconst [lastName, setLastName] = useState('Doe');\nconst [fullName, setFullName] = useState('Jane Doe'); // Synchronisé par useEffect\n\n// Approche B\nconst [firstName, setFirstName] = useState('Jane');\nconst [lastName, setLastName] = useState('Doe');\nconst fullName = firstName + ' ' + lastName; // Dérivé directement au rendu`,
        options: [
          { id: 'A', text: 'L\'approche A est meilleure', explanation: 'Incorrect.' },
          { id: 'B', text: 'L\'approche B est meilleure : calculer les valeurs dérivées directement pendant le rendu évite les désynchronisations', explanation: 'Correct ! Si une valeur peut être calculée à partir de props ou states existants, ne la mettez pas dans un état.' },
          { id: 'C', text: 'Les deux sont équivalentes', explanation: 'Incorrect.' },
          { id: 'D', text: 'Aucune des deux', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'Ne stockez pas de valeurs dérivées dans le state. Calculez-les à la volée pendant le rendu.'
      },
      {
        id: 7,
        title: 'Modification Immuable de Tableaux',
        scenario: 'Quelle est la méthode correcte pour supprimer un élément par son ID dans un tableau d\'état `todos` ?',
        codeSnippet: `const [todos, setTodos] = useState([\n  { id: 1, text: 'Buy milk' },\n  { id: 2, text: 'Clean desk' },\n  { id: 3, text: 'Learn React' }\n]);`,
        options: [
          { id: 'A', text: 'todos.splice(todos.findIndex(t => t.id === 2), 1); setTodos(todos);', explanation: 'Incorrect. splice() mute le tableau en place.' },
          { id: 'B', text: 'setTodos(todos.filter(t => t.id !== 2));', explanation: 'Correct ! .filter() renvoie une toute nouvelle référence de tableau sans muter l\'état d\'origine.' },
          { id: 'C', text: 'delete todos[1]; setTodos(todos);', explanation: 'Incorrect.' },
          { id: 'D', text: 'setTodos(todos.pop());', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'Utilisez des méthodes non mutatives comme filter(), map() ou la décomposition [...items].'
      },
      {
        id: 8,
        title: 'Regroupement Automatique (Batching) dans React 18 & 19',
        scenario: 'Dans React 18+, quand deux mises à jour d\'état s\'exécutent dans un setTimeout, combien de re-rendus ont lieu ?',
        codeSnippet: `function BatchingDemo() {\n  const [count, setCount] = useState(0);\n  const [flag, setFlag] = useState(false);\n\n  function handleAsyncClick() {\n    setTimeout(() => {\n      setCount(c => c + 1);\n      setFlag(f => !f);\n    }, 1000);\n  }\n\n  return <div>{count} - {String(flag)}</div>;\n}`,
        options: [
          { id: 'A', text: '2 re-rendus', explanation: 'Incorrect.' },
          { id: 'B', text: '1 seul re-rendu grâce au regroupement automatique (Automatic Batching) de React 18+', explanation: 'Correct ! React 18+ regroupe automatiquement les mises à jour asynchrones en un seul passage de rendu.' },
          { id: 'C', text: '0 re-rendu', explanation: 'Incorrect.' },
          { id: 'D', text: 'Rendus infinis', explanation: 'Incorrect.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'React 18+ regroupe automatiquement les mises à jour au sein des promesses et timeouts.'
      }
    ],
    chapter1: {
      badge1: 'Module 1',
      badge2: 'Modèles Mentaux',
      readTime: 'Lecture 4 min + atelier live',
      title: 'Le dilemme',
      titleAccent: '"Pourquoi un State ?"',
      subtitle: 'Chaque débutant demande : "Pourquoi ne pas simplement déclarer let count = 0 et l\'incrémenter ?" Comprenons pourquoi les variables classiques échouent dans React.',
      prob1Title: 'Problème n°1 : Perte de portée',
      prob1Subtitle: 'Les variables locales ne persistent pas entre les rendus',
      prob1Badge: 'Pile RAM',
      prob1Desc: 'Dans React, votre composant est une simple fonction JavaScript. À chaque rendu, React réexécute cette fonction de la ligne 1 à la fin.',
      prob1Box: 'Dès que la fonction retourne, ses variables locales sont nettoyées. Au prochain rendu, `let count = 0` repart de zéro !',
      prob2Title: 'Problème n°2 : React n\'est pas averti',
      prob2Subtitle: 'Les mutations ne déclenchent aucun re-rendu',
      prob2Badge: 'Réconciliation',
      prob2Desc: 'Faire count = count + 1 modifie 4 octets en RAM. Mais React n\'observe pas vos variables.',
      prob2Box: 'Sans appeler la fonction setter de React, React ignore tout du changement et ne mettra jamais à jour le DOM.',
      sandboxTitle: 'Atelier de Comparaison Interactif',
      sandboxSubtitle: 'Cliquez sur les boutons et observez l\'interface et la mémoire',
      varTitle: 'Variable JavaScript Classique',
      varBadge: 'Échoue dans React',
      varUiDisplay: 'Affichage de l\'UI :',
      varUiStuck: '(L\'UI reste bloquée à 0 car aucun rendu n\'a été déclenché !)',
      varRamValue: 'Valeur réelle en RAM :',
      varIncrementBtn: 'Incrémenter la Variable',
      varRerenderBtn: 'Re-rendre',
      stateTitle: 'Hook React useState',
      stateBadge: 'La méthode React',
      stateUiDisplay: 'Affichage de l\'UI :',
      stateUiAuto: '(L\'UI se met à jour automatiquement à chaque rendu !)',
      stateFiberValue: 'Stocké dans le noeud Fiber :',
      stateIncrementBtn: 'Incrémenter avec setCount()',
      stateResetBtn: 'Réinitialiser',
      consoleTrace: 'Traces Console :',
      modelTitle: 'Le Modèle Mental Fondamental',
      modelDesc: 'Voyez useState comme un coffre-fort externe. Quand votre composant s\'exécute, il demande à React : "Donne-moi ma valeur actuelle". Quand vous appelez setCount, vous mettez à jour le coffre et sonnez à la porte pour que React réexécute le composant !',
    },
    chapter2: {
      badge1: 'Module 2',
      badge2: 'Syntaxe & Performance',
      readTime: 'Lecture 5 min + atelier interactif',
      title: 'Anatomie de',
      titleAccent: 'useState & Initialisation Paresseuse',
      subtitle: 'Examinons la syntaxe sous un microscope interactif pour comprendre chaque jeton, le choix de la décomposition de tableau et l\'initialisation paresseuse.',
      microscopeTitle: 'Microscope de Syntaxe Interactif',
      microscopeSubtitle: 'Cliquez sur chaque jeton ci-dessous pour inspecter son rôle et ses règles :',
      destructuringTitle: 'Décomposition de Tableau JavaScript `[ ... ]`',
      destructuringBadge: 'Fonctionnalité JS',
      destructuringDesc: 'useState renvoie un tuple de 2 éléments : [valeurActuelle, fonctionMiseAJour]. La décomposition permet de nommer librement ces deux variables.',
      stateVarTitle: 'La Variable d\'État (`count`)',
      stateVarBadge: 'Valeur en lecture seule',
      stateVarDesc: 'Contient la valeur de l\'état pour le rendu ACTUEL. C\'est une constante dans cette exécution de fonction.',
      setterTitle: 'Le Setter / Dispatcher (`setCount`)',
      setterBadge: 'Déclencheur / Dispatcher',
      setterDesc: 'Fonction acceptant une nouvelle valeur ou un callback updater. L\'appeler informe React de planifier un re-rendu.',
      hookTitle: 'L\'Identifiant du Hook `useState`',
      hookBadge: 'API React',
      hookDesc: 'Le préfixe "use" signale à React et aux linters que cette fonction doit respecter les Règles des Hooks.',
      initialTitle: 'L\'Argument d\'État Initial `(initialValue)`',
      initialBadge: 'Argument de montage',
      initialDesc: 'La valeur attribuée UNIQUEMENT lors du tout premier rendu (montage). Ignorée lors des rendus suivants.',
      whyArrayTitle: 'Pourquoi un Tableau plutôt qu\'un Objet ?',
      whyArraySubtitle: 'L\'ergonomie ingénieuse des Hooks React',
      whyArrayBadge: 'Architecture',
      ifObject: 'Si useState renvoyait un Objet :',
      ifObjectDesc: 'Il faudrait renommer chaque propriété avec la syntaxe verbeuse : alias.',
      withArray: 'Avec la Décomposition de Tableau (React) :',
      withArrayDesc: 'Le déballage positionnel offre une liberté totale de nommage.',
      lazyTitle: 'Laboratoire d\'Initialisation Paresseuse (Lazy Init)',
      lazyBadge: 'Astuce Performance',
      lazyDesc: 'Si l\'état initial demande un calcul lourd, useState(compute()) s\'exécute à chaque rendu ! En passant useState(() => compute()), React ne l\'exécute qu\'une fois au montage.',
      eagerTitle: 'Initialiseur Immédiat (Lent)',
      eagerBadge: 'Recalcule à chaque rendu',
      eagerRenders: 'Total des Re-rendus :',
      eagerRuns: 'Exécutions de la fonction lourde :',
      eagerWarning: '⚠️ Gaspillage CPU : Exécutée plusieurs fois pour rien !',
      eagerBtn: 'Déclencher Re-rendu (Rappelle la fonction lourde !)',
      lazyCardTitle: 'Initialiseur Paresseux (Rapide & Optimal)',
      lazyCardBadge: 'Une seule fois au montage',
      lazyRendersLabel: 'Total des Re-rendus :',
      lazyRunsLabel: 'Exécutions de la fonction lourde :',
      lazySuccess: '✨ Parfait : Exécutée 1 seule fois lors du montage initial !',
      lazyBtn: 'Déclencher Re-rendu (Zéro CPU gaspillé !)',
      resetBenchmark: 'Réinitialiser le Benchmark',
    },
    chapter3: {
      badge1: 'Module 3',
      badge2: 'Modèle Mental Clé',
      readTime: 'Lecture 6 min + chronologie animée',
      title: 'L\'État comme',
      titleAccent: 'Instantané (Snapshot) & File d\'attente',
      subtitle: 'Pourquoi l\'état ne change-t-il pas immédiatement dans un gestionnaire d\'événements ? Maîtrisez les instantanés et les fonctions d\'actualisation.',
      analogyTitle: 'L\'Analogie de la Photo (Snapshot)',
      analogySubtitle: 'Rendre, c\'est prendre un cliché figé de votre interface',
      analogyBadge: 'Modèle Mental',
      analogyDesc: 'Quand React appelle votre composant, il lui remet un instantané de l\'état. Les variables et gestionnaires sont des constantes figées dans cette invocation.',
      stepperTitle: 'Simulateur Interactif de File & Instantanés',
      directModeBtn: 'Direct : setCount(count + 1)',
      funcModeBtn: 'Fonctionnel : setCount(c => c + 1)',
      step1Title: 'Instantané du Rendu Initial',
      step1Desc: 'Le composant rend avec count = 0. Dans ce cadre d\'exécution, count est figé à 0.',
      step1Badge: 'Rendu 1 (count = 0)',
      step2Title: 'Exécution du Gestionnaire d\'Événement',
      step2DescDirect: 'setCount(count + 1) est appelé 3 fois. Comme count vaut 0, cela équivaut à setCount(0 + 1) 3 fois !',
      step2DescFunc: 'setCount(prev => prev + 1) est appelé 3 fois. React enregistre 3 fonctions dans sa file d\'attente.',
      step2Badge: 'Événement Déclenché',
      step3Title: 'React Évalue la File d\'Attente',
      step3DescDirect: 'React inspecte la file : ["mettre à 1", "mettre à 1", "mettre à 1"]. Résultat final : 1.',
      step3DescFunc: 'React inspecte la file : [0 => 1, 1 => 2, 2 => 3]. Résultat final : 3.',
      step3Badge: 'Évaluation File',
      step4Title: 'Re-rendu avec le Nouvel Instantané',
      step4DescDirect: 'React réexécute le composant avec count = 1. DOM mis à jour à 1.',
      step4DescFunc: 'React réexécute le composant avec count = 3. DOM mis à jour à 3.',
      step4Badge: 'Rendu 2 (Validé)',
      stepOf: 'Étape',
      queueLabel: 'File d\'attente interne React :',
      queueEmpty: 'Vide []',
      queuePending: 'Évaluation en cours',
      queueing: 'Enregistrement...',
      noUpdatesQueued: 'Aucune mise à jour en attente.',
      resetTimeline: 'Réinitialiser la Chronologie',
      nextStep: 'Étape Suivante',
      startOver: 'Recommencer',
      liveComparisonTitle: 'Comparaison Pratique Directe',
      directTitle: 'Mise à Jour Directe 3x',
      directBadge: 'Incrémente de 1',
      directBtn: 'Lancer 3x setCount(count + 1)',
      funcTitle: 'Updater Fonctionnel 3x',
      funcBadge: 'Incrémente de 3',
      funcBtn: 'Lancer 3x setCount(prev => prev + 1)',
    },
    chapter4: {
      badge1: 'Module 4',
      badge2: 'Internes de React',
      readTime: 'Lecture 7 min + simulateur Fiber',
      title: 'Sous le capot :',
      titleAccent: 'React Fiber & Liste Chaînée des Hooks',
      subtitle: 'Comment React sait-il quel état correspond à quel appel useState sans identifiants textuels ? Plongeons dans la liste chaînée du noeud Fiber.',
      fiberTitle: 'Comment React Stocke l\'État en Mémoire',
      fiberSubtitle: 'La liste simplement chaînée fiber.memoizedState',
      fiberBadge: 'Architecture Fiber',
      fiberDesc: 'Lors du rendu, React associe un noeud Fiber. Tous les hooks y sont chaînés séquentiellement dans fiber.memoizedState.',
      linkedListHeader: 'Structure de fiber.memoizedState :',
      hook1Label: 'Hook n°1 (useState)',
      hook2Label: 'Hook n°2 (useState)',
      hook3Label: 'Hook n°3 (useState)',
      noticeNoKeys: 'React ne stocke aucun nom de variable. Il sait seulement : "1er appel = Hook n°1, 2e appel = Hook n°2".',
      simTitle: 'Simulateur "Enfreindre les Règles des Hooks"',
      simBadge: 'Expérience Interactive',
      simDesc: 'Que se passe-t-il si un hook est dans un if ? Basculez le commutateur pour observer le décalage catastrophique !',
      illegalCode: 'Code Illégal :',
      alignmentHeader: 'Alignement des Pointeurs d\'État Fiber :',
      inSyncTitle: 'Rendu 1 (isVip = true) : Pointeurs synchronisés',
      corruptTitle: 'Rendu 2 (isVip = false) : CORRUPTION DES POINTEURS !',
      corruptDesc: 'Le Hook n°1 a été sauté ! Les types et valeurs se décalent et React plante.',
      rule1Title: 'Règle n°1 : Niveau Supérieur Uniquement',
      rule1Subtitle: 'Ne jamais appeler de hooks dans des boucles ou conditions',
      rule1Desc: 'Cette règle garantit que les hooks s\'exécutent dans le même ordre exact à chaque rendu.',
      rule2Title: 'Règle n°2 : Fonctions React Uniquement',
      rule2Subtitle: 'Appelez les hooks uniquement depuis des composants ou custom hooks',
      rule2Desc: 'Les hooks nécessitent le contexte d\'exécution du Fiber React en cours.',
    },
    chapter5: {
      badge1: 'Module 5',
      badge2: 'Motifs d\'Immuabilité',
      readTime: 'Lecture 6 min + atelier interactif',
      title: 'Gérer l\'État Complexe :',
      titleAccent: 'Objets & Tableaux',
      subtitle: 'En JavaScript, les objets et tableaux sont passés par référence. Muter un objet conserve la même adresse mémoire, trompant React !',
      shallowTitle: 'Pourquoi la Mutation Échoue : Object.is(prev, next)',
      shallowSubtitle: 'React compare les références mémoire, pas les valeurs profondes',
      shallowBadge: 'Égalité Superficielle',
      shallowDesc: 'Lors d\'un setUser, React effectue un test Object.is(). Si la référence mémoire est identique, le rendu est annulé !',
      shallowPointer: 'Object.is(previousState, nextState) === true ? Annulation_Rendu : Planification_Rendu',
      objLabTitle: 'Atelier Objet : Mutation vs Immuabilité',
      trapTitle: '❌ Le Piège de la Mutation (Inopérant) :',
      spreadTitle: '✅ Le Motif Spread (Correct) :',
      mutateDirectBtn: 'Muter Directement (user.name = ...)',
      updateSpreadBtn: 'Mettre à jour via Spread (...prev)',
      arrayLabTitle: 'Atelier d\'Opérations sur Tableaux',
      opAdd: '1. Ajout :',
      opUpdate: '2. Modification :',
      opRemove: '3. Suppression :',
      taskPlaceholder: 'Nouvelle tâche à ajouter de façon immuable...',
      addTaskBtn: 'Ajouter [...prev, item]',
    },
    chapter6: {
      badge1: 'Module 6',
      badge2: 'Pratique Concrète',
      readTime: '4 Ateliers Interactifs',
      title: 'Ateliers',
      titleAccent: 'Interactifs du Monde Réel',
      subtitle: 'Mettez la théorie en pratique avec 4 patrons d\'état prêts pour la production.',
      tab1Title: '1. Panier & État Dérivé',
      tab1Badge: 'État Dérivé',
      tab1Desc: 'Calculez totaux et remises sans créer d\'état redondant.',
      tab2Title: '2. Formulaire Multi-Étapes',
      tab2Badge: 'État Consolidé',
      tab2Desc: 'Gérez plusieurs champs avec un seul objet d\'état propre.',
      tab3Title: '3. Machine à Remonter le Temps (Undo/Redo)',
      tab3Badge: 'Piles d\'États',
      tab3Desc: 'Implémentez l\'historique passé, présent et futur.',
      tab4Title: '4. Encapsulation en Custom Hooks',
      tab4Badge: 'Logique Réutilisable',
      tab4Desc: 'Encapsulez la logique dans useToggle et useCounter.',
      shoppingTitle: 'Articles du Panier',
      shoppingItems: 'articles',
      couponPlaceholder: 'Code Promo (Essayez REACT20)',
      applyCouponBtn: 'Appliquer',
      subtotal: 'Sous-total :',
      discount: 'Remise',
      tax: 'Taxe estimée (8%) :',
      grandTotal: 'Total Général :',
      derivedStateTitle: 'Leçon Clé : Éviter l\'État Redondant',
      derivedStateDesc: 'Si une valeur peut être calculée à partir de données existantes lors du rendu, calculez-la à la volée !',
      wizardStep1: 'Étape 1 : Informations du compte',
      wizardStep2: 'Étape 2 : Profil professionnel',
      wizardStep3: 'Étape 3 : Révision & Envoi',
      wizardSubmitted: 'Formulaire Envoyé avec Succès !',
      wizardSubmittedDesc: 'L\'état a été conservé sur les 3 étapes dans un seul objet.',
      wizardStartOver: 'Recommencer',
      undoRedoTitle: 'Machine à Remonter le Temps d\'État',
      undoBtn: 'Annuler (Undo)',
      redoBtn: 'Rétablir (Redo)',
      activeColor: 'État Actuel :',
      chooseColor: 'Choisir une Couleur (Nouvel Instantané) :',
      past: 'PASSÉ',
      present: 'PRÉSENT',
      future: 'FUTUR',
      customHookTitle: 'Encapsulation en Custom Hooks',
      toggleDemo: '1. Démo du Hook useToggle()',
      counterDemo: '2. Démo du Hook useCounter()',
    },
    chapter7: {
      badge1: 'Module 7',
      badge2: 'Certification de Maîtrise',
      readTime: '8 Questions d\'Entretiens Réels',
      title: 'Quiz de Maîtrise',
      titleAccent: '& Certification',
      subtitle: 'Validez votre compréhension des closures, snapshots, listes Fiber et de l\'immuabilité.',
      questionOf: 'Question',
      score: 'Score :',
      optionSelected: 'Option sélectionnée',
      chooseOption: 'Sélectionnez une option pour continuer',
      checkAnswer: 'Vérifier la réponse',
      nextQuestion: 'Question Suivante',
      viewResults: 'Voir les Résultats Finaux',
      quizCompleted: 'Quiz Terminé !',
      finalScore: 'Votre score est de',
      certTitle: 'Certification d\'État React',
      certMaster: 'Niveau Maître Certifié',
      certPractitioner: 'Niveau Praticien',
      certMasterDesc: 'Félicitations ! Vous avez démontré une compréhension rigoureuse et approfondie de l\'état React, des instantanés et de Fiber.',
      certPractitionerDesc: 'Bon travail ! Consultez l\'aide-mémoire pour perfectionner les notions délicates.',
      retakeBtn: 'Refaire le Quiz',
      openCheatSheetBtn: 'Ouvrir l\'Aide-Mémoire',
    }
  },
  ar: {
    header: {
      brandSubtitle: 'احترف إدارة الحالة في ريآكت واللقطات وآليات العمل الداخلية بصرياً',
      badge: 'دليل تفاعلي',
      progress: 'التقدّم:',
      renderFlashOn: 'وميض إعادة التصيير: مفعّل',
      renderFlashOff: 'وميض إعادة التصيير: معطّل',
      cheatSheet: 'ورقة الملاحظات',
      moduleSelect: 'اختر الوحدة',
      langName: 'العربية',
    },
    footer: {
      prev: 'السابق',
      next: 'التالي',
      complete: 'إكمال والانتقال للتالي',
      completed: 'اكتملت الوحدة بنجاح!',
      reset: 'إعادة ضبط التقدم',
      resetConfirm: 'هل تريد إعادة ضبط مستوى تقدمك بالكامل؟',
      builtWith: 'تم البناء باستخدام React 19 و TypeScript و Tailwind CSS و Framer Motion.',
    },
    cheatSheetModal: {
      title: 'ورقة الملاحظات الاحترافية لـ React useState',
      subtitle: 'أهم القواعد، والأنماط غير القابلة للتغيير، ونصائح الخبراء لإدارة الحالة',
      ruleNumber: 'القاعدة رقم',
      why: 'السبب:',
      dont: 'تجنّب (نمط خاطئ)',
      do: 'افعل (موصى به)',
      copy: 'نسخ',
      copied: 'تم النسخ',
      closeTip: 'نصيحة: اضغط ESC أو انقر إغلاق للعودة إلى الدليل',
      gotIt: 'فهمت ذلك!',
    },
    chapters: [
      { id: 'why-state', number: 1, title: 'معضلة "لماذا نحتاج الحالة؟"', shortTitle: '1. لماذا الحالة؟', subtitle: 'النماذج الذهنية', badge: 'الأساسيات', color: 'cyan', readTime: '4 دقائق' },
      { id: 'anatomy', number: 2, title: 'تشريح وآليات عمل useState', shortTitle: '2. التشريح', subtitle: 'الصياغة والأداء', badge: 'الصياغة', color: 'purple', readTime: '5 دقائق' },
      { id: 'snapshot-queue', number: 3, title: 'الحالة كلقطة (Snapshot) وطابور التحديثات', shortTitle: '3. اللقطة والطابور', subtitle: 'النموذج الذهني الأساسي', badge: 'تعمّق', color: 'indigo', readTime: '6 دقائق' },
      { id: 'fiber-hooks', number: 4, title: 'عقد Fiber والقائمة المترابطة للخطافات', shortTitle: '4. كواليس Fiber', subtitle: 'آليات ريآكت الداخلية', badge: 'تحت الغطاء', color: 'purple', readTime: '7 دقائق' },
      { id: 'complex-state', number: 5, title: 'إدارة الكائنات والمصفوفات بدون تعديل مباشر', shortTitle: '5. الحالة المعقدة', subtitle: 'أنماط عدم التغيير', badge: 'الأنماط', color: 'teal', readTime: '6 دقائق' },
      { id: 'interactive-labs', number: 6, title: 'مختبرات تطبيقية تفاعلية', shortTitle: '6. مختبرات حية', subtitle: 'ممارسة عملية', badge: 'تطبيق', color: 'emerald', readTime: '4 مختبرات' },
      { id: 'quiz', number: 7, title: 'اختبار الإتقان والشهادة', shortTitle: '7. ساحة الاختبار', subtitle: 'شهادة الإتقان', badge: 'تحدي', color: 'amber', readTime: '8 أسئلة' },
    ],
    cheatSheet: [
      {
        category: '1. التحديث بناءً على الحالة السابقة',
        rule: 'استخدم دائماً دالة التحديث (Updater function) عندما تعتمد الحالة الجديدة على السابقة.',
        dontCode: `// ❌ خطأ (تعتمد على لقطة قديمة)\nsetCount(count + 1);\nsetCount(count + 1); // ستزيد بمقدار 1 فقط إجمالاً!`,
        doCode: `// ✅ آمن (تستلم الحالة الأحدث في الطابور)\nsetCount(prev => prev + 1);\nsetCount(prev => prev + 1); // ستزيد بمقدار 2 بشكل صحيح!`,
        explanation: 'متغيرات الحالة مجمدة لكل لقطة تصيير. دوال التحديث تصطف في طابور وتُنفذ بشكل تسلسلي.'
      },
      {
        category: '2. عدم تعديل الكائنات بشكل مباشر (Immutability)',
        rule: 'لا تعدل كائنات الحالة في مكانها أبداً. انسخ الحقول الحالية دائماً باستخدام عامل النشر (...).',
        dontCode: `// ❌ لن يؤدي لإعادة التصيير (نفس العنوان في الذاكرة)\nuser.age = 26;\nsetUser(user);`,
        doCode: `// ✅ يُنشئ كائناً بمرجع ذاكرة جديد\nsetUser(prev => ({\n  ...prev,\n  age: 26\n}));`,
        explanation: 'تستخدم ريآكت دالة Object.is() للمقارنة. إذا كان مرجع الذاكرة متطابقاً، تتجاهل ريآكت إعادة التصيير.'
      },
      {
        category: '3. التعامل مع المصفوفات',
        rule: 'استخدم دوال المصفوفات النقية التي ترجع مصفوفة جديدة (.filter, .map, [...array]).',
        dontCode: `// ❌ يعدل المصفوفة في مكانها\ntodos.push(newTodo);\ntodos.splice(index, 1);\nsetTodos(todos);`,
        doCode: `// ✅ إضافة: [...todos, newTodo]\n// ✅ حذف: todos.filter(t => t.id !== id)\n// ✅ تحديث: todos.map(t => t.id === id ? {...t, done: true} : t)\nsetTodos(prev => [...prev, newTodo]);`,
        explanation: 'لا تستخدم أبداً push() أو pop() أو splice() أو sort() مباشرة على مصفوفات الحالة.'
      },
      {
        category: '4. العمليات الحسابية الابتدائية المكلفة',
        rule: 'مرر دالة إلى useState (التهيئة الكسولة) إذا كانت العملية الابتدائية مكلفة حسابياً.',
        dontCode: `// ❌ تُنفذ parseHugeJson() مع كــــل إعادة تصيير!\nconst [data, setData] = useState(parseHugeJson(rawString));`,
        doCode: `// ✅ تُنفذ parseHugeJson() فقط عند التحميل الأولي للمكون!\nconst [data, setData] = useState(() => parseHugeJson(rawString));`,
        explanation: 'تمرير دالة يخبر ريآكت باستدعائها مرة واحدة فقط أثناء بناء المكون لأول مرة.'
      },
      {
        category: '5. الحالة المشتقة مقابل الحالة المكررة',
        rule: 'تجنب وضع قيم في الحالة إذا كان بالإمكان حسابها مباشرة أثناء التصيير.',
        dontCode: `// ❌ حالة مكررة تتطلب مزامنة معقدة\nconst [items, setItems] = useState([]);\nconst [total, setTotal] = useState(0);`,
        doCode: `// ✅ احسبها مباشرة أثناء التصيير\nconst [items, setItems] = useState([]);\nconst total = items.reduce((acc, item) => acc + item.price, 0);`,
        explanation: 'الحالة المكررة تؤدي إلى أخطاء فقدان المزامنة وهدر عمليات إعادة التصيير.'
      },
      {
        category: '6. قواعد الخطافات (Rules of Hooks)',
        rule: 'استدعِ useState فقط في المستوى الأعلى للدالة، ولا تضعها في شروط أو حلقات تكرار.',
        dontCode: `// ❌ يكسر ترتيب القائمة المترابطة في Fiber\nif (isLoggedIn) {\n  const [session, setSession] = useState(null);\n}`,
        doCode: `// ✅ استدعاء غير مشروط في المستوى الأعلى\nconst [session, setSession] = useState(null);\n// تعامل مع الشرط داخل منطق العرض`,
        explanation: 'تتعرف ريآكت على الخطافات بناءً على ترتيب استدعائها الخطي داخل عقدة Fiber.'
      }
    ],
    quizQuestions: [
      {
        id: 1,
        title: 'فخ الزيادة الثلاثية',
        scenario: 'لديك عداد يبدأ بـ 0. عند النقر على الزر، ماذا ستطبع وحدة التحكم وما الذي ستعرضه الشاشة في التصيير التالي؟',
        codeSnippet: `function Counter() {\n  const [count, setCount] = useState(0);\n\n  function handleClick() {\n    setCount(count + 1);\n    setCount(count + 1);\n    setCount(count + 1);\n    console.log(count);\n  }\n\n  return <button onClick={handleClick}>{count}</button>;\n}`,
        options: [
          { id: 'A', text: 'تطبع 0 في الكونسول، وتعرض الشاشة 1', explanation: 'صحيح! الحالة داخل التصيير الحالي هي لقطة ثابتة (count قيمتها 0 خلال تنفيذ الدالة كاملة). تم وضع setCount(0 + 1) في الطابور 3 مرات والنتيجة 1.' },
          { id: 'B', text: 'تطبع 3 في الكونسول، وتعرض الشاشة 3', explanation: 'غير صحيح. استدعاء setCount لا يغير المتغير فوراً في النطاق الحالي.' },
          { id: 'C', text: 'تطبع 1 في الكونسول، وتعرض الشاشة 3', explanation: 'غير صحيح.' },
          { id: 'D', text: 'تطبع 0 في الكونسول، وتعرض الشاشة 3', explanation: 'غير صحيح. للوصول إلى 3 يجب استخدام دوال التحديث setCount(c => c + 1).' }
        ],
        correctOptionId: 'A',
        keyTakeaway: 'متغيرات الحالة ثوابت في كل لقطة تصيير. استخدم دوال التحديث setCount(prev => prev + 1) عند اعتماد الحالة على قيمتها السابقة.'
      },
      {
        id: 2,
        title: 'الوصول المؤجل للحالة والإغلاقات (Closures)',
        scenario: 'نقر المستخدم مرة واحدة على "Show Alert in 3s"، ثم نقر مرتين فوراً على زر الزيادة. ما هي الرسالة التي ستظهر بعد 3 ثوانٍ؟',
        codeSnippet: `function DelayedAlert() {\n  const [count, setCount] = useState(0);\n\n  function handleAlertClick() {\n    setTimeout(() => {\n      alert('Count is: ' + count);\n    }, 3000);\n  }\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Increment ({count})</button>\n      <button onClick={handleAlertClick}>Show Alert in 3s</button>\n    </div>\n  );\n}`,
        options: [
          { id: 'A', text: 'تعرض القيمة الأحدث (2 أو 3)', explanation: 'غير صحيح.' },
          { id: 'B', text: 'تعرض القيمة في اللحظة المحددة التي تم فيها النقر (0)', explanation: 'صحيح! إغلاق setTimeout يلتقط متغير count الخاص بلقطة التصيير التي تم فيها استدعاء الدالة.' },
          { id: 'C', text: 'تحدث خطأ في الخطاف', explanation: 'غير صحيح.' },
          { id: 'D', text: 'تعرض undefined', explanation: 'غير صحيح.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'معالجات الأحداث تلتقط قيم الحالة الخاصة باللقطة التي أُنشئت فيها.'
      },
      {
        id: 3,
        title: 'لغز التعديل المباشر للكائن',
        scenario: 'لماذا لا يؤدي النقر على الزر أدناه إلى تحديث اسم المستخدم على الشاشة؟',
        codeSnippet: `function UserProfile() {\n  const [user, setUser] = useState({ name: 'Alex', age: 25 });\n\n  function updateName() {\n    user.name = 'Jordan';\n    setUser(user);\n  }\n\n  return <h1>{user.name}</h1>;\n}`,
        options: [
          { id: 'A', text: 'لا يمكن تخزين كائنات في useState', explanation: 'غير صحيح.' },
          { id: 'B', text: 'ريآكت تقارن مراجع الذاكرة السطحية عبر Object.is()، وبما أن المرجع لم يتغير تلغي ريآكت إعادة التصيير', explanation: 'صحيح! تعديل الكائن في مكانه لا يغير عنوانه في الذاكرة، لذا تفترض ريآكت عدم حدوث أي تغيير.' },
          { id: 'C', text: 'useState تقبل أرقاماً ونصوصاً فقط', explanation: 'غير صحيح.' },
          { id: 'D', text: 'يتوقف التطبيق بخطأ TypeError', explanation: 'غير صحيح.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'عامل حالة ريآكت دائماً كبيانات غير قابلة للتعديل. أنشئ كائناً جديداً: setUser({ ...user, name: "Jordan" }).'
      },
      {
        id: 4,
        title: 'العمليات الحسابية الأولية المكلفة',
        scenario: 'أي خيار يحسب الحالة الابتدائية بكفاءة دون إعادة تشغيل createHugeMatrix() مع كل تصيير؟',
        codeSnippet: `// الخيار 1\nconst [matrix, setMatrix] = useState(createHugeMatrix());\n\n// الخيار 2\nconst [matrix, setMatrix] = useState(() => createHugeMatrix());`,
        options: [
          { id: 'A', text: 'الخيار 1 أسرع', explanation: 'غير صحيح.' },
          { id: 'B', text: 'الخيار 2 (التهيئة الكسولة) فعال لأن ريآكت ستستدعي الدالة فقط عند أول تركيب للمكون', explanation: 'صحيح! تمرير دالة () => compute() يخبر ريآكت بتشغيلها مرة واحدة فقط عند التحميل الأولي.' },
          { id: 'C', text: 'كلاهما متطابقان تماماً', explanation: 'غير صحيح.' },
          { id: 'D', text: 'الخيار 2 يسبب تسريباً في الذاكرة', explanation: 'غير صحيح.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'استخدم التهيئة الكسولة useState(() => compute()) للعمليات الأولية المكلفة في المعالجة.'
      },
      {
        id: 5,
        title: 'استدعاء الخطافات داخل الجمل الشرطية',
        scenario: 'لماذا يُمنع منعاً باتاً وضع useState داخل كتلة `if` في ريآكت؟',
        codeSnippet: `function BadComponent({ isVip }) {\n  if (isVip) {\n    const [vipBadge, setVipBadge] = useState('GOLD');\n  }\n  const [points, setPoints] = useState(0);\n\n  return <div>Points: {points}</div>;\n}`,
        options: [
          { id: 'A', text: 'ريآكت تخزن الخطافات في قائمة مترابطة داخل عقدة Fiber، وتغيير الترتيب يفسد تعيين الحالة للخطاف الصحيح', explanation: 'صحيح! تعتمد ريآكت على الترتيب التسلسلي الثابت للخطافات لربط كل حالة بخطافها في memoizedState.' },
          { id: 'B', text: 'جافاسكريبت لا تسمح بدوال داخل if', explanation: 'غير صحيح.' },
          { id: 'C', text: 'سيتم حذف المتغير من الذاكرة فوراً', explanation: 'غير صحيح.' },
          { id: 'D', text: 'التصيير الشرطي يعمل فقط مع useReducer', explanation: 'غير صحيح.' }
        ],
        correctOptionId: 'A',
        keyTakeaway: 'استدعِ الخطافات دائماً في المستوى الأعلى للدالة للحفاظ على ثبات ترتيبها بين عمليات التصيير.'
      },
      {
        id: 6,
        title: 'نمط الحالة المكررة الخاطئ',
        scenario: 'أي تطبيق لمكون الاسم الكامل يمثل أفضل الممارسات في ريآكت؟',
        codeSnippet: `// الأسلوب أ\nconst [firstName, setFirstName] = useState('Jane');\nconst [lastName, setLastName] = useState('Doe');\nconst [fullName, setFullName] = useState('Jane Doe'); // متزامن عبر useEffect\n\n// الأسلوب ب\nconst [firstName, setFirstName] = useState('Jane');\nconst [lastName, setLastName] = useState('Doe');\nconst fullName = firstName + ' ' + lastName; // محسوب مباشرة أثناء التصيير`,
        options: [
          { id: 'A', text: 'الأسلوب أ أفضل', explanation: 'غير صحيح.' },
          { id: 'B', text: 'الأسلوب ب أفضل: حساب القيم المشتقة مباشرة أثناء التصيير يمنع تكرار الحالة وأخطاء فقدان المزامنة', explanation: 'صحيح! إذا كان يمكن استنتاج قيمة من الحالة أو الخصائص، فلا تخزنها كحالة منفصلة.' },
          { id: 'C', text: 'كلاهما متطابقان', explanation: 'غير صحيح.' },
          { id: 'D', text: 'لا شيء مما سبق', explanation: 'غير صحيح.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'لا تضع قيماً مكررة في الحالة، بل احسبها مباشرة أثناء التصيير.'
      },
      {
        id: 7,
        title: 'تعديل مصفوفات الحالة بطريقة غير مباشرة',
        scenario: 'ما هي الطريقة الصحيحة لحذف عنصر بواسطة معرفه ID من مصفوفة الحالة `todos`؟',
        codeSnippet: `const [todos, setTodos] = useState([\n  { id: 1, text: 'Buy milk' },\n  { id: 2, text: 'Clean desk' },\n  { id: 3, text: 'Learn React' }\n]);`,
        options: [
          { id: 'A', text: 'todos.splice(todos.findIndex(t => t.id === 2), 1); setTodos(todos);', explanation: 'غير صحيح. splice تعدل المصفوفة في مكانها.' },
          { id: 'B', text: 'setTodos(todos.filter(t => t.id !== 2));', explanation: 'صحيح! الدالة filter تنشئ مصفوفة جديدة تماماً دون التعديل المباشر على الحالة الأصلية.' },
          { id: 'C', text: 'delete todos[1]; setTodos(todos);', explanation: 'غير صحيح.' },
          { id: 'D', text: 'setTodos(todos.pop());', explanation: 'غير صحيح.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'استخدم دوال المصفوفات التي تنشئ نسخاً جديدة مثل filter و map وعامل النشر [...items].'
      },
      {
        id: 8,
        title: 'التجميع التلقائي (Automatic Batching) في React 18 & 19',
        scenario: 'في React 18+، عندما ينفذ تحديثان للحالة داخل setTimeout، كم عدد عمليات إعادة التصيير التي تحدث؟',
        codeSnippet: `function BatchingDemo() {\n  const [count, setCount] = useState(0);\n  const [flag, setFlag] = useState(false);\n\n  function handleAsyncClick() {\n    setTimeout(() => {\n      setCount(c => c + 1);\n      setFlag(f => !f);\n    }, 1000);\n  }\n\n  return <div>{count} - {String(flag)}</div>;\n}`,
        options: [
          { id: 'A', text: 'إعادة تصيير مرتين', explanation: 'غير صحيح.' },
          { id: 'B', text: 'إعادة تصيير واحدة فقط بفضل ميزة التجميع التلقائي (Automatic Batching) في ريآكت 18 وما بعدها', explanation: 'صحيح! تجمع ريآكت 18+ تلقائياً التحديثات داخل الدوال غير المتزامنة والمؤقتات في دورة تصيير واحدة.' },
          { id: 'C', text: 'صفر تصيير', explanation: 'غير صحيح.' },
          { id: 'D', text: 'إعادة تصيير لانهائية', explanation: 'غير صحيح.' }
        ],
        correctOptionId: 'B',
        keyTakeaway: 'توفر React 18+ ميزة التجميع التلقائي لدمج تحديثات الحالة في دورة تصيير واحدة لتحسين الأداء.'
      }
    ],
    chapter1: {
      badge1: 'الوحدة 1',
      badge2: 'النماذج الذهنية',
      readTime: 'قراءة 4 دقائق + مختبر حي',
      title: 'معضلة',
      titleAccent: '"لماذا نحتاج الحالة؟"',
      subtitle: 'يتساءل كل مبتدئ: "لماذا لا أكتفي بإنشاء متغير let count = 0 وزيادته؟" دعنا نوضح سبب فشل المتغيرات العادية في ريآكت.',
      prob1Title: 'المشكلة 1: النطاق المؤقت',
      prob1Subtitle: 'المتغيرات المحلية لا تبقى حية بين دورات التصيير',
      prob1Badge: 'ذاكرة RAM',
      prob1Desc: 'في ريآكت، مكونك هو مجرد دالة جافاسكريبت. عندما تقوم ريآكت بالتصيير، فإنها تنفذ الدالة من السطر الأول حتى النهاية.',
      prob1Box: 'عندما تنتهي الدالة، يتم مسح متغيراتها المحلية من الذاكرة. في المرة التالية، يبدأ `let count = 0` من الصفر مجدداً!',
      prob2Title: 'المشكلة 2: عدم علم ريآكت',
      prob2Subtitle: 'التعديل المباشر لا يطلق إعادة التصيير',
      prob2Badge: 'المطابقة والتحديث',
      prob2Desc: 'القيام بـ count = count + 1 يغير الذاكرة فقط، لكن ريآكت لا تراقب متغيراتك العادية.',
      prob2Box: 'بدون استدعاء دالة التعيين الخاصة بريآكت، لا تعلم ريآكت بأي تغيير ولن تحدث واجهة المستخدم أبداً.',
      sandboxTitle: 'مختبر المقارنة التفاعلي',
      sandboxSubtitle: 'انقر على الزرين وراقب ما يحدث للواجهة والذاكرة',
      varTitle: 'متغير جافاسكريبت العادي',
      varBadge: 'يفشل في ريآكت',
      varUiDisplay: 'القيمة المعروضة على الشاشة:',
      varUiStuck: '(الواجهة عالقة عند 0 لأنه لم يتم إطلاق أي إعادة تصيير!)',
      varRamValue: 'القيمة الفعلية في ذاكرة RAM:',
      varIncrementBtn: 'زيادة المتغير العادي',
      varRerenderBtn: 'إعادة تصيير',
      stateTitle: 'خطاف useState في ريآكت',
      stateBadge: 'طريقة ريآكت الصحيحة',
      stateUiDisplay: 'القيمة المعروضة على الشاشة:',
      stateUiAuto: '(الواجهة تتحدث تلقائياً مع كل إعادة تصيير!)',
      stateFiberValue: 'المخزن داخل عقدة Fiber:',
      stateIncrementBtn: 'الزيادة عبر setCount()',
      stateResetBtn: 'إعادة ضبط',
      consoleTrace: 'سجل وحدة التحكم (Console):',
      modelTitle: 'النموذج الذهني الأساسي',
      modelDesc: 'تخيل useState كخزنة دائمة تعيش خارج دالة المكون. عندما يعمل المكون، يسأل ريآكت: "أعطني قيمتي المخزنة". وعندما تستدعي setCount، فإنك تحدث الخزنة وتدق جرس ريآكت لتعيد تشغيل المكون بالقيمة الجديدة!',
    },
    chapter2: {
      badge1: 'الوحدة 2',
      badge2: 'الصياغة والأداء',
      readTime: 'قراءة 5 دقائق + مختبر تفاعلي',
      title: 'تشريح خطاف',
      titleAccent: 'useState والتهيئة الكسولة',
      subtitle: 'دعنا نضع الصياغة تحت مجهر تفاعلي لنفهم كل عنصر، ولماذا تم اختيار تفكيك المصفوفات، وكيف تمنع التهيئة الكسولة هدر المعالجة.',
      microscopeTitle: 'مجهر الصياغة التفاعلي',
      microscopeSubtitle: 'انقر على أي جزء من التعريف البرمجي أدناه لمعرفة وظيفته وقواعده:',
      destructuringTitle: 'تفكيك المصفوفات في جافاسكريبت `[ ... ]`',
      destructuringBadge: 'ميزة لغة JS',
      destructuringDesc: 'يرجع useState مصفوفة ثنائية: [القيمةالحالية، دالةالتحديث]. يتيح لك التفكيك تسمية المتغيرين بأي اسم تختاره بحرية وبإيجاز.',
      stateVarTitle: 'متغير الحالة (`count`)',
      stateVarBadge: 'قيمة للقراءة فقط',
      stateVarDesc: 'يحمل قيمة الحالة للتصيير الحالي. إنه ثابت ضمن استدعاء الدالة هذا ولا يمكن إعادة تعيينه مباشرة.',
      setterTitle: 'دالة التعيين / الموزع (`setCount`)',
      setterBadge: 'مشغل / مرسل',
      setterDesc: 'دالة تقبل قيمة جديدة أو دالة تحديث. استدعاؤها يخبر ريآكت بحدوث تغيير ويجدول إعادة التصيير.',
      hookTitle: 'معرف الخطاف `useState`',
      hookBadge: 'واجهة ريآكت',
      hookDesc: 'خطاف مدمج في ريآكت. تبدأ الخطافات بكلمة "use" لتوجيه المحلل البرمجي للتحقق من قواعد الخطافات.',
      initialTitle: 'معامل الحالة الابتدائية `(initialValue)`',
      initialBadge: 'معامل البناء الأول',
      initialDesc: 'القيمة التي تأخذها الحالة في أول تصيير فقط. في المرات اللاحقة، تتجاهل ريآكت هذا المعامل وتعيد الحالة المحفوظة.',
      whyArrayTitle: 'لماذا تفكيك المصفوفات بدلاً من الكائنات؟',
      whyArraySubtitle: 'التصميم الذكي والعملي لخطافات ريآكت',
      whyArrayBadge: 'معمارية برمجية',
      ifObject: 'لو كان useState يرجع كائناً:',
      ifObjectDesc: 'لكنت بحاجة لإعادة تسمية كل خاصية باستخدام : alias الطويلة.',
      withArray: 'مع تفكيك المصفوفات (طريقة ريآكت):',
      withArrayDesc: 'يتيح لك التفكيك الموضعي تسمية المتغيرات بحرية تامة ووضوح.',
      lazyTitle: 'مختبر اختبار التهيئة الكسولة (Lazy Init)',
      lazyBadge: 'نصيحة أداء ذهبية',
      lazyDesc: 'إذا كانت حالتك الابتدائية تتطلب عملية حسابية مكلفة، فإن useState(compute()) ينفذها مع كل تصيير! أما useState(() => compute()) فينفذها مرة واحدة فقط.',
      eagerTitle: 'التهيئة المباشرة (بطيئة)',
      eagerBadge: 'يُعاد الحساب مع كل تصيير',
      eagerRenders: 'إجمالي مرات التصيير:',
      eagerRuns: 'مرات تشغيل الدالة المكلفة:',
      eagerWarning: '⚠️ هدر للمعالج: نُفذت عدة مرات دون داعٍ!',
      eagerBtn: 'إطلاق إعادة تصيير (يشغل الدالة المكلفة مجدداً!)',
      lazyCardTitle: 'التهيئة الكسولة (سريعة ومثالية)',
      lazyCardBadge: 'تُنفذ مرة واحدة عند التحميل',
      lazyRendersLabel: 'إجمالي مرات التصيير:',
      lazyRunsLabel: 'مرات تشغيل الدالة المكلفة:',
      lazySuccess: '✨ ممتاز: نُفذت مرة واحدة فقط عند بداية التحميل!',
      lazyBtn: 'إطلاق إعادة تصيير (صفر هدر للمعالج!)',
      resetBenchmark: 'إعادة ضبط أرقام الاختبار',
    },
    chapter3: {
      badge1: 'الوحدة 3',
      badge2: 'النموذج الذهني الأساسي',
      readTime: 'قراءة 6 دقائق + خط زمني متحرك',
      title: 'الحالة كـ',
      titleAccent: 'لقطة (Snapshot) ولغز طابور التحديث',
      subtitle: 'أحد أكثر الأسئلة شيوعاً: "لماذا لم تتحدث حالتي فوراً داخل معالج الحدث؟" دعنا نفهم لقطات التصيير ودوال التحديث.',
      analogyTitle: 'تشبيه الصورة الفوتوغرافية (Snapshot)',
      analogySubtitle: 'التصيير أشبه بالتقاط صورة فوتوغرافية ثابتة للواجهة في لحظة معينة',
      analogyBadge: 'نموذج ذهني',
      analogyDesc: 'عندما تستدعي ريآكت مكونك، فإنها تمرر له لقطة ثابتة من الحالة. المتغيرات والدوال تكون ثوابت مجمدة داخل هذا الإطار.',
      stepperTitle: 'متتبع الخط الزمني والطابور التفاعلي',
      directModeBtn: 'مباشر: setCount(count + 1)',
      funcModeBtn: 'دالي: setCount(c => c + 1)',
      step1Title: 'لقطة التصيير الأولي',
      step1Desc: 'يتم تصيير المكون مع لقطة count = 0. في هذا الإطار يكون count ثابتاً عند 0.',
      step1Badge: 'التصيير 1 (count = 0)',
      step2Title: 'تنفيذ معالج الحدث',
      step2DescDirect: 'تم استدعاء setCount(count + 1) ثلاث مرات. ولأن count = 0، تكرر استدعاء setCount(0 + 1) 3 مرات!',
      step2DescFunc: 'تم استدعاء setCount(prev => prev + 1) ثلاث مرات. أضافت ريآكت 3 دوال تحديث في الطابور الداخلي.',
      step2Badge: 'تم إطلاق الحدث',
      step3Title: 'معالجة طابور التحديثات في ريآكت',
      step3DescDirect: 'تتفحص ريآكت الطابور: ["اجعلها 1"، "اجعلها 1"، "اجعلها 1"]. القيمة النهائية: 1.',
      step3DescFunc: 'تتفحص ريآكت الطابور: [0 => 1، 1 => 2، 2 => 3]. القيمة النهائية: 3.',
      step3Badge: 'تقييم الطابور',
      step4Title: 'إعادة التصيير باللقطة الجديدة',
      step4DescDirect: 'تستدعي ريآكت المكون مجدداً مع count = 1. ويتم تحديث الشاشة إلى 1.',
      step4DescFunc: 'تستدعي ريآكت المكون مجدداً مع count = 3. ويتم تحديث الشاشة إلى 3.',
      step4Badge: 'التصيير 2 (معتمد)',
      stepOf: 'خطوة',
      queueLabel: 'طابور التحديث الداخلي في ريآكت:',
      queueEmpty: 'فارغ []',
      queuePending: 'في انتظار التقييم',
      queueing: 'جاري الإضافة...',
      noUpdatesQueued: 'لا توجد تحديثات في الطابور حالياً.',
      resetTimeline: 'إعادة ضبط الخط الزمني',
      nextStep: 'الخطوة التالية',
      startOver: 'البدء من جديد',
      liveComparisonTitle: 'مقارنة حية تفاعلية',
      directTitle: 'التحديث المباشر 3x',
      directBadge: 'يزيد بمقدار 1 فقط',
      directBtn: 'تشغيل 3x setCount(count + 1)',
      funcTitle: 'المحدث الدالي 3x',
      funcBadge: 'يزيد بمقدار 3 كاملة',
      funcBtn: 'تشغيل 3x setCount(prev => prev + 1)',
    },
    chapter4: {
      badge1: 'الوحدة 4',
      badge2: 'كواليس ريآكت',
      readTime: 'قراءة 7 دقائق + محاكي Fiber',
      title: 'تحت الغطاء:',
      titleAccent: 'React Fiber والقائمة المترابطة للخطافات',
      subtitle: 'كيف تعرف ريآكت أي حالة تخص أي استدعاء لـ useState دون تمرير معرفات نصية؟ دعنا نستكشف القائمة المترابطة لعقد Fiber.',
      fiberTitle: 'كيف تخزن ريآكت الحالة في الذاكرة',
      fiberSubtitle: 'القائمة المترابطة الأحادية fiber.memoizedState',
      fiberBadge: 'معمارية Fiber',
      fiberDesc: 'عندما تصيّر ريآكت المكون، تنشئ عقدة Fiber. يتم تخزين جميع الخطافات في قائمة مترابطة أحادية خطية يشير إليها fiber.memoizedState.',
      linkedListHeader: 'بنية fiber.memoizedState (القائمة المترابطة):',
      hook1Label: 'الخطاف رقم 1 (useState)',
      hook2Label: 'الخطاف رقم 2 (useState)',
      hook3Label: 'الخطاف رقم 3 (useState)',
      noticeNoKeys: 'لاحظ أن ريآكت لا تخزن أي أسماء للمتغيرات، بل تعتمد فقط على أن: "الاستدعاء الأول يأخذ الخطاف 1، والثاني يأخذ الخطاف 2".',
      simTitle: 'محاكي "كسر قواعد الخطافات"',
      simBadge: 'تجربة تفاعلية',
      simDesc: 'ماذا يحدث إذا تم وضع خطاف داخل جملة if؟ بدّل المفتاح أدناه لترى كيف يحدث انحراف كارثي في المؤشرات!',
      illegalCode: 'كود المكون المخالف للقواعد:',
      alignmentHeader: 'محاذاة مؤشرات الحالة في عقدة Fiber:',
      inSyncTitle: 'التصيير 1 (isVip = true): المؤشرات متطابقة',
      corruptTitle: 'التصيير 2 (isVip = false): تلف مؤشرات الحالة!',
      corruptDesc: 'تم تخطي الخطاف 1! اختلت مؤشرات الحالة وحدث خطأ في قراءة البيانات وانهار ريآكت.',
      rule1Title: 'القاعدة 1: المستوى الأعلى فقط',
      rule1Subtitle: 'لا تستدعِ الخطافات أبداً داخل حلقات تكرار أو شروط أو دوال متداخلة',
      rule1Desc: 'يضمن هذا الترتيب الثابت استدعاء الخطافات بنفس التسلسل الدقيق في كل تصيير، مما يسمح لريآكت بمطابقة الحالة بشكل صحيح.',
      rule2Title: 'القاعدة 2: دوال ريآكت فقط',
      rule2Subtitle: 'استدعِ الخطافات فقط من مكونات دوال ريآكت أو الخطافات المخصصة',
      rule2Desc: 'تتطلب الخطافات سياق تصيير نشط في عقدة React Fiber.',
    },
    chapter5: {
      badge1: 'الوحدة 5',
      badge2: 'أنماط عدم التعديل المباشر',
      readTime: 'قراءة 6 دقائق + مختبر تفاعلي',
      title: 'إدارة الحالة المعقدة:',
      titleAccent: 'الكائنات والمصفوفات',
      subtitle: 'في جافاسكريبت، تُمرر الكائنات والمصفوفات بالمرجع. تعديل الكائن في مكانه يحتفظ بنفس مرجع الذاكرة، مما يخدع ريآكت ويمنع التحديث!',
      shallowTitle: 'لماذا يفشل التعديل المباشر: Object.is(prev, next)',
      shallowSubtitle: 'تقارن ريآكت مراجع الذاكرة وليس القيم العميقة',
      shallowBadge: 'مقارنة سطحية',
      shallowDesc: 'عند استدعاء setUser، تجري ريآكت فحص Object.is(). فإذا كان المرجع متطابقاً، تلغي ريآكت إعادة التصيير ظناً منها عدم حدوث تغيير!',
      shallowPointer: 'Object.is(previousState, nextState) === true ? إلغاء_التصيير : جدولة_التصيير',
      objLabTitle: 'مختبر الكائنات: التعديل المباشر مقابل النسخ غير المباشر',
      trapTitle: '❌ فخ التعديل المباشر (لا يعمل):',
      spreadTitle: '✅ نمط النشر Spread (صحيح):',
      mutateDirectBtn: 'تعديل مباشر (user.name = ...)',
      updateSpreadBtn: 'تحديث عبر النسخ (...prev)',
      arrayLabTitle: 'مختبر عمليات المصفوفات التفاعلي',
      opAdd: '1. الإضافة:',
      opUpdate: '2. التعديل:',
      opRemove: '3. الحذف:',
      taskPlaceholder: 'اكتب مهمة جديدة لإضافتها بأمان...',
      addTaskBtn: 'إضافة [...prev, item]',
    },
    chapter6: {
      badge1: 'الوحدة 6',
      badge2: 'ممارسة عملية',
      readTime: '4 مختبرات تفاعلية حية',
      title: 'مختبرات تطبيقية',
      titleAccent: 'من العالم الحقيقي',
      subtitle: 'طبق المفاهيم النظرية عملياً مع 4 أنماط لإدارة الحالة جاهزة للاستخدام في الإنتاج.',
      tab1Title: '1. سلة التسوق والحالة المشتقة',
      tab1Badge: 'حالة مشتقة',
      tab1Desc: 'احسب الإجماليات والخصومات دون إنشاء حالات مكررة.',
      tab2Title: '2. نموذج متعدد الخطوات',
      tab2Badge: 'حالة موحدة',
      tab2Desc: 'أدر حقولاً متعددة باستخدام كائن حالة واحد منظم.',
      tab3Title: '3. آلة الزمن (تراجع / إعادة)',
      tab3Badge: 'مكدس الحالات',
      tab3Desc: 'طبق مصفوفات السجل الماضي والحاضر والمستقبل.',
      tab4Title: '4. بناء الخطافات المخصصة',
      tab4Badge: 'منطق قابل لإعادة الاستخدام',
      tab4Desc: 'غلف منطق الحالة داخل useToggle و useCounter.',
      shoppingTitle: 'عناصر سلة التسوق',
      shoppingItems: 'عناصر',
      couponPlaceholder: 'رمز القسيمة (جرب REACT20)',
      applyCouponBtn: 'تطبيق',
      subtotal: 'المجموع الفرعي:',
      discount: 'الخصم',
      tax: 'الضريبة المقدرة (8%):',
      grandTotal: 'المجموع الكلي:',
      derivedStateTitle: 'درس أساسي: تجنب الحالات المكررة',
      derivedStateDesc: 'إذا كان من الممكن حساب قيمة من بيانات موجودة أثناء التصيير، فاحسبها مباشرة على الفور!',
      wizardStep1: 'الخطوة 1: معلومات الحساب',
      wizardStep2: 'الخطوة 2: الملف المهني',
      wizardStep3: 'الخطوة 3: المراجعة والإرسال',
      wizardSubmitted: 'تم إرسال النموذج بنجاح!',
      wizardSubmittedDesc: 'تم الحفاظ على الحالة عبر الخطوات الثلاث في كائن موحد.',
      wizardStartOver: 'البدء من جديد',
      undoRedoTitle: 'آلة الزمن التفاعلية للحالة',
      undoBtn: 'تراجع (Undo)',
      redoBtn: 'إعادة (Redo)',
      activeColor: 'الحالة الحالية:',
      chooseColor: 'اختر لوناً (ينشئ لقطة حالة جديدة):',
      past: 'الماضي',
      present: 'الحاضر',
      future: 'المستقبل',
      customHookTitle: 'تغليف الخطافات المخصصة',
      toggleDemo: '1. تجربة خطاف useToggle()',
      counterDemo: '2. تجربة خطاف useCounter()',
    },
    chapter7: {
      badge1: 'الوحدة 7',
      badge2: 'شهادة الإتقان',
      readTime: '8 أسئلة من مقابلات العمل الحقيقية',
      title: 'اختبار الإتقان',
      titleAccent: 'والشهادة الاحترافية',
      subtitle: 'اختبر فهمك العميق للقطات التصيير، والإغلاقات، وقوائم Fiber، وعدم التعديل المباشر.',
      questionOf: 'السؤال',
      score: 'النتيجة:',
      optionSelected: 'تم اختيار الإجابة',
      chooseOption: 'اختر إجابة للمتابعة',
      checkAnswer: 'تحقق من الإجابة',
      nextQuestion: 'السؤال التالي',
      viewResults: 'عرض النتائج النهائية',
      quizCompleted: 'اكتمل الاختبار!',
      finalScore: 'حققت نتيجة',
      certTitle: 'شهادة إتقان ريآكت',
      certMaster: 'خبير معتمد (Master)',
      certPractitioner: 'ممارس (Practitioner)',
      certMasterDesc: 'عمل رائع ومتميز! أثبتت فهماً عميقاً ودقيقاً لحالة ريآكت واللقطات وقوائم Fiber وعدم التعديل المباشر.',
      certPractitionerDesc: 'جهد ممتاز! راجع ورقة الملاحظات وأعد تجربة الأسئلة الصعبة لتحقيق الدرجة الكاملة.',
      retakeBtn: 'إعادة الاختبار',
      openCheatSheetBtn: 'فتح ورقة الملاحظات',
    }
  }
};
