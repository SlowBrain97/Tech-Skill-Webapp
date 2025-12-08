export const javascriptMiddleQuestions = [
  {
    _id: "js-m-001",
    difficulty: "middle",
    tags: ["closure", "scope"],
    content: {
      en: {
        title: "Explain Closures",
        body: "What is a closure in JavaScript and provide a simple example of how it works.",
        solution: "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In simpler terms, a closure gives you access to an outer function's scope from an inner function, even after the outer function has finished execution."
      },
      jp: {
        title: "クロージャの説明",
        body: "JavaScriptにおけるクロージャとは何か、またその動作を示す簡単な例を提供してください。",
        solution: "クロージャは、関数がその周囲の状態（レキシカル環境）への参照と一緒にバンドルされた（囲まれた）組み合わせです。簡単に言えば、クロージャは外部関数が実行を終了した後でも、内部関数から外部関数のスコープにアクセスできるようにします。"
      },
      vi: {
        title: "Giải thích Closure",
        body: "Closure trong JavaScript là gì và cung cấp một ví dụ đơn giản về cách nó hoạt động.",
        solution: "Closure là sự kết hợp của một hàm được gói lại cùng với các tham chiếu đến trạng thái xung quanh nó (môi trường từ vựng). Nói đơn giản, closure cho phép bạn truy cập vào scope của hàm bên ngoài từ một hàm bên trong, ngay cả sau khi hàm bên ngoài đã hoàn thành việc thực thi."
      }
    }
  },
  {
    _id: "js-m-002",
    difficulty: "middle",
    tags: ["prototype", "inheritance"],
    content: {
      en: {
        title: "What is the prototype chain?",
        body: "Describe the prototype chain and how property lookups occur in JavaScript.",
        solution: "The prototype chain is a mechanism used for inheritance in JavaScript. When attempting to access a property of an object, if the property is not found on the object itself, JavaScript searches the object's prototype, then the prototype's prototype, and so on, until it reaches an object with a null prototype (usually Object.prototype)."
      },
      jp: {
        title: "プロトタイプチェーンとは？",
        body: "プロトタイプチェーンとは何か、またJavaScriptでプロパティの検索がどのように行われるか説明してください。",
        solution: "プロトタイプチェーンは、JavaScriptで継承のために使用されるメカニズムです。オブジェクトのプロパティにアクセスしようとしたとき、そのプロパティがオブジェクト自体に見つからない場合、JavaScriptはオブジェクトのプロトタイプ、次にプロトタイプのプロトタイプを検索し、nullプロトタイプを持つオブジェクト（通常はObject.prototype）に到達するまで続けます。"
      },
      vi: {
        title: "Prototype Chain là gì?",
        body: "Mô tả Prototype Chain và cách tra cứu thuộc tính (property lookups) diễn ra trong JavaScript.",
        solution: "Prototype Chain là một cơ chế được sử dụng cho tính kế thừa trong JavaScript. Khi cố gắng truy cập một thuộc tính của một đối tượng mà thuộc tính đó không được tìm thấy trên chính đối tượng, JavaScript sẽ tìm kiếm trên prototype của đối tượng, sau đó là prototype của prototype, và cứ thế tiếp diễn cho đến khi nó đạt đến một đối tượng có prototype là null (thường là Object.prototype)."
      }
    }
  },
  {
    _id: "js-m-003",
    difficulty: "middle",
    tags: ["async", "promise"],
    content: {
      en: {
        title: "Promise states",
        body: "List the three states of a Promise in JavaScript and what each state represents.",
        solution: "A Promise can be in one of three states: 1. Pending: Initial state, neither fulfilled nor rejected. 2. Fulfilled (Resolved): The operation completed successfully. 3. Rejected: The operation failed."
      },
      jp: {
        title: "Promiseの状態",
        body: "JavaScriptのPromiseの3つの状態と、それぞれの状態が何を表しているか列挙してください。",
        solution: "Promiseには3つの状態があります: 1. Pending (保留): 初期状態、成功も失敗もしていません。 2. Fulfilled (解決): 処理が成功裏に完了しました。 3. Rejected (拒否): 処理が失敗しました。"
      },
      vi: {
        title: "Các trạng thái của Promise",
        body: "Liệt kê ba trạng thái của một Promise trong JavaScript và mỗi trạng thái đại diện cho điều gì.",
        solution: "Một Promise có thể ở một trong ba trạng thái: 1. Pending (Đang chờ): Trạng thái ban đầu, chưa thành công hay thất bại. 2. Fulfilled (Hoàn thành): Thao tác đã hoàn thành thành công. 3. Rejected (Thất bại): Thao tác đã thất bại."
      }
    }
  },
  {
    _id: "js-m-004",
    difficulty: "middle",
    tags: ["es6", "let", "const", "var"],
    content: {
      en: {
        title: "var vs let/const scope",
        body: "What is the primary difference in scoping between 'var' and 'let'/'const'?",
        solution: "'var' is function-scoped (or globally-scoped). 'let' and 'const' are block-scoped. This means 'let' and 'const' variables are only accessible within the block (curly braces) where they are defined, while 'var' variables are accessible throughout the entire function."
      },
      jp: {
        title: "var 対 let/const のスコープ",
        body: "'var' と 'let'/'const' のスコープにおける主な違いは何ですか？",
        solution: "'var' は関数スコープ（またはグローバルスコープ）です。『let』と『const』はブロックスコープです。これは、『let』と『const』の変数は定義されたブロック（波括弧）内でのみアクセス可能であり、『var』の変数は関数全体でアクセス可能であることを意味します。"
      },
      vi: {
        title: "Phạm vi của var so với let/const",
        body: "Sự khác biệt cơ bản về phạm vi (scoping) giữa 'var' và 'let'/'const' là gì?",
        solution: "'var' có phạm vi là hàm (function-scoped) hoặc toàn cục (globally-scoped). 'let' và 'const' có phạm vi là khối (block-scoped). Điều này có nghĩa là biến 'let' và 'const' chỉ có thể truy cập được trong khối (dấu ngoặc nhọn) nơi chúng được định nghĩa, trong khi biến 'var' có thể truy cập được trong toàn bộ hàm."
      }
    }
  },
  {
    _id: "js-m-005",
    difficulty: "middle",
    tags: ["hoisting"],
    content: {
      en: {
        title: "Hoisting in JavaScript",
        body: "Explain what hoisting is, particularly concerning 'var' declarations and function declarations.",
        solution: "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. Only the declaration is hoisted, not the initialization. 'var' variables are initialized with 'undefined', while 'let'/'const' and function expressions are also hoisted but remain in a 'temporal dead zone' until their declaration is encountered."
      },
      jp: {
        title: "JavaScriptのホイスティング",
        body: "ホイスティングとは何か、特に 'var' 宣言と関数宣言に関して説明してください。",
        solution: "ホイスティングは、コンパイルフェーズ中に変数と関数の宣言が、それらを含むスコープの先頭に移動されるJavaScriptのメカニズムです。初期化ではなく、宣言のみがホイスティングされます。『var』変数は 'undefined' で初期化されますが、『let』/『const』および関数式もホイスティングされますが、宣言に遭遇するまで 'temporal dead zone' に留まります。"
      },
      vi: {
        title: "Hoisting trong JavaScript",
        body: "Giải thích Hoisting là gì, đặc biệt liên quan đến khai báo 'var' và khai báo hàm.",
        solution: "Hoisting là một cơ chế của JavaScript, trong đó khai báo biến và hàm được di chuyển lên đầu phạm vi chứa chúng trong giai đoạn biên dịch. Chỉ có khai báo được hoisted, không phải phép gán giá trị (initialization). Biến 'var' được khởi tạo với giá trị 'undefined', trong khi 'let'/'const' và các biểu thức hàm cũng được hoisted nhưng vẫn nằm trong 'vùng chết tạm thời' (temporal dead zone) cho đến khi gặp khai báo của chúng."
      }
    }
  },
  {
    _id: "js-m-006",
    difficulty: "middle",
    tags: ["this", "context"],
    content: {
      en: {
        title: "'this' keyword behavior",
        body: "How does the value of the 'this' keyword change between a regular function call and a method call?",
        solution: "In a regular function call (non-strict mode), 'this' refers to the global object (window/global). In strict mode, 'this' is 'undefined'. In a method call (a function called as a property of an object), 'this' refers to the object that the method is a property of."
      },
      jp: {
        title: "'this' キーワードの動作",
        body: "通常の関数呼び出しとメソッド呼び出しの間で、『this』キーワードの値はどのように変化しますか？",
        solution: "通常の関数呼び出し（非strictモード）では、『this』はグローバルオブジェクト（window/global）を参照します。strictモードでは、『this』は『undefined』です。メソッド呼び出し（オブジェクトのプロパティとして呼び出される関数）では、『this』はそのメソッドがプロパティであるオブジェクトを参照します。"
      },
      vi: {
        title: "Hành vi của từ khóa 'this'",
        body: "Giá trị của từ khóa 'this' thay đổi như thế nào giữa một lời gọi hàm thông thường và một lời gọi phương thức (method call)?",
        solution: "Trong một lời gọi hàm thông thường (chế độ non-strict), 'this' trỏ đến đối tượng toàn cục (window/global). Trong chế độ strict mode, 'this' là 'undefined'. Trong một lời gọi phương thức (một hàm được gọi như một thuộc tính của một đối tượng), 'this' trỏ đến đối tượng mà phương thức đó là một thuộc tính."
      }
    }
  },
  {
    _id: "js-m-007",
    difficulty: "middle",
    tags: ["event-loop", "async"],
    content: {
      en: {
        title: "What is the Event Loop?",
        body: "Briefly describe the role of the Event Loop in JavaScript's concurrency model.",
        solution: "The Event Loop is a mechanism that handles asynchronous operations. JavaScript is single-threaded, so the Event Loop continuously checks if the Call Stack is empty. If it is, it takes pending messages/tasks from the Message Queue (like Promises, setTimeout, or I/O callbacks) and pushes them onto the Call Stack for execution, ensuring non-blocking behavior."
      },
      jp: {
        title: "イベントループとは？",
        body: "JavaScriptの並行性モデルにおけるイベントループの役割を簡単に説明してください。",
        solution: "イベントループは非同期操作を処理するメカニズムです。JavaScriptはシングルスレッドであるため、イベントループはコールスタックが空かどうかを継続的にチェックします。空の場合、メッセージキュー（Promise、setTimeout、I/Oコールバックなど）から保留中のメッセージ/タスクを取り出し、それらをコールスタックにプッシュして実行し、非ブロッキング動作を保証します。"
      },
      vi: {
        title: "Event Loop là gì?",
        body: "Mô tả ngắn gọn vai trò của Event Loop trong mô hình đồng thời (concurrency model) của JavaScript.",
        solution: "Event Loop là một cơ chế xử lý các hoạt động bất đồng bộ. JavaScript là đơn luồng (single-threaded), vì vậy Event Loop liên tục kiểm tra xem Call Stack có trống hay không. Nếu trống, nó sẽ lấy các thông báo/tác vụ đang chờ xử lý từ Message Queue (như Promises, setTimeout, hoặc I/O callbacks) và đẩy chúng vào Call Stack để thực thi, đảm bảo hành vi không chặn (non-blocking)."
      }
    }
  },
  {
    _id: "js-m-008",
    difficulty: "middle",
    tags: ["array", "method", "mutability"],
    content: {
      en: {
        title: "Mutable Array methods",
        body: "Name at least three array methods that **mutate** (change) the original array.",
        solution: "Examples of mutable array methods include: 'push()', 'pop()', 'shift()', 'unshift()', 'splice()', 'sort()', 'reverse()'."
      },
      jp: {
        title: "変更可能な配列メソッド",
        body: "元の配列を**変更する**（変更する）配列メソッドを少なくとも3つ挙げてください。",
        solution: "変更可能な配列メソッドの例には、『push()』、『pop()』、『shift()』、『unshift()』、『splice()』、『sort()』、『reverse()』があります。"
      },
      vi: {
        title: "Các phương thức Array có thể thay đổi (Mutable)",
        body: "Kể tên ít nhất ba phương thức array (mảng) có khả năng **thay đổi** (mutate) mảng gốc.",
        solution: "Các ví dụ về phương thức array có thể thay đổi bao gồm: 'push()', 'pop()', 'shift()', 'unshift()', 'splice()', 'sort()', 'reverse()'."
      }
    }
  },
  {
    _id: "js-m-009",
    difficulty: "middle",
    tags: ["destructuring", "es6"],
    content: {
      en: {
        title: "Array destructuring",
        body: "Show how to use array destructuring to swap the values of two variables, 'a' and 'b', without using a temporary variable.",
        solution: "let a = 1; let b = 2; [a, b] = [b, a]; // a is now 2, b is now 1"
      },
      jp: {
        title: "配列の分割代入",
        body: "配列の分割代入を使用して、一時変数を使用せずに、2つの変数 'a' と 'b' の値を交換する方法を示してください。",
        solution: "let a = 1; let b = 2; [a, b] = [b, a]; // a は現在 2、b は現在 1"
      },
      vi: {
        title: "Destructuring mảng",
        body: "Chỉ ra cách sử dụng destructuring mảng để hoán đổi giá trị của hai biến, 'a' và 'b', mà không cần dùng biến tạm thời.",
        solution: "let a = 1; let b = 2; [a, b] = [b, a]; // a hiện tại là 2, b hiện tại là 1"
      }
    }
  },
  {
    _id: "js-m-010",
    difficulty: "middle",
    tags: ["arrow-function", "this"],
    content: {
      en: {
        title: "Arrow function 'this'",
        body: "Why do arrow functions not have their own 'this' context?",
        solution: "Arrow functions do not have their own 'this' binding. Instead, they inherit the 'this' value from their surrounding (lexical) scope at the time they are created. This makes them unsuitable for use as object methods that need access to the object's properties via 'this'."
      },
      jp: {
        title: "アロー関数の 'this'",
        body: "アロー関数が独自の『this』コンテキストを持たないのはなぜですか？",
        solution: "アロー関数には独自の『this』バインディングがありません。代わりに、作成された時点での周囲の（レキシカルな）スコープから『this』の値を継承します。このため、『this』を介してオブジェクトのプロパティにアクセスする必要があるオブジェクトメソッドとしての使用には適していません。"
      },
      vi: {
        title: "'this' của Arrow Function",
        body: "Tại sao arrow function (hàm mũi tên) không có ngữ cảnh 'this' riêng của chúng?",
        solution: "Arrow function không có liên kết 'this' riêng. Thay vào đó, chúng kế thừa giá trị 'this' từ phạm vi bao quanh (lexical scope) tại thời điểm chúng được tạo. Điều này làm cho chúng không phù hợp để sử dụng làm phương thức đối tượng cần truy cập vào thuộc tính của đối tượng thông qua 'this'."
      }
    }
  },
  {
    _id: "js-m-011",
    difficulty: "middle",
    tags: ["module", "es6"],
    content: {
      en: {
        title: "Default vs Named exports",
        body: "What is the key difference between 'default' and 'named' exports in ES6 modules?",
        solution: "A module can have only **one default export**, which can be imported with any name without using curly braces. A module can have **multiple named exports**, which must be imported using their exact name (or an alias) and enclosed in curly braces."
      },
      jp: {
        title: "Default export vs Named export",
        body: "ES6モジュールにおける『default』エクスポートと『named』エクスポートの主な違いは何ですか？",
        solution: "モジュールには**1つのデフォルトエクスポート**のみを持つことができ、これは波括弧なしで任意の名前でインポートできます。モジュールは**複数の名前付きエクスポート**を持つことができ、これらは正確な名前（またはエイリアス）を使用してインポートし、波括弧で囲む必要があります。"
      },
      vi: {
        title: "Export Default và Export Named",
        body: "Sự khác biệt chính giữa 'default' export và 'named' export trong module ES6 là gì?",
        solution: "Một module chỉ có thể có **một default export**, có thể được import với bất kỳ tên nào mà không cần dùng dấu ngoặc nhọn. Một module có thể có **nhiều named export**, phải được import bằng cách sử dụng tên chính xác của chúng (hoặc một bí danh) và được bao quanh bởi dấu ngoặc nhọn."
      }
    }
  },
  {
    _id: "js-m-012",
    difficulty: "middle",
    tags: ["map", "set", "data-structure"],
    content: {
      en: {
        title: "Map vs Object keys",
        body: "What is a primary advantage of using a 'Map' over a regular JavaScript 'Object' for storing key-value pairs?",
        solution: "A 'Map' allows you to use **any value** (including objects, functions, or arrays) as a key, while an 'Object' only allows strings, Symbols, or Numbers (which are implicitly converted to strings) as keys."
      },
      jp: {
        title: "Map vs Object のキー",
        body: "キーと値のペアを保存するために、通常のJavaScriptの『Object』よりも『Map』を使用する主な利点は何ですか？",
        solution: "『Map』を使用すると、キーとして**任意の値**（オブジェクト、関数、配列などを含む）を使用できますが、『Object』ではキーとして文字列、シンボル、または数値（暗黙的に文字列に変換されます）のみが許可されます。"
      },
      vi: {
        title: "Keys của Map so với Object",
        body: "Lợi thế chính của việc sử dụng 'Map' so với 'Object' thông thường trong JavaScript để lưu trữ các cặp key-value là gì?",
        solution: "Một 'Map' cho phép bạn sử dụng **bất kỳ giá trị nào** (bao gồm đối tượng, hàm hoặc mảng) làm key, trong khi một 'Object' chỉ cho phép chuỗi, Symbol hoặc Số (được chuyển đổi ngầm thành chuỗi) làm key."
      }
  }
  },
  {
    _id: "js-m-013",
    difficulty: "middle",
    tags: ["strict-mode"],
    content: {
      en: {
        title: "Purpose of 'use strict'",
        body: "What is 'strict mode' in JavaScript and what is its main purpose?",
        solution: "Strict mode is a way to opt in to a restricted variant of JavaScript. Its main purpose is to eliminate silent errors by changing them to throw errors, fix mistakes that make it difficult for JavaScript engines to perform optimizations, and prohibit some syntax likely to be defined in future versions of ECMAScript."
      },
      jp: {
        title: "'use strict' の目的",
        body: "JavaScriptの『strict mode』とは何ですか、またその主な目的は何ですか？",
        solution: "Strict modeは、JavaScriptの制限されたバリアントを選択する方法です。主な目的は、暗黙のエラーをエラーとしてスローするように変更することでそれらを排除し、JavaScriptエンジンが最適化を行うことを困難にする間違いを修正し、ECMAScriptの将来のバージョンで定義される可能性のあるいくつかの構文を禁止することです。"
      },
      vi: {
        title: "Mục đích của 'use strict'",
        body: "'Strict mode' trong JavaScript là gì và mục đích chính của nó là gì?",
        solution: "Strict mode là một cách để chọn sử dụng một biến thể hạn chế của JavaScript. Mục đích chính của nó là loại bỏ các lỗi im lặng bằng cách biến chúng thành lỗi báo (throw errors), sửa chữa những lỗi khiến công cụ JavaScript khó thực hiện tối ưu hóa và cấm một số cú pháp có khả năng được định nghĩa trong các phiên bản ECMAScript tương lai."
      }
    }
  },
  {
    _id: "js-m-014",
    difficulty: "middle",
    tags: ["shallow-copy", "deep-copy"],
    content: {
      en: {
        title: "Shallow vs Deep Copy",
        body: "What is the difference between a shallow copy and a deep copy of an object?",
        solution: "A **shallow copy** creates a new object and copies the original object's properties' values. If the property value is a reference to an object (like an array or another object), only the reference is copied, not the object itself. A **deep copy** creates a new object and recursively copies all nested objects, ensuring the new object is completely independent of the original."
      },
      jp: {
        title: "シャローコピー vs ディープコピー",
        body: "オブジェクトのシャローコピーとディープコピーの違いは何ですか？",
        solution: "**シャローコピー**は新しいオブジェクトを作成し、元のオブジェクトのプロパティの値をコピーします。プロパティ値がオブジェクトへの参照（配列や別のオブジェクトなど）である場合、参照のみがコピーされ、オブジェクト自体はコピーされません。**ディープコピー**は新しいオブジェクトを作成し、すべてのネストされたオブジェクトを再帰的にコピーし、新しいオブジェクトが元のオブジェクトから完全に独立していることを保証します。"
      },
      vi: {
        title: "Shallow Copy vs Deep Copy",
        body: "Sự khác biệt giữa shallow copy (sao chép nông) và deep copy (sao chép sâu) của một đối tượng là gì?",
        solution: "**Shallow copy** tạo một đối tượng mới và sao chép các giá trị thuộc tính của đối tượng gốc. Nếu giá trị thuộc tính là một tham chiếu đến một đối tượng (như mảng hoặc đối tượng khác), chỉ tham chiếu được sao chép, không phải bản thân đối tượng đó. **Deep copy** tạo một đối tượng mới và sao chép đệ quy tất cả các đối tượng lồng nhau, đảm bảo đối tượng mới hoàn toàn độc lập với đối tượng gốc."
      }
    }
  },
  {
    _id: "js-m-015",
    difficulty: "middle",
    tags: ["generator", "iterator"],
    content: {
      en: {
        title: "Generator functions",
        body: "What is a generator function in JavaScript and what keyword is used to pause its execution?",
        solution: "A generator function is a function that can be paused and resumed. It is defined using the `function*` syntax and, when called, returns a Generator object (an Iterator). The `yield` keyword is used inside the generator to pause execution and return a value to the caller."
      },
      jp: {
        title: "ジェネレーター関数",
        body: "JavaScriptのジェネレーター関数とは何ですか、またその実行を一時停止するために使用されるキーワードは何ですか？",
        solution: "ジェネレーター関数は、一時停止して再開できる関数です。『function*』構文を使用して定義され、呼び出されるとGeneratorオブジェクト（Iterator）を返します。『yield』キーワードは、ジェネレーター内で実行を一時停止し、呼び出し元に値を返すために使用されます。"
      },
      vi: {
        title: "Generator Function",
        body: "Generator Function trong JavaScript là gì và từ khóa nào được sử dụng để tạm dừng việc thực thi của nó?",
        solution: "Generator Function là một hàm có thể tạm dừng và tiếp tục. Nó được định nghĩa bằng cú pháp `function*` và, khi được gọi, trả về một đối tượng Generator (một Iterator). Từ khóa `yield` được sử dụng bên trong generator để tạm dừng việc thực thi và trả về một giá trị cho bên gọi."
      }
    }
  },
  {
    _id: "js-m-016",
    difficulty: "middle",
    tags: ["callback-hell", "async"],
    content: {
      en: {
        title: "Callback Hell solution",
        body: "What is 'Callback Hell' and what ES6 feature is commonly used to resolve it?",
        solution: "'Callback Hell' (or the Pyramid of Doom) is a phenomenon where excessive nesting of asynchronous callbacks makes code difficult to read and maintain. The primary ES6 feature used to resolve it is **Promises** (and subsequently **async/await** built on top of Promises)."
      },
      jp: {
        title: "コールバックヘルへの解決策",
        body: "『コールバックヘル』とは何ですか、またそれを解決するために一般的に使用されるES6機能は何ですか？",
        solution: "『コールバックヘル』（またはPyramid of Doom）は、非同期コールバックの過度のネストにより、コードの読み書きと保守が困難になる現象です。それを解決するために使用される主要なES6機能は、**Promise**（およびPromiseの上に構築された**async/await**）です。"
      },
      vi: {
        title: "Giải pháp cho Callback Hell",
        body: "'Callback Hell' là gì và tính năng ES6 nào thường được sử dụng để giải quyết nó?",
        solution: "'Callback Hell' (hay còn gọi là Pyramid of Doom) là một hiện tượng mà việc lồng quá nhiều callback bất đồng bộ khiến code khó đọc và bảo trì. Tính năng ES6 chính được sử dụng để giải quyết nó là **Promises** (và sau đó là **async/await** được xây dựng trên Promises)."
      }
    }
  },
  {
    _id: "js-m-017",
    difficulty: "middle",
    tags: ["function", "bind", "apply", "call"],
    content: {
      en: {
        title: "Call vs Apply",
        body: "What is the difference between the `.call()` and `.apply()` methods for invoking a function?",
        solution: "Both `.call()` and `.apply()` are used to invoke a function with a specified 'this' value. The difference is in how they pass arguments: `.call()` accepts a comma-separated list of arguments, while `.apply()` accepts a single array of arguments."
      },
      jp: {
        title: "Call vs Apply",
        body: "関数を呼び出すための『.call()』メソッドと『.apply()』メソッドの違いは何ですか？",
        solution: "『.call()』と『.apply()』の両方とも、指定された『this』値で関数を呼び出すために使用されます。違いは引数の渡し方にあります: 『.call()』はカンマ区切りの引数リストを受け入れますが、『.apply()』は単一の引数配列を受け入れます。"
      },
      vi: {
        title: "Call và Apply",
        body: "Sự khác biệt giữa hai phương thức `.call()` và `.apply()` khi gọi một hàm là gì?",
        solution: "Cả `.call()` và `.apply()` đều được sử dụng để gọi một hàm với một giá trị 'this' được chỉ định. Sự khác biệt nằm ở cách chúng truyền đối số: `.call()` chấp nhận một danh sách đối số được phân tách bằng dấu phẩy, trong khi `.apply()` chấp nhận một mảng đối số duy nhất."
      }
    }
  },
  {
    _id: "js-m-018",
    difficulty: "middle",
    tags: ["destructuring", "rest"],
    content: {
      en: {
        title: "Rest parameter in Destructuring",
        body: "How can you use the rest parameter (`...`) during object destructuring to collect the remaining properties into a new object?",
        solution: "const { a, b, ...rest } = myObject; // The 'rest' variable will be a new object containing all properties from 'myObject' except 'a' and 'b'. The rest parameter must be the last element in the destructuring pattern."
      },
      jp: {
        title: "分割代入におけるRestパラメーター",
        body: "オブジェクトの分割代入中にrestパラメーター（`...`）を使用して、残りのプロパティを新しいオブジェクトに収集するにはどうすればよいですか？",
        solution: "const { a, b, ...rest } = myObject; // 『rest』変数は、『myObject』の『a』と『b』を除くすべてのプロパティを含む新しいオブジェクトになります。restパラメーターは、分割代入パターンの最後の要素でなければなりません。"
      },
      vi: {
        title: "Rest parameter trong Destructuring",
        body: "Làm thế nào bạn có thể sử dụng rest parameter (`...`) trong quá trình destructuring đối tượng để thu thập các thuộc tính còn lại vào một đối tượng mới?",
        solution: "const { a, b, ...rest } = myObject; // Biến 'rest' sẽ là một đối tượng mới chứa tất cả các thuộc tính từ 'myObject' ngoại trừ 'a' và 'b'. Rest parameter phải là phần tử cuối cùng trong mẫu destructuring."
      }
    }
  },
  {
    _id: "js-m-019",
    difficulty: "middle",
    tags: ["promise", "error-handling"],
    content: {
      en: {
        title: "Promise error handling",
        body: "How do you handle an error that occurs in a chain of Promises?",
        solution: "Errors in a Promise chain are handled by attaching a `.catch()` method at the end of the chain. A `.catch()` block will intercept any rejection (error) that occurs anywhere in the preceding chain."
      },
      jp: {
        title: "Promiseのエラー処理",
        body: "Promiseのチェーンで発生するエラーをどのように処理しますか？",
        solution: "Promiseチェーンのエラーは、チェーンの最後に『.catch()』メソッドを付加することで処理されます。『.catch()』ブロックは、先行するチェーンのどこかで発生した拒否（エラー）をインターセプトします。"
      },
      vi: {
        title: "Xử lý lỗi trong Promise",
        body: "Làm thế nào để xử lý lỗi xảy ra trong một chuỗi Promises?",
        solution: "Lỗi trong một chuỗi Promise được xử lý bằng cách đính kèm phương thức `.catch()` vào cuối chuỗi. Khối `.catch()` sẽ chặn bất kỳ sự từ chối (lỗi) nào xảy ra ở bất kỳ đâu trong chuỗi phía trước."
      }
    }
  },
  {
    _id: "js-m-020",
    difficulty: "middle",
    tags: ["iife"],
    content: {
      en: {
        title: "What is an IIFE?",
        body: "What does IIFE stand for and what is its main use case?",
        solution: "IIFE stands for **Immediately Invoked Function Expression**. Its main use case is to create a private scope for variables and functions, preventing them from polluting the global scope."
      },
      jp: {
        title: "IIFEとは？",
        body: "IIFEは何の略で、その主な使用例は何ですか？",
        solution: "IIFEは**Immediately Invoked Function Expression**（即時実行関数式）の略です。主な使用例は、変数と関数のプライベートスコープを作成し、それらがグローバルスコープを汚染するのを防ぐことです。"
      },
      vi: {
        title: "IIFE là gì?",
        body: "IIFE là viết tắt của từ gì và trường hợp sử dụng chính của nó là gì?",
        solution: "IIFE là viết tắt của **Immediately Invoked Function Expression** (Biểu thức hàm được gọi ngay lập tức). Trường hợp sử dụng chính của nó là tạo ra một phạm vi riêng tư (private scope) cho các biến và hàm, ngăn chúng làm ô nhiễm phạm vi toàn cục (global scope)."
      }
    }
  },
  {
    _id: "js-m-021",
    difficulty: "middle",
    tags: ["null", "undefined"],
    content: {
      en: {
        title: "null vs undefined",
        body: "What is the difference between 'null' and 'undefined'?",
        solution: "'undefined' means a variable has been declared but has not yet been assigned a value. 'null' is an assignment value that represents the intentional absence of any object value. They are equal with `==` but not with `===`."
      },
      jp: {
        title: "null vs undefined",
        body: "『null』と『undefined』の違いは何ですか？",
        solution: "『undefined』は、変数が宣言されたが、まだ値が割り当てられていないことを意味します。『null』は、意図的にオブジェクト値がないことを表す代入値です。これらは『==』では等しいですが、『===』では等しくありません。"
      },
      vi: {
        title: "null so với undefined",
        body: "Sự khác biệt giữa 'null' và 'undefined' là gì?",
        solution: "'undefined' có nghĩa là một biến đã được khai báo nhưng chưa được gán giá trị. 'null' là một giá trị gán đại diện cho sự vắng mặt có chủ đích của bất kỳ giá trị đối tượng nào. Chúng bằng nhau với `==` nhưng không bằng nhau với `===`."
      }
    }
  },
  {
    _id: "js-m-022",
    difficulty: "middle",
    tags: ["async", "await"],
    content: {
      en: {
        title: "Async/await purpose",
        body: "What is the main advantage of using 'async/await' over using raw Promises with '.then()'?",
        solution: "The main advantage is that 'async/await' makes asynchronous code look and behave more like synchronous code, making it significantly easier to read, write, and debug, especially when dealing with complex sequential asynchronous operations."
      },
      jp: {
        title: "Async/await の目的",
        body: "生のPromiseを『.then()』で使用するのと比べて、『async/await』を使用する主な利点は何ですか？",
        solution: "主な利点は、『async/await』が非同期コードを同期コードのように見せ、動作させるため、特に複雑な連続的な非同期操作を扱う場合に、読み書き、デバッグが大幅に簡単になることです。"
      },
      vi: {
        title: "Mục đích của Async/await",
        body: "Lợi thế chính của việc sử dụng 'async/await' so với việc sử dụng Promises thô với '.then()' là gì?",
        solution: "Lợi thế chính là 'async/await' làm cho code bất đồng bộ trông và hoạt động giống như code đồng bộ hơn, giúp việc đọc, viết và debug dễ dàng hơn đáng kể, đặc biệt khi xử lý các thao tác bất đồng bộ tuần tự phức tạp."
      }
    }
  },
  {
    _id: "js-m-023",
    difficulty: "middle",
    tags: ["spread", "rest"],
    content: {
      en: {
        title: "Spread vs Rest operator",
        body: "What is the difference between the Spread operator (`...`) and the Rest parameter (`...`)?",
        solution: "The **Spread operator** is used to expand an iterable (like an array or string) into its individual elements. The **Rest parameter** is used to gather multiple arguments into a single array (when used in function parameters) or collect remaining properties into a new object (during destructuring)."
      },
      jp: {
        title: "Spread operator vs Rest parameter",
        body: "Spread演算子（`...`）とRestパラメーター（`...`）の違いは何ですか？",
        solution: "**Spread演算子**は、反復可能オブジェクト（配列や文字列など）を個々の要素に展開するために使用されます。**Restパラメーター**は、複数の引数を単一の配列に集める（関数パラメーターで使用する場合）か、残りのプロパティを新しいオブジェクトに収集する（分割代入中に）ために使用されます。"
      },
      vi: {
        title: "Spread operator vs Rest parameter",
        body: "Sự khác biệt giữa Spread operator (`...`) và Rest parameter (`...`) là gì?",
        solution: "**Spread operator** được sử dụng để mở rộng một iterable (như mảng hoặc chuỗi) thành các phần tử riêng lẻ của nó. **Rest parameter** được sử dụng để thu thập nhiều đối số thành một mảng duy nhất (khi được sử dụng trong tham số hàm) hoặc thu thập các thuộc tính còn lại vào một đối tượng mới (trong quá trình destructuring)."
      }
    }
  },
  {
    _id: "js-m-024",
    difficulty: "middle",
    tags: ["type-coercion"],
    content: {
      en: {
        title: "Implicit type coercion",
        body: "What is the result of the expression `'5' + 5` and why?",
        solution: "The result is the string `'55'`. This is due to JavaScript's implicit type coercion. When the `+` operator is used with a string and a number, the number is coerced into a string, and the operator performs string concatenation instead of numeric addition."
      },
      jp: {
        title: "暗黙的な型強制",
        body: "式『'5' + 5』の結果は何で、その理由は何ですか？",
        solution: "結果は文字列『'55'』です。これは、JavaScriptの暗黙的な型強制によるものです。『+』演算子が文字列と数値とともに使用されると、数値は文字列に強制され、演算子は数値の加算ではなく文字列の連結を実行します。"
      },
      vi: {
        title: "Chuyển đổi kiểu ngầm định",
        body: "Kết quả của biểu thức `'5' + 5` là gì và tại sao?",
        solution: "Kết quả là chuỗi `'55'`. Điều này là do sự chuyển đổi kiểu ngầm định (implicit type coercion) của JavaScript. Khi toán tử `+` được sử dụng với một chuỗi và một số, số sẽ được chuyển đổi thành chuỗi, và toán tử thực hiện nối chuỗi thay vì cộng số."
      }
    }
  },
  {
    _id: "js-m-025",
    difficulty: "middle",
    tags: ["promise", "static-method"],
    content: {
      en: {
        title: "Promise.all() use case",
        body: "When is it appropriate to use the `Promise.all()` static method?",
        solution: "`Promise.all()` is used when you have multiple asynchronous operations that are independent of each other and you want to wait for **all** of them to successfully complete before proceeding. It returns a single Promise that resolves with an array of the results of the input promises, in the same order."
      },
      jp: {
        title: "Promise.all() の使用例",
        body: "`Promise.all()`静的メソッドを使用するのが適切なのはどのような場合ですか？",
        solution: "`Promise.all()`は、互いに独立している複数の非同期操作があり、続行する前に**すべて**が正常に完了するのを待つ必要がある場合に使用されます。これは、入力Promiseの結果の配列で解決される単一のPromiseを、同じ順序で返します。"
      },
      vi: {
        title: "Trường hợp sử dụng Promise.all()",
        body: "Khi nào thì thích hợp để sử dụng phương thức tĩnh `Promise.all()`?",
        solution: "`Promise.all()` được sử dụng khi bạn có nhiều thao tác bất đồng bộ độc lập với nhau và bạn muốn chờ **tất cả** chúng hoàn thành thành công trước khi tiếp tục. Nó trả về một Promise duy nhất giải quyết bằng một mảng các kết quả của các promise đầu vào, theo đúng thứ tự."
      }
    }
  },
  {
    _id: "js-m-026",
    difficulty: "middle",
    tags: ["array", "method", "functional"],
    content: {
      en: {
        title: "Purpose of Array.prototype.reduce()",
        body: "Explain the main purpose of the `Array.prototype.reduce()` method.",
        solution: "The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It is typically used to accumulate an array of values into a single value, such as summing all numbers, flattening an array, or creating an object from an array."
      },
      jp: {
        title: "Array.prototype.reduce() の目的",
        body: "`Array.prototype.reduce()`メソッドの主な目的を説明してください。",
        solution: "`reduce()`メソッドは、配列の各要素に対して（提供する）reducer関数を実行し、単一の出力値をもたらします。通常、配列の値を合計したり、配列をフラット化したり、配列からオブジェクトを作成したりするなど、単一の値に集約するために使用されます。"
      },
      vi: {
        title: "Mục đích của Array.prototype.reduce()",
        body: "Giải thích mục đích chính của phương thức `Array.prototype.reduce()`.",
        solution: "Phương thức `reduce()` thực thi một hàm reducer (do bạn cung cấp) trên từng phần tử của mảng, dẫn đến một giá trị đầu ra duy nhất. Nó thường được sử dụng để tích lũy một mảng các giá trị thành một giá trị duy nhất, chẳng hạn như tính tổng tất cả các số, làm phẳng một mảng (flattening an array), hoặc tạo một đối tượng từ một mảng."
      }
    }
  },
  {
    _id: "js-m-027",
    difficulty: "middle",
    tags: ["event-delegation", "dom"],
    content: {
      en: {
        title: "Event Delegation",
        body: "What is event delegation and why is it considered a good practice in DOM manipulation?",
        solution: "Event delegation is a pattern where you attach a single event listener to a parent element instead of attaching listeners to every child element. The parent listener then analyzes the target of the event (using `event.target`) to figure out what child element the event actually originated from. It's a good practice because it improves performance (fewer listeners) and simplifies handling dynamically added elements."
      },
      jp: {
        title: "イベント委譲 (Event Delegation)",
        body: "イベント委譲とは何ですか、またDOM操作においてそれが良い慣行と見なされるのはなぜですか？",
        solution: "イベント委譲は、すべての子要素にリスナーをアタッチする代わりに、単一のイベントリスナーを親要素にアタッチするパターンです。その後、親リスナーはイベントのターゲット（`event.target`を使用）を分析して、イベントが実際にどの子要素から発生したかを把握します。リスナーが少なくなり、動的に追加された要素の処理が簡素化されるため、パフォーマンスが向上するため、良い慣行とされています。"
      },
      vi: {
        title: "Event Delegation",
        body: "Event Delegation (Ủy quyền sự kiện) là gì và tại sao nó được coi là một thực hành tốt trong thao tác DOM?",
        solution: "Event delegation là một mô hình mà bạn gắn một trình lắng nghe sự kiện duy nhất vào một phần tử cha thay vì gắn trình lắng nghe vào mọi phần tử con. Trình lắng nghe của phần tử cha sau đó phân tích mục tiêu của sự kiện (sử dụng `event.target`) để tìm ra phần tử con nào thực sự là nguồn gốc của sự kiện. Đây là một thực hành tốt vì nó cải thiện hiệu suất (ít trình lắng nghe hơn) và đơn giản hóa việc xử lý các phần tử được thêm vào một cách động."
      }
    }
  },
  {
    _id: "js-m-028",
    difficulty: "middle",
    tags: ["higher-order-function", "functional"],
    content: {
      en: {
        title: "Higher-Order Function",
        body: "Define a Higher-Order Function (HOF) and give an example of one built into JavaScript.",
        solution: "A Higher-Order Function (HOF) is a function that either takes one or more functions as arguments or returns a function as its result. A common built-in example is `Array.prototype.map()`, which takes a callback function as an argument."
      },
      jp: {
        title: "高階関数 (Higher-Order Function)",
        body: "高階関数（HOF）を定義し、JavaScriptに組み込まれている例を挙げてください。",
        solution: "高階関数（HOF）とは、1つ以上の関数を引数として取るか、関数をその結果として返す関数のことです。一般的な組み込みの例は`Array.prototype.map()`で、コールバック関数を引数として取ります。"
      },
      vi: {
        title: "Higher-Order Function (Hàm bậc cao)",
        body: "Định nghĩa Higher-Order Function (HOF) và đưa ra một ví dụ về một HOF được tích hợp sẵn trong JavaScript.",
        solution: "Higher-Order Function (HOF) là một hàm hoặc nhận một hoặc nhiều hàm làm đối số hoặc trả về một hàm làm kết quả của nó. Một ví dụ tích hợp sẵn phổ biến là `Array.prototype.map()`, nhận một hàm callback làm đối số."
      }
    }
  },
  {
    _id: "js-m-029",
    difficulty: "middle",
    tags: ["temporal-dead-zone", "let", "const"],
    content: {
      en: {
        title: "Temporal Dead Zone",
        body: "What is the Temporal Dead Zone (TDZ) and which keywords are affected by it?",
        solution: "The Temporal Dead Zone (TDZ) is the period of time during which 'let' and 'const' declarations exist but cannot be accessed. It starts when the binding is created (at the start of the block) and ends when the declaration is executed and the value is initialized. Accessing the variable during the TDZ results in a `ReferenceError`."
      },
      jp: {
        title: "一時的なデッドゾーン (TDZ)",
        body: "一時的なデッドゾーン（TDZ）とは何ですか、またどのキーワードが影響を受けますか？",
        solution: "一時的なデッドゾーン（TDZ）は、『let』と『const』の宣言が存在するものの、アクセスできない期間です。バインディングが作成されたとき（ブロックの開始時）に始まり、宣言が実行されて値が初期化されたときに終了します。TDZ中に変数にアクセスすると、`ReferenceError`が発生します。"
      },
      vi: {
        title: "Temporal Dead Zone (Vùng chết tạm thời)",
        body: "Temporal Dead Zone (TDZ) là gì và những từ khóa nào bị ảnh hưởng bởi nó?",
        solution: "Temporal Dead Zone (TDZ) là khoảng thời gian mà các khai báo 'let' và 'const' tồn tại nhưng không thể được truy cập. Nó bắt đầu khi ràng buộc được tạo (ở đầu khối) và kết thúc khi khai báo được thực thi và giá trị được khởi tạo. Truy cập biến trong TDZ sẽ dẫn đến một `ReferenceError`."
      }
    }
  },
  {
    _id: "js-m-030",
    difficulty: "middle",
    tags: ["module", "scope"],
    content: {
      en: {
        title: "File-level scope",
        body: "How do ES6 Modules change the default scope of top-level variables declared in a file?",
        solution: "Without modules, top-level variables declared with 'var' (or implicitly) pollute the global scope. In an ES6 Module, all top-level variables, functions, and classes are **scoped to that module file** (module scope) and are not automatically added to the global scope. They must be explicitly exported and imported."
      },
      jp: {
        title: "ファイルレベルのスコープ",
        body: "ES6モジュールは、ファイル内で宣言されたトップレベル変数のデフォルトのスコープをどのように変更しますか？",
        solution: "モジュールがない場合、『var』で宣言された（または暗黙的に宣言された）トップレベル変数はグローバルスコープを汚染します。ES6モジュールでは、すべてのトップレベル変数、関数、およびクラスは**そのモジュールファイルにスコープされ**（モジュールスコープ）、グローバルスコープに自動的に追加されません。これらは明示的にエクスポートおよびインポートされる必要があります。"
      },
      vi: {
        title: "Phạm vi cấp độ file",
        body: "ES6 Modules thay đổi phạm vi mặc định của các biến cấp cao nhất (top-level variables) được khai báo trong một file như thế nào?",
        solution: "Nếu không có module, các biến cấp cao nhất được khai báo bằng 'var' (hoặc ngầm định) sẽ làm ô nhiễm phạm vi toàn cục. Trong một ES6 Module, tất cả các biến, hàm và lớp cấp cao nhất được **phạm vi hóa cho file module đó** (module scope) và không tự động được thêm vào phạm vi toàn cục. Chúng phải được xuất (export) và nhập (import) một cách rõ ràng."
      }
    }
  },
  {
    _id: "js-m-031",
    difficulty: "middle",
    tags: ["data-type"],
    content: {
      en: {
        title: "Is JavaScript strongly or weakly typed?",
        body: "Is JavaScript considered a strongly-typed or weakly-typed language? Explain your answer with an example.",
        solution: "JavaScript is considered a **weakly-typed** (or loosely-typed) language. This is because it allows implicit type coercion, where the language automatically converts types during certain operations. Example: `1 + '2'` results in `'12'` (string concatenation) without throwing an error."
      },
      jp: {
        title: "JavaScriptは強い型付けですか、それとも弱い型付けですか？",
        body: "JavaScriptは強い型付け言語と見なされますか、それとも弱い型付け言語と見なされますか？例を挙げて説明してください。",
        solution: "JavaScriptは**弱い型付け**（または loosely-typed）言語と見なされます。これは、特定の操作中に言語が自動的に型を変換する暗黙的な型強制を許可するためです。例: `1 + '2'` はエラーをスローせずに `'12'`（文字列連結）になります。"
      },
      vi: {
        title: "JavaScript là ngôn ngữ có kiểu dữ liệu mạnh hay yếu?",
        body: "JavaScript được coi là ngôn ngữ có kiểu dữ liệu mạnh (strongly-typed) hay yếu (weakly-typed)? Giải thích câu trả lời của bạn bằng một ví dụ.",
        solution: "JavaScript được coi là một ngôn ngữ **kiểu yếu** (weakly-typed) (hoặc loosely-typed). Điều này là do nó cho phép chuyển đổi kiểu ngầm định (implicit type coercion), trong đó ngôn ngữ tự động chuyển đổi các kiểu trong một số thao tác nhất định. Ví dụ: `1 + '2'` cho kết quả là `'12'` (nối chuỗi) mà không báo lỗi."
      }
    }
  },
  {
    _id: "js-m-032",
    difficulty: "middle",
    tags: ["error-handling", "try-catch"],
    content: {
      en: {
        title: "Error handling: 'finally' block",
        body: "When is the code inside a `finally` block guaranteed to execute?",
        solution: "The code inside a `finally` block is **always** executed, regardless of whether the `try` block completed successfully or if an exception was caught by the `catch` block (or not caught, if no `catch` exists). It's typically used for cleanup code, like closing resources."
      },
      jp: {
        title: "エラー処理: 'finally' ブロック",
        body: "`finally`ブロック内のコードはいつ実行されることが保証されますか？",
        solution: "`finally`ブロック内のコードは、`try`ブロックが正常に完了したか、例外が`catch`ブロックによってキャッチされたか（または`catch`が存在しない場合はキャッチされなかったか）にかかわらず、**常**に実行されます。通常、リソースのクローズなどのクリーンアップコードに使用されます。"
      },
      vi: {
        title: "Xử lý lỗi: khối 'finally'",
        body: "Code bên trong khối `finally` được đảm bảo thực thi khi nào?",
        solution: "Code bên trong khối `finally` **luôn luôn** được thực thi, bất kể khối `try` có hoàn thành thành công hay không hoặc liệu một ngoại lệ có được khối `catch` bắt hay không (hoặc không được bắt, nếu không có `catch` nào tồn tại). Nó thường được sử dụng cho code dọn dẹp, chẳng hạn như đóng tài nguyên."
      }
    }
  },
  {
    _id: "js-m-033",
    difficulty: "middle",
    tags: ["dom", "performance"],
    content: {
      en: {
        title: "DOM manipulation performance",
        body: "What is 'reflow' (or 'layout') and how can excessive DOM manipulation impact performance?",
        solution: "A 'reflow' is the browser's process of calculating the positions and geometries of elements in the document to render them. Excessive DOM manipulation (especially changing styles/dimensions repeatedly) forces the browser to perform multiple reflows, which is computationally expensive and can significantly slow down page rendering, leading to jank."
      },
      jp: {
        title: "DOM操作のパフォーマンス",
        body: "『reflow』（または『layout』）とは何ですか、また過度なDOM操作はパフォーマンスにどのように影響しますか？",
        solution: "『reflow』は、ドキュメント内の要素の位置と形状を計算してレンダリングするブラウザのプロセスです。過度なDOM操作（特にスタイル/寸法を繰り返し変更する）は、ブラウザに複数のreflowを実行させ、これは計算コストが高く、ページのレンダリングを大幅に遅くし、『jank』につながる可能性があります。"
      },
      vi: {
        title: "Hiệu suất thao tác DOM",
        body: "'Reflow' (hoặc 'layout') là gì và việc thao tác DOM quá mức có thể ảnh hưởng đến hiệu suất như thế nào?",
        solution: "'Reflow' là quá trình trình duyệt tính toán lại vị trí và hình học của các phần tử trong tài liệu để hiển thị chúng. Thao tác DOM quá mức (đặc biệt là thay đổi kiểu/kích thước lặp đi lặp lại) buộc trình duyệt phải thực hiện nhiều reflow, điều này tốn kém về mặt tính toán và có thể làm chậm đáng kể việc hiển thị trang, dẫn đến hiện tượng giật (jank)."
      }
    }
  },
  {
    _id: "js-m-034",
    difficulty: "middle",
    tags: ["functional", "composition"],
    content: {
      en: {
        title: "Function composition",
        body: "In functional programming, what does 'function composition' mean?",
        solution: "Function composition is the act of combining simple functions to build more complicated ones. The output of one function is used as the input for the next function, like a pipeline. Mathematically, given $f(x)$ and $g(x)$, composition is $f(g(x))$. This enhances reusability and readability."
      },
      jp: {
        title: "関数合成",
        body: "関数型プログラミングにおいて、『関数合成』とは何を意味しますか？",
        solution: "関数合成とは、単純な関数を組み合わせてより複雑な関数を構築する行為です。ある関数の出力が次の関数の入力として使用され、パイプラインのようになります。数学的には、$f(x)$ と $g(x)$ が与えられた場合、合成は $f(g(x))$ です。これにより、再利用性と可読性が向上します。"
      },
      vi: {
        title: "Function composition (Hợp thành hàm)",
        body: "Trong lập trình hàm (functional programming), 'function composition' có nghĩa là gì?",
        solution: "Function composition là hành động kết hợp các hàm đơn giản để xây dựng các hàm phức tạp hơn. Đầu ra của một hàm được sử dụng làm đầu vào cho hàm tiếp theo, giống như một đường ống. Về mặt toán học, với $f(x)$ và $g(x)$, hợp thành là $f(g(x))$. Điều này tăng cường khả năng tái sử dụng và khả năng đọc."
      }
    }
  },
  {
    _id: "js-m-035",
    difficulty: "middle",
    tags: ["class", "constructor"],
    content: {
      en: {
        title: "Class Constructor purpose",
        body: "What is the role of the `constructor` method in an ES6 class?",
        solution: "The `constructor` method is a special method used to **create and initialize an object** created with the `class`. It is the first method called when a new instance of the class is created using the `new` keyword. It is typically used to set initial property values and bind methods."
      },
      jp: {
        title: "クラスのコンストラクターの目的",
        body: "ES6クラスにおける `constructor` メソッドの役割は何ですか？",
        solution: "`constructor`メソッドは、`class`で作成された**オブジェクトを作成および初期化する**ために使用される特別なメソッドです。これは、`new`キーワードを使用してクラスの新しいインスタンスが作成されたときに最初に呼び出されるメソッドです。通常、初期のプロパティ値を設定したり、メソッドをバインドしたりするために使用されます。"
      },
      vi: {
        title: "Mục đích của Class Constructor",
        body: "Vai trò của phương thức `constructor` trong một lớp ES6 là gì?",
        solution: "Phương thức `constructor` là một phương thức đặc biệt được sử dụng để **tạo và khởi tạo một đối tượng** được tạo bằng `class`. Đây là phương thức đầu tiên được gọi khi một thể hiện mới của lớp được tạo bằng từ khóa `new`. Nó thường được sử dụng để thiết lập các giá trị thuộc tính ban đầu và liên kết (bind) các phương thức."
      }
    }
  },
  {
    _id: "js-m-036",
    difficulty: "middle",
    tags: ["promise", "async-await"],
    content: {
      en: {
        title: "Async function return value",
        body: "What does an `async` function always return?",
        solution: "An `async` function always returns a **Promise**. If the function returns a non-Promise value, JavaScript automatically wraps it in a resolved Promise. If the function throws an error, it returns a rejected Promise."
      },
      jp: {
        title: "Async関数の戻り値",
        body: "`async`関数は常に何を返しますか？",
        solution: "`async`関数は常に**Promise**を返します。関数がPromise以外の値を返す場合、JavaScriptはそれを自動的に解決されたPromiseでラップします。関数がエラーをスローすると、拒否されたPromiseを返します。"
      },
      vi: {
        title: "Giá trị trả về của Async function",
        body: "Một hàm `async` luôn trả về gì?",
        solution: "Một hàm `async` luôn trả về một **Promise**. Nếu hàm trả về một giá trị không phải là Promise, JavaScript sẽ tự động gói nó trong một Promise đã được giải quyết (resolved Promise). Nếu hàm ném ra lỗi, nó sẽ trả về một Promise bị từ chối (rejected Promise)."
      }
    }
  },
  {
    _id: "js-m-037",
    difficulty: "middle",
    tags: ["equality", "comparison"],
    content: {
      en: {
        title: "Strict equality vs Loose equality",
        body: "Explain the difference between the '==' (loose equality) and '===' (strict equality) operators.",
        solution: "The '==' (loose equality) operator compares two values for equality **after performing type coercion** (converting one or both types to a common type). The '===' (strict equality) operator compares two values for equality **without performing any type coercion**, meaning both the value and the type must be the same to be true."
      },
      jp: {
        title: "厳密な等価性 vs 緩い等価性",
        body: "『==』（緩い等価性）演算子と『===』（厳密な等価性）演算子の違いを説明してください。",
        solution: "『==』（緩い等価性）演算子は、**型強制を実行した後**（一方または両方の型を共通の型に変換した後）に2つの値を比較します。『===』（厳密な等価性）演算子は、**型強制を実行せずに**2つの値を比較します。つまり、値と型の両方が同じである場合にのみtrueになります。"
      },
      vi: {
        title: "Strict equality vs Loose equality",
        body: "Giải thích sự khác biệt giữa toán tử '==' (loose equality - bằng lỏng) và '===' (strict equality - bằng nghiêm ngặt).",
        solution: "Toán tử '==' (loose equality) so sánh hai giá trị về sự bằng nhau **sau khi thực hiện chuyển đổi kiểu** (type coercion - chuyển đổi một hoặc cả hai kiểu về một kiểu chung). Toán tử '===' (strict equality) so sánh hai giá trị về sự bằng nhau **mà không thực hiện bất kỳ chuyển đổi kiểu nào**, nghĩa là cả giá trị và kiểu đều phải giống nhau thì mới là true."
      }
    }
  },
  {
    _id: "js-m-038",
    difficulty: "middle",
    tags: ["array", "method"],
    content: {
      en: {
        title: "When to use .forEach()",
        body: "Why would you choose `Array.prototype.forEach()` over a standard `for` loop?",
        solution: "You would choose `forEach()` for its readability and functional style, especially when the goal is simply to iterate over the array and perform an action (a side effect) on each element. However, a `for` loop is necessary if you need to break the loop early, skip iterations (using `continue`), or iterate over sparse arrays efficiently."
      },
      jp: {
        title: ".forEach() を使用する時期",
        body: "標準の `for` ループではなく `Array.prototype.forEach()` を選択するのはなぜですか？",
        solution: "読みやすさと関数型スタイル、特に目標が単に配列を反復処理し、各要素に対してアクション（副作用）を実行することである場合は、`forEach()`を選択します。ただし、ループを早期に終了する必要がある場合、反復をスキップする（`continue`を使用）必要がある場合、または疎な配列を効率的に反復処理する必要がある場合は、`for`ループが必要です。"
      },
      vi: {
        title: "Khi nào sử dụng .forEach()",
        body: "Tại sao bạn lại chọn `Array.prototype.forEach()` thay vì vòng lặp `for` tiêu chuẩn?",
        solution: "Bạn sẽ chọn `forEach()` vì khả năng đọc và phong cách hàm của nó, đặc biệt khi mục tiêu chỉ đơn giản là lặp qua mảng và thực hiện một hành động (một tác dụng phụ) trên mỗi phần tử. Tuy nhiên, vòng lặp `for` là cần thiết nếu bạn cần thoát vòng lặp sớm, bỏ qua các lần lặp (sử dụng `continue`), hoặc lặp qua các mảng thưa (sparse arrays) một cách hiệu quả."
      }
    }
  },
  {
    _id: "js-m-039",
    difficulty: "middle",
    tags: ["data-structure", "set"],
    content: {
      en: {
        title: "Set purpose",
        body: "What is the main use case for the ES6 `Set` object?",
        solution: "The `Set` object is a collection of unique values. Its main use case is to **store a list of unique items** and to **easily remove duplicates** from an existing array. It provides methods like `add()`, `delete()`, and `has()` for managing unique elements."
      },
      jp: {
        title: "Set の目的",
        body: "ES6の `Set` オブジェクトの主な使用例は何ですか？",
        solution: "`Set`オブジェクトは、一意の値のコレクションです。主な使用例は、**一意のアイテムのリストを保存する**ことと、既存の配列から**重複を簡単に削除する**ことです。一意の要素を管理するための `add()`、`delete()`、`has()`などのメソッドを提供します。"
      },
      vi: {
        title: "Mục đích của Set",
        body: "Trường hợp sử dụng chính cho đối tượng `Set` của ES6 là gì?",
        solution: "Đối tượng `Set` là một tập hợp các giá trị duy nhất. Trường hợp sử dụng chính của nó là **lưu trữ một danh sách các mục duy nhất** và **dễ dàng loại bỏ các bản sao** khỏi một mảng hiện có. Nó cung cấp các phương thức như `add()`, `delete()`, và `has()` để quản lý các phần tử duy nhất."
      }
    }
  },
  {
    _id: "js-m-040",
    difficulty: "middle",
    tags: ["promise", "static-method"],
    content: {
      en: {
        title: "Promise.race() use case",
        body: "Describe the behavior of `Promise.race()` and when you would use it.",
        solution: "`Promise.race()` returns a promise that fulfills or rejects as soon as **one** of the promises in the iterable fulfills or rejects, with the value or reason from that promise. You would use it when you want to execute multiple async operations and only care about the result of the *fastest* one (e.g., a timeout pattern)."
      },
      jp: {
        title: "Promise.race() の使用例",
        body: "`Promise.race()`の動作と、いつそれを使用するかを説明してください。",
        solution: "`Promise.race()`は、iterable内のPromiseの**1つ**が履行または拒否されるとすぐに、そのPromiseからの値または理由で解決または拒否されるPromiseを返します。複数の非同期操作を実行したいが、*最速*のものの結果のみを気にする場合（例：タイムアウトパターン）に使用します。"
      },
      vi: {
        title: "Trường hợp sử dụng Promise.race()",
        body: "Mô tả hành vi của `Promise.race()` và khi nào bạn sẽ sử dụng nó.",
        solution: "`Promise.race()` trả về một promise sẽ hoàn thành hoặc thất bại ngay khi **một trong** các promise trong iterable hoàn thành hoặc thất bại, với giá trị hoặc lý do từ promise đó. Bạn sẽ sử dụng nó khi bạn muốn thực thi nhiều thao tác bất đồng bộ và chỉ quan tâm đến kết quả của thao tác *nhanh nhất* (ví dụ: mô hình timeout)."
      }
    }
  },
  {
    _id: "js-m-041",
    difficulty: "middle",
    tags: ["this", "bind"],
    content: {
      en: {
        title: "Purpose of .bind()",
        body: "What is the primary purpose of the `.bind()` method on a function?",
        solution: "The `.bind()` method creates a **new function** that, when called, has its `this` keyword set to a specific value. It is typically used to ensure a method has the correct `this` context when passed as a callback (e.g., in event handlers or timers) or when a function is detached from its object."
      },
      jp: {
        title: ".bind() の目的",
        body: "関数に対する `.bind()` メソッドの主な目的は何ですか？",
        solution: "`.bind()`メソッドは、呼び出されたときにその`this`キーワードが特定の値に設定される**新しい関数**を作成します。通常、メソッドがコールバックとして渡されるとき（例：イベントハンドラーやタイマー）、または関数がそのオブジェクトから切り離されたときに、正しい`this`コンテキストを持つことを保証するために使用されます。"
      },
      vi: {
        title: "Mục đích của .bind()",
        body: "Mục đích chính của phương thức `.bind()` trên một hàm là gì?",
        solution: "Phương thức `.bind()` tạo ra một **hàm mới** mà khi được gọi, từ khóa `this` của nó được đặt thành một giá trị cụ thể. Nó thường được sử dụng để đảm bảo một phương thức có ngữ cảnh `this` chính xác khi được truyền dưới dạng callback (ví dụ: trong trình xử lý sự kiện hoặc bộ đếm thời gian) hoặc khi một hàm bị tách khỏi đối tượng của nó."
      }
    }
  },
  {
    _id: "js-m-042",
    difficulty: "middle",
    tags: ["iife", "closure"],
    content: {
      en: {
        title: "IIFE and Closure",
        body: "How can an IIFE be used to solve the common JavaScript loop-closure problem with `var`?",
        solution: "An IIFE creates a new function scope for each iteration of a loop. By passing the iteration variable (or any necessary value) into the IIFE as an argument, you create a private copy of that value, which is then preserved within the closure of any function defined inside the IIFE, solving the problem where `var` variables would share the same outer scope and end up with the final value."
      },
      jp: {
        title: "IIFEとクロージャ",
        body: "IIFEは、`var`を使用した一般的なJavaScriptのループとクロージャの問題をどのように解決できますか？",
        solution: "IIFEは、ループの各反復に対して新しい関数スコープを作成します。反復変数を（または必要な値を）引数としてIIFEに渡すことで、その値のプライベートコピーが作成され、それがIIFE内で定義された関数のクロージャ内に保持され、`var`変数が同じ外部スコープを共有し、最終値になってしまう問題を解決します。"
      },
      vi: {
        title: "IIFE và Closure",
        body: "Làm thế nào một IIFE có thể được sử dụng để giải quyết vấn đề loop-closure phổ biến trong JavaScript với `var`?",
        solution: "Một IIFE tạo ra một phạm vi hàm mới cho mỗi lần lặp của một vòng lặp. Bằng cách truyền biến lặp (hoặc bất kỳ giá trị cần thiết nào) vào IIFE dưới dạng đối số, bạn tạo ra một bản sao riêng tư của giá trị đó, sau đó được bảo toàn trong closure của bất kỳ hàm nào được định nghĩa bên trong IIFE, giải quyết vấn đề mà biến `var` sẽ chia sẻ cùng một phạm vi bên ngoài và kết thúc với giá trị cuối cùng."
      }
    }
  },
  {
    _id: "js-m-043",
    difficulty: "middle",
    tags: ["this", "arrow-function"],
    content: {
      en: {
        title: "Arrow function and event handlers",
        body: "Why are arrow functions sometimes a better choice than regular functions for class methods, especially in React/frontend component event handlers?",
        solution: "Arrow functions are a better choice because they do not bind their own `this`. They lexically inherit the `this` from the enclosing scope. This means that when an arrow function is used as an event handler method in a class, its `this` value is automatically bound to the class instance, avoiding the need to explicitly use `.bind(this)` in the constructor."
      },
      jp: {
        title: "アロー関数とイベントハンドラー",
        body: "特にReact/フロントエンドコンポーネントのイベントハンドラーにおいて、アロー関数がクラスメソッドの通常の関数よりも優れている場合があるのはなぜですか？",
        solution: "アロー関数は独自の `this` をバインドしないため、より良い選択です。それらは囲んでいるスコープから `this` をレキシカルに継承します。これは、アロー関数がクラス内のイベントハンドラーメソッドとして使用される場合、その `this` の値が自動的にクラスインスタンスにバインドされ、コンストラクターで明示的に `.bind(this)` を使用する必要がなくなることを意味します。"
      },
      vi: {
        title: "Arrow function và event handler",
        body: "Tại sao arrow function đôi khi là lựa chọn tốt hơn so với hàm thông thường cho các phương thức lớp, đặc biệt trong các trình xử lý sự kiện của component React/frontend?",
        solution: "Arrow function là một lựa chọn tốt hơn vì chúng không tự liên kết (bind) `this` riêng của chúng. Chúng kế thừa `this` một cách từ vựng (lexically) từ phạm vi bao quanh. Điều này có nghĩa là khi một arrow function được sử dụng làm phương thức xử lý sự kiện trong một lớp, giá trị `this` của nó tự động được liên kết với thể hiện của lớp, tránh được nhu cầu phải sử dụng `.bind(this)` một cách rõ ràng trong hàm constructor."
      }
    }
  },
  {
    _id: "js-m-044",
    difficulty: "middle",
    tags: ["object", "method", "es6"],
    content: {
      en: {
        title: "Object.keys() vs Object.entries()",
        body: "What is the difference in the returned value between `Object.keys()` and `Object.entries()`?",
        solution: "`Object.keys(obj)` returns an **array of the object's own enumerable property names (keys)**. `Object.entries(obj)` returns an **array of a given object's own enumerable string-keyed property [key, value] pairs**."
      },
      jp: {
        title: "Object.keys() vs Object.entries()",
        body: "`Object.keys()`と`Object.entries()`の戻り値の違いは何ですか？",
        solution: "`Object.keys(obj)`は、**オブジェクト自身の列挙可能なプロパティ名（キー）の配列**を返します。`Object.entries(obj)`は、**与えられたオブジェクト自身の列挙可能な文字列キーのプロパティ [キー、値] ペアの配列**を返します。"
      },
      vi: {
        title: "Object.keys() so với Object.entries()",
        body: "Sự khác biệt về giá trị trả về giữa `Object.keys()` và `Object.entries()` là gì?",
        solution: "`Object.keys(obj)` trả về một **mảng các tên thuộc tính (keys) có thể liệt kê của đối tượng đó**. `Object.entries(obj)` trả về một **mảng các cặp [key, value] của các thuộc tính có thể liệt kê, được khóa bằng chuỗi của đối tượng đã cho**."
      }
    }
  },
  {
    _id: "js-m-045",
    difficulty: "middle",
    tags: ["prototype", "class"],
    content: {
      en: {
        title: "What is __proto__?",
        body: "What is the `__proto__` property on an object primarily used for?",
        solution: "The `__proto__` property is an internal property (often considered legacy, though still used in some environments) that points to the prototype object of the object's constructor. It is used in the prototype chain for inheritance/property lookups. Modern code generally prefers `Object.getPrototypeOf()` or `Object.setPrototypeOf()` for safer manipulation."
      },
      jp: {
        title: "__proto__とは？",
        body: "オブジェクトの `__proto__` プロパティは主に何のために使用されますか？",
        solution: "`__proto__`プロパティは、オブジェクトのコンストラクターのプロトタイプオブジェクトを指す内部プロパティです（一部の環境ではまだ使用されていますが、レガシーと見なされることが多いです）。これは、継承/プロパティ検索のためのプロトタイプチェーンで使用されます。最新のコードでは、より安全な操作のために一般的に `Object.getPrototypeOf()` または `Object.setPrototypeOf()` が好まれます。"
      },
      vi: {
        title: "__proto__ là gì?",
        body: "Thuộc tính `__proto__` trên một đối tượng chủ yếu được sử dụng để làm gì?",
        solution: "Thuộc tính `__proto__` là một thuộc tính nội bộ (thường được coi là cũ, mặc dù vẫn được sử dụng trong một số môi trường) trỏ đến đối tượng prototype của hàm constructor của đối tượng. Nó được sử dụng trong chuỗi prototype để kế thừa/tra cứu thuộc tính. Code hiện đại thường ưu tiên `Object.getPrototypeOf()` hoặc `Object.setPrototypeOf()` để thao tác an toàn hơn."
      }
    }
  },
  {
    _id: "js-m-046",
    difficulty: "middle",
    tags: ["async", "promise", "microtask"],
    content: {
      en: {
        title: "Microtask Queue vs Macrotask Queue",
        body: "Where do Promise resolution callbacks (like those in `.then()`) get placed, and how does that affect their execution timing relative to `setTimeout()`?",
        solution: "Promise resolution callbacks are placed in the **Microtask Queue** (or Job Queue). The Microtask Queue is processed *after* the current execution stack is empty and *before* the browser's rendering and before the next item from the Macrotask Queue (like the callback of `setTimeout`) is pulled. This means Promise callbacks execute more quickly than `setTimeout` callbacks, even with a `setTimeout(..., 0)`."
      },
      jp: {
        title: "Microtask Queue vs Macrotask Queue",
        body: "Promiseの解決コールバック（`.then()`内のものなど）はどこに配置され、それが`setTimeout()`と比較してそれらの実行タイミングにどのように影響しますか？",
        solution: "Promiseの解決コールバックは**Microtask Queue**（またはJob Queue）に配置されます。Microtask Queueは、現在の実行スタックが空になった*後*、およびブラウザのレンダリングの*前*、そしてMacrotask Queueからの次の項目（`setTimeout`のコールバックなど）がプルされる*前*に処理されます。これは、`setTimeout(..., 0)`であっても、Promiseコールバックが`setTimeout`コールバックよりも速く実行されることを意味します。"
      },
      vi: {
        title: "Microtask Queue vs Macrotask Queue",
        body: "Các callback giải quyết Promise (như những callback trong `.then()`) được đặt ở đâu và điều đó ảnh hưởng đến thời gian thực thi của chúng so với `setTimeout()` như thế nào?",
        solution: "Các callback giải quyết Promise được đặt trong **Microtask Queue** (hoặc Job Queue). Microtask Queue được xử lý *sau khi* ngăn xếp thực thi hiện tại trống và *trước khi* trình duyệt kết xuất, và *trước khi* mục tiếp theo từ Macrotask Queue (như callback của `setTimeout`) được kéo. Điều này có nghĩa là các callback Promise thực thi nhanh hơn các callback `setTimeout`, ngay cả với `setTimeout(..., 0)`."
      }
    }
  },
  {
    _id: "js-m-047",
    difficulty: "middle",
    tags: ["dom", "event-propagation"],
    content: {
      en: {
        title: "Event Bubbling vs Capturing",
        body: "Briefly explain the difference between 'Event Bubbling' and 'Event Capturing'.",
        solution: "**Event Bubbling** is the process where an event starts at the deepest element and then propagates outwards/upwards through its ancestors to the root of the DOM. **Event Capturing** is the opposite: the event starts at the root of the DOM and propagates inwards/downwards to the actual target element. Event listeners can be registered for either phase."
      },
      jp: {
        title: "Event Bubbling vs Capturing",
        body: "『Event Bubbling』（イベントバブリング）と『Event Capturing』（イベントキャプチャリング）の違いを簡単に説明してください。",
        solution: "**Event Bubbling** は、イベントが最も深い要素で始まり、その後、その祖先を通じてDOMのルートに向かって外側/上向きに伝播するプロセスです。**Event Capturing** はその逆で、イベントはDOMのルートで始まり、実際のターゲット要素に向かって内側/下向きに伝播します。イベントリスナーは、どちらかのフェーズで登録できます。"
      },
      vi: {
        title: "Event Bubbling so với Capturing",
        body: "Giải thích ngắn gọn sự khác biệt giữa 'Event Bubbling' và 'Event Capturing'.",
        solution: "**Event Bubbling** là quá trình trong đó một sự kiện bắt đầu từ phần tử sâu nhất và sau đó lan truyền ra ngoài/lên trên thông qua các phần tử cha của nó đến gốc của DOM. **Event Capturing** là ngược lại: sự kiện bắt đầu từ gốc của DOM và lan truyền vào trong/xuống dưới đến phần tử mục tiêu thực tế. Trình lắng nghe sự kiện có thể được đăng ký cho một trong hai giai đoạn."
      }
    }
  },
  {
    _id: "js-m-048",
    difficulty: "middle",
    tags: ["async", "error-handling"],
    content: {
      en: {
        title: "Async/await error handling",
        body: "How do you handle errors inside an `async` function when using `await`?",
        solution: "When using `await`, you should wrap the asynchronous call in a standard JavaScript **`try...catch`** block. If the `await` expression's Promise is rejected, the rejection reason is thrown as an error, which the `catch` block can intercept and handle."
      },
      jp: {
        title: "Async/await のエラー処理",
        body: "`await`を使用している場合、`async`関数内のエラーをどのように処理しますか？",
        solution: "`await`を使用する場合、非同期呼び出しを標準のJavaScriptの**`try...catch`**ブロックでラップする必要があります。`await`式のPromiseが拒否された場合、拒否の理由はエラーとしてスローされ、`catch`ブロックがそれをインターセプトして処理できます。"
      },
      vi: {
        title: "Xử lý lỗi Async/await",
        body: "Làm thế nào để xử lý lỗi bên trong một hàm `async` khi sử dụng `await`?",
        solution: "Khi sử dụng `await`, bạn nên bao bọc lời gọi bất đồng bộ trong một khối **`try...catch`** JavaScript tiêu chuẩn. Nếu Promise của biểu thức `await` bị từ chối, lý do từ chối sẽ được ném ra dưới dạng một lỗi, mà khối `catch` có thể chặn và xử lý."
      }
    }
  },
  {
    _id: "js-m-049",
    difficulty: "middle",
    tags: ["currying", "functional"],
    content: {
      en: {
        title: "What is Currying?",
        body: "Briefly define the concept of 'Currying' in JavaScript functional programming.",
        solution: "Currying is a transformation of functions that translates a function from callable as $f(a, b, c)$ into callable as $f(a)(b)(c)$. It doesn't call the function; it only transforms it into a function that takes one argument at a time, returning a new function for the next argument until all arguments are received."
      },
      jp: {
        title: "カリー化とは？",
        body: "JavaScriptの関数型プログラミングにおける『カリー化』の概念を簡単に定義してください。",
        solution: "カリー化は、関数を$f(a, b, c)$として呼び出し可能から、$f(a)(b)(c)$として呼び出し可能に変換する関数の変換です。関数を呼び出すのではなく、一度に1つの引数を受け取り、すべての引数が受け取られるまで次の引数に対して新しい関数を返す関数に変換するだけです。"
      },
      vi: {
        title: "Currying là gì?",
        body: "Định nghĩa ngắn gọn khái niệm 'Currying' trong lập trình hàm JavaScript.",
        solution: "Currying là một phép biến đổi hàm, chuyển một hàm có thể gọi là $f(a, b, c)$ thành có thể gọi là $f(a)(b)(c)$. Nó không gọi hàm; nó chỉ biến đổi nó thành một hàm chỉ nhận một đối số tại một thời điểm, trả về một hàm mới cho đối số tiếp theo cho đến khi tất cả các đối số được nhận."
      }
    }
  },
  {
    _id: "js-m-050",
    difficulty: "middle",
    tags: ["generator", "async"],
    content: {
      en: {
        title: "Generator execution",
        body: "How is a JavaScript Generator function's execution controlled by the caller?",
        solution: "The caller controls the Generator's execution by repeatedly calling the `.next()` method on the Generator object (the iterator). Each call to `.next()` resumes the function's execution from where it was paused (at the last `yield`) until it hits the next `yield` or the end of the function. The `.next()` method can also pass a value *into* the generator."
      },
      jp: {
        title: "ジェネレーターの実行",
        body: "JavaScriptジェネレーター関数の実行は、呼び出し元によってどのように制御されますか？",
        solution: "呼び出し元は、Generatorオブジェクト（イテレーター）に対して繰り返し `.next()` メソッドを呼び出すことによって、Generatorの実行を制御します。`.next()`への各呼び出しは、関数が一時停止された場所（最後の`yield`で）から実行を再開し、次の`yield`または関数の終わりまで続きます。`.next()`メソッドは、値をジェネレーターに*渡す*こともできます。"
      },
      vi: {
        title: "Thực thi Generator",
        body: "Việc thực thi Generator function trong JavaScript được kiểm soát bởi bên gọi (caller) như thế nào?",
        solution: "Bên gọi kiểm soát việc thực thi Generator bằng cách lặp lại gọi phương thức `.next()` trên đối tượng Generator (iterator). Mỗi lần gọi `.next()` sẽ tiếp tục thực thi hàm từ nơi nó đã tạm dừng (tại `yield` cuối cùng) cho đến khi nó gặp `yield` tiếp theo hoặc kết thúc hàm. Phương thức `.next()` cũng có thể truyền một giá trị *vào* bên trong generator."
      }
    }
  }
];