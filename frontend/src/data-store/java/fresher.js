export const javaFresherQuestions = [
  {
    _id: "java-f-001",
    difficulty: "fresher",
    tags: ["basic", "platform"],
    content: {
      en: {
        title: "What is JVM?",
        body: "What does JVM stand for and what is its main function?",
        solution: "JVM stands for **Java Virtual Machine**. Its main function is to convert Java bytecode (compiled .class files) into machine language and execute it, making Java platform-independent (Write Once, Run Anywhere)."
      },
      jp: {
        title: "JVMとは？",
        body: "JVMは何の略で、その主な機能は何ですか？",
        solution: "JVMは**Java Virtual Machine**の略です。その主な機能は、Javaバイトコード（コンパイルされた.classファイル）を機械語に変換して実行することであり、Javaをプラットフォーム非依存にします（Write Once, Run Anywhere）。"
      },
      vi: {
        title: "JVM là gì?",
        body: "JVM là viết tắt của từ gì và chức năng chính của nó là gì?",
        solution: "JVM là viết tắt của **Java Virtual Machine**. Chức năng chính của nó là chuyển đổi mã byte Java (các file .class đã được biên dịch) thành ngôn ngữ máy và thực thi nó, làm cho Java trở nên độc lập với nền tảng (Write Once, Run Anywhere)."
      }
    }
  },
  {
    _id: "java-f-002",
    difficulty: "fresher",
    tags: ["jdk", "jre"],
    content: {
      en: {
        title: "JDK vs JRE",
        body: "What is the difference between JDK and JRE?",
        solution: "**JDK** (Java Development Kit) is a full set of tools for developing, compiling, and running Java applications (includes JRE). **JRE** (Java Runtime Environment) is only for running Java applications (includes JVM and standard libraries)."
      },
      jp: {
        title: "JDK vs JRE",
        body: "JDKとJREの違いは何ですか？",
        solution: "**JDK**（Java Development Kit）は、Javaアプリケーションを開発、コンパイル、および実行するためのツール一式です（JREを含む）。**JRE**（Java Runtime Environment）は、Javaアプリケーションを実行するためだけのもので（JVMと標準ライブラリを含む）。"
      },
      vi: {
        title: "JDK và JRE",
        body: "Sự khác biệt giữa JDK và JRE là gì?",
        solution: "**JDK** (Java Development Kit) là một bộ công cụ đầy đủ để phát triển, biên dịch và chạy các ứng dụng Java (bao gồm JRE). **JRE** (Java Runtime Environment) chỉ dành cho việc chạy các ứng dụng Java (bao gồm JVM và các thư viện chuẩn)."
      }
    }
  },
  {
    _id: "java-f-003",
    difficulty: "fresher",
    tags: ["oop", "class", "object"],
    content: {
      en: {
        title: "Class vs Object",
        body: "In Java, what is the key difference between a Class and an Object?",
        solution: "A **Class** is a blueprint or template from which objects are created (it doesn't consume memory). An **Object** is an instance of a class (it's a real-world entity that consumes memory)."
      },
      jp: {
        title: "クラス vs オブジェクト",
        body: "Javaにおいて、ClassとObjectの主な違いは何ですか？",
        solution: "**Class**はオブジェクトが作成される設計図またはテンプレートです（メモリを消費しません）。**Object**はクラスのインスタンスです（メモリを消費する現実世界のエンティティです）。"
      },
      vi: {
        title: "Class và Object",
        body: "Trong Java, sự khác biệt chính giữa Class và Object là gì?",
        solution: "**Class** là một bản thiết kế hoặc khuôn mẫu để từ đó các đối tượng được tạo ra (nó không tiêu thụ bộ nhớ). **Object** là một thể hiện (instance) của một class (nó là một thực thể trong thế giới thực tiêu thụ bộ nhớ)."
      }
    }
  },
  {
    _id: "java-f-004",
    difficulty: "fresher",
    tags: ["data-type", "primitive"],
    content: {
      en: {
        title: "Java Primitive Types",
        body: "Name at least four of the eight primitive data types in Java.",
        solution: "The eight primitive data types are: **boolean, char, byte, short, int, long, float,** and **double**."
      },
      jp: {
        title: "Javaのプリミティブ型",
        body: "Javaの8つのプリミティブデータ型のうち、少なくとも4つを挙げてください。",
        solution: "8つのプリミティブデータ型は、**boolean, char, byte, short, int, long, float,** および **double** です。"
      },
      vi: {
        title: "Các kiểu dữ liệu Primitive trong Java",
        body: "Kể tên ít nhất bốn trong tám kiểu dữ liệu primitive (nguyên thủy) trong Java.",
        solution: "Tám kiểu dữ liệu primitive là: **boolean, char, byte, short, int, long, float,** và **double**."
      }
    }
  },
  {
    _id: "java-f-005",
    difficulty: "fresher",
    tags: ["string", "immutability"],
    content: {
      en: {
        title: "String Immutability",
        body: "Is the `String` object immutable or mutable in Java? What does that mean?",
        solution: "The `String` object is **immutable**. This means that once a `String` object is created, its content cannot be changed. Any operation that appears to modify a String (like concatenation) actually creates a new String object."
      },
      jp: {
        title: "Stringの不変性",
        body: "Javaで `String` オブジェクトは不変（immutable）ですか、それとも可変（mutable）ですか？それは何を意味しますか？",
        solution: "`String`オブジェクトは**不変（immutable）**です。これは、一度`String`オブジェクトが作成されると、その内容は変更できないことを意味します。Stringを変更するように見える操作（連結など）は、実際には新しいStringオブジェクトを作成します。"
      },
      vi: {
        title: "Tính bất biến của String",
        body: "Đối tượng `String` trong Java là bất biến (immutable) hay có thể thay đổi (mutable)? Điều đó có nghĩa là gì?",
        solution: "Đối tượng `String` là **bất biến (immutable)**. Điều này có nghĩa là một khi đối tượng `String` được tạo, nội dung của nó không thể thay đổi. Bất kỳ thao tác nào có vẻ sửa đổi String (như nối chuỗi) thực ra đều tạo ra một đối tượng String mới."
      }
    }
  },
  {
    _id: "java-f-006",
    difficulty: "fresher",
    tags: ["method", "main"],
    content: {
      en: {
        title: "The `main` method",
        body: "Explain the purpose and required signature of the `main` method in a Java application.",
        solution: "The `main` method is the **starting point** for the JVM to begin executing a Java program. Its required signature is: `public static void main(String[] args)`."
      },
      jp: {
        title: "`main` メソッド",
        body: "Javaアプリケーションにおける`main`メソッドの目的と必須のシグネチャを説明してください。",
        solution: "`main`メソッドは、JVMがJavaプログラムの実行を開始するための**開始点**です。必須のシグネチャは、`public static void main(String[] args)`です。"
      },
      vi: {
        title: "Phương thức `main`",
        body: "Giải thích mục đích và chữ ký (signature) bắt buộc của phương thức `main` trong một ứng dụng Java.",
        solution: "Phương thức `main` là **điểm khởi đầu** để JVM bắt đầu thực thi một chương trình Java. Chữ ký bắt buộc của nó là: `public static void main(String[] args)`."
      }
    }
  },
  {
    _id: "java-f-007",
    difficulty: "fresher",
    tags: ["access-modifier", "basic"],
    content: {
      en: {
        title: "Four Access Modifiers",
        body: "Name the four access modifiers available in Java.",
        solution: "The four access modifiers are: **public**, **protected**, **default** (no keyword, also called package-private), and **private**."
      },
      jp: {
        title: "4つのアクセス修飾子",
        body: "Javaで利用可能な4つのアクセス修飾子を挙げてください。",
        solution: "4つのアクセス修飾子は、**public**、**protected**、**default**（キーワードなし、パッケージプライベートとも呼ばれます）、および **private** です。"
      },
      vi: {
        title: "Bốn Access Modifier",
        body: "Kể tên bốn access modifier (bổ từ truy cập) có sẵn trong Java.",
        solution: "Bốn access modifier là: **public**, **protected**, **default** (không có từ khóa, còn được gọi là package-private), và **private**."
      }
    }
  },
  {
    _id: "java-f-008",
    difficulty: "fresher",
    tags: ["oop", "inheritance"],
    content: {
      en: {
        title: "Single Inheritance",
        body: "Does Java support multiple inheritance of classes? If not, what does it use instead?",
        solution: "No, Java **does not support multiple inheritance of classes** (a class cannot extend more than one class). It uses **Interfaces** to achieve the concept of multiple inheritance of type and behavior."
      },
      jp: {
        title: "単一継承",
        body: "Javaはクラスの多重継承をサポートしていますか？サポートしていない場合、代わりに何を使用しますか？",
        solution: "いいえ、Javaは**クラスの多重継承をサポートしていません**（クラスは複数のクラスを拡張できません）。型と振る舞いの多重継承の概念を達成するために**インターフェース**を使用します。"
      },
      vi: {
        title: "Kế thừa đơn lẻ",
        body: "Java có hỗ trợ đa kế thừa (multiple inheritance) của các class không? Nếu không, nó sử dụng gì thay thế?",
        solution: "Không, Java **không hỗ trợ đa kế thừa của các class** (một class không thể `extend` nhiều hơn một class). Nó sử dụng **Interfaces** để đạt được khái niệm đa kế thừa về kiểu và hành vi."
      }
    }
  },
  {
    _id: "java-f-009",
    difficulty: "fresher",
    tags: ["operator", "comparison"],
    content: {
      en: {
        title: "== vs .equals()",
        body: "What is the primary difference between the `==` operator and the `.equals()` method when comparing two objects in Java?",
        solution: "The `==` operator compares **memory addresses** (references), checking if two variables point to the *exact same object*. The `.equals()` method (if properly overridden) compares the **content or state** of the objects."
      },
      jp: {
        title: "== vs .equals()",
        body: "Javaで2つのオブジェクトを比較する際、`==`演算子と`.equals()`メソッドの主な違いは何ですか？",
        solution: "`==`演算子は**メモリのアドレス**（参照）を比較し、2つの変数が*まったく同じオブジェクト*を指しているかどうかをチェックします。`.equals()`メソッド（適切にオーバーライドされている場合）は、オブジェクトの**内容または状態**を比較します。"
      },
      vi: {
        title: "== và .equals()",
        body: "Sự khác biệt chính giữa toán tử `==` và phương thức `.equals()` khi so sánh hai đối tượng trong Java là gì?",
        solution: "Toán tử `==` so sánh **địa chỉ bộ nhớ** (tham chiếu), kiểm tra xem hai biến có trỏ đến *cùng một đối tượng* hay không. Phương thức `.equals()` (nếu được ghi đè đúng cách) so sánh **nội dung hoặc trạng thái** của các đối tượng."
      }
    }
  },
  {
    _id: "java-f-010",
    difficulty: "fresher",
    tags: ["oop", "constructor"],
    content: {
      en: {
        title: "Constructor definition",
        body: "What is a constructor in Java and what is its role?",
        solution: "A constructor is a special type of method that is automatically called when an object of a class is created (instantiated). Its role is to **initialize the state** (fields/properties) of the new object."
      },
      jp: {
        title: "コンストラクターの定義",
        body: "Javaにおけるコンストラクターとは何ですか、またその役割は何ですか？",
        solution: "コンストラクターは、クラスのオブジェクトが作成されるとき（インスタンス化されるとき）に自動的に呼び出される特別な種類のメソッドです。その役割は、新しいオブジェクトの**状態**（フィールド/プロパティ）を**初期化する**ことです。"
      },
      vi: {
        title: "Định nghĩa Constructor",
        body: "Constructor trong Java là gì và vai trò của nó là gì?",
        solution: "Constructor là một loại phương thức đặc biệt được gọi tự động khi một đối tượng của một class được tạo (khởi tạo). Vai trò của nó là **khởi tạo trạng thái** (các trường/thuộc tính) của đối tượng mới."
      }
    }
  },
  {
    _id: "java-f-011",
    difficulty: "fresher",
    tags: ["encapsulation", "oop"],
    content: {
      en: {
        title: "Encapsulation concept",
        body: "Explain the concept of Encapsulation in Java and how it is typically achieved.",
        solution: "Encapsulation is the mechanism of **binding data (variables) and the methods (code) that manipulate the data together** into a single unit (class). It is typically achieved by declaring variables as **private** and providing **public getter and setter methods** to access and modify them."
      },
      jp: {
        title: "カプセル化の概念",
        body: "Javaにおけるカプセル化の概念と、それが一般的にどのように達成されるかを説明してください。",
        solution: "カプセル化は、**データ（変数）とデータを操作するメソッド（コード）を単一のユニット（クラス）にまとめてバインドする**メカニズムです。一般的に、変数を**private**として宣言し、それらにアクセスおよび変更するための**publicなgetterおよびsetterメソッド**を提供することで達成されます。"
      },
      vi: {
        title: "Khái niệm Encapsulation",
        body: "Giải thích khái niệm Encapsulation (Đóng gói) trong Java và cách nó thường được đạt được.",
        solution: "Encapsulation là cơ chế **gắn kết dữ liệu (biến) và các phương thức (code) thao tác với dữ liệu lại với nhau** thành một đơn vị duy nhất (class). Nó thường được đạt được bằng cách khai báo các biến là **private** và cung cấp các **phương thức getter và setter công khai (public)** để truy cập và sửa đổi chúng."
      }
    }
  },
  {
    _id: "java-f-012",
    difficulty: "fresher",
    tags: ["keyword", "final"],
    content: {
      en: {
        title: "`final` keyword use cases",
        body: "What are the three main entities that the `final` keyword can be applied to in Java, and what does it mean in each case?",
        solution: "`final` can be applied to: 1. **Variable**: The value can only be assigned once (constant). 2. **Method**: The method cannot be overridden by subclasses. 3. **Class**: The class cannot be inherited (cannot be a parent class)."
      },
      jp: {
        title: "`final`キーワードの使用例",
        body: "Javaで`final`キーワードを適用できる主な3つのエンティティは何ですか、またそれぞれの場合でそれは何を意味しますか？",
        solution: "`final`は以下に適用できます: 1. **変数**: 値は一度だけ割り当てることができます（定数）。 2. **メソッド**: サブクラスによってオーバーライドすることはできません。 3. **クラス**: 継承することはできません（親クラスになることはできません）。"
      },
      vi: {
        title: "Các trường hợp sử dụng từ khóa `final`",
        body: "Ba thực thể chính mà từ khóa `final` có thể được áp dụng trong Java là gì, và nó có ý nghĩa gì trong mỗi trường hợp?",
        solution: "`final` có thể được áp dụng cho: 1. **Biến**: Giá trị chỉ có thể được gán một lần (hằng số). 2. **Phương thức**: Phương thức không thể bị các lớp con ghi đè (override). 3. **Class**: Class không thể được kế thừa (không thể là class cha)."
      }
    }
  },
  {
    _id: "java-f-013",
    difficulty: "fresher",
    tags: ["keyword", "static"],
    content: {
      en: {
        title: "`static` keyword basics",
        body: "What is the main characteristic of a member (variable or method) declared with the `static` keyword?",
        solution: "A `static` member **belongs to the class itself**, rather than to any specific instance of the class. This means there is only one copy of the static member shared among all objects of that class."
      },
      jp: {
        title: "`static`キーワードの基本",
        body: "`static`キーワードで宣言されたメンバー（変数またはメソッド）の主な特徴は何ですか？",
        solution: "`static`メンバーは、クラスの特定のインスタンスではなく、**クラス自体に属します**。これは、そのクラスのすべてのオブジェクト間で共有される静的メンバーのコピーが1つだけ存在することを意味します。"
      },
      vi: {
        title: "Cơ bản về từ khóa `static`",
        body: "Đặc điểm chính của một thành viên (biến hoặc phương thức) được khai báo bằng từ khóa `static` là gì?",
        solution: "Một thành viên `static` **thuộc về chính class đó**, chứ không phải thuộc về bất kỳ thể hiện cụ thể nào của class. Điều này có nghĩa là chỉ có một bản sao của thành viên static được chia sẻ giữa tất cả các đối tượng của class đó."
      }
    }
  },
  {
    _id: "java-f-014",
    difficulty: "fresher",
    tags: ["control-flow", "loop"],
    content: {
      en: {
        title: "Loop types",
        body: "Name the three main types of loop structures available in Java.",
        solution: "The three main loop structures are: **for loop** (including enhanced for loop), **while loop**, and **do-while loop**."
      },
      jp: {
        title: "ループの種類",
        body: "Javaで利用可能な3つの主要なループ構造を挙げてください。",
        solution: "3つの主要なループ構造は、**forループ**（拡張forループを含む）、**whileループ**、および **do-whileループ** です。"
      },
      vi: {
        title: "Các loại vòng lặp",
        body: "Kể tên ba loại cấu trúc vòng lặp chính có sẵn trong Java.",
        solution: "Ba cấu trúc vòng lặp chính là: **vòng lặp for** (bao gồm enhanced for loop), **vòng lặp while**, và **vòng lặp do-while**."
      }
    }
  },
  {
    _id: "java-f-015",
    difficulty: "fresher",
    tags: ["array", "basic"],
    content: {
      en: {
        title: "Array fixed size",
        body: "What characteristic of arrays in Java makes them less flexible than `ArrayList`?",
        solution: "Arrays in Java have a **fixed size**; their size must be defined upon initialization and cannot be changed afterward. `ArrayList` can dynamically grow or shrink."
      },
      jp: {
        title: "配列の固定サイズ",
        body: "Javaの配列が `ArrayList` よりも柔軟性に欠けるのは、どのような特徴があるためですか？",
        solution: "Javaの配列は**固定サイズ**です。サイズは初期化時に定義する必要があり、後で変更することはできません。`ArrayList`は動的にサイズを増減できます。"
      },
      vi: {
        title: "Kích thước cố định của Array",
        body: "Đặc điểm nào của mảng (array) trong Java khiến chúng kém linh hoạt hơn so với `ArrayList`?",
        solution: "Mảng trong Java có **kích thước cố định**; kích thước của chúng phải được xác định khi khởi tạo và không thể thay đổi sau đó. `ArrayList` có thể tự động tăng hoặc giảm kích thước."
      }
    }
  },
  {
    _id: "java-f-016",
    difficulty: "fresher",
    tags: ["type-casting", "primitive"],
    content: {
      en: {
        title: "Widening vs Narrowing",
        body: "What is the difference between Widening (Implicit) and Narrowing (Explicit) type casting?",
        solution: "**Widening** is automatic and safe (e.g., int to long). **Narrowing** requires explicit casting (e.g., (int) myLong) and may result in data loss."
      },
      jp: {
        title: "拡大変換 vs 縮小変換",
        body: "拡大変換（暗黙的）と縮小変換（明示的）の型キャストの違いは何ですか？",
        solution: "**拡大変換**は自動的で安全です（例：intからlong）。**縮小変換**は明示的なキャストが必要です（例：（int）myLong）そしてデータ損失を引き起こす可能性があります。"
      },
      vi: {
        title: "Widening và Narrowing",
        body: "Sự khác biệt giữa Widening (Ngầm định) và Narrowing (Tường minh) type casting là gì?",
        solution: "**Widening** là tự động và an toàn (ví dụ: int sang long). **Narrowing** yêu cầu ép kiểu tường minh (ví dụ: `(int) myLong`) và có thể dẫn đến mất dữ liệu."
      }
    }
  },
  {
    _id: "java-f-017",
    difficulty: "fresher",
    tags: ["string", "buffer"],
    content: {
      en: {
        title: "String vs StringBuilder",
        body: "If you need to perform frequent modifications (like appending) to a string, should you use `String` or `StringBuilder`? Why?",
        solution: "You should use **`StringBuilder`**. Since `String` is immutable, each modification creates a new object, which is inefficient. `StringBuilder` is mutable and modifies the content in place, improving performance."
      },
      jp: {
        title: "String vs StringBuilder",
        body: "文字列に頻繁な変更（追加など）を実行する必要がある場合、`String`と`StringBuilder`のどちらを使用すべきですか？その理由は何ですか？",
        solution: "**`StringBuilder`**を使用すべきです。`String`は不変であるため、変更のたびに新しいオブジェクトが作成され、非効率的です。`StringBuilder`は可変であり、コンテンツをその場で変更するため、パフォーマンスが向上します。"
      },
      vi: {
        title: "String và StringBuilder",
        body: "Nếu bạn cần thực hiện các sửa đổi thường xuyên (như nối thêm) vào một chuỗi, bạn nên sử dụng `String` hay `StringBuilder`? Tại sao?",
        solution: "Bạn nên sử dụng **`StringBuilder`**. Vì `String` là bất biến, mỗi lần sửa đổi sẽ tạo ra một đối tượng mới, điều này không hiệu quả. `StringBuilder` có thể thay đổi và sửa đổi nội dung tại chỗ, cải thiện hiệu suất."
      }
    }
  },
  {
    _id: "java-f-018",
    difficulty: "fresher",
    tags: ["variable", "scope"],
    content: {
      en: {
        title: "Local vs Instance Variables",
        body: "What is the primary difference in scope between a local variable and an instance variable?",
        solution: "A **local variable** is declared inside a method and its scope is limited to that method. An **instance variable** is declared inside a class but outside any method, and its scope is the entire object (accessible by all non-static methods of the class)."
      },
      jp: {
        title: "ローカル変数 vs インスタンス変数",
        body: "ローカル変数とインスタンス変数のスコープにおける主な違いは何ですか？",
        solution: "**ローカル変数**はメソッド内で宣言され、そのスコープはそのメソッドに限定されます。**インスタンス変数**はクラス内で宣言されますが、どのメソッドの外側で、そのスコープはオブジェクト全体です（クラスのすべての非静的メソッドからアクセス可能）。"
      },
      vi: {
        title: "Biến Local và Biến Instance",
        body: "Sự khác biệt chính về phạm vi (scope) giữa biến local và biến instance là gì?",
        solution: "Một **biến local** được khai báo bên trong một phương thức và phạm vi của nó bị giới hạn trong phương thức đó. Một **biến instance** được khai báo bên trong một class nhưng bên ngoài bất kỳ phương thức nào, và phạm vi của nó là toàn bộ đối tượng (có thể truy cập được bởi tất cả các phương thức không tĩnh của class)."
      }
    }
  },
  {
    _id: "java-f-019",
    difficulty: "fresher",
    tags: ["wrapper", "primitive"],
    content: {
      en: {
        title: "Wrapper classes",
        body: "What is the primary purpose of Java Wrapper classes (e.g., `Integer` for `int`)?",
        solution: "Wrapper classes provide a way to use primitive data types (which are not objects) as **objects**. This is necessary for using primitives in collections (like `ArrayList`), and they also provide useful methods (e.g., parsing strings to numbers)."
      },
      jp: {
        title: "ラッパークラス",
        body: "Javaのラッパークラス（例：`int`に対する`Integer`）の主な目的は何ですか？",
        solution: "ラッパークラスは、プリミティブデータ型（オブジェクトではない）を**オブジェクト**として使用する方法を提供します。これは、コレクション（`ArrayList`など）でプリミティブを使用するために必要であり、便利なメソッド（例：文字列を数値に解析する）も提供します。"
      },
      vi: {
        title: "Wrapper Class",
        body: "Mục đích chính của Java Wrapper Class (ví dụ: `Integer` cho `int`) là gì?",
        solution: "Wrapper Class cung cấp một cách để sử dụng các kiểu dữ liệu primitive (không phải là đối tượng) dưới dạng **đối tượng**. Điều này là cần thiết để sử dụng các primitive trong các collection (như `ArrayList`), và chúng cũng cung cấp các phương thức hữu ích (ví dụ: phân tích chuỗi thành số)."
      }
    }
  },
  {
    _id: "java-f-020",
    difficulty: "fresher",
    tags: ["autoboxing", "unboxing"],
    content: {
      en: {
        title: "Autoboxing and Unboxing",
        body: "Briefly explain the concepts of Autoboxing and Unboxing in Java.",
        solution: "**Autoboxing** is the automatic conversion that the Java compiler makes between the primitive types and their corresponding wrapper classes (e.g., `int` to `Integer`). **Unboxing** is the reverse operation (e.g., `Integer` to `int`)."
      },
      jp: {
        title: "オートボクシングとアンボクシング",
        body: "Javaにおけるオートボクシングとアンボクシングの概念を簡単に説明してください。",
        solution: "**オートボクシング**は、Javaコンパイラがプリミティブ型とその対応するラッパークラスの間で行う自動変換です（例：`int`から`Integer`へ）。**アンボクシング**は、その逆の操作です（例：`Integer`から`int`へ）。"
      },
      vi: {
        title: "Autoboxing và Unboxing",
        body: "Giải thích ngắn gọn các khái niệm Autoboxing và Unboxing trong Java.",
        solution: "**Autoboxing** là sự chuyển đổi tự động mà trình biên dịch Java thực hiện giữa các kiểu primitive và các Wrapper Class tương ứng của chúng (ví dụ: `int` sang `Integer`). **Unboxing** là thao tác ngược lại (ví dụ: `Integer` sang `int`)."
      }
    }
  },
  {
    _id: "java-f-021",
    difficulty: "fresher",
    tags: ["garbage-collection", "memory"],
    content: {
      en: {
        title: "Garbage Collection role",
        body: "What is the role of Garbage Collection in Java?",
        solution: "Garbage Collection is the automatic memory management system that **reclaims memory** occupied by objects that are no longer being used (referenced) by the program. This frees the programmer from manual memory deallocation."
      },
      jp: {
        title: "ガベージコレクションの役割",
        body: "Javaにおけるガベージコレクションの役割は何ですか？",
        solution: "ガベージコレクションは、プログラムによって使用されなくなった（参照されなくなった）オブジェクトが占有しているメモリを**再利用する**自動メモリ管理システムです。これにより、プログラマは手動のメモリ解放から解放されます。"
      },
      vi: {
        title: "Vai trò của Garbage Collection",
        body: "Vai trò của Garbage Collection (Thu gom rác) trong Java là gì?",
        solution: "Garbage Collection là hệ thống quản lý bộ nhớ tự động, có nhiệm vụ **thu hồi bộ nhớ** bị chiếm bởi các đối tượng không còn được chương trình sử dụng (tham chiếu). Điều này giúp lập trình viên không cần phải tự giải phóng bộ nhớ."
      }
    }
  },
  {
    _id: "java-f-022",
    difficulty: "fresher",
    tags: ["keyword", "this"],
    content: {
      en: {
        title: "`this` keyword purpose",
        body: "What is the primary purpose of the `this` keyword in Java?",
        solution: "The `this` keyword is a reference variable that refers to the **current object**. It is primarily used to resolve ambiguity when instance variable names are shadowed by local variables (e.g., in a constructor or setter method)."
      },
      jp: {
        title: "`this`キーワードの目的",
        body: "Javaにおける`this`キーワードの主な目的は何ですか？",
        solution: "`this`キーワードは、**現在のオブジェクト**を参照する参照変数です。主に、インスタンス変数名がローカル変数によって隠蔽される場合（例：コンストラクターまたはセッターメソッド内）に曖昧さを解決するために使用されます。"
      },
      vi: {
        title: "Mục đích của từ khóa `this`",
        body: "Mục đích chính của từ khóa `this` trong Java là gì?",
        solution: "Từ khóa `this` là một biến tham chiếu trỏ đến **đối tượng hiện tại**. Nó chủ yếu được sử dụng để giải quyết sự mơ hồ khi tên biến instance bị che khuất bởi các biến local (ví dụ: trong constructor hoặc phương thức setter)."
      }
    }
  },
  {
    _id: "java-f-023",
    difficulty: "fresher",
    tags: ["keyword", "super"],
    content: {
      en: {
        title: "`super` keyword purpose",
        body: "What is the primary purpose of the `super` keyword in a subclass?",
        solution: "The `super` keyword is a reference variable used inside a subclass to refer to the **immediate parent class object**. It is mainly used to: 1. Call the parent class's constructor. 2. Access parent class members (variables/methods) that are hidden/overridden by the subclass."
      },
      jp: {
        title: "`super`キーワードの目的",
        body: "サブクラスにおける`super`キーワードの主な目的は何ですか？",
        solution: "`super`キーワードは、サブクラス内で**直前の親クラスのオブジェクト**を参照するために使用される参照変数です。主な使用目的は次のとおりです: 1. 親クラスのコンストラクターを呼び出す。 2. サブクラスによって隠蔽/オーバーライドされた親クラスのメンバー（変数/メソッド）にアクセスする。"
      },
      vi: {
        title: "Mục đích của từ khóa `super`",
        body: "Mục đích chính của từ khóa `super` trong một class con (subclass) là gì?",
        solution: "Từ khóa `super` là một biến tham chiếu được sử dụng bên trong một class con để tham chiếu đến **đối tượng class cha trực tiếp**. Nó chủ yếu được sử dụng để: 1. Gọi constructor của class cha. 2. Truy cập các thành viên (biến/phương thức) của class cha bị ẩn/ghi đè bởi class con."
      }
    }
  },
  {
    _id: "java-f-024",
    difficulty: "fresher",
    tags: ["method-overloading", "oop"],
    content: {
      en: {
        title: "Method Overloading",
        body: "What is Method Overloading in Java and what must be different between the overloaded methods?",
        solution: "Method Overloading is when a class has **multiple methods with the same name** but different **parameter lists** (different number or types of arguments). The return type may be the same or different."
      },
      jp: {
        title: "メソッドのオーバーロード",
        body: "Javaにおけるメソッドのオーバーロードとは何ですか、またオーバーロードされたメソッド間で何が異なっている必要がありますか？",
        solution: "メソッドのオーバーロードとは、クラスが**同じ名前**を持つが、**パラメーターリスト**が異なる（引数の数または型が異なる）**複数のメソッド**を持つことです。戻り値の型は同じでも異なっていても構いません。"
      },
      vi: {
        title: "Method Overloading",
        body: "Method Overloading trong Java là gì và điều gì phải khác biệt giữa các phương thức được overload?",
        solution: "Method Overloading là khi một class có **nhiều phương thức cùng tên** nhưng danh sách **tham số** khác nhau (số lượng hoặc kiểu đối số khác nhau). Kiểu trả về có thể giống hoặc khác."
      }
    }
  },
  {
    _id: "java-f-025",
    difficulty: "fresher",
    tags: ["method-overriding", "oop"],
    content: {
      en: {
        title: "Method Overriding",
        body: "What is Method Overriding in Java and where does it occur?",
        solution: "Method Overriding is when a subclass provides a **specific implementation** for a method that is already defined in its parent class. It occurs in an **inheritance relationship** (subclass overriding a superclass method)."
      },
      jp: {
        title: "メソッドのオーバーライド",
        body: "Javaにおけるメソッドのオーバーライドとは何ですか、またそれはどこで発生しますか？",
        solution: "メソッドのオーバーライドとは、サブクラスが、親クラスで既に定義されているメソッドに対して**特定の独自の実装**を提供することです。これは**継承関係**で発生します（サブクラスがスーパークラスのメソッドをオーバーライドする）。"
      },
      vi: {
        title: "Method Overriding",
        body: "Method Overriding trong Java là gì và nó xảy ra ở đâu?",
        solution: "Method Overriding là khi một class con cung cấp một **triển khai cụ thể** cho một phương thức đã được định nghĩa trong class cha của nó. Nó xảy ra trong một **mối quan hệ kế thừa** (class con ghi đè phương thức của class cha)."
      }
    }
  },
  {
    _id: "java-f-026",
    difficulty: "fresher",
    tags: ["abstract", "class"],
    content: {
      en: {
        title: "Abstract Class definition",
        body: "What is an `abstract` class and can you create an object (instance) of it?",
        solution: "An `abstract` class is a class that is declared with the `abstract` keyword and may contain abstract methods (methods without implementation). You **cannot create an object (instance) of an abstract class**; it must be subclassed, and the subclass must implement all abstract methods."
      },
      jp: {
        title: "抽象クラスの定義",
        body: "抽象クラス（`abstract` class）とは何ですか、またそのオブジェクト（インスタンス）を作成できますか？",
        solution: "抽象クラスは、`abstract`キーワードで宣言されたクラスであり、抽象メソッド（実装のないメソッド）を含む場合があります。**抽象クラスのオブジェクト（インスタンス）を作成することはできません**。サブクラス化する必要があり、サブクラスはすべての抽象メソッドを実装する必要があります。"
      },
      vi: {
        title: "Định nghĩa Abstract Class",
        body: "Abstract class là gì và bạn có thể tạo một đối tượng (instance) từ nó không?",
        solution: "Một `abstract` class là một class được khai báo bằng từ khóa `abstract` và có thể chứa các phương thức trừu tượng (phương thức không có phần thân). Bạn **không thể tạo một đối tượng (instance) của một abstract class**; nó phải được class con kế thừa, và class con đó phải triển khai tất cả các phương thức trừu tượng."
      }
    }
  },
  {
    _id: "java-f-027",
    difficulty: "fresher",
    tags: ["interface", "oop"],
    content: {
      en: {
        title: "Interface purpose",
        body: "What is the primary purpose of an `interface` in Java?",
        solution: "An `interface` is a blueprint of a class. Its primary purpose is to achieve **total abstraction** and support the concept of **multiple inheritance of behavior** (since a class can implement multiple interfaces). It defines a contract that implementing classes must follow."
      },
      jp: {
        title: "インターフェースの目的",
        body: "Javaにおける`interface`の主な目的は何ですか？",
        solution: "インターフェースはクラスの設計図です。その主な目的は、**完全な抽象化**を達成し、**振る舞いの多重継承**の概念をサポートすることです（クラスは複数のインターフェースを実装できるため）。これは、実装するクラスが従う必要のある契約を定義します。"
      },
      vi: {
        title: "Mục đích của Interface",
        body: "Mục đích chính của một `interface` trong Java là gì?",
        solution: "Một `interface` là một bản thiết kế của một class. Mục đích chính của nó là đạt được **sự trừu tượng hóa hoàn toàn** và hỗ trợ khái niệm **đa kế thừa về hành vi** (vì một class có thể implement nhiều interface). Nó định nghĩa một hợp đồng mà các class triển khai phải tuân theo."
      }
    }
  },
  {
    _id: "java-f-028",
    difficulty: "fresher",
    tags: ["exception", "error"],
    content: {
      en: {
        title: "Exception handling keywords",
        body: "Name the four main keywords used for exception handling in Java.",
        solution: "The four main keywords are: **try**, **catch**, **finally**, and **throw**."
      },
      jp: {
        title: "例外処理のキーワード",
        body: "Javaで例外処理に使用される主な4つのキーワードを挙げてください。",
        solution: "主な4つのキーワードは、**try**、**catch**、**finally**、および **throw** です。"
      },
      vi: {
        title: "Các từ khóa xử lý Exception",
        body: "Kể tên bốn từ khóa chính được sử dụng để xử lý ngoại lệ (exception) trong Java.",
        solution: "Bốn từ khóa chính là: **try**, **catch**, **finally**, và **throw**."
      }
    }
  },
  {
    _id: "java-f-029",
    difficulty: "fresher",
    tags: ["exception", "checked"],
    content: {
      en: {
        title: "Checked vs Unchecked Exception",
        body: "What is the key difference between a Checked Exception and an Unchecked Exception in Java?",
        solution: "**Checked Exceptions** are checked at compile time (must be handled or declared with `throws`). **Unchecked Exceptions** (Runtime Exceptions) are not checked at compile time (handling is optional), as they usually indicate programming errors (e.g., `NullPointerException`)."
      },
      jp: {
        title: "チェック済み例外 vs 非チェック例外",
        body: "Javaにおけるチェック済み例外（Checked Exception）と非チェック例外（Unchecked Exception）の主な違いは何ですか？",
        solution: "**チェック済み例外**はコンパイル時にチェックされます（`throws`で処理または宣言する必要があります）。**非チェック例外**（実行時例外）はコンパイル時にチェックされません（処理はオプションです）。これらは通常、プログラミングエラーを示します（例：`NullPointerException`）。"
      },
      vi: {
        title: "Checked và Unchecked Exception",
        body: "Sự khác biệt chính giữa Checked Exception và Unchecked Exception trong Java là gì?",
        solution: "**Checked Exception** được kiểm tra tại thời điểm biên dịch (phải được xử lý hoặc khai báo bằng `throws`). **Unchecked Exception** (Runtime Exception) không được kiểm tra tại thời điểm biên dịch (việc xử lý là tùy chọn), vì chúng thường chỉ ra các lỗi lập trình (ví dụ: `NullPointerException`)."
      }
    }
  },
  {
    _id: "java-f-030",
    difficulty: "fresher",
    tags: ["string", "concat"],
    content: {
      en: {
        title: "String concatenation",
        body: "In Java, what operator is used for string concatenation?",
        solution: "The **`+` (plus)** operator is used for string concatenation. When one of the operands is a `String`, the other operand is converted to a string and then concatenated."
      },
      jp: {
        title: "文字列の連結",
        body: "Javaで、文字列の連結に使用される演算子は何ですか？",
        solution: "**`+`（プラス）**演算子が文字列の連結に使用されます。オペランドのいずれかが`String`である場合、もう一方のオペランドは文字列に変換され、連結されます。"
      },
      vi: {
        title: "Nối chuỗi",
        body: "Trong Java, toán tử nào được sử dụng để nối chuỗi (string concatenation)?",
        solution: "Toán tử **`+` (cộng)** được sử dụng để nối chuỗi. Khi một trong các toán hạng là `String`, toán hạng kia sẽ được chuyển đổi thành chuỗi và sau đó được nối lại."
      }
    }
  },
  {
    _id: "java-f-031",
    difficulty: "fresher",
    tags: ["constructor", "default"],
    content: {
      en: {
        title: "Default Constructor",
        body: "What is a 'Default Constructor' and when does the Java compiler provide one?",
        solution: "A Default Constructor is a parameter-less constructor that the Java compiler provides **automatically** when a class does **not** explicitly define any constructors. It initializes instance variables to their default values."
      },
      jp: {
        title: "デフォルトコンストラクター",
        body: "『デフォルトコンストラクター』とは何ですか、またJavaコンパイラはいつそれを提供しますか？",
        solution: "デフォルトコンストラクターは、クラスが明示的にコンストラクターを**定義しない**場合に、Javaコンパイラが**自動的に**提供するパラメーターなしのコンストラクターです。インスタンス変数をデフォルト値に初期化します。"
      },
      vi: {
        title: "Default Constructor",
        body: "Default Constructor là gì và khi nào trình biên dịch Java cung cấp một cái?",
        solution: "Default Constructor là một constructor không có tham số mà trình biên dịch Java cung cấp **tự động** khi một class **không** khai báo bất kỳ constructor nào một cách rõ ràng. Nó khởi tạo các biến instance về giá trị mặc định của chúng."
      }
    }
  },
  {
    _id: "java-f-032",
    difficulty: "fresher",
    tags: ["oop", "polymorphism"],
    content: {
      en: {
        title: "Polymorphism definition",
        body: "In simple terms, what does Polymorphism mean in Java?",
        solution: "Polymorphism means 'many forms'. In Java, it refers to the ability of a variable, function, or object to **take on multiple forms**. It is typically achieved through Method Overloading (compile-time) and Method Overriding (runtime)."
      },
      jp: {
        title: "ポリモーフィズムの定義",
        body: "簡単に言えば、Javaにおけるポリモーフィズムとは何を意味しますか？",
        solution: "ポリモーフィズムは『多くの形』を意味します。Javaでは、変数、関数、またはオブジェクトが**複数の形をとる**能力を指します。通常、メソッドのオーバーロード（コンパイル時）とメソッドのオーバーライド（実行時）によって達成されます。"
      },
      vi: {
        title: "Định nghĩa Polymorphism",
        body: "Nói một cách đơn giản, Polymorphism (Đa hình) có nghĩa là gì trong Java?",
        solution: "Polymorphism có nghĩa là 'nhiều hình thức'. Trong Java, nó đề cập đến khả năng của một biến, hàm hoặc đối tượng **có nhiều hình thức**. Nó thường được đạt được thông qua Method Overloading (thời gian biên dịch) và Method Overriding (thời gian chạy)."
      }
    }
  },
  {
    _id: "java-f-033",
    difficulty: "fresher",
    tags: ["data-type", "primitive", "memory"],
    content: {
      en: {
        title: "Size of `int` and `char`",
        body: "What is the memory size (in bytes) of the primitive data types `int` and `char` in Java?",
        solution: "`int` occupies **4 bytes** (32 bits). `char` occupies **2 bytes** (16 bits) because Java uses Unicode to represent characters."
      },
      jp: {
        title: "`int`と`char`のサイズ",
        body: "Javaのプリミティブデータ型 `int` と `char` のメモリサイズ（バイト単位）はいくつですか？",
        solution: "`int`は**4バイト**（32ビット）を占めます。`char`は、Javaが文字を表すためにUnicodeを使用するため、**2バイト**（16ビット）を占めます。"
      },
      vi: {
        title: "Kích thước của `int` và `char`",
        body: "Kích thước bộ nhớ (tính bằng byte) của các kiểu dữ liệu primitive `int` và `char` trong Java là bao nhiêu?",
        solution: "`int` chiếm **4 byte** (32 bit). `char` chiếm **2 byte** (16 bit) vì Java sử dụng Unicode để đại diện cho các ký tự."
      }
    }
  },
  {
    _id: "java-f-034",
    difficulty: "fresher",
    tags: ["import", "package"],
    content: {
      en: {
        title: "Package role",
        body: "What is the primary role of a 'package' in Java?",
        solution: "A package is a mechanism used to **group related classes and interfaces together** and to **manage access protection** (the default/package-private access modifier). It helps in avoiding naming conflicts and organizing code."
      },
      jp: {
        title: "パッケージの役割",
        body: "Javaにおける『パッケージ』の主な役割は何ですか？",
        solution: "パッケージは、**関連するクラスとインターフェースをグループ化する**ため、および**アクセス保護を管理する**ため（デフォルト/パッケージプライベートアクセス修飾子）に使用されるメカニズムです。名前の競合を回避し、コードを整理するのに役立ちます。"
      },
      vi: {
        title: "Vai trò của Package",
        body: "Vai trò chính của một 'package' trong Java là gì?",
        solution: "Package là một cơ chế được sử dụng để **nhóm các class và interface có liên quan lại với nhau** và để **quản lý sự bảo vệ truy cập** (access protection - access modifier default/package-private). Nó giúp tránh xung đột tên và tổ chức mã."
      }
    }
  },
  {
    _id: "java-f-035",
    difficulty: "fresher",
    tags: ["string", "pool"],
    content: {
      en: {
        title: "String Pool",
        body: "What is the String Pool in Java and how does it relate to the heap memory?",
        solution: "The String Pool (or String constant pool) is a special storage area in the heap memory where all **String literals** are stored. It is an optimization mechanism to save memory by ensuring that only one copy of each unique string literal exists."
      },
      jp: {
        title: "String Pool",
        body: "JavaのString Poolとは何ですか、またヒープメモリとどのように関連していますか？",
        solution: "String Pool（またはString定数プール）は、すべての**Stringリテラル**が格納されるヒープメモリ内の特別な記憶領域です。これは、一意の文字列リテラルごとに1つのコピーのみが存在するようにすることで、メモリを節約するための最適化メカニズムです。"
      },
      vi: {
        title: "String Pool",
        body: "String Pool trong Java là gì và nó liên quan đến bộ nhớ heap như thế nào?",
        solution: "String Pool (hoặc String constant pool) là một khu vực lưu trữ đặc biệt trong bộ nhớ heap, nơi tất cả các **String literal** được lưu trữ. Nó là một cơ chế tối ưu hóa để tiết kiệm bộ nhớ bằng cách đảm bảo chỉ có một bản sao của mỗi string literal duy nhất tồn tại."
      }
    }
  },
  {
    _id: "java-f-036",
    difficulty: "fresher",
    tags: ["control-flow", "switch"],
    content: {
      en: {
        title: "`break` in `switch`",
        body: "What happens if you omit the `break` statement inside a `switch` case?",
        solution: "If the `break` statement is omitted, the program will execute the code for the matching case and then **fall-through** to execute the code in the subsequent cases until a `break` is encountered or the end of the `switch` block is reached."
      },
      jp: {
        title: "`switch`内の`break`",
        body: "`switch`ケース内の`break`ステートメントを省略するとどうなりますか？",
        solution: "`break`ステートメントが省略された場合、プログラムは一致するケースのコードを実行した後、`break`に遭遇するか`switch`ブロックの終わりに達するまで、**フォールスルー**して後続のケースのコードを実行します。"
      },
      vi: {
        title: "`break` trong `switch`",
        body: "Điều gì xảy ra nếu bạn bỏ qua câu lệnh `break` bên trong một trường hợp (case) của `switch`?",
        solution: "Nếu câu lệnh `break` bị bỏ qua, chương trình sẽ thực thi code cho trường hợp khớp và sau đó **rơi xuống (fall-through)** để thực thi code trong các trường hợp tiếp theo cho đến khi gặp `break` hoặc đạt đến cuối khối `switch`."
      }
    }
  },
  {
    _id: "java-f-037",
    difficulty: "fresher",
    tags: ["oop", "inheritance", "is-a"],
    content: {
      en: {
        title: "Inheritance relationship",
        body: "What kind of relationship is represented by Inheritance in OOP (Java)?",
        solution: "Inheritance represents the **'IS-A'** relationship. For example, a `Dog` IS-A `Animal`, which means the subclass (`Dog`) is a specialized type of the superclass (`Animal`)."
      },
      jp: {
        title: "継承関係",
        body: "OOP（Java）において、継承はどのような種類の関係を表しますか？",
        solution: "継承は**『IS-A』**の関係を表します。たとえば、`Dog`は`Animal`である、つまりサブクラス（`Dog`）はスーパークラス（`Animal`）の特殊なタイプです。"
      },
      vi: {
        title: "Mối quan hệ Kế thừa",
        body: "Mối quan hệ nào được đại diện bởi Kế thừa (Inheritance) trong OOP (Java)?",
        solution: "Kế thừa đại diện cho mối quan hệ **'IS-A'** (Là một). Ví dụ, một `Dog` IS-A `Animal`, có nghĩa là class con (`Dog`) là một loại chuyên biệt hóa của class cha (`Animal`)."
      }
    }
  },
  {
    _id: "java-f-038",
    difficulty: "fresher",
    tags: ["keyword", "transient"],
    content: {
      en: {
        title: "`transient` keyword",
        body: "What is the purpose of the `transient` keyword in Java?",
        solution: "The `transient` keyword is a field modifier used to **mark a field as non-serializable**. When an object is serialized, `transient` fields are skipped and their values are not saved to the stream (they are restored to their default values when the object is deserialized)."
      },
      jp: {
        title: "`transient`キーワード",
        body: "Javaにおける`transient`キーワードの目的は何ですか？",
        solution: "`transient`キーワードは、フィールドを**非シリアル化可能としてマークする**ために使用されるフィールド修飾子です。オブジェクトがシリアル化されるとき、`transient`フィールドはスキップされ、その値はストリームに保存されません（オブジェクトが逆シリアル化されるときにデフォルト値に復元されます）。"
      },
      vi: {
        title: "Từ khóa `transient`",
        body: "Mục đích của từ khóa `transient` trong Java là gì?",
        solution: "Từ khóa `transient` là một bổ từ trường (field modifier) được sử dụng để **đánh dấu một trường là không thể tuần tự hóa (non-serializable)**. Khi một đối tượng được tuần tự hóa (serialized), các trường `transient` sẽ bị bỏ qua và giá trị của chúng không được lưu vào luồng (chúng được khôi phục về giá trị mặc định khi đối tượng được giải tuần tự hóa)."
      }
    }
  },
  {
    _id: "java-f-039",
    difficulty: "fresher",
    tags: ["oop", "abstraction"],
    content: {
      en: {
        title: "Abstraction concept",
        body: "What is Abstraction in OOP, and how is it related to implementation hiding?",
        solution: "Abstraction is the concept of **showing only essential information** to the user and **hiding the internal implementation details**. It focuses on what an object *does* rather than how it *does* it. It is achieved using abstract classes and interfaces."
      },
      jp: {
        title: "抽象化の概念",
        body: "OOPにおける抽象化とは何ですか、またそれは実装の隠蔽とどのように関連していますか？",
        solution: "抽象化は、ユーザーに**本質的な情報のみを表示し**、**内部の実装の詳細を隠蔽する**概念です。オブジェクトが*何をするか*に焦点を当て、*どのように行うか*には焦点を当てません。抽象クラスとインターフェースを使用して達成されます。"
      },
      vi: {
        title: "Khái niệm Abstraction",
        body: "Abstraction (Trừu tượng hóa) trong OOP là gì, và nó liên quan đến việc ẩn giấu cách triển khai như thế nào?",
        solution: "Abstraction là khái niệm **chỉ hiển thị thông tin thiết yếu** cho người dùng và **ẩn đi các chi tiết triển khai bên trong**. Nó tập trung vào việc một đối tượng *làm gì* hơn là việc nó *làm như thế nào*. Nó được đạt được bằng cách sử dụng abstract class và interface."
      }
    }
  },
  {
    _id: "java-f-040",
    difficulty: "fresher",
    tags: ["collections", "list"],
    content: {
      en: {
        title: "List Interface characteristics",
        body: "What are the two key characteristics of the `List` Interface in the Java Collections Framework?",
        solution: "The two key characteristics are: 1. It is an **ordered collection** (elements have a specific order, accessible by index). 2. It **allows duplicate elements**."
      },
      jp: {
        title: "Listインターフェースの特徴",
        body: "Java Collections Frameworkの`List`インターフェースの2つの主要な特徴は何ですか？",
        solution: "2つの主要な特徴は次のとおりです: 1. **順序付けられたコレクション**です（要素には特定の順序があり、インデックスでアクセスできます）。 2. **重複した要素を許可します**。"
      },
      vi: {
        title: "Đặc điểm của Interface List",
        body: "Hai đặc điểm chính của Interface `List` trong Java Collections Framework là gì?",
        solution: "Hai đặc điểm chính là: 1. Nó là một **collection có thứ tự** (các phần tử có một thứ tự cụ thể, có thể truy cập bằng index). 2. Nó **cho phép các phần tử trùng lặp**."
      }
    }
  },
  {
    _id: "java-f-041",
    difficulty: "fresher",
    tags: ["collections", "set"],
    content: {
      en: {
        title: "Set Interface characteristics",
        body: "What are the two key characteristics of the `Set` Interface in the Java Collections Framework?",
        solution: "The two key characteristics are: 1. It is an **unordered collection** (in the case of `HashSet`). 2. It **does not allow duplicate elements** (all elements must be unique)."
      },
      jp: {
        title: "Setインターフェースの特徴",
        body: "Java Collections Frameworkの`Set`インターフェースの2つの主要な特徴は何ですか？",
        solution: "2つの主要な特徴は次のとおりです: 1. **順序付けられていないコレクション**です（`HashSet`の場合）。 2. **重複した要素を許可しません**（すべての要素は一意でなければなりません）。"
      },
      vi: {
        title: "Đặc điểm của Interface Set",
        body: "Hai đặc điểm chính của Interface `Set` trong Java Collections Framework là gì?",
        solution: "Hai đặc điểm chính là: 1. Nó là một **collection không có thứ tự** (trong trường hợp của `HashSet`). 2. Nó **không cho phép các phần tử trùng lặp** (tất cả các phần tử phải là duy nhất)."
      }
    }
  },
  {
    _id: "java-f-042",
    difficulty: "fresher",
    tags: ["interface", "method"],
    content: {
      en: {
        title: "Interface method access",
        body: "Before Java 8, what was the required access modifier for all methods in an interface?",
        solution: "Before Java 8, all methods in an interface were implicitly **public** and **abstract**. They did not require explicit declaration, as they had to be implemented by the class that implements the interface."
      },
      jp: {
        title: "インターフェースメソッドのアクセス",
        body: "Java 8より前は、インターフェース内のすべてのメソッドに必須のアクセス修飾子は何でしたか？",
        solution: "Java 8より前は、インターフェース内のすべてのメソッドは暗黙的に**public**および**abstract**でした。これらはインターフェースを実装するクラスによって実装される必要があったため、明示的な宣言は必要ありませんでした。"
      },
      vi: {
        title: "Truy cập phương thức của Interface",
        body: "Trước Java 8, access modifier bắt buộc cho tất cả các phương thức trong một interface là gì?",
        solution: "Trước Java 8, tất cả các phương thức trong một interface đều ngầm định là **public** và **abstract**. Chúng không yêu cầu khai báo tường minh, vì chúng phải được class implement interface đó triển khai."
      }
    }
  },
  {
    _id: "java-f-043",
    difficulty: "fresher",
    tags: ["keyword", "instanceof"],
    content: {
      en: {
        title: "`instanceof` operator",
        body: "What is the purpose of the `instanceof` operator in Java?",
        solution: "The `instanceof` operator is used to **test whether an object is an instance of a specified type** (class, subclass, or interface). It returns a boolean value (`true` or `false`)."
      },
      jp: {
        title: "`instanceof`演算子",
        body: "Javaにおける`instanceof`演算子の目的は何ですか？",
        solution: "`instanceof`演算子は、**オブジェクトが指定された型**（クラス、サブクラス、またはインターフェース）**のインスタンスであるかどうかをテストする**ために使用されます。ブール値（`true`または`false`）を返します。"
      },
      vi: {
        title: "Toán tử `instanceof`",
        body: "Mục đích của toán tử `instanceof` trong Java là gì?",
        solution: "Toán tử `instanceof` được sử dụng để **kiểm tra xem một đối tượng có phải là một thể hiện của một kiểu được chỉ định** (class, class con, hoặc interface) hay không. Nó trả về một giá trị boolean (`true` hoặc `false`)."
      }
    }
  },
  {
    _id: "java-f-044",
    difficulty: "fresher",
    tags: ["method", "system-out"],
    content: {
      en: {
        title: "Printing output",
        body: "What is the standard method used in Java to print output to the console?",
        solution: "The standard method is **`System.out.println()`** (or `System.out.print()`). `System` is a final class, `out` is a static field of type `PrintStream`, and `println` is the method used for output."
      },
      jp: {
        title: "出力の印刷",
        body: "Javaでコンソールに出力を印刷するために使用される標準のメソッドは何ですか？",
        solution: "標準のメソッドは**`System.out.println()`**（または`System.out.print()`）です。`System`はfinalクラス、`out`は`PrintStream`型の静的フィールド、`println`は出力に使用されるメソッドです。"
      },
      vi: {
        title: "In ra kết quả",
        body: "Phương thức chuẩn được sử dụng trong Java để in kết quả ra console là gì?",
        solution: "Phương thức chuẩn là **`System.out.println()`** (hoặc `System.out.print()`). `System` là một final class, `out` là một trường static kiểu `PrintStream`, và `println` là phương thức được sử dụng để xuất."
      }
    }
  },
  {
    _id: "java-f-045",
    difficulty: "fresher",
    tags: ["object", "initialization"],
    content: {
      en: {
        title: "Object creation operator",
        body: "What keyword is used in Java to create a new object instance?",
        solution: "The **`new`** keyword is used to create a new object instance of a class, which involves allocating memory on the heap and calling the constructor."
      },
      jp: {
        title: "オブジェクト作成演算子",
        body: "Javaで新しいオブジェクトインスタンスを作成するために使用されるキーワードは何ですか？",
        solution: "**`new`**キーワードは、クラスの新しいオブジェクトインスタンスを作成するために使用されます。これには、ヒープ上にメモリを割り当て、コンストラクターを呼び出すことが含まれます。"
      },
      vi: {
        title: "Toán tử tạo Object",
        body: "Từ khóa nào được sử dụng trong Java để tạo một instance đối tượng mới?",
        solution: "Từ khóa **`new`** được sử dụng để tạo một instance đối tượng mới của một class, bao gồm việc cấp phát bộ nhớ trên heap và gọi constructor."
      }
    }
  },
  {
    _id: "java-f-046",
    difficulty: "fresher",
    tags: ["data-type", "default-value"],
    content: {
      en: {
        title: "Default values of instance variables",
        body: "What is the default initial value for instance variables of type `int` and reference types (like `String`) in a class?",
        solution: "The default value for `int` is **`0`**. The default value for reference types (objects) is **`null`**."
      },
      jp: {
        title: "インスタンス変数のデフォルト値",
        body: "クラス内の `int` 型および参照型（`String`など）のインスタンス変数のデフォルトの初期値は何ですか？",
        solution: "`int`のデフォルト値は**`0`**です。参照型（オブジェクト）のデフォルト値は**`null`**です。"
      },
      vi: {
        title: "Giá trị mặc định của biến instance",
        body: "Giá trị khởi tạo mặc định cho các biến instance kiểu `int` và kiểu tham chiếu (như `String`) trong một class là gì?",
        solution: "Giá trị mặc định cho `int` là **`0`**. Giá trị mặc định cho các kiểu tham chiếu (đối tượng) là **`null`**."
      }
    }
  },
  {
    _id: "java-f-047",
    difficulty: "fresher",
    tags: ["array", "index"],
    content: {
      en: {
        title: "Array indexing",
        body: "What is the index of the first element in a Java array of size N, and what is the index of the last element?",
        solution: "The index of the first element is **0**. The index of the last element is **N - 1**."
      },
      jp: {
        title: "配列のインデックス",
        body: "サイズNのJava配列の最初の要素のインデックスはいくつですか、また最後の要素のインデックスはいくつですか？",
        solution: "最初の要素のインデックスは**0**です。最後の要素のインデックスは**N - 1**です。"
      },
      vi: {
        title: "Đánh chỉ mục mảng",
        body: "Chỉ mục (index) của phần tử đầu tiên trong mảng Java có kích thước N là bao nhiêu, và chỉ mục của phần tử cuối cùng là bao nhiêu?",
        solution: "Chỉ mục của phần tử đầu tiên là **0**. Chỉ mục của phần tử cuối cùng là **N - 1**."
      }
    }
  },
  {
    _id: "java-f-048",
    difficulty: "fresher",
    tags: ["keyword", "abstract", "method"],
    content: {
      en: {
        title: "Abstract method rule",
        body: "What is the main requirement for a method to be declared as `abstract` in a Java class?",
        solution: "An `abstract` method **must not have a body (implementation)**, and the class containing it **must also be declared as `abstract`**."
      },
      jp: {
        title: "抽象メソッドのルール",
        body: "Javaクラスでメソッドを`abstract`として宣言するための主な要件は何ですか？",
        solution: "抽象メソッドは**本体（実装）を持ってはならず**、それを含むクラスも**`abstract`として宣言されなければなりません**。"
      },
      vi: {
        title: "Quy tắc Abstract Method",
        body: "Yêu cầu chính để một phương thức được khai báo là `abstract` trong một class Java là gì?",
        solution: "Một phương thức `abstract` **không được có phần thân (triển khai)**, và class chứa nó **cũng phải được khai báo là `abstract`**."
      }
    }
  },
  {
    _id: "java-f-049",
    difficulty: "fresher",
    tags: ["keyword", "private"],
    content: {
      en: {
        title: "`private` access level",
        body: "Where is a member (variable or method) declared with the `private` access modifier accessible?",
        solution: "A `private` member is only accessible **within the class** where it is declared. It is not accessible from outside the class, even by its subclasses."
      },
      jp: {
        title: "`private`アクセスレベル",
        body: "`private`アクセス修飾子で宣言されたメンバー（変数またはメソッド）はどこでアクセス可能ですか？",
        solution: "`private`メンバーは、それが宣言されている**クラス内でのみ**アクセス可能です。サブクラスによっても、クラスの外側からはアクセスできません。"
      },
      vi: {
        title: "Mức độ truy cập `private`",
        body: "Một thành viên (biến hoặc phương thức) được khai báo bằng `private` access modifier có thể được truy cập ở đâu?",
        solution: "Một thành viên `private` chỉ có thể được truy cập **bên trong class** nơi nó được khai báo. Nó không thể truy cập được từ bên ngoài class, ngay cả bởi các class con của nó."
      }
    }
  },
  {
    _id: "java-f-050",
    difficulty: "fresher",
    tags: ["control-flow", "conditional"],
    content: {
      en: {
        title: "Ternary Operator",
        body: "What is the shorthand conditional operator in Java called, and what is its syntax?",
        solution: "It is called the **Ternary Operator** (or conditional operator). Its syntax is: `condition ? expression_if_true : expression_if_false;`"
      },
      jp: {
        title: "三項演算子",
        body: "Javaの短縮条件演算子は何と呼ばれ、その構文は何ですか？",
        solution: "**三項演算子**（または条件演算子）と呼ばれます。その構文は、`condition ? expression_if_true : expression_if_false;` です。"
      },
      vi: {
        title: "Toán tử Ternary",
        body: "Toán tử điều kiện viết tắt trong Java được gọi là gì, và cú pháp của nó là gì?",
        solution: "Nó được gọi là **Toán tử Ternary** (hoặc toán tử điều kiện). Cú pháp của nó là: `condition ? expression_if_true : expression_if_false;`"
      }
    }
  }
];