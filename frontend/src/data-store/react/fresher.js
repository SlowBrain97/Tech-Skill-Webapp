export const reactFresherQuestions = [
    {
        _id: "react-f-001",
        difficulty: "fresher",
        tags: ["react", "component", "function"],
        content: {
            en: {
                title: "What is React?",
                body: "Briefly describe what React is used for.",
                solution: "A JavaScript library for building user interfaces, primarily single-page applications."
            },
            jp: {
                title: "Reactとは何ですか？",
                body: "Reactが何に使われるか簡単に説明してください。",
                solution: "ユーザーインターフェース（主にシングルページアプリケーション）を構築するためのJavaScriptライブラリです。"
            },
            vi: {
                title: "React là gì?",
                body: "Mô tả ngắn gọn React được dùng để làm gì.",
                solution: "Một thư viện JavaScript để xây dựng giao diện người dùng, chủ yếu là các ứng dụng trang đơn (SPA)."
            }
        }
    },
    {
        _id: "react-f-002",
        difficulty: "fresher",
        tags: ["react", "jsx", "syntax"],
        content: {
            en: {
                title: "What is JSX?",
                body: "What does JSX stand for and what is its purpose?",
                solution: "JavaScript XML. It is a syntax extension for JavaScript, used to describe what the UI should look like."
            },
            jp: {
                title: "JSXとは何ですか？",
                body: "JSXは何の略で、その目的は何ですか？",
                solution: "JavaScript XML。JavaScriptの構文拡張であり、UIがどのように見えるべきかを記述するために使用されます。"
            },
            vi: {
                title: "JSX là gì?",
                body: "JSX là viết tắt của từ gì và mục đích của nó là gì?",
                solution: "JavaScript XML. Nó là một phần mở rộng cú pháp cho JavaScript, được sử dụng để mô tả giao diện người dùng nên trông như thế nào."
            }
        }
    },
    {
        _id: "react-f-003",
        difficulty: "fresher",
        tags: ["react", "component", "definition"],
        content: {
            en: {
                title: "How do you define a Functional Component in React?",
                body: "Give the basic structure of a React functional component.",
                solution: "It's a JavaScript function that accepts props as an argument and returns JSX."
            },
            jp: {
                title: "Reactで関数コンポーネントをどのように定義しますか？",
                body: "React関数コンポーネントの基本的な構造を教えてください。",
                solution: "propsを引数として受け取り、JSXを返すJavaScript関数です。"
            },
            vi: {
                title: "Bạn định nghĩa một Functional Component trong React như thế nào?",
                body: "Nêu cấu trúc cơ bản của một functional component trong React.",
                solution: "Đó là một hàm JavaScript chấp nhận props làm đối số và trả về JSX."
            }
        }
    },
    {
        _id: "react-f-004",
        difficulty: "fresher",
        tags: ["react", "component", "naming"],
        content: {
            en: {
                title: "What is the convention for naming React components?",
                body: "How should the name of a React component typically start?",
                solution: "With a capital letter (PascalCase), e.g., 'MyComponent'."
            },
            jp: {
                title: "Reactコンポーネントの命名規則は何ですか？",
                body: "Reactコンポーネントの名前は通常、どのように始まるべきですか？",
                solution: "大文字（PascalCase）で始まります。例: 'MyComponent'。"
            },
            vi: {
                title: "Quy ước đặt tên cho các React component là gì?",
                body: "Tên của một React component thường bắt đầu như thế nào?",
                solution: "Bằng một chữ cái viết hoa (PascalCase), ví dụ: 'MyComponent'."
            }
        }
    },
    {
        _id: "react-f-005",
        difficulty: "fresher",
        tags: ["react", "jsx", "expressions"],
        content: {
            en: {
                title: "How do you embed a JavaScript expression within JSX?",
                body: "What syntax is used to include variables or expressions inside JSX?",
                solution: "Curly braces: `{expression}`."
            },
            jp: {
                title: "JSX内でJavaScriptの式を埋め込むにはどうすればよいですか？",
                body: "JSX内に変数や式を含めるために使用される構文は何ですか？",
                solution: "波括弧: `{expression}`。"
            },
            vi: {
                title: "Làm thế nào để nhúng một biểu thức JavaScript vào trong JSX?",
                body: "Cú pháp nào được sử dụng để bao gồm các biến hoặc biểu thức bên trong JSX?",
                solution: "Dấu ngoặc nhọn: `{expression}`."
            }
        }
    },
    {
        _id: "react-f-006",
        difficulty: "fresher",
        tags: ["react", "virtual dom", "performance"],
        content: {
            en: {
                title: "What is the Virtual DOM?",
                body: "Briefly explain the concept of React's Virtual DOM.",
                solution: "A light-weight copy or representation of the actual DOM, used by React for efficient updates and rendering."
            },
            jp: {
                title: "Virtual DOMとは何ですか？",
                body: "ReactのVirtual DOMの概念を簡単に説明してください。",
                solution: "実際のDOMの軽量なコピーまたは表現であり、効率的な更新とレンダリングのためにReactによって使用されます。"
            },
            vi: {
                title: "Virtual DOM là gì?",
                body: "Giải thích ngắn gọn khái niệm Virtual DOM của React.",
                solution: "Một bản sao hoặc biểu diễn nhẹ của DOM thực tế, được React sử dụng để cập nhật và hiển thị một cách hiệu quả."
            }
        }
    },
    {
        _id: "react-f-007",
        difficulty: "fresher",
        tags: ["react", "props", "data flow"],
        content: {
            en: {
                title: "What is 'props' in React?",
                body: "What does 'props' stand for, and what are they used for?",
                solution: "Properties. They are read-only data passed from a parent component to a child component."
            },
            jp: {
                title: "Reactにおける'props'とは何ですか？",
                body: "'props'は何の略で、何に使われますか？",
                solution: "Properties（プロパティ）。親コンポーネントから子コンポーネントに渡される読み取り専用のデータです。"
            },
            vi: {
                title: "'props' trong React là gì?",
                body: "'props' là viết tắt của từ gì, và chúng được sử dụng để làm gì?",
                solution: "Properties (Thuộc tính). Chúng là dữ liệu chỉ đọc được truyền từ component cha xuống component con."
            }
        }
    },
    {
        _id: "react-f-008",
        difficulty: "fresher",
        tags: ["react", "state", "usestate", "hook"],
        content: {
            en: {
                title: "What is the purpose of the useState hook?",
                body: "What does the useState hook allow functional components to do?",
                solution: "It allows functional components to manage and use state (mutable data) within the component."
            },
            jp: {
                title: "useStateフックの目的は何ですか？",
                body: "useStateフックは関数コンポーネントに何を可能にしますか？",
                solution: "関数コンポーネントがコンポーネント内で状態（変更可能なデータ）を管理し、使用することを可能にします。"
            },
            vi: {
                title: "Mục đích của hook useState là gì?",
                body: "Hook useState cho phép các functional component làm gì?",
                solution: "Nó cho phép các functional component quản lý và sử dụng state (dữ liệu có thể thay đổi) bên trong component."
            }
        }
    },
    {
        _id: "react-f-009",
        difficulty: "fresher",
        tags: ["react", "unidirectional", "data flow"],
        content: {
            en: {
                title: "What is 'unidirectional data flow' in React?",
                body: "Describe the direction of data flow in a React application.",
                solution: "Data flows only one way—from parent components down to child components (props)."
            },
            jp: {
                title: "Reactにおける「単方向データフロー」とは何ですか？",
                body: "Reactアプリケーションでのデータフローの方向を説明してください。",
                solution: "データは一方向にのみ流れます。つまり、親コンポーネントから子コンポーネントへ（propsとして）です。"
            },
            vi: {
                title: "'Unidirectional data flow' (Luồng dữ liệu một chiều) trong React là gì?",
                body: "Mô tả hướng của luồng dữ liệu trong một ứng dụng React.",
                solution: "Dữ liệu chỉ chảy theo một chiều—từ component cha xuống component con (props)."
            }
        }
    },
    {
        _id: "react-f-010",
        difficulty: "fresher",
        tags: ["react", "class component", "this"],
        content: {
            en: {
                title: "In a Class Component, how do you access state and props?",
                body: "What keyword is typically used to access state and props in a class component?",
                solution: "The `this` keyword, e.g., `this.state` and `this.props`."
            },
            jp: {
                title: "クラスコンポーネントでは、stateとpropsにどのようにアクセスしますか？",
                body: "クラスコンポーネントでstateとpropsにアクセスするために通常使用されるキーワードは何ですか？",
                solution: "キーワード`this`です。例: `this.state`および`this.props`。"
            },
            vi: {
                title: "Trong Class Component, làm thế nào để truy cập state và props?",
                body: "Từ khóa nào thường được sử dụng để truy cập state và props trong class component?",
                solution: "Từ khóa `this`, ví dụ: `this.state` và `this.props`."
            }
        }
    },
    {
        _id: "react-f-011",
        difficulty: "fresher",
        tags: ["react", "jsx", "class", "attribute"],
        content: {
            en: {
                title: "Why do we use `className` instead of `class` in JSX?",
                body: "What is the reason for using `className` for styling in JSX?",
                solution: "`class` is a reserved keyword in JavaScript, so `className` is used to specify a CSS class."
            },
            jp: {
                title: "JSXで`class`の代わりに`className`を使用するのはなぜですか？",
                body: "JSXでスタイリングに`className`を使用する理由は何ですか？",
                solution: "`class`はJavaScriptの予約語であるため、CSSクラスを指定するために`className`が使用されます。"
            },
            vi: {
                title: "Tại sao chúng ta sử dụng `className` thay vì `class` trong JSX?",
                body: "Lý do sử dụng `className` cho việc tạo kiểu trong JSX là gì?",
                solution: "`class` là một từ khóa dành riêng (reserved keyword) trong JavaScript, vì vậy `className` được sử dụng để chỉ định một lớp CSS."
            }
        }
    },
    {
        _id: "react-f-012",
        difficulty: "fresher",
        tags: ["react", "component", "render"],
        content: {
            en: {
                title: "What does a React component return?",
                body: "What type of value must a React component ultimately return to be rendered?",
                solution: "A single React element (usually JSX) or null/false if nothing is to be rendered."
            },
            jp: {
                title: "Reactコンポーネントは何を返しますか？",
                body: "レンダリングされるために、Reactコンポーネントが最終的に返さなければならない値のタイプは何ですか？",
                solution: "単一のReact要素（通常はJSX）か、何もレンダリングされない場合はnull/falseです。"
            },
            vi: {
                title: "Một React component trả về gì?",
                body: "Loại giá trị nào mà một React component phải trả về để được hiển thị?",
                solution: "Một React element duy nhất (thường là JSX) hoặc null/false nếu không có gì được hiển thị."
            }
        }
    },
    {
        _id: "react-f-013",
        difficulty: "fresher",
        tags: ["react", "hook", "usestate", "state"],
        content: {
            en: {
                title: "What is the correct way to update state using `useState`?",
                body: "After calling `useState`, which function must be used to change the state value?",
                solution: "The setter function returned by `useState` (e.g., `setCount`). Directly modifying the state variable is incorrect."
            },
            jp: {
                title: "`useState`を使用して状態を更新する正しい方法は何ですか？",
                body: "`useState`を呼び出した後、状態値を変更するために使用する必要がある関数は何ですか？",
                solution: "`useState`によって返されるセッター関数（例: `setCount`）です。状態変数を直接変更するのは誤りです。"
            },
            vi: {
                title: "Cách đúng để cập nhật state bằng `useState` là gì?",
                body: "Sau khi gọi `useState`, hàm nào phải được sử dụng để thay đổi giá trị state?",
                solution: "Hàm setter được trả về bởi `useState` (ví dụ: `setCount`). Việc sửa đổi trực tiếp biến state là sai."
            }
        }
    },
    {
        _id: "react-f-014",
        difficulty: "fresher",
        tags: ["react", "event handling", "naming"],
        content: {
            en: {
                title: "How are event handlers named in React?",
                body: "What is the common naming convention for event handlers in React (e.g., for a click event)?",
                solution: "CamelCase, e.g., `onClick`, `onChange`."
            },
            jp: {
                title: "Reactでのイベントハンドラーはどのように命名されますか？",
                body: "Reactでのイベントハンドラーの一般的な命名規則は何ですか（例: クリックイベントの場合）？",
                solution: "CamelCaseです。例: `onClick`、`onChange`。"
            },
            vi: {
                title: "Các trình xử lý sự kiện (event handlers) trong React được đặt tên như thế nào?",
                body: "Quy ước đặt tên phổ biến cho các trình xử lý sự kiện trong React là gì (ví dụ: cho sự kiện click)?",
                solution: "CamelCase, ví dụ: `onClick`, `onChange`."
            }
        }
    },
    {
        _id: "react-f-015",
        difficulty: "fresher",
        tags: ["react", "component", "rendering"],
        content: {
            en: {
                title: "What is component re-rendering?",
                body: "What usually triggers a component to re-render in React?",
                solution: "A change in the component's state or props."
            },
            jp: {
                title: "コンポーネントの再レンダリングとは何ですか？",
                body: "Reactでコンポーネントが再レンダリングされるきっかけは何ですか？",
                solution: "コンポーネントの状態（state）またはプロパティ（props）の変更です。"
            },
            vi: {
                title: "Re-rendering (tái hiển thị) component là gì?",
                body: "Điều gì thường kích hoạt một component tái hiển thị trong React?",
                solution: "Một sự thay đổi trong state hoặc props của component."
            }
        }
    },
    {
        _id: "react-f-016",
        difficulty: "fresher",
        tags: ["react", "list", "key", "array"],
        content: {
            en: {
                title: "What is the purpose of the `key` prop when rendering a list in React?",
                body: "Why is a unique `key` required for list items in React?",
                solution: "It helps React identify which items have changed, been added, or been removed, optimizing performance during list updates."
            },
            jp: {
                title: "Reactでリストをレンダリングする際の`key`プロパティの目的は何ですか？",
                body: "Reactでリストアイテムに一意の`key`が必要なのはなぜですか？",
                solution: "Reactがどのアイテムが変更されたか、追加されたか、または削除されたかを識別するのに役立ち、リストの更新中のパフォーマンスを最適化します。"
            },
            vi: {
                title: "Mục đích của prop `key` khi hiển thị một danh sách trong React là gì?",
                body: "Tại sao một `key` duy nhất lại cần thiết cho các mục trong danh sách trong React?",
                solution: "Nó giúp React xác định các mục nào đã thay đổi, được thêm vào hoặc bị xóa, tối ưu hóa hiệu suất trong quá trình cập nhật danh sách."
            }
        }
    },
    {
        _id: "react-f-017",
        difficulty: "fresher",
        tags: ["react", "component", "import"],
        content: {
            en: {
                title: "How do you import a component named `Header` from a file named `Header.js`?",
                body: "Write the JavaScript import statement.",
                solution: " `import Header from './Header';` (assuming it's a default export)."
            },
            jp: {
                title: "`Header.js`という名前のファイルから`Header`という名前のコンポーネントをインポートするにはどうすればよいですか？",
                body: "JavaScriptのインポート文を記述してください。",
                solution: " `import Header from './Header';` (デフォルトエクスポートの場合)。"
            },
            vi: {
                title: "Làm thế nào để import một component tên là `Header` từ file có tên `Header.js`?",
                body: "Viết câu lệnh import JavaScript.",
                solution: " `import Header from './Header';` (giả sử đó là một default export)."
            }
        }
    },
    {
        _id: "react-f-018",
        difficulty: "fresher",
        tags: ["react", "jsx", "comment"],
        content: {
            en: {
                title: "How do you write a comment inside JSX?",
                body: "Provide the correct syntax for commenting within the returned JSX of a component.",
                solution: "`{/* This is a comment */}`."
            },
            jp: {
                title: "JSX内でコメントを記述するにはどうすればよいですか？",
                body: "コンポーネントが返すJSX内でコメントを記述するための正しい構文を提供してください。",
                solution: "`{/* これはコメントです */}`。"
            },
            vi: {
                title: "Làm thế nào để viết một comment bên trong JSX?",
                body: "Cung cấp cú pháp chính xác để comment bên trong JSX được component trả về.",
                solution: "`{/* Đây là một comment */}`."
            }
        }
    },
    {
        _id: "react-f-019",
        difficulty: "fresher",
        tags: ["react", "hook", "usestate", "array"],
        content: {
            en: {
                title: "What is the return value of the `useState` hook?",
                body: "What two items does `useState` return in its array?",
                solution: "The current state value, and a function to update the state value (the setter function)."
            },
            jp: {
                title: "`useState`フックの戻り値は何ですか？",
                body: "`useState`はその配列で何という2つのアイテムを返しますか？",
                solution: "現在の状態値と、状態値を更新するための関数（セッター関数）です。"
            },
            vi: {
                title: "Giá trị trả về của hook `useState` là gì?",
                body: "`useState` trả về hai mục nào trong mảng của nó?",
                solution: "Giá trị state hiện tại, và một hàm để cập nhật giá trị state (hàm setter)."
            }
        }
    },
    {
        _id: "react-f-020",
        difficulty: "fresher",
        tags: ["react", "props", "immutability"],
        content: {
            en: {
                title: "Are `props` read-only or mutable?",
                body: "Can a child component directly modify the props it receives from its parent?",
                solution: "Read-only (immutable). Components should not modify their own props."
            },
            jp: {
                title: "`props`は読み取り専用ですか、それとも変更可能ですか？",
                body: "子コンポーネントは、親から受け取ったpropsを直接変更できますか？",
                solution: "読み取り専用（不変）です。コンポーネントは自身のpropsを変更すべきではありません。"
            },
            vi: {
                title: "`props` là chỉ đọc hay có thể thay đổi?",
                body: "Một component con có thể trực tiếp sửa đổi props mà nó nhận được từ component cha không?",
                solution: "Chỉ đọc (bất biến). Các component không nên sửa đổi props của chính nó."
            }
        }
    },
    {
        _id: "react-f-021",
        difficulty: "fresher",
        tags: ["react", "hook", "rules"],
        content: {
            en: {
                title: "Where can React Hooks (like `useState`) be called?",
                body: "Name the two types of functions where Hooks can be called.",
                solution: "Only inside React functional components and custom Hooks."
            },
            jp: {
                title: "React Hooks（`useState`など）はどこで呼び出すことができますか？",
                body: "Hooksを呼び出すことができる関数の2つのタイプを挙げてください。",
                solution: "React関数コンポーネント内とカスタムHooks内のみです。"
            },
            vi: {
                title: "React Hooks (như `useState`) có thể được gọi ở đâu?",
                body: "Nêu hai loại hàm mà Hooks có thể được gọi.",
                solution: "Chỉ bên trong các functional component của React và các Custom Hooks."
            }
        }
    },
    {
        _id: "react-f-022",
        difficulty: "fresher",
        tags: ["react", "hook", "usestate", "initialize"],
        content: {
            en: {
                title: "When is the initial state passed to `useState` used?",
                body: "Does `useState` use the initial value on every re-render?",
                solution: "No, it is only used during the initial render of the component."
            },
            jp: {
                title: "`useState`に渡される初期状態はいつ使用されますか？",
                body: "`useState`はすべての再レンダリングで初期値を使用しますか？",
                solution: "いいえ、コンポーネントの初期レンダリング時のみ使用されます。"
            },
            vi: {
                title: "Khi nào state ban đầu được truyền cho `useState` được sử dụng?",
                body: "`useState` có sử dụng giá trị ban đầu trong mỗi lần re-render không?",
                solution: "Không, nó chỉ được sử dụng trong lần render ban đầu của component."
            }
        }
    },
    {
        _id: "react-f-023",
        difficulty: "fresher",
        tags: ["react", "component", "parent-child"],
        content: {
            en: {
                title: "How can a child component communicate with its parent component?",
                body: "What is the standard way for a child component to pass data back up to its parent?",
                solution: "By calling a function (passed as a prop) provided by the parent component."
            },
            jp: {
                title: "子コンポーネントはどのように親コンポーネントと通信できますか？",
                body: "子コンポーネントが親にデータを戻すための標準的な方法は何ですか？",
                solution: "親コンポーネントから提供された関数（propsとして渡されたもの）を呼び出すことによってです。"
            },
            vi: {
                title: "Làm thế nào một component con có thể giao tiếp với component cha của nó?",
                body: "Cách chuẩn để một component con truyền dữ liệu ngược lại lên component cha là gì?",
                solution: "Bằng cách gọi một hàm (được truyền dưới dạng prop) do component cha cung cấp."
            }
        }
    },
    {
        _id: "react-f-024",
        difficulty: "fresher",
        tags: ["react", "jsx", "attribute", "style"],
        content: {
            en: {
                title: "How do you apply inline styles in JSX?",
                body: "What is the syntax for defining an inline style, for example, setting the text color to red?",
                solution: "Using a JavaScript object passed within curly braces: `<div style={{ color: 'red' }}>...</div>` (double curly braces)."
            },
            jp: {
                title: "JSXでインラインスタイルを適用するにはどうすればよいですか？",
                body: "インラインスタイルを定義するための構文は何ですか？例えば、テキストの色を赤に設定する場合。",
                solution: "波括弧内に渡されたJavaScriptオブジェクトを使用します: `<div style={{ color: 'red' }}>...</div>` (二重の波括弧)。"
            },
            vi: {
                title: "Làm thế nào để áp dụng inline styles trong JSX?",
                body: "Cú pháp để định nghĩa một inline style là gì, ví dụ, đặt màu văn bản là đỏ?",
                solution: "Sử dụng một đối tượng JavaScript được truyền bên trong dấu ngoặc nhọn: `<div style={{ color: 'red' }}>...</div>` (hai dấu ngoặc nhọn)."
            }
        }
    },
    {
        _id: "react-f-025",
        difficulty: "fresher",
        tags: ["react", "conditional rendering", "ternary"],
        content: {
            en: {
                title: "What is a common way to conditionally render a component in JSX?",
                body: "Name a JavaScript operator often used for simple conditional rendering within JSX.",
                solution: "The **Ternary Operator** (`condition ? trueResult : falseResult`) or **Logical AND Operator** (`condition && element`)."
            },
            jp: {
                title: "JSXでコンポーネントを条件付きでレンダリングする一般的な方法は何ですか？",
                body: "JSX内で単純な条件付きレンダリングによく使用されるJavaScript演算子の名前を挙げてください。",
                solution: "**三項演算子** (`condition ? trueResult : falseResult`) または **論理AND演算子** (`condition && element`)です。"
            },
            vi: {
                title: "Cách phổ biến để hiển thị có điều kiện (conditionally render) một component trong JSX là gì?",
                body: "Nêu tên một toán tử JavaScript thường được sử dụng để hiển thị có điều kiện đơn giản bên trong JSX.",
                solution: "**Toán tử Ba ngôi** (`condition ? trueResult : falseResult`) hoặc **Toán tử Logical AND** (`condition && element`)."
            }
        }
    },
    {
        _id: "react-f-026",
        difficulty: "fresher",
        tags: ["react", "hook", "usestate", "destructuring"],
        content: {
            en: {
                title: "What is the name of the technique used to get the state value and the setter function from `useState`?",
                body: "The technique is based on JavaScript array syntax.",
                solution: "Array destructuring."
            },
            jp: {
                title: "`useState`から状態値とセッター関数を取得するために使用される手法の名前は何ですか？",
                body: "この手法はJavaScriptの配列構文に基づいています。",
                solution: "配列の分割代入（Array destructuring）。"
            },
            vi: {
                title: "Tên của kỹ thuật được sử dụng để lấy giá trị state và hàm setter từ `useState` là gì?",
                body: "Kỹ thuật này dựa trên cú pháp mảng JavaScript.",
                solution: "Destructuring mảng (Array destructuring)."
            }
        }
    },
    {
        _id: "react-f-027",
        difficulty: "fresher",
        tags: ["react", "component", "render"],
        content: {
            en: {
                title: "What is the first step when a component needs to be rendered for the first time?",
                body: "Which React API call is used to initially render a component into the DOM?",
                solution: "Using `ReactDOM.render()` (Legacy) or `ReactDOM.createRoot().render()` (Modern) to mount the component to a DOM element."
            },
            jp: {
                title: "コンポーネントが初めてレンダリングされる必要がある場合の最初のステップは何ですか？",
                body: "コンポーネントをDOMに初期レンダリングするために使用されるReact API呼び出しは何ですか？",
                solution: "`ReactDOM.render()` (レガシー) または `ReactDOM.createRoot().render()` (モダン) を使用して、コンポーネントをDOM要素にマウントします。"
            },
            vi: {
                title: "Bước đầu tiên khi một component cần được render lần đầu là gì?",
                body: "Cuộc gọi API React nào được sử dụng để hiển thị component ban đầu vào DOM?",
                solution: "Sử dụng `ReactDOM.render()` (Cũ) hoặc `ReactDOM.createRoot().render()` (Hiện đại) để gắn component vào một phần tử DOM."
            }
        }
    },
    {
        _id: "react-f-028",
        difficulty: "fresher",
        tags: ["react", "jsx", "self-closing"],
        content: {
            en: {
                title: "What is a characteristic of an HTML element written in JSX that has no children?",
                body: "How must a self-closing tag be terminated in JSX?",
                solution: "With a forward slash before the closing angle bracket (e.g., `<img />`)."
            },
            jp: {
                title: "子を持たないJSXで記述されたHTML要素の特徴は何ですか？",
                body: "JSXで自己閉じタグはどのように終了する必要がありますか？",
                solution: "閉じ角度括弧の前にスラッシュが必要です（例: `<img />`）。"
            },
            vi: {
                title: "Đặc điểm của một phần tử HTML được viết trong JSX mà không có phần tử con là gì?",
                body: "Một thẻ tự đóng phải được kết thúc như thế nào trong JSX?",
                solution: "Bằng một dấu gạch chéo trước dấu ngoặc nhọn đóng (ví dụ: `<img />`)."
            }
        }
    },
    {
        _id: "react-f-029",
        difficulty: "fresher",
        tags: ["react", "component", "return"],
        content: {
            en: {
                title: "Can a React component return multiple JSX elements without a single root?",
                body: "If a component returns adjacent JSX elements, what is required to wrap them?",
                solution: "No. The elements must be wrapped in a single parent element (like a `<div>`) or a React Fragment (`<>...</>`)."
            },
            jp: {
                title: "Reactコンポーネントは、単一のルートなしで複数のJSX要素を返すことができますか？",
                body: "コンポーネントが隣接するJSX要素を返す場合、それらを囲むために何が必要ですか？",
                solution: "いいえ。要素は単一の親要素（`<div>`など）またはReact Fragment (`<>...</>`) で囲む必要があります。"
            },
            vi: {
                title: "Một React component có thể trả về nhiều phần tử JSX mà không có một root duy nhất không?",
                body: "Nếu một component trả về các phần tử JSX liền kề, điều gì là cần thiết để bao bọc chúng?",
                solution: "Không. Các phần tử phải được bao bọc trong một phần tử cha duy nhất (như `<div>`) hoặc một React Fragment (`<>...</>`)."
            }
        }
    },
    {
        _id: "react-f-030",
        difficulty: "fresher",
        tags: ["react", "jsx", "function", "event"],
        content: {
            en: {
                title: "When passing an event handler to a component, should you call the function directly?",
                body: "Explain the difference between `onClick={handleClick}` and `onClick={handleClick()}`.",
                solution: "No. `onClick={handleClick}` passes the function reference (correct). `onClick={handleClick()}` calls the function immediately during render (incorrect for events)."
            },
            jp: {
                title: "コンポーネントにイベントハンドラーを渡す際、関数を直接呼び出すべきですか？",
                body: "`onClick={handleClick}`と`onClick={handleClick()}`の違いを説明してください。",
                solution: "いいえ。`onClick={handleClick}`は関数の参照を渡します（正しい）。`onClick={handleClick()}`はレンダリング中に即座に関数を呼び出します（イベントには誤り）。"
            },
            vi: {
                title: "Khi truyền một trình xử lý sự kiện cho một component, bạn có nên gọi hàm trực tiếp không?",
                body: "Giải thích sự khác biệt giữa `onClick={handleClick}` và `onClick={handleClick()}`.",
                solution: "Không. `onClick={handleClick}` truyền tham chiếu hàm (đúng). `onClick={handleClick()}` gọi hàm ngay lập tức trong quá trình render (sai đối với các sự kiện)."
            }
        }
    },
    {
        _id: "react-f-031",
        difficulty: "fresher",
        tags: ["react", "hook", "usestate", "batching"],
        content: {
            en: {
                title: "If you call a `useState` setter function twice in a row, how many times will the component re-render?",
                body: "Assuming the calls are within the same synchronous function/event handler.",
                solution: "Once. React typically 'batches' multiple state updates into a single re-render for performance."
            },
            jp: {
                title: "useStateのセッター関数を連続して2回呼び出すと、コンポーネントは何回再レンダリングされますか？",
                body: "呼び出しが同じ同期関数/イベントハンドラー内にあると仮定します。",
                solution: "1回です。Reactは通常、パフォーマンスのために複数の状態更新を単一の再レンダリングに「バッチ処理」します。"
            },
            vi: {
                title: "Nếu bạn gọi hàm setter của `useState` hai lần liên tiếp, component sẽ re-render bao nhiêu lần?",
                body: "Giả sử các cuộc gọi nằm trong cùng một hàm đồng bộ/trình xử lý sự kiện.",
                solution: "Một lần. React thường 'gom' (batches) nhiều cập nhật state thành một lần re-render duy nhất để tối ưu hiệu suất."
            }
        }
    },
    {
        _id: "react-f-032",
        difficulty: "fresher",
        tags: ["react", "jsx", "loop", "array"],
        content: {
            en: {
                title: "What is the standard JavaScript array method used to render a list of items in JSX?",
                body: "Name the array method commonly used to transform an array of data into an array of JSX elements.",
                solution: "The `.map()` method."
            },
            jp: {
                title: "JSXでアイテムのリストをレンダリングするために使用される標準的なJavaScript配列メソッドは何ですか？",
                body: "データの配列をJSX要素の配列に変換するためによく使用される配列メソッドの名前を挙げてください。",
                solution: "`.map()` メソッドです。"
            },
            vi: {
                title: "Phương thức mảng JavaScript tiêu chuẩn được sử dụng để hiển thị một danh sách các mục trong JSX là gì?",
                body: "Nêu tên phương thức mảng thường được sử dụng để biến đổi một mảng dữ liệu thành một mảng các phần tử JSX.",
                solution: "Phương thức `.map()`."
            }
        }
    },
    {
        _id: "react-f-033",
        difficulty: "fresher",
        tags: ["react", "virtual dom", "dom"],
        content: {
            en: {
                title: "Does React directly update the browser's DOM for every change?",
                body: "Explain how React uses the Virtual DOM before making actual changes.",
                solution: "No. React updates the Virtual DOM first, compares it to the previous version, and only applies the differences to the real DOM."
            },
            jp: {
                title: "Reactはすべての変更に対してブラウザのDOMを直接更新しますか？",
                body: "Reactが実際の変更を行う前にVirtual DOMをどのように使用するかを説明してください。",
                solution: "いいえ。ReactはまずVirtual DOMを更新し、それを以前のバージョンと比較し、違いだけを実際のDOMに適用します。"
            },
            vi: {
                title: "React có trực tiếp cập nhật DOM của trình duyệt cho mọi thay đổi không?",
                body: "Giải thích cách React sử dụng Virtual DOM trước khi thực hiện các thay đổi thực tế.",
                solution: "Không. React cập nhật Virtual DOM trước, so sánh nó với phiên bản trước, và chỉ áp dụng những khác biệt cho DOM thực."
            }
        }
    },
    {
        _id: "react-f-034",
        difficulty: "fresher",
        tags: ["react", "component", "reusability"],
        content: {
            en: {
                title: "What is the primary benefit of breaking a UI into small, independent React components?",
                body: "What concept does this decomposition promote?",
                solution: "Reusability and maintainability. Components can be reused across different parts of the application or different projects."
            },
            jp: {
                title: "UIを小さく独立したReactコンポーネントに分割する主な利点は何ですか？",
                body: "この分解はどのような概念を促進しますか？",
                solution: "再利用性（Reusability）と保守性（Maintainability）です。コンポーネントはアプリケーションの異なる部分や異なるプロジェクトで再利用できます。"
            },
            vi: {
                title: "Lợi ích chính của việc chia UI thành các component React nhỏ, độc lập là gì?",
                body: "Sự phân tách này thúc đẩy khái niệm gì?",
                solution: "Tính tái sử dụng (Reusability) và khả năng bảo trì (Maintainability). Các component có thể được tái sử dụng trên các phần khác nhau của ứng dụng hoặc các dự án khác nhau."
            }
        }
    },
    {
        _id: "react-f-035",
        difficulty: "fresher",
        tags: ["react", "props", "children"],
        content: {
            en: {
                title: "How do you access content placed between the opening and closing tags of a component?",
                body: "What special prop is used to access nested JSX elements?",
                solution: "Using the `props.children` property."
            },
            jp: {
                title: "コンポーネントの開始タグと終了タグの間に配置されたコンテンツにどのようにアクセスしますか？",
                body: "ネストされたJSX要素にアクセスするために使用される特別なpropsは何ですか？",
                solution: "`props.children`プロパティを使用します。"
            },
            vi: {
                title: "Làm thế nào để truy cập nội dung được đặt giữa thẻ mở và thẻ đóng của một component?",
                body: "Prop đặc biệt nào được sử dụng để truy cập các phần tử JSX được lồng vào nhau?",
                solution: "Sử dụng thuộc tính `props.children`."
            }
        }
    },
    {
        _id: "react-f-036",
        difficulty: "fresher",
        tags: ["react", "form", "control"],
        content: {
            en: {
                title: "What is a 'controlled component' in React forms?",
                body: "Briefly explain the mechanism of a controlled component.",
                solution: "An input form element whose value is controlled by React state. The state updates are handled by an event handler like `onChange`."
            },
            jp: {
                title: "Reactフォームにおける「制御されたコンポーネント」（controlled component）とは何ですか？",
                body: "制御されたコンポーネントのメカニズムを簡単に説明してください。",
                solution: "その値がReactの状態によって制御される入力フォーム要素です。状態の更新は`onChange`のようなイベントハンドラーによって処理されます。"
            },
            vi: {
                title: "'Controlled component' trong form React là gì?",
                body: "Giải thích ngắn gọn cơ chế của một controlled component.",
                solution: "Một phần tử form nhập liệu mà giá trị của nó được kiểm soát bởi state của React. Các cập nhật state được xử lý bởi một trình xử lý sự kiện như `onChange`."
            }
        }
    },
    {
        _id: "react-f-037",
        difficulty: "fresher",
        tags: ["react", "form", "uncontrolled"],
        content: {
            en: {
                title: "What is an 'uncontrolled component'?",
                body: "Where does the form data live in an uncontrolled component?",
                solution: "An input form element where the form data is handled by the DOM itself (like traditional HTML forms), often accessed via a `ref`."
            },
            jp: {
                title: "「非制御コンポーネント」（uncontrolled component）とは何ですか？",
                body: "非制御コンポーネントでは、フォームデータはどこに存在しますか？",
                solution: "フォームデータがDOM自体によって処理される入力フォーム要素であり（従来のHTMLフォームのように）、しばしば`ref`を介してアクセスされます。"
            },
            vi: {
                title: "'Uncontrolled component' là gì?",
                body: "Dữ liệu form nằm ở đâu trong một uncontrolled component?",
                solution: "Một phần tử form nhập liệu mà dữ liệu form được xử lý bởi chính DOM (giống như các form HTML truyền thống), thường được truy cập thông qua một `ref`."
            }
        }
    },
    {
        _id: "react-f-038",
        difficulty: "fresher",
        tags: ["react", "hook", "usestate", "state"],
        content: {
            en: {
                title: "Can the initial state value passed to `useState` be a function?",
                body: "Why would you pass a function instead of a value to `useState` for initialization?",
                solution: "Yes. To perform a calculation or fetch a large initial state value only once during the initial render (lazy initialization)."
            },
            jp: {
                title: "`useState`に渡される初期状態値は関数にできますか？",
                body: "初期化のために、値の代わりに`useState`にを関数渡すのはなぜですか？",
                solution: "はい。初期レンダリング中に一度だけ計算を実行したり、大きな初期状態値を取得したりするためです（遅延初期化 - lazy initialization）。"
            },
            vi: {
                title: "Giá trị state ban đầu được truyền cho `useState` có thể là một hàm không?",
                body: "Tại sao bạn lại truyền một hàm thay vì một giá trị cho `useState` để khởi tạo?",
                solution: "Có. Để thực hiện một phép tính hoặc tìm nạp một giá trị state ban đầu lớn chỉ một lần trong quá trình render ban đầu (khởi tạo lười - lazy initialization)."
            }
        }
    },
    {
        _id: "react-f-039",
        difficulty: "fresher",
        tags: ["react", "hook", "usestate", "updater"],
        content: {
            en: {
                title: "What is the correct way to update state if the new state depends on the previous state?",
                body: "What must you pass to the setter function instead of the new value?",
                solution: "Pass an updater function (a function that receives the previous state and returns the new state) to the setter, e.g., `setCount(prevCount => prevCount + 1)`."
            },
            jp: {
                title: "新しい状態が以前の状態に依存する場合、状態を更新する正しい方法は何ですか？",
                body: "新しい値の代わりに、セッター関数に何を渡す必要がありますか？",
                solution: "セッターにアップデーター関数（以前の状態を受け取り、新しい状態を返す関数）を渡します。例: `setCount(prevCount => prevCount + 1)`。"
            },
            vi: {
                title: "Cách đúng để cập nhật state nếu state mới phụ thuộc vào state trước đó là gì?",
                body: "Bạn phải truyền gì cho hàm setter thay vì giá trị mới?",
                solution: "Truyền một hàm updater (một hàm nhận state trước đó và trả về state mới) cho hàm setter, ví dụ: `setCount(prevCount => prevCount + 1)`."
            }
        }
    },
    {
        _id: "react-f-040",
        difficulty: "fresher",
        tags: ["react", "props", "destructuring"],
        content: {
            en: {
                title: "How can you simplify accessing props like `props.username` and `props.age` in a functional component?",
                body: "What JavaScript technique is commonly used in the function signature?",
                solution: "Object destructuring: `const MyComponent = ({ username, age }) => {...}`."
            },
            jp: {
                title: "関数コンポーネントで`props.username`や`props.age`のようなpropsへのアクセスを簡素化するにはどうすればよいですか？",
                body: "関数のシグネチャで一般的に使用されるJavaScriptのテクニックは何ですか？",
                solution: "オブジェクトの分割代入（Object destructuring）: `const MyComponent = ({ username, age }) => {...}`。"
            },
            vi: {
                title: "Làm thế nào để đơn giản hóa việc truy cập các props như `props.username` và `props.age` trong một functional component?",
                body: "Kỹ thuật JavaScript nào thường được sử dụng trong chữ ký hàm?",
                solution: "Destructuring đối tượng (Object destructuring): `const MyComponent = ({ username, age }) => {...}`."
            }
        }
    },
    {
        _id: "react-f-041",
        difficulty: "fresher",
        tags: ["react", "jsx", "boolean", "render"],
        content: {
            en: {
                title: "What happens when you try to render the boolean value `true` in JSX?",
                body: "Will the word 'true' appear on the screen?",
                solution: "No. Boolean values (`true`, `false`), `null`, and `undefined` are ignored by React and do not render anything in the output."
            },
            jp: {
                title: "JSXでブール値`true`をレンダリングしようとするとどうなりますか？",
                body: "画面に「true」という単語が表示されますか？",
                solution: "いいえ。ブール値（`true`、`false`）、`null`、および`undefined`はReactによって無視され、出力に何もレンダリングされません。"
            },
            vi: {
                title: "Điều gì xảy ra khi bạn cố gắng hiển thị giá trị boolean `true` trong JSX?",
                body: "Từ 'true' có xuất hiện trên màn hình không?",
                solution: "Không. Các giá trị boolean (`true`, `false`), `null` và `undefined` bị React bỏ qua và không hiển thị bất cứ thứ gì trong output."
            }
        }
    },
    {
        _id: "react-f-042",
        difficulty: "fresher",
        tags: ["react", "hook", "useeffect"],
        content: {
            en: {
                title: "What is the primary purpose of the `useEffect` hook?",
                body: "What kind of operations is `useEffect` typically used for?",
                solution: "To perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM."
            },
            jp: {
                title: "`useEffect`フックの主な目的は何ですか？",
                body: "`useEffect`は通常、どのような種類の操作に使用されますか？",
                solution: "データ取得、サブスクリプション、DOMの手動変更など、関数コンポーネントで副作用（side effects）を実行するためです。"
            },
            vi: {
                title: "Mục đích chính của hook `useEffect` là gì?",
                body: "`useEffect` thường được sử dụng cho những loại thao tác nào?",
                solution: "Để thực hiện các side effects (tác dụng phụ) trong functional component, chẳng hạn như tìm nạp dữ liệu, đăng ký (subscriptions), hoặc thay đổi DOM thủ công."
            }
        }
    },
    {
        _id: "react-f-043",
        difficulty: "fresher",
        tags: ["react", "hook", "useeffect", "cleanup"],
        content: {
            en: {
                title: "What does the function returned by `useEffect` (if any) do?",
                body: "When is this optional function executed by React?",
                solution: "It's the cleanup function, executed when the component unmounts or before the effect runs again (if dependencies change)."
            },
            jp: {
                title: "`useEffect`によって返される関数（ある場合）は何をしますか？",
                body: "このオプションの関数はReactによっていつ実行されますか？",
                solution: "それはクリーンアップ関数であり、コンポーネントがアンマウントされるとき、または（依存関係が変更された場合に）エフェクトが再度実行される前に実行されます。"
            },
            vi: {
                title: "Hàm được trả về bởi `useEffect` (nếu có) làm gì?",
                body: "Hàm tùy chọn này được React thực thi khi nào?",
                solution: "Đó là hàm cleanup, được thực thi khi component bị hủy (unmount) hoặc trước khi effect chạy lại (nếu các dependencies thay đổi)."
            }
        }
    },
    {
        _id: "react-f-044",
        difficulty: "fresher",
        tags: ["react", "component", "props"],
        content: {
            en: {
                title: "What is the concept of 'Props Drilling'?",
                body: "Briefly describe the scenario that leads to props drilling.",
                solution: "Passing data (props) through multiple layers of nested components that don't directly need the data, just to reach a deeply nested component."
            },
            jp: {
                title: "「Props Drilling」の概念は何ですか？",
                body: "Props Drillingにつながるシナリオを簡単に説明してください。",
                solution: "データが直接必要のないネストされたコンポーネントの複数の層を介してデータ（props）を渡すことです。これは、深くネストされたコンポーネントに到達するためだけに行われます。"
            },
            vi: {
                title: "Khái niệm 'Props Drilling' là gì?",
                body: "Mô tả ngắn gọn kịch bản dẫn đến props drilling.",
                solution: "Việc truyền dữ liệu (props) qua nhiều lớp component lồng nhau mà bản thân các component đó không trực tiếp cần dữ liệu, chỉ để đưa dữ liệu đến một component được lồng sâu."
            }
        }
    },
    {
        _id: "react-f-045",
        difficulty: "fresher",
        tags: ["react", "hook", "usestate", "state"],
        content: {
            en: {
                title: "Can you call the `useState` setter function from a non-React function (e.g., inside a traditional browser API callback)?",
                body: "Why or why not?",
                solution: "Yes, you can. The setter function is stable and can be safely used anywhere, even inside async code, to trigger a re-render."
            },
            jp: {
                title: "非React関数（例: 従来のブラウザAPIコールバック内）から`useState`セッター関数を呼び出すことはできますか？",
                body: "できる場合とできない場合の理由は何ですか？",
                solution: "はい、できます。セッター関数は安定しており、非同期コード内でも安全に使用して再レンダリングをトリガーできます。"
            },
            vi: {
                title: "Bạn có thể gọi hàm setter của `useState` từ một hàm không phải React (ví dụ: bên trong một callback của API trình duyệt truyền thống) không?",
                body: "Tại sao có hoặc tại sao không?",
                solution: "Có, bạn có thể. Hàm setter ổn định và có thể được sử dụng an toàn ở bất cứ đâu, ngay cả bên trong mã bất đồng bộ, để kích hoạt re-render."
            }
        }
    },
    {
        _id: "react-f-046",
        difficulty: "fresher",
        tags: ["react", "hook", "useeffect", "dependency"],
        content: {
            en: {
                title: "What is the effect of an empty dependency array (`[]`) in a `useEffect` call?",
                body: "When will the effect run if the dependency array is empty?",
                solution: "The effect will run only once after the initial render (similar to `componentDidMount` in class components)."
            },
            jp: {
                title: "`useEffect`呼び出しにおける空の依存配列（`[]`）の効果は何ですか？",
                body: "依存配列が空の場合、エフェクトはいつ実行されますか？",
                solution: "エフェクトは初期レンダリング後に一度だけ実行されます（クラスコンポーネントの`componentDidMount`に似ています）。"
            },
            vi: {
                title: "Tác dụng của một mảng dependencies rỗng (`[]`) trong một lời gọi `useEffect` là gì?",
                body: "Effect sẽ chạy khi nào nếu mảng dependencies là rỗng?",
                solution: "Effect sẽ chỉ chạy một lần sau lần render ban đầu (tương tự như `componentDidMount` trong class component)."
            }
        }
    },
    {
        _id: "react-f-047",
        difficulty: "fresher",
        tags: ["react", "hook", "useeffect", "dependency"],
        content: {
            en: {
                title: "What happens if you omit the dependency array in a `useEffect` call?",
                body: "When will the effect run if the dependency array is not provided?",
                solution: "The effect will run after every render of the component (initial render and all subsequent re-renders)."
            },
            jp: {
                title: "`useEffect`呼び出しで依存配列を省略するとどうなりますか？",
                body: "依存配列が提供されていない場合、エフェクトはいつ実行されますか？",
                solution: "エフェクトはコンポーネントのすべてのレンダリング（初期レンダリングおよびその後のすべての再レンダリング）後に実行されます。"
            },
            vi: {
                title: "Điều gì xảy ra nếu bạn bỏ qua mảng dependencies trong một lời gọi `useEffect`?",
                body: "Effect sẽ chạy khi nào nếu mảng dependencies không được cung cấp?",
                solution: "Effect sẽ chạy sau mỗi lần render của component (render ban đầu và tất cả các lần re-render tiếp theo)."
            }
        }
    },
    {
        _id: "react-f-048",
        difficulty: "fresher",
        tags: ["react", "jsx", "attribute", "dom"],
        content: {
            en: {
                title: "In JSX, which attribute is used to manually access a DOM element in a functional component?",
                body: "What hook is used to create and manage this reference?",
                solution: "The `ref` attribute, managed by the `useRef` hook."
            },
            jp: {
                title: "JSXで、関数コンポーネント内のDOM要素に手動でアクセスするために使用される属性は何ですか？",
                body: "この参照を作成および管理するために使用されるフックは何ですか？",
                solution: "`ref`属性であり、`useRef`フックによって管理されます。"
            },
            vi: {
                title: "Trong JSX, thuộc tính nào được sử dụng để truy cập thủ công vào một phần tử DOM trong functional component?",
                body: "Hook nào được sử dụng để tạo và quản lý tham chiếu này?",
                solution: "Thuộc tính `ref`, được quản lý bởi hook `useRef`."
            }
        }
    },
    {
        _id: "react-f-049",
        difficulty: "fresher",
        tags: ["react", "component", "export"],
        content: {
            en: {
                title: "What is the difference between a default export and a named export for a React component?",
                body: "How are they imported in another file?",
                solution: "A **Default export** can be imported with any name (e.g., `import MyComponent from './file'`). A **Named export** must be imported using the exact name and curly braces (e.g., `import { MyComponent } from './file'`)."
            },
            jp: {
                title: "Reactコンポーネントのデフォルトエクスポートと名前付きエクスポートの違いは何ですか？",
                body: "それらは別のファイルでどのようにインポートされますか？",
                solution: "**デフォルトエクスポート**は任意の名前でインポートできます（例: `import MyComponent from './file'`）。**名前付きエクスポート**は、正確な名前と波括弧を使用してインポートする必要があります（例: `import { MyComponent } from './file'`）。"
            },
            vi: {
                title: "Sự khác biệt giữa default export và named export cho một React component là gì?",
                body: "Chúng được import trong file khác như thế nào?",
                solution: "**Default export** có thể được import với bất kỳ tên nào (ví dụ: `import MyComponent from './file'`). **Named export** phải được import bằng cách sử dụng tên chính xác và dấu ngoặc nhọn (ví dụ: `import { MyComponent } from './file'`)."
            }
        }
    },
    {
        _id: "react-f-050",
        difficulty: "fresher",
        tags: ["react", "tools", "cli"],
        content: {
            en: {
                title: "What command-line tool is commonly used to quickly set up a new modern React project?",
                body: "Name a popular modern tool like `create-react-app` was.",
                solution: "`Vite` or `Next.js` (for a full-stack solution)."
            },
            jp: {
                title: "新しいモダンなReactプロジェクトを迅速にセットアップするために一般的に使用されるコマンドラインツールは何ですか？",
                body: "`create-react-app`のような人気のあるモダンなツール名を挙げてください。",
                solution: "`Vite` または `Next.js` (フルスタックソリューションの場合)。"
            },
            vi: {
                title: "Công cụ dòng lệnh nào thường được sử dụng để nhanh chóng thiết lập một dự án React hiện đại mới?",
                body: "Nêu tên một công cụ hiện đại phổ biến như `create-react-app` đã từng là.",
                solution: "`Vite` hoặc `Next.js` (đối với giải pháp full-stack)."
            }
        }
    }
];