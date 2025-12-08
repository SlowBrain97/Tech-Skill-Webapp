export const jsFresherQuestions = [
  {
    _id: "js-f-001",
    difficulty: "fresher",
    tags: ["variable", "declaration", "scope", "var"],
    content: {
      en: {
        title: "What is the primary difference between `var`, `let`, and `const`?",
        body: "Explain the main differences regarding scope and hoisting.",
        solution: "`var` is function-scoped and hoisted. `let` and `const` are block-scoped and also hoisted, but you cannot access them before declaration (Temporal Dead Zone). `const` variables must be initialized and cannot be reassigned."
      },
      jp: {
        title: "`var`、`let`、および `const` の主な違いは何ですか？",
        body: "スコープとホイスティングに関する主な違いを説明してください。",
        solution: "`var` は関数スコープでホイスティングされます。`let` と `const` はブロックスコープでホイスティングされますが、宣言前にアクセスすることはできません（一時的デッドゾーン）。`const` 変数は初期化が必要で、再代入できません。"
      },
      vi: {
        title: "Sự khác biệt cơ bản giữa `var`, `let` và `const` là gì?",
        body: "Giải thích sự khác biệt chính về scope (phạm vi) và hoisting.",
        solution: "`var` có phạm vi (scope) là hàm và được hoisting (kéo lên). `let` và `const` có phạm vi là khối (block-scoped) và cũng được hoisting, nhưng không thể truy cập trước khi khai báo (Temporal Dead Zone). Biến `const` phải được khởi tạo và không thể gán lại giá trị."
      }
    }
  },
  {
    _id: "js-f-002",
    difficulty: "fresher",
    tags: ["data-type", "primitive"],
    content: {
      en: {
        title: "List the 7 primitive data types in JavaScript.",
        body: "What are the fundamental, non-object data types in JS?",
        solution: "The 7 primitive types are: **string**, **number**, **bigint**, **boolean**, **undefined**, **symbol**, and **null**."
      },
      jp: {
        title: "JavaScriptの7つのプリミティブデータ型を挙げてください。",
        body: "JSにおける基本的でオブジェクトではないデータ型は何ですか？",
        solution: "7つのプリミティブ型は、**string**、**number**、**bigint**、**boolean**、**undefined**、**symbol**、および **null** です。"
      },
      vi: {
        title: "Liệt kê 7 kiểu dữ liệu nguyên thủy (primitive) trong JavaScript.",
        body: "Các kiểu dữ liệu cơ bản, không phải đối tượng (non-object) trong JS là gì?",
        solution: "7 kiểu dữ liệu nguyên thủy là: **string**, **number**, **bigint**, **boolean**, **undefined**, **symbol**, và **null**."
      }
    }
  },
  {
    _id: "js-f-003",
    difficulty: "fresher",
    tags: ["typeof", "null"],
    content: {
      en: {
        title: "What is the result of `typeof null`?",
        body: "Describe the historical reason for this result.",
        solution: "The result is **'object'**. This is a well-known historical bug in JavaScript that was never fixed for compatibility reasons. `null` should conceptually be a primitive value."
      },
      jp: {
        title: "`typeof null` の結果は何ですか？",
        body: "この結果の歴史的な理由を説明してください。",
        solution: "結果は **'object'** です。これはJavaScriptのよく知られた歴史的なバグであり、互換性の理由から修正されていません。`null` は概念的にはプリミティブ値であるべきです。"
      },
      vi: {
        title: "Kết quả của `typeof null` là gì?",
        body: "Mô tả lý do lịch sử dẫn đến kết quả này.",
        solution: "Kết quả là **'object'**. Đây là một lỗi (bug) lịch sử nổi tiếng trong JavaScript và không bao giờ được sửa để đảm bảo tính tương thích (compatibility). Về mặt khái niệm, `null` là một giá trị nguyên thủy."
      }
    }
  },
  {
    _id: "js-f-004",
    difficulty: "fresher",
    tags: ["hoisting", "var"],
    content: {
      en: {
        title: "What is 'Hoisting' in JavaScript?",
        body: "Briefly define the mechanism of Hoisting.",
        solution: "**Hoisting** is JavaScript's mechanism where variable and function declarations are moved to the top of their scope during the compilation phase, before code execution. Only the *declaration* is hoisted, not the *initialization*."
      },
      jp: {
        title: "JavaScriptにおける 'Hoisting' とは何ですか？",
        body: "Hoistingのメカニズムを簡潔に定義してください。",
        solution: "**Hoisting (巻き上げ)** は、JavaScriptのメカニズムで、コード実行前のコンパイル段階で、変数と関数の宣言がそのスコープの先頭に移動することです。*宣言* のみが巻き上げられ、*初期化* は巻き上げられません。"
      },
      vi: {
        title: "'Hoisting' trong JavaScript là gì?",
        body: "Định nghĩa ngắn gọn về cơ chế Hoisting.",
        solution: "**Hoisting (Kéo lên)** là cơ chế của JavaScript trong đó các khai báo biến và hàm được đưa lên đầu phạm vi (scope) của chúng trong giai đoạn biên dịch, trước khi code được thực thi. Chỉ có **khai báo** (declaration) được kéo lên, không phải **khởi tạo** (initialization)."
      }
    }
  },
  {
    _id: "js-f-005",
    difficulty: "fresher",
    tags: ["comparison", "equality", "double-equals"],
    content: {
      en: {
        title: "What is the difference between `==` and `===`?",
        body: "Explain how each operator handles type coercion.",
        solution: "`==` (Loose Equality) checks if the values are equal after performing **type coercion** (converting types). `===` (Strict Equality) checks if the values are equal **without** type coercion, meaning both the value and the type must be the same. Generally, `===` is recommended."
      },
      jp: {
        title: "`==` と `===` の違いは何ですか？",
        body: "各演算子が型強制をどのように処理するかを説明してください。",
        solution: "`==` (緩い等価性) は、**型強制** (型の変換) を実行した後で値が等しいかどうかをチェックします。`===` (厳密な等価性) は、型強制 **なし** で値が等しいかどうかをチェックします。つまり、値と型の両方が同じでなければなりません。一般的に `===` が推奨されます。"
      },
      vi: {
        title: "Sự khác biệt giữa `==` và `===` là gì?",
        body: "Giải thích cách mỗi toán tử xử lý type coercion (ép kiểu).",
        solution: "`==` (So sánh lỏng lẻo) kiểm tra xem các giá trị có bằng nhau sau khi thực hiện **type coercion** (chuyển đổi kiểu dữ liệu) hay không. `===` (So sánh nghiêm ngặt) kiểm tra xem các giá trị có bằng nhau **mà không** ép kiểu hay không, nghĩa là cả giá trị và kiểu dữ liệu phải giống nhau. `===` thường được khuyến nghị sử dụng."
      }
    }
  },
  {
    _id: "js-f-006",
    difficulty: "fresher",
    tags: ["function", "arrow-function"],
    content: {
      en: {
        title: "What is an Arrow Function?",
        body: "Provide a simple definition and a key characteristic.",
        solution: "An **Arrow Function** is a shorter syntax for writing function expressions. A key characteristic is that it **does not** bind its own `this`, `arguments`, `super`, or `new.target`."
      },
      jp: {
        title: "アロー関数とは何ですか？",
        body: "簡単な定義と主要な特徴を提供してください。",
        solution: "**アロー関数** は、関数式を書くためのより短い構文です。主要な特徴は、独自の `this`、`arguments`、`super`、または `new.target` を **バインドしない** ことです。"
      },
      vi: {
        title: "Arrow Function (Hàm Mũi Tên) là gì?",
        body: "Đưa ra định nghĩa đơn giản và một đặc điểm chính.",
        solution: "**Arrow Function** là một cú pháp ngắn hơn để viết các biểu thức hàm (function expression). Một đặc điểm chính là nó **không** ràng buộc (`bind`) `this`, `arguments`, `super`, hoặc `new.target` của riêng nó."
      }
    }
  },
  {
    _id: "js-f-007",
    difficulty: "fresher",
    tags: ["DOM", "browser"],
    content: {
      en: {
        title: "What does DOM stand for?",
        body: "Briefly explain its role in web development.",
        solution: "DOM stands for **Document Object Model**. It is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content."
      },
      jp: {
        title: "DOMは何の略ですか？",
        body: "Web開発におけるその役割を簡単に説明してください。",
        solution: "DOMは **Document Object Model** の略です。これはWebドキュメントのプログラミングインターフェースです。プログラムがドキュメントの構造、スタイル、およびコンテンツを変更できるようにページを表現します。"
      },
      vi: {
        title: "DOM là viết tắt của từ gì?",
        body: "Giải thích ngắn gọn vai trò của nó trong phát triển web.",
        solution: "DOM là viết tắt của **Document Object Model**. Nó là một giao diện lập trình cho các tài liệu web. Nó đại diện cho trang web để các chương trình có thể thay đổi cấu trúc, kiểu dáng và nội dung của tài liệu."
      }
    }
  },
  {
    _id: "js-f-008",
    difficulty: "fresher",
    tags: ["callback", "asynchronous"],
    content: {
      en: {
        title: "What is a 'Callback Function'?",
        body: "Define what a callback function is and when it is typically used.",
        solution: "A **Callback Function** is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. They are commonly used for **asynchronous operations**."
      },
      jp: {
        title: "「コールバック関数」とは何ですか？",
        body: "コールバック関数とは何か、そしてそれが通常いつ使用されるかを定義してください。",
        solution: "**コールバック関数** は、引数として別の関数に渡され、その外側の関数内で呼び出されて何らかのルーチンやアクションを完了する関数です。これらは通常、**非同期操作** に使用されます。"
      },
      vi: {
        title: "'Callback Function' (Hàm gọi lại) là gì?",
        body: "Định nghĩa hàm callback và khi nào nó thường được sử dụng.",
        solution: "**Callback Function** là một hàm được truyền vào một hàm khác như một đối số, sau đó được gọi bên trong hàm ngoài để hoàn thành một quy trình hoặc hành động nào đó. Chúng thường được sử dụng cho **các thao tác bất đồng bộ** (asynchronous operations)."
      }
    }
  },
  {
    _id: "js-f-009",
    difficulty: "fresher",
    tags: ["array", "method", "push"],
    content: {
      en: {
        title: "What does the `.push()` method do on an array?",
        body: "What is the return value of this method?",
        solution: "The `.push()` method **adds one or more elements to the end** of an array and returns the **new length** of the array."
      },
      jp: {
        title: "配列に対する `.push()` メソッドは何をしますか？",
        body: "このメソッドの戻り値は何ですか？",
        solution: "`.push()` メソッドは、配列の **末尾に1つ以上の要素を追加** し、配列の **新しい長さ** を返します。"
      },
      vi: {
        title: "Phương thức `.push()` trên mảng làm gì?",
        body: "Giá trị trả về của phương thức này là gì?",
        solution: "Phương thức `.push()` **thêm một hoặc nhiều phần tử vào cuối** của một mảng và trả về **độ dài mới** của mảng."
      }
    }
  },
  {
    _id: "js-f-010",
    difficulty: "fresher",
    tags: ["array", "method", "immutable"],
    content: {
      en: {
        title: "Is the `.map()` method mutable or immutable?",
        body: "Explain what that means regarding the original array.",
        solution: "The `.map()` method is **immutable**. It creates a **new array** with the results of calling a provided function on every element in the calling array, leaving the original array unchanged."
      },
      jp: {
        title: "`.map()` メソッドはミュータブルですか、それともイミュータブルですか？",
        body: "元の配列に関してそれが何を意味するか説明してください。",
        solution: "`.map()` メソッドは **イミュータブル** です。呼び出し元の配列のすべての要素に対して提供された関数を呼び出した結果を使用して **新しい配列** を作成し、元の配列は変更されません。"
      },
      vi: {
        title: "Phương thức `.map()` là mutable (có thể thay đổi) hay immutable (bất biến)?",
        body: "Giải thích điều đó có ý nghĩa gì đối với mảng gốc.",
        solution: "Phương thức `.map()` là **immutable** (bất biến). Nó tạo ra một **mảng mới** với kết quả của việc gọi một hàm được cung cấp trên mọi phần tử trong mảng gọi, để lại mảng gốc không thay đổi."
      }
    }
  },
  {
    _id: "js-f-011",
    difficulty: "fresher",
    tags: ["loop", "for", "while"],
    content: {
      en: {
        title: "When would you prefer a `while` loop over a `for` loop?",
        body: "Describe a scenario where a `while` loop is more appropriate.",
        solution: "A `while` loop is preferred when the **number of iterations is not known beforehand**. For example, when reading data until an end-of-file marker is reached, or when iterating until a specific condition (like user input validation) is met."
      },
      jp: {
        title: "どのような場合に `for` ループよりも `while` ループを好みますか？",
        body: "`while` ループがより適切であるシナリオを説明してください。",
        solution: "`while` ループは、**反復回数が事前に不明な場合** に好まれます。たとえば、ファイルの終端マーカーに達するまでデータを読み取る場合や、特定の条件（ユーザー入力の検証など）が満たされるまで反復する場合などです。"
      },
      vi: {
        title: "Khi nào bạn nên ưu tiên sử dụng vòng lặp `while` hơn vòng lặp `for`?",
        body: "Mô tả một kịch bản mà vòng lặp `while` phù hợp hơn.",
        solution: "Vòng lặp `while` được ưu tiên khi **số lần lặp không được biết trước**. Ví dụ: khi đọc dữ liệu cho đến khi đạt đến điểm kết thúc (end-of-file) hoặc khi lặp cho đến khi một điều kiện cụ thể (như xác thực đầu vào của người dùng) được đáp ứng."
      }
    }
  },
  {
    _id: "js-f-012",
    difficulty: "fresher",
    tags: ["object", "access", "dot", "bracket"],
    content: {
      en: {
        title: "What is the difference between dot notation (`.`) and bracket notation (`[]`) for object property access?",
        body: "When MUST you use bracket notation?",
        solution: "**Dot notation** requires the property name to be a valid identifier and static (known). **Bracket notation** allows the property name to be a **variable** (dynamic access), or to contain **special characters** (e.g., spaces or hyphens) or numbers, which dot notation cannot handle."
      },
      jp: {
        title: "オブジェクトのプロパティアクセスにおけるドット表記 (`.`) とブラケット表記 (`[]`) の違いは何ですか？",
        body: "ブラケット表記を *必ず* 使用しなければならないのはいつですか？",
        solution: "**ドット表記** は、プロパティ名が有効な識別子であり静的（既知）であることを必要とします。**ブラケット表記** は、プロパティ名が **変数** （動的アクセス）であること、またはドット表記では扱えない **特殊文字** （スペースやハイフンなど）や数字を含むことを可能にします。"
      },
      vi: {
        title: "Sự khác biệt giữa ký hiệu dấu chấm (`.`) và ký hiệu ngoặc vuông (`[]`) để truy cập thuộc tính của đối tượng là gì?",
        body: "Khi nào bạn *bắt buộc* phải sử dụng ký hiệu ngoặc vuông?",
        solution: "**Ký hiệu dấu chấm** yêu cầu tên thuộc tính phải là một định danh hợp lệ và tĩnh (đã biết). **Ký hiệu ngoặc vuông** cho phép tên thuộc tính là một **biến** (truy cập động), hoặc chứa **các ký tự đặc biệt** (ví dụ: khoảng trắng hoặc dấu gạch ngang) hoặc số, điều mà ký hiệu dấu chấm không xử lý được."
      }
    }
  },
  {
    _id: "js-f-013",
    difficulty: "fresher",
    tags: ["destructuring", "array", "object"],
    content: {
      en: {
        title: "What is Destructuring Assignment?",
        body: "Provide a high-level definition.",
        solution: "**Destructuring Assignment** is a special syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. It simplifies extracting data from complex structures."
      },
      jp: {
        title: "分割代入（Destructuring Assignment）とは何ですか？",
        body: "高レベルな定義を提供してください。",
        solution: "**分割代入（Destructuring Assignment）** は、配列から値、またはオブジェクトからプロパティを個別の変数に展開することを可能にする特別な構文です。これにより、複雑な構造からデータを抽出することが簡素化されます。"
      },
      vi: {
        title: "Destructuring Assignment (Phép gán phá hủy cấu trúc) là gì?",
        body: "Đưa ra một định nghĩa ở cấp độ cao.",
        solution: "**Destructuring Assignment** là một cú pháp đặc biệt cho phép bạn giải nén các giá trị từ mảng, hoặc các thuộc tính từ đối tượng, vào các biến riêng biệt. Nó đơn giản hóa việc trích xuất dữ liệu từ các cấu trúc phức tạp."
      }
    }
  },
  {
    _id: "js-f-014",
    difficulty: "fresher",
    tags: ["spread-operator", "array", "object"],
    content: {
      en: {
        title: "What does the Spread Operator (`...`) do?",
        body: "Give an example of its use with arrays.",
        solution: "The **Spread Operator** (`...`) expands an iterable (like an array or a string) or properties from an object into its individual elements. **Example:** `const arr2 = [...arr1, 4];` is used to create a new array by copying and combining elements from an existing array."
      },
      jp: {
        title: "スプレッド演算子 (`...`) は何をしますか？",
        body: "配列での使用例を挙げてください。",
        solution: "**スプレッド演算子** (`...`) は、反復可能オブジェクト（配列や文字列など）またはオブジェクトからのプロパティを個々の要素に展開します。**例:** `const arr2 = [...arr1, 4];` は、既存の配列から要素をコピーして結合することで新しい配列を作成するために使用されます。"
      },
      vi: {
        title: "Toán tử Spread (`...`) làm gì?",
        body: "Đưa ra một ví dụ về việc sử dụng nó với mảng.",
        solution: "**Toán tử Spread** (`...`) mở rộng một iterable (như mảng hoặc chuỗi) hoặc các thuộc tính từ một đối tượng thành các phần tử riêng lẻ của nó. **Ví dụ:** `const arr2 = [...arr1, 4];` được sử dụng để tạo một mảng mới bằng cách sao chép và kết hợp các phần tử từ một mảng hiện có."
      }
    }
  },
  {
    _id: "js-f-015",
    difficulty: "fresher",
    tags: ["scope", "function", "global"],
    content: {
      en: {
        title: "What is 'Global Scope'?",
        body: "Define global scope and its potential drawbacks.",
        solution: "**Global Scope** is the outermost scope in a program. Variables declared globally are accessible from anywhere in the code. A major drawback is the risk of **naming collisions** and making it harder to manage dependencies."
      },
      jp: {
        title: "「グローバルスコープ」とは何ですか？",
        body: "グローバルスコープとその潜在的な欠点を定義してください。",
        solution: "**グローバルスコープ** はプログラム内の最も外側のスコープです。グローバルに宣言された変数は、コードのどこからでもアクセスできます。主な欠点は、**名前の衝突** のリスクと依存関係の管理が難しくなることです。"
      },
      vi: {
        title: "'Global Scope' (Phạm vi toàn cục) là gì?",
        body: "Định nghĩa phạm vi toàn cục và những nhược điểm tiềm tàng của nó.",
        solution: "**Global Scope** là phạm vi ngoài cùng trong một chương trình. Các biến được khai báo toàn cục có thể được truy cập từ bất cứ đâu trong mã. Một nhược điểm lớn là nguy cơ **xung đột tên** (naming collisions) và làm cho việc quản lý các dependencies (phụ thuộc) trở nên khó khăn hơn."
      }
    }
  },
  {
    _id: "js-f-016",
    difficulty: "fresher",
    tags: ["type-conversion", "parseInt", "parseFloat"],
    content: {
      en: {
        title: "What is the primary use of `parseInt()` and `parseFloat()`?",
        body: "What is the key difference in their conversion behavior?",
        solution: "Both are used to **parse a string and return a number**. `parseInt()` returns an **integer** (whole number), while `parseFloat()` returns a **floating-point number** (allowing decimals). `parseInt()` stops when it encounters the first non-numeric character (other than a sign or a specified radix)."
      },
      jp: {
        title: "`parseInt()` と `parseFloat()` の主な用途は何ですか？",
        body: "それらの変換動作における主要な違いは何ですか？",
        solution: "どちらも **文字列を解析して数値** を返すために使用されます。`parseInt()` は **整数** を返しますが、`parseFloat()` は **浮動小数点数** （小数を許可）を返します。`parseInt()` は、最初の非数値文字（符号または指定された基数以外）に遭遇すると停止します。"
      },
      vi: {
        title: "Công dụng chính của `parseInt()` và `parseFloat()` là gì?",
        body: "Sự khác biệt chính trong hành vi chuyển đổi của chúng là gì?",
        solution: "Cả hai đều được sử dụng để **phân tích cú pháp một chuỗi và trả về một số**. `parseInt()` trả về một **số nguyên** (số tròn), trong khi `parseFloat()` trả về một **số dấu phẩy động** (cho phép số thập phân). `parseInt()` dừng lại khi gặp ký tự không phải là số đầu tiên (ngoài dấu hoặc cơ số được chỉ định)."
      }
    }
  },
  {
    _id: "js-f-017",
    difficulty: "fresher",
    tags: ["NaN", "number"],
    content: {
      en: {
        title: "What does `NaN` stand for, and what is its type?",
        body: "Why is the comparison `NaN === NaN` always false?",
        solution: "`NaN` stands for **Not a Number**. Its type is **'number'**. `NaN === NaN` is false because `NaN` is used to represent the result of an undefined or unrepresentable mathematical operation, and no value is considered equal to an unrepresentable value, including itself. Use `isNaN()` to check for it."
      },
      jp: {
        title: "`NaN` は何の略で、その型は何ですか？",
        body: "なぜ `NaN === NaN` の比較は常に false なのですか？",
        solution: "`NaN` は **Not a Number** の略です。その型は **'number'** です。`NaN === NaN` が false なのは、`NaN` が未定義または表現できない数学的操作の結果を表すために使用され、表現できない値にはそれ自身を含めて、いかなる値も等しいとは見なされないためです。確認するには `isNaN()` を使用します。"
      },
      vi: {
        title: "`NaN` là viết tắt của từ gì, và kiểu dữ liệu của nó là gì?",
        body: "Tại sao phép so sánh `NaN === NaN` luôn trả về false?",
        solution: "`NaN` là viết tắt của **Not a Number**. Kiểu dữ liệu của nó là **'number'**. `NaN === NaN` là sai vì `NaN` được sử dụng để đại diện cho kết quả của một phép toán không xác định hoặc không thể biểu diễn, và không có giá trị nào được coi là bằng một giá trị không thể biểu diễn, kể cả chính nó. Sử dụng `isNaN()` để kiểm tra nó."
      }
    }
  },
  {
    _id: "js-f-018",
    difficulty: "fresher",
    tags: ["string", "immutable"],
    content: {
      en: {
        title: "Are strings in JavaScript mutable or immutable?",
        body: "If they are immutable, how do methods like `.toUpperCase()` work?",
        solution: "Strings in JavaScript are **immutable**. Methods like `.toUpperCase()` **do not change the original string**; instead, they return a **new string** containing the modifications. The original string remains unchanged."
      },
      jp: {
        title: "JavaScriptの文字列はミュータブルですか、それともイミュータブルですか？",
        body: "イミュータブルである場合、`.toUpperCase()` のようなメソッドはどのように機能しますか？",
        solution: "JavaScriptの文字列は **イミュータブル** です。`.toUpperCase()` のようなメソッドは **元の文字列を変更しません**。代わりに、変更を含む **新しい文字列** を返します。元の文字列は変更されないままです。"
      },
      vi: {
        title: "Các chuỗi (string) trong JavaScript là mutable hay immutable?",
        body: "Nếu chúng là immutable, làm thế nào các phương thức như `.toUpperCase()` hoạt động?",
        solution: "Các chuỗi trong JavaScript là **immutable** (bất biến). Các phương thức như `.toUpperCase()` **không thay đổi chuỗi gốc**; thay vào đó, chúng trả về một **chuỗi mới** chứa các sửa đổi. Chuỗi gốc vẫn không thay đổi."
      }
    }
  },
  {
    _id: "js-f-019",
    difficulty: "fresher",
    tags: ["closure", "scope"],
    content: {
      en: {
        title: "In simple terms, what is a 'Closure'?",
        body: "What two things does a closure combine?",
        solution: "A **Closure** is the combination of a function and the lexical environment within which that function was declared. In other words, a closure gives you access to an outer function's scope from an inner function, even after the outer function has finished executing."
      },
      jp: {
        title: "簡単に言えば、「クロージャ」とは何ですか？",
        body: "クロージャはどのような2つのものを組み合わせますか？",
        solution: "**クロージャ** は、関数とその関数が宣言されたレキシカル環境の組み合わせです。言い換えれば、クロージャは、外側の関数の実行が終了した後でも、内側の関数から外側の関数のスコープにアクセスできるようにします。"
      },
      vi: {
        title: "Theo cách đơn giản, 'Closure' (Bao đóng) là gì?",
        body: "Closure kết hợp hai thứ gì?",
        solution: "**Closure** là sự kết hợp của một hàm và môi trường từ vựng (lexical environment) mà hàm đó được khai báo. Nói cách khác, một closure cho phép bạn truy cập vào phạm vi của một hàm bên ngoài từ một hàm bên trong, ngay cả sau khi hàm bên ngoài đã thực thi xong."
      }
    }
  },
  {
    _id: "js-f-020",
    difficulty: "fresher",
    tags: ["promise", "asynchronous"],
    content: {
      en: {
        title: "What is a 'Promise' in JavaScript?",
        body: "What problem does a Promise solve?",
        solution: "A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It primarily solves the problem of **Callback Hell** (nested callbacks) by allowing asynchronous methods to return values like synchronous methods."
      },
      jp: {
        title: "JavaScriptにおける「Promise」とは何ですか？",
        body: "Promiseはどのような問題を解決しますか？",
        solution: "**Promise** は、非同期操作の最終的な完了（または失敗）とその結果の値を表すオブジェクトです。主に、非同期メソッドが同期メソッドのように値を返すことを可能にすることで、**コールバック地獄** （ネストされたコールバック）の問題を解決します。"
      },
      vi: {
        title: "'Promise' (Lời hứa) trong JavaScript là gì?",
        body: "Promise giải quyết vấn đề gì?",
        solution: "Một **Promise** là một đối tượng đại diện cho sự hoàn thành cuối cùng (hoặc thất bại) của một thao tác bất đồng bộ và giá trị kết quả của nó. Nó chủ yếu giải quyết vấn đề **Callback Hell** (các callback lồng nhau) bằng cách cho phép các phương thức bất đồng bộ trả về giá trị giống như các phương thức đồng bộ."
      }
    }
  },
  {
    _id: "js-f-021",
    difficulty: "fresher",
    tags: ["promise", "state"],
    content: {
      en: {
        title: "What are the three possible states of a Promise?",
        body: "List the states and briefly describe them.",
        solution: "The three states are: 1. **Pending** (initial state, neither fulfilled nor rejected). 2. **Fulfilled** (meaning that the operation completed successfully). 3. **Rejected** (meaning that the operation failed)."
      },
      jp: {
        title: "Promiseの3つの可能な状態は何ですか？",
        body: "状態をリストし、簡単に説明してください。",
        solution: "3つの状態は次のとおりです。1. **Pending** (初期状態、成功も失敗もしていない)。2. **Fulfilled** (操作が正常に完了したことを意味する)。3. **Rejected** (操作が失敗したことを意味する)。"
      },
      vi: {
        title: "Ba trạng thái có thể có của một Promise là gì?",
        body: "Liệt kê và mô tả ngắn gọn các trạng thái đó.",
        solution: "Ba trạng thái là: 1. **Pending** (Trạng thái ban đầu, chưa thành công cũng chưa thất bại). 2. **Fulfilled** (Có nghĩa là thao tác đã hoàn thành thành công). 3. **Rejected** (Có nghĩa là thao tác đã thất bại)."
      }
    }
  },
  {
    _id: "js-f-022",
    difficulty: "fresher",
    tags: ["class", "constructor"],
    content: {
      en: {
        title: "What is the purpose of the `constructor` method in a JavaScript Class?",
        body: "When is the constructor executed?",
        solution: "The `constructor` is a special method used for **creating and initializing an object** created with a class. It is executed automatically when a **new object** instance is created using the `new` keyword."
      },
      jp: {
        title: "JavaScriptクラスにおける `constructor` メソッドの目的は何ですか？",
        body: "コンストラクタはいつ実行されますか？",
        solution: "`constructor` は、クラスで作成された **オブジェクトを作成し初期化する** ために使用される特別なメソッドです。これは、`new` キーワードを使用して **新しいオブジェクト** インスタンスが作成されるときに自動的に実行されます。"
      },
      vi: {
        title: "Mục đích của phương thức `constructor` trong Class của JavaScript là gì?",
        body: "Constructor được thực thi khi nào?",
        solution: "`constructor` là một phương thức đặc biệt được sử dụng để **tạo và khởi tạo một đối tượng** được tạo bằng một lớp (class). Nó được thực thi tự động khi một **thể hiện đối tượng mới** được tạo bằng từ khóa `new`."
      }
    }
  },
  {
    _id: "js-f-023",
    difficulty: "fresher",
    tags: ["this", "context"],
    content: {
      en: {
        title: "In simple terms, what does the `this` keyword refer to?",
        body: "What is the value of `this` in the global scope (outside of any function)?",
        solution: "The `this` keyword refers to the **object that is currently executing the function** (the execution context). In the global scope (outside of strict mode), `this` refers to the **global object** (e.g., `window` in browsers or `global` in Node.js)."
      },
      jp: {
        title: "簡単に言えば、`this` キーワードは何を参照しますか？",
        body: "グローバルスコープ（どの関数外）での `this` の値は何ですか？",
        solution: "`this` キーワードは、**現在その関数を実行しているオブジェクト** （実行コンテキスト）を参照します。グローバルスコープ（厳格モード外）では、`this` は **グローバルオブジェクト** （ブラウザでは `window`、Node.jsでは `global` など）を参照します。"
      },
      vi: {
        title: "Nói một cách đơn giản, từ khóa `this` tham chiếu đến cái gì?",
        body: "Giá trị của `this` trong phạm vi toàn cục (bên ngoài bất kỳ hàm nào) là gì?",
        solution: "Từ khóa `this` tham chiếu đến **đối tượng hiện đang thực thi hàm đó** (ngữ cảnh thực thi). Trong phạm vi toàn cục (ngoài chế độ nghiêm ngặt), `this` tham chiếu đến **đối tượng toàn cục** (ví dụ: `window` trong trình duyệt hoặc `global` trong Node.js)."
      }
    }
  },
  {
    _id: "js-f-024",
    difficulty: "fresher",
    tags: ["template-literal", "string"],
    content: {
      en: {
        title: "What are 'Template Literals' and what character are they enclosed in?",
        body: "What is the feature that allows variables to be injected directly into the string?",
        solution: "**Template Literals** (or Template Strings) are string literals allowing embedded expressions. They are enclosed by the **backtick** (``` ` ```) character. The feature is **String Interpolation**, which uses the syntax `${variable}`."
      },
      jp: {
        title: "「テンプレートリテラル」とは何で、どの文字で囲まれていますか？",
        body: "変数を文字列に直接挿入できる機能は何ですか？",
        solution: "**テンプレートリテラル** （またはテンプレート文字列）は、埋め込み式を許可する文字列リテラルです。これらは **バッククォート** (``` ` ```) 文字で囲まれています。この機能は **文字列補間（String Interpolation）** で、`${variable}` の構文を使用します。"
      },
      vi: {
        title: "'Template Literals' là gì và chúng được bao bọc bởi ký tự nào?",
        body: "Tính năng nào cho phép các biến được chèn trực tiếp vào chuỗi?",
        solution: "**Template Literals** (hoặc Template Strings) là các chuỗi ký tự cho phép nhúng các biểu thức. Chúng được bao bọc bởi ký tự **dấu huyền** (``` ` ```). Tính năng đó là **String Interpolation** (Nội suy chuỗi), sử dụng cú pháp `${variable}`."
      }
    }
  },
  {
    _id: "js-f-025",
    difficulty: "fresher",
    tags: ["module", "import", "export"],
    content: {
      en: {
        title: "What is the purpose of the `export` and `import` keywords?",
        body: "What concept do they enable in JavaScript development?",
        solution: "`export` is used to **make functions, classes, or variables available** from a file/module. `import` is used to **read/access** those exported components in another file/module. They enable **Modularity** (Module System) in JavaScript applications."
      },
      jp: {
        title: "`export` および `import` キーワードの目的は何ですか？",
        body: "JavaScript開発でそれらが可能にする概念は何ですか？",
        solution: "`export` は、ファイル/モジュールから **関数、クラス、または変数を公開する** ために使用されます。`import` は、それらのエクスポートされたコンポーネントを別のファイル/モジュールで **読み込み/アクセスする** ために使用されます。これらは、JavaScriptアプリケーションで **モジュール性** （モジュールシステム）を可能にします。"
      },
      vi: {
        title: "Mục đích của các từ khóa `export` và `import` là gì?",
        body: "Chúng cho phép khái niệm nào trong phát triển JavaScript?",
        solution: "`export` được sử dụng để **cung cấp các hàm, lớp hoặc biến** từ một tệp/module. `import` được sử dụng để **đọc/truy cập** các thành phần đã được export đó trong một tệp/module khác. Chúng cho phép **Tính mô-đun** (Module System) trong các ứng dụng JavaScript."
      }
    }
  },
  {
    _id: "js-f-026",
    difficulty: "fresher",
    tags: ["array", "method", "pop"],
    content: {
      en: {
        title: "What does the `.pop()` method do on an array?",
        body: "What is the return value of this method?",
        solution: "The `.pop()` method **removes the last element** from an array and returns **that element**. If the array is empty, it returns `undefined`."
      },
      jp: {
        title: "配列に対する `.pop()` メソッドは何をしますか？",
        body: "このメソッドの戻り値は何ですか？",
        solution: "`.pop()` メソッドは、配列から **最後の要素を削除** し、**その要素** を返します。配列が空の場合は `undefined` を返します。"
      },
      vi: {
        title: "Phương thức `.pop()` trên mảng làm gì?",
        body: "Giá trị trả về của phương thức này là gì?",
        solution: "Phương thức `.pop()` **xóa phần tử cuối cùng** khỏi một mảng và trả về **phần tử đã bị xóa đó**. Nếu mảng trống, nó trả về `undefined`."
      }
    }
  },
  {
    _id: "js-f-027",
    difficulty: "fresher",
    tags: ["event", "browser", "DOM"],
    content: {
      en: {
        title: "What is an 'Event' in the context of the browser and DOM?",
        body: "Give two examples of common DOM events.",
        solution: "An **Event** is an action or occurrence that happens in the system you are programming, which the system tells you about so you can respond. Examples include **click**, **mouseover**, **keydown**, **load**, **submit**."
      },
      jp: {
        title: "ブラウザとDOMのコンテキストにおける「イベント」とは何ですか？",
        body: "一般的なDOMイベントの例を2つ挙げてください。",
        solution: "**イベント** は、プログラミングしているシステム内で発生するアクションまたは出来事であり、システムがそれに反応できるようにあなたに知らせるものです。例には、**click**、**mouseover**、**keydown**、**load**、**submit** などがあります。"
      },
      vi: {
        title: "'Event' (Sự kiện) trong ngữ cảnh của trình duyệt và DOM là gì?",
        body: "Đưa ra hai ví dụ về các sự kiện DOM phổ biến.",
        solution: "Một **Sự kiện** là một hành động hoặc sự cố xảy ra trong hệ thống bạn đang lập trình, mà hệ thống thông báo cho bạn biết để bạn có thể phản hồi. Các ví dụ bao gồm **click**, **mouseover**, **keydown**, **load**, **submit**."
      }
    }
  },
  {
    _id: "js-f-028",
    difficulty: "fresher",
    tags: ["operator", "ternary"],
    content: {
      en: {
        title: "What is the Ternary Operator and what is its structure?",
        body: "How does it relate to the `if...else` statement?",
        solution: "The **Ternary Operator** (`? :`) is the *only* operator in JavaScript that takes three operands. It is a **shorthand way to write an `if...else` statement**, with the structure: `condition ? expressionIfTrue : expressionIfFalse`."
      },
      jp: {
        title: "三項演算子とは何で、その構造はどうなっていますか？",
        body: "それは `if...else` ステートメントとどのように関連していますか？",
        solution: "**三項演算子** (`? :`) は、JavaScriptで *唯一* 3つのオペランドを取る演算子です。これは、`if...else` ステートメントを記述するための **短縮形** であり、構造は次のとおりです: `condition ? expressionIfTrue : expressionIfFalse`。"
      },
      vi: {
        title: "Ternary Operator (Toán tử 3 ngôi) là gì và cấu trúc của nó như thế nào?",
        body: "Nó liên quan đến câu lệnh `if...else` như thế nào?",
        solution: "**Ternary Operator** (`? :`) là toán tử *duy nhất* trong JavaScript nhận ba toán hạng. Nó là một **cách viết tắt của câu lệnh `if...else`**, với cấu trúc: `condition ? expressionIfTrue : expressionIfFalse`."
      }
    }
  },
  {
    _id: "js-f-029",
    difficulty: "fresher",
    tags: ["object", "method", "keys", "values"],
    content: {
      en: {
        title: "What is the use of `Object.keys()` and `Object.values()`?",
        body: "What data structure do both methods return?",
        solution: "`Object.keys(obj)` returns an array of a given object's **own enumerable property names (keys)**. `Object.values(obj)` returns an array of a given object's **own enumerable property values**. Both methods return an **Array**."
      },
      jp: {
        title: "`Object.keys()` と `Object.values()` の用途は何ですか？",
        body: "両方のメソッドが返すデータ構造は何ですか？",
        solution: "`Object.keys(obj)` は、与えられたオブジェクトの **自身の列挙可能なプロパティ名（キー）の配列** を返します。`Object.values(obj)` は、与えられたオブジェクトの **自身の列挙可能なプロパティ値の配列** を返します。両方のメソッドは **配列** を返します。"
      },
      vi: {
        title: "Công dụng của `Object.keys()` và `Object.values()` là gì?",
        body: "Cả hai phương thức này trả về cấu trúc dữ liệu gì?",
        solution: "`Object.keys(obj)` trả về một mảng chứa **các tên thuộc tính (keys) có thể liệt kê** của một đối tượng đã cho. `Object.values(obj)` trả về một mảng chứa **các giá trị thuộc tính có thể liệt kê** của một đối tượng đã cho. Cả hai phương thức đều trả về một **Mảng (Array)**."
      }
    }
  },
  {
    _id: "js-f-030",
    difficulty: "fresher",
    tags: ["null", "undefined", "type"],
    content: {
      en: {
        title: "What is the difference between `null` and `undefined`?",
        body: "How do you typically use each value?",
        solution: "`undefined` means a variable has been declared but **not yet assigned a value**. `null` is an **explicit assignment** that represents the intentional absence of any object value. Use `null` to clear a variable's value; `undefined` is usually set by the JS engine."
      },
      jp: {
        title: "`null` と `undefined` の違いは何ですか？",
        body: "それぞれの値を通常どのように使用しますか？",
        solution: "`undefined` は、変数が宣言されたが **まだ値が割り当てられていない** ことを意味します。`null` は、オブジェクト値の意図的な不在を表す **明示的な代入** です。変数の値をクリアするために `null` を使用し、`undefined` は通常JSエンジンによって設定されます。"
      },
      vi: {
        title: "Sự khác biệt giữa `null` và `undefined` là gì?",
        body: "Bạn thường sử dụng mỗi giá trị như thế nào?",
        solution: "`undefined` có nghĩa là một biến đã được khai báo nhưng **chưa được gán giá trị**. `null` là một **phép gán rõ ràng** đại diện cho sự vắng mặt có chủ ý của bất kỳ giá trị đối tượng nào. Sử dụng `null` để xóa giá trị của một biến; `undefined` thường được thiết lập bởi JS engine."
      }
    }
  },
  {
    _id: "js-f-031",
    difficulty: "fresher",
    tags: ["array", "method", "splice", "slice"],
    content: {
      en: {
        title: "What is the difference between `.slice()` and `.splice()`?",
        body: "Which one mutates the original array?",
        solution: "**.slice()** extracts a section of an array and returns a **new array** (immutable). **.splice()** changes the contents of an array by removing, replacing, or adding elements (mutable). **.splice()** mutates the original array."
      },
      jp: {
        title: "`.slice()` と `.splice()` の違いは何ですか？",
        body: "どちらが元の配列を変更しますか？",
        solution: "**.slice()** は配列の一部を抽出し、**新しい配列** を返します（イミュータブル）。**.splice()** は、要素を削除、置換、または追加することによって配列の内容を変更します（ミュータブル）。**.splice()** が元の配列を変更します。"
      },
      vi: {
        title: "Sự khác biệt giữa `.slice()` và `.splice()` là gì?",
        body: "Phương thức nào làm thay đổi mảng gốc?",
        solution: "**.slice()** trích xuất một phần của mảng và trả về một **mảng mới** (bất biến - immutable). **.splice()** thay đổi nội dung của một mảng bằng cách xóa, thay thế hoặc thêm các phần tử (có thể thay đổi - mutable). **.splice()** làm thay đổi mảng gốc."
      }
    }
  },
  {
    _id: "js-f-032",
    difficulty: "fresher",
    tags: ["operators", "logical", "short-circuit"],
    content: {
      en: {
        title: "Explain the concept of 'Short-Circuit Evaluation' with the logical OR (`||`) operator.",
        body: "When does the logical OR operator stop evaluating?",
        solution: "Short-Circuit Evaluation means that an expression is evaluated only as far as necessary. For the logical OR (`||`), if the **left operand is truthy**, the operator immediately returns the left operand's value and **does not evaluate the right operand**."
      },
      jp: {
        title: "論理OR (`||`) 演算子を使用した「短絡評価（Short-Circuit Evaluation）」の概念を説明してください。",
        body: "論理OR演算子はいつ評価を停止しますか？",
        solution: "短絡評価とは、式が必要な範囲でのみ評価されることを意味します。論理OR (`||`) の場合、**左側のオペランドが truthy である** ならば、演算子は直ちに左側のオペランドの値を返し、**右側のオペランドを評価しません**。"
      },
      vi: {
        title: "Giải thích khái niệm 'Short-Circuit Evaluation' (Đánh giá đoản mạch) với toán tử logic OR (`||`).",
        body: "Toán tử logic OR ngừng đánh giá khi nào?",
        solution: "Đánh giá đoản mạch có nghĩa là một biểu thức chỉ được đánh giá ở mức cần thiết. Đối với toán tử logic OR (`||`), nếu **toán hạng bên trái là truthy**, toán tử sẽ ngay lập tức trả về giá trị của toán hạng bên trái và **không đánh giá toán hạng bên phải**."
      }
    }
  },
  {
    _id: "js-f-033",
    difficulty: "fresher",
    tags: ["IIFE", "function"],
    content: {
      en: {
        title: "What does IIFE stand for?",
        body: "What is its main purpose?",
        solution: "IIFE stands for **Immediately Invoked Function Expression**. Its main purpose is to **create a new scope** to avoid polluting the global scope with variables and functions declared inside it, thus preventing potential naming conflicts."
      },
      jp: {
        title: "IIFEは何の略ですか？",
        body: "その主な目的は何ですか？",
        solution: "IIFEは **Immediately Invoked Function Expression** の略です。その主な目的は、内部で宣言された変数や関数でグローバルスコープを汚染するのを避け、潜在的な名前の衝突を防ぐために **新しいスコープを作成する** ことです。"
      },
      vi: {
        title: "IIFE là viết tắt của từ gì?",
        body: "Mục đích chính của nó là gì?",
        solution: "IIFE là viết tắt của **Immediately Invoked Function Expression** (Biểu thức hàm được gọi ngay lập tức). Mục đích chính của nó là **tạo một phạm vi mới** để tránh làm ô nhiễm phạm vi toàn cục bằng các biến và hàm được khai báo bên trong nó, do đó ngăn chặn các xung đột tên tiềm ẩn."
      }
    }
  },
  {
    _id: "js-f-034",
    difficulty: "fresher",
    tags: ["type-coercion", "equality"],
    content: {
      en: {
        title: "What is 'Type Coercion'?",
        body: "Give an example where type coercion occurs.",
        solution: "**Type Coercion** is the automatic or implicit conversion of values from one data type to another (e.g., string to number, number to boolean). It happens with the loose equality operator (`==`) or arithmetic operations. **Example:** `1 + '2'` results in the string `'12'`."
      },
      jp: {
        title: "「型強制（Type Coercion）」とは何ですか？",
        body: "型強制が発生する例を挙げてください。",
        solution: "**型強制（Type Coercion）** は、値が自動的または暗黙的にあるデータ型から別のデータ型に変換されることです（例：文字列から数値、数値からブール値）。これは、緩い等価演算子 (`==`) や算術演算で発生します。**例:** `1 + '2'` は文字列 `'12'` になります。"
      },
      vi: {
        title: "'Type Coercion' (Ép kiểu) là gì?",
        body: "Đưa ra một ví dụ về trường hợp ép kiểu xảy ra.",
        solution: "**Type Coercion** là sự chuyển đổi tự động hoặc ngầm định các giá trị từ kiểu dữ liệu này sang kiểu dữ liệu khác (ví dụ: chuỗi sang số, số sang boolean). Nó xảy ra với toán tử so sánh lỏng lẻo (`==`) hoặc các phép toán số học. **Ví dụ:** `1 + '2'` cho kết quả là chuỗi `'12'`."
      }
    }
  },
  {
    _id: "js-f-035",
    difficulty: "fresher",
    tags: ["array", "method", "forEach"],
    content: {
      en: {
        title: "What is the purpose of the `.forEach()` array method?",
        body: "What is a key difference between `.forEach()` and `.map()`?",
        solution: "The `.forEach()` method **executes a provided function once for each array element**. It is used for **iteration** (looping) and side effects. Unlike `.map()`, `.forEach()` **always returns `undefined`** and does not create a new array."
      },
      jp: {
        title: "配列メソッド `.forEach()` の目的は何ですか？",
        body: "`.forEach()` と `.map()` の主な違いは何ですか？",
        solution: "`.forEach()` メソッドは、**配列の各要素に対して提供された関数を一度実行します**。**反復** （ループ）と副作用のために使用されます。`.map()` とは異なり、`.forEach()` は **常に `undefined` を返し**、新しい配列を作成しません。"
      },
      vi: {
        title: "Mục đích của phương thức mảng `.forEach()` là gì?",
        body: "Sự khác biệt chính giữa `.forEach()` và `.map()` là gì?",
        solution: "Phương thức `.forEach()` **thực thi một hàm được cung cấp một lần cho mỗi phần tử của mảng**. Nó được sử dụng cho **vòng lặp** và các tác dụng phụ (side effects). Khác với `.map()`, `.forEach()` **luôn trả về `undefined`** và không tạo ra một mảng mới."
      }
    }
  },
  {
    _id: "js-f-036",
    difficulty: "fresher",
    tags: ["function", "parameters", "arguments"],
    content: {
      en: {
        title: "What is the difference between function 'Parameters' and 'Arguments'?",
        body: "Where is each one defined/used?",
        solution: "**Parameters** are the named variables listed in the function definition. **Arguments** are the actual values passed to the function when it is called (invoked). Parameters are in the definition; Arguments are in the call."
      },
      jp: {
        title: "関数の「パラメーター」と「引数」の違いは何ですか？",
        body: "それぞれはどこで定義/使用されますか？",
        solution: "**パラメーター** は、関数定義にリストされている名前付き変数です。**引数** は、関数が呼び出されたときに（呼び出されたときに）関数に渡される実際の値です。パラメーターは定義内にあり、引数は呼び出し内にあります。"
      },
      vi: {
        title: "Sự khác biệt giữa 'Parameters' (Tham số) và 'Arguments' (Đối số) của hàm là gì?",
        body: "Mỗi loại được định nghĩa/sử dụng ở đâu?",
        solution: "**Parameters** là các biến có tên được liệt kê trong định nghĩa hàm. **Arguments** là các giá trị thực tế được truyền cho hàm khi nó được gọi (invoke). Parameters nằm trong định nghĩa; Arguments nằm trong lời gọi hàm."
      }
    }
  },
  {
    _id: "js-f-037",
    difficulty: "fresher",
    tags: ["event-bubbling", "DOM"],
    content: {
      en: {
        title: "What is 'Event Bubbling' in the DOM?",
        body: "Describe the direction of the event flow.",
        solution: "**Event Bubbling** is the process where an event, when triggered on an element, propagates (travels) up the DOM tree from the initial target element to its parent, and up to the `document` object. The flow is **bottom-up**."
      },
      jp: {
        title: "DOMにおける「イベントバブリング」とは何ですか？",
        body: "イベントフローの方向を説明してください。",
        solution: "**イベントバブリング** は、要素でイベントがトリガーされたときに、そのイベントがDOMツリーを上向きに、初期ターゲット要素からその親、そして `document` オブジェクトまで伝播（移動）するプロセスです。フローは **下から上** です。"
      },
      vi: {
        title: "'Event Bubbling' (Sủi bọt sự kiện) trong DOM là gì?",
        body: "Mô tả hướng của luồng sự kiện.",
        solution: "**Event Bubbling** là quá trình mà một sự kiện, khi được kích hoạt trên một phần tử, sẽ lan truyền (di chuyển) lên cây DOM từ phần tử mục tiêu ban đầu đến phần tử cha của nó, và lên đến đối tượng `document`. Luồng là **từ dưới lên (bottom-up)**."
      }
    }
  },
  {
    _id: "js-f-038",
    difficulty: "fresher",
    tags: ["local-storage", "web-storage"],
    content: {
      en: {
        title: "What is the primary function of `localStorage`?",
        body: "What is the main difference between `localStorage` and `sessionStorage`?",
        solution: "`localStorage` allows web applications to **store data locally within the user's browser** with **no expiration time** (it persists even when the browser is closed). `sessionStorage` stores data only for a single session, and the data is **cleared when the browser tab is closed**."
      },
      jp: {
        title: "`localStorage` の主な機能は何ですか？",
        body: "`localStorage` と `sessionStorage` の主な違いは何ですか？",
        solution: "`localStorage` は、Webアプリケーションが **有効期限なし** で **ユーザーのブラウザ内にデータをローカルに保存** することを可能にします（ブラウザが閉じられても持続します）。`sessionStorage` は、単一のセッションに対してのみデータを保存し、データは **ブラウザタブが閉じられたときにクリアされます**。"
      },
      vi: {
        title: "Chức năng chính của `localStorage` là gì?",
        body: "Sự khác biệt chính giữa `localStorage` và `sessionStorage` là gì?",
        solution: "`localStorage` cho phép các ứng dụng web **lưu trữ dữ liệu cục bộ bên trong trình duyệt của người dùng** mà **không có thời gian hết hạn** (nó vẫn tồn tại ngay cả khi trình duyệt bị đóng). `sessionStorage` chỉ lưu trữ dữ liệu cho một phiên duy nhất và dữ liệu **bị xóa khi tab trình duyệt bị đóng**."
      }
    }
  },
  {
    _id: "js-f-039",
    difficulty: "fresher",
    tags: ["fetch", "AJAX", "API"],
    content: {
      en: {
        title: "What is the JavaScript `fetch` API used for?",
        body: "What is the return type of a `fetch` call?",
        solution: "The `fetch` API is used for **making network requests** (e.g., retrieving data from a server/API). It returns a **Promise** that resolves to the `Response` object representing the response to the request."
      },
      jp: {
        title: "JavaScriptの `fetch` APIは何のために使用されますか？",
        body: "`fetch` 呼び出しの戻り値の型は何ですか？",
        solution: "`fetch` APIは **ネットワークリクエストを行う** ために使用されます（例：サーバー/APIからデータを取得する）。これは、リクエストに対する応答を表す `Response` オブジェクトに解決される **Promise** を返します。"
      },
      vi: {
        title: "API `fetch` của JavaScript được sử dụng để làm gì?",
        body: "Kiểu dữ liệu trả về của một lời gọi `fetch` là gì?",
        solution: "API `fetch` được sử dụng để **thực hiện các yêu cầu mạng** (ví dụ: truy xuất dữ liệu từ một server/API). Nó trả về một **Promise** giải quyết thành đối tượng `Response` đại diện cho phản hồi đối với yêu cầu."
      }
    }
  },
  {
    _id: "js-f-040",
    difficulty: "fresher",
    tags: ["error-handling", "try-catch"],
    content: {
      en: {
        title: "What is the purpose of a `try...catch` block?",
        body: "Which part contains the code that might fail?",
        solution: "A `try...catch` block is used for **error handling**. The `try` block contains the code that is to be tested for errors while it is being executed. The `catch` block contains the code to be executed if an error occurs in the `try` block. The `try` part might fail."
      },
      jp: {
        title: "`try...catch` ブロックの目的は何ですか？",
        body: "失敗する可能性のあるコードを含む部分はどれですか？",
        solution: "`try...catch` ブロックは **エラー処理** のために使用されます。`try` ブロックには、実行中にエラーがないかテストされるコードが含まれます。`catch` ブロックには、`try` ブロックでエラーが発生した場合に実行されるコードが含まれます。`try` 部分が失敗する可能性があります。"
      },
      vi: {
        title: "Mục đích của khối `try...catch` là gì?",
        body: "Phần nào chứa mã có thể gặp lỗi?",
        solution: "Khối `try...catch` được sử dụng để **xử lý lỗi** (error handling). Khối `try` chứa mã được kiểm tra lỗi trong khi nó đang được thực thi. Khối `catch` chứa mã sẽ được thực thi nếu lỗi xảy ra trong khối `try`. Phần `try` có thể gặp lỗi."
      }
    }
  },
  {
    _id: "js-f-041",
    difficulty: "fresher",
    tags: ["truthy", "falsy", "boolean"],
    content: {
      en: {
        title: "What is the difference between a 'truthy' and a 'falsy' value?",
        body: "List all 6 falsy values in JavaScript.",
        solution: "**Truthy** values are values that evaluate to `true` in a boolean context. **Falsy** values are values that evaluate to `false` in a boolean context. The 6 falsy values are: **`false`**, **`0`**, **`''`** (empty string), **`null`**, **`undefined`**, and **`NaN`**."
      },
      jp: {
        title: "「truthy」な値と「falsy」な値の違いは何ですか？",
        body: "JavaScriptの6つの falsy な値をすべてリストしてください。",
        solution: "**Truthy** な値は、ブールコンテキストで `true` に評価される値です。**Falsy** な値は、ブールコンテキストで `false` に評価される値です。6つの falsy な値は、**`false`**、**`0`**、**`''`** （空文字列）、**`null`**、**`undefined`**、および **`NaN`** です。"
      },
      vi: {
        title: "Sự khác biệt giữa giá trị 'truthy' và 'falsy' là gì?",
        body: "Liệt kê tất cả 6 giá trị falsy trong JavaScript.",
        solution: "Giá trị **Truthy** là các giá trị được đánh giá là `true` trong ngữ cảnh boolean. Giá trị **Falsy** là các giá trị được đánh giá là `false` trong ngữ cảnh boolean. 6 giá trị falsy là: **`false`**, **`0`**, **`''`** (chuỗi rỗng), **`null`**, **`undefined`**, và **`NaN`**."
      }
    }
  },
  {
    _id: "js-f-042",
    difficulty: "fresher",
    tags: ["DOM", "querySelector", "element"],
    content: {
      en: {
        title: "What does the `document.querySelector()` method do?",
        body: "If multiple elements match the selector, which one is returned?",
        solution: "`document.querySelector()` returns the **first Element** within the document that matches the specified selector (or group of selectors). If multiple elements match, **only the first one is returned**."
      },
      jp: {
        title: "`document.querySelector()` メソッドは何をしますか？",
        body: "複数の要素がセレクターに一致する場合、どれが返されますか？",
        solution: "`document.querySelector()` は、指定されたセレクター（またはセレクターのグループ）に一致するドキュメント内の **最初のエレメント** を返します。複数の要素が一致する場合、**最初の1つのみが返されます**。"
      },
      vi: {
        title: "Phương thức `document.querySelector()` làm gì?",
        body: "Nếu nhiều phần tử khớp với selector, phần tử nào được trả về?",
        solution: "`document.querySelector()` trả về **Phần tử đầu tiên** trong tài liệu khớp với bộ chọn đã chỉ định (hoặc nhóm bộ chọn). Nếu nhiều phần tử khớp, **chỉ phần tử đầu tiên được trả về**."
      }
  }
  },
  {
    _id: "js-f-043",
    difficulty: "fresher",
    tags: ["this", "call", "apply"],
    content: {
      en: {
        title: "What is the purpose of the `.call()` method on a function?",
        body: "What is the main difference between `.call()` and `.apply()`?",
        solution: "The `.call()` method is used to **invoke a function immediately** with a specified `this` value and arguments provided individually. `.call()` takes arguments **one by one**, whereas `.apply()` takes arguments as an **array**."
      },
      jp: {
        title: "関数における `.call()` メソッドの目的は何ですか？",
        body: "`.call()` と `.apply()` の主な違いは何ですか？",
        solution: "`.call()` メソッドは、指定された `this` の値と個別に提供された引数を使用して、**関数を直ちに呼び出す** ために使用されます。`.call()` は引数を **1つずつ** 取りますが、`.apply()` は引数を **配列** として取ります。"
      },
      vi: {
        title: "Mục đích của phương thức `.call()` trên một hàm là gì?",
        body: "Sự khác biệt chính giữa `.call()` và `.apply()` là gì?",
        solution: "Phương thức `.call()` được sử dụng để **gọi một hàm ngay lập tức** với giá trị `this` đã chỉ định và các đối số được cung cấp riêng lẻ. `.call()` nhận các đối số **từng cái một**, trong khi `.apply()` nhận các đối số dưới dạng **một mảng**."
      }
    }
  },
  {
    _id: "js-f-044",
    difficulty: "fresher",
    tags: ["array", "method", "filter"],
    content: {
      en: {
        title: "What does the `.filter()` method do on an array?",
        body: "What is the condition for an element to be included in the resulting array?",
        solution: "The `.filter()` method **creates a new array** with all elements that **pass the test** implemented by the provided function. The element must cause the provided function to return a **truthy** value to be included."
      },
      jp: {
        title: "配列に対する `.filter()` メソッドは何をしますか？",
        body: "結果の配列に要素が含まれるための条件は何ですか？",
        solution: "`.filter()` メソッドは、提供された関数によって実装された **テストに合格する** すべての要素を含む **新しい配列** を作成します。要素が含まれるためには、提供された関数が **truthy** な値を返す必要があります。"
      },
      vi: {
        title: "Phương thức `.filter()` trên mảng làm gì?",
        body: "Điều kiện để một phần tử được đưa vào mảng kết quả là gì?",
        solution: "Phương thức `.filter()` **tạo ra một mảng mới** với tất cả các phần tử **vượt qua bài kiểm tra** được triển khai bởi hàm được cung cấp. Phần tử phải làm cho hàm được cung cấp trả về một giá trị **truthy** để được đưa vào."
      }
    }
  },
  {
    _id: "js-f-045",
    difficulty: "fresher",
    tags: ["JSON", "serialization"],
    content: {
      en: {
        title: "What is the primary use of `JSON.stringify()` and `JSON.parse()`?",
        body: "What is the resulting data type after using `JSON.stringify()`?",
        solution: "`JSON.stringify()` converts a JavaScript value (usually an object or array) to a **JSON string** (serialization). `JSON.parse()` parses a JSON string, constructing the JavaScript value or object described by the string (deserialization). The result of `JSON.stringify()` is a **string**."
      },
      jp: {
        title: "`JSON.stringify()` と `JSON.parse()` の主な用途は何ですか？",
        body: "`JSON.stringify()` を使用した後の結果のデータ型は何ですか？",
        solution: "`JSON.stringify()` は、JavaScriptの値（通常はオブジェクトまたは配列）を **JSON文字列** に変換します（シリアル化）。`JSON.parse()` はJSON文字列を解析し、その文字列によって記述されたJavaScriptの値またはオブジェクトを構築します（逆シリアル化）。`JSON.stringify()` の結果は **string** です。"
      },
      vi: {
        title: "Công dụng chính của `JSON.stringify()` và `JSON.parse()` là gì?",
        body: "Kiểu dữ liệu kết quả sau khi sử dụng `JSON.stringify()` là gì?",
        solution: "`JSON.stringify()` chuyển đổi một giá trị JavaScript (thường là một đối tượng hoặc mảng) thành một **chuỗi JSON** (serialization). `JSON.parse()` phân tích cú pháp một chuỗi JSON, xây dựng giá trị hoặc đối tượng JavaScript được mô tả bởi chuỗi đó (deserialization). Kết quả của `JSON.stringify()` là một **chuỗi (string)**."
      }
    }
  },
  {
    _id: "js-f-046",
    difficulty: "fresher",
    tags: ["DOM", "attribute", "property"],
    content: {
      en: {
        title: "What is the difference between an 'Attribute' and a 'Property' in the DOM?",
        body: "Which one is primarily managed by the HTML code?",
        solution: "An **Attribute** is defined in the HTML markup (e.g., `<input id='name'>`). A **Property** is a value that exists on the DOM object/node in memory. Attributes initialize properties, but properties are dynamic (changeable) and reflect the current state of the element. **Attributes** are managed by the HTML code."
      },
      jp: {
        title: "DOMにおける「属性（Attribute）」と「プロパティ（Property）」の違いは何ですか？",
        body: "主にHTMLコードによって管理されるのはどちらですか？",
        solution: "**属性（Attribute）** はHTMLマークアップで定義されます（例：`<input id='name'>`）。**プロパティ（Property）** は、メモリ内のDOMオブジェクト/ノードに存在する値です。属性はプロパティを初期化しますが、プロパティは動的（変更可能）であり、要素の現在の状態を反映します。**属性** はHTMLコードによって管理されます。"
      },
      vi: {
        title: "Sự khác biệt giữa 'Attribute' (Thuộc tính HTML) và 'Property' (Thuộc tính DOM) là gì?",
        body: "Cái nào chủ yếu được quản lý bởi mã HTML?",
        solution: "**Attribute** được định nghĩa trong đánh dấu HTML (ví dụ: `<input id='name'>`). **Property** là một giá trị tồn tại trên đối tượng/node DOM trong bộ nhớ. Attributes khởi tạo properties, nhưng properties là động (có thể thay đổi) và phản ánh trạng thái hiện tại của phần tử. **Attribute** được quản lý bởi mã HTML."
      }
    }
  },
  {
    _id: "js-f-047",
    difficulty: "fresher",
    tags: ["function", "pure-function"],
    content: {
      en: {
        title: "What is a 'Pure Function'?",
        body: "What are the two main characteristics of a pure function?",
        solution: "A **Pure Function** is a function that: 1. Always returns the **same result** when given the same input (it is deterministic). 2. Has **no side effects** (it does not modify external state, like global variables or arguments passed by reference)."
      },
      jp: {
        title: "「純粋関数（Pure Function）」とは何ですか？",
        body: "純粋関数の2つの主な特徴は何ですか？",
        solution: "**純粋関数（Pure Function）** は次の関数です。1. 同じ入力が与えられたときに常に **同じ結果** を返す（決定論的である）。2. **副作用がない** （グローバル変数や参照渡しされた引数などの外部の状態を変更しない）。"
      },
      vi: {
        title: "'Pure Function' (Hàm thuần khiết) là gì?",
        body: "Hai đặc điểm chính của một hàm thuần khiết là gì?",
        solution: "Một **Pure Function** là một hàm: 1. Luôn trả về **cùng một kết quả** khi được cung cấp cùng một đầu vào (nó có tính xác định). 2. **Không có tác dụng phụ** (nó không sửa đổi trạng thái bên ngoài, như biến toàn cục hoặc đối số được truyền qua tham chiếu)."
      }
    }
  },
  {
    _id: "js-f-048",
    difficulty: "fresher",
    tags: ["asynchronous", "setTimeout"],
    content: {
      en: {
        title: "Is `setTimeout()` a synchronous or asynchronous operation?",
        body: "What is its return value?",
        solution: "`setTimeout()` is an **asynchronous** function. It executes a function after a specified delay, allowing the rest of the script to continue. Its return value is a **timeout ID** (a positive integer) which can be used with `clearTimeout()`."
      },
      jp: {
        title: "`setTimeout()` は同期操作ですか、それとも非同期操作ですか？",
        body: "その戻り値は何ですか？",
        solution: "`setTimeout()` は **非同期** 関数です。指定された遅延の後に機能を実行し、スクリプトの残りの部分が続行できるようにします。その戻り値は、`clearTimeout()` で使用できる **タイムアウトID** （正の整数）です。"
      },
      vi: {
        title: "`setTimeout()` là thao tác đồng bộ (synchronous) hay bất đồng bộ (asynchronous)?",
        body: "Giá trị trả về của nó là gì?",
        solution: "`setTimeout()` là một hàm **bất đồng bộ** (asynchronous). Nó thực thi một hàm sau một độ trễ đã chỉ định, cho phép phần còn lại của script tiếp tục. Giá trị trả về của nó là một **ID timeout** (một số nguyên dương) có thể được sử dụng với `clearTimeout()`."
      }
    }
  },
  {
    _id: "js-f-049",
    difficulty: "fresher",
    tags: ["closure", "memory-leak"],
    content: {
      en: {
        title: "What is one potential memory-related drawback of Closures?",
        body: "Briefly explain the mechanism.",
        solution: "A potential drawback is that the inner function keeps a **reference to the outer function's scope**, which prevents the outer scope's variables from being **garbage collected**. If not managed correctly, this can lead to **unnecessary memory consumption** or 'memory leaks'."
      },
      jp: {
        title: "クロージャの潜在的なメモリ関連の欠点の1つは何ですか？",
        body: "そのメカニズムを簡単に説明してください。",
        solution: "潜在的な欠点は、内側の関数が **外側の関数のスコープへの参照** を保持することであり、これにより外側のスコープの変数が **ガベージコレクション** されるのを防ぎます。正しく管理されないと、これは **不要なメモリ消費** や「メモリリーク」につながる可能性があります。"
      },
      vi: {
        title: "Một nhược điểm tiềm tàng liên quan đến bộ nhớ của Closures là gì?",
        body: "Giải thích ngắn gọn cơ chế này.",
        solution: "Một nhược điểm tiềm tàng là hàm bên trong giữ một **tham chiếu đến phạm vi của hàm bên ngoài**, điều này ngăn các biến của phạm vi bên ngoài bị **thu gom rác (garbage collected)**. Nếu không được quản lý đúng cách, điều này có thể dẫn đến **tiêu thụ bộ nhớ không cần thiết** hoặc 'rò rỉ bộ nhớ' (memory leaks)."
      }
    }
  },
  {
    _id: "js-f-050",
    difficulty: "fresher",
    tags: ["DOM", "createElement", "appendChild"],
    content: {
      en: {
        title: "What is the process to dynamically create and insert a new HTML element using the DOM?",
        body: "Name the two primary methods used.",
        solution: "The process involves two main steps: 1. Use **`document.createElement(tagName)`** to create the new element node. 2. Use **`.appendChild(childNode)`** (or similar methods like `.insertBefore()`) on an existing parent element to insert the new element into the DOM tree."
      },
      jp: {
        title: "DOMを使用して新しいHTML要素を動的に作成および挿入するプロセスは何ですか？",
        body: "使用される2つの主要なメソッドの名前を挙げてください。",
        solution: "プロセスには主に2つのステップがあります。1. **`document.createElement(tagName)`** を使用して新しい要素ノードを作成します。2. 既存の親要素に対して **`.appendChild(childNode)`** （または `.insertBefore()` のような類似のメソッド）を使用して、新しい要素をDOMツリーに挿入します。"
      },
      vi: {
        title: "Quá trình tạo và chèn một phần tử HTML mới một cách động bằng DOM là gì?",
        body: "Kể tên hai phương thức chính được sử dụng.",
        solution: "Quá trình này bao gồm hai bước chính: 1. Sử dụng **`document.createElement(tagName)`** để tạo nút phần tử mới. 2. Sử dụng **`.appendChild(childNode)`** (hoặc các phương thức tương tự như `.insertBefore()`) trên một phần tử cha hiện có để chèn phần tử mới vào cây DOM."
      }
    }
  }
];