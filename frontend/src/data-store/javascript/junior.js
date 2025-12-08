const javascriptJuniorQuestions = [
  {
    _id: "js-j-001",
    difficulty: "junior",
    tags: ["hoisting", "var", "scope"],
    content: {
      en: {
        title: "Hoisting in JavaScript",
        body: "Explain the concept of Hoisting in JavaScript, especially concerning 'var' declarations.",
        solution: "Hoisting is JavaScript's behavior of moving declarations to the top of the current scope (global or function scope) before execution. Only the declaration is hoisted, not the initialization. 'var' variables are hoisted and initialized with 'undefined', whereas 'let' and 'const' are also hoisted but not initialized, resulting in a 'ReferenceError' if accessed before assignment (known as the Temporal Dead Zone)."
      },
      jp: {
        title: "JavaScriptにおける巻き上げ（Hoisting）",
        body: "JavaScriptの巻き上げ（Hoisting）の概念を、「var」宣言に特に焦点を当てて説明してください。",
        solution: "巻き上げとは、実行前に宣言が現在のスコープ（グローバルまたは関数スコープ）の先頭に移動されるJavaScriptの動作です。初期化は移動されません。「var」変数は巻き上げられ、「undefined」で初期化されます。「let」と「const」も巻き上げられますが、初期化されないため、代入前にアクセスすると「ReferenceError」になります（一時的デッドゾーン）。"
      },
      vi: {
        title: "Hoisting trong JavaScript",
        body: "Giải thích khái niệm Hoisting trong JavaScript, đặc biệt đối với khai báo bằng 'var'.",
        solution: "Hoisting là hành vi của JavaScript di chuyển các khai báo lên đầu phạm vi hiện tại (toàn cục hoặc phạm vi hàm) trước khi thực thi. Chỉ khai báo được Hoist, không phải việc khởi tạo. Biến 'var' được Hoist và khởi tạo với 'undefined', trong khi 'let' và 'const' cũng được Hoist nhưng không được khởi tạo, dẫn đến 'ReferenceError' nếu truy cập trước khi gán (được gọi là Temporal Dead Zone)."
      }
    }
  },
  {
    _id: "js-j-002",
    difficulty: "junior",
    tags: ["scope", "let", "const"],
    content: {
      en: {
        title: "Difference between 'var', 'let', and 'const'",
        body: "What is the primary difference between 'var', 'let', and 'const' in terms of scope and reassignment?",
        solution: "'var' is function-scoped and can be redeclared and reassigned. 'let' is block-scoped (introduced in ES6) and can be reassigned but not redeclared. 'const' is also block-scoped, cannot be reassigned, and cannot be redeclared. 'const' requires initialization at the time of declaration."
      },
      jp: {
        title: "'var'、'let'、'const'の違い",
        body: "スコープと再代入の観点から、「var」、「let」、「const」の主な違いは何ですか？",
        solution: "「var」は関数スコープで、再宣言と再代入が可能です。「let」はブロックスコープ（ES6で導入）で、再代入は可能ですが再宣言はできません。「const」もブロックスコープで、再代入も再宣言もできません。「const」は宣言時に初期化が必要です。"
      },
      vi: {
        title: "Sự khác biệt giữa 'var', 'let' và 'const'",
        body: "Sự khác biệt chính giữa 'var', 'let' và 'const' về phạm vi (scope) và việc gán lại giá trị là gì?",
        solution: "'var' có phạm vi hàm (function-scoped) và có thể được khai báo lại và gán lại giá trị. 'let' có phạm vi khối (block-scoped) và có thể gán lại giá trị nhưng không thể khai báo lại. 'const' cũng có phạm vi khối, không thể gán lại giá trị, và không thể khai báo lại. 'const' yêu cầu phải được khởi tạo ngay lúc khai báo."
      }
    }
  },
  {
    _id: "js-j-003",
    difficulty: "junior",
    tags: ["callback", "async"],
    content: {
      en: {
        title: "What is a Callback Function?",
        body: "Define a callback function and provide a simple example of its use.",
        solution: "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. Callbacks are essential for asynchronous operations in JavaScript. Example: 'setTimeout(() => { console.log(\"Done\"); }, 1000);'"
      },
      jp: {
        title: "コールバック関数とは？",
        body: "コールバック関数を定義し、使用例を簡単に示してください。",
        solution: "コールバック関数とは、引数として別の関数に渡され、その外部関数内で呼び出されて何らかの処理やアクションを完了するために使用される関数です。コールバックはJavaScriptの非同期操作に不可欠です。例: 'setTimeout(() => { console.log(\"完了\"); }, 1000);'"
      },
      vi: {
        title: "Hàm Callback là gì?",
        body: "Định nghĩa hàm callback và cung cấp một ví dụ đơn giản về cách sử dụng nó.",
        solution: "Hàm callback là một hàm được truyền vào một hàm khác dưới dạng đối số, sau đó được gọi bên trong hàm ngoài để hoàn thành một quy trình hoặc hành động nào đó. Callback là cơ bản cho các thao tác bất đồng bộ trong JavaScript. Ví dụ: 'setTimeout(() => { console.log(\"Xong\"); }, 1000);'"
      }
    }
  },
  {
    _id: "js-j-004",
    difficulty: "junior",
    tags: ["spread", "rest", "es6"],
    content: {
      en: {
        title: "Spread Operator vs. Rest Parameter",
        body: "What is the difference between the spread operator (...) and the rest parameter (...)?",
        solution: "The **Spread Operator** unpacks elements of an iterable (like an array) into individual elements. It is used in places like array literals, function calls, and object literals. The **Rest Parameter** collects all remaining elements in an array or object into a single array (when used in function parameter lists or array destructuring) or object (in object destructuring). Spread 'expands' an array; Rest 'collects' elements into an array."
      },
      jp: {
        title: "スプレッド演算子とレストパラメータ",
        body: "スプレッド演算子（...）とレストパラメータ（...）の違いは何ですか？",
        solution: " **スプレッド演算子** は、反復可能な要素（配列など）を個々の要素に展開します。配列リテラル、関数呼び出し、オブジェクトリテラルなどで使用されます。 **レストパラメータ** は、残りのすべての要素を単一の配列（関数パラメータリストや配列分割代入で使用される場合）またはオブジェクト（オブジェクト分割代入で使用される場合）に収集します。スプレッドは配列を「展開」し、レストは要素を配列に「収集」します。"
      },
      vi: {
        title: "Spread Operator và Rest Parameter",
        body: "Sự khác biệt giữa toán tử spread (...) và tham số rest (...) là gì?",
        solution: "**Spread Operator** (Toán tử trải rộng) dùng để mở rộng các phần tử của một đối tượng iterable (như mảng) thành các phần tử riêng lẻ. Nó được dùng trong các array literal, lời gọi hàm, và object literal. **Rest Parameter** (Tham số còn lại) dùng để thu thập tất cả các phần tử còn lại vào một mảng duy nhất (khi được dùng trong danh sách tham số hàm hoặc destructuring mảng) hoặc đối tượng (trong destructuring đối tượng). Spread 'trải rộng' mảng; Rest 'thu thập' các phần tử vào một mảng."
      }
    }
  },
  {
    _id: "js-j-005",
    difficulty: "junior",
    tags: ["closure", "scope"],
    content: {
      en: {
        title: "What is a Closure?",
        body: "Explain what a Closure is in JavaScript and why it is useful.",
        solution: "A Closure is a function bundled together with its lexical environment (the scope chain it was created in). It allows an inner function to access variables from its outer (enclosing) function, even after the outer function has finished executing. Closures are useful for data privacy (creating private variables) and maintaining state between function calls."
      },
      jp: {
        title: "クロージャとは？",
        body: "JavaScriptにおけるクロージャ（Closure）とは何か、そしてなぜそれが有用なのかを説明してください。",
        solution: "クロージャとは、それが作成されたレキシカル環境（スコープチェーン）とバンドルされた関数です。外部関数が実行を終了した後でも、内部関数が外部（囲んでいる）関数の変数にアクセスできるようにします。クロージャは、データプライバシー（プライベート変数の作成）や関数呼び出し間で状態を維持するために役立ちます。"
      },
      vi: {
        title: "Closure là gì?",
        body: "Giải thích Closure là gì trong JavaScript và tại sao nó hữu ích.",
        solution: "Closure là một hàm được 'đóng gói' cùng với môi trường từ vựng (lexical environment) của nó (chuỗi scope mà nó được tạo ra). Nó cho phép một hàm bên trong truy cập các biến từ hàm bao bọc (outer function), ngay cả sau khi hàm bao bọc đã kết thúc thực thi. Closure hữu ích cho việc bảo mật dữ liệu (tạo biến riêng tư) và duy trì trạng thái giữa các lần gọi hàm."
      }
    }
  },
  {
    _id: "js-j-006",
    difficulty: "junior",
    tags: ["array", "method", "loop"],
    content: {
      en: {
        title: "Array.prototype.map() vs. Array.prototype.forEach()",
        body: "What is the key difference between the 'map()' and 'forEach()' methods for arrays?",
        solution: "The **forEach()** method iterates over an array and executes a provided function for each element. It does not return a value (it returns 'undefined') and is used for side effects (like logging or modifying external state). The **map()** method iterates over an array and returns a **new array** populated with the results of calling a provided function on every element. It is used for transformation."
      },
      jp: {
        title: "Array.prototype.map() と Array.prototype.forEach() の違い",
        body: "配列の「map()」メソッドと「forEach()」メソッドの主な違いは何ですか？",
        solution: " **forEach()** メソッドは配列を反復処理し、各要素に対して提供された関数を実行します。値を返さず（'undefined'を返します）、副作用（ログ記録や外部の状態の変更など）に使用されます。 **map()** メソッドは配列を反復処理し、各要素に対して提供された関数を呼び出した結果で満たされた **新しい配列** を返します。変換に使用されます。"
      },
      vi: {
        title: "Array.prototype.map() và Array.prototype.forEach()",
        body: "Sự khác biệt chính giữa phương thức 'map()' và 'forEach()' của mảng là gì?",
        solution: "Phương thức **forEach()** lặp qua một mảng và thực thi một hàm được cung cấp cho mỗi phần tử. Nó không trả về giá trị (trả về 'undefined') và được sử dụng cho các tác dụng phụ (side effects - như ghi log hoặc thay đổi trạng thái bên ngoài). Phương thức **map()** lặp qua một mảng và trả về một **mảng mới** chứa kết quả của việc gọi hàm được cung cấp trên mỗi phần tử. Nó được sử dụng để biến đổi dữ liệu."
      }
    }
  },
  {
    _id: "js-j-007",
    difficulty: "junior",
    tags: ["destructuring", "es6"],
    content: {
      en: {
        title: "Array and Object Destructuring",
        body: "Explain the concept of destructuring in JavaScript and provide an example of object destructuring.",
        solution: "Destructuring Assignment is an ES6 feature that allows you to extract values from arrays or properties from objects into distinct variables using syntax that mirrors the array or object literal. Example: 'const user = { name: \"Alice\", age: 30 }; const { name, age } = user; // name is \"Alice\", age is 30'"
      },
      jp: {
        title: "配列とオブジェクトの分割代入",
        body: "JavaScriptの分割代入（Destructuring）の概念を説明し、オブジェクト分割代入の例を示してください。",
        solution: "分割代入は、配列またはオブジェクトから値やプロパティを、配列またはオブジェクトリテラルを模倣した構文を使用して、個別の変数に抽出できるようにするES6の機能です。例: 'const user = { name: \"Alice\", age: 30 }; const { name, age } = user; // name は \"Alice\"、age は 30'"
      },
      vi: {
        title: "Destructuring mảng và đối tượng",
        body: "Giải thích khái niệm destructuring trong JavaScript và cung cấp một ví dụ về destructuring đối tượng.",
        solution: "Gán phá vỡ cấu trúc (Destructuring Assignment) là một tính năng của ES6 cho phép bạn trích xuất các giá trị từ mảng hoặc các thuộc tính từ đối tượng thành các biến riêng biệt bằng cách sử dụng cú pháp phản ánh lại array literal hoặc object literal. Ví dụ: 'const user = { name: \"Alice\", age: 30 }; const { name, age } = user; // name là \"Alice\", age là 30'"
      }
    }
  },
  {
    _id: "js-j-008",
    difficulty: "junior",
    tags: ["this", "context", "arrow-function"],
    content: {
      en: {
        title: "The 'this' Keyword in Arrow Functions",
        body: "How does the 'this' keyword behave differently in an arrow function compared to a regular function?",
        solution: "A regular function defines its own 'this' value based on how it is called (e.g., global object, object method, constructor). An **arrow function does not have its own 'this'**. Instead, it captures the 'this' value of the enclosing lexical context (the surrounding code scope) at the time it is created. This makes arrow functions unsuitable for methods that rely on 'this' being the object instance."
      },
      jp: {
        title: "アロー関数における「this」キーワード",
        body: "アロー関数内の「this」キーワードは、通常の関数と比較してどのように異なる振る舞いをしますか？",
        solution: "通常の関数は、呼び出され方に基づいて独自の「this」値を定義します（例：グローバルオブジェクト、オブジェクトメソッド、コンストラクタ）。 **アロー関数は独自の「this」を持ちません**。代わりに、作成された時点での囲んでいるレキシカルコンテキスト（周囲のコードスコープ）の「this」値をキャプチャします。このため、アロー関数は「this」がオブジェクトインスタンスに依存するメソッドには適していません。"
      },
      vi: {
        title: "Từ khóa 'this' trong Arrow Function",
        body: "Từ khóa 'this' hoạt động khác như thế nào trong một arrow function so với một regular function (hàm thông thường)?",
        solution: "Hàm thông thường định nghĩa giá trị 'this' của riêng nó dựa trên cách nó được gọi (ví dụ: đối tượng toàn cục, phương thức đối tượng, constructor). Một **arrow function không có 'this' riêng của nó**. Thay vào đó, nó bắt lấy giá trị 'this' của môi trường từ vựng bao quanh (phạm vi code xung quanh) tại thời điểm nó được tạo. Điều này làm cho arrow function không phù hợp với các phương thức dựa vào 'this' là thể hiện (instance) của đối tượng."
      }
    }
  },
  {
    _id: "js-j-009",
    difficulty: "junior",
    tags: ["prototype", "inheritance"],
    content: {
      en: {
        title: "Prototypes in JavaScript",
        body: "Briefly explain what Prototypes are and their role in JavaScript.",
        solution: "Prototypes are the mechanism by which JavaScript objects inherit features from one another. Every JavaScript object has a prototype (which is either an object or null). When you try to access a property on an object, the JavaScript engine first looks on the object itself. If it's not found, it looks on the object's prototype, and so on, up the prototype chain until the property is found or the end of the chain is reached (null)."
      },
      jp: {
        title: "JavaScriptのプロトタイプ",
        body: "プロトタイプとは何か、そしてJavaScriptにおけるその役割を簡単に説明してください。",
        solution: "プロトタイプは、JavaScriptのオブジェクトが互いに機能を継承するためのメカニズムです。すべてのJavaScriptオブジェクトにはプロトタイプがあります（それはオブジェクトまたはnullのいずれかです）。オブジェクトのプロパティにアクセスしようとすると、JavaScriptエンジンはまずそのオブジェクト自体を探します。見つからない場合は、オブジェクトのプロトタイプを探し、プロパティが見つかるかチェーンの終端（null）に到達するまでプロトタイプチェーンを遡ります。"
      },
      vi: {
        title: "Prototypes trong JavaScript",
        body: "Giải thích ngắn gọn Prototypes là gì và vai trò của chúng trong JavaScript.",
        solution: "Prototypes là cơ chế mà các đối tượng JavaScript kế thừa các tính năng từ nhau. Mọi đối tượng JavaScript đều có một prototype (là một đối tượng hoặc null). Khi bạn cố gắng truy cập một thuộc tính trên một đối tượng, công cụ JavaScript trước tiên tìm kiếm trên chính đối tượng đó. Nếu không tìm thấy, nó sẽ tìm kiếm trên prototype của đối tượng, và cứ thế, đi lên chuỗi prototype cho đến khi thuộc tính được tìm thấy hoặc đạt đến cuối chuỗi (null)."
      }
    }
  },
  {
    _id: "js-j-010",
    difficulty: "junior",
    tags: ["promise", "async"],
    content: {
      en: {
        title: "Purpose of Promises",
        body: "What is the primary purpose of a JavaScript Promise and what are its three states?",
        solution: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It's used to handle asynchronous results more cleanly than traditional callbacks (avoiding 'callback hell'). The three states are: **Pending** (initial state), **Fulfilled** (operation completed successfully), and **Rejected** (operation failed)."
      },
      jp: {
        title: "Promiseの目的",
        body: "JavaScriptのPromiseの主な目的は何ですか？また、その3つの状態は何ですか？",
        solution: "Promiseは、非同期操作の最終的な完了または失敗を表すオブジェクトです。従来のコールバックよりもクリーンに非同期の結果を処理するために使用されます（「コールバック地獄」を避ける）。3つの状態は、**Pending**（初期状態）、**Fulfilled**（操作が正常に完了）、および **Rejected**（操作が失敗）です。"
      },
      vi: {
        title: "Mục đích của Promise",
        body: "Mục đích chính của Promise trong JavaScript là gì và ba trạng thái của nó là gì?",
        solution: "Promise là một đối tượng đại diện cho sự hoàn thành hoặc thất bại cuối cùng của một thao tác bất đồng bộ. Nó được sử dụng để xử lý kết quả bất đồng bộ một cách rõ ràng hơn so với các callback truyền thống (tránh 'callback hell'). Ba trạng thái là: **Pending** (Trạng thái ban đầu), **Fulfilled** (Thao tác hoàn thành thành công), và **Rejected** (Thao tác thất bại)."
      }
    }
  },
  {
    _id: "js-j-011",
    difficulty: "junior",
    tags: ["event-loop", "runtime"],
    content: {
      en: {
        title: "Event Loop Role in Concurrency",
        body: "What is the role of the Event Loop in JavaScript's concurrency model?",
        solution: "The Event Loop is the mechanism that manages the execution of code, collecting and processing asynchronous events, and executing subsequent sub-tasks. It continuously checks if the Call Stack is empty. If it is, the Event Loop takes the first message from the Message Queue (or Task Queue) and pushes its associated function (like a callback or promise handler) onto the Call Stack for execution. This enables non-blocking I/O operations."
      },
      jp: {
        title: "並行性モデルにおけるイベントループの役割",
        body: "JavaScriptの並行性モデルにおけるイベントループ（Event Loop）の役割は何ですか？",
        solution: "イベントループは、コードの実行を管理し、非同期イベントを収集および処理し、後続のサブタスクを実行するメカニズムです。コールスタックが空かどうかを継続的にチェックします。空の場合、イベントループはメッセージキュー（またはタスクキュー）から最初のメッセージを取得し、関連付けられた関数（コールバックやプロミスハンドラなど）をコールスタックにプッシュして実行します。これにより、非ブロッキングI/O操作が可能になります。"
      },
      vi: {
        title: "Vai trò của Event Loop trong mô hình đồng thời",
        body: "Vai trò của Event Loop trong mô hình đồng thời (concurrency model) của JavaScript là gì?",
        solution: "Event Loop là cơ chế quản lý việc thực thi mã, thu thập và xử lý các sự kiện bất đồng bộ, và thực thi các tác vụ con tiếp theo. Nó liên tục kiểm tra xem Call Stack có trống không. Nếu trống, Event Loop lấy thông báo đầu tiên từ Message Queue (hoặc Task Queue) và đẩy hàm liên quan của nó (như callback hoặc trình xử lý promise) vào Call Stack để thực thi. Điều này cho phép các hoạt động I/O không bị chặn (non-blocking)."
      }
    }
  },
  {
    _id: "js-j-012",
    difficulty: "junior",
    tags: ["strict-mode", "es5"],
    content: {
      en: {
        title: "Purpose of 'use strict'",
        body: "What is the purpose of using 'use strict'; at the beginning of a script or function?",
        solution: "Adding 'use strict'; enables **Strict Mode** in JavaScript. Its purpose is to eliminate some silent JavaScript errors by changing them to throw errors, fix mistakes that make it difficult for JavaScript engines to perform optimizations, and prohibit some unsafe or 'bad-practice' syntaxes (like using undeclared variables). This results in more secure and cleaner code."
      },
      jp: {
        title: "「use strict」の目的",
        body: "スクリプトまたは関数の先頭で「use strict」を使用する目的は何ですか？",
        solution: "「use strict」を追加すると、JavaScriptで **厳格モード（Strict Mode）** が有効になります。その目的は、JavaScriptのサイレントエラーの一部をエラーをスローするように変更することで排除し、JavaScriptエンジンが最適化を行うことを困難にする間違いを修正し、一部の安全でない、または「悪い習慣」の構文（未宣言変数の使用など）を禁止することです。これにより、より安全でクリーンなコードになります。"
      },
      vi: {
        title: "Mục đích của 'use strict'",
        body: "Mục đích của việc sử dụng 'use strict'; ở đầu một script hoặc hàm là gì?",
        solution: "Việc thêm 'use strict'; sẽ bật **Chế độ Nghiêm ngặt (Strict Mode)** trong JavaScript. Mục đích của nó là loại bỏ một số lỗi JavaScript 'im lặng' bằng cách thay đổi chúng thành lỗi ném ra, sửa chữa những lỗi khiến các engine JavaScript khó tối ưu hóa, và cấm một số cú pháp không an toàn hoặc 'thực hành kém' (như sử dụng biến chưa được khai báo). Điều này dẫn đến mã an toàn và sạch hơn."
      }
    }
  },
  {
    _id: "js-j-013",
    difficulty: "junior",
    tags: ["equality", "coercion"],
    content: {
      en: {
        title: "Triple Equals vs. Double Equals",
        body: "What is the difference between the equality operators '==' (double equals) and '===' (triple equals)?",
        solution: "**== (Double Equals)** is the **abstract equality** operator. It compares two values for equality after performing **type coercion** (converting one or both operands to a common type). **=== (Triple Equals)** is the **strict equality** operator. It compares two values for equality without performing type coercion; it returns true only if the values have the same type AND the same value."
      },
      jp: {
        title: "トリプルイコールとダブルイコール",
        body: "等価演算子「==」（ダブルイコール）と「===」（トリプルイコール）の違いは何ですか？",
        solution: "**==（ダブルイコール）** は **抽象等価** 演算子です。 **型強制** を実行した後（一方または両方のオペランドを共通の型に変換した後）に2つの値を比較します。 **===（トリプルイコール）** は **厳格等価** 演算子です。型強制を実行せずに2つの値を比較します。値が同じ型であり、かつ同じ値である場合にのみtrueを返します。"
      },
      vi: {
        title: "Triple Equals và Double Equals",
        body: "Sự khác biệt giữa các toán tử so sánh bằng '==' (double equals) và '===' (triple equals) là gì?",
        solution: "**== (Double Equals)** là toán tử **so sánh bằng trừu tượng**. Nó so sánh hai giá trị sau khi thực hiện **chuyển đổi kiểu ngầm định (type coercion)** (chuyển đổi một hoặc cả hai toán hạng về một kiểu chung). **=== (Triple Equals)** là toán tử **so sánh bằng nghiêm ngặt**. Nó so sánh hai giá trị mà không thực hiện chuyển đổi kiểu; nó chỉ trả về true nếu các giá trị có cùng kiểu VÀ cùng giá trị."
      }
    }
  },
  {
    _id: "js-j-014",
    difficulty: "junior",
    tags: ["function", "iife"],
    content: {
      en: {
        title: "What is an IIFE?",
        body: "Define an IIFE and explain why it is used.",
        solution: "An **IIFE (Immediately Invoked Function Expression)** is a function expression that is executed immediately after it is defined. It is created by wrapping a function expression in parentheses and immediately calling it with another set of parentheses. Its primary use is to create a new, isolated scope to prevent variable leakage into the global scope (especially before ES6 introduced 'let' and 'const' block scoping)."
      },
      jp: {
        title: "IIFEとは？",
        body: "IIFEを定義し、なぜそれが使用されるのかを説明してください。",
        solution: "**IIFE（即時実行関数式）** は、定義された直後に実行される関数式です。関数式を括弧で囲み、別の括弧ですぐに呼び出すことによって作成されます。主な用途は、変数のグローバルスコープへの漏洩を防ぐための新しい独立したスコープを作成することです（特にES6で「let」と「const」のブロックスコープが導入される前）。"
      },
      vi: {
        title: "IIFE là gì?",
        body: "Định nghĩa IIFE và giải thích tại sao nó được sử dụng.",
        solution: "**IIFE (Immediately Invoked Function Expression)** là một biểu thức hàm được thực thi ngay lập tức sau khi nó được định nghĩa. Nó được tạo ra bằng cách bọc một biểu thức hàm trong dấu ngoặc đơn và gọi nó ngay lập tức bằng một cặp dấu ngoặc đơn khác. Mục đích chính của nó là tạo ra một phạm vi mới, biệt lập để ngăn chặn rò rỉ biến vào phạm vi toàn cục (đặc biệt trước khi ES6 giới thiệu phạm vi khối 'let' và 'const')."
      }
    }
  },
  {
    _id: "js-j-015",
    difficulty: "junior",
    tags: ["type-checking", "typeof", "null"],
    content: {
      en: {
        title: "typeof null",
        body: "What is the result of 'typeof null' and why is this often considered a quirk/bug?",
        solution: "The result of 'typeof null' is **'object'**. This is a known long-standing bug in JavaScript that was never fixed for backward compatibility reasons. 'null' is meant to represent the intentional absence of any object value, yet its 'typeof' returns 'object'."
      },
      jp: {
        title: "typeof null",
        body: "「typeof null」の結果は何ですか、また、なぜこれがしばしば変な点/バグと見なされるのですか？",
        solution: "「typeof null」の結果は **'object'** です。これは、後方互換性の理由から修正されなかったJavaScriptの既知の長年のバグです。「null」はオブジェクト値の意図的な不在を表すことを意味しますが、その「typeof」は'object'を返します。"
      },
      vi: {
        title: "typeof null",
        body: "Kết quả của 'typeof null' là gì và tại sao điều này thường được coi là một sự kỳ quặc/lỗi?",
        solution: "Kết quả của 'typeof null' là **'object'**. Đây là một lỗi lâu đời đã biết trong JavaScript mà không bao giờ được sửa vì lý do tương thích ngược. 'null' có nghĩa là đại diện cho sự vắng mặt có chủ ý của bất kỳ giá trị đối tượng nào, nhưng 'typeof' của nó lại trả về 'object'."
      }
    }
  },
  {
    _id: "js-j-016",
    difficulty: "junior",
    tags: ["json", "method"],
    content: {
      en: {
        title: "JSON.stringify() and JSON.parse()",
        body: "What are the uses of the 'JSON.stringify()' and 'JSON.parse()' methods?",
        solution: "**JSON.stringify()** converts a JavaScript object or value into a JSON string. This is commonly used when sending data to a web server. **JSON.parse()** parses a JSON string, constructing the JavaScript value or object described by the string. This is commonly used when receiving data from a web server."
      },
      jp: {
        title: "JSON.stringify() と JSON.parse()",
        body: "「JSON.stringify()」と「JSON.parse()」メソッドの使用目的は何ですか？",
        solution: " **JSON.stringify()** は、JavaScriptオブジェクトまたは値をJSON文字列に変換します。これは、Webサーバーにデータを送信するときによく使用されます。 **JSON.parse()** は、JSON文字列を解析し、その文字列で記述されたJavaScriptの値またはオブジェクトを構築します。これは、Webサーバーからデータを受信するときによく使用されます。"
      },
      vi: {
        title: "JSON.stringify() và JSON.parse()",
        body: "Mục đích sử dụng của các phương thức 'JSON.stringify()' và 'JSON.parse()' là gì?",
        solution: "**JSON.stringify()** chuyển đổi một đối tượng hoặc giá trị JavaScript thành một chuỗi JSON. Điều này thường được sử dụng khi gửi dữ liệu đến một máy chủ web. **JSON.parse()** phân tích cú pháp một chuỗi JSON, xây dựng giá trị hoặc đối tượng JavaScript được mô tả bởi chuỗi đó. Điều này thường được sử dụng khi nhận dữ liệu từ một máy chủ web."
      }
    }
  },
  {
    _id: "js-j-017",
    difficulty: "junior",
    tags: ["dom", "method"],
    content: {
      en: {
        title: "Selecting an Element by ID",
        body: "What JavaScript method is used to select an HTML element by its 'id' attribute?",
        solution: "The method is **document.getElementById('elementId')**. It returns the Element object representing the element whose 'id' property matches the specified string. Since element IDs must be unique, this is one of the fastest DOM selection methods."
      },
      jp: {
        title: "IDによる要素の選択",
        body: "「id」属性によってHTML要素を選択するために使用されるJavaScriptメソッドは何ですか？",
        solution: "メソッドは **document.getElementById('elementId')** です。これは、「id」プロパティが指定された文字列と一致する要素を表すElementオブジェクトを返します。要素のIDは一意である必要があるため、これは最も速いDOM選択メソッドの1つです。"
      },
      vi: {
        title: "Chọn một phần tử bằng ID",
        body: "Phương thức JavaScript nào được sử dụng để chọn một phần tử HTML bằng thuộc tính 'id' của nó?",
        solution: "Phương thức đó là **document.getElementById('elementId')**. Nó trả về đối tượng Element đại diện cho phần tử có thuộc tính 'id' khớp với chuỗi được chỉ định. Vì ID phần tử phải là duy nhất, đây là một trong những phương thức chọn DOM nhanh nhất."
      }
    }
  },
  {
    _id: "js-j-018",
    difficulty: "junior",
    tags: ["event", "dom"],
    content: {
      en: {
        title: "Adding an Event Listener",
        body: "What is the standard and recommended way to attach an event handler to a DOM element in modern JavaScript?",
        solution: "The standard and recommended way is using the **addEventListener()** method. Example: 'element.addEventListener('click', handlerFunction);'. This method allows multiple handlers for the same event type on the same element, unlike direct assignment (e.g., 'element.onclick = ...'), which overwrites previous handlers."
      },
      jp: {
        title: "イベントリスナーの追加",
        body: "現代のJavaScriptでDOM要素にイベントハンドラーをアタッチするための標準的で推奨される方法は何ですか？",
        solution: "標準的で推奨される方法は、**addEventListener()** メソッドを使用することです。例: 'element.addEventListener('click', handlerFunction);'。このメソッドは、前のハンドラーを上書きする直接代入（例: 'element.onclick = ...'）とは異なり、同じ要素の同じイベントタイプに対して複数のハンドラーを許可します。"
      },
      vi: {
        title: "Thêm Event Listener",
        body: "Cách chuẩn và được khuyến nghị để đính kèm một event handler vào một phần tử DOM trong JavaScript hiện đại là gì?",
        solution: "Cách chuẩn và được khuyến nghị là sử dụng phương thức **addEventListener()**. Ví dụ: 'element.addEventListener('click', handlerFunction);'. Phương thức này cho phép nhiều trình xử lý cho cùng một loại sự kiện trên cùng một phần tử, không giống như gán trực tiếp (ví dụ: 'element.onclick = ...'), vốn sẽ ghi đè các trình xử lý trước đó."
      }
    }
  },
  {
    _id: "js-j-019",
    difficulty: "junior",
    tags: ["class", "es6"],
    content: {
      en: {
        title: "ES6 Classes and Prototypes",
        body: "Are ES6 'class' declarations purely syntactic sugar over JavaScript's prototype-based inheritance?",
        solution: "Yes, **ES6 Classes are primarily syntactic sugar** over the existing prototype-based inheritance model. They provide a cleaner, class-like syntax that is familiar to developers coming from object-oriented languages like Java or C++, but under the hood, they still operate using prototypes and constructor functions."
      },
      jp: {
        title: "ES6クラスとプロトタイプ",
        body: "ES6の「class」宣言は、JavaScriptのプロトタイプベースの継承に対する単なる構文糖衣（syntactic sugar）ですか？",
        solution: "はい、**ES6クラスは、既存のプロトタイプベースの継承モデルに対する主に構文糖衣**です。これらは、JavaやC++のようなオブジェクト指向言語からの開発者になじみのある、よりクリーンなクラスのような構文を提供しますが、内部的にはプロトタイプとコンストラクタ関数を使用して動作します。"
      },
      vi: {
        title: "Classes ES6 và Prototypes",
        body: "Các khai báo 'class' của ES6 có phải chỉ là 'syntactic sugar' (đường cú pháp) trên mô hình kế thừa dựa trên prototype của JavaScript không?",
        solution: "Đúng vậy, **Classes ES6 chủ yếu là syntactic sugar** trên mô hình kế thừa dựa trên prototype hiện có. Chúng cung cấp một cú pháp sạch hơn, giống như lớp, quen thuộc với các nhà phát triển đến từ các ngôn ngữ hướng đối tượng như Java hoặc C++, nhưng về bản chất, chúng vẫn hoạt động bằng cách sử dụng prototypes và các hàm constructor."
      }
    }
  },
  {
    _id: "js-j-020",
    difficulty: "junior",
    tags: ["coercion", "operators"],
    content: {
      en: {
        title: "Result of '1' + 2 + 3",
        body: "What is the result of the JavaScript expression '1' + 2 + 3 and why?",
        solution: "The result is **\"123\"**. The '+' operator performs string concatenation if one of the operands is a string. The expression is evaluated from left to right: '1' + 2 results in '12' (string concatenation), and then '12' + 3 results in '123' (string concatenation again)."
      },
      jp: {
        title: "「1」 + 2 + 3 の結果",
        body: "JavaScriptの式「'1' + 2 + 3」の結果は何ですか、またその理由は何ですか？",
        solution: "結果は **\"123\"** です。オペランドのいずれかが文字列である場合、「+」演算子は文字列連結を実行します。式は左から右に評価されます: '1' + 2 の結果は '12'（文字列連結）、そして '12' + 3 の結果は '123'（再度文字列連結）となります。"
      },
      vi: {
        title: "Kết quả của '1' + 2 + 3",
        body: "Kết quả của biểu thức JavaScript '1' + 2 + 3 là gì và tại sao?",
        solution: "Kết quả là **\"123\"**. Toán tử '+' thực hiện nối chuỗi nếu một trong các toán hạng là chuỗi. Biểu thức được đánh giá từ trái sang phải: '1' + 2 tạo ra '12' (nối chuỗi), và sau đó '12' + 3 tạo ra '123' (lại nối chuỗi)."
      }
    }
  },
  {
    _id: "js-j-021",
    difficulty: "junior",
    tags: ["map", "set", "es6"],
    content: {
      en: {
        title: "Map vs. Object",
        body: "Name one key advantage of using a 'Map' over a plain JavaScript 'Object' for key-value storage.",
        solution: "A key advantage of **Map** is that it allows **any value** (including objects, functions, and NaN) to be used as a key, whereas an **Object** automatically converts all keys to **strings** (or Symbols, but usually strings). Also, a Map maintains the original insertion order of its keys, and it's easier to get its size using the '.size' property."
      },
      jp: {
        title: "Map と Object の違い",
        body: "キーと値のストレージとして、プレーンなJavaScriptの「Object」と比較して、「Map」を使用する主な利点を1つ挙げてください。",
        solution: "**Map** の主な利点は、**あらゆる値**（オブジェクト、関数、NaNを含む）をキーとして使用できることです。一方、**Object** はすべてのキーを自動的に **文字列** に変換します（またはSymbolにもなりますが、通常は文字列です）。また、Mapはキーの元の挿入順序を維持し、'.size'プロパティを使用してサイズを取得するのが簡単です。"
      },
      vi: {
        title: "Map và Object",
        body: "Nêu một lợi thế chính của việc sử dụng 'Map' so với một 'Object' JavaScript thuần túy để lưu trữ cặp key-value.",
        solution: "Một lợi thế chính của **Map** là nó cho phép sử dụng **bất kỳ giá trị nào** (bao gồm đối tượng, hàm và NaN) làm key, trong khi một **Object** tự động chuyển đổi tất cả các key thành **chuỗi** (hoặc Symbol, nhưng thường là chuỗi). Ngoài ra, Map duy trì thứ tự chèn ban đầu của các key, và dễ dàng lấy kích thước của nó bằng thuộc tính '.size'."
      }
    }
  },
  {
    _id: "js-j-022",
    difficulty: "junior",
    tags: ["temporal-dead-zone", "let", "const"],
    content: {
      en: {
        title: "Temporal Dead Zone (TDZ)",
        body: "What is the Temporal Dead Zone (TDZ) and which declaration keywords are affected by it?",
        solution: "The **Temporal Dead Zone (TDZ)** is the time span during which a 'let' or 'const' variable has been 'hoisted' but cannot yet be accessed. It begins when the enclosing scope is entered and ends when the variable is declared and initialized. Accessing the variable during the TDZ results in a 'ReferenceError'. This applies to **'let'** and **'const'**."
      },
      jp: {
        title: "一時的デッドゾーン（TDZ）",
        body: "一時的デッドゾーン（TDZ）とは何ですか、またどの宣言キーワードが影響を受けますか？",
        solution: " **一時的デッドゾーン（TDZ）** は、「let」または「const」変数が「巻き上げ」られたものの、まだアクセスできない期間です。囲んでいるスコープに入ったときに始まり、変数が宣言され初期化されたときに終わります。TDZ中に変数にアクセスすると、「ReferenceError」が発生します。これは **「let」** と **「const」** に適用されます。"
      },
      vi: {
        title: "Temporal Dead Zone (TDZ)",
        body: "Temporal Dead Zone (TDZ) là gì và những từ khóa khai báo nào bị ảnh hưởng bởi nó?",
        solution: "**Temporal Dead Zone (TDZ)** là khoảng thời gian mà một biến 'let' hoặc 'const' đã được 'hoist' nhưng chưa thể được truy cập. Nó bắt đầu khi phạm vi bao bọc được vào và kết thúc khi biến được khai báo và khởi tạo. Việc truy cập biến trong TDZ sẽ dẫn đến 'ReferenceError'. Điều này áp dụng cho **'let'** và **'const'**."
      }
    }
  },
  {
    _id: "js-j-023",
    difficulty: "junior",
    tags: ["ternary-operator", "syntax"],
    content: {
      en: {
        title: "Ternary Operator Syntax",
        body: "Rewrite the following 'if/else' statement using the ternary operator: 'if (isRaining) { status = \"Wet\"; } else { status = \"Dry\"; }'",
        solution: "The ternary operator equivalent is: **const status = isRaining ? \"Wet\" : \"Dry\";**"
      },
      jp: {
        title: "三項演算子の構文",
        body: "次の「if/else」文を三項演算子を使用して書き直してください: 'if (isRaining) { status = \"Wet\"; } else { status = \"Dry\"; }'",
        solution: "三項演算子での同等な式は: **const status = isRaining ? \"Wet\" : \"Dry\";**"
      },
      vi: {
        title: "Cú pháp Toán tử Ternary",
        body: "Viết lại câu lệnh 'if/else' sau bằng cách sử dụng toán tử ternary: 'if (isRaining) { status = \"Wet\"; } else { status = \"Dry\"; }'",
        solution: "Biểu thức tương đương với toán tử ternary là: **const status = isRaining ? \"Wet\" : \"Dry\";**"
      }
    }
  },
  {
    _id: "js-j-024",
    difficulty: "junior",
    tags: ["array", "method"],
    content: {
      en: {
        title: "Array.prototype.filter() Purpose",
        body: "What is the purpose of the 'Array.prototype.filter()' method, and what does it return?",
        solution: "The **filter()** method creates a **new array** with all elements that pass the test implemented by the provided function. It is used to select a subset of elements from an array based on a condition. It returns an empty array if no elements pass the test, or a new array containing only the matching elements."
      },
      jp: {
        title: "Array.prototype.filter() の目的",
        body: "「Array.prototype.filter()」メソッドの目的は何ですか、またそれは何を返しますか？",
        solution: " **filter()** メソッドは、提供された関数によって実装されたテストに合格したすべての要素を含む **新しい配列** を作成します。条件に基づいて配列から要素のサブセットを選択するために使用されます。テストに合格する要素がない場合は空の配列を返し、一致する要素のみを含む新しい配列を返します。"
      },
      vi: {
        title: "Mục đích của Array.prototype.filter()",
        body: "Mục đích của phương thức 'Array.prototype.filter()' là gì và nó trả về gì?",
        solution: "Phương thức **filter()** tạo ra một **mảng mới** với tất cả các phần tử vượt qua bài kiểm tra được triển khai bởi hàm được cung cấp. Nó được sử dụng để chọn một tập hợp con các phần tử từ một mảng dựa trên một điều kiện. Nó trả về một mảng trống nếu không có phần tử nào vượt qua bài kiểm tra, hoặc một mảng mới chỉ chứa các phần tử phù hợp."
      }
    }
  },
  {
    _id: "js-j-025",
    difficulty: "junior",
    tags: ["dom", "manipulation"],
    content: {
      en: {
        title: "Changing Element Text Content",
        body: "What are the two common ways to change the text content of a DOM element, and when would you use one over the other?",
        solution: "The two common ways are using the **.textContent** and **.innerHTML** properties. **.textContent** sets or gets the text content of the element and its descendants, treating everything as raw text. **.innerHTML** sets or gets the HTML content of the element, meaning it will parse any included HTML tags. Use **.textContent** when you only need to update plain text and want to prevent Cross-Site Scripting (XSS) vulnerabilities."
      },
      jp: {
        title: "要素のテキストコンテンツの変更",
        body: "DOM要素のテキストコンテンツを変更する一般的な2つの方法は何ですか、また一方を他方より優先して使用するのはいつですか？",
        solution: "一般的な2つの方法は、**.textContent** と **.innerHTML** プロパティを使用することです。 **.textContent** は、要素とその子孫のテキストコンテンツを設定または取得し、すべてを生のテキストとして扱います。 **.innerHTML** は、要素のHTMLコンテンツを設定または取得します。つまり、含まれているHTMLタグを解析します。プレーンテキストのみを更新する必要があり、クロスサイトスクリプティング（XSS）の脆弱性を防ぎたい場合は、 **.textContent** を使用します。"
      },
      vi: {
        title: "Thay đổi Nội dung Văn bản của Phần tử",
        body: "Hai cách phổ biến để thay đổi nội dung văn bản của một phần tử DOM là gì, và khi nào bạn sẽ sử dụng cách này thay vì cách kia?",
        solution: "Hai cách phổ biến là sử dụng các thuộc tính **.textContent** và **.innerHTML**. **.textContent** đặt hoặc lấy nội dung văn bản của phần tử và các phần tử con của nó, coi mọi thứ là văn bản thô. **.innerHTML** đặt hoặc lấy nội dung HTML của phần tử, nghĩa là nó sẽ phân tích bất kỳ thẻ HTML nào được bao gồm. Sử dụng **.textContent** khi bạn chỉ cần cập nhật văn bản thuần túy và muốn ngăn chặn các lỗ hổng Cross-Site Scripting (XSS)."
      }
    }
  },
  {
    _id: "js-j-026",
    difficulty: "junior",
    tags: ["arrow-function", "syntax"],
    content: {
      en: {
        title: "Implicit Return in Arrow Functions",
        body: "When can an arrow function use an **implicit return** (omitting the 'return' keyword and curly braces)? Provide an example.",
        solution: "An arrow function can use an implicit return when the function body consists of a single expression. The value of that expression is automatically returned. Example: **const add = (a, b) => a + b;**"
      },
      jp: {
        title: "アロー関数における暗黙の戻り値",
        body: "アロー関数はいつ **暗黙の戻り値** （'return'キーワードと波括弧を省略）を使用できますか？例を示してください。",
        solution: "アロー関数は、関数本体が単一の式で構成されている場合に暗黙の戻り値を使用できます。その式の値は自動的に返されます。例: **const add = (a, b) => a + b;**"
      },
      vi: {
        title: "Implicit Return trong Arrow Function",
        body: "Khi nào một arrow function có thể sử dụng **implicit return** (bỏ qua từ khóa 'return' và dấu ngoặc nhọn)? Cung cấp một ví dụ.",
        solution: "Một arrow function có thể sử dụng implicit return khi thân hàm chỉ bao gồm một biểu thức duy nhất. Giá trị của biểu thức đó sẽ được tự động trả về. Ví dụ: **const add = (a, b) => a + b;**"
      }
    }
  },
  {
    _id: "js-j-027",
    difficulty: "junior",
    tags: ["async", "await", "promise"],
    content: {
      en: {
        title: "Purpose of 'async' Keyword",
        body: "What does the 'async' keyword do when placed before a function declaration?",
        solution: "The **async** keyword is used to define an asynchronous function. An asynchronous function always returns a **Promise**. If the function returns a non-Promise value, JavaScript automatically wraps it in a resolved Promise. It also enables the use of the **await** keyword inside that function."
      },
      jp: {
        title: "「async」キーワードの目的",
        body: "関数宣言の前に配置された「async」キーワードは何をしますか？",
        solution: " **async** キーワードは、非同期関数を定義するために使用されます。非同期関数は常に **Promise** を返します。関数がPromise以外の値を返す場合、JavaScriptは自動的に解決されたPromiseでそれをラップします。また、その関数内で **await** キーワードの使用を可能にします。"
      },
      vi: {
        title: "Mục đích của Từ khóa 'async'",
        body: "Từ khóa 'async' làm gì khi được đặt trước một khai báo hàm?",
        solution: "Từ khóa **async** được sử dụng để định nghĩa một hàm bất đồng bộ. Một hàm bất đồng bộ luôn trả về một **Promise**. Nếu hàm trả về một giá trị không phải là Promise, JavaScript sẽ tự động bọc nó trong một Promise đã được giải quyết (resolved). Nó cũng cho phép sử dụng từ khóa **await** bên trong hàm đó."
      }
    }
  },
  {
    _id: "js-j-028",
    difficulty: "junior",
    tags: ["call", "apply", "bind", "this"],
    content: {
      en: {
        title: "Difference between 'call' and 'apply'",
        body: "What is the difference between the 'call()' and 'apply()' methods in JavaScript?",
        solution: "Both `call()` and `apply()` are used to invoke a function with a specified `this` value and arguments. The difference is how arguments are passed: `call()` accepts arguments individually (e.g., `func.call(thisArg, arg1, arg2, ...)`), while `apply()` accepts arguments as an array or an array-like object (e.g., `func.apply(thisArg, [arg1, arg2, ...])`)."
      },
      jp: {
        title: "「call」と「apply」の違い",
        body: "JavaScriptにおける「call()」メソッドと「apply()」メソッドの違いは何ですか？",
        solution: "どちらも、指定された `this` 値と引数で関数を呼び出すために使用されます。違いは引数の渡し方です。`call()` は引数を個別に受け取ります（例：`func.call(thisArg, arg1, arg2, ...)`）。一方、`apply()` は引数を配列または配列のようなオブジェクトとして受け取ります（例：`func.apply(thisArg, [arg1, arg2, ...])`）。"
      },
      vi: {
        title: "Sự khác biệt giữa 'call' và 'apply'",
        body: "Sự khác biệt giữa các phương thức 'call()' và 'apply()' trong JavaScript là gì?",
        solution: "Cả `call()` và `apply()` đều được sử dụng để gọi một hàm với một giá trị `this` và các đối số được chỉ định. Sự khác biệt là cách các đối số được truyền: `call()` chấp nhận các đối số riêng lẻ (ví dụ: `func.call(thisArg, arg1, arg2, ...)`), trong khi `apply()` chấp nhận các đối số dưới dạng một mảng hoặc một đối tượng giống mảng (ví dụ: `func.apply(thisArg, [arg1, arg2, ...])`)."
      }
    }
  },
  {
    _id: "js-j-029",
    difficulty: "junior",
    tags: ["bind", "this"],
    content: {
      en: {
        title: "Purpose of 'bind'",
        body: "What is the purpose of the 'bind()' method, and how does it differ from 'call()' and 'apply()'?",
        solution: "The `bind()` method creates a **new function** that, when called, has its `this` keyword set to the provided value. Unlike `call()` and `apply()`, which invoke the function immediately, `bind()` does not execute the function; it only returns a permanently bound version of the function that can be executed later."
      },
      jp: {
        title: "「bind」の目的",
        body: "「bind()」メソッドの目的は何ですか、また「call()」や「apply()」とどのように異なりますか？",
        solution: " `bind()` メソッドは、呼び出されたときに `this` キーワードが提供された値に設定される **新しい関数** を作成します。関数を即座に呼び出す `call()` や `apply()` とは異なり、`bind()` は関数を実行せず、後で実行できる関数の永続的にバインドされたバージョンを返すだけです。"
      },
      vi: {
        title: "Mục đích của 'bind'",
        body: "Mục đích của phương thức 'bind()' là gì, và nó khác với 'call()' và 'apply()' như thế nào?",
        solution: "Phương thức `bind()` tạo ra một **hàm mới** mà khi được gọi, từ khóa `this` của nó được đặt thành giá trị được cung cấp. Không giống như `call()` và `apply()` (gọi hàm ngay lập tức), `bind()` không thực thi hàm; nó chỉ trả về một phiên bản của hàm đã được liên kết vĩnh viễn và có thể được thực thi sau này."
      }
    }
  },
  {
    _id: "js-j-030",
    difficulty: "junior",
    tags: ["array", "method"],
    content: {
      en: {
        title: "Array.prototype.reduce() Use Case",
        body: "What is a common use case for the 'Array.prototype.reduce()' method?",
        solution: "The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. Common use cases include **calculating the sum or product of all elements in an array**, **flattening a nested array**, **grouping objects by a specific property**, or converting an array into an object."
      },
      jp: {
        title: "Array.prototype.reduce() の使用例",
        body: "「Array.prototype.reduce()」メソッドの一般的な使用例は何ですか？",
        solution: " `reduce()` メソッドは、配列の各要素に対して（提供する）リデューサー関数を実行し、単一の出力値を生成します。一般的な使用例には、**配列内のすべての要素の合計または積を計算する**、**ネストされた配列をフラット化する**、**特定のプロパティでオブジェクトをグループ化する**、または配列をオブジェクトに変換するなどがあります。"
      },
      vi: {
        title: "Trường hợp sử dụng của Array.prototype.reduce()",
        body: "Trường hợp sử dụng phổ biến cho phương thức 'Array.prototype.reduce()' là gì?",
        solution: "Phương thức `reduce()` thực thi một hàm reducer (mà bạn cung cấp) trên mỗi phần tử của mảng, tạo ra một giá trị đầu ra duy nhất. Các trường hợp sử dụng phổ biến bao gồm **tính tổng hoặc tích của tất cả các phần tử trong một mảng**, **làm phẳng một mảng lồng nhau (flattening)**, **nhóm các đối tượng theo một thuộc tính cụ thể**, hoặc chuyển đổi một mảng thành một đối tượng."
      }
    }
  },
  {
    _id: "js-j-031",
    difficulty: "junior",
    tags: ["promise", "method"],
    content: {
      en: {
        title: "Promise.all() Purpose",
        body: "What is the purpose of 'Promise.all()' and what happens if one of the Promises passed to it is rejected?",
        solution: "**Promise.all()** takes an array of promises and returns a single promise that fulfills when all of the promises in the iterable are fulfilled. The fulfilled value is an array of the fulfillment values, in the same order as the input array. If **any** of the promises in the iterable is rejected, the `Promise.all()` immediately rejects with the reason of that rejection, ignoring the results of the other promises."
      },
      jp: {
        title: "Promise.all() の目的",
        body: "「Promise.all()」の目的は何ですか、またそれに渡されたPromiseの1つが拒否された場合、何が起こりますか？",
        solution: " **Promise.all()** はPromiseの配列を受け取り、イテラブル内のすべてのPromiseが解決されたときに解決する単一のPromiseを返します。解決された値は、入力配列と同じ順序の解決値の配列です。イテラブル内のPromiseの **いずれか** が拒否された場合、`Promise.all()` はその拒否の理由ですぐに拒否され、他のPromiseの結果は無視されます。"
      },
      vi: {
        title: "Mục đích của Promise.all()",
        body: "Mục đích của 'Promise.all()' là gì và điều gì xảy ra nếu một trong các Promise được truyền cho nó bị từ chối (rejected)?",
        solution: "**Promise.all()** nhận một mảng các promise và trả về một promise duy nhất chỉ được hoàn thành (fulfill) khi tất cả các promise trong iterable được hoàn thành. Giá trị được hoàn thành là một mảng các giá trị hoàn thành, theo cùng thứ tự với mảng đầu vào. Nếu **bất kỳ** promise nào trong iterable bị từ chối (rejected), `Promise.all()` sẽ ngay lập tức bị từ chối với lý do của sự từ chối đó, bỏ qua kết quả của các promise khác."
      }
    }
  },
  {
    _id: "js-j-032",
    difficulty: "junior",
    tags: ["data-type", "primitive"],
    content: {
      en: {
        title: "JavaScript Primitive Types",
        body: "Name at least four of the seven JavaScript primitive data types.",
        solution: "The seven primitive types are: **String**, **Number**, **BigInt**, **Boolean**, **Undefined**, **Symbol**, and **Null**. (Any four of these is an acceptable answer.)"
      },
      jp: {
        title: "JavaScriptのプリミティブ型",
        body: "JavaScriptの7つのプリミティブデータ型のうち、少なくとも4つを挙げてください。",
        solution: "7つのプリミティブ型は、**String**、**Number**、**BigInt**、**Boolean**、**Undefined**、**Symbol**、および **Null** です。（これらのうち任意の4つが許容される回答です。）"
      },
      vi: {
        title: "Các Kiểu Dữ liệu Nguyên thủy JavaScript",
        body: "Nêu ít nhất bốn trong số bảy kiểu dữ liệu nguyên thủy (primitive data types) của JavaScript.",
        solution: "Bảy kiểu dữ liệu nguyên thủy là: **String**, **Number**, **BigInt**, **Boolean**, **Undefined**, **Symbol**, và **Null**. (Bất kỳ bốn loại nào trong số này đều là câu trả lời chấp nhận được.)"
      }
    }
  },
  {
    _id: "js-j-033",
    difficulty: "junior",
    tags: ["equality", "NaN"],
    content: {
      en: {
        title: "NaN Comparison",
        body: "What is the result of the expression 'NaN === NaN' and what is the recommended way to check if a value is NaN?",
        solution: "The result of **'NaN === NaN' is false**. NaN (Not a Number) is the only value in JavaScript that is not strictly equal to itself. The recommended way to check if a value is NaN is using the global function **'isNaN()'** or, more precisely, **'Number.isNaN()'** (which does not perform type coercion)."
      },
      jp: {
        title: "NaNの比較",
        body: "式「NaN === NaN」の結果は何ですか、また値がNaNであるかどうかを確認するための推奨される方法は何ですか？",
        solution: " **「NaN === NaN」の結果はfalse** です。NaN（非数）は、JavaScriptでそれ自体と厳密に等しくない唯一の値です。値がNaNであるかどうかを確認するための推奨される方法は、グローバル関数 **'isNaN()'** または、より正確には **'Number.isNaN()'** （型強制を実行しない）を使用することです。"
      },
      vi: {
        title: "So sánh NaN",
        body: "Kết quả của biểu thức 'NaN === NaN' là gì và cách được khuyến nghị để kiểm tra xem một giá trị có phải là NaN không?",
        solution: "Kết quả của **'NaN === NaN' là false**. NaN (Not a Number) là giá trị duy nhất trong JavaScript không bằng chính nó một cách nghiêm ngặt. Cách được khuyến nghị để kiểm tra xem một giá trị có phải là NaN không là sử dụng hàm toàn cục **'isNaN()'** hoặc, chính xác hơn, **'Number.isNaN()'** (cái không thực hiện chuyển đổi kiểu)."
      }
    }
  },
  {
    _id: "js-j-034",
    difficulty: "junior",
    tags: ["module", "import", "export", "es6"],
    content: {
      en: {
        title: "ES6 Module Export Syntax",
        body: "How do you export a single function named 'calculateArea' from a JavaScript file using ES6 modules?",
        solution: "You can use the **named export** syntax: **export const calculateArea = (w, h) => w * h;** or separate the declaration and export: **const calculateArea = ...; export { calculateArea };**"
      },
      jp: {
        title: "ES6モジュールエクスポートの構文",
        body: "ES6モジュールを使用して、「calculateArea」という名前の単一の関数をJavaScriptファイルからエクスポートするにはどうすればよいですか？",
        solution: " **名前付きエクスポート** 構文を使用できます: **export const calculateArea = (w, h) => w * h;** または、宣言とエクスポートを分離します: **const calculateArea = ...; export { calculateArea };**"
      },
      vi: {
        title: "Cú pháp Export Module ES6",
        body: "Làm thế nào để xuất một hàm duy nhất có tên 'calculateArea' từ một tệp JavaScript bằng cách sử dụng module ES6?",
        solution: "Bạn có thể sử dụng cú pháp **named export** (xuất có tên): **export const calculateArea = (w, h) => w * h;** hoặc tách riêng khai báo và xuất: **const calculateArea = ...; export { calculateArea };**"
      }
    }
  },
  {
    _id: "js-j-035",
    difficulty: "junior",
    tags: ["array", "copy", "mutation"],
    content: {
      en: {
        title: "Immutability and Array Copying",
        body: "How can you create a **shallow copy** of an array without modifying the original array (i.e., maintaining immutability) in modern JavaScript?",
        solution: "The most common and modern way is using the **Spread Operator (...)**: **const newArray = [...originalArray];**. Alternatively, you can use **Array.prototype.slice()** with no arguments: **const newArray = originalArray.slice();**"
      },
      jp: {
        title: "不変性と配列のコピー",
        body: "現代のJavaScriptで、元の配列を変更せずに（つまり、不変性を維持して）配列の **シャローコピー** を作成するにはどうすればよいですか？",
        solution: "最も一般的で現代的な方法は、 **スプレッド演算子 (...)** を使用することです: **const newArray = [...originalArray];**。あるいは、引数なしで **Array.prototype.slice()** を使用することもできます: **const newArray = originalArray.slice();**"
      },
      vi: {
        title: "Tính bất biến và Sao chép Mảng",
        body: "Làm thế nào để bạn có thể tạo một **bản sao nông (shallow copy)** của một mảng mà không làm thay đổi mảng gốc (tức là duy trì tính bất biến) trong JavaScript hiện đại?",
        solution: "Cách phổ biến và hiện đại nhất là sử dụng **Spread Operator (...)**: **const newArray = [...originalArray];**. Một cách khác là sử dụng **Array.prototype.slice()** mà không có đối số: **const newArray = originalArray.slice();**"
      }
    }
  },
  {
    _id: "js-j-036",
    difficulty: "junior",
    tags: ["dom", "event-propagation"],
    content: {
      en: {
        title: "Event Bubbling",
        body: "Briefly explain the concept of 'Event Bubbling' in the DOM.",
        solution: "**Event Bubbling** is a mechanism in the DOM where an event fired on a specific element (the target) will first run its handlers, and then the event will 'bubble up' (propagate) to its parent element, then its parent's parent, and so on, up to the document root. This allows for **Event Delegation**, where a single listener on a parent element can handle events from many child elements."
      },
      jp: {
        title: "イベントバブリング",
        body: "DOMにおける「イベントバブリング（Event Bubbling）」の概念を簡単に説明してください。",
        solution: " **イベントバブリング** は、特定の要素（ターゲット）で発生したイベントが、まずそのハンドラーを実行し、次にイベントが親要素、その親の親へと、ドキュメントルートまで「バブリングアップ」（伝播）するDOMのメカニズムです。これにより、単一の親要素上のリスナーが多くの子要素からのイベントを処理できる **イベント委譲（Event Delegation）** が可能になります。"
      },
      vi: {
        title: "Event Bubbling",
        body: "Giải thích ngắn gọn khái niệm 'Event Bubbling' trong DOM.",
        solution: "**Event Bubbling** là một cơ chế trong DOM, nơi một sự kiện được kích hoạt trên một phần tử cụ thể (mục tiêu) sẽ chạy các trình xử lý của nó trước, và sau đó sự kiện sẽ 'nổi lên' (lan truyền) đến phần tử cha của nó, sau đó là cha của cha nó, cứ thế cho đến gốc tài liệu. Điều này cho phép **Event Delegation** (Ủy quyền Sự kiện), nơi một trình lắng nghe duy nhất trên một phần tử cha có thể xử lý các sự kiện từ nhiều phần tử con."
      }
    }
  },
  {
    _id: "js-j-037",
    difficulty: "junior",
    tags: ["try-catch", "error-handling"],
    content: {
      en: {
        title: "Purpose of 'try...catch'",
        body: "What is the purpose of the 'try...catch' statement in JavaScript?",
        solution: "The **try...catch** statement is used for **error handling**. The `try` block contains the code that is to be tested for errors while it is being executed. The `catch` block contains the code that is executed if an error occurs in the `try` block. This prevents the program from crashing and allows for graceful error recovery."
      },
      jp: {
        title: "「try...catch」の目的",
        body: "JavaScriptにおける「try...catch」ステートメントの目的は何ですか？",
        solution: " **try...catch** ステートメントは **エラー処理** に使用されます。 `try` ブロックには、実行中にエラーがないかテストされるコードが含まれます。 `catch` ブロックには、`try` ブロックでエラーが発生した場合に実行されるコードが含まれます。これにより、プログラムのクラッシュを防ぎ、適切なエラー回復が可能になります。"
      },
      vi: {
        title: "Mục đích của 'try...catch'",
        body: "Mục đích của câu lệnh 'try...catch' trong JavaScript là gì?",
        solution: "Câu lệnh **try...catch** được sử dụng để **xử lý lỗi (error handling)**. Khối `try` chứa mã được kiểm tra lỗi trong khi nó đang được thực thi. Khối `catch` chứa mã được thực thi nếu một lỗi xảy ra trong khối `try`. Điều này ngăn chương trình bị treo và cho phép phục hồi lỗi một cách nhẹ nhàng."
      }
    }
  },
  {
    _id: "js-j-038",
    difficulty: "junior",
    tags: ["default-parameter", "es6"],
    content: {
      en: {
        title: "ES6 Default Parameters",
        body: "How do you define a default value of 0 for the 'count' parameter in the function 'function update(value, count)' using ES6 syntax?",
        solution: "You define the default parameter directly in the function's parameter list: **function update(value, count = 0) { ... }** or **const update = (value, count = 0) => { ... }**."
      },
      jp: {
        title: "ES6のデフォルトパラメータ",
        body: "ES6の構文を使用して、関数「function update(value, count)」の「count」パラメータにデフォルト値0を定義するにはどうすればよいですか？",
        solution: "デフォルトパラメータは関数のパラメータリストで直接定義します: **function update(value, count = 0) { ... }** または **const update = (value, count = 0) => { ... }**。"
      },
      vi: {
        title: "Tham số mặc định ES6",
        body: "Làm thế nào để bạn định nghĩa giá trị mặc định là 0 cho tham số 'count' trong hàm 'function update(value, count)' bằng cách sử dụng cú pháp ES6?",
        solution: "Bạn định nghĩa tham số mặc định trực tiếp trong danh sách tham số của hàm: **function update(value, count = 0) { ... }** hoặc **const update = (value, count = 0) => { ... }**."
      }
    }
  },
  {
    _id: "js-j-039",
    difficulty: "junior",
    tags: ["scope", "global", "window", "node"],
    content: {
      en: {
        title: "Global Object in Browser vs. Node.js",
        body: "What is the global object in a browser environment, and what is its equivalent in a Node.js environment?",
        solution: "In a **browser environment**, the global object is the **window** object. In a **Node.js environment**, the global object is the **global** object."
      },
      jp: {
        title: "ブラウザとNode.jsのグローバルオブジェクト",
        body: "ブラウザ環境におけるグローバルオブジェクトは何ですか、またNode.js環境におけるその同等物は何ですか？",
        solution: " **ブラウザ環境** では、グローバルオブジェクトは **window** オブジェクトです。 **Node.js環境** では、グローバルオブジェクトは **global** オブジェクトです。"
      },
      vi: {
        title: "Đối tượng Toàn cục trong Trình duyệt và Node.js",
        body: "Đối tượng toàn cục trong môi trường trình duyệt là gì, và đối tượng tương đương của nó trong môi trường Node.js là gì?",
        solution: "Trong **môi trường trình duyệt**, đối tượng toàn cục là đối tượng **window**. Trong **môi trường Node.js**, đối tượng toàn cục là đối tượng **global**."
      }
    }
  },
  {
    _id: "js-j-040",
    difficulty: "junior",
    tags: ["template-literals", "string", "es6"],
    content: {
      en: {
        title: "Template Literals",
        body: "What are Template Literals (Template Strings) and what is one key feature they offer over regular strings?",
        solution: "Template Literals are string literals delimited with **backticks (` `)** instead of single or double quotes. A key feature is **String Interpolation**, which allows embedding expressions within the string using the `${expression}` syntax. They also support **multi-line strings** without the need for the '\\n' character."
      },
      jp: {
        title: "テンプレートリテラル",
        body: "テンプレートリテラル（テンプレート文字列）とは何ですか、また通常の文字列と比較して提供する主要な機能の1つは何ですか？",
        solution: "テンプレートリテラルは、シングルクォートまたはダブルクォートの代わりに **バッククォート (` `)** で区切られた文字列リテラルです。主要な機能の1つは **文字列補間（String Interpolation）** であり、 `${expression}` 構文を使用して文字列内に式を埋め込むことができます。また、'\\n'文字を必要とせずに **複数行文字列** をサポートします。"
      },
      vi: {
        title: "Template Literals",
        body: "Template Literals (Template Strings) là gì và một tính năng chính mà chúng cung cấp so với chuỗi thông thường là gì?",
        solution: "Template Literals là các string literal được phân định bằng **dấu backtick (` `)** thay vì dấu nháy đơn hoặc dấu nháy kép. Một tính năng chính là **String Interpolation** (Nội suy Chuỗi), cho phép nhúng các biểu thức bên trong chuỗi bằng cú pháp `${expression}`. Chúng cũng hỗ trợ **chuỗi nhiều dòng** mà không cần ký tự '\\n'."
      }
    }
  },
  {
    _id: "js-j-041",
    difficulty: "junior",
    tags: ["destructuring", "alias", "es6"],
    content: {
      en: {
        title: "Object Destructuring with Aliases",
        body: "How can you destructure the property 'firstName' from an object into a new variable named 'name'?",
        solution: "You use the colon syntax (:) in the destructuring assignment: **const { firstName: name } = person;**"
      },
      jp: {
        title: "エイリアスを使用したオブジェクトの分割代入",
        body: "オブジェクトからプロパティ「firstName」を「name」という名前の新しい変数に分割代入するにはどうすればよいですか？",
        solution: "分割代入代入でコロン構文（:）を使用します: **const { firstName: name } = person;**"
      },
      vi: {
        title: "Destructuring Đối tượng với Aliases",
        body: "Làm thế nào bạn có thể destructuring thuộc tính 'firstName' từ một đối tượng vào một biến mới có tên là 'name'?",
        solution: "Bạn sử dụng cú pháp dấu hai chấm (:) trong phép gán destructuring: **const { firstName: name } = person;**"
      }
    }
  },
  {
    _id: "js-j-042",
    difficulty: "junior",
    tags: ["method", "string", "array"],
    content: {
      en: {
        title: "String to Array Conversion",
        body: "What is the simplest way to convert a string (e.g., 'hello') into an array of its characters (e.g., ['h', 'e', 'l', 'l', 'o']) in modern JavaScript?",
        solution: "The simplest way is using the **Spread Operator** with the string: **const charArray = [...'hello'];** or using the **Array.from()** method: **const charArray = Array.from('hello');**"
      },
      jp: {
        title: "文字列から配列への変換",
        body: "現代のJavaScriptで、文字列（例: 'hello'）をその文字の配列（例: ['h', 'e', 'l', 'l', 'o']）に変換する最も簡単な方法は何ですか？",
        solution: "最も簡単な方法は、文字列とともに **スプレッド演算子** を使用することです: **const charArray = [...'hello'];** または **Array.from()** メソッドを使用することです: **const charArray = Array.from('hello');**"
      },
      vi: {
        title: "Chuyển đổi Chuỗi thành Mảng",
        body: "Cách đơn giản nhất để chuyển đổi một chuỗi (ví dụ: 'hello') thành một mảng các ký tự của nó (ví dụ: ['h', 'e', 'l', 'l', 'o']) trong JavaScript hiện đại là gì?",
        solution: "Cách đơn giản nhất là sử dụng **Spread Operator** với chuỗi: **const charArray = [...'hello'];** hoặc sử dụng phương thức **Array.from()**: **const charArray = Array.from('hello');**"
      }
    }
  },
  {
    _id: "js-j-043",
    difficulty: "junior",
    tags: ["ajax", "api", "fetch"],
    content: {
      en: {
        title: "Purpose of the Fetch API",
        body: "What is the Fetch API used for, and what object does it return by default?",
        solution: "The **Fetch API** is a modern interface used to make network requests (e.g., to retrieve resources from a server, similar to AJAX). It simplifies asynchronous data retrieval. The `fetch()` function returns a **Promise** that resolves to the **Response** object (which represents the response to the request)."
      },
      jp: {
        title: "Fetch APIの目的",
        body: "Fetch APIは何に使用されますか、またデフォルトでどのようなオブジェクトを返しますか？",
        solution: " **Fetch API** は、ネットワークリクエストを行うために使用される最新のインターフェースです（例えば、AJAXと同様にサーバーからリソースを取得するため）。非同期データ取得を簡素化します。 `fetch()` 関数は、 **Response** オブジェクト（リクエストへの応答を表す）に解決する **Promise** を返します。"
      },
      vi: {
        title: "Mục đích của Fetch API",
        body: "Fetch API được sử dụng để làm gì và nó trả về đối tượng gì theo mặc định?",
        solution: "**Fetch API** là một giao diện hiện đại được sử dụng để thực hiện các yêu cầu mạng (ví dụ: để truy xuất tài nguyên từ máy chủ, tương tự như AJAX). Nó đơn giản hóa việc truy xuất dữ liệu bất đồng bộ. Hàm `fetch()` trả về một **Promise** giải quyết thành đối tượng **Response** (đại diện cho phản hồi đối với yêu cầu)."
      }
    }
  },
  {
    _id: "js-j-044",
    difficulty: "junior",
    tags: ["operators", "nullish-coalescing", "es2020"],
    content: {
      en: {
        title: "Nullish Coalescing Operator (??)",
        body: "Explain the purpose of the Nullish Coalescing Operator (??) and how it differs from the OR operator (||).",
        solution: "The **Nullish Coalescing Operator (??)** returns the right-hand operand only when the left-hand operand is **null or undefined**. The **OR operator (||)** returns the right-hand operand when the left-hand operand is **any falsy value** (null, undefined, 0, '', false, NaN). The `??` operator is more precise for providing default values when `0` or `''` are valid, non-nullish values."
      },
      jp: {
        title: "Nullish Coalescing Operator (??)",
        body: "Nullish Coalescing Operator (??) の目的と、OR演算子 (||) との違いを説明してください。",
        solution: " **Nullish Coalescing Operator (??)** は、左側のオペランドが **null または undefined** の場合にのみ右側のオペランドを返します。 **OR演算子 (||)** は、左側のオペランドが **任意の falsy な値** （null、undefined、0、''、false、NaN）の場合に右側のオペランドを返します。 `??` 演算子は、`0` や `''` が有効な、nullishではない値である場合に、デフォルト値を提供するためにより正確です。"
      },
      vi: {
        title: "Toán tử Nullish Coalescing (??)",
        body: "Giải thích mục đích của Nullish Coalescing Operator (??) và nó khác với toán tử OR (||) như thế nào.",
        solution: "**Nullish Coalescing Operator (??)** trả về toán hạng bên phải chỉ khi toán hạng bên trái là **null hoặc undefined**. **Toán tử OR (||)** trả về toán hạng bên phải khi toán hạng bên trái là **bất kỳ giá trị falsy nào** (null, undefined, 0, '', false, NaN). Toán tử `??` chính xác hơn để cung cấp các giá trị mặc định khi `0` hoặc `''` là các giá trị hợp lệ, không phải nullish."
      }
    }
  },
  {
    _id: "js-j-045",
    difficulty: "junior",
    tags: ["operators", "optional-chaining", "es2020"],
    content: {
      en: {
        title: "Optional Chaining Operator (?)",
        body: "What problem does the Optional Chaining Operator (?.) solve, and how is it used?",
        solution: "The **Optional Chaining Operator (?.)** solves the problem of deeply nested property access that can throw an error if an intermediate reference is `null` or `undefined`. It allows you to safely access properties deep within an object structure. If any part of the chain is `null` or `undefined`, the expression short-circuits and returns **`undefined`** instead of throwing a 'TypeError'. Example: `user.profile?.address.street`."
      },
      jp: {
        title: "Optional Chaining Operator (?.)",
        body: "Optional Chaining Operator (?.) はどのような問題を解決しますか、またどのように使用されますか？",
        solution: " **Optional Chaining Operator (?.)** は、中間参照が `null` または `undefined` の場合にエラーをスローする可能性がある、深くネストされたプロパティアクセスという問題を解決します。これにより、オブジェクト構造の奥深くにあるプロパティに安全にアクセスできます。チェーンのいずれかの部分が `null` または `undefined` の場合、式は短絡し、'TypeError'をスローする代わりに **`undefined`** を返します。例: `user.profile?.address.street`。"
      },
      vi: {
        title: "Toán tử Optional Chaining (?.)",
        body: "Toán tử Optional Chaining (?.) giải quyết vấn đề gì và nó được sử dụng như thế nào?",
        solution: "**Optional Chaining Operator (?.)** giải quyết vấn đề truy cập thuộc tính lồng nhau sâu có thể gây lỗi nếu một tham chiếu trung gian là `null` hoặc `undefined`. Nó cho phép bạn truy cập an toàn các thuộc tính sâu bên trong cấu trúc đối tượng. Nếu bất kỳ phần nào của chuỗi là `null` hoặc `undefined`, biểu thức sẽ ngừng hoạt động ngay lập tức và trả về **`undefined`** thay vì ném ra 'TypeError'. Ví dụ: `user.profile?.address.street`."
      }
    }
  },
  {
    _id: "js-j-046",
    difficulty: "junior",
    tags: ["async", "promise"],
    content: {
      en: {
        title: "Handling Errors in Async/Await",
        body: "What is the standard way to handle errors (rejections) when using the 'await' keyword inside an 'async' function?",
        solution: "The standard way is to wrap the awaited promise call in a **try...catch** block. The `catch` block will execute if the awaited promise is rejected. Example: `try { const data = await fetchData(); } catch (error) { console.error(error); }`"
      },
      jp: {
        title: "Async/Awaitでのエラー処理",
        body: "「async」関数内で「await」キーワードを使用する場合、エラー（拒否）を処理するための標準的な方法は何ですか？",
        solution: "標準的な方法は、awaitされたPromiseの呼び出しを **try...catch** ブロックでラップすることです。awaitされたPromiseが拒否された場合、`catch` ブロックが実行されます。例: `try { const data = await fetchData(); } catch (error) { console.error(error); }`"
      },
      vi: {
        title: "Xử lý Lỗi trong Async/Await",
        body: "Cách chuẩn để xử lý lỗi (rejections) khi sử dụng từ khóa 'await' bên trong một hàm 'async' là gì?",
        solution: "Cách chuẩn là bọc lời gọi promise được `await` trong một khối **try...catch**. Khối `catch` sẽ được thực thi nếu promise được `await` bị từ chối (rejected). Ví dụ: `try { const data = await fetchData(); } catch (error) { console.error(error); }`"
      }
    }
  },
  {
    _id: "js-j-047",
    difficulty: "junior",
    tags: ["array", "method"],
    content: {
      en: {
        title: "Array.prototype.find() Purpose",
        body: "What does the 'Array.prototype.find()' method return, and how does it differ from 'Array.prototype.filter()'? ",
        solution: "The **find()** method returns the **value of the first element** in the provided array that satisfies the provided testing function. If no elements satisfy the testing function, `undefined` is returned. Unlike `filter()`, which returns a new array of *all* matching elements, `find()` returns only the *first* matching element (or `undefined`)."
      },
      jp: {
        title: "Array.prototype.find() の目的",
        body: "「Array.prototype.find()」メソッドは何を返しますか、また「Array.prototype.filter()」とどのように異なりますか？",
        solution: " **find()** メソッドは、提供された配列内で提供されたテスト関数を満たす **最初の要素の値** を返します。テスト関数を満たす要素がない場合は、`undefined` が返されます。一致する *すべて* の要素の新しい配列を返す `filter()` とは異なり、`find()` は *最初* に一致した要素のみ（または `undefined`）を返します。"
      },
      vi: {
        title: "Mục đích của Array.prototype.find()",
        body: "Phương thức 'Array.prototype.find()' trả về gì và nó khác với 'Array.prototype.filter()' như thế nào?",
        solution: "Phương thức **find()** trả về **giá trị của phần tử đầu tiên** trong mảng được cung cấp thỏa mãn hàm kiểm tra được cung cấp. Nếu không có phần tử nào thỏa mãn hàm kiểm tra, `undefined` được trả về. Không giống như `filter()` trả về một mảng mới gồm *tất cả* các phần tử phù hợp, `find()` chỉ trả về *phần tử* phù hợp đầu tiên (hoặc `undefined`)."
      }
    }
  },
  {
    _id: "js-j-048",
    difficulty: "junior",
    tags: ["date", "time"],
    content: {
      en: {
        title: "Date Object Creation",
        body: "How do you create a JavaScript 'Date' object representing the current date and time?",
        solution: "You create a new instance of the Date object without any arguments: **const now = new Date();**"
      },
      jp: {
        title: "Dateオブジェクトの作成",
        body: "現在の日付と時刻を表すJavaScriptの「Date」オブジェクトを作成するにはどうすればよいですか？",
        solution: "引数を指定せずにDateオブジェクトの新しいインスタンスを作成します: **const now = new Date();**"
      },
      vi: {
        title: "Tạo Đối tượng Date",
        body: "Làm thế nào để bạn tạo một đối tượng 'Date' trong JavaScript đại diện cho ngày và giờ hiện tại?",
        solution: "Bạn tạo một thể hiện mới của đối tượng Date mà không có đối số nào: **const now = new Date();**"
      }
    }
  },
  {
    _id: "js-j-049",
    difficulty: "junior",
    tags: ["object", "method"],
    content: {
      en: {
        title: "Iterating Object Keys",
        body: "What is the recommended method to get an array of a plain object's own enumerable property names (keys)?",
        solution: "The recommended method is **Object.keys(myObject)**. This returns an array of a given object's own enumerable string property names."
      },
      jp: {
        title: "オブジェクトキーの反復処理",
        body: "プレーンなオブジェクトの自身の列挙可能なプロパティ名（キー）の配列を取得するために推奨されるメソッドは何ですか？",
        solution: "推奨されるメソッドは **Object.keys(myObject)** です。これは、指定されたオブジェクト自身の列挙可能な文字列プロパティ名の配列を返します。"
      },
      vi: {
        title: "Lặp qua các Khóa Đối tượng",
        body: "Phương thức được khuyến nghị để lấy một mảng các tên thuộc tính có thể liệt kê (khóa) của một đối tượng thuần túy là gì?",
        solution: "Phương thức được khuyến nghị là **Object.keys(myObject)**. Phương thức này trả về một mảng các tên thuộc tính chuỗi có thể liệt kê của một đối tượng đã cho."
      }
    }
  },
  {
    _id: "js-j-050",
    difficulty: "junior",
    tags: ["array", "method", "mutation"],
    content: {
      en: {
        title: "Mutable Array Methods",
        body: "Name two common Array methods that **modify the original array** (i.e., are mutable).",
        solution: "Common mutable Array methods include: **push()**, **pop()**, **shift()**, **unshift()**, **splice()**, **sort()**, and **reverse()**. (Any two of these are acceptable answers.)"
      },
      jp: {
        title: "可変な配列メソッド",
        body: " **元の配列を変更する** （つまり、可変である）一般的な配列メソッドを2つ挙げてください。",
        solution: "一般的な可変配列メソッドには、**push()**、**pop()**、**shift()**、**unshift()**、**splice()**、**sort()**、および **reverse()** が含まれます。（これらのうち任意の2つが許容される回答です。）"
      },
      vi: {
        title: "Phương thức Mảng có thể thay đổi (Mutable)",
        body: "Nêu hai phương thức Mảng phổ biến **thay đổi mảng gốc** (tức là có thể thay đổi - mutable).",
        solution: "Các phương thức Mảng có thể thay đổi phổ biến bao gồm: **push()**, **pop()**, **shift()**, **unshift()**, **splice()**, **sort()**, và **reverse()**. (Bất kỳ hai phương thức nào trong số này đều là câu trả lời chấp nhận được.)"
      }
    }
  },
  // Thêm 15 câu hỏi nữa để đạt 50 câu (js-j-051 đến js-j-065, nhưng mình sẽ đánh số lại để khớp 50 câu)
  {
    _id: "js-j-036-2",
    difficulty: "junior",
    tags: ["dom", "method"],
    content: {
      en: {
        title: "Getting all Elements by Class Name",
        body: "What method is used to retrieve a collection of all elements in the document with a specific class name?",
        solution: "The method is **document.getElementsByClassName('className')**. It returns a live **HTMLCollection** of elements."
      },
      jp: {
        title: "クラス名による全要素の取得",
        body: "特定のクラス名を持つドキュメント内のすべての要素のコレクションを取得するために使用されるメソッドは何ですか？",
        solution: "メソッドは **document.getElementsByClassName('className')** です。要素のライブ **HTMLCollection** を返します。"
      },
      vi: {
        title: "Lấy tất cả Phần tử bằng Tên Lớp",
        body: "Phương thức nào được sử dụng để truy xuất một bộ sưu tập (collection) của tất cả các phần tử trong tài liệu có tên lớp cụ thể?",
        solution: "Phương thức đó là **document.getElementsByClassName('className')**. Nó trả về một **HTMLCollection** sống (live) của các phần tử."
      }
    }
  },
  {
    _id: "js-j-037-2",
    difficulty: "junior",
    tags: ["promise", "async"],
    content: {
      en: {
        title: "Chaining Promises",
        body: "How do you chain multiple asynchronous operations together using Promises, ensuring that the next operation starts only after the previous one succeeds?",
        solution: "You chain Promises by calling the **.then()** method on a promise. The return value of the first `.then()` callback is automatically wrapped in a new Promise, allowing the next `.then()` in the chain to be called with that value."
      },
      jp: {
        title: "Promiseの連鎖",
        body: "Promiseを使用して複数の非同期操作を連鎖させ、前の操作が成功した後にのみ次の操作が開始されるようにするにはどうすればよいですか？",
        solution: "Promiseで **.then()** メソッドを呼び出すことによって、Promiseを連鎖させます。最初の `.then()` コールバックの戻り値は自動的に新しいPromiseでラップされ、チェーン内の次の `.then()` がその値で呼び出されるようになります。"
      },
      vi: {
        title: "Chaining Promises",
        body: "Làm thế nào để bạn xâu chuỗi (chain) nhiều thao tác bất đồng bộ lại với nhau bằng cách sử dụng Promises, đảm bảo rằng thao tác tiếp theo chỉ bắt đầu sau khi thao tác trước thành công?",
        solution: "Bạn xâu chuỗi Promises bằng cách gọi phương thức **.then()** trên một promise. Giá trị trả về của callback `.then()` đầu tiên sẽ tự động được bọc trong một Promise mới, cho phép `.then()` tiếp theo trong chuỗi được gọi với giá trị đó."
      }
    }
  },
  {
    _id: "js-j-038-2",
    difficulty: "junior",
    tags: ["array", "method"],
    content: {
      en: {
        title: "Checking for Element Existence",
        body: "What method is used to check if an array includes a certain element, returning true or false?",
        solution: "The method is **Array.prototype.includes()**. It returns a boolean (`true` or `false`) indicating whether an array includes a certain value among its entries."
      },
      jp: {
        title: "要素の存在の確認",
        body: "配列に特定の要素が含まれているかどうかを確認し、trueまたはfalseを返すために使用されるメソッドは何ですか？",
        solution: "メソッドは **Array.prototype.includes()** です。配列がエントリの中に特定の値を含んでいるかどうかを示すブール値（`true` または `false`）を返します。"
      },
      vi: {
        title: "Kiểm tra sự tồn tại của Phần tử",
        body: "Phương thức nào được sử dụng để kiểm tra xem một mảng có bao gồm một phần tử nhất định hay không, trả về true hoặc false?",
        solution: "Phương thức đó là **Array.prototype.includes()**. Nó trả về một giá trị boolean (`true` hoặc `false`) cho biết liệu một mảng có bao gồm một giá trị nhất định trong các mục nhập của nó hay không."
      }
    }
  },
  {
    _id: "js-j-039-2",
    difficulty: "junior",
    tags: ["object", "clone", "reference"],
    content: {
      en: {
        title: "Shallow Object Copy",
        body: "What is a simple ES6+ method to create a shallow copy of an object?",
        solution: "The simplest ES6+ methods are the **Spread Operator ({...})**: **const newObj = { ...originalObj };** or using **Object.assign()**: **const newObj = Object.assign({}, originalObj);**"
      },
      jp: {
        title: "オブジェクトのシャローコピー",
        body: "オブジェクトのシャローコピーを作成するための簡単なES6+メソッドは何ですか？",
        solution: "最も簡単なES6+メソッドは **スプレッド演算子 ({...})** です: **const newObj = { ...originalObj };** または **Object.assign()** を使用することです: **const newObj = Object.assign({}, originalObj);**"
      },
      vi: {
        title: "Sao chép Nông (Shallow Copy) Đối tượng",
        body: "Phương thức ES6+ đơn giản để tạo một bản sao nông (shallow copy) của một đối tượng là gì?",
        solution: "Các phương thức ES6+ đơn giản nhất là **Spread Operator ({...})**: **const newObj = { ...originalObj };** hoặc sử dụng **Object.assign()**: **const newObj = Object.assign({}, originalObj);**"
      }
    }
  },
  {
    _id: "js-j-040-2",
    difficulty: "junior",
    tags: ["coercion", "math"],
    content: {
      en: {
        title: "Type Coercion with Math Operators",
        body: "What is the result of the expression '5' - 3 and why?",
        solution: "The result is **2 (Number)**. When the subtraction operator (-) is used, JavaScript attempts to convert both operands to numbers (type coercion). The string '5' is converted to the number 5, and the operation 5 - 3 is performed."
      },
      jp: {
        title: "算術演算子と型強制",
        body: "式「'5' - 3」の結果は何ですか、またその理由は何ですか？",
        solution: "結果は **2（数値）** です。減算演算子（-）が使用されると、JavaScriptは両方のオペランドを数値に変換しようとします（型強制）。文字列「5」は数値5に変換され、5 - 3の操作が実行されます。"
      },
      vi: {
        title: "Chuyển đổi Kiểu với Toán tử Toán học",
        body: "Kết quả của biểu thức '5' - 3 là gì và tại sao?",
        solution: "Kết quả là **2 (Number)**. Khi toán tử trừ (-) được sử dụng, JavaScript cố gắng chuyển đổi cả hai toán hạng thành số (type coercion). Chuỗi '5' được chuyển đổi thành số 5, và thao tác 5 - 3 được thực hiện."
      }
    }
  },
  {
    _id: "js-j-041-2",
    difficulty: "junior",
    tags: ["error-handling", "finally"],
    content: {
      en: {
        title: "'finally' Block",
        body: "In a 'try...catch...finally' statement, when is the code inside the 'finally' block executed?",
        solution: "The code inside the `finally` block is **always executed** after the `try` and `catch` blocks have finished, regardless of whether an error was thrown or caught. It's often used for cleanup code (e.g., closing file streams or database connections)."
      },
      jp: {
        title: "「finally」ブロック",
        body: "「try...catch...finally」ステートメントでは、「finally」ブロック内のコードはいつ実行されますか？",
        solution: " `finally` ブロック内のコードは、エラーがスローされたかキャッチされたかに関係なく、`try` および `catch` ブロックが終了した後、 **常に実行されます**。クリーンアップコード（例：ファイルストリームやデータベース接続のクローズ）によく使用されます。"
      },
      vi: {
        title: "Khối 'finally'",
        body: "Trong câu lệnh 'try...catch...finally', mã bên trong khối 'finally' được thực thi khi nào?",
        solution: "Mã bên trong khối `finally` **luôn được thực thi** sau khi khối `try` và `catch` đã hoàn thành, bất kể có lỗi nào được ném ra hay bắt được. Nó thường được sử dụng cho mã dọn dẹp (ví dụ: đóng luồng tệp hoặc kết nối cơ sở dữ liệu)."
      }
    }
  },
  {
    _id: "js-j-042-2",
    difficulty: "junior",
    tags: ["dom", "attribute", "property"],
    content: {
      en: {
        title: "Difference between Attribute and Property",
        body: "In the context of the DOM, what is the conceptual difference between an HTML **attribute** and a DOM **property**?",
        solution: "An HTML **attribute** is the initial value defined in the HTML tag (e.g., `<input value=\"initial\">`). A DOM **property** is the current value of that attribute on the live DOM node, accessed via JavaScript (e.g., `element.value`). Properties are usually dynamic and can change; attributes are static initial values."
      },
      jp: {
        title: "属性とプロパティの違い",
        body: "DOMのコンテキストにおいて、HTMLの **属性 (Attribute)** とDOMの **プロパティ (Property)** の概念的な違いは何ですか？",
        solution: "HTMLの **属性 (Attribute)** は、HTMLタグで定義された初期値です（例: `<input value=\"initial\">`）。DOMの **プロパティ (Property)** は、JavaScriptを介してアクセスされる、ライブのDOMノード上のその属性の現在の値です（例: `element.value`）。プロパティは通常動的で変更できますが、属性は静的な初期値です。"
      },
      vi: {
        title: "Sự khác biệt giữa Attribute và Property",
        body: "Trong ngữ cảnh của DOM, sự khác biệt về khái niệm giữa một **thuộc tính (attribute)** HTML và một **property** DOM là gì?",
        solution: "**Thuộc tính (Attribute)** HTML là giá trị ban đầu được định nghĩa trong thẻ HTML (ví dụ: `<input value=\"initial\">`). **Property** DOM là giá trị hiện tại của thuộc tính đó trên nút DOM đang hoạt động, được truy cập thông qua JavaScript (ví dụ: `element.value`). Properties thường là động và có thể thay đổi; attributes là giá trị ban đầu tĩnh."
      }
    }
  },
  {
    _id: "js-j-043-2",
    difficulty: "junior",
    tags: ["set", "es6"],
    content: {
      en: {
        title: "Array Unique Elements with Set",
        body: "Using the ES6 'Set' object, how can you efficiently get an array of unique elements from an array containing duplicates?",
        solution: "You create a new Set from the array (which automatically filters duplicates) and then convert the Set back to an array, typically using the Spread Operator: **const uniqueArray = [...new Set(arrayWithDuplicates)];**"
      },
      jp: {
        title: "Setを使用した配列のユニーク要素",
        body: "ES6の「Set」オブジェクトを使用して、重複を含む配列からユニークな要素の配列を効率的に取得するにはどうすればよいですか？",
        solution: "配列から新しいSetを作成し（これにより重複が自動的にフィルタリングされます）、次に通常スプレッド演算子を使用してSetを配列に戻します: **const uniqueArray = [...new Set(arrayWithDuplicates)];**"
      },
      vi: {
        title: "Các phần tử duy nhất của Mảng với Set",
        body: "Sử dụng đối tượng 'Set' của ES6, làm thế nào bạn có thể lấy một mảng các phần tử duy nhất một cách hiệu quả từ một mảng chứa các bản sao?",
        solution: "Bạn tạo một Set mới từ mảng (tự động lọc các bản sao) và sau đó chuyển đổi Set trở lại thành mảng, thường sử dụng Spread Operator: **const uniqueArray = [...new Set(arrayWithDuplicates)];**"
      }
    }
  },
  {
    _id: "js-j-044-2",
    difficulty: "junior",
    tags: ["promise", "method"],
    content: {
      en: {
        title: "Promise.race() Purpose",
        body: "What is the purpose of 'Promise.race()'?",
        solution: "The **Promise.race()** method takes an iterable of promises and returns a promise that fulfills or rejects as soon as **one** of the promises in the iterable fulfills or rejects, with the value or reason from that promise. It's often used for implementing timeouts."
      },
      jp: {
        title: "Promise.race() の目的",
        body: "「Promise.race()」の目的は何ですか？",
        solution: " **Promise.race()** メソッドは、Promiseのイテラブルを受け取り、イテラブル内のPromiseの **いずれか1つ** が解決または拒否されるとすぐに、そのPromiseの値または理由で解決または拒否するPromiseを返します。タイムアウトの実装によく使用されます。"
      },
      vi: {
        title: "Mục đích của Promise.race()",
        body: "Mục đích của 'Promise.race()' là gì?",
        solution: "Phương thức **Promise.race()** nhận một iterable của các promise và trả về một promise được hoàn thành hoặc bị từ chối ngay khi **một trong** các promise trong iterable được hoàn thành hoặc bị từ chối, với giá trị hoặc lý do từ promise đó. Nó thường được sử dụng để thực hiện timeout."
      }
    }
  },
  {
    _id: "js-j-045-2",
    difficulty: "junior",
    tags: ["operators", "spread", "object"],
    content: {
      en: {
        title: "Object Property Overwriting with Spread",
        body: "Given `const obj1 = { a: 1, b: 2 };` and `const obj2 = { b: 3, c: 4 };`, what is the result of `const merged = { ...obj1, ...obj2 };`?",
        solution: "The result is **`{ a: 1, b: 3, c: 4 }`**. When using the spread operator to merge objects, if a key exists in both objects, the value from the **last** object spread will overwrite the previous one (i.e., `b: 3` overwrites `b: 2`)."
      },
      jp: {
        title: "スプレッドによるオブジェクトプロパティの上書き",
        body: " `const obj1 = { a: 1, b: 2 };` および `const obj2 = { b: 3, c: 4 };` が与えられた場合、 `const merged = { ...obj1, ...obj2 };` の結果は何ですか？",
        solution: "結果は **`{ a: 1, b: 3, c: 4 }`** です。スプレッド演算子を使用してオブジェクトをマージする場合、両方のオブジェクトにキーが存在すると、最後にスプレッドされたオブジェクトの値が以前のものを上書きします（つまり、`b: 3` が `b: 2` を上書きします）。"
      },
      vi: {
        title: "Ghi đè Thuộc tính Đối tượng bằng Spread",
        body: "Cho `const obj1 = { a: 1, b: 2 };` và `const obj2 = { b: 3, c: 4 };`, kết quả của `const merged = { ...obj1, ...obj2 };` là gì?",
        solution: "Kết quả là **`{ a: 1, b: 3, c: 4 }`**. Khi sử dụng toán tử spread để hợp nhất các đối tượng, nếu một key tồn tại trong cả hai đối tượng, giá trị từ đối tượng được spread **cuối cùng** sẽ ghi đè lên giá trị trước đó (tức là `b: 3` ghi đè `b: 2`)."
      }
    }
  },
  {
    _id: "js-j-046-2",
    difficulty: "junior",
    tags: ["function", "named"],
    content: {
      en: {
        title: "Named vs. Anonymous Function",
        body: "Name one advantage of using a **Named Function Expression** (e.g., `const myFunc = function myName() { ... }`) over an **Anonymous Function Expression** (e.g., `const myFunc = function() { ... }`).",
        solution: "A primary advantage is **better debugging**. The name of the function (e.g., `myName`) appears in the call stack/error trace, making it much easier to identify where an error occurred. It also allows for recursion within the function body itself."
      },
      jp: {
        title: "名前付き関数と匿名関数",
        body: " **名前付き関数式** （例: `const myFunc = function myName() { ... }`）を **匿名関数式** （例: `const myFunc = function() { ... }`）よりも使用する利点を1つ挙げてください。",
        solution: "主な利点は **デバッグの向上** です。関数の名前（例: `myName`）がコールスタック/エラートレースに表示されるため、エラーが発生した場所を特定するのがはるかに容易になります。また、関数本体内での再帰も可能になります。"
      },
      vi: {
        title: "Hàm có tên so với Hàm ẩn danh",
        body: "Nêu một lợi thế của việc sử dụng **Biểu thức Hàm có tên (Named Function Expression)** (ví dụ: `const myFunc = function myName() { ... }`) so với **Biểu thức Hàm Ẩn danh (Anonymous Function Expression)** (ví dụ: `const myFunc = function() { ... }`).",
        solution: "Một lợi thế chính là **gỡ lỗi tốt hơn**. Tên của hàm (ví dụ: `myName`) xuất hiện trong ngăn xếp cuộc gọi/dấu vết lỗi, giúp dễ dàng xác định nơi xảy ra lỗi hơn nhiều. Nó cũng cho phép đệ quy (recursion) bên trong thân hàm."
      }
    }
  },
  {
    _id: "js-j-047-2",
    difficulty: "junior",
    tags: ["coercion", "boolean"],
    content: {
      en: {
        title: "Falsy Values",
        body: "Name three JavaScript values that are considered **falsy** (evaluate to `false` in a boolean context).",
        solution: "The six falsy values are: **false**, **0** (the number zero), **''** or **\"\"** (an empty string), **null**, **undefined**, and **NaN**. (Any three of these are acceptable answers.)"
      },
      jp: {
        title: "Falsyな値",
        body: " **falsy** と見なされる（ブールコンテキストで `false` と評価される）JavaScriptの値を3つ挙げてください。",
        solution: "6つのfalsyな値は、**false**、**0**（数値ゼロ）、**''** または **\"\"**（空文字列）、**null**、**undefined**、および **NaN** です。（これらのうち任意の3つが許容される回答です。）"
      },
      vi: {
        title: "Các giá trị Falsy",
        body: "Nêu ba giá trị JavaScript được coi là **falsy** (đánh giá là `false` trong một ngữ cảnh boolean).",
        solution: "Sáu giá trị falsy là: **false**, **0** (số không), **''** hoặc **\"\"** (chuỗi rỗng), **null**, **undefined**, và **NaN**. (Bất kỳ ba giá trị nào trong số này đều là câu trả lời chấp nhận được.)"
      }
    }
  },
  {
    _id: "js-j-048-2",
    difficulty: "junior",
    tags: ["dom", "create"],
    content: {
      en: {
        title: "Creating a New DOM Element",
        body: "What is the standard JavaScript method used to dynamically create a new HTML element (e.g., a `<div>`)?",
        solution: "The standard method is **document.createElement('tagName')**. Example: `const newDiv = document.createElement('div');`"
      },
      jp: {
        title: "新しいDOM要素の作成",
        body: "新しいHTML要素（例：`<div>`）を動的に作成するために使用される標準的なJavaScriptメソッドは何ですか？",
        solution: "標準的なメソッドは **document.createElement('tagName')** です。例: `const newDiv = document.createElement('div');`"
      },
      vi: {
        title: "Tạo một Phần tử DOM Mới",
        body: "Phương thức JavaScript chuẩn được sử dụng để tạo động một phần tử HTML mới (ví dụ: một `<div>`) là gì?",
        solution: "Phương thức chuẩn là **document.createElement('tagName')**. Ví dụ: `const newDiv = document.createElement('div');`"
      }
    }
  },
  {
    _id: "js-j-049-2",
    difficulty: "junior",
    tags: ["loops", "for-of", "for-in", "es6"],
    content: {
      en: {
        title: "'for...of' vs. 'for...in'",
        body: "What is the key difference between the 'for...of' loop and the 'for...in' loop in modern JavaScript?",
        solution: "**for...in** iterates over the **enumerable property names (keys)** of an object (and its prototype chain). **for...of** iterates over the **values** of an iterable object (like Arrays, Strings, Maps, Sets). Use `for...of` for arrays and `for...in` for inspecting object keys (though `Object.keys()` is often preferred)."
      },
      jp: {
        title: "「for...of」と「for...in」",
        body: "現代のJavaScriptにおける「for...of」ループと「for...in」ループの主な違いは何ですか？",
        solution: "**for...in** は、オブジェクト（およびそのプロトタイプチェーン）の **列挙可能なプロパティ名（キー）** を反復処理します。 **for...of** は、イテラブルオブジェクト（配列、文字列、Map、Setなど）の **値** を反復処理します。配列には `for...of` を、オブジェクトキーの検査には `for...in` を使用します（ただし、`Object.keys()` がしばしば好まれます）。"
      },
      vi: {
        title: "'for...of' so với 'for...in'",
        body: "Sự khác biệt chính giữa vòng lặp 'for...of' và vòng lặp 'for...in' trong JavaScript hiện đại là gì?",
        solution: "**for...in** lặp qua **tên thuộc tính có thể liệt kê (khóa)** của một đối tượng (và chuỗi prototype của nó). **for...of** lặp qua **các giá trị** của một đối tượng iterable (như Arrays, Strings, Maps, Sets). Sử dụng `for...of` cho mảng và `for...in` để kiểm tra các khóa đối tượng (mặc dù `Object.keys()` thường được ưu tiên hơn)."
      }
    }
  },
  {
    _id: "js-j-050-2",
    difficulty: "junior",
    tags: ["this", "global", "context"],
    content: {
      en: {
        title: "Value of 'this' in Global Scope",
        body: "What is the value of the 'this' keyword when used in the global scope (outside of any function) in a non-strict browser environment?",
        solution: "In a non-strict browser environment, the value of `this` in the global scope is the **global object**, which is the **`window`** object."
      },
      jp: {
        title: "グローバルスコープでの「this」の値",
        body: "非厳格なブラウザ環境のグローバルスコープ（関数の外）で使用される「this」キーワードの値は何ですか？",
        solution: "非厳格なブラウザ環境では、グローバルスコープの `this` の値は **グローバルオブジェクト** であり、それは **`window`** オブジェクトです。"
      },
      vi: {
        title: "Giá trị của 'this' trong Phạm vi Toàn cục",
        body: "Giá trị của từ khóa 'this' khi được sử dụng trong phạm vi toàn cục (bên ngoài bất kỳ hàm nào) trong môi trường trình duyệt không nghiêm ngặt là gì?",
        solution: "Trong môi trường trình duyệt không nghiêm ngặt, giá trị của `this` trong phạm vi toàn cục là **đối tượng toàn cục**, đó là đối tượng **`window`**."
      }
  }
}
];