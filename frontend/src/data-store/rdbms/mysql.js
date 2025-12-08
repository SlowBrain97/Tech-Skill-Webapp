export const mysqlQuestions = [
  {
    _id: "mysql-j-001",
    difficulty: "junior",
    tags: ["join", "outer"],
    content: {
      en: {
        title: "What is the primary difference between a LEFT JOIN and an INNER JOIN?",
        body: "Explain which records are included from the left table in each type of join.",
        solution: "An INNER JOIN returns only matching rows. A LEFT JOIN (or LEFT OUTER JOIN) returns all rows from the left table and the matching rows from the right table. If there is no match, NULL is returned for the right table columns."
      },
      jp: {
        title: "LEFT JOINとINNER JOINの主な違いは？",
        body: "各JOINタイプで左側のテーブルからどのレコードが含まれるかを説明してください。",
        solution: "INNER JOINは一致する行のみを返します。LEFT JOIN（またはLEFT OUTER JOIN）は、左側のテーブルからのすべての行と、右側のテーブルからの一致する行を返します。一致がない場合、右側のテーブルのカラムにはNULLが返されます。"
      },
      vi: {
        title: "Sự khác biệt chính giữa LEFT JOIN và INNER JOIN là gì?",
        body: "Giải thích các bản ghi nào được bao gồm từ bảng bên trái trong mỗi loại join.",
        solution: "INNER JOIN chỉ trả về các hàng khớp nhau. LEFT JOIN (hoặc LEFT OUTER JOIN) trả về tất cả các hàng từ bảng bên trái và các hàng khớp từ bảng bên phải. Nếu không có khớp, NULL được trả về cho các cột của bảng bên phải."
      }
    }
  },
  {
    _id: "mysql-j-002",
    difficulty: "junior",
    tags: ["group by", "having"],
    content: {
      en: {
        title: "What is the purpose of the HAVING clause, and how does it differ from WHERE?",
        body: "Explain when to use HAVING instead of WHERE in a SELECT statement.",
        solution: "The HAVING clause filters groups of rows created by the GROUP BY clause, based on an aggregate function result. The WHERE clause filters individual rows before grouping."
      },
      jp: {
        title: "HAVING句の目的は何ですか、そしてWHEREとの違いは？",
        body: "SELECT文でWHEREの代わりにHAVINGを使用するタイミングを説明してください。",
        solution: "HAVING句は、GROUP BY句によって作成された行のグループを、集計関数の結果に基づいてフィルタリングします。WHERE句は、グループ化の前に個々の行をフィルタリングします。"
      },
      vi: {
        title: "Mục đích của mệnh đề HAVING là gì, và nó khác với WHERE như thế nào?",
        body: "Giải thích khi nào nên sử dụng HAVING thay vì WHERE trong câu lệnh SELECT.",
        solution: "Mệnh đề HAVING lọc các nhóm hàng được tạo bởi mệnh đề GROUP BY, dựa trên kết quả của hàm tổng hợp. Mệnh đề WHERE lọc các hàng riêng lẻ trước khi nhóm."
      }
    }
  },
  {
    _id: "mysql-j-003",
    difficulty: "junior",
    tags: ["index", "performance"],
    content: {
      en: {
        title: "What is a database index, and why is it important for query performance?",
        body: "Describe the role of an index in a MySQL table.",
        solution: "An index is a data structure (like a B-Tree) that improves the speed of data retrieval operations on a database table. It speeds up searching and sorting by creating pointers to the rows."
      },
      jp: {
        title: "データベースインデックスとは何ですか、そしてクエリのパフォーマンスにとってなぜ重要ですか？",
        body: "MySQLテーブルにおけるインデックスの役割を説明してください。",
        solution: "インデックスは、データベーステーブルでのデータ検索操作の速度を向上させるデータ構造（B-Treeなど）です。行へのポインタを作成することで、検索とソートを高速化します。"
      },
      vi: {
        title: "Index cơ sở dữ liệu là gì, và tại sao nó quan trọng đối với hiệu suất truy vấn?",
        body: "Mô tả vai trò của một index trong bảng MySQL.",
        solution: "Index là một cấu trúc dữ liệu (như B-Tree) giúp cải thiện tốc độ của các thao tác truy xuất dữ liệu trên bảng cơ sở dữ liệu. Nó tăng tốc độ tìm kiếm và sắp xếp bằng cách tạo con trỏ đến các hàng."
      }
    }
  },
  {
    _id: "mysql-j-004",
    difficulty: "junior",
    tags: ["transaction", "acid"],
    content: {
      en: {
        title: "Explain the purpose of SQL transactions and the main commands used to manage them.",
        body: "What is a transaction, and what are the main control statements (2 main ones)?",
        solution: "A transaction is a single unit of work (a set of SQL operations) that must be executed completely or not at all (Atomicity). The main commands are COMMIT (to make changes permanent) and ROLLBACK (to undo changes)."
      },
      jp: {
        title: "SQLトランザクションの目的と、それを管理するために使用される主要なコマンドを説明してください。",
        body: "トランザクションとは何ですか、そして主要な制御ステートメント（主要な2つ）は何ですか？",
        solution: "トランザクションは、完全に実行されるか、全く実行されないか（原子性）でなければならない単一の作業単位（一連のSQL操作）です。主要なコマンドはCOMMIT（変更を永続化する）とROLLBACK（変更を元に戻す）です。"
      },
      vi: {
        title: "Giải thích mục đích của transaction SQL và các lệnh chính được dùng để quản lý chúng.",
        body: "Transaction là gì, và các câu lệnh kiểm soát chính (2 lệnh chính) là gì?",
        solution: "Transaction là một đơn vị công việc duy nhất (một tập hợp các thao tác SQL) phải được thực hiện hoàn toàn hoặc không được thực hiện chút nào (Tính nguyên tử - Atomicity). Các lệnh chính là COMMIT (để làm cho thay đổi vĩnh viễn) và ROLLBACK (để hoàn tác các thay đổi)."
      }
    }
  },
  {
    _id: "mysql-j-005",
    difficulty: "junior",
    tags: ["datatype", "varchar", "char"],
    content: {
      en: {
        title: "What is the difference between VARCHAR and CHAR datatypes in MySQL?",
        body: "How do these two string types handle storage and length?",
        solution: "CHAR stores a fixed-length string and pads shorter strings with spaces. VARCHAR stores a variable-length string; it only uses the necessary space (plus 1 or 2 bytes for length), making it more space-efficient for varying lengths."
      },
      jp: {
        title: "MySQLのVARCHARとCHARデータ型の違いは？",
        body: "これら2つの文字列型はストレージと長さをどのように処理しますか？",
        solution: "CHARは固定長の文字列を格納し、短い文字列にはスペースを埋めます。VARCHARは可変長の文字列を格納し、必要なスペースのみを使用するため（長さを格納するための1または2バイトが追加されます）、長さが変動する場合によりスペース効率が良いです。"
      },
      vi: {
        title: "Sự khác biệt giữa kiểu dữ liệu VARCHAR và CHAR trong MySQL là gì?",
        body: "Hai kiểu chuỗi này xử lý việc lưu trữ và độ dài như thế nào?",
        solution: "CHAR lưu trữ một chuỗi có độ dài cố định và đệm thêm khoảng trắng cho các chuỗi ngắn hơn. VARCHAR lưu trữ một chuỗi có độ dài thay đổi; nó chỉ sử dụng không gian cần thiết (cộng thêm 1 hoặc 2 byte cho độ dài), làm cho nó hiệu quả hơn về không gian cho các độ dài khác nhau."
      }
    }
  },
  {
    _id: "mysql-j-006",
    difficulty: "junior",
    tags: ["subquery"],
    content: {
      en: {
        title: "What is a Subquery (or Inner Query) in SQL?",
        body: "Describe where a subquery can be placed and what its result is used for.",
        solution: "A subquery is a query nested inside another SQL query. It can be placed in the WHERE, FROM, or HAVING clause, and its result is used as an input or condition for the outer query."
      },
      jp: {
        title: "SQLにおけるサブクエリ（または内部クエリ）とは何ですか？",
        body: "サブクエリを配置できる場所と、その結果が何に使用されるかを説明してください。",
        solution: "サブクエリは、別のSQLクエリの内部にネストされたクエリです。WHERE、FROM、またはHAVING句に配置でき、その結果は外部クエリの入力または条件として使用されます。"
      },
      vi: {
        title: "Subquery (hoặc Inner Query) trong SQL là gì?",
        body: "Mô tả nơi có thể đặt một subquery và kết quả của nó được sử dụng để làm gì.",
        solution: "Subquery là một truy vấn được lồng bên trong một truy vấn SQL khác. Nó có thể được đặt trong mệnh đề WHERE, FROM hoặc HAVING, và kết quả của nó được sử dụng làm đầu vào hoặc điều kiện cho truy vấn bên ngoài."
      }
    }
  },
  {
    _id: "mysql-j-007",
    difficulty: "junior",
    tags: ["foreign key", "constraint"],
    content: {
      en: {
        title: "What is a Foreign Key, and what is its main purpose?",
        body: "Explain the role of a Foreign Key in maintaining data integrity.",
        solution: "A Foreign Key is a field (or collection of fields) in one table that refers to the Primary Key in another table. Its main purpose is to enforce referential integrity between the two tables."
      },
      jp: {
        title: "外部キーとは何ですか、そしてその主な目的は何ですか？",
        body: "データ整合性を維持する上での外部キーの役割を説明してください。",
        solution: "外部キーは、あるテーブル内の別のテーブルの主キーを参照するフィールド（またはフィールドの集合）です。その主な目的は、2つのテーブル間の参照整合性を強制することです。"
      },
      vi: {
        title: "Foreign Key (Khóa Ngoại) là gì, và mục đích chính của nó là gì?",
        body: "Giải thích vai trò của Khóa Ngoại trong việc duy trì tính toàn vẹn dữ liệu.",
        solution: "Foreign Key là một trường (hoặc tập hợp các trường) trong bảng này tham chiếu đến Primary Key trong bảng khác. Mục đích chính của nó là để thực thi tính toàn vẹn tham chiếu (referential integrity) giữa hai bảng."
      }
    }
  },
  {
    _id: "mysql-j-008",
    difficulty: "junior",
    tags: ["collation", "charset"],
    content: {
      en: {
        title: "What is the difference between Character Set and Collation in MySQL?",
        body: "Explain what each term defines in terms of text data.",
        solution: "A **Character Set** defines the set of legal characters that can be used (e.g., UTF8, Latin1). A **Collation** is a set of rules for comparing and sorting those characters (e.g., case-sensitive or accent-sensitive)."
      },
      jp: {
        title: "MySQLにおける文字セット（Character Set）と照合順序（Collation）の違いは？",
        body: "それぞれの用語がテキストデータに関して何を定義しているかを説明してください。",
        solution: "**文字セット**は使用できる正当な文字のセットを定義します（例：UTF8、Latin1）。**照合順序**は、それらの文字を比較およびソートするための一連のルールです（例：大文字小文字を区別するか、アクセントを区別するか）。"
      },
      vi: {
        title: "Sự khác biệt giữa Bộ ký tự (Character Set) và Collation trong MySQL là gì?",
        body: "Giải thích mỗi thuật ngữ định nghĩa gì về dữ liệu văn bản.",
        solution: "**Bộ ký tự (Character Set)** định nghĩa tập hợp các ký tự hợp lệ có thể được sử dụng (ví dụ: UTF8, Latin1). **Collation** là một tập hợp các quy tắc để so sánh và sắp xếp các ký tự đó (ví dụ: có phân biệt chữ hoa/thường hoặc dấu). "
      }
    }
  },
  {
    _id: "mysql-j-009",
    difficulty: "junior",
    tags: ["window function", "ranking"],
    content: {
      en: {
        title: "Which MySQL ranking function is used to assign a unique rank to each row within its partition?",
        body: "The function that computes the rank of a row in an ordered group of rows, without gaps.",
        solution: "ROW_NUMBER()"
      },
      jp: {
        title: "パーティション内の各行に一意のランクを割り当てるために使用されるMySQLランキング関数は？",
        body: "行の順序付けられたグループ内で、ギャップなしに行のランクを計算する関数。",
        solution: "ROW_NUMBER()"
      },
      vi: {
        title: "Hàm xếp hạng (ranking function) MySQL nào được dùng để gán một thứ hạng duy nhất cho mỗi hàng trong phạm vi phân vùng của nó?",
        body: "Hàm tính toán thứ hạng của một hàng trong một nhóm hàng được sắp xếp, mà không có khoảng trống.",
        solution: "ROW_NUMBER()"
      }
    }
  },
  {
    _id: "mysql-j-010",
    difficulty: "junior",
    tags: ["trigger"],
    content: {
      en: {
        title: "What is a MySQL Trigger, and when is it executed?",
        body: "Define a trigger and specify the events that can cause it to run.",
        solution: "A Trigger is a set of SQL statements that is automatically executed (or 'triggered') when a change (INSERT, UPDATE, or DELETE) occurs on a specified table."
      },
      jp: {
        title: "MySQLトリガーとは何ですか、そしていつ実行されますか？",
        body: "トリガーを定義し、それが実行される原因となるイベントを指定してください。",
        solution: "トリガーは、指定されたテーブルで変更（INSERT、UPDATE、またはDELETE）が発生したときに自動的に実行される（または「トリガーされる」）一連のSQLステートメントです。"
      },
      vi: {
        title: "Trigger MySQL là gì, và khi nào nó được thực thi?",
        body: "Định nghĩa một trigger và chỉ rõ các sự kiện có thể khiến nó chạy.",
        solution: "Trigger là một tập hợp các câu lệnh SQL được tự động thực thi (hoặc 'kích hoạt') khi có một thay đổi (INSERT, UPDATE, hoặc DELETE) xảy ra trên một bảng được chỉ định."
      }
    }
  },
  {
    _id: "mysql-j-011",
    difficulty: "junior",
    tags: ["view"],
    content: {
      en: {
        title: "What is a View in MySQL?",
        body: "Describe the concept of a View and how it relates to tables.",
        solution: "A View is a virtual table based on the result-set of an SQL query. It does not store data itself but rather dynamically generates the data when queried, based on the underlying tables."
      },
      jp: {
        title: "MySQLにおけるビュー（View）とは何ですか？",
        body: "ビューの概念と、それがテーブルにどのように関連するかを説明してください。",
        solution: "ビューは、SQLクエリの結果セットに基づいた仮想テーブルです。それ自体はデータを格納せず、クエリが実行されたときに、基になるテーブルに基づいてデータを動的に生成します。"
      },
      vi: {
        title: "View (Khung nhìn) trong MySQL là gì?",
        body: "Mô tả khái niệm View và cách nó liên quan đến các bảng.",
        solution: "View là một bảng ảo dựa trên tập kết quả của một truy vấn SQL. Nó không tự lưu trữ dữ liệu mà thay vào đó tạo ra dữ liệu một cách linh hoạt khi được truy vấn, dựa trên các bảng cơ sở."
      }
    }
  },
  {
    _id: "mysql-j-012",
    difficulty: "junior",
    tags: ["stored procedure"],
    content: {
      en: {
        title: "What is a Stored Procedure?",
        body: "Explain the main benefit of using a stored procedure in an application.",
        solution: "A Stored Procedure is a prepared SQL code block that you can save and reuse. A main benefit is reducing network traffic and improving performance by executing the code directly on the database server."
      },
      jp: {
        title: "ストアドプロシージャ（Stored Procedure）とは何ですか？",
        body: "アプリケーションでストアドプロシージャを使用する主な利点を説明してください。",
        solution: "ストアドプロシージャは、保存して再利用できる準備されたSQLコードブロックです。主な利点は、データベースサーバー上でコードを直接実行することで、ネットワークトラフィックを削減し、パフォーマンスを向上させることです。"
      },
      vi: {
        title: "Stored Procedure (Thủ tục lưu trữ) là gì?",
        body: "Giải thích lợi ích chính của việc sử dụng một stored procedure trong một ứng dụng.",
        solution: "Stored Procedure là một khối mã SQL đã được chuẩn bị mà bạn có thể lưu và tái sử dụng. Một lợi ích chính là giảm lưu lượng mạng và cải thiện hiệu suất bằng cách thực thi mã trực tiếp trên máy chủ cơ sở dữ liệu."
      }
    }
  },
  {
    _id: "mysql-j-013",
    difficulty: "junior",
    tags: ["data integrity", "auto increment"],
    content: {
      en: {
        title: "What is the purpose of the AUTO_INCREMENT attribute in MySQL?",
        body: "Explain how AUTO_INCREMENT works for a primary key column.",
        solution: "It automatically generates a unique sequential integer value for a column (typically the Primary Key) whenever a new record is inserted, ensuring uniqueness and simplifying data entry."
      },
      jp: {
        title: "MySQLにおけるAUTO_INCREMENT属性の目的は？",
        body: "主キーカラムに対してAUTO_INCREMENTがどのように機能するかを説明してください。",
        solution: "新しいレコードが挿入されるたびに、カラム（通常は主キー）に対して一意の順序付けられた整数値を自動的に生成し、一意性を確保し、データ入力を簡素化します。"
      },
      vi: {
        title: "Mục đích của thuộc tính AUTO_INCREMENT trong MySQL là gì?",
        body: "Giải thích cách AUTO_INCREMENT hoạt động đối với một cột khóa chính.",
        solution: "Nó tự động tạo ra một giá trị số nguyên tuần tự duy nhất cho một cột (thường là Khóa Chính) mỗi khi một bản ghi mới được chèn, đảm bảo tính duy nhất và đơn giản hóa việc nhập dữ liệu."
      }
    }
  },
  {
    _id: "mysql-j-014",
    difficulty: "junior",
    tags: ["storage engine", "innodb"],
    content: {
      en: {
        title: "What is the default and most recommended Storage Engine in modern MySQL, and what is its key feature?",
        body: "Name the engine and its main benefit regarding data safety.",
        solution: "The default and recommended engine is **InnoDB**. Its key feature is support for **transactions** (ACID properties) and **row-level locking**, which is vital for data integrity and concurrent access."
      },
      jp: {
        title: "最新のMySQLでデフォルトかつ最も推奨されるストレージエンジンは何ですか、そしてその主要な機能は？",
        body: "エンジンの名前と、データの安全性に関する主な利点を挙げてください。",
        solution: "デフォルトで推奨されるエンジンは**InnoDB**です。その主要な機能は、データの整合性と同時アクセスに不可欠な**トランザクション**（ACID特性）と**行レベルロック**のサポートです。"
      },
      vi: {
        title: "Storage Engine mặc định và được khuyến nghị nhất trong MySQL hiện đại là gì, và tính năng chính của nó là gì?",
        body: "Nêu tên engine và lợi ích chính của nó liên quan đến an toàn dữ liệu.",
        solution: "Engine mặc định và được khuyến nghị là **InnoDB**. Tính năng chính của nó là hỗ trợ **transaction** (thuộc tính ACID) và **khóa cấp độ hàng (row-level locking)**, điều này rất quan trọng đối với tính toàn vẹn dữ liệu và truy cập đồng thời."
      }
    }
  },
  {
    _id: "mysql-j-015",
    difficulty: "junior",
    tags: ["security", "grant"],
    content: {
      en: {
        title: "Which SQL command is used to assign privileges (like SELECT, INSERT) to a specific MySQL user?",
        body: "The command used for access control and granting permissions.",
        solution: "GRANT"
      }
      ,
      jp: {
        title: "特定のMySQLユーザーに特権（SELECT、INSERTなど）を割り当てるために使用されるSQLコマンドは？",
        body: "アクセスコントロールと権限付与に使用されるコマンド。",
        solution: "GRANT"
      }
      ,
      vi: {
        title: "Lệnh SQL nào được dùng để gán các đặc quyền (như SELECT, INSERT) cho một người dùng MySQL cụ thể?",
        body: "Lệnh được sử dụng để kiểm soát truy cập và cấp quyền.",
        solution: "GRANT"
      }
    }
  },
  {
    _id: "mysql-j-016",
    difficulty: "junior",
    tags: ["function", "date"],
    content: {
      en: {
        title: "What MySQL function is commonly used to retrieve the current date and time?",
        body: "Name the function that returns the timestamp of the current moment.",
        solution: "NOW() or SYSDATE()"
      },
      jp: {
        title: "現在の日付と時刻を取得するために一般的に使用されるMySQL関数は？",
        body: "現在の瞬間のタイムスタンプを返す関数の名前を挙げてください。",
        solution: "NOW() または SYSDATE()"
      },
      vi: {
        title: "Hàm MySQL nào thường được dùng để lấy ngày và giờ hiện tại?",
        body: "Nêu tên hàm trả về dấu thời gian (timestamp) của thời điểm hiện tại.",
        solution: "NOW() hoặc SYSDATE()"
      }
    }
  },
  {
    _id: "mysql-j-017",
    difficulty: "junior",
    tags: ["join", "self-join"],
    content: {
      en: {
        title: "What is a Self-Join, and why would you use it?",
        body: "Explain how a table can be joined to itself.",
        solution: "A Self-Join is when a table is joined to itself. It's used when you need to combine records within the *same* table, often to compare rows to other rows in that table (e.g., finding all employees who report to the same manager)."
      },
      jp: {
        title: "自己結合（Self-Join）とは何ですか、そしてなぜそれを使用しますか？",
        body: "テーブル自体をどのように結合できるかを説明してください。",
        solution: "自己結合は、テーブル自体が結合されることです。これは、**同じ**テーブル内のレコードを結合する必要がある場合に使用され、しばしばそのテーブル内の他の行と行を比較するためです（例：同じマネージャーに報告するすべての従業員を見つける）。"
      },
      vi: {
        title: "Self-Join (Tự-Join) là gì, và tại sao bạn lại sử dụng nó?",
        body: "Giải thích cách một bảng có thể được join với chính nó.",
        solution: "Self-Join là khi một bảng được join với chính nó. Nó được sử dụng khi bạn cần kết hợp các bản ghi trong **cùng một** bảng, thường là để so sánh các hàng với các hàng khác trong bảng đó (ví dụ: tìm tất cả nhân viên báo cáo cho cùng một quản lý)."
      }
    }
  },
  {
    _id: "mysql-j-018",
    difficulty: "junior",
    tags: ["data integrity", "default"],
    content: {
      en: {
        title: "What is the purpose of the 'DEFAULT' constraint when defining a column?",
        body: "Explain what value a column will have if no value is explicitly provided during an INSERT operation.",
        solution: "The DEFAULT constraint is used to provide a default value for a column. This value will be automatically added to the column if no other value is specified when inserting a new record."
      },
      jp: {
        title: "カラムを定義する際の「DEFAULT」制約の目的は？",
        body: "INSERT操作中に明示的に値が提供されない場合、カラムが持つ値について説明してください。",
        solution: "DEFAULT制約は、カラムのデフォルト値を提供するために使用されます。新しいレコードを挿入する際に他の値が指定されない場合、この値がカラムに自動的に追加されます。"
      },
      vi: {
        title: "Mục đích của ràng buộc 'DEFAULT' khi định nghĩa một cột là gì?",
        body: "Giải thích giá trị mà một cột sẽ có nếu không có giá trị nào được cung cấp rõ ràng trong quá trình thao tác INSERT.",
        solution: "Ràng buộc DEFAULT được sử dụng để cung cấp một giá trị mặc định cho một cột. Giá trị này sẽ được tự động thêm vào cột nếu không có giá trị nào khác được chỉ định khi chèn một bản ghi mới."
      }
    }
  },
  {
    _id: "mysql-j-019",
    difficulty: "junior",
    tags: ["dml", "truncat"],
    content: {
      en: {
        title: "What is the key difference between the TRUNCATE TABLE and DELETE FROM TABLE commands?",
        body: "Focus on transaction logging and reset of the auto-increment counter.",
        solution: "TRUNCATE TABLE removes all rows much faster, typically without logging individual row deletions, and resets the AUTO_INCREMENT counter. DELETE FROM TABLE logs each row deletion, is slower, and does *not* reset the AUTO_INCREMENT counter (unless specified)."
      },
      jp: {
        title: "TRUNCATE TABLEとDELETE FROM TABLEコマンドの主な違いは？",
        body: "トランザクションロギングとオートインクリメントカウンターのリセットに焦点を当ててください。",
        solution: "TRUNCATE TABLEは、通常、個々の行の削除をログに記録せずに、より速くすべての行を削除し、AUTO_INCREMENTカウンターをリセットします。DELETE FROM TABLEは、各行の削除をログに記録し、遅く、AUTO_INCREMENTカウンターをリセット**しません**（指定されない限り）。"
      },
      vi: {
        title: "Sự khác biệt chính giữa các lệnh TRUNCATE TABLE và DELETE FROM TABLE là gì?",
        body: "Tập trung vào việc ghi nhật ký transaction và đặt lại bộ đếm auto-increment.",
        solution: "TRUNCATE TABLE loại bỏ tất cả các hàng nhanh hơn nhiều, thường không ghi nhật ký xóa từng hàng, và **đặt lại** bộ đếm AUTO_INCREMENT. DELETE FROM TABLE ghi nhật ký xóa từng hàng, chậm hơn, và **không** đặt lại bộ đếm AUTO_INCREMENT (trừ khi được chỉ định)."
      }
    }
  },
  {
    _id: "mysql-j-020",
    difficulty: "junior",
    tags: ["union", "union all"],
    content: {
      en: {
        title: "What is the difference between UNION and UNION ALL?",
        body: "Explain how each operator handles duplicate rows when combining two result sets.",
        solution: "UNION combines the result sets of two or more SELECT statements and automatically removes duplicate rows. UNION ALL combines the result sets but includes all duplicate rows."
      },
      jp: {
        title: "UNIONとUNION ALLの違いは？",
        body: "2つの結果セットを結合する際、各演算子が重複する行をどのように処理するかを説明してください。",
        solution: "UNIONは2つ以上のSELECTステートメントの結果セットを結合し、重複する行を自動的に削除します。UNION ALLは結果セットを結合しますが、すべての重複する行を含めます。"
      },
      vi: {
        title: "Sự khác biệt giữa UNION và UNION ALL là gì?",
        body: "Giải thích cách mỗi toán tử xử lý các hàng trùng lặp khi kết hợp hai tập kết quả.",
        solution: "UNION kết hợp các tập kết quả của hai hoặc nhiều câu lệnh SELECT và tự động loại bỏ các hàng trùng lặp. UNION ALL kết hợp các tập kết quả nhưng bao gồm tất cả các hàng trùng lặp."
      }
    }
  },
  {
    _id: "mysql-f-001",
    difficulty: "fresher",
    tags: ["basic", "select"],
    content: {
      en: {
        title: "How do you retrieve all columns from a table named 'users'?",
        body: "Write the SQL query to select every column and every row from the 'users' table.",
        solution: "SELECT * FROM users;"
      },
      jp: {
        title: "「users」テーブルから全カラムを取得するには？",
        body: "「users」テーブルのすべてのカラムとすべての行を選択するSQLクエリを記述してください。",
        solution: "SELECT * FROM users;"
      },
      vi: {
        title: "Làm thế nào để truy vấn tất cả các cột từ bảng 'users'?",
        body: "Viết câu truy vấn SQL để chọn tất cả các cột và tất cả các hàng từ bảng 'users'.",
        solution: "SELECT * FROM users;"
      }
    }
  },
  {
    _id: "mysql-f-002",
    difficulty: "fresher",
    tags: ["basic", "insert"],
    content: {
      en: {
        title: "Which SQL command is used to add new rows of data to a table?",
        body: "Identify the primary SQL command used to insert a new record into a table.",
        solution: "INSERT INTO"
      },
      jp: {
        title: "テーブルに新しい行データを追加するために使用されるSQLコマンドは？",
        body: "テーブルに新しいレコードを挿入するために使用される主要なSQLコマンドを特定してください。",
        solution: "INSERT INTO"
      },
      vi: {
        title: "Lệnh SQL nào được dùng để thêm các hàng dữ liệu mới vào một bảng?",
        body: "Xác định lệnh SQL chính được sử dụng để chèn một bản ghi mới vào một bảng.",
        solution: "INSERT INTO"
      }
    }
  },
  {
    _id: "mysql-f-003",
    difficulty: "fresher",
    tags: ["basic", "datatype"],
    content: {
      en: {
        title: "What is a common MySQL datatype for storing whole numbers?",
        body: "Name a standard integer datatype in MySQL.",
        solution: "INT or INTEGER (TINYINT, SMALLINT, MEDIUMINT, BIGINT are also correct)"
      },
      jp: {
        title: "MySQLで整数を格納するための一般的なデータ型は？",
        body: "MySQLの標準的な整数データ型を挙げてください。",
        solution: "INT または INTEGER (TINYINT, SMALLINT, MEDIUMINT, BIGINT も正解)"
      },
      vi: {
        title: "Kiểu dữ liệu MySQL phổ biến để lưu trữ số nguyên là gì?",
        body: "Kể tên một kiểu dữ liệu số nguyên chuẩn trong MySQL.",
        solution: "INT hoặc INTEGER (TINYINT, SMALLINT, MEDIUMINT, BIGINT cũng đúng)"
      }
    }
  },
  {
    _id: "mysql-f-004",
    difficulty: "fresher",
    tags: ["basic", "where"],
    content: {
      en: {
        title: "Which clause is used to filter records in a SELECT statement?",
        body: "The clause used to specify a condition when retrieving data from a table.",
        solution: "WHERE"
      },
      jp: {
        title: "SELECT文でレコードをフィルタリングするために使用される句は？",
        body: "テーブルからデータを取得する際に条件を指定するために使用される句。",
        solution: "WHERE"
      },
      vi: {
        title: "Mệnh đề nào được dùng để lọc bản ghi trong câu lệnh SELECT?",
        body: "Mệnh đề được sử dụng để chỉ định một điều kiện khi truy xuất dữ liệu từ một bảng.",
        solution: "WHERE"
      }
    }
  },
  {
    _id: "mysql-f-005",
    difficulty: "fresher",
    tags: ["basic", "ddl"],
    content: {
      en: {
        title: "What does the SQL acronym DDL stand for?",
        body: "Expand the acronym DDL in the context of SQL and databases.",
        solution: "Data Definition Language"
      },
      jp: {
        title: "SQLの頭字語DDLは何を表していますか？",
        body: "SQLとデータベースの文脈におけるDDLの頭字語を展開してください。",
        solution: "Data Definition Language"
      },
      vi: {
        title: "Cụm từ viết tắt DDL trong SQL là viết tắt của gì?",
        body: "Giải thích cụm từ viết tắt DDL trong ngữ cảnh SQL và cơ sở dữ liệu.",
        solution: "Data Definition Language (Ngôn ngữ Định nghĩa Dữ liệu)"
      }
    }
  },
  {
    _id: "mysql-f-006",
    difficulty: "fresher",
    tags: ["basic", "key"],
    content: {
      en: {
        title: "What is a column or set of columns that uniquely identifies each row in a table?",
        body: "Name the key that ensures all rows in a table are unique.",
        solution: "Primary Key"
      },
      jp: {
        title: "テーブルの各行を一意に識別するカラムまたはカラムのセットは？",
        body: "テーブル内のすべての行が一意であることを保証するキーの名前を挙げてください。",
        solution: "Primary Key (主キー)"
      },
      vi: {
        title: "Một cột hoặc tập hợp các cột xác định duy nhất mỗi hàng trong một bảng là gì?",
        body: "Nêu tên khóa đảm bảo tất cả các hàng trong một bảng là duy nhất.",
        solution: "Primary Key (Khóa Chính)"
      }
    }
  },
  {
    _id: "mysql-f-007",
    difficulty: "fresher",
    tags: ["basic", "delete"],
    content: {
      en: {
        title: "Which SQL command is used to remove existing rows from a table?",
        body: "Identify the SQL command for deleting records based on a condition.",
        solution: "DELETE FROM"
      },
      jp: {
        title: "テーブルから既存の行を削除するために使用されるSQLコマンドは？",
        body: "条件に基づいてレコードを削除するためのSQLコマンドを特定してください。",
        solution: "DELETE FROM"
      },
      vi: {
        title: "Lệnh SQL nào được dùng để loại bỏ các hàng hiện có khỏi một bảng?",
        body: "Xác định lệnh SQL để xóa các bản ghi dựa trên một điều kiện.",
        solution: "DELETE FROM"
      }
    }
  },
  {
    _id: "mysql-f-008",
    difficulty: "fresher",
    tags: ["basic", "update"],
    content: {
      en: {
        title: "Which SQL command is used to modify existing data in a table?",
        body: "The command used to change the values in one or more columns of existing rows.",
        solution: "UPDATE"
      },
      jp: {
        title: "テーブル内の既存のデータを変更するために使用されるSQLコマンドは？",
        body: "既存の行の1つまたは複数のカラムの値を変更するために使用されるコマンド。",
        solution: "UPDATE"
      },
      vi: {
        title: "Lệnh SQL nào được dùng để sửa đổi dữ liệu hiện có trong một bảng?",
        body: "Lệnh được sử dụng để thay đổi giá trị trong một hoặc nhiều cột của các hàng hiện có.",
        solution: "UPDATE"
      }
    }
  },
  {
    _id: "mysql-f-009",
    difficulty: "fresher",
    tags: ["basic", "create"],
    content: {
      en: {
        title: "What is the correct SQL command to create a new table?",
        body: "The command used to define the structure of a new table.",
        solution: "CREATE TABLE"
      },
      jp: {
        title: "新しいテーブルを作成するための正しいSQLコマンドは？",
        body: "新しいテーブルの構造を定義するために使用されるコマンド。",
        solution: "CREATE TABLE"
      },
      vi: {
        title: "Lệnh SQL đúng để tạo một bảng mới là gì?",
        body: "Lệnh được sử dụng để định nghĩa cấu trúc của một bảng mới.",
        solution: "CREATE TABLE"
      }
    }
  },
  {
    _id: "mysql-f-010",
    difficulty: "fresher",
    tags: ["basic", "sort"],
    content: {
      en: {
        title: "Which clause is used to sort the result-set of a query?",
        body: "The clause that defines the order in which the rows are returned.",
        solution: "ORDER BY"
      },
      jp: {
        title: "クエリの結果セットをソートするために使用される句は？",
        body: "行が返される順序を定義する句。",
        solution: "ORDER BY"
      },
      vi: {
        title: "Mệnh đề nào được dùng để sắp xếp tập kết quả của một truy vấn?",
        body: "Mệnh đề định nghĩa thứ tự các hàng được trả về.",
        solution: "ORDER BY"
      }
    }
  },
  {
    _id: "mysql-f-011",
    difficulty: "fresher",
    tags: ["basic", "aggregate"],
    content: {
      en: {
        title: "Name one common SQL aggregate function (e.g., used for counting or averaging).",
        body: "Give an example of a function that operates on a set of rows and returns a single value.",
        solution: "COUNT, SUM, AVG, MIN, or MAX"
      },
      jp: {
        title: "一般的なSQL集計関数を一つ挙げてください（例：カウントや平均の計算に使用されるもの）。",
        body: "行のセットに対して操作を行い、単一の値を返す関数の例を挙げてください。",
        solution: "COUNT, SUM, AVG, MIN, または MAX"
      },
      vi: {
        title: "Kể tên một hàm tổng hợp (aggregate function) SQL phổ biến (ví dụ: dùng để đếm hoặc tính trung bình).",
        body: "Đưa ra một ví dụ về hàm hoạt động trên một tập hợp các hàng và trả về một giá trị duy nhất.",
        solution: "COUNT, SUM, AVG, MIN, hoặc MAX"
      }
    }
  },
  {
    _id: "mysql-f-012",
    difficulty: "fresher",
    tags: ["basic", "constraint"],
    content: {
      en: {
        title: "What constraint ensures that a column cannot have NULL values?",
        body: "The constraint used to enforce that a column must always contain a value.",
        solution: "NOT NULL"
      },
      jp: {
        title: "カラムがNULL値を持つことを禁止する制約は？",
        body: "カラムが常に値を含むことを強制するために使用される制約。",
        solution: "NOT NULL"
      },
      vi: {
        title: "Ràng buộc (constraint) nào đảm bảo rằng một cột không thể có giá trị NULL?",
        body: "Ràng buộc được sử dụng để bắt buộc một cột luôn phải chứa một giá trị.",
        solution: "NOT NULL"
      }
    }
  },
  {
    _id: "mysql-f-013",
    difficulty: "fresher",
    tags: ["basic", "schema"],
    content: {
      en: {
        title: "In MySQL, what is another name for a database structure that holds tables and other objects?",
        body: "The term used to describe the overall organization of a database.",
        solution: "Schema"
      },
      jp: {
        title: "MySQLでは、テーブルやその他のオブジェクトを保持するデータベース構造の別の名前は？",
        body: "データベースの全体的な構成を説明するために使用される用語。",
        solution: "Schema (スキーマ)"
      },
      vi: {
        title: "Trong MySQL, tên gọi khác của cấu trúc cơ sở dữ liệu chứa các bảng và các đối tượng khác là gì?",
        body: "Thuật ngữ được sử dụng để mô tả tổ chức tổng thể của một cơ sở dữ liệu.",
        solution: "Schema (Lược đồ)"
      }
    }
  },
  {
    _id: "mysql-f-014",
    difficulty: "fresher",
    tags: ["basic", "distinct"],
    content: {
      en: {
        title: "How do you select only unique (non-duplicate) values from a column?",
        body: "The keyword used in a SELECT statement to return only unique results.",
        solution: "DISTINCT"
      },
      jp: {
        title: "カラムから一意な（重複のない）値のみを選択するには？",
        body: "SELECT文で使用され、一意な結果のみを返すキーワード。",
        solution: "DISTINCT"
      },
      vi: {
        title: "Làm thế nào để chọn chỉ các giá trị duy nhất (không trùng lặp) từ một cột?",
        body: "Từ khóa được sử dụng trong câu lệnh SELECT để chỉ trả về các kết quả duy nhất.",
        solution: "DISTINCT"
      }
    }
  },
  {
    _id: "mysql-f-015",
    difficulty: "fresher",
    tags: ["basic", "limit"],
    content: {
      en: {
        title: "Which clause is used to restrict the number of rows returned by a query?",
        body: "The clause often used for pagination to fetch a specific number of records.",
        solution: "LIMIT"
      },
      jp: {
        title: "クエリによって返される行の数を制限するために使用される句は？",
        body: "特定の数のレコードを取得するためにページネーションでよく使用される句。",
        solution: "LIMIT"
      },
      vi: {
        title: "Mệnh đề nào được dùng để giới hạn số lượng hàng được trả về bởi một truy vấn?",
        body: "Mệnh đề thường được sử dụng cho phân trang để lấy một số lượng bản ghi cụ thể.",
        solution: "LIMIT"
      }
    }
  },
  {
    _id: "mysql-f-016",
    difficulty: "fresher",
    tags: ["basic", "alter"],
    content: {
      en: {
        title: "Which SQL command is used to add, delete, or modify columns in an existing table?",
        body: "The DDL command for changing the structure of an existing table.",
        solution: "ALTER TABLE"
      },
      jp: {
        title: "既存のテーブルにカラムを追加、削除、または変更するために使用されるSQLコマンドは？",
        body: "既存のテーブルの構造を変更するためのDDLコマンド。",
        solution: "ALTER TABLE"
      },
      vi: {
        title: "Lệnh SQL nào được dùng để thêm, xóa hoặc sửa đổi các cột trong một bảng hiện có?",
        body: "Lệnh DDL để thay đổi cấu trúc của một bảng hiện có.",
        solution: "ALTER TABLE"
      }
    }
  },
  {
    _id: "mysql-f-017",
    difficulty: "fresher",
    tags: ["basic", "function"],
    content: {
      en: {
        title: "What MySQL function is used to calculate the number of rows in a result set?",
        body: "The aggregate function that returns the count of records.",
        solution: "COUNT()"
      },
      jp: {
        title: "結果セット内の行数を計算するために使用されるMySQL関数は？",
        body: "レコードの数を返す集計関数。",
        solution: "COUNT()"
      },
      vi: {
        title: "Hàm MySQL nào được dùng để tính số lượng hàng trong một tập kết quả?",
        body: "Hàm tổng hợp trả về số lượng bản ghi.",
        solution: "COUNT()"
      }
    }
  },
  {
    _id: "mysql-f-018",
    difficulty: "fresher",
    tags: ["basic", "join"],
    content: {
      en: {
        title: "What type of JOIN returns only the rows that have matching values in both tables?",
        body: "The most common type of join that combines data based on a matching key.",
        solution: "INNER JOIN"
      },
      jp: {
        title: "両方のテーブルで一致する値を持つ行のみを返すJOINの種類は？",
        body: "一致するキーに基づいてデータを結合する最も一般的なJOINの種類。",
        solution: "INNER JOIN"
      },
      vi: {
        title: "Loại JOIN nào chỉ trả về các hàng có giá trị khớp nhau ở cả hai bảng?",
        body: "Loại join phổ biến nhất kết hợp dữ liệu dựa trên khóa khớp.",
        solution: "INNER JOIN"
      }
    }
  },
  {
    _id: "mysql-f-019",
    difficulty: "fresher",
    tags: ["basic", "string"],
    content: {
      en: {
        title: "Which operator is used for pattern matching in the WHERE clause?",
        body: "The operator used with wildcards (like % and _) to search for a specified pattern in a column.",
        solution: "LIKE"
      },
      jp: {
        title: "WHERE句でパターンマッチングに使用される演算子は？",
        body: "カラム内の指定されたパターンを検索するためにワイルドカード（%や_など）と一緒に使用される演算子。",
        solution: "LIKE"
      },
      vi: {
        title: "Toán tử nào được dùng cho việc so khớp mẫu (pattern matching) trong mệnh đề WHERE?",
        body: "Toán tử được sử dụng với các ký tự đại diện (như % và _) để tìm kiếm một mẫu được chỉ định trong một cột.",
        solution: "LIKE"
      }
    }
  },
  {
    _id: "mysql-f-020",
    difficulty: "fresher",
    tags: ["basic", "alias"],
    content: {
      en: {
        title: "Which keyword is used to give a column or a table a temporary name?",
        body: "The keyword used to create an alias for a column or table.",
        solution: "AS"
      },
      jp: {
        title: "カラムまたはテーブルに一時的な名前を付けるために使用されるキーワードは？",
        body: "カラムまたはテーブルのエイリアスを作成するために使用されるキーワード。",
        solution: "AS"
      },
      vi: {
        title: "Từ khóa nào được dùng để đặt tên tạm thời cho một cột hoặc một bảng?",
        body: "Từ khóa được sử dụng để tạo một biệt danh (alias) cho một cột hoặc bảng.",
        solution: "AS"
      }
    }
  },
  {
    _id: "mysql-m-001",
    difficulty: "middle",
    tags: ["normalization", "3nf"],
    content: {
      en: {
        title: "Explain the concept of 3rd Normal Form (3NF) in database design.",
        body: "What are the requirements for a table to be in 3NF?",
        solution: "A table is in 3NF if it is in 2NF, and all non-key attributes are non-transitively dependent on the Primary Key. This means that no non-key attribute is dependent on another non-key attribute."
      },
      jp: {
        title: "データベース設計における第3正規形（3NF）の概念を説明してください。",
        body: "テーブルが3NFであるための要件は何ですか？",
        solution: "テーブルが2NFであり、すべての非キー属性が主キーに非推移的に依存している場合、そのテーブルは3NFです。これは、非キー属性が別の非キー属性に依存していないことを意味します。"
      },
      vi: {
        title: "Giải thích khái niệm Dạng Chuẩn Thứ 3 (3NF) trong thiết kế cơ sở dữ liệu.",
        body: "Các yêu cầu để một bảng đạt 3NF là gì?",
        solution: "Một bảng đạt 3NF nếu nó ở 2NF, và tất cả các thuộc tính không phải là khóa đều không phụ thuộc bắc cầu vào Khóa Chính. Điều này có nghĩa là không có thuộc tính không phải là khóa nào phụ thuộc vào một thuộc tính không phải là khóa khác."
      }
    }
  },
  {
    _id: "mysql-m-002",
    difficulty: "middle",
    tags: ["index", "b-tree", "hash"],
    content: {
      en: {
        title: "What is the difference between a B-Tree index and a Hash index in MySQL?",
        body: "Explain the typical use-cases and performance trade-offs for each index type.",
        solution: "B-Tree is the default and best for range queries (WHERE column > X) and sorting because data is ordered. Hash is only good for exact lookups (WHERE column = X) as it stores values as hash codes, but cannot handle ranges."
      },
      jp: {
        title: "MySQLにおけるB-Treeインデックスとハッシュインデックスの違いは？",
        body: "各インデックスタイプの一般的な使用例とパフォーマンスのトレードオフを説明してください。",
        solution: "B-Treeはデフォルトであり、データが順序付けられているため範囲クエリ（WHERE column > X）とソートに最適です。ハッシュは、値をハッシュコードとして格納するため、正確なルックアップ（WHERE column = X）にのみ適していますが、範囲を処理することはできません。"
      },
      vi: {
        title: "Sự khác biệt giữa index B-Tree và index Hash trong MySQL là gì?",
        body: "Giải thích các trường hợp sử dụng điển hình và đánh đổi về hiệu suất cho mỗi loại index.",
        solution: "B-Tree là mặc định và tốt nhất cho các truy vấn phạm vi (WHERE column > X) và sắp xếp vì dữ liệu được sắp xếp. Hash chỉ tốt cho việc tra cứu chính xác (WHERE column = X) vì nó lưu trữ giá trị dưới dạng mã băm, nhưng không thể xử lý phạm vi."
      }
    }
  },
  {
    _id: "mysql-m-003",
    difficulty: "middle",
    tags: ["transaction", "isolation"],
    content: {
      en: {
        title: "Name the four standard SQL Transaction Isolation Levels and briefly describe one of them.",
        body: "List the four levels and focus your description on READ COMMITTED.",
        solution: "Levels: **READ UNCOMMITTED**, **READ COMMITTED**, **REPEATABLE READ**, and **SERIALIZABLE**. **READ COMMITTED** prevents dirty reads but allows non-repeatable reads and phantom reads."
      },
      jp: {
        title: "4つの標準SQLトランザクション分離レベルを挙げ、そのうちの1つを簡潔に説明してください。",
        body: "4つのレベルをリストし、READ COMMITTEDに焦点を当てて説明してください。",
        solution: "レベル：**READ UNCOMMITTED**、**READ COMMITTED**、**REPEATABLE READ**、**SERIALIZABLE**。**READ COMMITTED**はダーティリードを防ぎますが、非再現性リードとファントムリードを許可します。"
      },
      vi: {
        title: "Kể tên bốn Cấp độ Cô lập Giao dịch (Transaction Isolation Levels) SQL tiêu chuẩn và mô tả ngắn gọn một trong số chúng.",
        body: "Liệt kê bốn cấp độ và tập trung mô tả của bạn vào READ COMMITTED.",
        solution: "Các cấp độ: **READ UNCOMMITTED**, **READ COMMITTED**, **REPEATABLE READ**, và **SERIALIZABLE**. **READ COMMITTED** ngăn chặn dirty read nhưng cho phép non-repeatable read và phantom read."
      }
    }
  },
  {
    _id: "mysql-m-004",
    difficulty: "middle",
    tags: ["performance", "explain"],
    content: {
      en: {
        title: "How do you analyze the execution plan of a SQL query in MySQL to identify performance bottlenecks?",
        body: "Which SQL command is used to show how MySQL will execute a statement?",
        solution: "The **EXPLAIN** command is used. You run `EXPLAIN SELECT ...` to get a breakdown of how the query optimizer plans to retrieve the data, including which indexes it will use and the order of table joins."
      },
      jp: {
        title: "MySQLでSQLクエリの実行計画を分析し、パフォーマンスのボトルネックを特定するにはどうすればよいですか？",
        body: "MySQLがステートメントをどのように実行するかを示すために使用されるSQLコマンドは？",
        solution: "**EXPLAIN**コマンドが使用されます。`EXPLAIN SELECT ...`を実行して、クエリオプティマイザがデータを取得する方法の内訳を取得します。これには、使用するインデックスやテーブル結合の順序が含まれます。"
      },
      vi: {
        title: "Làm thế nào để phân tích kế hoạch thực thi (execution plan) của một truy vấn SQL trong MySQL để xác định các tắc nghẽn hiệu suất?",
        body: "Lệnh SQL nào được dùng để hiển thị cách MySQL sẽ thực thi một câu lệnh?",
        solution: "Lệnh **EXPLAIN** được sử dụng. Bạn chạy `EXPLAIN SELECT ...` để nhận được phân tích chi tiết về cách bộ tối ưu hóa truy vấn dự định truy xuất dữ liệu, bao gồm cả các index mà nó sẽ sử dụng và thứ tự các bảng được join."
      }
    }
  },
  {
    _id: "mysql-m-005",
    difficulty: "middle",
    tags: ["stored procedure", "variable"],
    content: {
      en: {
        title: "How do you declare and use a local variable within a MySQL Stored Procedure?",
        body: "What keyword is used to declare a variable, and how is its value assigned?",
        solution: "You use the **DECLARE** keyword to define a variable (e.g., `DECLARE var_name INT DEFAULT 0;`). You use the **SET** keyword to assign a value (e.g., `SET var_name = 10;` or use the `SELECT ... INTO` structure)."
      },
      jp: {
        title: "MySQLストアドプロシージャ内でローカル変数を宣言して使用するにはどうすればよいですか？",
        body: "変数を宣言するために使用されるキーワードは？また、その値はどのように割り当てられますか？",
        solution: "変数を定義するために**DECLARE**キーワードを使用します（例：`DECLARE var_name INT DEFAULT 0;`）。値を割り当てるために**SET**キーワードを使用します（例：`SET var_name = 10;`、または`SELECT ... INTO`構造を使用します）。"
      },
      vi: {
        title: "Làm thế nào để khai báo và sử dụng một biến cục bộ trong một Stored Procedure MySQL?",
        body: "Từ khóa nào được dùng để khai báo biến, và giá trị của nó được gán như thế nào?",
        solution: "Bạn sử dụng từ khóa **DECLARE** để định nghĩa một biến (ví dụ: `DECLARE var_name INT DEFAULT 0;`). Bạn sử dụng từ khóa **SET** để gán giá trị (ví dụ: `SET var_name = 10;` hoặc sử dụng cấu trúc `SELECT ... INTO`)."
      }
    }
  },
  {
    _id: "mysql-m-006",
    difficulty: "middle",
    tags: ["window function", "cume_dist"],
    content: {
      en: {
        title: "What is the purpose of the MySQL CUME_DIST() window function?",
        body: "Explain what CUME_DIST calculates and how the result is presented.",
        solution: "CUME_DIST (Cumulative Distribution) calculates the relative position of a value within a set of values (partition). It returns a value between 0 and 1, representing the fraction of rows that are less than or equal to the current row's value."
      },
      jp: {
        title: "MySQL CUME_DIST()ウィンドウ関数の目的は？",
        body: "CUME_DISTが何を計算し、結果がどのように提示されるかを説明してください。",
        solution: "CUME_DIST（累積分布）は、値のセット（パーティション）内での値の相対的な位置を計算します。これは0から1の間の値を返し、現在の行の値以下の行の割合を表します。"
      },
      vi: {
        title: "Mục đích của hàm cửa sổ (window function) CUME_DIST() trong MySQL là gì?",
        body: "Giải thích CUME_DIST tính toán gì và kết quả được trình bày như thế nào.",
        solution: "CUME_DIST (Cumulative Distribution - Phân phối Tích lũy) tính toán vị trí tương đối của một giá trị trong một tập hợp các giá trị (phân vùng). Nó trả về một giá trị từ 0 đến 1, đại diện cho tỷ lệ các hàng có giá trị nhỏ hơn hoặc bằng giá trị của hàng hiện tại."
      }
    }
  },
  {
    _id: "mysql-m-007",
    difficulty: "middle",
    tags: ["join", "cross join"],
    content: {
      en: {
        title: "What is a CROSS JOIN, and what kind of result set does it produce?",
        body: "Explain the result size in terms of the rows of the joined tables.",
        solution: "A CROSS JOIN produces a Cartesian Product of the two tables involved. The result set includes every row from the first table combined with every row from the second table (Result Rows = Table A Rows * Table B Rows)."
      },
      jp: {
        title: "CROSS JOINとは何ですか、そしてどのような結果セットを生成しますか？",
        body: "結合されたテーブルの行に関して、結果のサイズを説明してください。",
        solution: "CROSS JOINは、関与する2つのテーブルのデカルト積を生成します。結果セットには、最初のテーブルのすべての行が2番目のテーブルのすべての行と組み合わされたものが含まれます（結果の行数 = テーブルAの行数 * テーブルBの行数）。"
      },
      vi: {
        title: "CROSS JOIN là gì, và nó tạo ra tập kết quả như thế nào?",
        body: "Giải thích kích thước kết quả theo số lượng hàng của các bảng được join.",
        solution: "CROSS JOIN tạo ra Tích Đề-các (Cartesian Product) của hai bảng liên quan. Tập kết quả bao gồm mọi hàng từ bảng thứ nhất được kết hợp với mọi hàng từ bảng thứ hai (Số hàng kết quả = Số hàng Bảng A * Số hàng Bảng B)."
      }
    }
  },
  {
    _id: "mysql-m-008",
    difficulty: "middle",
    tags: ["prepared statement", "security"],
    content: {
      en: {
        title: "What is the primary benefit of using Prepared Statements or Parameterized Queries in application code connecting to MySQL?",
        body: "Focus on the security aspect.",
        solution: "The primary benefit is **protection against SQL Injection attacks**. Prepared statements separate the SQL logic from the data, ensuring that user-supplied input is always treated as data, not executable code."
      },
      jp: {
        title: "MySQLに接続するアプリケーションコードでプリペアドステートメントまたはパラメーター化クエリを使用する主な利点は何ですか？",
        body: "セキュリティ面に焦点を当ててください。",
        solution: "主な利点は、**SQLインジェクション攻撃からの保護**です。プリペアドステートメントは、SQLロジックをデータから分離し、ユーザーが提供した入力が常にデータとして扱われ、実行可能なコードとして扱われないようにします。"
      },
      vi: {
        title: "Lợi ích chính của việc sử dụng Prepared Statements hoặc Parameterized Queries trong mã ứng dụng kết nối với MySQL là gì?",
        body: "Tập trung vào khía cạnh bảo mật.",
        solution: "Lợi ích chính là **bảo vệ chống lại các cuộc tấn công SQL Injection**. Prepared statements tách biệt logic SQL khỏi dữ liệu, đảm bảo rằng đầu vào do người dùng cung cấp luôn được coi là dữ liệu, chứ không phải mã có thể thực thi."
      }
    }
  },
  {
    _id: "mysql-m-009",
    difficulty: "middle",
    tags: ["data type", "json"],
    content: {
      en: {
        title: "What are the advantages of using the JSON data type in MySQL over storing JSON data in a VARCHAR or TEXT column?",
        body: "List the main features provided by the native JSON type.",
        solution: "The native JSON type provides: **Automatic validation** of JSON structure, **Efficient access** to sub-parts (using `->` or `JSON_EXTRACT`), and the ability to be indexed (using generated columns), which significantly improves querying performance."
      },
      jp: {
        title: "VARCHARまたはTEXTカラムにJSONデータを格納するのと比較して、MySQLでJSONデータ型を使用する利点は何ですか？",
        body: "ネイティブJSON型によって提供される主な機能をリストしてください。",
        solution: "ネイティブJSON型は、次の機能を提供します：JSON構造の**自動検証**、サブパーツへの**効率的なアクセス**（`->`または`JSON_EXTRACT`を使用）、およびインデックス付けの機能（生成されたカラムを使用）があり、これによりクエリのパフォーマンスが大幅に向上します。"
      },
      vi: {
        title: "Ưu điểm của việc sử dụng kiểu dữ liệu JSON trong MySQL so với việc lưu trữ dữ liệu JSON trong cột VARCHAR hoặc TEXT là gì?",
        body: "Liệt kê các tính năng chính được cung cấp bởi kiểu JSON gốc.",
        solution: "Kiểu JSON gốc cung cấp: **Xác thực tự động** cấu trúc JSON, **Tru cập hiệu quả** vào các phần tử con (sử dụng `->` hoặc `JSON_EXTRACT`), và khả năng được lập chỉ mục (sử dụng các cột được tạo ra), điều này cải thiện đáng kể hiệu suất truy vấn."
      }
    }
  },
  {
    _id: "mysql-m-010",
    difficulty: "middle",
    tags: ["stored function"],
    content: {
      en: {
        title: "What is the key difference between a MySQL Stored Procedure and a Stored Function?",
        body: "Focus on the return value and the ability to be used in a SELECT statement.",
        solution: "A Stored **Function** must return a single value and can be used directly within a standard SQL statement (like `SELECT` or `WHERE`). A Stored **Procedure** can return multiple result sets, cannot be used directly in a `SELECT` statement, and is executed using `CALL`."
      },
      jp: {
        title: "MySQLのストアドプロシージャとストアド関数の主な違いは？",
        body: "戻り値とSELECT文での使用可能性に焦点を当ててください。",
        solution: "ストアド**関数**は単一の値を返さなければならず、標準SQLステートメント（`SELECT`や`WHERE`など）内で直接使用できます。ストアド**プロシージャ**は複数の結果セットを返すことができ、`SELECT`ステートメント内で直接使用することはできず、`CALL`を使用して実行されます。"
      },
      vi: {
        title: "Sự khác biệt chính giữa Stored Procedure và Stored Function trong MySQL là gì?",
        body: "Tập trung vào giá trị trả về và khả năng được sử dụng trong câu lệnh SELECT.",
        solution: "Một Stored **Function** phải trả về một giá trị duy nhất và có thể được sử dụng trực tiếp trong một câu lệnh SQL tiêu chuẩn (như `SELECT` hoặc `WHERE`). Một Stored **Procedure** có thể trả về nhiều tập kết quả, không thể được sử dụng trực tiếp trong câu lệnh `SELECT`, và được thực thi bằng lệnh `CALL`."
      }
    }
  },
  {
    _id: "mysql-m-011",
    difficulty: "middle",
    tags: ["deadlock", "transaction"],
    content: {
      en: {
        title: "What is a 'deadlock' in a database transaction context, and how does MySQL handle it?",
        body: "Explain the condition and MySQL's typical resolution strategy.",
        solution: "A deadlock occurs when two or more transactions are waiting for locks held by each other, forming a circular dependency. MySQL (InnoDB) typically detects the deadlock and automatically rolls back one of the transactions (the 'victim') to allow the other one(s) to proceed."
      },
      jp: {
        title: "データベーストランザクションの文脈における「デッドロック」とは何ですか、そしてMySQLはそれをどのように処理しますか？",
        body: "状況とMySQLの典型的な解決戦略を説明してください。",
        solution: "デッドロックは、2つ以上のトランザクションが互いに保持しているロックを待機し、循環依存関係を形成したときに発生します。MySQL（InnoDB）は通常、デッドロックを検出し、トランザクションの1つ（「犠牲者」）を自動的にロールバックして、他のトランザクションが続行できるようにします。"
      },
      vi: {
        title: "Deadlock (Khóa chết) trong ngữ cảnh transaction cơ sở dữ liệu là gì, và MySQL xử lý nó như thế nào?",
        body: "Giải thích điều kiện và chiến lược giải quyết điển hình của MySQL.",
        solution: "Deadlock xảy ra khi hai hoặc nhiều transaction đang chờ đợi các khóa do nhau giữ, tạo thành một sự phụ thuộc vòng tròn. MySQL (InnoDB) thường phát hiện deadlock và tự động rollback một trong các transaction (nạn nhân) để cho phép các transaction khác tiếp tục."
      }
    }
  },
  {
    _id: "mysql-m-012",
    difficulty: "middle",
    tags: ["index", "covering index"],
    content: {
      en: {
        title: "What is a 'Covering Index,' and why is it beneficial for performance?",
        body: "Explain how a covering index avoids a common database operation.",
        solution: "A Covering Index is an index that includes all the columns required by a query, both in the SELECT list and the WHERE clause. It's beneficial because it allows MySQL to retrieve all necessary data directly from the index structure, avoiding a costly lookup in the main table data (table access)."
      },
      jp: {
        title: "「カバリングインデックス（Covering Index）」とは何ですか、そしてなぜパフォーマンスにとって有益なのですか？",
        body: "カバリングインデックスが一般的なデータベース操作をどのように回避するかを説明してください。",
        solution: "カバリングインデックスは、SELECTリストとWHERE句の両方で、クエリに必要なすべてのカラムを含むインデックスです。MySQLが必要なすべてのデータをインデックス構造から直接取得できるため、メインテーブルデータ（テーブルアクセス）でのコストのかかるルックアップを回避できるため有益です。"
      },
      vi: {
        title: "Covering Index là gì, và tại sao nó có lợi cho hiệu suất?",
        body: "Giải thích cách một covering index tránh được một thao tác cơ sở dữ liệu phổ biến.",
        solution: "Covering Index là một index bao gồm tất cả các cột được yêu cầu bởi một truy vấn, cả trong danh sách SELECT và mệnh đề WHERE. Nó có lợi vì nó cho phép MySQL truy xuất tất cả dữ liệu cần thiết trực tiếp từ cấu trúc index, tránh được một thao tác tra cứu tốn kém trong dữ liệu bảng chính (table access)."
      }
    }
  },
  {
    _id: "mysql-m-013",
    difficulty: "middle",
    tags: ["join", "lateral join"],
    content: {
      en: {
        title: "In modern MySQL, what is the role of the LATERAL keyword when used with a derived table in a JOIN operation?",
        body: "Explain how LATERAL changes the scope for the derived table.",
        solution: "The **LATERAL** keyword allows a derived table (subquery in the FROM clause) to reference columns from tables that appeared earlier in the FROM clause. Without LATERAL, the derived table cannot see columns from the preceding tables."
      },
      jp: {
        title: "最新のMySQLで、JOIN操作で派生テーブルとともに使用されるLATERALキーワードの役割は？",
        body: "LATERALが派生テーブルのスコープをどのように変更するかを説明してください。",
        solution: "**LATERAL**キーワードを使用すると、派生テーブル（FROM句内のサブクエリ）が、FROM句でそれより前に現れたテーブルのカラムを参照できるようになります。LATERALがないと、派生テーブルは先行するテーブルのカラムを見ることができません。"
      },
      vi: {
        title: "Trong MySQL hiện đại, vai trò của từ khóa LATERAL khi được sử dụng với một derived table trong thao tác JOIN là gì?",
        body: "Giải thích cách LATERAL thay đổi phạm vi (scope) cho derived table.",
        solution: "Từ khóa **LATERAL** cho phép một derived table (subquery trong mệnh đề FROM) tham chiếu đến các cột từ các bảng đã xuất hiện trước đó trong mệnh đề FROM. Nếu không có LATERAL, derived table không thể thấy các cột từ các bảng đứng trước nó."
      }
    }
  },
  {
    _id: "mysql-m-014",
    difficulty: "middle",
    tags: ["data type", "datetime"],
    content: {
      en: {
        title: "What is the key difference between the DATETIME and TIMESTAMP data types in MySQL?",
        body: "Focus on their storage, range, and automatic update behavior.",
        solution: "DATETIME: Stores date and time, fixed 8 bytes, range is broader (1000 to 9999), and is not automatically updated on record changes. TIMESTAMP: Stores date and time, 4 bytes, range is smaller (1970 to 2038), and can be automatically updated to the current time when a row is modified."
      },
      jp: {
        title: "MySQLにおけるDATETIMEとTIMESTAMPデータ型の主な違いは？",
        body: "それらのストレージ、範囲、および自動更新動作に焦点を当ててください。",
        solution: "DATETIME：日付と時刻を格納し、固定8バイト、範囲が広い（1000年から9999年）、レコードの変更時に自動的に更新されません。TIMESTAMP：日付と時刻を格納し、4バイト、範囲が狭い（1970年から2038年）、行が変更されたときに現在の時刻に自動的に更新されることがあります。"
      },
      vi: {
        title: "Sự khác biệt chính giữa kiểu dữ liệu DATETIME và TIMESTAMP trong MySQL là gì?",
        body: "Tập trung vào cách lưu trữ, phạm vi và hành vi cập nhật tự động của chúng.",
        solution: "DATETIME: Lưu trữ ngày và giờ, cố định 8 byte, phạm vi rộng hơn (1000 đến 9999), và không được tự động cập nhật khi bản ghi thay đổi. TIMESTAMP: Lưu trữ ngày và giờ, 4 byte, phạm vi nhỏ hơn (1970 đến 2038), và có thể được tự động cập nhật thành thời gian hiện tại khi một hàng được sửa đổi."
      }
    }
  },
  {
    _id: "mysql-m-015",
    difficulty: "middle",
    tags: ["locking", "row-level"],
    content: {
      en: {
        title: "In InnoDB, what is the significance of 'row-level locking' over 'table-level locking' for concurrency?",
        body: "Explain why row-level locking improves multi-user performance.",
        solution: "Row-level locking means only the specific rows being modified are locked, allowing other transactions to access and modify *different* rows in the same table concurrently. Table-level locking locks the entire table, forcing other transactions to wait, significantly reducing concurrency."
      },
      jp: {
        title: "InnoDBにおいて、同時実行性のための「行レベルロック」は「テーブルレベルロック」と比べてどのような重要性がありますか？",
        body: "行レベルロックがマルチユーザーのパフォーマンスを向上させる理由を説明してください。",
        solution: "行レベルロックとは、変更されている特定の行のみがロックされることを意味し、他のトランザクションが同じテーブル内の**異なる**行に同時にアクセスおよび変更できるようにします。テーブルレベルロックはテーブル全体をロックし、他のトランザクションを待機させるため、同時実行性が大幅に低下します。"
      },
      vi: {
        title: "Trong InnoDB, ý nghĩa của 'khóa cấp độ hàng' (row-level locking) so với 'khóa cấp độ bảng' (table-level locking) đối với tính đồng thời (concurrency) là gì?",
        body: "Giải thích tại sao khóa cấp độ hàng cải thiện hiệu suất đa người dùng.",
        solution: "Khóa cấp độ hàng có nghĩa là chỉ các hàng cụ thể đang được sửa đổi mới bị khóa, cho phép các transaction khác truy cập và sửa đổi các hàng **khác** trong cùng một bảng một cách đồng thời. Khóa cấp độ bảng khóa toàn bộ bảng, buộc các transaction khác phải chờ đợi, làm giảm đáng kể tính đồng thời."
      }
    }
  },
  {
    _id: "mysql-m-016",
    difficulty: "middle",
    tags: ["cte", "recursion"],
    content: {
      en: {
        title: "What is a Recursive Common Table Expression (CTE) in MySQL, and what is its primary use case?",
        body: "Define a recursive CTE and give an example of a problem it solves.",
        solution: "A Recursive CTE is a CTE that references itself, allowing it to repeatedly execute to handle hierarchical data. Its primary use case is querying and manipulating hierarchical data, such as organizational charts or bill-of-materials, by traversing a tree structure."
      },
      jp: {
        title: "MySQLにおける再帰的共通テーブル式（Recursive CTE）とは何ですか、そしてその主な使用例は？",
        body: "再帰的CTEを定義し、それが解決する問題の例を挙げてください。",
        solution: "再帰的CTEは、それ自体を参照するCTEであり、階層データを処理するために繰り返し実行することができます。その主な使用例は、組織図や部品表などの階層データを、ツリー構造を辿ることによってクエリおよび操作することです。"
      },
      vi: {
        title: "Recursive Common Table Expression (CTE) trong MySQL là gì, và trường hợp sử dụng chính của nó là gì?",
        body: "Định nghĩa một recursive CTE và đưa ra ví dụ về một vấn đề mà nó giải quyết.",
        solution: "Recursive CTE là một CTE tự tham chiếu, cho phép nó thực thi lặp đi lặp lại để xử lý dữ liệu phân cấp. Trường hợp sử dụng chính của nó là truy vấn và thao tác dữ liệu phân cấp, chẳng hạn như sơ đồ tổ chức hoặc danh sách vật liệu (bill-of-materials), bằng cách duyệt qua một cấu trúc cây."
      }
    }
  },
  {
    _id: "mysql-m-017",
    difficulty: "middle",
    tags: ["performance", "optimization"],
    content: {
      en: {
        title: "What is 'index merge optimization,' and is it generally a good sign in an EXPLAIN output?",
        body: "Explain what index merge does and its implication for performance.",
        solution: "Index merge optimization is when MySQL uses multiple indexes for a single query (e.g., combining results from an index on column A and an index on column B). It's generally **not a good sign**, as it indicates that a single, well-designed composite index might be missing or that the query is too complex for optimal indexing."
      },
      jp: {
        title: "「インデックスマージ最適化」とは何ですか、そしてEXPLAINの出力において一般的に良い兆候ですか？",
        body: "インデックスマージが何をするのか、そしてパフォーマンスへの影響を説明してください。",
        solution: "インデックスマージ最適化とは、MySQLが単一のクエリに対して複数のインデックスを使用することです（例：カラムAのインデックスとカラムBのインデックスからの結果を結合する）。これは一般的に**良い兆候ではありません**。なぜなら、単一の、適切に設計された複合インデックスが欠落しているか、クエリが最適なインデックス付けには複雑すぎることを示しているからです。"
      },
      vi: {
        title: "Index merge optimization là gì, và nó có thường là một dấu hiệu tốt trong kết quả EXPLAIN không?",
        body: "Giải thích index merge làm gì và hàm ý của nó đối với hiệu suất.",
        solution: "Index merge optimization là khi MySQL sử dụng nhiều index cho một truy vấn duy nhất (ví dụ: kết hợp kết quả từ một index trên cột A và một index trên cột B). Nó thường **không phải là dấu hiệu tốt**, vì nó chỉ ra rằng một index tổng hợp (composite index) đơn lẻ, được thiết kế tốt có thể bị thiếu hoặc truy vấn quá phức tạp để lập index tối ưu."
      }
    }
  },
  {
    _id: "mysql-m-018",
    difficulty: "middle",
    tags: ["partitioning"],
    content: {
      en: {
        title: "What is horizontal partitioning (sharding) of a table, and what is its main goal?",
        body: "Define the technique and its benefit regarding data volume and I/O.",
        solution: "Horizontal partitioning involves dividing a large table into smaller, more manageable physical pieces (partitions) based on a rule (e.g., date range or hash). Its main goal is to improve query performance by reducing the amount of data that needs to be scanned and to manage very large databases more easily."
      },
      jp: {
        title: "テーブルの水平パーティショニング（シャーディング）とは何ですか、そしてその主な目的は？",
        body: "この手法と、データ量およびI/Oに関するその利点を定義してください。",
        solution: "水平パーティショニングには、大きなテーブルをルールに基づいてより小さく、管理しやすい物理的なピース（パーティション）に分割することが含まれます（例：日付範囲やハッシュ）。その主な目的は、スキャンする必要のあるデータ量を減らすこと、および非常に大きなデータベースをより簡単に管理することで、クエリのパフォーマンスを向上させることです。"
      },
      vi: {
        title: "Phân vùng ngang (horizontal partitioning/sharding) của một bảng là gì, và mục tiêu chính của nó là gì?",
        body: "Định nghĩa kỹ thuật này và lợi ích của nó liên quan đến khối lượng dữ liệu và I/O.",
        solution: "Phân vùng ngang bao gồm việc chia một bảng lớn thành các phần vật lý nhỏ hơn, dễ quản lý hơn (các phân vùng) dựa trên một quy tắc (ví dụ: phạm vi ngày hoặc hàm băm). Mục tiêu chính của nó là cải thiện hiệu suất truy vấn bằng cách giảm lượng dữ liệu cần được quét và quản lý các cơ sở dữ liệu rất lớn dễ dàng hơn."
      }
    }
  },
  {
    _id: "mysql-m-019",
    difficulty: "middle",
    tags: ["data type", "enum", "set"],
    content: {
      en: {
        title: "What is the functional difference between the ENUM and SET data types in MySQL?",
        body: "Explain how many values from the predefined list each type can store in a column.",
        solution: "ENUM (Enumeration) allows a column to hold **exactly one** value chosen from a predefined list of string values. SET allows a column to hold **zero or more** values from a predefined list of string values (a combination of values)."
      },
      jp: {
        title: "MySQLにおけるENUMとSETデータ型の機能的な違いは？",
        body: "各型が事前に定義されたリストから、カラムにいくつの値を格納できるかを説明してください。",
        solution: "ENUM（列挙型）は、事前に定義された文字列値のリストから選択された**ちょうど1つ**の値をカラムに保持することを許可します。SETは、事前に定義された文字列値のリストから**ゼロまたは複数**の値をカラムに保持することを許可します（値の組み合わせ）。"
      },
      vi: {
        title: "Sự khác biệt về chức năng giữa kiểu dữ liệu ENUM và SET trong MySQL là gì?",
        body: "Giải thích mỗi kiểu có thể lưu trữ bao nhiêu giá trị từ danh sách được xác định trước trong một cột.",
        solution: "ENUM (Enumeration) cho phép một cột chứa **chính xác một** giá trị được chọn từ một danh sách các giá trị chuỗi được xác định trước. SET cho phép một cột chứa **không hoặc nhiều** giá trị từ một danh sách các giá trị chuỗi được xác định trước (một sự kết hợp các giá trị)."
      }
    }
  },
  {
    _id: "mysql-m-020",
    difficulty: "middle",
    tags: ["regex", "regexp"],
    content: {
      en: {
        title: "Which operator is used to perform regular expression matching in MySQL's WHERE clause?",
        body: "The operator used for advanced pattern matching that is more powerful than LIKE.",
        solution: "REGEXP or RLIKE"
      },
      jp: {
        title: "MySQLのWHERE句で正規表現マッチングを実行するために使用される演算子は？",
        body: "LIKEよりも強力な高度なパターンマッチングに使用される演算子。",
        solution: "REGEXP または RLIKE"
      },
      vi: {
        title: "Toán tử nào được dùng để thực hiện so khớp biểu thức chính quy (regular expression matching) trong mệnh đề WHERE của MySQL?",
        body: "Toán tử được sử dụng cho việc so khớp mẫu nâng cao mạnh hơn LIKE.",
        solution: "REGEXP hoặc RLIKE"
      }
    }
  },
  {
    _id: "mysql-s-001",
    difficulty: "senior",
    tags: ["replication", "asynchronous"],
    content: {
      en: {
        title: "Explain the main trade-off associated with Asynchronous Replication in MySQL.",
        body: "What is the major risk/downside compared to synchronous or semi-synchronous replication?",
        solution: "The main trade-off is the risk of **data loss** or **data inconsistency** (also known as a 'split-brain' scenario) on the replica if the primary server fails before the replica has had a chance to receive and apply all the binary log events. It prioritizes performance/low latency over absolute durability."
      },
      jp: {
        title: "MySQLにおける非同期レプリケーションに関連する主なトレードオフを説明してください。",
        body: "同期レプリケーションまたは準同期レプリケーションと比較した主要なリスク/欠点は何ですか？",
        solution: "主なトレードオフは、レプリカがすべてのバイナリログイベントを受信して適用する機会を得る前にプライマリサーバーが故障した場合に、レプリカで**データ損失**または**データ不整合**（「スプリットブレイン」シナリオとしても知られる）のリスクがあることです。絶対的な耐久性よりもパフォーマンス/低レイテンシを優先します。"
      },
      vi: {
        title: "Giải thích sự đánh đổi chính liên quan đến Asynchronous Replication (Sao chép Bất đồng bộ) trong MySQL.",
        body: "Rủi ro/nhược điểm lớn so với sao chép đồng bộ hoặc bán đồng bộ là gì?",
        solution: "Sự đánh đổi chính là rủi ro **mất dữ liệu** hoặc **không nhất quán dữ liệu** (còn được gọi là kịch bản 'split-brain') trên bản sao nếu máy chủ chính bị lỗi trước khi bản sao có cơ hội nhận và áp dụng tất cả các sự kiện nhật ký nhị phân. Nó ưu tiên hiệu suất/độ trễ thấp hơn tính bền vững tuyệt đối."
      }
    }
  },
  {
    _id: "mysql-s-002",
    difficulty: "senior",
    tags: ["sharding", "hashing"],
    content: {
      en: {
        title: "Describe the 'Rehashing' problem in a basic Hash-based sharding system and a common solution.",
        body: "When does Rehashing occur, and what technique is used to minimize the impact?",
        solution: "Rehashing occurs when the number of database shards changes (scaling up or down), causing the hash function to change and requiring a massive, costly movement of data between almost all shards. **Consistent Hashing** is a common technique used to minimize this impact by ensuring that only $K/N$ keys need to be remapped when the number of servers $N$ changes."
      },
      jp: {
        title: "基本的なハッシュベースのシャーディングシステムにおける「リハッシュ」の問題と一般的な解決策を説明してください。",
        body: "リハッシュはいつ発生し、影響を最小限に抑えるためにどのような手法が使用されますか？",
        solution: "リハッシュは、データベースシャードの数が変化したとき（スケールアップまたはスケールダウン）、ハッシュ関数が変更され、ほぼすべてのシャード間で大規模でコストのかかるデータの移動が必要になるときに発生します。**一貫性ハッシュ（Consistent Hashing）**は、サーバー数$N$が変更されたときに$K/N$のキーのみが再マップされるようにすることで、この影響を最小限に抑えるために使用される一般的な手法です。"
      },
      vi: {
        title: "Mô tả vấn đề 'Rehashing' trong một hệ thống sharding dựa trên Hash cơ bản và một giải pháp phổ biến.",
        body: "Rehashing xảy ra khi nào, và kỹ thuật nào được sử dụng để giảm thiểu tác động?",
        solution: "Rehashing xảy ra khi số lượng shard cơ sở dữ liệu thay đổi (tăng hoặc giảm quy mô), khiến hàm băm thay đổi và đòi hỏi một sự di chuyển dữ liệu lớn, tốn kém giữa gần như tất cả các shard. **Consistent Hashing** là một kỹ thuật phổ biến được sử dụng để giảm thiểu tác động này bằng cách đảm bảo rằng chỉ $K/N$ khóa cần được ánh xạ lại khi số lượng máy chủ $N$ thay đổi."
      }
    }
  },
  {
    _id: "mysql-s-003",
    difficulty: "senior",
    tags: ["query optimization", "subquery"],
    content: {
      en: {
        title: "When should you prefer a JOIN over a correlated subquery, and what is the typical performance impact?",
        body: "Explain the execution method of a correlated subquery.",
        solution: "A JOIN should generally be preferred. A **correlated subquery** is executed once for *every single row* processed by the outer query, making it extremely inefficient and slow for large datasets. A JOIN executes only once and uses efficient internal table access methods."
      },
      jp: {
        title: "相関サブクエリよりもJOINを優先すべきなのはいつですか、また典型的なパフォーマンスへの影響は？",
        body: "相関サブクエリの実行方法を説明してください。",
        solution: "JOINは一般的に優先されるべきです。**相関サブクエリ**は、外部クエリによって処理される*単一の行ごと*に1回実行されるため、大規模なデータセットでは極めて非効率的で遅くなります。JOINは1回だけ実行され、効率的な内部テーブルアクセス方法を使用します。"
      },
      vi: {
        title: "Khi nào bạn nên ưu tiên JOIN hơn một correlated subquery (truy vấn con tương quan), và tác động hiệu suất điển hình là gì?",
        body: "Giải thích phương thức thực thi của một correlated subquery.",
        solution: "Nên ưu tiên JOIN hơn. Một **correlated subquery** được thực thi một lần cho *mỗi hàng* được xử lý bởi truy vấn bên ngoài, làm cho nó cực kỳ kém hiệu quả và chậm đối với các tập dữ liệu lớn. JOIN chỉ thực thi một lần và sử dụng các phương pháp truy cập bảng nội bộ hiệu quả."
      }
    }
  },
  {
    _id: "mysql-s-004",
    difficulty: "senior",
    tags: ["transaction", "mvcc"],
    content: {
      en: {
        title: "How does InnoDB's Multi-Version Concurrency Control (MVCC) improve performance?",
        body: "Explain its role in allowing simultaneous Read and Write operations.",
        solution: "MVCC allows non-locking reads. When a transaction reads data, it sees a consistent snapshot of the data from the moment the transaction started (or the last read operation), even if other transactions are modifying the data concurrently. This avoids the need for read locks, significantly improving concurrency and performance."
      },
      jp: {
        title: "InnoDBのマルチバージョン同時実行制御（MVCC）はどのようにパフォーマンスを向上させますか？",
        body: "同時読み取り操作と書き込み操作を許可する上でのその役割を説明してください。",
        solution: "MVCCは非ロッキング読み取りを可能にします。トランザクションがデータを読み取るとき、他のトランザクションが同時にデータを変更していても、トランザクションが開始された瞬間（または最後の読み取り操作）からのデータの一貫したスナップショットが表示されます。これにより、読み取りロックの必要がなくなり、同時実行性とパフォーマンスが大幅に向上します。"
      },
      vi: {
        title: "Multi-Version Concurrency Control (MVCC) của InnoDB cải thiện hiệu suất như thế nào?",
        body: "Giải thích vai trò của nó trong việc cho phép các hoạt động Đọc và Ghi diễn ra đồng thời.",
        solution: "MVCC cho phép các thao tác đọc không khóa. Khi một transaction đọc dữ liệu, nó thấy một bản chụp (snapshot) nhất quán của dữ liệu từ thời điểm transaction bắt đầu (hoặc thao tác đọc cuối cùng), ngay cả khi các transaction khác đang sửa đổi dữ liệu đồng thời. Điều này tránh được nhu cầu khóa đọc, cải thiện đáng kể tính đồng thời và hiệu suất."
      }
    }
  },
  {
    _id: "mysql-s-005",
    difficulty: "senior",
    tags: ["data modeling", "denormalization"],
    content: {
      en: {
        title: "Under what specific circumstances is Denormalization considered a valid and necessary design choice?",
        body: "Explain the trade-offs and when the performance gain outweighs the data redundancy cost.",
        solution: "Denormalization is valid when the cost of frequent, complex JOINs (in highly normalized schemas) drastically reduces read performance, and the performance gain from fewer joins outweighs the cost of data redundancy and the complexity of maintaining data consistency during writes (e.g., in reporting/OLAP systems where writes are rare and reads are critical)."
      },
      jp: {
        title: "どのような特定の状況下で、非正規化は有効かつ必要な設計の選択肢と見なされますか？",
        body: "トレードオフと、パフォーマンスの向上がデータの冗長性のコストを上回る時期を説明してください。",
        solution: "非正規化は、頻繁で複雑なJOINのコスト（高度に正規化されたスキーマで）が読み取りパフォーマンスを大幅に低下させ、JOINの削減によるパフォーマンスの向上がデータの冗長性のコストと書き込み時のデータ整合性の維持の複雑さを上回る場合に有効です（例：書き込みがまれで読み取りが重要なレポート/OLAPシステム）。"
      },
      vi: {
        title: "Trong những trường hợp cụ thể nào thì Denormalization (Phi chuẩn hóa) được coi là một lựa chọn thiết kế hợp lệ và cần thiết?",
        body: "Giải thích sự đánh đổi và khi nào lợi ích hiệu suất lớn hơn chi phí dư thừa dữ liệu.",
        solution: "Phi chuẩn hóa hợp lệ khi chi phí của các phép JOIN phức tạp, thường xuyên (trong các lược đồ được chuẩn hóa cao) làm giảm đáng kể hiệu suất đọc, và lợi ích hiệu suất từ việc ít join hơn vượt trội so với chi phí dư thừa dữ liệu và độ phức tạp trong việc duy trì tính nhất quán dữ liệu trong quá trình ghi (ví dụ: trong các hệ thống báo cáo/OLAP nơi việc ghi hiếm khi xảy ra và đọc là rất quan trọng)."
      }
    }
  },
  {
    _id: "mysql-s-006",
    difficulty: "senior",
    tags: ["architecture", "proxy", "galera"],
    content: {
      en: {
        title: "In a highly-available MySQL cluster (like Galera), what is the role of a Proxy Layer (e.g., ProxySQL or MaxScale)?",
        body: "List two critical functions provided by the proxy layer.",
        solution: "The Proxy Layer acts as an intermediary between the application and the database cluster. Two critical functions are: 1. **Load Balancing:** Distributing read/write queries across multiple nodes. 2. **Connection Pooling/Health Check:** Monitoring node health and automatically routing traffic away from failed nodes (failover) to ensure continuous availability."
      },
      jp: {
        title: "高可用性のMySQLクラスター（Galeraなど）において、プロキシレイヤー（ProxySQLやMaxScaleなど）の役割は？",
        body: "プロキシレイヤーによって提供される2つの重要な機能をリストしてください。",
        solution: "プロキシレイヤーは、アプリケーションとデータベースクラスター間の仲介役として機能します。2つの重要な機能は次のとおりです。1. **ロードバランシング**：読み取り/書き込みクエリを複数のノードに分散します。2. **接続プーリング/ヘルスチェック**：ノードの健全性を監視し、障害が発生したノードからトラフィックを自動的にルーティングして（フェイルオーバー）、継続的な可用性を確保します。"
      },
      vi: {
        title: "Trong một cụm MySQL có tính sẵn sàng cao (ví dụ: Galera), vai trò của Lớp Proxy (ví dụ: ProxySQL hoặc MaxScale) là gì?",
        body: "Liệt kê hai chức năng quan trọng được cung cấp bởi lớp proxy.",
        solution: "Lớp Proxy hoạt động như một bên trung gian giữa ứng dụng và cụm cơ sở dữ liệu. Hai chức năng quan trọng là: 1. **Cân bằng tải (Load Balancing)**: Phân phối các truy vấn đọc/ghi trên nhiều node. 2. **Kiểm tra sức khỏe/Gộp kết nối (Health Check/Connection Pooling)**: Giám sát tình trạng node và tự động chuyển hướng lưu lượng truy cập khỏi các node bị lỗi (failover) để đảm bảo tính sẵn sàng liên tục."
      }
    }
  },
  {
    _id: "mysql-s-007",
    difficulty: "senior",
    tags: ["query optimization", "wildcard"],
    content: {
      en: {
        title: "Why is using a leading wildcard (e.g., `WHERE name LIKE '%smith'`) highly detrimental to index utilization and query performance?",
        body: "Explain which part of the index structure the query optimizer cannot use.",
        solution: "A leading wildcard prevents the query optimizer from using the leftmost prefix of the index for searching. It forces a full index scan (or sometimes a full table scan), as the index must be scanned from beginning to end, significantly degrading performance because the B-Tree structure cannot be navigated effectively."
      },
      jp: {
        title: "先頭のワイルドカード（例：`WHERE name LIKE '%smith'`）を使用すると、インデックスの使用率とクエリのパフォーマンスに大きな悪影響を与えるのはなぜですか？",
        body: "クエリオプティマイザが使用できないインデックス構造のどの部分を説明してください。",
        solution: "先頭のワイルドカードは、クエリオプティマイザが検索のためにインデックスの左端のプレフィックスを使用することを妨げます。これは、B-Tree構造を効果的にナビゲートできないため、インデックスを最初から最後までスキャンする必要があるため、完全なインデックススキャン（または時には完全なテーブルスキャン）を強制し、パフォーマンスを大幅に低下させます。"
      },
      vi: {
        title: "Tại sao việc sử dụng ký tự đại diện đứng đầu (ví dụ: `WHERE name LIKE '%smith'`) lại gây bất lợi lớn cho việc sử dụng index và hiệu suất truy vấn?",
        body: "Giải thích phần nào của cấu trúc index mà bộ tối ưu hóa truy vấn không thể sử dụng.",
        solution: "Ký tự đại diện đứng đầu ngăn cản bộ tối ưu hóa truy vấn sử dụng tiền tố ngoài cùng bên trái của index để tìm kiếm. Nó buộc phải quét toàn bộ index (hoặc đôi khi quét toàn bộ bảng), vì index phải được quét từ đầu đến cuối, làm giảm đáng kể hiệu suất vì cấu trúc B-Tree không thể được điều hướng một cách hiệu quả."
      }
    }
  },
  {
    _id: "mysql-s-008",
    difficulty: "senior",
    tags: ["index", "composite", "order"],
    content: {
      en: {
        title: "When creating a composite index (A, B, C), what is the general rule for the column order (Leftmost Prefix Rule)?",
        body: "Explain why the order is important for queries that use a subset of the indexed columns.",
        solution: "The rule is to place the column used most frequently in the **WHERE** clause or as the first column in an **ORDER BY** clause first (the highest cardinality/selectivity). The order is critical because MySQL can only use the index for queries that include the leftmost prefix of the composite index (e.g., A, or A & B, but not B or C alone)."
      },
      jp: {
        title: "複合インデックス（A、B、C）を作成する際、カラムの順序（最左プレフィックスルール）に関する一般的なルールは？",
        body: "インデックス付きカラムのサブセットを使用するクエリにとって、順序が重要である理由を説明してください。",
        solution: "ルールは、**WHERE**句で最も頻繁に使用されるカラム、または**ORDER BY**句で最初のカラムとして使用されるカラムを最初に配置することです（最も高いカーディナリティ/選択性）。順序は、MySQLが複合インデックスの最左プレフィックスを含むクエリにのみインデックスを使用できるため、重要です（例：A、またはAとB、ただしBまたはCのみではない）。"
      },
      vi: {
        title: "Khi tạo một index tổng hợp (composite index) (A, B, C), quy tắc chung về thứ tự cột (Leftmost Prefix Rule) là gì?",
        body: "Giải thích tại sao thứ tự lại quan trọng đối với các truy vấn sử dụng một tập hợp con của các cột được lập index.",
        solution: "Quy tắc là đặt cột được sử dụng thường xuyên nhất trong mệnh đề **WHERE** hoặc là cột đầu tiên trong mệnh đề **ORDER BY** lên đầu tiên (có tính chọn lọc/cardinality cao nhất). Thứ tự là rất quan trọng vì MySQL chỉ có thể sử dụng index cho các truy vấn bao gồm tiền tố ngoài cùng bên trái của index tổng hợp (ví dụ: A, hoặc A & B, nhưng không phải B hoặc C một mình)."
      }
    }
  },
  {
    _id: "mysql-s-009",
    difficulty: "senior",
    tags: ["backup", "point-in-time"],
    content: {
      en: {
        title: "How is Point-in-Time Recovery (PITR) typically achieved in MySQL, and what is the role of the binary log?",
        body: "Explain the two main components needed for PITR.",
        solution: "PITR is achieved by combining the most recent **full backup** (a snapshot of the data) with the database's **binary log (binlog)**. The binlog records all data-modifying events. To recover, you restore the full backup and then 'replay' the binlog events sequentially up to the exact point in time just before the failure/error occurred."
      },
      jp: {
        title: "MySQLでPoint-in-Time Recovery（PITR）は通常どのように実現されますか、そしてバイナリログの役割は？",
        body: "PITRに必要な2つの主要なコンポーネントを説明してください。",
        solution: "PITRは、最新の**フルバックアップ**（データのスナップショット）とデータベースの**バイナリログ（binlog）**を組み合わせることで実現されます。binlogはすべてのデータ変更イベントを記録します。リカバリするには、フルバックアップを復元し、障害/エラーが発生する直前の正確な時点までbinlogイベントを順番に「リプレイ」します。"
      },
      vi: {
        title: "Point-in-Time Recovery (PITR) thường được thực hiện như thế nào trong MySQL, và vai trò của binary log là gì?",
        body: "Giải thích hai thành phần chính cần thiết cho PITR.",
        solution: "PITR được thực hiện bằng cách kết hợp **bản sao lưu đầy đủ** gần nhất (một bản chụp của dữ liệu) với **binary log (binlog)** của cơ sở dữ liệu. Binlog ghi lại tất cả các sự kiện thay đổi dữ liệu. Để phục hồi, bạn khôi phục bản sao lưu đầy đủ và sau đó 'phát lại' các sự kiện binlog theo trình tự cho đến đúng thời điểm ngay trước khi lỗi/sự cố xảy ra."
      }
    }
  },
  {
    _id: "mysql-s-010",
    difficulty: "senior",
    tags: ["performance", "caching", "query cache"],
    content: {
      en: {
        title: "Why was the MySQL Query Cache removed in modern versions (e.g., MySQL 8.0)?",
        body: "Explain the scaling problem it caused under high-concurrency workloads.",
        solution: "The Query Cache was removed because it was a major source of contention and scalability issues. Even a single `INSERT`, `UPDATE`, or `DELETE` on a table would invalidate *all* cached queries for that table, leading to frequent lock contention as sessions waited to update the cache. This made performance worse, not better, under high-concurrency write workloads."
      },
      jp: {
        title: "MySQLクエリキャッシュが最新バージョン（MySQL 8.0など）で削除されたのはなぜですか？",
        body: "高同時実行ワークロード下でそれが引き起こしたスケーリングの問題を説明してください。",
        solution: "クエリキャッシュは、競合とスケーラビリティの問題の主要な原因であったため削除されました。テーブルに対する単一の`INSERT`、`UPDATE`、または`DELETE`でさえ、そのテーブルの*すべて*のキャッシュされたクエリを無効にし、セッションがキャッシュを更新するのを待つため、頻繁なロック競合につながりました。これにより、高同時実行の書き込みワークロード下ではパフォーマンスが向上するどころか悪化しました。"
      },
      vi: {
        title: "Tại sao Query Cache của MySQL bị loại bỏ trong các phiên bản hiện đại (ví dụ: MySQL 8.0)?",
        body: "Giải thích vấn đề mở rộng quy mô mà nó gây ra dưới các khối lượng công việc có tính đồng thời cao.",
        solution: "Query Cache đã bị loại bỏ vì nó là một nguồn chính gây ra tranh chấp và các vấn đề về khả năng mở rộng. Ngay cả một lệnh `INSERT`, `UPDATE`, hoặc `DELETE` duy nhất trên một bảng cũng làm mất hiệu lực *tất cả* các truy vấn đã được cache cho bảng đó, dẫn đến tranh chấp khóa thường xuyên khi các phiên đợi để cập nhật cache. Điều này làm cho hiệu suất tồi tệ hơn, chứ không tốt hơn, dưới các khối lượng công việc ghi có tính đồng thời cao."
      }
    }
  },
  {
    _id: "mysql-s-011",
    difficulty: "senior",
    tags: ["system variable", "innodb"],
    content: {
      en: {
        title: "What is the critical role of the `innodb_buffer_pool_size` system variable?",
        body: "Explain what it stores and how its size impacts performance.",
        solution: "The `innodb_buffer_pool_size` defines the memory area where InnoDB caches table data and indexes. This is the most crucial variable for performance. Setting it too small leads to excessive disk I/O (buffer flushing), while setting it too large (leaving insufficient OS memory) can lead to swapping and instability."
      },
      jp: {
        title: "システム変数 `innodb_buffer_pool_size` の重要な役割は？",
        body: "それが何を格納し、そのサイズがパフォーマンスにどのように影響するかを説明してください。",
        solution: "`innodb_buffer_pool_size` は、InnoDBがテーブルデータとインデックスをキャッシュするメモリ領域を定義します。これはパフォーマンスにとって最も重要な変数です。小さすぎると過剰なディスクI/O（バッファフラッシュ）につながり、大きすぎると（OSメモリが不足し）スワッピングや不安定性につながる可能性があります。"
      },
      vi: {
        title: "Vai trò quan trọng của biến hệ thống `innodb_buffer_pool_size` là gì?",
        body: "Giải thích nó lưu trữ gì và kích thước của nó ảnh hưởng đến hiệu suất như thế nào.",
        solution: "`innodb_buffer_pool_size` định nghĩa khu vực bộ nhớ nơi InnoDB cache dữ liệu bảng và các index. Đây là biến quan trọng nhất đối với hiệu suất. Đặt nó quá nhỏ dẫn đến I/O đĩa quá mức (buffer flushing), trong khi đặt nó quá lớn (để lại không đủ bộ nhớ OS) có thể dẫn đến việc hoán đổi (swapping) và mất ổn định."
      }
    }
  },
  {
    _id: "mysql-s-012",
    difficulty: "senior",
    tags: ["system design", "write scaling"],
    content: {
      en: {
        title: "In a high-write-volume application, why is it significantly harder to scale writes compared to reads in MySQL?",
        body: "Focus on the constraint on the primary server and the need for data consistency.",
        solution: "Reads can be scaled horizontally by adding more replica (read-only) servers (Read Replication/Load Balancing). Writes must primarily go to the single Primary/Master server to ensure transactional integrity and immediate data consistency across the system. Scaling writes often requires complex techniques like sharding, which introduces application-level complexity."
      },
      jp: {
        title: "書き込み量の多いアプリケーションで、MySQLの読み取りと比較して書き込みのスケーリングが著しく難しいのはなぜですか？",
        body: "プライマリサーバーの制約とデータ整合性の必要性に焦点を当ててください。",
        solution: "読み取りは、より多くのレプリカ（読み取り専用）サーバーを追加することで水平にスケーリングできます（読み取りレプリケーション/ロードバランシング）。書き込みは、トランザクションの整合性とシステム全体での即時のデータ整合性を確保するために、主に単一のプライマリ/マスターサーバーに行く必要があります。書き込みのスケーリングには、シャーディングなどの複雑な手法が必要になることが多く、アプリケーションレベルの複雑さが生じます。"
      },
      vi: {
        title: "Trong một ứng dụng có khối lượng ghi cao, tại sao việc mở rộng quy mô ghi (writes) lại khó hơn đáng kể so với đọc (reads) trong MySQL?",
        body: "Tập trung vào ràng buộc trên máy chủ chính và nhu cầu về tính nhất quán dữ liệu.",
        solution: "Đọc có thể được mở rộng quy mô theo chiều ngang bằng cách thêm nhiều máy chủ bản sao (chỉ đọc) hơn (Read Replication/Load Balancing). Ghi phải chủ yếu đi đến máy chủ Chính/Master duy nhất để đảm bảo tính toàn vẹn transaction và tính nhất quán dữ liệu tức thì trên toàn hệ thống. Mở rộng quy mô ghi thường đòi hỏi các kỹ thuật phức tạp như sharding, điều này làm tăng thêm sự phức tạp ở cấp độ ứng dụng."
      }
    }
  },
  {
    _id: "mysql-s-013",
    difficulty: "senior",
    tags: ["query optimization", "case"],
    content: {
      en: {
        title: "When using the CASE expression inside a WHERE clause, why can this design decision dramatically impact query performance?",
        body: "Explain how it affects the ability to use indexes.",
        solution: "Using functions or expressions (like CASE) on a column in the WHERE clause makes the column 'non-sargable'. The query optimizer cannot use any index on that column, forcing a full index scan or full table scan. The column should appear alone on one side of the comparison operator to utilize the index efficiently (e.g., rewrite logic to use OR or separate WHERE conditions)."
      },
      jp: {
        title: "WHERE句内でCASE式を使用すると、この設計上の決定がクエリのパフォーマンスに劇的な影響を与える可能性があるのはなぜですか？",
        body: "インデックスを使用する能力にどのように影響するかを説明してください。",
        solution: "WHERE句内のカラムで関数や式（CASEなど）を使用すると、そのカラムが 'non-sargable' になります。クエリオプティマイザはそのカラムのインデックスを使用できなくなり、完全なインデックススキャンまたは完全なテーブルスキャンを強制します。インデックスを効率的に利用するためには、カラムが比較演算子の片側に単独で現れるべきです（例：ORまたは個別のWHERE条件を使用するようにロジックを書き直す）。"
      },
      vi: {
        title: "Khi sử dụng biểu thức CASE bên trong mệnh đề WHERE, tại sao quyết định thiết kế này có thể tác động mạnh đến hiệu suất truy vấn?",
        body: "Giải thích cách nó ảnh hưởng đến khả năng sử dụng các index.",
        solution: "Sử dụng các hàm hoặc biểu thức (như CASE) trên một cột trong mệnh đề WHERE làm cho cột đó trở nên 'non-sargable'. Bộ tối ưu hóa truy vấn không thể sử dụng bất kỳ index nào trên cột đó, buộc phải quét toàn bộ index hoặc quét toàn bộ bảng. Cột nên xuất hiện một mình ở một phía của toán tử so sánh để sử dụng index một cách hiệu quả (ví dụ: viết lại logic để sử dụng OR hoặc các điều kiện WHERE riêng biệt)."
      }
    }
  },
  {
    _id: "mysql-s-014",
    difficulty: "senior",
    tags: ["deadlock", "for update", "locking"],
    content: {
      en: {
        title: "How can the `FOR UPDATE` clause in a `SELECT` statement help prevent a specific type of deadlock in a transaction?",
        body: "Explain what `FOR UPDATE` does and how it affects the transaction's locking strategy.",
        solution: "The `FOR UPDATE` clause places an exclusive (write) lock on the selected rows, preventing other transactions from modifying or locking those rows until the current transaction is committed or rolled back. This ensures a consistent read/write order for multiple transactions, which is often key to breaking the circular dependency that causes deadlocks."
      },
      jp: {
        title: "SELECT文の`FOR UPDATE`句は、トランザクションにおける特定の種類のデッドロックを防ぐのにどのように役立ちますか？",
        body: "`FOR UPDATE`が何をするのか、そしてそれがトランザクションのロック戦略にどのように影響するかを説明してください。",
        solution: "`FOR UPDATE`句は、選択された行に排他（書き込み）ロックをかけ、現在のトランザクションがコミットまたはロールバックされるまで、他のトランザクションがそれらの行を変更またはロックすることを防ぎます。これにより、複数のトランザクションに対して一貫した読み取り/書き込み順序が確保され、これはデッドロックを引き起こす循環依存関係を解消するための鍵となることがよくあります。"
      },
      vi: {
        title: "Mệnh đề `FOR UPDATE` trong câu lệnh `SELECT` có thể giúp ngăn chặn một loại deadlock cụ thể trong một transaction như thế nào?",
        body: "Giải thích `FOR UPDATE` làm gì và cách nó ảnh hưởng đến chiến lược khóa của transaction.",
        solution: "Mệnh đề `FOR UPDATE` đặt một khóa độc quyền (write lock) lên các hàng được chọn, ngăn các transaction khác sửa đổi hoặc khóa các hàng đó cho đến khi transaction hiện tại được commit hoặc rollback. Điều này đảm bảo một thứ tự đọc/ghi nhất quán cho nhiều transaction, thường là chìa khóa để phá vỡ sự phụ thuộc vòng tròn gây ra deadlock."
      }
    }
  },
  {
    _id: "mysql-s-015",
    difficulty: "senior",
    tags: ["ha", "failover", "gtid"],
    content: {
      en: {
        title: "What is the primary role and benefit of Global Transaction Identifiers (GTIDs) in MySQL Replication?",
        body: "Explain how GTIDs simplify failover and setup.",
        solution: "GTIDs provide a unique ID for every transaction committed on the primary server. Their primary benefit is simplifying failover and provisioning: a replica can tell the primary exactly which transactions it has already executed, allowing the primary (or a new primary) to easily determine exactly where replication should resume, avoiding manual binary log file/position tracking."
      },
      jp: {
        title: "MySQLレプリケーションにおけるグローバルトランザクション識別子（GTID）の主な役割と利点は？",
        body: "GTIDがフェイルオーバーとセットアップをどのように簡素化するかを説明してください。",
        solution: "GTIDは、プライマリサーバーでコミットされたすべてのトランザクションに一意のIDを提供します。その主な利点は、フェイルオーバーとプロビジョニングを簡素化することです。レプリカは、すでに実行したトランザクションをプライマリに正確に伝えることができ、プライマリ（または新しいプライマリ）がレプリケーションを再開すべき正確な場所を簡単に決定できるようにし、手動のバイナリログファイル/位置追跡を回避します。"
      },
      vi: {
        title: "Vai trò và lợi ích chính của Global Transaction Identifiers (GTIDs) trong MySQL Replication là gì?",
        body: "Giải thích cách GTIDs đơn giản hóa việc failover và thiết lập.",
        solution: "GTIDs cung cấp một ID duy nhất cho mọi transaction được commit trên máy chủ chính. Lợi ích chính của chúng là đơn giản hóa việc failover và cung cấp: một bản sao có thể cho máy chủ chính biết chính xác những transaction nào nó đã thực thi, cho phép máy chủ chính (hoặc một máy chủ chính mới) dễ dàng xác định chính xác nơi sao chép nên tiếp tục, tránh việc theo dõi tệp/vị trí binary log thủ công."
      }
    }
  },
  {
    _id: "mysql-s-016",
    difficulty: "senior",
    tags: ["data type", "uuid", "performance"],
    content: {
      en: {
        title: "Why is using a truly random UUID as a Primary Key generally bad for InnoDB index performance, and what is the recommended fix?",
        body: "Focus on the index structure and disk access.",
        solution: "A truly random UUID causes pages in the B-Tree index to be written to randomly across the disk, leading to massive **page splits** and high **disk fragmentation**. This results in poor I/O performance. The recommended fix is to use a sequential or 'time-ordered' UUID (like a UUIDv7 or `UUID_TO_BIN(UUID(), 1)` in MySQL) which maintains a high level of locality."
      },
      jp: {
        title: "真にランダムなUUIDを主キーとして使用することが、InnoDBインデックスのパフォーマンスに一般的に悪影響を与えるのはなぜですか、そして推奨される修正策は？",
        body: "インデックス構造とディスクアクセスに焦点を当ててください。",
        solution: "真にランダムなUUIDは、B-Treeインデックスのページがディスク全体にランダムに書き込まれる原因となり、大規模な**ページ分割**と高い**ディスク断片化**につながります。これにより、I/Oパフォーマンスが低下します。推奨される修正策は、高いレベルの局所性を維持するシーケンシャルな、または「時間順序付けられた」UUID（UUIDv7やMySQLの`UUID_TO_BIN(UUID(), 1)`など）を使用することです。"
      },
      vi: {
        title: "Tại sao việc sử dụng một UUID thực sự ngẫu nhiên làm Khóa Chính thường gây hại cho hiệu suất index của InnoDB, và giải pháp khắc phục được khuyến nghị là gì?",
        body: "Tập trung vào cấu trúc index và truy cập đĩa.",
        solution: "Một UUID thực sự ngẫu nhiên khiến các trang trong index B-Tree bị ghi ngẫu nhiên trên đĩa, dẫn đến tình trạng **chia tách trang (page splits)** lớn và **phân mảnh đĩa (disk fragmentation)** cao. Điều này làm hiệu suất I/O kém đi. Giải pháp khắc phục được khuyến nghị là sử dụng một UUID tuần tự hoặc 'theo thứ tự thời gian' (như UUIDv7 hoặc `UUID_TO_BIN(UUID(), 1)` trong MySQL) để duy trì mức độ cục bộ hóa cao."
      }
    }
  },
  {
    _id: "mysql-s-017",
    difficulty: "senior",
    tags: ["ddl", "online", "innodb"],
    content: {
      en: {
        title: "In the context of InnoDB DDL, what is 'Online DDL,' and why is it a crucial feature for high-traffic environments?",
        body: "Explain what it prevents during schema changes.",
        solution: "Online DDL allows certain schema changes (like adding a non-primary key index) to be executed without blocking concurrent DML (INSERT, UPDATE, DELETE) operations on the table. It is crucial because it eliminates the need for long, downtime-inducing table rebuilds/locks, maintaining high availability during major schema modifications."
      },
      jp: {
        title: "InnoDB DDLの文脈で、「オンラインDDL」とは何ですか、そして高トラフィック環境にとってなぜ不可欠な機能なのですか？",
        body: "スキーマ変更中にそれが防ぐものを説明してください。",
        solution: "オンラインDDLは、特定のスキーマ変更（主キー以外のインデックスの追加など）を、テーブルに対する同時DML操作（INSERT、UPDATE、DELETE）をブロックすることなく実行することを可能にします。これは、大規模なスキーマ変更中に長い、ダウンタイムを引き起こすテーブルの再構築/ロックの必要性を排除し、高可用性を維持するため不可欠です。"
      },
      vi: {
        title: "Trong ngữ cảnh DDL của InnoDB, 'Online DDL' là gì, và tại sao nó là một tính năng quan trọng đối với các môi trường có lưu lượng truy cập cao?",
        body: "Giải thích nó ngăn chặn điều gì trong quá trình thay đổi lược đồ.",
        solution: "Online DDL cho phép một số thay đổi lược đồ nhất định (như thêm một index không phải là khóa chính) được thực thi mà không chặn các thao tác DML đồng thời (INSERT, UPDATE, DELETE) trên bảng. Nó rất quan trọng vì nó loại bỏ sự cần thiết phải xây dựng lại/khóa bảng gây ra thời gian ngừng hoạt động kéo dài, duy trì tính sẵn sàng cao trong quá trình sửa đổi lược đồ lớn."
      }
    }
  },
  {
    _id: "mysql-s-018",
    difficulty: "senior",
    tags: ["window function", "ranking"],
    content: {
      en: {
        title: "What is the difference between the RANK() and DENSE_RANK() window functions?",
        body: "Explain how they handle tied values in the ranking result.",
        solution: "Both assign a rank to rows within a partition, but DENSE_RANK() leaves no gaps in the ranking sequence when there are ties. RANK() leaves gaps in the rank numbering (the next rank after a tie is the tie rank + number of tied rows), whereas DENSE_RANK() simply continues the sequence (the next rank after a tie is rank + 1)."
      },
      jp: {
        title: "RANK()とDENSE_RANK()ウィンドウ関数の違いは？",
        body: "ランキング結果で同順位の値がどのように処理されるかを説明してください。",
        solution: "どちらもパーティション内の行にランクを割り当てますが、DENSE_RANK()は同順位がある場合にランキングシーケンスにギャップを残しません。RANK()はランク付け番号にギャップを残しますが（同順位の後の次のランクは同順位ランク + 同順位の行数）、DENSE_RANK()は単にシーケンスを続行します（同順位の後の次のランクはランク + 1）。"
      },
      vi: {
        title: "Sự khác biệt giữa các hàm cửa sổ RANK() và DENSE_RANK() là gì?",
        body: "Giải thích cách chúng xử lý các giá trị bị hòa (tied values) trong kết quả xếp hạng.",
        solution: "Cả hai đều gán một thứ hạng cho các hàng trong một phân vùng, nhưng DENSE_RANK() không để lại khoảng trống trong chuỗi xếp hạng khi có các giá trị bị hòa. RANK() để lại khoảng trống trong việc đánh số thứ hạng (thứ hạng tiếp theo sau một hòa là thứ hạng hòa + số lượng hàng bị hòa), trong khi DENSE_RANK() chỉ đơn giản là tiếp tục chuỗi (thứ hạng tiếp theo sau một hòa là thứ hạng + 1)."
      }
    }
  },
  {
    _id: "mysql-s-019",
    difficulty: "senior",
    tags: ["system variable", "write optimization"],
    content: {
      en: {
        title: "In a write-heavy system, what is the role of the `innodb_flush_log_at_trx_commit` variable, and what are the trade-offs of setting it to 0 or 2 instead of the default 1?",
        body: "Focus on durability versus performance.",
        solution: "This variable controls the frequency of flushing the transaction log to disk, affecting durability. Default is 1 (flush on every commit - highest durability, lowest performance). Setting it to **0** (flush every second) or **2** (flush every second, but log written on commit) significantly increases write performance but introduces a risk of losing up to a second of committed transactions in case of an OS or power failure."
      },
      jp: {
        title: "書き込み負荷の高いシステムで、`innodb_flush_log_at_trx_commit`変数の役割は何ですか、そしてデフォルトの1ではなく0または2に設定することのトレードオフは？",
        body: "耐久性とパフォーマンスに焦点を当ててください。",
        solution: "この変数は、トランザクションログをディスクにフラッシュする頻度を制御し、耐久性に影響を与えます。デフォルトは1（コミットごとにフラッシュ - 最高の耐久性、最低のパフォーマンス）です。これを**0**（毎秒フラッシュ）または**2**（毎秒フラッシュ、ただしコミット時にログは書き込まれる）に設定すると、書き込みパフォーマンスが大幅に向上しますが、OSまたは電源障害の場合にコミットされたトランザクションを最大1秒間失うリスクが生じます。"
      },
      vi: {
        title: "Trong một hệ thống ghi nặng, vai trò của biến `innodb_flush_log_at_trx_commit` là gì, và sự đánh đổi khi đặt nó thành 0 hoặc 2 thay vì mặc định 1 là gì?",
        body: "Tập trung vào tính bền vững so với hiệu suất.",
        solution: "Biến này kiểm soát tần suất flush log transaction ra đĩa, ảnh hưởng đến tính bền vững. Mặc định là 1 (flush trên mỗi commit - tính bền vững cao nhất, hiệu suất thấp nhất). Đặt nó thành **0** (flush mỗi giây) hoặc **2** (flush mỗi giây, nhưng log được ghi khi commit) giúp tăng đáng kể hiệu suất ghi nhưng đi kèm với rủi ro mất tới một giây các transaction đã commit trong trường hợp hệ điều hành hoặc nguồn điện bị lỗi."
      }
    }
  },
  {
    _id: "mysql-s-020",
    difficulty: "senior",
    tags: ["security", "access", "revoke"],
    content: {
      en: {
        title: "As a security best practice, why should a service account (used by an application) typically be granted privileges only on specific database *objects* rather than granted full global privileges?",
        body: "Explain the security principle violated by global privileges.",
        solution: "Granting global privileges (e.g., `ALL PRIVILEGES ON *.*`) violates the **Principle of Least Privilege (PoLP)**. This best practice dictates that an entity (the service account) should only have the bare minimum permissions necessary to perform its function. Restricting access to specific objects (tables, views, stored procedures) minimizes the attack surface and damage potential if the account is compromised."
      },
      jp: {
        title: "セキュリティのベストプラクティスとして、サービスアカウント（アプリケーションで使用される）に完全なグローバル特権を付与するのではなく、通常、特定のデータベース**オブジェクト**のみに特権を付与すべきなのはなぜですか？",
        body: "グローバル特権によって侵害されるセキュリティ原則を説明してください。",
        solution: "グローバル特権を付与すること（例：`ALL PRIVILEGES ON *.*`）は、**最小特権の原則（PoLP）**に違反します。このベストプラクティスは、エンティティ（サービスアカウント）がその機能を実行するために必要な最小限の権限のみを持つべきであることを規定しています。アクセスを特定のオブジェクト（テーブル、ビュー、ストアドプロシージャ）に制限することで、アカウントが侵害された場合の攻撃対象領域と損害の可能性を最小限に抑えます。"
      },
      vi: {
        title: "Là một thực hành bảo mật tốt nhất, tại sao một tài khoản dịch vụ (được sử dụng bởi ứng dụng) thường chỉ nên được cấp đặc quyền trên các *đối tượng* cơ sở dữ liệu cụ thể thay vì cấp đặc quyền toàn cục đầy đủ?",
        body: "Giải thích nguyên tắc bảo mật bị vi phạm bởi các đặc quyền toàn cục.",
        solution: "Việc cấp đặc quyền toàn cục (ví dụ: `ALL PRIVILEGES ON *.*`) vi phạm **Nguyên tắc Đặc quyền Tối thiểu (Principle of Least Privilege - PoLP)**. Thực hành tốt nhất này quy định rằng một thực thể (tài khoản dịch vụ) chỉ nên có các quyền tối thiểu cần thiết để thực hiện chức năng của nó. Việc giới hạn quyền truy cập vào các đối tượng cụ thể (bảng, view, stored procedure) giảm thiểu bề mặt tấn công và thiệt hại tiềm tàng nếu tài khoản bị xâm phạm."
      }
    }
  }
];