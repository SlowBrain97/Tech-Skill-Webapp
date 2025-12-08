export const rdbmsFresherQuestions = [
    {
        _id: "rdbms-f-001",
        difficulty: "fresher",
        tags: ["rdbms", "definition", "database"],
        content: {
            en: {
                title: "What does RDBMS stand for?",
                body: "Provide the full meaning of the acronym RDBMS.",
                solution: "Relational Database Management System."
            },
            jp: {
                title: "RDBMSは何の略ですか？",
                body: "頭字語RDBMSの完全な意味を提供してください。",
                solution: "Relational Database Management System（リレーショナルデータベース管理システム）。"
            },
            vi: {
                title: "RDBMS là viết tắt của từ gì?",
                body: "Cung cấp ý nghĩa đầy đủ của từ viết tắt RDBMS.",
                solution: "Relational Database Management System (Hệ Quản trị Cơ sở Dữ liệu Quan hệ)."
            }
        }
    },
    {
        _id: "rdbms-f-002",
        difficulty: "fresher",
        tags: ["sql", "query", "retrieval"],
        content: {
            en: {
                title: "What is the primary purpose of the SQL `SELECT` command?",
                body: "What action is performed when you execute a `SELECT` query?",
                solution: "To retrieve (fetch) data from one or more tables in the database."
            },
            jp: {
                title: "SQLの`SELECT`コマンドの主な目的は何ですか？",
                body: "`SELECT`クエリを実行すると、どのようなアクションが実行されますか？",
                solution: "データベース内の1つまたは複数のテーブルからデータを取得（フェッチ）することです。"
            },
            vi: {
                title: "Mục đích chính của lệnh SQL `SELECT` là gì?",
                body: "Hành động nào được thực hiện khi bạn chạy một truy vấn `SELECT`?",
                solution: "Để truy xuất (lấy) dữ liệu từ một hoặc nhiều bảng trong cơ sở dữ liệu."
            }
        }
    },
    {
        _id: "rdbms-f-003",
        difficulty: "fresher",
        tags: ["sql", "ddl", "table"],
        content: {
            en: {
                title: "Which SQL command is used to create a new table in the database?",
                body: "Name the DDL command used for structural creation.",
                solution: "The `CREATE TABLE` command."
            },
            jp: {
                title: "データベースで新しいテーブルを作成するために使用されるSQLコマンドは何ですか？",
                body: "構造作成に使用されるDDLコマンドの名前を挙げてください。",
                solution: "The `CREATE TABLE` command (CREATE TABLE文)。"
            },
            vi: {
                title: "Lệnh SQL nào được sử dụng để tạo một bảng mới trong cơ sở dữ liệu?",
                body: "Nêu tên lệnh DDL được sử dụng để tạo cấu trúc.",
                solution: "Lệnh `CREATE TABLE`."
            }
        }
    },
    {
        _id: "rdbms-f-004",
        difficulty: "fresher",
        tags: ["sql", "dml", "data modification"],
        content: {
            en: {
                title: "Which SQL command is used to add new rows (records) of data into a table?",
                body: "Name the DML command used for data insertion.",
                solution: "The `INSERT INTO` command."
            },
            jp: {
                title: "テーブルに新しい行（レコード）のデータを追加するために使用されるSQLコマンドは何ですか？",
                body: "データ挿入に使用されるDMLコマンドの名前を挙げてください。",
                solution: "The `INSERT INTO` command (INSERT INTO文)。"
            },
            vi: {
                title: "Lệnh SQL nào được sử dụng để thêm các hàng (bản ghi) dữ liệu mới vào một bảng?",
                body: "Nêu tên lệnh DML được sử dụng để chèn dữ liệu.",
                solution: "Lệnh `INSERT INTO`."
            }
        }
    },
    {
        _id: "rdbms-f-005",
        difficulty: "fresher",
        tags: ["sql", "dml", "data modification"],
            content: {
            en: {
                title: "Which SQL command is used to change existing data in one or more rows of a table?",
                body: "Name the DML command used for data modification.",
                solution: "The `UPDATE` command."
            },
            jp: {
                title: "テーブルの1つまたは複数の行の既存のデータを変更するために使用されるSQLコマンドは何ですか？",
                body: "データ変更に使用されるDMLコマンドの名前を挙げてください。",
                solution: "The `UPDATE` command (UPDATE文)。"
            },
            vi: {
                title: "Lệnh SQL nào được sử dụng để thay đổi dữ liệu hiện có trong một hoặc nhiều hàng của một bảng?",
                body: "Nêu tên lệnh DML được sử dụng để sửa đổi dữ liệu.",
                solution: "Lệnh `UPDATE`."
            }
        }
    },
    {
        _id: "rdbms-f-006",
        difficulty: "fresher",
        tags: ["sql", "dml", "data modification"],
        content: {
            en: {
                title: "Which SQL command is used to permanently remove one or more rows from a table?",
                body: "Name the DML command used for data deletion.",
                solution: "The `DELETE FROM` command."
            },
            jp: {
                title: "テーブルから1つまたは複数の行を完全に削除するために使用されるSQLコマンドは何ですか？",
                body: "データ削除に使用されるDMLコマンドの名前を挙げてください。",
                solution: "The `DELETE FROM` command (DELETE FROM文)。"
            },
            vi: {
                title: "Lệnh SQL nào được sử dụng để xóa vĩnh viễn một hoặc nhiều hàng khỏi một bảng?",
                body: "Nêu tên lệnh DML được sử dụng để xóa dữ liệu.",
                solution: "Lệnh `DELETE FROM`."
            }
        }
    },
    {
        _id: "rdbms-f-007",
        difficulty: "fresher",
        tags: ["table", "row", "column", "structure"],
        content: {
            en: {
                title: "In a relational database table, what is the term for a single horizontal entry (a record)?",
                body: "What is the equivalent term for a 'record'?",
                solution: "A **Row** (or Tuple)."
            },
            jp: {
                title: "リレーショナルデータベーステーブルで、単一の水平エントリ（レコード）を表す用語は何ですか？",
                body: "「レコード」に相当する用語は何ですか？",
                solution: "**Row** (行、またはタプル/Tuple)。"
            },
            vi: {
                title: "Trong một bảng cơ sở dữ liệu quan hệ, thuật ngữ cho một mục nhập ngang duy nhất (một bản ghi) là gì?",
                body: "Thuật ngữ tương đương cho một 'record' là gì?",
                solution: "Một **Hàng** (Row, hoặc Tuple)."
            }
        }
    },
    {
        _id: "rdbms-f-008",
        difficulty: "fresher",
        tags: ["table", "column", "attribute", "structure"],
        content: {
            en: {
                title: "In a relational database table, what is the term for a single vertical entry that represents a specific data type?",
                body: "What is the equivalent term for an 'attribute'?",
                solution: "A **Column** (or Attribute)."
            },
            jp: {
                title: "リレーショナルデータベーステーブルで、特定のデータ型を表す単一の垂直エントリを表す用語は何ですか？",
                body: "「属性」（Attribute）に相当する用語は何ですか？",
                solution: "**Column** (列、または属性/Attribute)。"
            },
            vi: {
                title: "Trong một bảng cơ sở dữ liệu quan hệ, thuật ngữ cho một mục nhập dọc duy nhất đại diện cho một loại dữ liệu cụ thể là gì?",
                body: "Thuật ngữ tương đương cho một 'attribute' là gì?",
                solution: "Một **Cột** (Column, hoặc Attribute)."
            }
        }
    },
    {
        _id: "rdbms-f-009",
        difficulty: "fresher",
        tags: ["key", "primary key", "uniqueness", "integrity"],
        content: {
            en: {
                title: "What is the main role of a **Primary Key** in a database table?",
                body: "What two properties must a Primary Key guarantee?",
                solution: "A Primary Key uniquely identifies each row (record) in a table. It must be **unique** and **NOT NULL** (cannot contain null values)."
            },
            jp: {
                title: "データベーステーブルにおける**主キー**の主な役割は何ですか？",
                body: "主キーが保証しなければならない2つのプロパティは何ですか？",
                solution: "主キーは、テーブル内の各行（レコード）を一意に識別します。それは**一意**で**NOT NULL**（NULL値を含めることはできません）でなければなりません。"
            },
            vi: {
                title: "Vai trò chính của một **Primary Key** (Khóa Chính) trong một bảng cơ sở dữ liệu là gì?",
                body: "Khóa chính phải đảm bảo hai thuộc tính nào?",
                solution: "Khóa chính định danh duy nhất mỗi hàng (bản ghi) trong một bảng. Nó phải là **duy nhất (unique)** và **KHÔNG NULL (NOT NULL)** (không thể chứa giá trị null)."
            }
        }
    },
    {
        _id: "rdbms-f-010",
        difficulty: "fresher",
        tags: ["key", "foreign key", "relationship", "referential integrity"],
        content: {
            en: {
                title: "What is the purpose of a **Foreign Key**?",
                body: "How does it establish a relationship between two tables?",
                solution: "A Foreign Key establishes and enforces a link between two tables. It is a field in one table that refers to the **Primary Key** of another table."
            },
            jp: {
                title: "**外部キー**の目的は何ですか？",
                body: "それはどのようにして2つのテーブル間にリレーションシップを確立しますか？",
                solution: "外部キーは、2つのテーブル間のリンクを確立し、強制します。それは、あるテーブル内の、別のテーブルの**主キー**を参照するフィールドです。"
            },
            vi: {
                title: "Mục đích của một **Foreign Key** (Khóa Ngoại) là gì?",
                body: "Nó thiết lập mối quan hệ giữa hai bảng như thế nào?",
                solution: "Khóa ngoại thiết lập và thực thi liên kết giữa hai bảng. Nó là một trường trong bảng này tham chiếu đến **Khóa Chính** của một bảng khác."
            }
        }
    },
    {
        _id: "rdbms-f-011",
        difficulty: "fresher",
        tags: ["constraint", "integrity", "unique"],
        content: {
            en: {
                title: "What is the difference between a Primary Key and a **UNIQUE** constraint?",
                body: "Which property does the Primary Key have that a UNIQUE constraint does not?",
                solution: "Both enforce uniqueness, but a **Primary Key** also implicitly enforces a **NOT NULL** constraint. A column with only a UNIQUE constraint can contain one NULL value (in most RDBMS)."
            },
            jp: {
                title: "主キーと**UNIQUE**制約の違いは何ですか？",
                body: "主キーが持ち、UNIQUE制約が持たないプロパティは何ですか？",
                solution: "どちらも一意性を強制しますが、**主キー**は暗黙的に**NOT NULL**制約も強制します。UNIQUE制約のみを持つ列は、1つのNULL値を含むことができます（ほとんどのRDBMSで）。"
            },
            vi: {
                title: "Sự khác biệt giữa Khóa Chính (Primary Key) và một ràng buộc **UNIQUE** là gì?",
                body: "Thuộc tính nào mà Khóa Chính có mà ràng buộc UNIQUE không có?",
                solution: "Cả hai đều thực thi tính duy nhất, nhưng **Khóa Chính** cũng ngầm thực thi ràng buộc **NOT NULL**. Một cột chỉ có ràng buộc UNIQUE có thể chứa một giá trị NULL (trong hầu hết các RDBMS)."
            }
        }
    },
    {
        _id: "rdbms-f-012",
        difficulty: "fresher",
        tags: ["sql", "select", "wildcard"],
        content: {
            en: {
                title: "What is the meaning of the asterisk (`*`) symbol in a `SELECT` statement (e.g., `SELECT * FROM table`)?",
                body: "What data does the asterisk retrieve?",
                solution: "It means to select **all columns** from the specified table."
            },
            jp: {
                title: "`SELECT`ステートメントの**アスタリスク**（`*`）記号（例: `SELECT * FROM table`）の意味は何ですか？",
                body: "アスタリスクはどのようなデータを取得しますか？",
                solution: "指定されたテーブルから**すべての列**を選択することを意味します。"
            },
            vi: {
                title: "Ý nghĩa của ký hiệu dấu sao (`*`) trong câu lệnh `SELECT` (ví dụ: `SELECT * FROM table`) là gì?",
                body: "Dấu sao truy xuất dữ liệu nào?",
                solution: "Nó có nghĩa là chọn **tất cả các cột** từ bảng được chỉ định."
            }
        }
    },
    {
        _id: "rdbms-f-013",
        difficulty: "fresher",
        tags: ["sql", "filtering", "where"],
        content: {
            en: {
                title: "Which clause is used in a `SELECT` statement to filter records based on a specific condition?",
                body: "Name the clause used for row-level filtering.",
                solution: "The **`WHERE`** clause."
            },
            jp: {
                title: "特定の条件に基づいてレコードをフィルタリングするために、`SELECT`ステートメントで使用される句は何ですか？",
                body: "行レベルのフィルタリングに使用される句の名前を挙げてください。",
                solution: "The **`WHERE`** clause (WHERE句)。"
            },
            vi: {
                title: "Mệnh đề nào được sử dụng trong câu lệnh `SELECT` để lọc các bản ghi dựa trên một điều kiện cụ thể?",
                body: "Nêu tên mệnh đề được sử dụng để lọc cấp độ hàng.",
                solution: "Mệnh đề **`WHERE`**."
            }
        }
    },
    {
        _id: "rdbms-f-014",
        difficulty: "fresher",
        tags: ["sql", "sorting", "orderby"],
        content: {
            en: {
                title: "Which clause is used to sort the result set of a query in ascending or descending order?",
                body: "Name the clause used for ordering the output.",
                solution: "The **`ORDER BY`** clause."
            },
            jp: {
                title: "クエリの結果セットを昇順または降順にソートするために使用される句は何ですか？",
                body: "出力を順序付けるために使用される句の名前を挙げてください。",
                solution: "The **`ORDER BY`** clause (ORDER BY句)。"
            },
            vi: {
                title: "Mệnh đề nào được sử dụng để sắp xếp tập kết quả của một truy vấn theo thứ tự tăng dần hoặc giảm dần?",
                body: "Nêu tên mệnh đề được sử dụng để sắp xếp đầu ra.",
                solution: "Mệnh đề **`ORDER BY`**."
            }
        }
    },
    {
        _id: "rdbms-f-015",
        difficulty: "fresher",
        tags: ["sql", "sorting", "desc"],
        content: {
            en: {
                title: "What keyword is used with `ORDER BY` to sort results from highest value to lowest value?",
                body: "What is the abbreviation for descending order?",
                solution: "The **`DESC`** keyword (for Descending)."
            },
            jp: {
                title: "結果を最高値から最低値にソートするために、`ORDER BY`と一緒に使用されるキーワードは何ですか？",
                body: "降順の略語は何ですか？",
                solution: "The **`DESC`** keyword (降順 Descending の略)。"
            },
            vi: {
                title: "Từ khóa nào được sử dụng với `ORDER BY` để sắp xếp kết quả từ giá trị cao nhất đến giá trị thấp nhất?",
                body: "Viết tắt của thứ tự giảm dần là gì?",
                solution: "Từ khóa **`DESC`** (viết tắt của Descending)."
            }
        }
    },
    {
        _id: "rdbms-f-016",
        difficulty: "fresher",
        tags: ["sql", "sorting", "asc", "default"],
        content: {
            en: {
                title: "What is the default sorting order if you omit the `ASC` or `DESC` keyword with `ORDER BY`?",
                body: "What is the abbreviation for ascending order?",
                solution: "The default order is **Ascending** (or `ASC`), from lowest value to highest value."
            },
            jp: {
                title: "`ORDER BY`で`ASC`または`DESC`キーワードを省略した場合のデフォルトのソート順は何ですか？",
                body: "昇順の略語は何ですか？",
                solution: "デフォルトの順序は**昇順**（または`ASC`）で、最低値から最高値へです。"
            },
            vi: {
                title: "Thứ tự sắp xếp mặc định là gì nếu bạn bỏ qua từ khóa `ASC` hoặc `DESC` với `ORDER BY`?",
                body: "Viết tắt của thứ tự tăng dần là gì?",
                solution: "Thứ tự mặc định là **Tăng dần** (Ascending, hoặc `ASC`), từ giá trị thấp nhất đến giá trị cao nhất."
            }
        }
    },
    {
        _id: "rdbms-f-017",
        difficulty: "fresher",
        tags: ["sql", "data type", "number"],
        content: {
            en: {
                title: "Which common SQL data type is used to store whole numbers (integers) without any decimal points?",
                body: "Name a common data type for whole numbers.",
                solution: "**`INT`** (or INTEGER)."
            },
            jp: {
                title: "小数点のない整数（integer）を保存するために使用される一般的なSQLデータ型は何ですか？",
                body: "整数用の一般的なデータ型の名前を挙げてください。",
                solution: "**`INT`** (または INTEGER)。"
            },
            vi: {
                title: "Kiểu dữ liệu SQL phổ biến nào được sử dụng để lưu trữ các số nguyên (integer) không có dấu thập phân?",
                body: "Nêu tên một kiểu dữ liệu phổ biến cho số nguyên.",
                solution: "**`INT`** (hoặc INTEGER)."
            }
        }
    },
    {
        _id: "rdbms-f-018",
        difficulty: "fresher",
        tags: ["sql", "data type", "string", "character"],
        content: {
            en: {
                title: "Which common SQL data type is used to store variable-length strings of characters?",
                body: "Name a common data type for strings that optimizes space.",
                solution: "**`VARCHAR`** (or Character Varying)."
            },
            jp: {
                title: "可変長文字列の文字を保存するために使用される一般的なSQLデータ型は何ですか？",
                body: "スペースを最適化する文字列用の一般的なデータ型の名前を挙げてください。",
                solution: "**`VARCHAR`** (または Character Varying)。"
            },
            vi: {
                title: "Kiểu dữ liệu SQL phổ biến nào được sử dụng để lưu trữ các chuỗi ký tự có độ dài thay đổi?",
                body: "Nêu tên một kiểu dữ liệu phổ biến cho chuỗi tối ưu hóa không gian.",
                solution: "**`VARCHAR`** (hoặc Character Varying)."
            }
        }
    },
    {
        _id: "rdbms-f-019",
        difficulty: "fresher",
        tags: ["sql", "data type", "date", "time"],
        content: {
            en: {
                title: "Which common SQL data type is used to store both a date and a time value?",
                body: "Name the data type that stores both date and time.",
                solution: "**`DATETIME`** or **`TIMESTAMP`** (depending on the RDBMS, but both are acceptable).",
            },
            jp: {
                title: "日付と時刻の両方の値を保存するために使用される一般的なSQLデータ型は何ですか？",
                body: "日付と時刻の両方を保存するデータ型の名前を挙げてください。",
                solution: "**`DATETIME`** または **`TIMESTAMP`** （RDBMSによりますが、どちらも許容されます）。"
            },
            vi: {
                title: "Kiểu dữ liệu SQL phổ biến nào được sử dụng để lưu trữ cả giá trị ngày và giờ?",
                body: "Nêu tên kiểu dữ liệu lưu trữ cả ngày và giờ.",
                solution: "**`DATETIME`** hoặc **`TIMESTAMP`** (tùy thuộc vào RDBMS, nhưng cả hai đều được chấp nhận)."
            }
        }
    },
    {
        _id: "rdbms-f-020",
        difficulty: "fresher",
        tags: ["sql", "operators", "comparison", "null"],
        content: {
            en: {
                title: "What is the special operator used in the `WHERE` clause to check if a column's value is missing (NULL)?",
                body: "You cannot use `=` or `!=` for this check.",
                solution: "The **`IS NULL`** (or `IS NOT NULL`) operator."
            },
            jp: {
                title: "列の値が欠落している（NULL）かどうかを確認するために、`WHERE`句で使用される特別な演算子は何ですか？",
                body: "このチェックには`=`または`!=`を使用できません。",
                solution: "The **`IS NULL`** (または `IS NOT NULL`) operator。"
            },
            vi: {
                title: "Toán tử đặc biệt nào được sử dụng trong mệnh đề `WHERE` để kiểm tra xem giá trị của cột có bị thiếu (NULL) hay không?",
                body: "Bạn không thể sử dụng `=` hoặc `!=` cho việc kiểm tra này.",
                solution: "Toán tử **`IS NULL`** (hoặc `IS NOT NULL`)."
            }
        }
    },
    {
        _id: "rdbms-f-021",
        difficulty: "fresher",
        tags: ["sql", "filtering", "multiple values", "in"],
        content: {
            en: {
                title: "Which operator allows you to specify multiple possible values for a column in the `WHERE` clause?",
                body: "The operator is a list of values enclosed in parentheses.",
                solution: "The **`IN`** operator."
            },
            jp: {
                title: "`WHERE`句で列に対して複数の可能な値を指定できる演算子は何ですか？",
                body: "演算子は括弧で囲まれた値のリストです。",
                solution: "The **`IN`** operator。"
            },
            vi: {
                title: "Toán tử nào cho phép bạn chỉ định nhiều giá trị có thể có cho một cột trong mệnh đề `WHERE`?",
                body: "Toán tử là một danh sách các giá trị được đặt trong dấu ngoặc đơn.",
                solution: "Toán tử **`IN`**."
            }
        }
    },
    {
        _id: "rdbms-f-022",
        difficulty: "fresher",
        tags: ["sql", "filtering", "pattern matching", "like"],
        content: {
            en: {
                title: "Which operator is used to search for a specified pattern in a column (e.g., finding all names starting with 'A')?",
                body: "The operator is used for pattern matching.",
                solution: "The **`LIKE`** operator."
            },
            jp: {
                title: "列内の特定のパターンを検索するために使用される演算子は何ですか（例: 'A'で始まるすべての名前を見つける）？",
                body: "演算子はパターンマッチングに使用されます。",
                solution: "The **`LIKE`** operator。"
            },
            vi: {
                title: "Toán tử nào được sử dụng để tìm kiếm một pattern cụ thể trong một cột (ví dụ: tìm tất cả các tên bắt đầu bằng 'A')?",
                body: "Toán tử được sử dụng để so khớp pattern.",
                solution: "Toán tử **`LIKE`**."
            }
        }
    },
    {
        _id: "rdbms-f-023",
        difficulty: "fresher",
        tags: ["sql", "pattern matching", "wildcard", "percent"],
        content: {
            en: {
                title: "In the `LIKE` operator, what does the percent sign (`%`) wildcard character represent?",
                body: "What does this wildcard match?",
                solution: "It represents **zero, one, or multiple characters**."
            },
            jp: {
                title: "`LIKE`演算子で、パーセント記号（`%`）ワイルドカード文字は何を表しますか？",
                body: "このワイルドカードは何に一致しますか？",
                solution: "**ゼロ、1つ、または複数の文字**を表します。"
            },
            vi: {
                title: "Trong toán tử `LIKE`, ký tự đại diện dấu phần trăm (`%`) đại diện cho điều gì?",
                body: "Ký tự đại diện này khớp với cái gì?",
                solution: "Nó đại diện cho **không, một, hoặc nhiều ký tự**."
            }
        }
    },
    {
        _id: "rdbms-f-024",
        difficulty: "fresher",
        tags: ["sql", "pattern matching", "wildcard", "underscore"],
        content: {
            en: {
                title: "In the `LIKE` operator, what does the underscore (`_`) wildcard character represent?",
                body: "What does this wildcard match?",
                solution: "It represents **any single character**."
            },
            jp: {
                title: "`LIKE`演算子で、アンダースコア（`_`）ワイルドカード文字は何を表しますか？",
                body: "このワイルドカードは何に一致しますか？",
                solution: "**任意の単一の文字**を表します。"
            },
            vi: {
                title: "Trong toán tử `LIKE`, ký tự đại diện dấu gạch dưới (`_`) đại diện cho điều gì?",
                body: "Ký tự đại diện này khớp với cái gì?",
                solution: "Nó đại diện cho **bất kỳ một ký tự đơn nào**."
            }
        }
    },
    {
        _id: "rdbms-f-025",
        difficulty: "fresher",
        tags: ["sql", "aggregate function", "count"],
        content: {
            en: {
                title: "Which SQL aggregate function is used to return the number of rows in a result set?",
                body: "Name the function used for counting records.",
                solution: "The **`COUNT()`** function."
            },
            jp: {
                title: "結果セット内の行数を返すために使用されるSQL集計関数は何ですか？",
                body: "レコードのカウントに使用される関数の名前を挙げてください。",
                solution: "The **`COUNT()`** function。"
            },
            vi: {
                title: "Hàm tổng hợp SQL nào được sử dụng để trả về số lượng hàng trong một tập kết quả?",
                body: "Nêu tên hàm được sử dụng để đếm các bản ghi.",
                solution: "Hàm **`COUNT()`**."
            }
        }
    },
    {
        _id: "rdbms-f-026",
        difficulty: "fresher",
        tags: ["sql", "aggregate function", "sum"],
        content: {
            en: {
                title: "Which SQL aggregate function calculates the total value of a numeric column?",
                body: "Name the function used for calculating the total.",
                solution: "The **`SUM()`** function."
            },
            jp: {
                title: "数値列の合計値を計算するSQL集計関数は何ですか？",
                body: "合計の計算に使用される関数の名前を挙げてください。",
                solution: "The **`SUM()`** function。"
            },
            vi: {
                title: "Hàm tổng hợp SQL nào tính tổng giá trị của một cột số?",
                body: "Nêu tên hàm được sử dụng để tính tổng.",
                solution: "Hàm **`SUM()`**."
            }
        }
    },
    {
        _id: "rdbms-f-027",
        difficulty: "fresher",
        tags: ["sql", "aggregate function", "average"],
        content: {
            en: {
                title: "Which SQL aggregate function calculates the average value of a numeric column?",
                body: "Name the function used for calculating the mean.",
                solution: "The **`AVG()`** function."
            },
            jp: {
                title: "数値列の平均値を計算するSQL集計関数は何ですか？",
                body: "平均の計算に使用される関数の名前を挙げてください。",
                solution: "The **`AVG()`** function。"
            },
            vi: {
                title: "Hàm tổng hợp SQL nào tính giá trị trung bình của một cột số?",
                body: "Nêu tên hàm được sử dụng để tính trung bình.",
                solution: "Hàm **`AVG()`**."
            }
        }
    },
    {
        _id: "rdbms-f-028",
        difficulty: "fresher",
        tags: ["sql", "aggregate function", "max", "min"],
        content: {
            en: {
                title: "Name the two SQL aggregate functions used to find the highest and lowest values in a column.",
                body: "List the two functions.",
                solution: "**`MAX()`** and **`MIN()`**."
            },
            jp: {
                title: "列内の最高値と最低値を見つけるために使用される2つのSQL集計関数の名前を挙げてください。",
                body: "2つの関数をリストしてください。",
                solution: "**`MAX()`** と **`MIN()`**。"
            },
            vi: {
                title: "Nêu tên hai hàm tổng hợp SQL được sử dụng để tìm giá trị cao nhất và thấp nhất trong một cột.",
                body: "Liệt kê hai hàm.",
                solution: "**`MAX()`** và **`MIN()`**."
            }
        }
    },
    {
        _id: "rdbms-f-029",
        difficulty: "fresher",
        tags: ["sql", "grouping", "groupby"],
        content: {
            en: {
                title: "Which clause is used with aggregate functions to group the result set by one or more columns?",
                body: "Name the clause used to combine rows with the same values into summary rows.",
                solution: "The **`GROUP BY`** clause."
            },
            jp: {
                title: "集計関数と一緒に使用され、1つまたは複数の列で結果セットをグループ化するために使用される句は何ですか？",
                body: "同じ値を持つ行を集計行に結合するために使用される句の名前を挙げてください。",
                solution: "The **`GROUP BY`** clause (GROUP BY句)。"
            },
            vi: {
                title: "Mệnh đề nào được sử dụng với các hàm tổng hợp để nhóm tập kết quả theo một hoặc nhiều cột?",
                body: "Nêu tên mệnh đề được sử dụng để kết hợp các hàng có cùng giá trị thành các hàng tóm tắt.",
                solution: "Mệnh đề **`GROUP BY`**."
            }
        }
    },
    {
        _id: "rdbms-f-030",
        difficulty: "fresher",
        tags: ["sql", "grouping", "having", "filter"],
        content: {
            en: {
                title: "Which clause is used to filter groups based on a condition after the grouping has occurred (i.e., filtering aggregate results)?",
                body: "You cannot use `WHERE` for this purpose.",
                solution: "The **`HAVING`** clause."
            },
            jp: {
                title: "グループ化が発生した後（つまり、集計結果のフィルタリング）に、条件に基づいてグループをフィルタリングするために使用される句は何ですか？",
                body: "この目的のために`WHERE`を使用することはできません。",
                solution: "The **`HAVING`** clause (HAVING句)。"
            },
            vi: {
                title: "Mệnh đề nào được sử dụng để lọc các nhóm dựa trên một điều kiện sau khi việc nhóm đã xảy ra (tức là lọc kết quả tổng hợp)?",
                body: "Bạn không thể sử dụng `WHERE` cho mục đích này.",
                solution: "Mệnh đề **`HAVING`**."
            }
        }
    },
    {
        _id: "rdbms-f-031",
        difficulty: "fresher",
        tags: ["sql", "join", "inner join", "matching"],
        content: {
            en: {
                title: "Which type of `JOIN` returns only the rows that have matching values in **both** tables?",
                body: "This is the most common type of join.",
                solution: "The **`INNER JOIN`** (or just `JOIN`)."
            },
            jp: {
                title: "**両方**のテーブルで一致する値を持つ行のみを返す`JOIN`のタイプは何ですか？",
                body: "これは最も一般的な結合のタイプです。",
                solution: "The **`INNER JOIN`** (または単に `JOIN`)。"
            },
            vi: {
                title: "Loại `JOIN` nào chỉ trả về các hàng có giá trị khớp nhau ở **cả hai** bảng?",
                body: "Đây là loại join phổ biến nhất.",
                solution: "Loại **`INNER JOIN`** (hoặc chỉ `JOIN`)."
            }
        }
    },
    {
        _id: "rdbms-f-032",
        difficulty: "fresher",
        tags: ["sql", "join", "left join", "all"],
        content: {
            en: {
                title: "Which type of `JOIN` returns all rows from the left table, and the matching rows from the right table (NULL otherwise)?",
                body: "Name the join type that prioritizes one table.",
                solution: "The **`LEFT JOIN`** (or `LEFT OUTER JOIN`)."
            },
            jp: {
                title: "左側のテーブルからすべての行を返し、右側のテーブルから一致する行を返す（そうでない場合はNULL）`JOIN`のタイプは何ですか？",
                body: "一方のテーブルを優先する結合のタイプを挙げてください。",
                solution: "The **`LEFT JOIN`** (または `LEFT OUTER JOIN`)。"
            },
            vi: {
                title: "Loại `JOIN` nào trả về tất cả các hàng từ bảng bên trái và các hàng khớp từ bảng bên phải (ngược lại là NULL)?",
                body: "Nêu tên loại join ưu tiên một bảng.",
                solution: "Loại **`LEFT JOIN`** (hoặc `LEFT OUTER JOIN`)."
            }
        }
    },
    {
        _id: "rdbms-f-033",
        difficulty: "fresher",
        tags: ["sql", "alias", "readability"],
        content: {
            en: {
                title: "What is the purpose of the **`AS`** keyword in an SQL query?",
                body: "How does it affect the column or table name in the result set?",
                solution: "It is used to assign a temporary name (an **alias**) to a column or a table, often to improve readability or to handle ambiguous column names."
            },
            jp: {
                title: "SQLクエリにおける**`AS`**キーワードの目的は何ですか？",
                body: "結果セット内の列またはテーブル名にどのように影響しますか？",
                solution: "列またはテーブルに一時的な名前（**エイリアス**）を割り当てるために使用され、多くの場合、読みやすさを向上させたり、あいまいな列名を処理したりするために使用されます。"
            },
            vi: {
                title: "Mục đích của từ khóa **`AS`** trong một truy vấn SQL là gì?",
                body: "Nó ảnh hưởng đến tên cột hoặc tên bảng trong tập kết quả như thế nào?",
                solution: "Nó được sử dụng để gán một tên tạm thời (một **bí danh/alias**) cho một cột hoặc một bảng, thường để cải thiện khả năng đọc hoặc để xử lý các tên cột mơ hồ."
            }
        }
    },
    {
        _id: "rdbms-f-034",
        difficulty: "fresher",
        tags: ["sql", "ddl", "schema modification"],
        content: {
            en: {
                title: "Which SQL command is used to add, delete, or modify columns in an existing table?",
                body: "Name the DDL command used for structural changes to a table.",
                solution: "The **`ALTER TABLE`** command."
            },
            jp: {
                title: "既存のテーブルに列を追加、削除、または変更するために使用されるSQLコマンドは何ですか？",
                body: "テーブルの構造変更に使用されるDDLコマンドの名前を挙げてください。",
                solution: "The **`ALTER TABLE`** command。"
            },
            vi: {
                title: "Lệnh SQL nào được sử dụng để thêm, xóa hoặc sửa đổi các cột trong một bảng hiện có?",
                body: "Nêu tên lệnh DDL được sử dụng để thay đổi cấu trúc của bảng.",
                solution: "Lệnh **`ALTER TABLE`**."
            }
        }
    },
    {
        _id: "rdbms-f-035",
        difficulty: "fresher",
        tags: ["sql", "ddl", "drop", "delete"],
        content: {
            en: {
                title: "Which SQL command is used to completely remove a table structure and all its data from the database?",
                body: "This command is irreversible.",
                solution: "The **`DROP TABLE`** command."
            },
            jp: {
                title: "データベースからテーブル構造とそのすべてのデータを完全に削除するために使用されるSQLコマンドは何ですか？",
                body: "このコマンドは元に戻せません。",
                solution: "The **`DROP TABLE`** command。"
            },
            vi: {
                title: "Lệnh SQL nào được sử dụng để xóa hoàn toàn cấu trúc bảng và tất cả dữ liệu của nó khỏi cơ sở dữ liệu?",
                body: "Lệnh này không thể đảo ngược.",
                solution: "Lệnh **`DROP TABLE`**."
            }
        }
    },
    {
        _id: "rdbms-f-036",
        difficulty: "fresher",
        tags: ["sql", "dml", "delete", "truncate"],
        content: {
            en: {
                title: "What is the key difference between the `DELETE` and `TRUNCATE` commands?",
                body: "Which one can be rolled back, and which one is faster for removing all rows?",
                solution: "`DELETE` is DML, allows for a `WHERE` clause, and can be **rolled back** (slower). `TRUNCATE` is DDL, removes all rows rapidly, and **cannot be rolled back** (faster)."
            },
            jp: {
                title: "`DELETE`コマンドと`TRUNCATE`コマンドの主な違いは何ですか？",
                body: "どちらがロールバック可能で、どちらがすべての行を削除するのが速いですか？",
                solution: "`DELETE`はDMLであり、`WHERE`句を許可し、**ロールバック可能**です（遅い）。`TRUNCATE`はDDLであり、すべての行を迅速に削除し、**ロールバック不可能**です（速い）。"
            },
            vi: {
                title: "Sự khác biệt chính giữa lệnh `DELETE` và `TRUNCATE` là gì?",
                body: "Lệnh nào có thể được rollback, và lệnh nào nhanh hơn để xóa tất cả các hàng?",
                solution: "`DELETE` là DML, cho phép sử dụng mệnh đề `WHERE` và có thể được **rollback** (chậm hơn). `TRUNCATE` là DDL, xóa tất cả các hàng nhanh chóng và **không thể rollback** (nhanh hơn)."
            }
        }
    },
    {
        _id: "rdbms-f-037",
        difficulty: "fresher",
        tags: ["index", "performance", "speed"],
        content: {
            en: {
                title: "What is the primary purpose of an **Index** in a database table?",
                body: "How does it affect query execution speed?",
                solution: "An Index is used to **speed up data retrieval** (SELECT queries) by allowing the RDBMS to quickly look up rows without scanning the entire table (similar to an index in a book)."
            },
            jp: {
                title: "データベーステーブルにおける**インデックス**の主な目的は何ですか？",
                body: "クエリの実行速度にどのように影響しますか？",
                solution: "インデックスは、RDBMSがテーブル全体をスキャンせずに迅速に行を検索できるようにすることで、**データ取得を高速化**するために使用されます（本の索引に似ています）。"
            },
            vi: {
                title: "Mục đích chính của một **Index** (Chỉ mục) trong một bảng cơ sở dữ liệu là gì?",
                body: "Nó ảnh hưởng đến tốc độ thực thi truy vấn như thế nào?",
                solution: "Index được sử dụng để **tăng tốc độ truy xuất dữ liệu** (truy vấn SELECT) bằng cách cho phép RDBMS nhanh chóng tra cứu các hàng mà không cần quét toàn bộ bảng (tương tự như mục lục trong sách)."
            }
        }
    },
    {
        _id: "rdbms-f-038",
        difficulty: "fresher",
        tags: ["normalization", "data redundancy", "design"],
        content: {
            en: {
                title: "What fundamental problem does **Normalization** attempt to solve in database design?",
                body: "What is the term for unnecessary data repetition?",
                solution: "It attempts to minimize or eliminate **Data Redundancy** (unnecessary repetition of data) and ensure data dependencies make sense, thereby improving data integrity."
            },
            jp: {
                title: "**正規化**は、データベース設計でどのような根本的な問題を解決しようとしますか？",
                body: "不必要なデータの繰り返しを表す用語は何ですか？",
                solution: "**データ冗長性**（不必要なデータの繰り返し）を最小限に抑えるか排除し、データ依存関係が意味をなすようにすることで、データ整合性を向上させようとします。"
            },
            vi: {
                title: "Vấn đề cơ bản nào mà **Normalization** (Chuẩn hóa) cố gắng giải quyết trong thiết kế cơ sở dữ liệu?",
                body: "Thuật ngữ cho việc lặp lại dữ liệu không cần thiết là gì?",
                solution: "Nó cố gắng giảm thiểu hoặc loại bỏ **Dư thừa Dữ liệu (Data Redundancy)** (lặp lại dữ liệu không cần thiết) và đảm bảo các phụ thuộc dữ liệu có ý nghĩa, qua đó cải thiện tính toàn vẹn dữ liệu."
            }
        }
    },
    {
        _id: "rdbms-f-039",
        difficulty: "fresher",
        tags: ["transaction", "acid", "atomicity"],
        content: {
            en: {
                title: "In the context of database transactions, what does the 'A' in the ACID acronym stand for?",
                body: "Explain the meaning of this property briefly.",
                solution: "'A' stands for **Atomicity**. It means a transaction must be treated as a single, indivisible unit of work; it either completes entirely or fails entirely (all or nothing)."
            },
            jp: {
                title: "データベースのトランザクションの文脈で、ACIDの頭字語の「A」は何を表しますか？",
                body: "このプロパティの意味を簡潔に説明してください。",
                solution: "「A」は**Atomicity**（原子性）を表します。これは、トランザクションが単一の不可分な作業単位として扱われなければならないことを意味します。それは完全に完了するか、完全に失敗するかのどちらかです（all or nothing）。"
            },
            vi: {
                title: "Trong bối cảnh các giao dịch cơ sở dữ liệu, chữ 'A' trong từ viết tắt ACID là viết tắt của từ gì?",
                body: "Giải thích ngắn gọn ý nghĩa của thuộc tính này.",
                solution: "'A' là viết tắt của **Atomicity** (Tính nguyên tử). Nó có nghĩa là một giao dịch phải được coi là một đơn vị công việc duy nhất, không thể chia cắt; nó hoặc hoàn thành toàn bộ hoặc thất bại hoàn toàn (tất cả hoặc không gì cả)."
            }
        }
    },
    {
        _id: "rdbms-f-040",
        difficulty: "fresher",
        tags: ["transaction", "acid", "consistency"],
        content: {
            en: {
                title: "In the context of database transactions, what does the 'C' in the ACID acronym stand for?",
                body: "Explain the meaning of this property briefly.",
                solution: "'C' stands for **Consistency**. It means a transaction must bring the database from one valid state to another valid state, maintaining all defined rules and constraints."
            },
            jp: {
                title: "データベースのトランザクションの文脈で、ACIDの頭字語の「C」は何を表しますか？",
                body: "このプロパティの意味を簡潔に説明してください。",
                solution: "「C」は**Consistency**（一貫性）を表します。これは、トランザクションがデータベースを1つの有効な状態から別の有効な状態にもたらし、定義されたすべてのルールと制約を維持しなければならないことを意味します。"
            },
            vi: {
                title: "Trong bối cảnh các giao dịch cơ sở dữ liệu, chữ 'C' trong từ viết tắt ACID là viết tắt của từ gì?",
                body: "Giải thích ngắn gọn ý nghĩa của thuộc tính này.",
                solution: "'C' là viết tắt của **Consistency** (Tính nhất quán). Nó có nghĩa là một giao dịch phải đưa cơ sở dữ liệu từ một trạng thái hợp lệ này sang một trạng thái hợp lệ khác, duy trì tất cả các quy tắc và ràng buộc đã xác định."
            }
        }
    },
    {
        _id: "rdbms-f-041",
        difficulty: "fresher",
        tags: ["transaction", "commit", "save"],
        content: {
            en: {
                title: "Which SQL command is used to permanently save the changes made by a transaction to the database?",
                body: "Name the command that finalizes a transaction.",
                solution: "The **`COMMIT`** command."
            },
            jp: {
                title: "トランザクションによって行われた変更をデータベースに永続的に保存するために使用されるSQLコマンドは何ですか？",
                body: "トランザクションを完了させるコマンドの名前を挙げてください。",
                solution: "The **`COMMIT`** command。"
            },
            vi: {
                title: "Lệnh SQL nào được sử dụng để lưu vĩnh viễn các thay đổi được thực hiện bởi một giao dịch vào cơ sở dữ liệu?",
                body: "Nêu tên lệnh hoàn tất một giao dịch.",
                solution: "Lệnh **`COMMIT`**."
            }
        }
    },
    {
        _id: "rdbms-f-042",
        difficulty: "fresher",
        tags: ["transaction", "rollback", "undo"],
        content: {
            en: {
                title: "Which SQL command is used to undo all changes made during the current transaction and restore the database to its state before the transaction began?",
                body: "Name the command that reverts the changes.",
                solution: "The **`ROLLBACK`** command."
            },
            jp: {
                title: "現在のトランザクション中に行われたすべての変更を取り消し、データベースをトランザクション開始前の状態に復元するために使用されるSQLコマンドは何ですか？",
                body: "変更を元に戻すコマンドの名前を挙げてください。",
                solution: "The **`ROLLBACK`** command。"
            },
            vi: {
                title: "Lệnh SQL nào được sử dụng để hoàn tác tất cả các thay đổi được thực hiện trong giao dịch hiện tại và khôi phục cơ sở dữ liệu về trạng thái trước khi giao dịch bắt đầu?",
                body: "Nêu tên lệnh hoàn lại các thay đổi.",
                solution: "Lệnh **`ROLLBACK`**."
            }
        }
    },
    {
        _id: "rdbms-f-043",
        difficulty: "fresher",
        tags: ["sql", "operators", "between"],
        content: {
            en: {
                title: "Which operator is used in the `WHERE` clause to select values within a given range (inclusive)?",
                body: "The operator includes the starting and ending values.",
                solution: "The **`BETWEEN`** operator."
            },
            jp: {
                title: "与えられた範囲内（両端を含む）の値を選択するために、`WHERE`句で使用される演算子は何ですか？",
                body: "演算子は開始値と終了値を含みます。",
                solution: "The **`BETWEEN`** operator。"
            },
            vi: {
                title: "Toán tử nào được sử dụng trong mệnh đề `WHERE` để chọn các giá trị trong một phạm vi nhất định (bao gồm cả hai đầu)?",
                body: "Toán tử bao gồm cả giá trị bắt đầu và kết thúc.",
                solution: "Toán tử **`BETWEEN`**."
            }
        }
    },
    {
        _id: "rdbms-f-044",
        difficulty: "fresher",
        tags: ["sql", "string function", "concat"],
        content: {
            en: {
                title: "Which common function or operator is used to join two or more strings (or column values) together?",
                body: "Name the concept of linking strings.",
                solution: "**`CONCAT()`** function (or the `||` operator in some RDBMS like PostgreSQL)."
            },
            jp: {
                title: "2つ以上の文字列（または列の値）を結合するために使用される一般的な関数または演算子は何ですか？",
                body: "文字列をリンクする概念の名前を挙げてください。",
                solution: "**`CONCAT()`** 関数（またはPostgreSQLのような一部のRDBMSでは `||` 演算子）。"
            },
            vi: {
                title: "Hàm hoặc toán tử phổ biến nào được sử dụng để nối hai hoặc nhiều chuỗi (hoặc giá trị cột) lại với nhau?",
                body: "Nêu tên khái niệm liên kết các chuỗi.",
                solution: "Hàm **`CONCAT()`** (hoặc toán tử `||` trong một số RDBMS như PostgreSQL)."
            }
        }
    },
    {
        _id: "rdbms-f-045",
        difficulty: "fresher",
        tags: ["sql", "distinct", "unique"],
        content: {
            en: {
                title: "Which keyword is used in the `SELECT` statement to return only unique (non-duplicate) values in the result set?",
                body: "The keyword is placed immediately after `SELECT`.",
                solution: "The **`DISTINCT`** keyword."
            },
            jp: {
                title: "結果セットで一意の（重複のない）値のみを返すために、`SELECT`ステートメントで使用されるキーワードは何ですか？",
                body: "キーワードは`SELECT`の直後に配置されます。",
                solution: "The **`DISTINCT`** keyword。"
            },
            vi: {
                title: "Từ khóa nào được sử dụng trong câu lệnh `SELECT` để chỉ trả về các giá trị duy nhất (không trùng lặp) trong tập kết quả?",
                body: "Từ khóa được đặt ngay sau `SELECT`.",
                solution: "Từ khóa **`DISTINCT`**."
            }
        }
    },
    {
        _id: "rdbms-f-046",
        difficulty: "fresher",
        tags: ["view", "virtual table", "security"],
        content: {
            en: {
                title: "What is a **View** in SQL, and what is its main advantage?",
                body: "Is a View a physical table?",
                solution: "A View is a **virtual table** based on the result set of an SQL query. Its main advantage is **security** (by restricting access to underlying table columns/rows) and **simplifying complex queries**."
            },
            jp: {
                title: "SQLにおける**ビュー**とは何ですか、そしてその主な利点は何ですか？",
                body: "ビューは物理的なテーブルですか？",
                solution: "ビューは、SQLクエリの結果セットに基づいた**仮想テーブル**です。その主な利点は、**セキュリティ**（基になるテーブルの列/行へのアクセスを制限することによる）と**複雑なクエリの簡素化**です。"
            },
            vi: {
                title: "Một **View** trong SQL là gì, và lợi thế chính của nó là gì?",
                body: "View có phải là một bảng vật lý không?",
                solution: "View là một **bảng ảo** dựa trên tập kết quả của một truy vấn SQL. Lợi thế chính của nó là **bảo mật** (bằng cách hạn chế quyền truy cập vào các cột/hàng của bảng cơ sở) và **đơn giản hóa các truy vấn phức tạp**."
            }
        }
    },
    {
        _id: "rdbms-f-047",
        difficulty: "fresher",
        tags: ["sql", "subquery", "nested query"],
        content: {
            en: {
                title: "What is a **Subquery** (or Inner Query)?",
                body: "Where is a subquery typically nested in a main query?",
                solution: "A Subquery is a SQL query nested inside a larger query. It can be nested in the `WHERE`, `FROM`, or `SELECT` clauses to return a single value or a result set that is used by the outer query."
            },
            jp: {
                title: "**サブクエリ**（または内部クエリ）とは何ですか？",
                body: "サブクエリは通常、メインクエリのどこにネストされますか？",
                solution: "サブクエリは、より大きなクエリ内にネストされたSQLクエリです。それは、外部クエリによって使用される単一の値または結果セットを返すために、`WHERE`、`FROM`、または`SELECT`句にネストすることができます。"
            },
            vi: {
                title: "Một **Subquery** (hoặc Truy vấn con/Inner Query) là gì?",
                body: "Một subquery thường được lồng ở đâu trong một truy vấn chính?",
                solution: "Subquery là một truy vấn SQL được lồng bên trong một truy vấn lớn hơn. Nó có thể được lồng trong các mệnh đề `WHERE`, `FROM` hoặc `SELECT` để trả về một giá trị duy nhất hoặc một tập kết quả được sử dụng bởi truy vấn bên ngoài."
            }
        }
    },
    {
        _id: "rdbms-f-048",
        difficulty: "fresher",
        tags: ["database", "schema", "structure"],
        content: {
            en: {
                title: "In RDBMS, what does the term **Schema** refer to?",
                body: "Does it include the data itself?",
                solution: "The Schema is the **logical structure** or blueprint of the database, defining the tables, columns, data types, relationships, indexes, and constraints. It does **not** include the data itself."
            },
            jp: {
                title: "RDBMSにおいて、**スキーマ**という用語は何を指しますか？",
                body: "それ自体がデータを含みますか？",
                solution: "スキーマは、テーブル、列、データ型、リレーションシップ、インデックス、制約を定義するデータベースの**論理構造**または設計図です。それ自体はデータを含み**ません**。"
            },
            vi: {
                title: "Trong RDBMS, thuật ngữ **Schema** (Lược đồ) đề cập đến điều gì?",
                body: "Nó có bao gồm bản thân dữ liệu không?",
                solution: "Schema là **cấu trúc logic** hoặc bản thiết kế của cơ sở dữ liệu, định nghĩa các bảng, cột, kiểu dữ liệu, mối quan hệ, chỉ mục và ràng buộc. Nó **không** bao gồm bản thân dữ liệu."
            }
        }
    },
    {
        _id: "rdbms-f-049",
        difficulty: "fresher",
        tags: ["sql", "constraint", "not null"],
        content: {
            en: {
                title: "What does the **`NOT NULL`** constraint on a column guarantee?",
                body: "Can a row be inserted if this column's value is missing?",
                solution: "It guarantees that the specified column **cannot contain NULL (missing/unknown) values**. A value must be provided for that column when a new row is inserted or updated."
            },
            jp: {
                title: "列に対する**`NOT NULL`**制約は何を保証しますか？",
                body: "この列の値が欠落している場合、行を挿入できますか？",
                solution: "指定された列が**NULL（欠落/不明な）値を含まない**ことを保証します。新しい行が挿入または更新されるとき、その列に値が提供されなければなりません。"
            },
            vi: {
                title: "Ràng buộc **`NOT NULL`** trên một cột đảm bảo điều gì?",
                body: "Liệu một hàng có thể được chèn nếu giá trị cột này bị thiếu không?",
                solution: "Nó đảm bảo rằng cột được chỉ định **không thể chứa các giá trị NULL (thiếu/không xác định)**. Một giá trị phải được cung cấp cho cột đó khi một hàng mới được chèn hoặc cập nhật."
            }
        }
    },
    {
        _id: "rdbms-f-050",
        difficulty: "fresher",
        tags: ["sql", "ddl", "dcl", "dml"],
        content: {
            en: {
                title: "What are the four main categories of SQL commands (e.g., DDL, DML)?",
                body: "Name the four main subsets of SQL.",
                solution: "1. **DDL** (Data Definition Language), 2. **DML** (Data Manipulation Language), 3. **DCL** (Data Control Language), and 4. **TCL** (Transaction Control Language)."
            },
            jp: {
                title: "SQLコマンドの4つの主要なカテゴリは何ですか（例: DDL、DML）？",
                body: "SQLの4つの主要なサブセットの名前を挙げてください。",
                solution: "1. **DDL** (Data Definition Language), 2. **DML** (Data Manipulation Language), 3. **DCL** (Data Control Language), 4. **TCL** (Transaction Control Language)。"
            },
            vi: {
                title: "Bốn loại lệnh SQL chính là gì (ví dụ: DDL, DML)?",
                body: "Nêu tên bốn tập con chính của SQL.",
                solution: "1. **DDL** (Data Definition Language - Ngôn ngữ Định nghĩa Dữ liệu), 2. **DML** (Data Manipulation Language - Ngôn ngữ Thao tác Dữ liệu), 3. **DCL** (Data Control Language - Ngôn ngữ Kiểm soát Dữ liệu), và 4. **TCL** (Transaction Control Language - Ngôn ngữ Kiểm soát Giao dịch)."
            }
        }
    }
];