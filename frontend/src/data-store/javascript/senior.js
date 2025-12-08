export const jsSeniorQuestions = [
  {
    _id: "js-s-001",
    difficulty: "senior",
    tags: ["meta-programming", "proxy", "reflect"],
    content: {
      en: {
        title: "Explain the relationship between the `Proxy` object and the `Reflect` API.",
        body: "Why is `Reflect` recommended when defining Proxy traps?",
        solution: "The **`Proxy`** object allows you to intercept and customize fundamental operations (the 'traps'). The **`Reflect`** object provides a set of static methods that match the Proxy traps (e.g., `Reflect.get()` corresponds to the `get` trap). `Reflect` is recommended because it provides the **default behavior** for the operation being intercepted, which allows traps to be defined more easily and ensures the Proxy adheres to the proper API contract. This keeps code clean by letting you only override the necessary logic."
      },
      jp: {
        title: "`Proxy` オブジェクトと `Reflect` APIの関係を説明してください。",
        body: "Proxyトラップを定義する際に `Reflect` が推奨されるのはなぜですか？",
        solution: "**`Proxy`** オブジェクトは、基本的な操作（「トラップ」）を傍受してカスタマイズすることを可能にします。**`Reflect`** オブジェクトは、Proxyトラップに対応する一連の静的メソッドを提供します（例：`Reflect.get()` は `get` トラップに対応します）。`Reflect` が推奨されるのは、傍受されている操作の **デフォルトの動作** を提供するためです。これにより、トラップをより簡単に定義でき、Proxyが適切なAPI契約に準拠することを保証します。必要なロジックだけをオーバーライドすることで、コードをきれいに保ちます。"
      },
      vi: {
        title: "Giải thích mối quan hệ giữa đối tượng `Proxy` và API `Reflect`.",
        body: "Tại sao `Reflect` được khuyến nghị khi định nghĩa các Proxy trap?",
        solution: "Đối tượng **`Proxy`** cho phép bạn chặn và tùy chỉnh các thao tác cơ bản (các 'traps'). Đối tượng **`Reflect`** cung cấp một tập hợp các phương thức tĩnh phù hợp với các Proxy trap (ví dụ: `Reflect.get()` tương ứng với trap `get`). `Reflect` được khuyến nghị vì nó cung cấp **hành vi mặc định** cho thao tác đang bị chặn, điều này cho phép các trap được định nghĩa dễ dàng hơn và đảm bảo Proxy tuân thủ hợp đồng API thích hợp. Điều này giữ cho mã sạch sẽ bằng cách chỉ cho phép bạn ghi đè lên logic cần thiết."
      }
    }
  },
  {
    _id: "js-s-002",
    difficulty: "senior",
    tags: ["memory-management", "garbage-collection"],
    content: {
      en: {
        title: "How does JavaScript's Garbage Collector (GC) typically work, and what is the 'Mark-and-Sweep' algorithm?",
        body: "Explain a common cause of memory leaks in modern JS applications.",
        solution: "The JS GC primarily uses the **Mark-and-Sweep** algorithm. It works in two phases: **Marking** (starting from root objects like the global object, it finds all objects that are **reachable** by traversing references) and **Sweeping** (it deletes all un-marked, unreachable objects). A common memory leak cause is **unremoved event listeners** or **closure variables** referencing large objects, which keep objects reachable even if they are logically no longer in use (e.g., an interval running forever with a closed-over reference)."
      },
      jp: {
        title: "JavaScriptのガベージコレクター（GC）は通常どのように機能し、「マーク＆スイープ」アルゴリズムとは何ですか？",
        body: "現代のJSアプリケーションにおけるメモリリークの一般的な原因を説明してください。",
        solution: "JS GCは主に **マーク＆スイープ** アルゴリズムを使用します。これは2つのフェーズで機能します:**マーキング**（グローバルオブジェクトなどのルートオブジェクトから開始し、参照をたどって **到達可能な** すべてのオブジェクトを見つける）と **スイープ**（マークされていない、到達不可能なすべてのオブジェクトを削除する）です。一般的なメモリリークの原因は、**削除されていないイベントリスナー** や、大きなオブジェクトを参照する **クロージャ変数** であり、これらは論理的には使用されていなくてもオブジェクトに到達可能な状態を保ちます（例：閉じ込められた参照を持つインターバルが永久に実行される）。"
      },
      vi: {
        title: "Garbage Collector (GC) của JavaScript thường hoạt động như thế nào và thuật toán 'Mark-and-Sweep' là gì?",
        body: "Giải thích một nguyên nhân phổ biến gây rò rỉ bộ nhớ trong các ứng dụng JS hiện đại.",
        solution: "GC của JS chủ yếu sử dụng thuật toán **Mark-and-Sweep**. Nó hoạt động trong hai giai đoạn: **Marking** (bắt đầu từ các đối tượng gốc như đối tượng toàn cục, nó tìm tất cả các đối tượng **có thể truy cập** được bằng cách duyệt qua các tham chiếu) và **Sweeping** (nó xóa tất cả các đối tượng không được đánh dấu, không thể truy cập). Một nguyên nhân phổ biến gây rò rỉ bộ nhớ là **các trình lắng nghe sự kiện không được gỡ bỏ** hoặc **các biến closure** tham chiếu đến các đối tượng lớn, giữ cho các đối tượng có thể truy cập ngay cả khi chúng không còn được sử dụng về mặt logic (ví dụ: một interval chạy mãi mãi với một tham chiếu bị đóng)."
      }
    }
  },
  {
    _id: "js-s-003",
    difficulty: "senior",
    tags: ["design-pattern", "module", "iife"],
    content: {
      en: {
        title: "Describe the 'Module Pattern' and how it achieves data privacy.",
        body: "How is the module pattern typically implemented using older JavaScript syntax?",
        solution: "The **Module Pattern** is a design pattern used to wrap methods and variables in a scope (often a function) to achieve **encapsulation** and **privacy** (hiding private members). It is typically implemented using an **Immediately Invoked Function Expression (IIFE)**. Variables and functions declared inside the IIFE are private to the module, while only the properties explicitly returned in the final object are exposed publicly."
      },
      jp: {
        title: "「モジュールパターン」を説明し、それがどのようにデータプライバシーを達成するかを説明してください。",
        body: "古いJavaScript構文を使用してモジュールパターンは通常どのように実装されますか？",
        solution: "**モジュールパターン** は、**カプセル化** と **プライバシー** （プライベートメンバーの非表示）を達成するために、メソッドと変数をスコープ（多くの場合関数）にラップするために使用されるデザインパターンです。これは通常、**即時実行関数式（IIFE）** を使用して実装されます。IIFE内で宣言された変数と関数はモジュールに対してプライベートであり、最終的なオブジェクトで明示的に返されたプロパティのみがパブリックに公開されます。"
      },
      vi: {
        title: "Mô tả 'Module Pattern' và cách nó đạt được tính riêng tư dữ liệu.",
        body: "Module pattern thường được triển khai bằng cú pháp JavaScript cũ hơn như thế nào?",
        solution: "**Module Pattern** là một design pattern được sử dụng để gói các phương thức và biến trong một phạm vi (thường là một hàm) để đạt được **tính đóng gói (encapsulation)** và **riêng tư (privacy)** (ẩn các thành viên private). Nó thường được triển khai bằng cách sử dụng **Immediately Invoked Function Expression (IIFE)**. Các biến và hàm được khai báo bên trong IIFE là private đối với module, trong khi chỉ các thuộc tính được trả về rõ ràng trong đối tượng cuối cùng mới được công khai."
      }
    }
  },
  {
    _id: "js-s-004",
    difficulty: "senior",
    tags: ["typescript", "type-script", "superset"],
    content: {
      en: {
        title: "Why is TypeScript considered a 'superset' of JavaScript, and what is its main compilation step?",
        body: "What critical issue does TS solve that vanilla JS cannot?",
        solution: "TypeScript is a superset because **all valid JavaScript code is also valid TypeScript code**. Its main compilation step is **Transpilation**, where the TS code is compiled (transpiled) into plain JavaScript that can be executed by browsers/Node. TS primarily solves the issue of **Type Safety** during development, catching errors related to incorrect types and null/undefined values before runtime."
      },
      jp: {
        title: "TypeScriptがJavaScriptの「スーパーセット」と見なされるのはなぜですか、またその主なコンパイルステップは何ですか？",
        body: "TSがバニラJSでは解決できない重要な問題は何ですか？",
        solution: "TypeScriptは、**すべての有効なJavaScriptコードが有効なTypeScriptコードでもある** ため、スーパーセットと見なされます。その主なコンパイルステップは **トランスパイル（Transpilation）** であり、TSコードはブラウザ/Nodeで実行できるプレーンなJavaScriptにコンパイル（トランスパイル）されます。TSは主に開発中の **型安全性** の問題を解決し、実行時前に不正確な型やnull/undefined値に関連するエラーを捕捉します。"
      },
      vi: {
        title: "Tại sao TypeScript được coi là một 'superset' của JavaScript, và bước biên dịch chính của nó là gì?",
        body: "Vấn đề quan trọng nào mà TS giải quyết được mà JS thuần túy không thể?",
        solution: "TypeScript là một superset vì **tất cả mã JavaScript hợp lệ cũng là mã TypeScript hợp lệ**. Bước biên dịch chính của nó là **Transpilation** (Chuyển đổi mã), nơi mã TS được biên dịch (chuyển đổi) thành JavaScript thuần túy có thể được thực thi bởi trình duyệt/Node. TS chủ yếu giải quyết vấn đề **An toàn kiểu (Type Safety)** trong quá trình phát triển, bắt các lỗi liên quan đến kiểu không chính xác và giá trị null/undefined trước khi chạy."
      }
    }
  },
  {
    _id: "js-s-005",
    difficulty: "senior",
    tags: ["functional-programming", "immutability", "side-effects"],
    content: {
      en: {
        title: "In Functional Programming (FP), what does 'Purity' mean for a function?",
        body: "What are 'Side Effects' and why does FP discourage them?",
        solution: "**Purity** means a function meets two conditions: 1) It **always returns the same result** when given the same arguments (Determinism). 2) It produces **no observable Side Effects**. **Side Effects** are any interaction with the outside world (mutating global state, I/O operations, modifying arguments/objects). FP discourages them because they make code harder to reason about, test, and parallelize."
      },
      jp: {
        title: "関数型プログラミング（FP）において、関数の「純粋性（Purity）」は何を意味しますか？",
        body: "「副作用（Side Effects）」とは何で、FPがそれを推奨しないのはなぜですか？",
        solution: "**純粋性** とは、関数が2つの条件を満たすことを意味します: 1) 同じ引数が与えられた場合、**常に同じ結果を返す**（決定論）。2) **観測可能な副作用を生成しない**。**副作用** とは、外部との相互作用（グローバルステートの変更、I/O操作、引数/オブジェクトの変更）です。FPがそれを推奨しないのは、コードの推論、テスト、並列化を困難にするからです。"
      },
      vi: {
        title: "Trong Lập trình Hàm (FP), 'Purity' (Tính thuần khiết) có nghĩa là gì đối với một hàm?",
        body: "'Side Effects' (Tác dụng phụ) là gì và tại sao FP không khuyến khích chúng?",
        solution: "**Purity** có nghĩa là một hàm đáp ứng hai điều kiện: 1) Nó **luôn trả về cùng một kết quả** khi được cung cấp cùng một đối số (Tính xác định - Determinism). 2) Nó **không tạo ra bất kỳ Tác dụng phụ** nào có thể quan sát được. **Side Effects** là bất kỳ tương tác nào với thế giới bên ngoài (đột biến trạng thái toàn cục, các thao tác I/O, sửa đổi đối số/đối tượng). FP không khuyến khích chúng vì chúng làm cho mã khó suy luận, kiểm thử và song song hóa hơn."
      }
    }
  },
  {
    _id: "js-s-006",
    difficulty: "senior",
    tags: ["microtask", "macrotask", "event-loop"],
    content: {
      en: {
        title: "Explain the processing order preference between the Microtask Queue and the Macrotask Queue.",
        body: "Give one example of a Macrotask source and one example of a Microtask source.",
        solution: "The **Microtask Queue** (Job Queue) has a **higher priority** than the Macrotask Queue (Task Queue). The Event Loop executes **all available microtasks** after the currently executing script finishes, but before proceeding to the next macrotask or rendering. **Microtask example:** `Promise.then()`, `queueMicrotask()`. **Macrotask example:** `setTimeout()`, `setInterval()`, I/O, DOM events."
      },
      jp: {
        title: "マイクロタスクキューとマクロタスクキュー間の処理順序の優先順位を説明してください。",
        body: "マクロタスクソースの例を1つ、マイクロタスクソースの例を1つ挙げてください。",
        solution: "**マイクロタスクキュー**（ジョブキュー）は、マクロタスクキュー（タスクキュー）よりも **高い優先度** を持ちます。イベントループは、現在実行中のスクリプトが完了した後、次のマクロタスクに進む前またはレンダリングの前に、**利用可能なすべてのマイクロタスク** を実行します。**マイクロタスクの例:** `Promise.then()`、`queueMicrotask()`。**マクロタスクの例:** `setTimeout()`、`setInterval()`、I/O、DOMイベント。"
      },
      vi: {
        title: "Giải thích thứ tự ưu tiên xử lý giữa Microtask Queue và Macrotask Queue.",
        body: "Đưa ra một ví dụ về nguồn Macrotask và một ví dụ về nguồn Microtask.",
        solution: "**Microtask Queue** (Job Queue) có **ưu tiên cao hơn** Macrotask Queue (Task Queue). Event Loop thực thi **tất cả các microtask có sẵn** sau khi tập lệnh hiện tại đang thực thi kết thúc, nhưng trước khi chuyển sang macrotask tiếp theo hoặc render. **Ví dụ Microtask:** `Promise.then()`, `queueMicrotask()`. **Ví dụ Macrotask:** `setTimeout()`, `setInterval()`, I/O, sự kiện DOM."
      }
    }
  },
  {
    _id: "js-s-007",
    difficulty: "senior",
    tags: ["hoisting", "var", "let", "const"],
    content: {
      en: {
        title: "Describe the hoisting behavior of `var` compared to `let`/`const`.",
        body: "Why does `var` result in `undefined` while accessing `let`/`const` before declaration results in an error?",
        solution: "All three are hoisted. **`var`** declarations are hoisted and **initialized to `undefined`** at the top of their function/global scope. **`let`/`const`** declarations are also hoisted to the top of their block scope but are **not initialized**. Accessing them before initialization places them in the **Temporal Dead Zone (TDZ)**, which causes a `ReferenceError`."
      },
      jp: {
        title: "`var` の巻き上げの振る舞いを `let`/`const` と比較して説明してください。",
        body: "`var` が `undefined` になるのに対し、宣言前に `let`/`const` にアクセスするとエラーになるのはなぜですか？",
        solution: "3つすべてが巻き上げられます。**`var`** 宣言は巻き上げられ、関数/グローバルスコープの最上位で **`undefined` に初期化されます**。**`let`/`const`** 宣言もブロックスコープの最上位に巻き上げられますが、**初期化されません**。初期化前にそれらにアクセスすると、それらは **一時的デッドゾーン（TDZ）** に置かれ、`ReferenceError` が発生します。"
      },
      vi: {
        title: "Mô tả hành vi hoisting của `var` so với `let`/`const`.",
        body: "Tại sao `var` trả về `undefined` trong khi truy cập `let`/`const` trước khi khai báo lại gây ra lỗi?",
        solution: "Cả ba đều được hoisting. Khai báo **`var`** được hoisting và **khởi tạo thành `undefined`** ở đầu phạm vi hàm/toàn cục của chúng. Khai báo **`let`/`const`** cũng được hoisting lên đầu phạm vi khối của chúng nhưng **không được khởi tạo**. Truy cập chúng trước khi khởi tạo đặt chúng vào **Temporal Dead Zone (TDZ)**, điều này gây ra `ReferenceError`."
      }
    }
  },
  {
    _id: "js-s-008",
    difficulty: "senior",
    tags: ["promise", "async", "error-handling"],
    content: {
      en: {
        title: "What is an 'unhandled rejection' in the context of Promises, and how can it be detected globally?",
        body: "Provide the global event listener name used for detection in the browser.",
        solution: "An **unhandled rejection** occurs when a Promise is rejected, and there is no `.catch()` or rejection handler chained to it, meaning the error is not explicitly handled. This can lead to silent failures or warnings. In the browser, it can be detected globally using the **`unhandledrejection`** event listener on the `window` object: `window.addEventListener('unhandledrejection', (event) => {...})`."
      },
      jp: {
        title: "Promiseの文脈における「未処理の拒否（unhandled rejection）」とは何ですか、またそれをグローバルに検出するにはどうすればよいですか？",
        body: "ブラウザで検出に使用されるグローバルイベントリスナーの名前を提供してください。",
        solution: "**未処理の拒否** は、Promiseが拒否され、それに `.catch()` や拒否ハンドラがチェーンされていない場合に発生します。これは、エラーが明示的に処理されていないことを意味します。これにより、サイレントな失敗や警告が発生する可能性があります。ブラウザでは、`window` オブジェクトの **`unhandledrejection`** イベントリスナーを使用してグローバルに検出できます: `window.addEventListener('unhandledrejection', (event) => {...})`。"
      },
      vi: {
        title: "Thế nào là một 'unhandled rejection' (từ chối chưa được xử lý) trong ngữ cảnh của Promises, và làm thế nào để phát hiện nó trên toàn cục?",
        body: "Cung cấp tên trình lắng nghe sự kiện toàn cục được sử dụng để phát hiện trong trình duyệt.",
        solution: "Một **unhandled rejection** xảy ra khi một Promise bị từ chối, và không có `.catch()` hoặc trình xử lý từ chối nào được nối với nó, có nghĩa là lỗi không được xử lý rõ ràng. Điều này có thể dẫn đến lỗi hoặc cảnh báo thầm lặng. Trong trình duyệt, nó có thể được phát hiện trên toàn cục bằng cách sử dụng trình lắng nghe sự kiện **`unhandledrejection`** trên đối tượng `window`: `window.addEventListener('unhandledrejection', (event) => {...})`."
      }
    }
  },
  {
    _id: "js-s-009",
    difficulty: "senior",
    tags: ["class", "inheritance", "prototype"],
    content: {
      en: {
        title: "Explain the difference between Classical Inheritance (ES6 `class`/`extends`) and Prototypal Inheritance.",
        body: "Which one is the underlying mechanism in JavaScript?",
        solution: "**Prototypal Inheritance** is the core mechanism where objects inherit properties directly from other objects (their prototype). **Classical Inheritance** (using `class` and `extends`) is a **syntactic sugar** built on top of the Prototypal model. While classes look like traditional OOP structures, the underlying mechanism is still the **Prototype Chain**."
      },
      jp: {
        title: "古典的継承（ES6 `class`/`extends`）とプロトタイプ継承の違いを説明してください。",
        body: "JavaScriptにおける根底にあるメカニズムはどちらですか？",
        solution: "**プロトタイプ継承** は、オブジェクトが他のオブジェクト（そのプロトタイプ）から直接プロパティを継承するコアメカニズムです。**古典的継承**（`class` と `extends` の使用）は、プロトタイプモデルの上に構築された **糖衣構文（syntactic sugar）** です。クラスは伝統的なOOP構造のように見えますが、根底にあるメカニズムは依然として **プロトタイプチェーン** です。"
      },
      vi: {
        title: "Giải thích sự khác biệt giữa Kế thừa Cổ điển (ES6 `class`/`extends`) và Kế thừa Prototype.",
        body: "Cơ chế cơ bản trong JavaScript là gì?",
        solution: "**Kế thừa Prototype** là cơ chế cốt lõi trong đó các đối tượng kế thừa thuộc tính trực tiếp từ các đối tượng khác (prototype của chúng). **Kế thừa Cổ điển** (sử dụng `class` và `extends`) là một **cú pháp đường (syntactic sugar)** được xây dựng dựa trên mô hình Prototype. Mặc dù các lớp trông giống như các cấu trúc OOP truyền thống, cơ chế cơ bản vẫn là **Prototype Chain**."
      }
    }
  },
  {
    _id: "js-s-010",
    difficulty: "senior",
    tags: ["composition", "inheritance", "OOP"],
    content: {
      en: {
        title: "Explain the concept of 'Composition over Inheritance' (CoI).",
        body: "What problem related to traditional class hierarchies does CoI solve?",
        solution: "**Composition over Inheritance** suggests that classes should achieve desired polymorphic behavior and code reuse by being composed of instances of other classes (by using objects and delegating work) rather than by inheriting from them. CoI solves the **Fragile Base Class Problem** and the **tight coupling** and rigidity that often comes with deep, inflexible inheritance hierarchies (the 'gorilla/banana problem')."
      },
      jp: {
        title: "「継承よりもコンポジション（Composition over Inheritance - CoI）」の概念を説明してください。",
        body: "CoIは、従来のクラス階層に関連するどのような問題を解決しますか？",
        solution: "**継承よりもコンポジション** は、クラスが他のクラスのインスタンスで構成されることによって（オブジェクトを使用し、作業を委任することによって）、継承するのではなく、望ましいポリモーフィックな振る舞いとコードの再利用を達成すべきであることを示唆しています。CoIは、**壊れやすい基底クラスの問題** や、深く、柔軟性のない継承階層に伴うことが多い **密結合** と硬直性を解決します（「ゴリラとバナナの問題」）。"
      },
      vi: {
        title: "Giải thích khái niệm 'Composition over Inheritance' (CoI - Kết hợp hơn Kế thừa).",
        body: "CoI giải quyết vấn đề gì liên quan đến hệ thống phân cấp lớp truyền thống?",
        solution: "**Composition over Inheritance** gợi ý rằng các lớp nên đạt được hành vi đa hình và tái sử dụng mã mong muốn bằng cách được kết hợp từ các thể hiện của các lớp khác (bằng cách sử dụng các đối tượng và ủy thác công việc) thay vì kế thừa từ chúng. CoI giải quyết **Vấn đề Lớp Cơ sở Dễ vỡ (Fragile Base Class Problem)** và **sự gắn kết chặt chẽ (tight coupling)** và sự cứng nhắc thường đi kèm với các hệ thống phân cấp kế thừa sâu, không linh hoạt ('vấn đề khỉ và chuối')."
      }
    }
  },
  {
    _id: "js-s-011",
    difficulty: "senior",
    tags: ["optimization", "V8", "JIT"],
    content: {
      en: {
        title: "Briefly explain the role of 'Hidden Classes' (or 'Shape') in the V8 engine.",
        body: "How do they help optimize property access in JavaScript objects?",
        solution: "**Hidden Classes** (also called Maps or Shapes in V8) are internal optimization techniques used by the V8 JavaScript engine to improve property access speed. Instead of using a slow dictionary lookup, V8 creates a hidden class behind the scenes for objects with the same structure. When accessing a property, V8 checks the hidden class to know the memory offset, allowing for **fast, optimized, and monomorphic property lookups**."
      },
      jp: {
        title: "V8エンジンにおける「隠されたクラス（Hidden Classes）」または「形状（Shape）」の役割を簡潔に説明してください。",
        body: "これらはJavaScriptオブジェクトのプロパティアクセスを最適化するのにどのように役立ちますか？",
        solution: "**隠されたクラス**（V8ではMapまたはShapeとも呼ばれます）は、V8 JavaScriptエンジンによって使用される、プロパティアクセス速度を向上させるための内部的な最適化手法です。遅い辞書ルックアップを使用する代わりに、V8は同じ構造を持つオブジェクトのために舞台裏で隠されたクラスを作成します。プロパティにアクセスするとき、V8は隠されたクラスをチェックしてメモリオフセットを知ることができ、**高速で最適化された単一のプロパティルックアップ** を可能にします。"
      },
      vi: {
        title: "Giải thích ngắn gọn vai trò của 'Hidden Classes' (hoặc 'Shape') trong engine V8.",
        body: "Chúng giúp tối ưu hóa việc truy cập thuộc tính trong các đối tượng JavaScript như thế nào?",
        solution: "**Hidden Classes** (còn được gọi là Maps hoặc Shapes trong V8) là các kỹ thuật tối ưu hóa nội bộ được sử dụng bởi engine V8 JavaScript để cải thiện tốc độ truy cập thuộc tính. Thay vì sử dụng tra cứu từ điển chậm, V8 tạo một lớp ẩn đằng sau hậu trường cho các đối tượng có cùng cấu trúc. Khi truy cập một thuộc tính, V8 kiểm tra lớp ẩn để biết độ lệch bộ nhớ, cho phép **tra cứu thuộc tính đơn hình (monomorphic), nhanh chóng và được tối ưu hóa**."
      }
    }
  },
  {
    _id: "js-s-012",
    difficulty: "senior",
    tags: ["data-structure", "immutable", "performance"],
    content: {
      en: {
        title: "What are 'Persistent Data Structures' and why are they important in modern front-end frameworks?",
        body: "How do they relate to object immutability?",
        solution: "**Persistent Data Structures** (PDS) are data structures that, when modified, preserve the previous version of the structure (making them **immutable**). Modifications return a new structure while sharing unchanged parts of the old structure, optimizing memory use. They are crucial in frameworks (like React/Redux) because PDS enable **fast reference equality checks** to determine if a component needs to re-render, significantly boosting performance."
      },
      jp: {
        title: "「永続データ構造（Persistent Data Structures）」とは何で、現代のフロントエンドフレームワークでなぜ重要ですか？",
        body: "それらはオブジェクトの不変性（immutability）とどのように関連していますか？",
        solution: "**永続データ構造（PDS）** は、変更されたときに構造の以前のバージョンを保持するデータ構造です（それらを **不変** にします）。変更は新しい構造を返しますが、古い構造の変更されていない部分を共有し、メモリ使用量を最適化します。PDSは、コンポーネントが再レンダリングする必要があるかどうかを判断するための **高速な参照等価性チェック** を可能にするため、フレームワーク（React/Reduxなど）で非常に重要であり、パフォーマンスを大幅に向上させます。"
      },
      vi: {
        title: "'Persistent Data Structures' (Cấu trúc dữ liệu bền vững) là gì và tại sao chúng quan trọng trong các framework front-end hiện đại?",
        body: "Chúng liên quan đến tính bất biến của đối tượng như thế nào?",
        solution: "**Persistent Data Structures (PDS)** là các cấu trúc dữ liệu mà khi được sửa đổi, vẫn giữ nguyên phiên bản trước đó của cấu trúc (làm cho chúng **bất biến**). Các sửa đổi trả về một cấu trúc mới trong khi chia sẻ các phần không thay đổi của cấu trúc cũ, tối ưu hóa việc sử dụng bộ nhớ. Chúng rất quan trọng trong các framework (như React/Redux) vì PDS cho phép **kiểm tra tính bằng tham chiếu nhanh chóng** để xác định xem một component có cần phải render lại hay không, từ đó tăng hiệu suất đáng kể."
      }
    }
  },
  {
    _id: "js-s-013",
    difficulty: "senior",
    tags: ["observable", "reactive-programming"],
    content: {
      en: {
        title: "Define an 'Observable' in the context of Reactive Programming (e.g., RxJS).",
        body: "How does an Observable differ from a standard Promise?",
        solution: "An **Observable** is a mechanism for handling asynchronous data flows or multiple values over time. It is a 'lazy' Push mechanism. The key difference from a Promise is: **Promises are single-value/single-event**, resolving once and then completing; **Observables can emit zero, one, or multiple values over time** (a stream of events) and can be unsubscribed/canceled."
      },
      jp: {
        title: "リアクティブプログラミング（例：RxJS）の文脈で「Observable」を定義してください。",
        body: "Observableは標準のPromiseとどのように異なりますか？",
        solution: "**Observable** は、非同期データフローまたは時間の経過に伴う複数の値を処理するためのメカニズムです。これは「遅延（lazy）」プッシュメカニズムです。Promiseとの主な違いは次のとおりです: **Promiseは単一の値/単一のイベント** であり、一度解決すると完了します。**Observableは時間の経過とともにゼロ、1つ、または複数の値**（イベントのストリーム）を放出することができ、購読解除/キャンセルが可能です。"
      },
      vi: {
        title: "Định nghĩa 'Observable' trong ngữ cảnh của Lập trình Phản ứng (Reactive Programming, ví dụ: RxJS).",
        body: "Observable khác với một Promise tiêu chuẩn như thế nào?",
        solution: "Một **Observable** là một cơ chế để xử lý các luồng dữ liệu bất đồng bộ hoặc nhiều giá trị theo thời gian. Đó là một cơ chế Push 'lười biếng' (lazy). Sự khác biệt chính so với Promise là: **Promises là giá trị đơn/sự kiện đơn**, giải quyết một lần và sau đó hoàn thành; **Observables có thể phát ra không, một, hoặc nhiều giá trị theo thời gian** (một luồng sự kiện) và có thể hủy đăng ký/hủy bỏ."
      }
    }
  },
  {
    _id: "js-s-014",
    difficulty: "senior",
    tags: ["design-pattern", "factory", "abstract-factory"],
    content: {
      en: {
        title: "Describe the purpose of the 'Factory Method' design pattern.",
        body: "How does it improve upon simple object creation using constructors?",
        solution: "The **Factory Method** pattern provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. Its purpose is to **delegate the responsibility of object instantiation to specialized methods/functions** rather than using the `new` keyword directly. This separates the product creation logic from the client code, making the system more **flexible** and easier to swap out product types."
      },
      jp: {
        title: "「ファクトリメソッド（Factory Method）」デザインパターンの目的を説明してください。",
        body: "これはコンストラクタを使用した単純なオブジェクト作成をどのように改善しますか？",
        solution: "**ファクトリメソッド** パターンは、スーパークラスでオブジェクトを作成するためのインターフェースを提供しますが、サブクラスが作成されるオブジェクトのタイプを変更することを可能にします。その目的は、`new` キーワードを直接使用するのではなく、**オブジェクトのインスタンス化の責任を特殊なメソッド/関数に委譲する** ことです。これにより、製品作成ロジックがクライアントコードから分離され、システムがより **柔軟** になり、製品タイプを交換しやすくなります。"
      },
      vi: {
        title: "Mô tả mục đích của design pattern 'Factory Method'.",
        body: "Nó cải thiện việc tạo đối tượng đơn giản bằng cách sử dụng constructors như thế nào?",
        solution: "Mẫu **Factory Method** cung cấp một giao diện để tạo đối tượng trong một superclass, nhưng cho phép các subclass thay đổi loại đối tượng sẽ được tạo. Mục đích của nó là **ủy thác trách nhiệm khởi tạo đối tượng cho các phương thức/hàm chuyên biệt** thay vì sử dụng trực tiếp từ khóa `new`. Điều này tách biệt logic tạo sản phẩm khỏi mã máy khách (client code), làm cho hệ thống trở nên **linh hoạt** hơn và dễ dàng thay thế các loại sản phẩm hơn."
      }
    }
  },
  {
    _id: "js-s-015",
    difficulty: "senior",
    tags: ["closure", "function", "performance"],
    content: {
      en: {
        title: "How can excessive use of Closures negatively impact performance?",
        body: "Explain the resource that might be overused.",
        solution: "Excessive use of closures, particularly those created within loops or constructors, can negatively impact performance by potentially leading to **increased memory consumption**. Each closure maintains a reference to its **outer scope's variables** (its lexical environment), even if the outer function has finished executing. If these closed-over variables are large or numerous, they prevent the garbage collector from freeing that memory, leading to unnecessary memory retention."
      },
      jp: {
        title: "クロージャの過度の使用は、パフォーマンスにどのように悪影響を与える可能性がありますか？",
        body: "過度に使用される可能性のあるリソースを説明してください。",
        solution: "クロージャの過度の使用、特にループ内やコンストラクタ内で作成されたクロージャは、**メモリ消費量の増加** につながる可能性があり、パフォーマンスに悪影響を与える可能性があります。各クロージャは、外側の関数が実行を終了した後でも、**外側のスコープの変数**（そのレキシカル環境）への参照を保持します。これらの閉じ込められた変数が大きいか多数である場合、ガベージコレクターがそのメモリを解放するのを妨げ、不必要なメモリ保持につながります。"
      },
      vi: {
        title: "Việc sử dụng quá mức Closures có thể tác động tiêu cực đến hiệu suất như thế nào?",
        body: "Giải thích tài nguyên có thể bị lạm dụng.",
        solution: "Việc sử dụng quá mức các closures, đặc biệt là những cái được tạo ra trong vòng lặp hoặc hàm tạo, có thể tác động tiêu cực đến hiệu suất bằng cách có khả năng dẫn đến **tăng mức tiêu thụ bộ nhớ**. Mỗi closure duy trì một tham chiếu đến **các biến trong phạm vi bên ngoài** của nó (môi trường từ vựng của nó), ngay cả khi hàm bên ngoài đã thực thi xong. Nếu các biến bị đóng này lớn hoặc nhiều, chúng ngăn bộ thu gom rác giải phóng bộ nhớ đó, dẫn đến việc giữ lại bộ nhớ không cần thiết."
      }
    }
  },
  {
    _id: "js-s-016",
    difficulty: "senior",
    tags: ["symbol", "iteration", "protocol"],
    content: {
      en: {
        title: "How do you make a custom object **Iterable** in JavaScript?",
        body: "What must the custom object implement to comply with the Iterable Protocol?",
        solution: "To make a custom object Iterable, it must implement a method whose key is the well-known Symbol **`Symbol.iterator`**. This method must be a factory that returns an **Iterator object**. The Iterator object must adhere to the Iterator Protocol, which means it must have a **`next()`** method that returns an object with the structure `{ value: any, done: boolean }`."
      },
      jp: {
        title: "JavaScriptでカスタムオブジェクトを **反復可能（Iterable）** にするにはどうすればよいですか？",
        body: "反復可能プロトコルに準拠するために、カスタムオブジェクトが実装しなければならないことは何ですか？",
        solution: "カスタムオブジェクトを反復可能にするには、よく知られたSymbol **`Symbol.iterator`** をキーとするメソッドを実装する必要があります。このメソッドは、**Iteratorオブジェクト** を返すファクトリでなければなりません。Iteratorオブジェクトは、Iteratorプロトコルに準拠している必要があり、これは `{ value: any, done: boolean }` の構造を持つオブジェクトを返す **`next()`** メソッドを持たなければならないことを意味します。"
      },
      vi: {
        title: "Bạn làm thế nào để làm cho một đối tượng tùy chỉnh trở nên **Iterable** (có thể lặp) trong JavaScript?",
        body: "Đối tượng tùy chỉnh phải triển khai cái gì để tuân thủ Giao thức Iterable?",
        solution: "Để làm cho một đối tượng tùy chỉnh trở nên Iterable, nó phải triển khai một phương thức có khóa là Symbol nổi tiếng **`Symbol.iterator`**. Phương thức này phải là một factory trả về một **đối tượng Iterator**. Đối tượng Iterator phải tuân thủ Giao thức Iterator, có nghĩa là nó phải có một phương thức **`next()`** trả về một đối tượng với cấu trúc `{ value: any, done: boolean }`."
      }
    }
  },
  {
    _id: "js-s-017",
    difficulty: "senior",
    tags: ["functional-programming", "composition", "pipe"],
    content: {
      en: {
        title: "Define 'Function Composition' in the context of Functional Programming.",
        body: "How does a `pipe` utility function achieve composition?",
        solution: "**Function Composition** is the process of combining two or more functions to produce a new function where the output of one function is the input of the next. It is often summarized as $f(g(x))$. A **`pipe`** utility function achieves composition by taking a list of functions and applying them sequentially from **left to right** (like a pipe), passing the result of the previous function as the argument to the next."
      },
      jp: {
        title: "関数型プログラミングの文脈で「関数コンポジション（Function Composition）」を定義してください。",
        body: "`pipe` ユーティリティ関数はどのようにコンポジションを達成しますか？",
        solution: "**関数コンポジション** は、2つ以上の関数を組み合わせて、ある関数の出力が次の関数の入力となる新しい関数を生成するプロセスです。これは $f(g(x))$ と要約されることが多いです。**`pipe`** ユーティリティ関数は、関数のリストを受け取り、それらを **左から右に** 順次適用し（パイプのように）、前の関数の結果を次の関数への引数として渡すことによってコンポジションを達成します。"
      },
      vi: {
        title: "Định nghĩa 'Function Composition' (Kết hợp hàm) trong ngữ cảnh Lập trình Hàm.",
        body: "Một hàm tiện ích `pipe` đạt được kết hợp như thế nào?",
        solution: "**Function Composition** là quá trình kết hợp hai hoặc nhiều hàm để tạo ra một hàm mới, trong đó đầu ra của hàm này là đầu vào của hàm tiếp theo. Nó thường được tóm tắt là $f(g(x))$. Một hàm tiện ích **`pipe`** đạt được sự kết hợp bằng cách lấy một danh sách các hàm và áp dụng chúng tuần tự từ **trái sang phải** (như một đường ống), truyền kết quả của hàm trước đó làm đối số cho hàm tiếp theo."
      }
    }
  },
  {
    _id: "js-s-018",
    difficulty: "senior",
    tags: ["polyfill", "transpilation", "ES6+"],
    content: {
      en: {
        title: "What is the key difference between a 'Polyfill' and 'Transpilation' in handling modern JavaScript features?",
        body: "Give an example of a feature that requires a polyfill and one that requires transpilation.",
        solution: "**Transpilation** (e.g., Babel) converts modern JS *syntax* (like Arrow Functions, `const`, `class`) into equivalent older JS syntax that runs everywhere. **Polyfills** (e.g., core-js) add *missing features* (functions, objects, methods) to the environment that the browser does not natively support. **Transpilation example:** Arrow functions to regular functions. **Polyfill example:** `Promise`, `Array.prototype.includes`, `Symbol`."
      },
      jp: {
        title: "現代のJavaScript機能を扱う上で、「Polyfill」と「Transpilation」の主な違いは何ですか？",
        body: "polyfillが必要な機能とトランスパイルが必要な機能の例を1つずつ挙げてください。",
        solution: "**トランスパイル**（例：Babel）は、現代のJSの *構文*（アロー関数、`const`、`class`など）を、どこでも実行できる同等の古いJS構文に変換します。**Polyfill**（例：core-js）は、ブラウザがネイティブにサポートしていない *不足している機能*（関数、オブジェクト、メソッド）を環境に追加します。**トランスパイルの例:** アロー関数を通常の関数へ。**Polyfillの例:** `Promise`、`Array.prototype.includes`、`Symbol`。"
      },
      vi: {
        title: "Sự khác biệt chính giữa 'Polyfill' và 'Transpilation' trong việc xử lý các tính năng JavaScript hiện đại là gì?",
        body: "Đưa ra một ví dụ về tính năng yêu cầu polyfill và một tính năng yêu cầu transpilation.",
        solution: "**Transpilation** (ví dụ: Babel) chuyển đổi *cú pháp* JS hiện đại (như Arrow Functions, `const`, `class`) thành cú pháp JS cũ hơn tương đương có thể chạy ở mọi nơi. **Polyfills** (ví dụ: core-js) thêm *các tính năng bị thiếu* (hàm, đối tượng, phương thức) vào môi trường mà trình duyệt không hỗ trợ nguyên bản. **Ví dụ Transpilation:** Hàm mũi tên thành hàm thông thường. **Ví dụ Polyfill:** `Promise`, `Array.prototype.includes`, `Symbol`."
      }
    }
  },
  {
    _id: "js-s-019",
    difficulty: "senior",
    tags: ["asynchronous", "cancellation", "abort-controller"],
    content: {
      en: {
        title: "How do you implement cancellable asynchronous operations in modern JavaScript (e.g., cancelling a `fetch` request)?",
        body: "What browser API is used for this purpose?",
        solution: "Cancellable asynchronous operations are implemented using the **`AbortController`** and **`AbortSignal`** interface. The `AbortSignal` is passed to the asynchronous operation (e.g., as part of the `fetch` options). Calling the `abort()` method on the `AbortController` instance notifies the signal, which cancels the pending operation. This is a crucial pattern for resource management and preventing race conditions."
      },
      jp: {
        title: "現代のJavaScriptでキャンセル可能な非同期操作（例：`fetch` リクエストのキャンセル）をどのように実装しますか？",
        body: "この目的のために使用されるブラウザAPIは何ですか？",
        solution: "キャンセル可能な非同期操作は、**`AbortController`** および **`AbortSignal`** インターフェースを使用して実装されます。`AbortSignal` は非同期操作に渡されます（例：`fetch` オプションの一部として）。`AbortController` インスタンスで `abort()` メソッドを呼び出すと、シグナルが通知され、保留中の操作がキャンセルされます。これは、リソース管理と競合状態の防止のための重要なパターンです。"
      },
      vi: {
        title: "Bạn triển khai các thao tác bất đồng bộ có thể hủy bỏ trong JavaScript hiện đại như thế nào (ví dụ: hủy một yêu cầu `fetch`)?",
        body: "API trình duyệt nào được sử dụng cho mục đích này?",
        solution: "Các thao tác bất đồng bộ có thể hủy bỏ được triển khai bằng cách sử dụng giao diện **`AbortController`** và **`AbortSignal`**. `AbortSignal` được truyền cho thao tác bất đồng bộ (ví dụ: là một phần của tùy chọn `fetch`). Việc gọi phương thức `abort()` trên thể hiện `AbortController` sẽ thông báo cho tín hiệu, điều này sẽ hủy bỏ thao tác đang chờ xử lý. Đây là một mẫu quan trọng để quản lý tài nguyên và ngăn chặn các điều kiện chạy đua (race conditions)."
      }
    }
  },
  {
    _id: "js-s-020",
    difficulty: "senior",
    tags: ["data-type", "BigInt", "precision"],
    content: {
      en: {
        title: "What problem was the `BigInt` primitive type introduced to solve?",
        body: "What is the maximum safe integer value in JavaScript?",
        solution: "The **`BigInt`** type was introduced to solve the problem of **representing whole numbers larger than $2^{53} - 1$** (or smaller than $-(2^{53} - 1)$), which is the maximum safe integer that can be represented by the standard `Number` type without losing precision. The maximum safe integer value is given by the constant **`Number.MAX_SAFE_INTEGER`**."
      },
      jp: {
        title: "`BigInt` プリミティブ型はどのような問題を解決するために導入されましたか？",
        body: "JavaScriptにおける最大安全整数値は何ですか？",
        solution: "**`BigInt`** 型は、標準の `Number` 型で精度を失うことなく表現できる最大安全整数である $2^{53} - 1$ よりも大きい（または $-(2^{53} - 1)$ よりも小さい）**整数を表す** 問題を解決するために導入されました。最大安全整数値は、定数 **`Number.MAX_SAFE_INTEGER`** によって与えられます。"
      },
      vi: {
        title: "Kiểu nguyên thủy `BigInt` được giới thiệu để giải quyết vấn đề gì?",
        body: "Giá trị số nguyên an toàn tối đa trong JavaScript là gì?",
        solution: "Kiểu **`BigInt`** được giới thiệu để giải quyết vấn đề **biểu diễn các số nguyên lớn hơn $2^{53} - 1$** (hoặc nhỏ hơn $-(2^{53} - 1)$), đây là số nguyên an toàn tối đa có thể được biểu diễn bởi kiểu `Number` tiêu chuẩn mà không mất độ chính xác. Giá trị số nguyên an toàn tối đa được cung cấp bởi hằng số **`Number.MAX_SAFE_INTEGER`**."
      }
    }
  },
  {
    _id: "js-s-021",
    difficulty: "senior",
    tags: ["web-worker", "concurrency", "performance"],
    content: {
      en: {
        title: "How do 'Web Workers' allow JavaScript to achieve true concurrency?",
        body: "What critical resource can a Web Worker NOT directly access?",
        solution: "Web Workers allow JavaScript to achieve true concurrency by running scripts in **separate, background threads**, isolated from the main thread. This allows long-running, CPU-intensive tasks to be performed without blocking the user interface. A Web Worker **cannot directly access the DOM** (Document Object Model) or the global `window` object."
      },
      jp: {
        title: "「Web Worker」は、JavaScriptが真の並行性を達成することをどのように可能にしますか？",
        body: "Web Workerが直接アクセスできない重要なリソースは何ですか？",
        solution: "Web Workerは、メインスレッドから分離された **個別のバックグラウンドスレッド** でスクリプトを実行することにより、JavaScriptが真の並行性を達成することを可能にします。これにより、時間のかかるCPU集約型のタスクをユーザーインターフェースをブロックすることなく実行できます。Web Workerは、**DOM**（Document Object Model）やグローバルな `window` オブジェクトに **直接アクセスできません**。"
      },
      vi: {
        title: "'Web Workers' cho phép JavaScript đạt được tính đồng thời (concurrency) thực sự như thế nào?",
        body: "Tài nguyên quan trọng nào mà Web Worker KHÔNG THỂ truy cập trực tiếp?",
        solution: "Web Workers cho phép JavaScript đạt được tính đồng thời thực sự bằng cách chạy các tập lệnh trong **các luồng (thread) nền riêng biệt**, được cô lập khỏi luồng chính. Điều này cho phép các tác vụ chạy lâu, tốn CPU được thực hiện mà không chặn giao diện người dùng. Một Web Worker **không thể truy cập trực tiếp DOM** (Document Object Model) hoặc đối tượng `window` toàn cục."
      }
    }
  },
  {
    _id: "js-s-022",
    difficulty: "senior",
    tags: ["performance", "mutation-observer", "DOM"],
    content: {
      en: {
        title: "What is a `MutationObserver` used for, and why is it often preferred over older methods?",
        body: "What fundamental DOM operation does it allow you to track?",
        solution: "A **`MutationObserver`** is used to **monitor changes to the DOM tree** (additions, removals, attribute changes, or text content modifications). It is preferred over older methods (like polling or deprecated `Mutation Events`) because it provides an **asynchronous, batched, and non-blocking** mechanism for tracking changes, leading to better performance and fewer reflows."
      },
      jp: {
        title: "`MutationObserver` は何のために使用され、なぜ古いメソッドよりも好まれることが多いのですか？",
        body: "追跡できる基本的なDOM操作は何ですか？",
        solution: "**`MutationObserver`** は、**DOMツリーへの変更** （追加、削除、属性の変更、またはテキストコンテンツの変更）を **監視する** ために使用されます。これは、変更を追跡するための **非同期で、バッチ処理され、非ブロッキングな** メカニズムを提供するため（ポーリングや非推奨の `Mutation Events` などの）古いメソッドよりも好まれ、より良いパフォーマンスと少ないリフローにつながります。"
      },
      vi: {
        title: "`MutationObserver` được sử dụng để làm gì, và tại sao nó thường được ưu tiên hơn các phương thức cũ hơn?",
        body: "Nó cho phép bạn theo dõi thao tác DOM cơ bản nào?",
        solution: "Một **`MutationObserver`** được sử dụng để **giám sát các thay đổi đối với cây DOM** (thêm, xóa, thay đổi thuộc tính, hoặc sửa đổi nội dung văn bản). Nó được ưu tiên hơn các phương thức cũ hơn (như thăm dò - polling hoặc `Mutation Events` đã lỗi thời) vì nó cung cấp một cơ chế **bất đồng bộ, được xử lý theo lô (batched), và không chặn (non-blocking)** để theo dõi các thay đổi, dẫn đến hiệu suất tốt hơn và ít reflow hơn."
      }
    }
  },
  {
    _id: "js-s-023",
    difficulty: "senior",
    tags: ["functional-programming", "immutability"],
    content: {
      en: {
        title: "How do you achieve deep immutability for a complex object structure in JavaScript?",
        body: "Why are simple methods like `Object.freeze()` insufficient for deep immutability?",
        solution: "Deep immutability is achieved by **recursively traversing the object/array structure and freezing every nested object or array** encountered. Simple methods like `Object.freeze()` only enforce **shallow immutability**; they prevent changes to the direct properties of the object but do not freeze the objects referenced by those properties, allowing nested data to still be mutated."
      },
      jp: {
        title: "JavaScriptで複雑なオブジェクト構造に対して深い不変性（deep immutability）をどのように達成しますか？",
        body: "なぜ `Object.freeze()` のような単純なメソッドでは深い不変性に不十分なのですか？",
        solution: "深い不変性は、**オブジェクト/配列構造を再帰的にたどり、遭遇したすべてのネストされたオブジェクトまたは配列をフリーズする** ことによって達成されます。`Object.freeze()` のような単純なメソッドは、**浅い不変性（shallow immutability）** のみを強制します。これらはオブジェクトの直接のプロパティへの変更を防ぎますが、それらのプロパティによって参照されるオブジェクトをフリーズしないため、ネストされたデータは依然として変更される可能性があります。"
      },
      vi: {
        title: "Bạn đạt được tính bất biến sâu (deep immutability) cho một cấu trúc đối tượng phức tạp trong JavaScript như thế nào?",
        body: "Tại sao các phương thức đơn giản như `Object.freeze()` không đủ cho tính bất biến sâu?",
        solution: "Tính bất biến sâu được đạt được bằng cách **duyệt đệ quy cấu trúc đối tượng/mảng và đóng băng mọi đối tượng hoặc mảng lồng nhau** gặp phải. Các phương thức đơn giản như `Object.freeze()` chỉ thực thi **tính bất biến nông (shallow immutability)**; chúng ngăn chặn các thay đổi đối với các thuộc tính trực tiếp của đối tượng nhưng không đóng băng các đối tượng được tham chiếu bởi các thuộc tính đó, cho phép dữ liệu lồng nhau vẫn bị đột biến."
      }
    }
  },
  {
    _id: "js-s-024",
    difficulty: "senior",
    tags: ["testing", "unit-testing", "mocking"],
    content: {
      en: {
        title: "In the context of Unit Testing, what is the difference between 'Mocking' and 'Stubbing' a dependency?",
        body: "Which technique is concerned with asserting behavior (what was called)?",
        solution: "**Stubbing** replaces a dependency with code that ensures the test runs correctly (e.g., forcing a specific return value) but does not track interaction. **Mocking** is a complete replacement that **spies on and asserts the behavior** of the dependency (e.g., checks *if* a method was called and *with which arguments*). **Mocking** is concerned with asserting behavior."
      },
      jp: {
        title: "単体テストの文脈で、依存関係の「Mocking」と「Stubbing」の違いは何ですか？",
        body: "どのテクニックが振る舞いの表明（何が呼び出されたか）に関心がありますか？",
        solution: "**Stubbing** は、テストが正しく実行されることを保証するコード（例：特定の戻り値を強制する）で依存関係を置き換えますが、相互作用を追跡しません。**Mocking** は、依存関係の **振る舞いをスパイし、表明する** 完全な置き換えです（例：メソッドが呼び出された *かどうか*、*どの引数で* 呼び出されたかをチェックします）。**Mocking** は振る舞いの表明に関心があります。"
      },
      vi: {
        title: "Trong ngữ cảnh Kiểm thử Đơn vị (Unit Testing), sự khác biệt giữa 'Mocking' và 'Stubbing' một dependency là gì?",
        body: "Kỹ thuật nào quan tâm đến việc xác nhận hành vi (cái gì đã được gọi)?",
        solution: "**Stubbing** thay thế một dependency bằng mã đảm bảo bài kiểm thử chạy đúng (ví dụ: buộc một giá trị trả về cụ thể) nhưng không theo dõi tương tác. **Mocking** là một sự thay thế hoàn chỉnh **theo dõi và xác nhận hành vi** của dependency (ví dụ: kiểm tra *liệu* một phương thức có được gọi hay *không và với đối số nào*). **Mocking** quan tâm đến việc xác nhận hành vi."
      }
    }
  },
  {
    _id: "js-s-025",
    difficulty: "senior",
    tags: ["functional-programming", "monad", "maybe"],
    content: {
      en: {
        title: "What is the primary benefit of using a 'Maybe Functor' (or similar monad/wrapper) for null checking?",
        body: "Give an example of 'null chaining' that the Maybe Monad helps avoid.",
        solution: "The primary benefit is preventing the need for explicit, repetitive `if (value && value.prop)` null/undefined checks. A Maybe Functor allows for **safe function chaining** (often called 'railroad programming'). If the wrapper value is `null`/`undefined`, subsequent chained operations are **short-circuited**, and the null value is passed down without throwing an error. **Example of null chaining:** `user && user.address && user.address.zip`."
      },
      jp: {
        title: "nullチェックに「Maybe Functor」（または同様のモナド/ラッパー）を使用する主な利点は何ですか？",
        body: "Maybe Monadが回避するのに役立つ「null連鎖（null chaining）」の例を挙げてください。",
        solution: "主な利点は、明示的で反復的な `if (value && value.prop)` のnull/undefinedチェックの必要性を防ぐことです。Maybe Functorは **安全な関数連鎖**（しばしば「鉄道プログラミング」と呼ばれる）を可能にします。ラッパー値が `null`/`undefined` の場合、後続の連鎖操作は **短絡され**、エラーをスローすることなくnull値が渡されます。**null連鎖の例:** `user && user.address && user.address.zip`。"
      },
      vi: {
        title: "Lợi ích chính của việc sử dụng 'Maybe Functor' (hoặc monad/wrapper tương tự) để kiểm tra null là gì?",
        body: "Đưa ra một ví dụ về 'null chaining' mà Maybe Monad giúp tránh.",
        solution: "Lợi ích chính là ngăn chặn sự cần thiết của các kiểm tra null/undefined `if (value && value.prop)` lặp đi lặp lại, rõ ràng. Một Maybe Functor cho phép **chuỗi hàm an toàn** (thường được gọi là 'railroad programming'). Nếu giá trị wrapper là `null`/`undefined`, các thao tác được chuỗi tiếp theo sẽ **ngắn mạch (short-circuited)**, và giá trị null được truyền xuống mà không gây ra lỗi. **Ví dụ về null chaining:** `user && user.address && user.address.zip`."
      }
    }
  },
  {
    _id: "js-s-026",
    difficulty: "senior",
    tags: ["promise", "allSettled", "all"],
    content: {
      en: {
        title: "What is the key difference between `Promise.all()` and `Promise.allSettled()`?",
        body: "Which method is useful when you need to know the outcome of every Promise, regardless of failure?",
        solution: "`Promise.all()` **rejects immediately** if *any* of the Promises in the iterable rejects. `Promise.allSettled()` **never rejects**; it waits until *all* Promises in the iterable are either fulfilled or rejected. It resolves to an array of objects, each describing the outcome (`status` and `value` or `reason`). **`Promise.allSettled()`** is useful when you need the outcome of every Promise."
      },
      jp: {
        title: "`Promise.all()` と `Promise.allSettled()` の主な違いは何ですか？",
        body: "失敗に関係なく、すべてのPromiseの結果を知る必要がある場合に役立つメソッドはどちらですか？",
        solution: "`Promise.all()` は、iterable内のPromiseの *いずれか* が拒否された場合、**直ちに拒否します**。`Promise.allSettled()` は **決して拒否しません**。iterable内の *すべて* のPromiseが履行されるか拒否されるまで待ちます。これは、それぞれ結果（`status` と `value` または `reason`）を記述するオブジェクトの配列に解決されます。**`Promise.allSettled()`** は、すべてのPromiseの結果を知る必要がある場合に役立ちます。"
      },
      vi: {
        title: "Sự khác biệt chính giữa `Promise.all()` và `Promise.allSettled()` là gì?",
        body: "Phương thức nào hữu ích khi bạn cần biết kết quả của mọi Promise, bất kể thất bại?",
        solution: "`Promise.all()` **từ chối ngay lập tức** nếu *bất kỳ* Promise nào trong iterable bị từ chối. `Promise.allSettled()` **không bao giờ từ chối**; nó đợi cho đến khi *tất cả* các Promise trong iterable được hoàn thành hoặc bị từ chối. Nó giải quyết thành một mảng các đối tượng, mỗi đối tượng mô tả kết quả (`status` và `value` hoặc `reason`). **`Promise.allSettled()`** hữu ích khi bạn cần biết kết quả của mọi Promise."
      }
    }
  },
  {
    _id: "js-s-027",
    difficulty: "senior",
    tags: ["design-pattern", "observer", "pub-sub"],
    content: {
      en: {
        title: "Describe the 'Observer' design pattern.",
        body: "How does it manage dependencies between objects?",
        solution: "The **Observer Pattern** defines a one-to-many dependency between objects. When one object (the **Subject** or Observable) changes state, all its dependents (the **Observers** or Subscribers) are notified and updated automatically. This pattern promotes **loose coupling** because the subject only needs to know that a list of observers exists, not the concrete implementation details of each observer."
      },
      jp: {
        title: "「Observer」デザインパターンを説明してください。",
        body: "これはオブジェクト間の依存関係をどのように管理しますか？",
        solution: "**Observerパターン** は、オブジェクト間の1対多の依存関係を定義します。あるオブジェクト（**Subject** または Observable）が状態を変更すると、そのすべての依存物（**Observer** または Subscriber）が自動的に通知され、更新されます。このパターンは、SubjectがObserverのリストが存在することだけを知っていればよく、各Observerの具体的な実装の詳細を知る必要がないため、**疎結合** を促進します。"
      },
      vi: {
        title: "Mô tả design pattern 'Observer'.",
        body: "Nó quản lý sự phụ thuộc giữa các đối tượng như thế nào?",
        solution: "**Observer Pattern** định nghĩa mối quan hệ phụ thuộc một-nhiều giữa các đối tượng. Khi một đối tượng (Subject hoặc Observable) thay đổi trạng thái, tất cả các đối tượng phụ thuộc của nó (Observers hoặc Subscribers) đều được thông báo và cập nhật tự động. Pattern này thúc đẩy **sự ghép nối lỏng lẻo (loose coupling)** vì subject chỉ cần biết rằng một danh sách các observer tồn tại, chứ không cần biết chi tiết triển khai cụ thể của từng observer."
      }
    }
  },
  {
    _id: "js-s-028",
    difficulty: "senior",
    tags: ["OOP", "design", "solid"],
    content: {
      en: {
        title: "Explain the 'Liskov Substitution Principle' (LSP) from the SOLID principles.",
        body: "How does failing to follow LSP typically manifest in code?",
        solution: "The **Liskov Substitution Principle** states that if $S$ is a subtype of $T$, then objects of type $T$ should be replaceable with objects of type $S$ without altering the correctness of the program. In simpler terms, a child class (subclass) must be able to be substituted for its parent class without breaking the application. Failure to follow LSP often manifests as a subclass having to **throw an exception** or **do nothing** when a parent method is called, because the subclass cannot fulfill the parent's contract."
      },
      jp: {
        title: "SOLID原則の「Liskov Substitution Principle（LSP）」を説明してください。",
        body: "LSPに従わないことは、通常コードでどのように現れますか？",
        solution: "**Liskov Substitution Principle** は、もし $S$ が $T$ のサブタイプであるならば、$T$ 型のオブジェクトは、プログラムの正確性を変えることなく $S$ 型のオブジェクトに置き換えることができるべきであると述べています。簡単に言えば、子クラス（サブクラス）は、アプリケーションを壊すことなく、その親クラスの代わりに使用できる必要があります。LSPに従わないことは、通常、子クラスが親メソッドが呼び出されたときに **例外をスローする** か **何もしない** 必要があるという形で現れます。なぜなら、子クラスが親の契約を満たせないからです。"
      },
      vi: {
        title: "Giải thích 'Liskov Substitution Principle' (LSP - Nguyên tắc Thay thế Liskov) từ các nguyên tắc SOLID.",
        body: "Việc không tuân theo LSP thường biểu hiện trong mã như thế nào?",
        solution: "**Liskov Substitution Principle** phát biểu rằng nếu $S$ là một subtype của $T$, thì các đối tượng thuộc kiểu $T$ phải có thể thay thế bằng các đối tượng thuộc kiểu $S$ mà không làm thay đổi tính đúng đắn của chương trình. Nói một cách đơn giản hơn, một lớp con (subclass) phải có khả năng thay thế cho lớp cha của nó mà không làm hỏng ứng dụng. Việc không tuân theo LSP thường biểu hiện dưới dạng một lớp con phải **ném ra một ngoại lệ** hoặc **không làm gì** khi một phương thức của lớp cha được gọi, bởi vì lớp con không thể thực hiện hợp đồng của lớp cha."
      }
    }
  },
  {
    _id: "js-s-029",
    difficulty: "senior",
    tags: ["module", "circular-dependency", "bundler"],
    content: {
      en: {
        title: "What is a 'Circular Dependency' in module systems, and what are the potential issues?",
        body: "How do ES Modules typically handle circular dependencies to avoid deadlocks?",
        solution: "A **Circular Dependency** occurs when Module A depends on Module B, and Module B, in turn, depends on Module A, creating a closed loop. Potential issues include **unexpected `undefined` values** at initialization (due to early access) or infinite loops in code execution. ES Modules handle circular dependencies by performing **live bindings** (exporting references, not values), which allows modules to access values after they have been fully initialized, avoiding the CommonJS deadlock issue."
      },
      jp: {
        title: "モジュールシステムにおける「循環依存性（Circular Dependency）」とは何で、潜在的な問題は何ですか？",
        body: "ESモジュールはデッドロックを回避するために、循環依存性を通常どのように処理しますか？",
        solution: "**循環依存性** は、モジュールAがモジュールBに依存し、モジュールBがモジュールAに依存している場合に発生し、閉じたループを作成します。潜在的な問題には、初期化時の **予期せぬ `undefined` 値**（早期アクセスによる）や、コード実行における無限ループが含まれます。ESモジュールは、**ライブバインディング** を実行することにより（値ではなく参照をエクスポートする）、循環依存性を処理し、モジュールが完全に初期化された後に値にアクセスできるようにして、CommonJSのデッドロックの問題を回避します。"
      },
      vi: {
        title: "'Circular Dependency' (Phụ thuộc vòng tròn) trong hệ thống module là gì, và các vấn đề tiềm ẩn là gì?",
        body: "ES Modules thường xử lý các phụ thuộc vòng tròn như thế nào để tránh deadlock?",
        solution: "Một **Circular Dependency** xảy ra khi Module A phụ thuộc vào Module B, và Module B, đến lượt nó, lại phụ thuộc vào Module A, tạo thành một vòng lặp kín. Các vấn đề tiềm ẩn bao gồm **các giá trị `undefined` không mong muốn** khi khởi tạo (do truy cập sớm) hoặc các vòng lặp vô hạn trong thực thi mã. ES Modules xử lý các phụ thuộc vòng tròn bằng cách thực hiện **ràng buộc trực tiếp (live bindings)** (xuất tham chiếu chứ không phải giá trị), điều này cho phép các module truy cập các giá trị sau khi chúng đã được khởi tạo hoàn toàn, tránh vấn đề deadlock của CommonJS."
      }
    }
  },
  {
    _id: "js-s-030",
    difficulty: "senior",
    tags: ["event-loop", "rendering", "requestAnimationFrame"],
    content: {
      en: {
        title: "When animating the DOM, why is `requestAnimationFrame()` preferred over `setTimeout()` or `setInterval()`?",
        body: "How does it synchronize with the browser's rendering cycle?",
        solution: "`requestAnimationFrame()` (rAF) is preferred because it **synchronizes the callback execution with the browser's refresh rate** (typically 60 times per second), ensuring animations are smooth and prevent 'jank'. It also **pauses execution in background tabs**, saving battery/CPU. `setTimeout()`/`setInterval()` are macrotasks that can execute during or after a frame render, potentially causing visual tearing or inconsistent timing."
      },
      jp: {
        title: "DOMをアニメーション化する際、なぜ `requestAnimationFrame()` が `setTimeout()` や `setInterval()` よりも好まれるのですか？",
        body: "ブラウザのレンダリングサイクルとどのように同期しますか？",
        solution: "`requestAnimationFrame()` (rAF) が好まれるのは、**ブラウザのリフレッシュレート（通常1秒間に60回）とコールバックの実行を同期** し、アニメーションがスムーズで「ジャーク（jank）」を防ぐことを保証するからです。また、**バックグラウンドタブでの実行を一時停止** し、バッテリー/CPUを節約します。`setTimeout()`/`setInterval()` は、フレームのレンダリング中または後に実行される可能性のあるマクロタスクであり、視覚的なティアリングや一貫性のないタイミングを引き起こす可能性があります。"
      },
      vi: {
        title: "Khi tạo hoạt ảnh (animating) DOM, tại sao `requestAnimationFrame()` được ưu tiên hơn `setTimeout()` hoặc `setInterval()`?",
        body: "Nó đồng bộ hóa với chu kỳ render của trình duyệt như thế nào?",
        solution: "`requestAnimationFrame()` (rAF) được ưu tiên vì nó **đồng bộ hóa việc thực thi callback với tốc độ làm mới của trình duyệt** (thường là 60 lần mỗi giây), đảm bảo các hoạt ảnh mượt mà và ngăn chặn 'jank'. Nó cũng **tạm dừng việc thực thi trong các tab nền**, tiết kiệm pin/CPU. `setTimeout()`/`setInterval()` là các macrotask có thể thực thi trong hoặc sau khi render một khung hình, có khả năng gây ra rách hình ảnh (visual tearing) hoặc thời gian không nhất quán."
      }
    }
  },
  {
    _id: "js-s-031",
    difficulty: "senior",
    tags: ["typescript", "interface", "type"],
    content: {
      en: {
        title: "In TypeScript, what is the primary structural difference and intended use case between an `interface` and a `type` alias?",
        body: "Which one supports 'declaration merging' (reopening a definition)?",
        solution: "The primary difference is that **`interface`** declarations are used to describe the shape of objects and can be **extended** and automatically support **Declaration Merging** (meaning you can define the same interface multiple times, and TS will merge them). **`type`** aliases can also describe objects but are generally used for defining aliases for complex types, unions, intersections, and mapped types. **`interface`** supports declaration merging."
      },
      jp: {
        title: "TypeScriptにおいて、`interface` と `type` エイリアスの主な構造上の違いと意図された使用例は何ですか？",
        body: "どちらが「宣言のマージ（declaration merging）」をサポートしていますか（定義の再オープン）？",
        solution: "主な違いは、**`interface`** 宣言はオブジェクトの形状を記述するために使用され、**拡張** することができ、**宣言のマージ** を自動的にサポートします（つまり、同じインターフェースを複数回定義でき、TSはそれらをマージします）。**`type`** エイリアスもオブジェクトを記述できますが、一般的に複雑な型、ユニオン、インターセクション、およびマップされた型のエイリアスを定義するために使用されます。**`interface`** が宣言のマージをサポートしています。"
      },
      vi: {
        title: "Trong TypeScript, sự khác biệt cấu trúc chính và trường hợp sử dụng dự định giữa `interface` và `type` alias là gì?",
        body: "Cái nào hỗ trợ 'declaration merging' (hợp nhất khai báo - mở lại một định nghĩa)?",
        solution: "Sự khác biệt chính là khai báo **`interface`** được sử dụng để mô tả hình dạng của các đối tượng và có thể được **mở rộng** và tự động hỗ trợ **Declaration Merging** (có nghĩa là bạn có thể định nghĩa cùng một interface nhiều lần, và TS sẽ hợp nhất chúng). Bí danh **`type`** cũng có thể mô tả các đối tượng nhưng thường được sử dụng để định nghĩa các bí danh cho các kiểu phức tạp, union, intersection và mapped types. **`interface`** hỗ trợ hợp nhất khai báo."
      }
    }
  },
  {
    _id: "js-s-032",
    difficulty: "senior",
    tags: ["functional-programming", "memoization", "caching"],
    content: {
      en: {
        title: "What is 'Memoization' and how is it used to optimize pure functions?",
        body: "What critical requirement must a function meet for effective memoization?",
        solution: "**Memoization** is an optimization technique used to **cache the results of expensive function calls** and return the cached result when the same inputs occur again. It is highly effective for **pure functions** (functions without side effects). The critical requirement is that the function must be **deterministic**; that is, it must **always return the same output for the same input**."
      },
      jp: {
        title: "「Memoization（メモ化）」とは何で、純粋関数を最適化するためにどのように使用されますか？",
        body: "効果的なメモ化のために、関数が満たさなければならない重要な要件は何ですか？",
        solution: "**メモ化** は、**コストのかかる関数呼び出しの結果をキャッシュ** し、同じ入力が再度発生したときにキャッシュされた結果を返すために使用される最適化手法です。これは **純粋関数**（副作用のない関数）に非常に効果的です。重要な要件は、関数が **決定的** でなければならないということです。つまり、**常に同じ入力に対して同じ出力を返さなければならない** ということです。"
      },
      vi: {
        title: "'Memoization' (Ghi nhớ) là gì và nó được sử dụng để tối ưu hóa các hàm thuần khiết (pure functions) như thế nào?",
        body: "Yêu cầu quan trọng nào mà một hàm phải đáp ứng để memoization hiệu quả?",
        solution: "**Memoization** là một kỹ thuật tối ưu hóa được sử dụng để **lưu vào bộ nhớ cache kết quả của các lời gọi hàm tốn kém** và trả về kết quả đã được cache khi cùng một đầu vào xảy ra lần nữa. Nó rất hiệu quả cho **các hàm thuần khiết (pure functions)** (các hàm không có tác dụng phụ). Yêu cầu quan trọng là hàm phải **có tính xác định (deterministic)**; nghĩa là, nó phải **luôn trả về cùng một đầu ra cho cùng một đầu vào**."
      }
    }
  },
  {
    _id: "js-s-033",
    difficulty: "senior",
    tags: ["async", "promise", "generator"],
    content: {
      en: {
        title: "In modern JS, how is the `async/await` syntax conceptually related to Generators?",
        body: "Which older utility/library technique was conceptually replaced by `async/await`?",
        solution: "`async/await` is essentially **syntactic sugar** built upon Promises and Generators. An `async` function is structurally similar to a Generator function, with `await` acting like `yield`, pausing execution and yielding control until a Promise resolves. This structure **conceptually replaced** the older pattern of using a Generator runner like the **`co` library** or similar hand-written flow-control utilities."
      },
      jp: {
        title: "現代のJSにおいて、`async/await` 構文は概念的にGeneratorとどのように関連していますか？",
        body: "どの古いユーティリティ/ライブラリ技術が `async/await` によって概念的に置き換えられましたか？",
        solution: "`async/await` は、本質的にPromiseとGeneratorの上に構築された **糖衣構文（syntactic sugar）** です。`async` 関数は構造的にGenerator関数に似ており、`await` は `yield` のように機能し、Promiseが解決するまで実行を一時停止し、制御を譲ります。この構造は、**`co` ライブラリ** のようなGeneratorランナーや同様の手書きのフロー制御ユーティリティを使用する古いパターンを **概念的に置き換えました**。"
      },
      vi: {
        title: "Trong JS hiện đại, cú pháp `async/await` có mối liên hệ khái niệm với Generators như thế nào?",
        body: "Kỹ thuật tiện ích/thư viện cũ nào đã được `async/await` thay thế về mặt khái niệm?",
        solution: "`async/await` về cơ bản là **cú pháp đường (syntactic sugar)** được xây dựng dựa trên Promises và Generators. Một hàm `async` có cấu trúc tương tự như một hàm Generator, với `await` hoạt động giống như `yield`, tạm dừng việc thực thi và nhường quyền điều khiển cho đến khi một Promise giải quyết. Cấu trúc này **về mặt khái niệm đã thay thế** mẫu cũ hơn là sử dụng một trình chạy Generator như **thư viện `co`** hoặc các tiện ích kiểm soát luồng tùy chỉnh tương tự."
      }
    }
  },
  {
    _id: "js-s-034",
    difficulty: "senior",
    tags: ["performance", "optimization", "DOM"],
    content: {
      en: {
        title: "When making multiple sequential DOM updates, what technique should be used to minimize costly Reflows and Repaints?",
        body: "What is the term for this optimization technique?",
        solution: "The technique is called **Batching DOM Operations** (or **DOM Fragmenting**). Instead of applying multiple style or structure changes sequentially, the element is **removed from the live DOM tree**, all changes are made while it is detached (e.g., appended to a `DocumentFragment`), and then the final, modified element is **re-inserted into the live DOM**. This ensures only a single Reflow and Repaint occurs."
      },
      jp: {
        title: "複数の連続的なDOM更新を行う際、コストのかかるReflowとRepaintを最小限に抑えるためにどのようなテクニックを使用すべきですか？",
        body: "この最適化テクニックの用語は何ですか？",
        solution: "このテクニックは、**DOM操作のバッチ処理**（または **DOMフラグメント化**）と呼ばれます。複数のスタイルまたは構造の変更を順番に適用する代わりに、要素は **ライブDOMツリーから削除され**、それがデタッチされている間にすべての変更が行われ（例：`DocumentFragment` に追加される）、そして最終的に変更された要素が **ライブDOMに再挿入されます**。これにより、単一のReflowとRepaintのみが発生することが保証されます。"
      },
      vi: {
        title: "Khi thực hiện nhiều cập nhật DOM tuần tự, nên sử dụng kỹ thuật nào để giảm thiểu Reflows và Repaints tốn kém?",
        body: "Thuật ngữ cho kỹ thuật tối ưu hóa này là gì?",
        solution: "Kỹ thuật này được gọi là **Batching DOM Operations** (Xử lý theo lô các Thao tác DOM) (hoặc **DOM Fragmenting** - Phân mảnh DOM). Thay vì áp dụng nhiều thay đổi về kiểu hoặc cấu trúc một cách tuần tự, phần tử được **loại bỏ khỏi cây DOM trực tiếp**, tất cả các thay đổi được thực hiện trong khi nó bị tách rời (ví dụ: được thêm vào một `DocumentFragment`), và sau đó phần tử đã được sửa đổi cuối cùng được **chèn lại vào DOM trực tiếp**. Điều này đảm bảo chỉ xảy ra một lần Reflow và Repaint duy nhất."
      }
    }
  },
  {
    _id: "js-s-035",
    difficulty: "senior",
    tags: ["type-coercion", "equality", "abstract-comparison"],
    content: {
      en: {
        title: "Explain the coercion rules that make `[] == ![]` evaluate to `true`.",
        body: "List the steps of Abstract Equality Comparison that lead to this result.",
        solution: "1. **Logical NOT:** `![]` coerces `[]` (truthy) to `false`. The comparison becomes `[] == false`. 2. **To Number:** The boolean `false` is converted to the number `0`. The comparison becomes `[] == 0`. 3. **To Primitive:** The array `[]` is converted to a primitive via `toString()`, resulting in an empty string `''`. The comparison becomes `'' == 0`. 4. **To Number (Again):** The empty string `''` is converted to the number `0`. The final comparison is `0 == 0`, which is **`true`**."
      },
      jp: {
        title: "`[] == ![]` が `true` と評価される原因となる強制（coercion）ルールを説明してください。",
        body: "この結果につながる抽象的等価比較（Abstract Equality Comparison）のステップをリストアップしてください。",
        solution: "1. **論理NOT:** `![]` は `[]`（truthy）を `false` に強制します。比較は `[] == false` になります。2. **To Number:** 真偽値 `false` は数値 `0` に変換されます。比較は `[] == 0` になります。3. **To Primitive:** 配列 `[]` は `toString()` を介してプリミティブに変換され、空の文字列 `''` になります。比較は `'' == 0` になります。4. **To Number（再び）:** 空の文字列 `''` は数値 `0` に変換されます。最終的な比較は `0 == 0` であり、これは **`true`** です。"
      },
      vi: {
        title: "Giải thích các quy tắc ép kiểu (coercion rules) khiến `[] == ![]` đánh giá thành `true`.",
        body: "Liệt kê các bước của So sánh Bằng Trừu tượng (Abstract Equality Comparison) dẫn đến kết quả này.",
        solution: "1. **Logical NOT:** `![]` ép kiểu `[]` (truthy) thành `false`. Phép so sánh trở thành `[] == false`. 2. **To Number:** Giá trị boolean `false` được chuyển đổi thành số `0`. Phép so sánh trở thành `[] == 0`. 3. **To Primitive:** Mảng `[]` được chuyển đổi thành kiểu nguyên thủy thông qua `toString()`, dẫn đến chuỗi rỗng `''`. Phép so sánh trở thành `'' == 0`. 4. **To Number (Lần nữa):** Chuỗi rỗng `''` được chuyển đổi thành số `0`. Phép so sánh cuối cùng là `0 == 0`, kết quả là **`true`**."
      }
    }
  },
  {
    _id: "js-s-036",
    difficulty: "senior",
    tags: ["typescript", "utility-type", "pick", "omit"],
    content: {
      en: {
        title: "In TypeScript, what is the purpose of the built-in Utility Types `Pick<T, K>` and `Omit<T, K>`?",
        body: "What is the primary difference in how they modify type `T`?",
        solution: "**`Pick<T, K>`** constructs a type by **selecting only the set of properties `K`** from type `T`. **`Omit<T, K>`** constructs a type by **removing the set of properties `K`** from type `T`. The primary difference is that `Pick` uses an **inclusion list** of properties to keep, while `Omit` uses an **exclusion list** of properties to discard."
      },
      jp: {
        title: "TypeScriptにおいて、組み込みのUtility Typeである `Pick<T, K>` と `Omit<T, K>` の目的は何ですか？",
        body: "型 `T` を変更する方法における主な違いは何ですか？",
        solution: "**`Pick<T, K>`** は、型 `T` から **プロパティ `K` のセットのみを選択** することによって型を構築します。**`Omit<T, K>`** は、型 `T` から **プロパティ `K` のセットを削除** することによって型を構築します。主な違いは、`Pick` が保持するプロパティの **包含リスト** を使用するのに対し、`Omit` は破棄するプロパティの **除外リスト** を使用することです。"
      },
      vi: {
        title: "Trong TypeScript, mục đích của các Utility Type tích hợp sẵn `Pick<T, K>` và `Omit<T, K>` là gì?",
        body: "Sự khác biệt chính trong cách chúng sửa đổi kiểu `T` là gì?",
        solution: "**`Pick<T, K>`** xây dựng một kiểu bằng cách **chỉ chọn tập hợp các thuộc tính `K`** từ kiểu `T`. **`Omit<T, K>`** xây dựng một kiểu bằng cách **loại bỏ tập hợp các thuộc tính `K`** khỏi kiểu `T`. Sự khác biệt chính là `Pick` sử dụng **danh sách bao gồm** các thuộc tính để giữ lại, trong khi `Omit` sử dụng **danh sách loại trừ** các thuộc tính để loại bỏ."
      }
    }
  },
  {
    _id: "js-s-037",
    difficulty: "senior",
    tags: ["web-worker", "communication", "serialization"],
    content: {
      en: {
        title: "How does communication happen between the main thread and a Web Worker?",
        body: "What critical limitation related to data passing must developers be aware of?",
        solution: "Communication is done via the **`postMessage()`** method, which sends data from one thread to the other, and the corresponding **`onmessage`** event handler receives the data. The critical limitation is that data passed between the two threads is **copied (serialized/deserialized)**, not shared. For large data (like ArrayBuffers), the **`Transferable`** interface can be used to **transfer ownership** to avoid the costly copy operation."
      },
      jp: {
        title: "メインスレッドとWeb Worker間の通信はどのように行われますか？",
        body: "データ受け渡しに関連して、開発者が認識しておくべき重要な制限は何ですか？",
        solution: "通信は、**`postMessage()`** メソッドを介して行われ、データが一方のスレッドからもう一方に送信され、対応する **`onmessage`** イベントハンドラがデータを受信します。重要な制限は、2つのスレッド間で渡されるデータは共有されるのではなく、**コピーされる**（シリアル化/逆シリアル化される）ことです。大きなデータ（ArrayBuffersなど）の場合、コストのかかるコピー操作を避けるために、**`Transferable`** インターフェースを使用して **所有権を転送** することができます。"
      },
      vi: {
        title: "Giao tiếp giữa luồng chính và Web Worker xảy ra như thế nào?",
        body: "Hạn chế quan trọng nào liên quan đến việc truyền dữ liệu mà nhà phát triển phải nhận thức được?",
        solution: "Giao tiếp được thực hiện thông qua phương thức **`postMessage()`**, gửi dữ liệu từ luồng này sang luồng khác, và trình xử lý sự kiện **`onmessage`** tương ứng nhận dữ liệu. Hạn chế quan trọng là dữ liệu được truyền giữa hai luồng là **được sao chép (serialized/deserialized)**, chứ không được chia sẻ. Đối với dữ liệu lớn (như ArrayBuffers), giao diện **`Transferable`** có thể được sử dụng để **chuyển quyền sở hữu** nhằm tránh thao tác sao chép tốn kém."
      }
    }
  },
  {
    _id: "js-s-038",
    difficulty: "senior",
    tags: ["data-structure", "map", "Object"],
    content: {
      en: {
        title: "In what scenario would you choose a `Map` over a plain JavaScript object for key-value storage?",
        body: "List two distinct advantages of Map over Object for this scenario.",
        solution: "You would choose a `Map` when you need to use **non-string primitive values (like numbers, booleans, or even objects/functions)** as keys, or when key insertion order matters. Two advantages: 1) **Keys can be any type**, while Object keys are implicitly coerced to strings/Symbols. 2) The **iteration order** of a Map is guaranteed to be the insertion order."
      },
      jp: {
        title: "キーと値のストレージとして、通常のJavaScriptオブジェクトではなく `Map` を選択するのはどのようなシナリオですか？",
        body: "このシナリオにおけるObjectに対するMapの2つの明確な利点を挙げてください。",
        solution: "キーとして **非文字列のプリミティブ値（数値、真偽値、あるいはオブジェクト/関数など）** を使用する必要がある場合、またはキーの挿入順序が重要な場合に `Map` を選択します。2つの利点: 1) Objectのキーは暗黙的に文字列/Symbolに強制されますが、**キーは任意の型にすることができます**。2) Mapの **反復順序** は挿入順序であることが保証されます。"
      },
      vi: {
        title: "Trong trường hợp nào bạn sẽ chọn `Map` thay vì một đối tượng JavaScript thuần túy để lưu trữ khóa-giá trị?",
        body: "Liệt kê hai lợi thế riêng biệt của Map so với Object trong trường hợp này.",
        solution: "Bạn sẽ chọn `Map` khi bạn cần sử dụng **các giá trị nguyên thủy không phải chuỗi (như số, boolean, hoặc thậm chí đối tượng/hàm)** làm khóa, hoặc khi thứ tự chèn khóa quan trọng. Hai lợi thế: 1) **Khóa có thể là bất kỳ kiểu nào**, trong khi khóa Object được ngầm ép kiểu thành chuỗi/Symbol. 2) **Thứ tự lặp** của Map được đảm bảo là thứ tự chèn."
      }
    }
  },
  {
    _id: "js-s-039",
    difficulty: "senior",
    tags: ["error-handling", "promise", "finally"],
    content: {
      en: {
        title: "A Promise chain has a `.then()` followed by a `.catch()` and then a `.finally()`. If the `.catch()` handler throws a new error, what happens to the subsequent `.finally()` block?",
        body: "Does the `.finally()` execute, and is the new error propagated?",
        solution: "The `.finally()` block **will still execute**. The code within `.finally()` is always executed, regardless of whether the preceding Promise chain resolved or rejected. However, the **new error thrown by the `.catch()` will be propagated** down the chain, effectively overriding the rejection/resolution state that existed before the `.catch()`."
      },
      jp: {
        title: "Promiseチェーンには、`.then()`、`.catch()`、そして `.finally()` が続いています。`.catch()` ハンドラが新しいエラーをスローした場合、後続の `.finally()` ブロックはどうなりますか？",
        body: "`.finally()` は実行されますか、また新しいエラーは伝播されますか？",
        solution: "`.finally()` ブロックは **依然として実行されます**。`.finally()` 内のコードは、先行するPromiseチェーンが解決されたか拒否されたかに関係なく、常に実行されます。ただし、`.catch()` によってスローされた **新しいエラーはチェーンを伝播** し、`.catch()` の前に存在した拒否/解決状態を効果的に上書きします。"
      },
      vi: {
        title: "Một chuỗi Promise có `.then()` theo sau là `.catch()` và sau đó là `.finally()`. Nếu trình xử lý `.catch()` ném ra một lỗi mới, điều gì sẽ xảy ra với khối `.finally()` tiếp theo?",
        body: "Khối `.finally()` có thực thi không, và lỗi mới có được lan truyền không?",
        solution: "Khối `.finally()` **vẫn sẽ thực thi**. Mã bên trong `.finally()` luôn được thực thi, bất kể chuỗi Promise trước đó đã giải quyết hay bị từ chối. Tuy nhiên, **lỗi mới được ném bởi `.catch()` sẽ được lan truyền** xuống chuỗi, ghi đè hiệu quả lên trạng thái từ chối/giải quyết đã tồn tại trước `.catch()`."
      }
    }
  },
  {
    _id: "js-s-040",
    difficulty: "senior",
    tags: ["functional-programming", "transducer", "performance"],
    content: {
      en: {
        title: "What is a 'Transducer' in Functional Programming, and what problem does it solve?",
        body: "How does a transducer relate to array methods like `map` and `filter`?",
        solution: "A **Transducer** is a concept for **composable algorithmic transformations** that decouples the transformation logic from the context (the input collection). It solves the problem of **intermediate collection creation** when chaining array methods (like `array.map().filter().map()`). A transducer allows these multiple transformations to be applied in a **single pass** over the input data, eliminating temporary arrays and greatly improving performance."
      },
      jp: {
        title: "関数型プログラミングにおける「Transducer」とは何で、どのような問題を解決しますか？",
        body: "Transducerは、`map` や `filter` のような配列メソッドとどのように関連していますか？",
        solution: "**Transducer** は、**合成可能なアルゴリズム的変換** の概念であり、変換ロジックをコンテキスト（入力コレクション）から切り離します。これは、配列メソッドを連鎖させるとき（例：`array.map().filter().map()`）の **中間コレクション作成** の問題を解決します。Transducerを使用すると、これら複数の変換を **1回のパス** で入力データに適用でき、一時的な配列を排除し、パフォーマンスを大幅に向上させます。"
      },
      vi: {
        title: "'Transducer' trong Lập trình Hàm là gì, và nó giải quyết vấn đề gì?",
        body: "Transducer liên quan đến các phương thức mảng như `map` và `filter` như thế nào?",
        solution: "Một **Transducer** là một khái niệm về **các phép biến đổi thuật toán có thể kết hợp** (composable algorithmic transformations) tách rời logic biến đổi khỏi ngữ cảnh (tập hợp đầu vào). Nó giải quyết vấn đề **tạo tập hợp trung gian** khi nối chuỗi các phương thức mảng (như `array.map().filter().map()`). Một transducer cho phép các phép biến đổi đa dạng này được áp dụng trong **một lần duyệt duy nhất** trên dữ liệu đầu vào, loại bỏ các mảng tạm thời và cải thiện đáng kể hiệu suất."
      }
    }
  },
  {
    _id: "js-s-041",
    difficulty: "senior",
    tags: ["decorators", "typescript", "OOP"],
    content: {
      en: {
        title: "What is the primary use case for 'Decorators' in modern JavaScript/TypeScript?",
        body: "What is a Decorator, and what kind of target can it modify?",
        solution: "A **Decorator** is a special kind of declaration that can be **attached to a class, method, accessor, property, or parameter** to modify or extend its behavior at design time. The primary use case is **Meta-programming** and **Annotation** (e.g., in frameworks like Angular or NestJS), allowing you to add cross-cutting concerns (like logging, authentication, or dependency injection metadata) declaratively without modifying the original code."
      },
      jp: {
        title: "現代のJavaScript/TypeScriptにおける「Decorator（デコレーター）」の主な使用例は何ですか？",
        body: "Decoratorとは何で、どのような種類のターゲットを変更できますか？",
        solution: "**Decorator** は、**クラス、メソッド、アクセサ、プロパティ、またはパラメータ** にアタッチして、設計時にその動作を変更または拡張できる特別な種類の宣言です。主な使用例は、**メタプログラミング** と **アノテーション** （例：AngularやNestJSなどのフレームワーク）であり、元のコードを変更することなく、横断的関心事（ロギング、認証、依存性注入メタデータなど）を宣言的に追加することを可能にします。"
      },
      vi: {
        title: "Trường hợp sử dụng chính của 'Decorators' trong JavaScript/TypeScript hiện đại là gì?",
        body: "Decorator là gì, và nó có thể sửa đổi loại mục tiêu nào?",
        solution: "Một **Decorator** là một loại khai báo đặc biệt có thể được **đính kèm vào một class, method, accessor, property, hoặc parameter** để sửa đổi hoặc mở rộng hành vi của nó tại thời điểm thiết kế. Trường hợp sử dụng chính là **Meta-programming** và **Annotation** (ví dụ: trong các framework như Angular hoặc NestJS), cho phép bạn thêm các mối quan tâm cắt ngang (cross-cutting concerns) (như ghi nhật ký, xác thực, hoặc metadata tiêm phụ thuộc) một cách khai báo mà không cần sửa đổi mã gốc."
      }
    }
  },
  {
    _id: "js-s-042",
    difficulty: "senior",
    tags: ["web-security", "xss", "sanitization"],
    content: {
      en: {
        title: "What is 'Sanitization' in the context of web development, and how does it prevent Cross-Site Scripting (XSS)?",
        body: "Which DOM property is safe for injecting raw HTML, and which one is unsafe?",
        solution: "**Sanitization** is the process of inspecting and cleaning user-provided input/HTML, removing potentially malicious elements (like `<script>`) or dangerous attributes (like `onerror`). It prevents XSS by ensuring that only safe, structure-preserving HTML is ever rendered. **Unsafe (requires sanitization):** `element.innerHTML = userInput`. **Safe (used for text only):** `element.textContent = userInput`."
      },
      jp: {
        title: "ウェブ開発の文脈における「サニタイゼーション（Sanitization）」とは何で、どのようにCross-Site Scripting (XSS) を防ぎますか？",
        body: "生のHTMLを挿入するのに安全なDOMプロパティはどれで、安全でないのはどれですか？",
        solution: "**サニタイゼーション** は、ユーザーから提供された入力/HTMLを検査およびクリーンアップし、潜在的に悪意のある要素（`<script>` など）や危険な属性（`onerror` など）を削除するプロセスです。これは、安全で構造を保持するHTMLのみがレンダリングされることを保証することにより、XSSを防ぎます。**安全でない（サニタイゼーションが必要）:** `element.innerHTML = userInput`。**安全な（テキストのみに使用）:** `element.textContent = userInput`。"
      },
      vi: {
        title: "'Sanitization' (Vệ sinh hóa) trong ngữ cảnh phát triển web là gì, và nó ngăn chặn Cross-Site Scripting (XSS) như thế nào?",
        body: "Thuộc tính DOM nào là an toàn để chèn HTML thô, và thuộc tính nào là không an toàn?",
        solution: "**Sanitization** là quá trình kiểm tra và làm sạch đầu vào/HTML do người dùng cung cấp, loại bỏ các phần tử có khả năng độc hại (như `<script>`) hoặc các thuộc tính nguy hiểm (như `onerror`). Nó ngăn chặn XSS bằng cách đảm bảo rằng chỉ HTML an toàn, bảo tồn cấu trúc mới được render. **Không an toàn (cần vệ sinh hóa):** `element.innerHTML = userInput`. **An toàn (chỉ dùng cho văn bản):** `element.textContent = userInput`."
      }
    }
  },
  {
    _id: "js-s-043",
    difficulty: "senior",
    tags: ["design-pattern", "provider", "dependency-injection"],
    content: {
      en: {
        title: "What is 'Dependency Injection' (DI) and what is the primary benefit in large-scale applications?",
        body: "What design pattern is typically used to implement DI?",
        solution: "**Dependency Injection (DI)** is a software design pattern where the components (dependencies) a module needs are supplied externally rather than being created internally by the module itself. The primary benefit is **loose coupling** between components, which makes the code more modular, maintainable, and significantly easier to **test** (by injecting mocks/stubs). The **Factory** or **Provider** pattern is typically used to implement DI."
      },
      jp: {
        title: "「Dependency Injection（DI、依存性注入）」とは何で、大規模なアプリケーションにおける主な利点は何ですか？",
        body: "DIを実装するために通常使用されるデザインパターンは何ですか？",
        solution: "**Dependency Injection（DI）** は、モジュールが必要とするコンポーネント（依存関係）が、モジュール自体によって内部的に作成されるのではなく、外部から提供されるソフトウェアデザインパターンです。主な利点は、コンポーネント間の **疎結合** であり、これによりコードがよりモジュール化され、保守しやすくなり、**テスト** が（モック/スタブを注入することで）著しく容易になります。**Factory** または **Provider** パターンが通常DIを実装するために使用されます。"
      },
      vi: {
        title: "'Dependency Injection' (DI - Tiêm phụ thuộc) là gì và lợi ích chính trong các ứng dụng quy mô lớn là gì?",
        body: "Design pattern nào thường được sử dụng để triển khai DI?",
        solution: "**Dependency Injection (DI)** là một design pattern phần mềm, trong đó các thành phần (phụ thuộc) mà một module cần được cung cấp từ bên ngoài thay vì được module đó tự tạo ra bên trong. Lợi ích chính là **sự ghép nối lỏng lẻo** giữa các thành phần, điều này làm cho mã trở nên module hóa hơn, dễ bảo trì hơn và dễ **kiểm thử** hơn đáng kể (bằng cách tiêm các mocks/stubs). Mẫu **Factory** hoặc **Provider** thường được sử dụng để triển khai DI."
      }
    }
  },
  {
    _id: "js-s-044",
    difficulty: "senior",
    tags: ["async", "promise", "timeout"],
    content: {
      en: {
        title: "How would you create a 'Race with Timeout' scenario using Promises, where a Promise should reject if it doesn't resolve within a time limit?",
        body: "What Promise method is used in conjunction with a `setTimeout` wrapped Promise?",
        solution: "A Race with Timeout is achieved using **`Promise.race()`**. You pass an array containing the original Promise and a 'timeout' Promise. The timeout Promise is constructed to reject after a specific time delay using `setTimeout`. If the timeout Promise resolves first, the entire `Promise.race()` rejects with the timeout error."
      },
      jp: {
        title: "Promiseを使用して「タイムアウト付きの競合（Race with Timeout）」シナリオをどのように作成しますか？これは、Promiseが制限時間内に解決しない場合に拒否されるべきです。",
        body: "`setTimeout` でラップされたPromiseと組み合わせて使用されるPromiseメソッドは何ですか？",
        solution: "タイムアウト付きの競合は **`Promise.race()`** を使用して達成されます。元のPromiseと「タイムアウト」Promiseを含む配列を渡します。タイムアウトPromiseは、`setTimeout` を使用して特定の時間遅延後に拒否するように構築されます。タイムアウトPromiseが最初に解決した場合、`Promise.race()` 全体がタイムアウトエラーで拒否されます。"
      },
      vi: {
        title: "Bạn tạo ra một kịch bản 'Race with Timeout' (Chạy đua với Thời gian chờ) bằng cách sử dụng Promises như thế nào, trong đó một Promise nên bị từ chối nếu nó không giải quyết trong giới hạn thời gian?",
        body: "Phương thức Promise nào được sử dụng cùng với một Promise được gói `setTimeout`?",
        solution: "Một Race with Timeout được đạt được bằng cách sử dụng **`Promise.race()`**. Bạn truyền một mảng chứa Promise gốc và một Promise 'timeout'. Promise timeout được xây dựng để từ chối sau một khoảng thời gian trễ cụ thể bằng cách sử dụng `setTimeout`. Nếu Promise timeout giải quyết trước, toàn bộ `Promise.race()` sẽ bị từ chối với lỗi timeout."
      }
    }
  },
  {
    _id: "js-s-045",
    difficulty: "senior",
    tags: ["web-security", "cors", "preflight"],
    content: {
      en: {
        title: "What is CORS (Cross-Origin Resource Sharing) and why is the 'Preflight Request' sometimes necessary?",
        body: "Which HTTP method is typically used for a preflight request?",
        solution: "**CORS** is a browser security mechanism that restricts resources from being requested from a different origin than the one serving the current web page. A **Preflight Request** is a separate, preliminary HTTP request that the browser sends *before* the actual request when the request is 'non-simple' (e.g., using a custom header, a method other than `GET`/`POST`/`HEAD`, or a non-standard content type). The server must approve the actual request via the preflight. The HTTP method used for a preflight request is **`OPTIONS`**."
      },
      jp: {
        title: "CORS（Cross-Origin Resource Sharing）とは何で、「Preflight Request（プリフライトリクエスト）」が時々必要になるのはなぜですか？",
        body: "プリフライトリクエストに通常使用されるHTTPメソッドは何ですか？",
        solution: "**CORS** は、現在のWebページを提供しているオリジンとは異なるオリジンからリソースがリクエストされるのを制限するブラウザのセキュリティメカニズムです。**Preflight Request** は、リクエストが「非シンプル」な場合（例：カスタムヘッダーの使用、`GET`/`POST`/`HEAD` 以外のメソッド、または非標準のコンテンツタイプ）に、ブラウザが実際のリクエストの *前に* 送信する個別の予備的なHTTPリクエストです。サーバーはプリフライトを介して実際のリクエストを承認する必要があります。プリフライトリクエストに使用されるHTTPメソッドは **`OPTIONS`** です。"
      },
      vi: {
        title: "CORS (Cross-Origin Resource Sharing) là gì và tại sao 'Preflight Request' (Yêu cầu kiểm tra trước) đôi khi là cần thiết?",
        body: "Phương thức HTTP nào thường được sử dụng cho yêu cầu kiểm tra trước?",
        solution: "**CORS** là một cơ chế bảo mật của trình duyệt hạn chế tài nguyên được yêu cầu từ một nguồn gốc khác với nguồn gốc đang phục vụ trang web hiện tại. Một **Preflight Request** là một yêu cầu HTTP sơ bộ, riêng biệt mà trình duyệt gửi *trước* yêu cầu thực tế khi yêu cầu là 'không đơn giản' (ví dụ: sử dụng tiêu đề tùy chỉnh, một phương thức khác ngoài `GET`/`POST`/`HEAD`, hoặc kiểu nội dung không chuẩn). Máy chủ phải phê duyệt yêu cầu thực tế thông qua yêu cầu kiểm tra trước. Phương thức HTTP được sử dụng cho yêu cầu kiểm tra trước là **`OPTIONS`**."
      }
    }
  },
  {
    _id: "js-s-046",
    difficulty: "senior",
    tags: ["data-structure", "array", "sparse"],
    content: {
      en: {
        title: "What is a 'Sparse Array' in JavaScript, and what are the implications for performance?",
        body: "How do JavaScript engines handle sparse arrays differently from dense arrays?",
        solution: "A **Sparse Array** is an array where the elements do not have contiguous indices, meaning there are gaps (empty slots) in the index sequence (e.g., `const arr = [10]; arr[100] = 5;`). JS engines handle dense arrays using highly optimized, contiguous memory blocks. Sparse arrays often require a **dictionary or hash map** to store the elements, which makes indexed access **slower** and less predictable than with dense arrays."
      },
      jp: {
        title: "JavaScriptにおける「疎配列（Sparse Array）」とは何で、パフォーマンスへの影響は何ですか？",
        body: "JavaScriptエンジンは、密配列と疎配列をどのように異なる方法で処理しますか？",
        solution: "**疎配列** は、要素が連続したインデックスを持たず、インデックスシーケンスにギャップ（空のスロット）がある配列です（例：`const arr = [10]; arr[100] = 5;`）。JSエンジンは、高度に最適化された連続したメモリブロックを使用して密配列を処理します。疎配列は、要素を格納するために **辞書またはハッシュマップ** を必要とすることが多く、これによりインデックスアクセスが密配列よりも **遅く**、予測不可能になります。"
      },
      vi: {
        title: "'Sparse Array' (Mảng thưa) trong JavaScript là gì, và ý nghĩa đối với hiệu suất là gì?",
        body: "Các engine JavaScript xử lý mảng thưa khác với mảng dày đặc (dense arrays) như thế nào?",
        solution: "Một **Sparse Array** là một mảng trong đó các phần tử không có chỉ mục liên tục, nghĩa là có các khoảng trống (các vị trí trống) trong chuỗi chỉ mục (ví dụ: `const arr = [10]; arr[100] = 5;`). Các engine JS xử lý mảng dày đặc bằng cách sử dụng các khối bộ nhớ liên tục, được tối ưu hóa cao. Các mảng thưa thường yêu cầu một **từ điển hoặc bản đồ băm (hash map)** để lưu trữ các phần tử, điều này làm cho việc truy cập theo chỉ mục **chậm hơn** và ít dự đoán được hơn so với các mảng dày đặc."
      }
    }
  },
  {
    _id: "js-s-047",
    difficulty: "senior",
    tags: ["design-pattern", "command", "undo"],
    content: {
      en: {
        title: "Describe the 'Command' design pattern and its common benefit.",
        body: "What critical feature related to user actions does the Command pattern enable?",
        solution: "The **Command Pattern** is a behavioral pattern that **turns a request into a stand-alone object** (the 'Command'), which contains all information about the request. This allows for parameterizing clients with different requests, queuing requests, or logging the requests. The critical feature it enables is the ability to **implement undo/redo functionality** by storing a history of command objects and reversing their execution."
      },
      jp: {
        title: "「Command（コマンド）」デザインパターンを説明し、その一般的な利点を説明してください。",
        body: "Commandパターンが有効にする、ユーザーアクションに関連する重要な機能は何ですか？",
        solution: "**Commandパターン** は、リクエストに関するすべての情報を含む **リクエストをスタンドアロンのオブジェクト**（「コマンド」）に変換する振る舞いパターンです。これにより、クライアントを異なるリクエストでパラメーター化したり、リクエストをキューに入れたり、リクエストをログに記録したりすることができます。それが有効にする重要な機能は、コマンドオブジェクトの履歴を格納し、それらの実行を元に戻すことによる **元に戻す/やり直し機能（undo/redo functionality）の実装** です。"
      },
      vi: {
        title: "Mô tả design pattern 'Command' và lợi ích phổ biến của nó.",
        body: "Tính năng quan trọng nào liên quan đến hành động của người dùng mà Command pattern kích hoạt?",
        solution: "**Command Pattern** là một mẫu hành vi biến **một yêu cầu thành một đối tượng độc lập** ('Command'), chứa tất cả thông tin về yêu cầu đó. Điều này cho phép tham số hóa client với các yêu cầu khác nhau, xếp hàng các yêu cầu, hoặc ghi nhật ký các yêu cầu. Tính năng quan trọng mà nó kích hoạt là khả năng **triển khai chức năng hoàn tác/làm lại (undo/redo functionality)** bằng cách lưu trữ lịch sử các đối tượng command và đảo ngược việc thực thi của chúng."
      }
    }
  },
  {
    _id: "js-s-048",
    difficulty: "senior",
    tags: ["prototype", "Object.freeze", "security"],
    content: {
      en: {
        title: "Explain the vulnerability known as 'Prototype Pollution'.",
        body: "What specific, inherited property is commonly targeted in this attack?",
        solution: "**Prototype Pollution** is a vulnerability where an attacker injects properties into an application's **`Object.prototype`** (or other fundamental prototypes). Since nearly all JavaScript objects inherit from `Object.prototype`, this injection allows the attacker to control the default values or behavior of application-wide properties, potentially leading to Remote Code Execution or denial-of-service. The property most commonly targeted is `__proto__`."
      },
      jp: {
        title: "「プロトタイプ汚染（Prototype Pollution）」として知られる脆弱性を説明してください。",
        body: "この攻撃で一般的に標的にされる特定の継承されたプロパティは何ですか？",
        solution: "**プロトタイプ汚染** は、攻撃者がアプリケーションの **`Object.prototype`** （または他の基本的なプロトタイプ）にプロパティを注入する脆弱性です。ほぼすべてのJavaScriptオブジェクトが `Object.prototype` から継承するため、この注入により、攻撃者はアプリケーション全体のプロパティのデフォルト値や動作を制御できるようになり、リモートコード実行やサービス拒否につながる可能性があります。最も一般的に標的にされるプロパティは `__proto__` です。"
      },
      vi: {
        title: "Giải thích lỗ hổng được gọi là 'Prototype Pollution' (Ô nhiễm Prototype).",
        body: "Thuộc tính kế thừa cụ thể nào thường được nhắm mục tiêu trong cuộc tấn công này?",
        solution: "**Prototype Pollution** là một lỗ hổng trong đó kẻ tấn công tiêm các thuộc tính vào **`Object.prototype`** (hoặc các prototype cơ bản khác) của ứng dụng. Vì gần như tất cả các đối tượng JavaScript đều kế thừa từ `Object.prototype`, nên việc tiêm này cho phép kẻ tấn công kiểm soát các giá trị mặc định hoặc hành vi của các thuộc tính trên toàn ứng dụng, có khả năng dẫn đến Thực thi Mã Từ xa (Remote Code Execution) hoặc từ chối dịch vụ. Thuộc tính thường bị nhắm mục tiêu nhất là `__proto__`."
      }
    }
  },
  {
    _id: "js-s-049",
    difficulty: "senior",
    tags: ["optimization", "V8", "try-catch"],
    content: {
      en: {
        title: "How does the V8 engine's optimization compiler (TurboFan) handle functions containing a `try...catch` block?",
        body: "What is the common performance implication of placing a `try...catch` inside a loop?",
        solution: "Functions containing `try...catch` blocks are often harder for V8's optimizing compiler to optimize fully. V8 must deoptimize or disable certain optimizations for the parts of the code inside the `try` block, particularly if exceptions are thrown. Placing a `try...catch` inside a loop is often an anti-pattern because it can **prevent the entire function from being optimized** (in older V8 versions) or repeatedly trigger the expensive mechanism required to handle exceptions, leading to significant performance degradation."
      },
      jp: {
        title: "V8エンジンの最適化コンパイラ（TurboFan）は、`try...catch` ブロックを含む関数をどのように処理しますか？",
        body: "ループ内に `try...catch` を配置することの一般的なパフォーマンスへの影響は何ですか？",
        solution: "`try...catch` ブロックを含む関数は、V8の最適化コンパイラにとって完全に最適化することが難しいことが多いです。V8は、`try` ブロック内のコードの部分について、特に例外がスローされた場合に、特定の最適化を非最適化または無効化する必要があります。ループ内に `try...catch` を配置することは、**関数全体が最適化されるのを防ぐ** （古いV8バージョンで）か、例外を処理するために必要なコストのかかるメカニズムを繰り返しトリガーする可能性があるため、アンチパターンであることが多く、重大なパフォーマンス低下につながります。"
      },
      vi: {
        title: "Trình biên dịch tối ưu hóa của engine V8 (TurboFan) xử lý các hàm chứa khối `try...catch` như thế nào?",
        body: "Ý nghĩa hiệu suất phổ biến của việc đặt một `try...catch` bên trong một vòng lặp là gì?",
        solution: "Các hàm chứa khối `try...catch` thường khó để trình biên dịch tối ưu hóa của V8 tối ưu hóa hoàn toàn. V8 phải hủy tối ưu hóa hoặc vô hiệu hóa một số tối ưu hóa nhất định cho các phần mã bên trong khối `try`, đặc biệt nếu các ngoại lệ được ném ra. Việc đặt một `try...catch` bên trong một vòng lặp thường là một anti-pattern vì nó có thể **ngăn chặn toàn bộ hàm được tối ưu hóa** (trong các phiên bản V8 cũ hơn) hoặc lặp đi lặp lại kích hoạt cơ chế đắt tiền cần thiết để xử lý các ngoại lệ, dẫn đến suy giảm hiệu suất đáng kể."
      }
    }
  },
  {
    _id: "js-s-050",
    difficulty: "senior",
    tags: ["symbol", "meta-programming", "tostringtag"],
    content: {
      en: {
        title: "What is the purpose of the built-in `Symbol.toStringTag`?",
        body: "What is the output of `Object.prototype.toString.call(myObject)` if `myObject` implements this Symbol?",
        solution: "The **`Symbol.toStringTag`** is a well-known Symbol used to customize the string description of an object. It is used to define the value that is returned by the default `Object.prototype.toString()` method. If `myObject` implements this Symbol, the output of `Object.prototype.toString.call(myObject)` will be the string **`[object CustomTag]`** where `CustomTag` is the value of `myObject[Symbol.toStringTag]`."
      },
      jp: {
        title: "組み込みの `Symbol.toStringTag` の目的は何ですか？",
        body: "`myObject` がこのSymbolを実装している場合、`Object.prototype.toString.call(myObject)` の出力は何ですか？",
        solution: "**`Symbol.toStringTag`** は、オブジェクトの文字列記述をカスタマイズするために使用されるよく知られたSymbolです。これは、デフォルトの `Object.prototype.toString()` メソッドによって返される値を定義するために使用されます。`myObject` がこのSymbolを実装している場合、`Object.prototype.toString.call(myObject)` の出力は、`CustomTag` が `myObject[Symbol.toStringTag]` の値である **`[object CustomTag]`** という文字列になります。"
      },
      vi: {
        title: "Mục đích của `Symbol.toStringTag` tích hợp sẵn là gì?",
        body: "Đầu ra của `Object.prototype.toString.call(myObject)` là gì nếu `myObject` triển khai Symbol này?",
        solution: "**`Symbol.toStringTag`** là một Symbol nổi tiếng được sử dụng để tùy chỉnh mô tả chuỗi của một đối tượng. Nó được sử dụng để định nghĩa giá trị được trả về bởi phương thức `Object.prototype.toString()` mặc định. Nếu `myObject` triển khai Symbol này, đầu ra của `Object.prototype.toString.call(myObject)` sẽ là chuỗi **`[object CustomTag]`** trong đó `CustomTag` là giá trị của `myObject[Symbol.toStringTag]`."
      }
    }
  }
];