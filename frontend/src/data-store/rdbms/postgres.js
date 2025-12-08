const postgresqlQuestions = [
    // --- FRESHER (10/20 Questions) ---
    {
        _id: "pg-f-001",
        difficulty: "fresher",
        tags: ["SQL", "SELECT", "basics"],
        content: {
            en: {
                title: "Basic SELECT Statement",
                body: "Write a SQL query to retrieve all columns and all rows from a table named 'users'.",
                solution: "SELECT * FROM users;"
            },
            jp: {
                title: "基本的な SELECT 文",
                body: "「users」という名前のテーブルから、すべての列とすべての行を取得する SQL クエリを作成してください。",
                solution: "SELECT * FROM users;"
            },
            vi: {
                title: "Lệnh SELECT cơ bản",
                body: "Viết truy vấn SQL để lấy tất cả các cột và tất cả các hàng từ một bảng có tên là 'users'.",
                solution: "SELECT * FROM users;"
            }
        }
    },
    {
        _id: "pg-f-002",
        difficulty: "fresher",
        tags: ["data type", "serial", "primary key"],
        content: {
            en: {
                title: "Auto-Increment in PostgreSQL",
                body: "Which data type in PostgreSQL is commonly used to create an auto-incrementing primary key column?",
                solution: "SERIAL, which is a pseudo-type that creates an integer column and automatically attaches a sequence to it."
            },
            jp: {
                title: "PostgreSQL の自動増分",
                body: "PostgreSQL で自動増分する主キー列を作成するために一般的に使用されるデータ型は何ですか？",
                solution: "SERIAL。これは整数型の列を作成し、自動的にシーケンスを関連付ける疑似データ型です。"
            },
            vi: {
                title: "Tự động tăng trong PostgreSQL",
                body: "Kiểu dữ liệu nào trong PostgreSQL thường được sử dụng để tạo một cột khóa chính (primary key) tự động tăng?",
                solution: "SERIAL, là một kiểu dữ liệu giả (pseudo-type) tạo ra một cột số nguyên và tự động đính kèm một sequence vào đó."
            }
        }
    },
    {
        _id: "pg-f-003",
        difficulty: "fresher",
        tags: ["CREATE TABLE", "schema"],
        content: {
            en: {
                title: "Creating a Table",
                body: "What SQL command is used to create a new table in a PostgreSQL database?",
                solution: "CREATE TABLE."
            },
            jp: {
                title: "テーブルの作成",
                body: "PostgreSQL データベースで新しいテーブルを作成するために使用される SQL コマンドは何ですか？",
                solution: "CREATE TABLE。"
            },
            vi: {
                title: "Tạo bảng",
                body: "Lệnh SQL nào được sử dụng để tạo một bảng mới trong cơ sở dữ liệu PostgreSQL?",
                solution: "CREATE TABLE."
            }
        }
    },
    {
        _id: "pg-f-004",
        difficulty: "fresher",
        tags: ["psql", "command line", "connect"],
        content: {
            en: {
                title: "psql Connection",
                body: "What is the command line utility used to interact with a PostgreSQL database?",
                solution: "psql."
            },
            jp: {
                title: "psql 接続",
                body: "PostgreSQL データベースと対話するために使用されるコマンドラインユーティリティは何ですか？",
                solution: "psql。"
            },
            vi: {
                title: "Kết nối psql",
                body: "Tiện ích dòng lệnh (command line utility) nào được sử dụng để tương tác với cơ sở dữ liệu PostgreSQL?",
                solution: "psql."
            }
        }
    },
    {
        _id: "pg-f-005",
        difficulty: "fresher",
        tags: ["data type", "TEXT", "VARCHAR"],
        content: {
            en: {
                title: "Variable Length String Data Type",
                body: "Which PostgreSQL data type is used for variable-length strings with a maximum limit?",
                solution: "VARCHAR(n) or CHARACTER VARYING(n)."
            },
            jp: {
                title: "可変長文字列データ型",
                body: "最大長が設定された可変長文字列に使用される PostgreSQL のデータ型は何ですか？",
                solution: "VARCHAR(n) または CHARACTER VARYING(n)。"
            },
            vi: {
                title: "Kiểu dữ liệu chuỗi độ dài thay đổi",
                body: "Kiểu dữ liệu PostgreSQL nào được sử dụng cho chuỗi có độ dài thay đổi và có giới hạn tối đa?",
                solution: "VARCHAR(n) hoặc CHARACTER VARYING(n)."
            }
        }
    },
    {
        _id: "pg-f-006",
        difficulty: "fresher",
        tags: ["NULL", "constraint"],
        content: {
            en: {
                title: "NOT NULL Constraint",
                body: "What constraint ensures that a column cannot contain missing or empty values?",
                solution: "NOT NULL constraint."
            },
            jp: {
                title: "NOT NULL 制約",
                body: "列に欠落値や空の値を含まないことを保証する制約は何ですか？",
                solution: "NOT NULL 制約。"
            },
            vi: {
                title: "Ràng buộc NOT NULL",
                body: "Ràng buộc nào đảm bảo rằng một cột không thể chứa các giá trị bị thiếu hoặc rỗng (missing or empty values)?",
                solution: "Ràng buộc NOT NULL (NOT NULL constraint)."
            }
        }
    },
    {
        _id: "pg-f-007",
        difficulty: "fresher",
        tags: ["INSERT", "DML"],
        content: {
            en: {
                title: "Inserting Data",
                body: "What DML (Data Manipulation Language) command is used to add new rows to a table?",
                solution: "INSERT INTO."
            },
            jp: {
                title: "データの挿入",
                body: "テーブルに新しい行を追加するために使用される DML（データ操作言語）コマンドは何ですか？",
                solution: "INSERT INTO。"
            },
            vi: {
                title: "Chèn dữ liệu",
                body: "Lệnh DML (Data Manipulation Language) nào được sử dụng để thêm các hàng mới vào một bảng?",
                solution: "INSERT INTO."
            }
        }
    },
    {
        _id: "pg-f-008",
        difficulty: "fresher",
        tags: ["UPDATE", "DML"],
        content: {
            en: {
                title: "Modifying Data",
                body: "What SQL command is used to change existing data in a table?",
                solution: "UPDATE."
            },
            jp: {
                title: "データの変更",
                body: "テーブル内の既存のデータを変更するために使用される SQL コマンドは何ですか？",
                solution: "UPDATE。"
            },
            vi: {
                title: "Sửa đổi dữ liệu",
                body: "Lệnh SQL nào được sử dụng để thay đổi dữ liệu hiện có trong một bảng?",
                solution: "UPDATE."
            }
        }
    },
    {
        _id: "pg-f-009",
        difficulty: "fresher",
        tags: ["DELETE", "DML", "TRUNCATE"],
        content: {
            en: {
                title: "Removing Rows",
                body: "What SQL command is used to remove specific rows from a table?",
                solution: "DELETE FROM."
            },
            jp: {
                title: "行の削除",
                body: "テーブルから特定の行を削除するために使用される SQL コマンドは何ですか？",
                solution: "DELETE FROM。"
            },
            vi: {
                title: "Xóa hàng",
                body: "Lệnh SQL nào được sử dụng để xóa các hàng cụ thể khỏi một bảng?",
                solution: "DELETE FROM."
            }
        }
    },
    {
        _id: "pg-f-010",
        difficulty: "fresher",
        tags: ["data type", "date", "time"],
        content: {
            en: {
                title: "Storing Date and Time",
                body: "Which PostgreSQL data type is typically used to store both date and time information?",
                solution: "TIMESTAMP."
            },
            jp: {
                title: "日付と時刻の保存",
                body: "日付と時刻の両方の情報を保存するために一般的に使用される PostgreSQL のデータ型は何ですか？",
                solution: "TIMESTAMP。"
            },
            vi: {
                title: "Lưu trữ Ngày và Giờ",
                body: "Kiểu dữ liệu PostgreSQL nào thường được sử dụng để lưu trữ cả thông tin ngày và giờ?",
                solution: "TIMESTAMP."
            }
        }
    },
    // --- JUNIOR (10/20 Questions) ---
    {
        _id: "pg-j-001",
        difficulty: "junior",
        tags: ["JOIN", "INNER JOIN"],
        content: {
            en: {
                title: "INNER JOIN Function",
                body: "Explain what an INNER JOIN does in a SQL query.",
                solution: "An INNER JOIN returns only the rows that have matching values in both tables being joined."
            },
            jp: {
                title: "INNER JOIN の機能",
                body: "SQL クエリにおける INNER JOIN が何をするのか説明してください。",
                solution: "INNER JOIN は、結合される両方のテーブルに一致する値を持つ行のみを返します。"
            },
            vi: {
                title: "Chức năng của INNER JOIN",
                body: "Giải thích chức năng của INNER JOIN trong một truy vấn SQL.",
                solution: "INNER JOIN chỉ trả về những hàng có giá trị khớp nhau ở cả hai bảng được kết nối."
            }
        }
    },
    {
        _id: "pg-j-002",
        difficulty: "junior",
        tags: ["GROUP BY", "aggregate functions"],
        content: {
            en: {
                title: "Grouping Data",
                body: "Which clause is used in SQL to group rows that have the same values in specified columns into summary rows?",
                solution: "GROUP BY clause."
            },
            jp: {
                title: "データのグループ化",
                body: "指定された列で同じ値を持つ行を要約行にグループ化するために SQL で使用される句は何ですか？",
                solution: "GROUP BY 句。"
            },
            vi: {
                title: "Nhóm dữ liệu",
                body: "Mệnh đề nào được sử dụng trong SQL để nhóm các hàng có cùng giá trị trong các cột được chỉ định thành các hàng tổng hợp?",
                solution: "Mệnh đề GROUP BY."
            }
        }
    },
    {
        _id: "pg-j-003",
        difficulty: "junior",
        tags: ["psql", "meta-command", "list tables"],
        content: {
            en: {
                title: "psql Meta-Command",
                body: "What is the psql meta-command (starting with \\) to list all tables in the current database schema?",
                solution: "\\dt."
            },
            jp: {
                title: "psql メタコマンド",
                body: "現在のデータベーススキーマ内のすべてのテーブルを一覧表示するための psql メタコマンド（\\ で始まる）は何ですか？",
                solution: "\\dt。"
            },
            vi: {
                title: "Lệnh Meta của psql",
                body: "Lệnh meta của psql (bắt đầu bằng \\) để liệt kê tất cả các bảng trong lược đồ cơ sở dữ liệu hiện tại là gì?",
                solution: "\\dt."
            }
        }
    },
    {
        _id: "pg-j-004",
        difficulty: "junior",
        tags: ["INDEX", "performance"],
        content: {
            en: {
                title: "Purpose of an Index",
                body: "What is the primary purpose of creating an index on a table column?",
                solution: "To speed up data retrieval (SELECT queries) by allowing the database system to quickly locate rows, often at the cost of slower data modification (INSERT/UPDATE/DELETE)."
            },
            jp: {
                title: "インデックスの目的",
                body: "テーブルの列にインデックスを作成する主な目的は何ですか？",
                solution: "データベースシステムが行を迅速に見つけることができるようにすることで、データ取得（SELECT クエリ）を高速化することです。ただし、データ変更（INSERT/UPDATE/DELETE）は遅くなる可能性があります。"
            },
            vi: {
                title: "Mục đích của Index",
                body: "Mục đích chính của việc tạo index trên một cột của bảng là gì?",
                solution: "Để tăng tốc độ truy xuất dữ liệu (các truy vấn SELECT) bằng cách cho phép hệ thống cơ sở dữ liệu nhanh chóng xác định vị trí các hàng, đổi lại là làm chậm quá trình sửa đổi dữ liệu (INSERT/UPDATE/DELETE)."
            }
        }
    },
    {
        _id: "pg-j-005",
        difficulty: "junior",
        tags: ["data type", "JSONB", "JSON"],
        content: {
            en: {
                title: "JSON Data Type in PostgreSQL",
                body: "What are the two main data types in PostgreSQL used to store JSON data, and which one is preferred for better query performance?",
                solution: "JSON and JSONB. JSONB is generally preferred for performance because it stores data in a decomposed binary format, which is faster to process and index."
            },
            jp: {
                title: "PostgreSQL の JSON データ型",
                body: "JSON データを保存するために PostgreSQL で使用される主な 2 つのデータ型は何ですか、また、より良いクエリパフォーマンスのために推奨されるのはどちらですか？",
                solution: "JSON と JSONB。JSONB は、データをバイナリ形式で保存し、処理とインデックス作成が速いため、パフォーマンスのために一般的に推奨されます。"
            },
            vi: {
                title: "Kiểu dữ liệu JSON trong PostgreSQL",
                body: "Hai kiểu dữ liệu chính trong PostgreSQL được sử dụng để lưu trữ dữ liệu JSON là gì, và kiểu nào được ưu tiên để có hiệu suất truy vấn tốt hơn?",
                solution: "JSON và JSONB. JSONB thường được ưu tiên về hiệu suất vì nó lưu trữ dữ liệu dưới dạng nhị phân đã được phân tách (decomposed binary format), nhanh hơn để xử lý và lập chỉ mục."
            }
        }
    },
    {
        _id: "pg-j-006",
        difficulty: "junior",
        tags: ["TRUNCATE", "DELETE", "DDL", "DML"],
        content: {
            en: {
                title: "TRUNCATE vs DELETE",
                body: "What is the main difference between the SQL commands `DELETE FROM table` and `TRUNCATE TABLE table`?",
                solution: "`DELETE` is DML, executes row by row (can use WHERE), logs transactions, and can be rolled back. `TRUNCATE` is DDL, removes all rows quickly by deallocating storage space, does not log individual row deletions, and is generally faster but cannot be rolled back (in some transactional contexts)."
            },
            jp: {
                title: "TRUNCATE 対 DELETE",
                body: "SQL コマンド `DELETE FROM table` と `TRUNCATE TABLE table` の主な違いは何ですか？",
                solution: "`DELETE` は DML であり、行ごとに実行され（WHERE 使用可能）、トランザクションをログに記録し、ロールバック可能です。`TRUNCATE` は DDL であり、ストレージスペースを解放することで全行を迅速に削除し、個々の行の削除をログに記録せず、通常高速ですが、ロールバックできません（一部のトランザクションコンテキストでは可能）。"
            },
            vi: {
                title: "TRUNCATE so với DELETE",
                body: "Sự khác biệt chính giữa các lệnh SQL `DELETE FROM table` và `TRUNCATE TABLE table` là gì?",
                solution: "`DELETE` là DML, thực thi từng hàng (có thể dùng WHERE), ghi log giao dịch, và có thể rollback. `TRUNCATE` là DDL, xóa nhanh tất cả các hàng bằng cách giải phóng không gian lưu trữ, không ghi log từng hàng, và thường nhanh hơn nhưng không thể rollback (trong một số ngữ cảnh giao dịch)."
            }
        }
    },
    {
        _id: "pg-j-007",
        difficulty: "junior",
        tags: ["Subquery", "nested query"],
        content: {
            en: {
                title: "Subquery Definition",
                body: "What is a subquery (or inner query) in SQL?",
                solution: "A query nested inside another SQL query (like SELECT, INSERT, UPDATE, or DELETE) or inside another subquery, used to return data that will be used by the outer query."
            },
            jp: {
                title: "サブクエリの定義",
                body: "SQL におけるサブクエリ（または内部クエリ）とは何ですか？",
                solution: "別の SQL クエリ（SELECT、INSERT、UPDATE、DELETE など）または別のサブクエリの内部にネストされたクエリで、外部クエリによって使用されるデータを返すために使用されます。"
            },
            vi: {
                title: "Định nghĩa Subquery",
                body: "Subquery (hoặc truy vấn con) trong SQL là gì?",
                solution: "Là một truy vấn được lồng bên trong một truy vấn SQL khác (như SELECT, INSERT, UPDATE, hoặc DELETE) hoặc bên trong một subquery khác, được sử dụng để trả về dữ liệu mà truy vấn bên ngoài sẽ sử dụng."
            }
        }
    },
    {
        _id: "pg-j-008",
        difficulty: "junior",
        tags: ["VIEW", "virtual table"],
        content: {
            en: {
                title: "Purpose of a VIEW",
                body: "What is a VIEW in PostgreSQL and what is its main advantage?",
                solution: "A VIEW is a virtual table based on the result-set of an SQL query. Its main advantages include simplifying complex queries, restricting data access (security), and providing data abstraction."
            },
            jp: {
                title: "VIEW の目的",
                body: "PostgreSQL における VIEW とは何ですか、またその主な利点は何ですか？",
                solution: "VIEW は SQL クエリの結果セットに基づいて作成される仮想テーブルです。主な利点には、複雑なクエリの簡素化、データアクセス制限（セキュリティ）、およびデータ抽象化の提供が含まれます。"
            },
            vi: {
                title: "Mục đích của VIEW",
                body: "VIEW trong PostgreSQL là gì và lợi thế chính của nó là gì?",
                solution: "VIEW là một bảng ảo dựa trên tập kết quả của một truy vấn SQL. Lợi thế chính của nó bao gồm đơn giản hóa các truy vấn phức tạp, hạn chế quyền truy cập dữ liệu (bảo mật), và cung cấp tính trừu tượng dữ liệu."
            }
        }
    },
    {
        _id: "pg-j-009",
        difficulty: "junior",
        tags: ["CTE", "WITH", "query structure"],
        content: {
            en: {
                title: "Common Table Expression (CTE)",
                body: "In PostgreSQL, what keyword is used to define a Common Table Expression (CTE), and what is its primary benefit?",
                solution: "The `WITH` keyword. It improves query readability and allows for recursive queries."
            },
            jp: {
                title: "共通テーブル式 (CTE)",
                body: "PostgreSQL で、共通テーブル式 (CTE) を定義するために使用されるキーワードは何ですか、またその主な利点は何ですか？",
                solution: "`WITH` キーワード。クエリの可読性を向上させ、再帰クエリを可能にします。"
            },
            vi: {
                title: "Common Table Expression (CTE)",
                body: "Trong PostgreSQL, từ khóa nào được sử dụng để định nghĩa Common Table Expression (CTE), và lợi ích chính của nó là gì?",
                solution: "Từ khóa `WITH`. Nó giúp cải thiện khả năng đọc của truy vấn và cho phép thực hiện các truy vấn đệ quy."
            }
        }
    },
    {
        _id: "pg-j-010",
        difficulty: "junior",
        tags: ["foreign key", "constraint", "referential integrity"],
        content: {
            en: {
                title: "Referential Integrity",
                body: "Which constraint is used to establish and enforce a link between two tables, ensuring referential integrity?",
                solution: "FOREIGN KEY constraint."
            },
            jp: {
                title: "参照整合性",
                body: "参照整合性を確保するために、2 つのテーブル間のリンクを確立および強制するために使用される制約は何ですか？",
                solution: "FOREIGN KEY 制約。"
            },
            vi: {
                title: "Tính toàn vẹn tham chiếu",
                body: "Ràng buộc nào được sử dụng để thiết lập và thực thi liên kết giữa hai bảng, đảm bảo tính toàn vẹn tham chiếu (referential integrity)?",
                solution: "Ràng buộc FOREIGN KEY."
            }
        }
    },
    // --- MIDDLE (10/20 Questions) ---
    {
        _id: "pg-m-001",
        difficulty: "middle",
        tags: ["window function", "ranking"],
        content: {
            en: {
                title: "Window Functions",
                body: "What is the key difference between a regular aggregate function (like SUM or AVG) and a window function in PostgreSQL?",
                solution: "Regular aggregate functions reduce the number of rows in the output (one row per group), whereas window functions perform a calculation across a set of table rows that are somehow related to the current row without grouping the output and collapsing rows."
            },
            jp: {
                title: "ウィンドウ関数",
                body: "通常の集計関数（SUM や AVG など）と PostgreSQL のウィンドウ関数の主な違いは何ですか？",
                solution: "通常の集計関数は出力の行数を減らしますが（グループごとに 1 行）、ウィンドウ関数は、出力をグループ化したり行を結合したりせずに、現在の行に関連する一連のテーブル行全体で計算を実行します。"
            },
            vi: {
                title: "Hàm cửa sổ (Window Functions)",
                body: "Sự khác biệt chính giữa hàm tổng hợp thông thường (như SUM hoặc AVG) và hàm cửa sổ (window function) trong PostgreSQL là gì?",
                solution: "Các hàm tổng hợp thông thường giảm số lượng hàng trong đầu ra (một hàng cho mỗi nhóm), trong khi các hàm cửa sổ thực hiện tính toán trên một tập hợp các hàng của bảng có liên quan đến hàng hiện tại mà không làm nhóm đầu ra và gộp các hàng."
            }
        }
    },
    {
        _id: "pg-m-002",
        difficulty: "middle",
        tags: ["INDEX", "B-Tree", "performance"],
        content: {
            en: {
                title: "B-Tree Index",
                body: "What is the default and most common index type in PostgreSQL, and when is it most effective?",
                solution: "B-Tree (Balanced Tree). It is most effective for columns involving equality and range comparisons (e.g., =, <, >, BETWEEN) on data types that can be ordered (like numbers, strings, dates)."
            },
            jp: {
                title: "B-Tree インデックス",
                body: "PostgreSQL のデフォルトで最も一般的なインデックスタイプは何ですか、また、それはいつ最も効果的ですか？",
                solution: "B-Tree（バランスの取れたツリー）。順序付け可能なデータ型（数値、文字列、日付など）での等価比較や範囲比較（例：=、<、>、BETWEEN）を含む列で最も効果的です。"
            },
            vi: {
                title: "Index B-Tree",
                body: "Kiểu index mặc định và phổ biến nhất trong PostgreSQL là gì, và khi nào nó hiệu quả nhất?",
                solution: "B-Tree (Balanced Tree). Nó hiệu quả nhất cho các cột liên quan đến so sánh bằng và so sánh phạm vi (ví dụ: =, <, >, BETWEEN) trên các kiểu dữ liệu có thể sắp xếp (như số, chuỗi, ngày tháng)."
            }
        }
    },
    {
        _id: "pg-m-003",
        difficulty: "middle",
        tags: ["data type", "JSONB", "operators"],
        content: {
            en: {
                title: "Querying JSONB",
                body: "What is the PostgreSQL operator used to check if a JSONB document contains a specific key/value pair at the top level?",
                solution: "The `@>` operator (Contains operator). Example: `json_column @> '{\"key\": \"value\"}'`."
            },
            jp: {
                title: "JSONB のクエリ",
                body: "JSONB ドキュメントがトップレベルで特定のキー/値ペアを含んでいるかどうかを確認するために使用される PostgreSQL の演算子は何ですか？",
                solution: "`@>` 演算子（Contains 演算子）。例: `json_column @> '{\"key\": \"value\"}'`。"
            },
            vi: {
                title: "Truy vấn JSONB",
                body: "Toán tử PostgreSQL nào được sử dụng để kiểm tra xem một tài liệu JSONB có chứa một cặp khóa/giá trị cụ thể ở cấp cao nhất hay không?",
                solution: "Toán tử `@>` (Contains operator). Ví dụ: `json_column @> '{\"key\": \"value\"}'`."
            }
        }
    },
    {
        _id: "pg-m-004",
        difficulty: "middle",
        tags: ["EXPLAIN", "query plan", "performance"],
        content: {
            en: {
                title: "Query Plan Analysis",
                body: "What is the SQL command used in PostgreSQL to display the execution plan of a query without actually running it?",
                solution: "EXPLAIN. Using `EXPLAIN ANALYZE` will execute the query and show the actual run-time statistics."
            },
            jp: {
                title: "クエリプラン分析",
                body: "実際に実行せずにクエリの実行プランを表示するために PostgreSQL で使用される SQL コマンドは何ですか？",
                solution: "EXPLAIN。`EXPLAIN ANALYZE` を使用すると、クエリが実行され、実際の実行時統計が表示されます。"
            },
            vi: {
                title: "Phân tích Kế hoạch Truy vấn",
                body: "Lệnh SQL nào được sử dụng trong PostgreSQL để hiển thị kế hoạch thực thi (execution plan) của một truy vấn mà không thực sự chạy nó?",
                solution: "EXPLAIN. Sử dụng `EXPLAIN ANALYZE` sẽ thực thi truy vấn và hiển thị số liệu thống kê thời gian chạy thực tế."
            }
        }
    },
    {
        _id: "pg-m-005",
        difficulty: "middle",
        tags: ["transaction", "ACID", "isolation"],
        content: {
            en: {
                title: "Transaction Isolation Levels",
                body: "Name two of the standard SQL transaction isolation levels supported by PostgreSQL, and briefly describe the default level.",
                solution: "Levels include Read Committed, Repeatable Read, Serializable. The default is **Read Committed**, which prevents 'dirty reads' but can still experience 'non-repeatable reads' and 'phantom reads'."
            },
            jp: {
                title: "トランザクション分離レベル",
                body: "PostgreSQL がサポートする標準 SQL トランザクション分離レベルのうち 2 つを挙げ、デフォルトレベルを簡単に説明してください。",
                solution: "レベルには Read Committed、Repeatable Read、Serializable があります。デフォルトは **Read Committed** であり、「ダーティリード」を防ぎますが、「非再現リード」や「ファントムリード」が発生する可能性があります。"
            },
            vi: {
                title: "Các Cấp độ Cô lập Giao dịch (Isolation Levels)",
                body: "Nêu hai trong số các cấp độ cô lập giao dịch SQL chuẩn được PostgreSQL hỗ trợ, và mô tả ngắn gọn cấp độ mặc định.",
                solution: "Các cấp độ bao gồm Read Committed, Repeatable Read, Serializable. Mặc định là **Read Committed**, ngăn chặn 'dirty reads' nhưng vẫn có thể xảy ra 'non-repeatable reads' và 'phantom reads'."
            }
        }
    },
    {
        _id: "pg-m-006",
        difficulty: "middle",
        tags: ["PL/pgSQL", "stored procedure", "function"],
        content: {
            en: {
                title: "PL/pgSQL",
                body: "What is PL/pgSQL, and what is the primary use case for writing a `FUNCTION` or `PROCEDURE` in it?",
                solution: "PL/pgSQL is a procedural language (like T-SQL or PL/SQL) used to write stored procedures, functions, triggers, and anonymous code blocks in PostgreSQL. Its primary use case is to encapsulate business logic, improve performance by reducing network traffic, and ensure data integrity."
            },
            jp: {
                title: "PL/pgSQL",
                body: "PL/pgSQL とは何ですか、また、それで `FUNCTION` や `PROCEDURE` を記述する主な使用例は何ですか？",
                solution: "PL/pgSQL は、PostgreSQL でストアドプロシージャ、関数、トリガー、および匿名コードブロックを記述するために使用される手続き型言語です。主な使用例は、ビジネスロジックをカプセル化し、ネットワークトラフィックを減らすことでパフォーマンスを向上させ、データ整合性を確保することです。"
            },
            vi: {
                title: "PL/pgSQL",
                body: "PL/pgSQL là gì, và trường hợp sử dụng chính để viết `FUNCTION` hoặc `PROCEDURE` trong đó là gì?",
                solution: "PL/pgSQL là một ngôn ngữ thủ tục (giống như T-SQL hoặc PL/SQL) được sử dụng để viết stored procedures, functions, triggers, và các khối mã ẩn danh trong PostgreSQL. Trường hợp sử dụng chính là để đóng gói logic nghiệp vụ, cải thiện hiệu suất bằng cách giảm lưu lượng mạng, và đảm bảo tính toàn vẹn của dữ liệu."
            }
        }
    },
    {
        _id: "pg-m-007",
        difficulty: "middle",
        tags: ["CTE", "recursive", "hierarchy"],
        content: {
            en: {
                title: "Recursive CTE",
                body: "How can a Common Table Expression (CTE) be made *recursive*, and for what type of data structure is this feature typically used?",
                solution: "By including a UNION (or UNION ALL) clause where the second part refers to the CTE itself. It is typically used for querying hierarchical or tree-structured data, like organizational charts or bill-of-materials."
            },
            jp: {
                title: "再帰的 CTE",
                body: "共通テーブル式 (CTE) はどのように *再帰的* にできますか、また、この機能は通常どのような種類のデータ構造に使用されますか？",
                solution: "2 番目の部分が CTE 自体を参照する UNION（または UNION ALL）句を含めることによって行われます。通常、組織図や部品表などの階層的またはツリー構造のデータをクエリするために使用されます。"
            },
            vi: {
                title: "CTE Đệ quy (Recursive CTE)",
                body: "Làm thế nào để Common Table Expression (CTE) trở nên *đệ quy*, và tính năng này thường được sử dụng cho loại cấu trúc dữ liệu nào?",
                solution: "Bằng cách bao gồm một mệnh đề UNION (hoặc UNION ALL) trong đó phần thứ hai tham chiếu đến chính CTE đó. Nó thường được sử dụng để truy vấn dữ liệu có cấu trúc phân cấp hoặc cây, như sơ đồ tổ chức hoặc danh sách vật liệu (bill-of-materials)."
            }
    }
    },
    {
        _id: "pg-m-008",
        difficulty: "middle",
        tags: ["psql", "shell", "export"],
        content: {
            en: {
                title: "Exporting Data via psql",
                body: "What psql meta-command is used to execute an operating system shell command *from within* the psql prompt?",
                solution: "\\! (e.g., `\\! ls` or `\\! echo 'Hello'`)."
            },
            jp: {
                title: "psql 経由でのデータエクスポート",
                body: "psql プロンプト *内から* オペレーティングシステムシェルコマンドを実行するために使用される psql メタコマンドは何ですか？",
                solution: "\\! （例: `\\! ls` または `\\! echo 'Hello'`）。"
            },
            vi: {
                title: "Xuất dữ liệu qua psql",
                body: "Lệnh meta của psql nào được sử dụng để thực thi một lệnh shell của hệ điều hành *từ bên trong* dấu nhắc psql?",
                solution: "\\! (Ví dụ: `\\! ls` hoặc `\\! echo 'Hello'`)."
            }
        }
    },
    {
        _id: "pg-m-009",
        difficulty: "middle",
        tags: ["UPSERT", "ON CONFLICT"],
        content: {
            en: {
                title: "UPSERT in PostgreSQL",
                body: "What is the standard PostgreSQL syntax used to perform an 'UPSERT' (Insert or Update) operation in a single statement?",
                solution: "INSERT INTO ... ON CONFLICT (target_column) DO UPDATE SET ... or DO NOTHING."
            },
            jp: {
                title: "PostgreSQL の UPSERT",
                body: "単一のステートメントで「UPSERT」（挿入または更新）操作を実行するために使用される標準の PostgreSQL 構文は何ですか？",
                solution: "INSERT INTO ... ON CONFLICT (target_column) DO UPDATE SET ... または DO NOTHING。"
            },
            vi: {
                title: "UPSERT trong PostgreSQL",
                body: "Cú pháp PostgreSQL tiêu chuẩn nào được sử dụng để thực hiện thao tác 'UPSERT' (Insert hoặc Update) trong một câu lệnh duy nhất?",
                solution: "INSERT INTO ... ON CONFLICT (target_column) DO UPDATE SET ... hoặc DO NOTHING."
            }
    },
},
    {
        _id: "pg-m-010",
        difficulty: "middle",
        tags: ["data type", "uuid", "key"],
        content: {
            en: {
                title: "UUID as Primary Key",
                body: "When using a UUID (Universally Unique Identifier) as a primary key, which data type is typically used in PostgreSQL, and what built-in function is often used to generate it?",
                solution: "The `UUID` data type. The `gen_random_uuid()` function (available via the `uuid-ossp` extension or built-in since PG 13) is often used for generation."
            },
            jp: {
                title: "主キーとしての UUID",
                body: "UUID（Universally Unique Identifier）を主キーとして使用する場合、PostgreSQL で一般的に使用されるデータ型は何ですか、また、それを生成するために頻繁に使用される組み込み関数は何ですか？",
                solution: "`UUID` データ型。`gen_random_uuid()` 関数（`uuid-ossp` 拡張機能または PG 13 以降に組み込まれている）が生成によく使用されます。"
            },
            vi: {
                title: "UUID làm Khóa Chính",
                body: "Khi sử dụng UUID (Universally Unique Identifier) làm khóa chính, kiểu dữ liệu nào thường được sử dụng trong PostgreSQL, và hàm tích hợp sẵn nào thường được dùng để tạo ra nó?",
                solution: "Kiểu dữ liệu `UUID`. Hàm `gen_random_uuid()` (có sẵn qua extension `uuid-ossp` hoặc tích hợp sẵn từ PG 13) thường được sử dụng để tạo."
            }
        }
    },
    // --- SENIOR (10/20 Questions) ---
    {
        _id: "pg-s-001",
        difficulty: "senior",
        tags: ["MVCC", "concurrency", "performance"],
        content: {
            en: {
                title: "MVCC in PostgreSQL",
                body: "Explain the concept of **MVCC (Multi-Version Concurrency Control)** in the context of PostgreSQL and how it primarily benefits read performance.",
                solution: "MVCC allows multiple transactions to access the same data without locking one another by maintaining multiple versions of a row. Readers see a consistent snapshot of the data (committed versions) without blocking writers, and vice versa. This significantly improves concurrency and read performance, especially for long-running SELECT queries."
            },
            jp: {
                title: "PostgreSQL の MVCC",
                body: "PostgreSQL のコンテキストにおける **MVCC (Multi-Version Concurrency Control)** の概念を説明し、それが主に読み取りパフォーマンスにどのように利益をもたらすか説明してください。",
                solution: "MVCC は、行の複数のバージョンを維持することで、複数のトランザクションが互いにロックすることなく同じデータにアクセスできるようにします。リーダーはライターをブロックすることなくデータの一貫したスナップショット（コミットされたバージョン）を参照でき、逆もまた同様です。これにより、特に長期間実行される SELECT クエリの並行性と読み取りパフォーマンスが大幅に向上します。"
            },
            vi: {
                title: "MVCC trong PostgreSQL",
                body: "Giải thích khái niệm **MVCC (Multi-Version Concurrency Control)** trong bối cảnh PostgreSQL và cách nó mang lại lợi ích chủ yếu cho hiệu suất đọc.",
                solution: "MVCC cho phép nhiều giao dịch truy cập cùng một dữ liệu mà không khóa lẫn nhau bằng cách duy trì nhiều phiên bản của một hàng. Người đọc thấy một ảnh chụp nhanh nhất quán của dữ liệu (các phiên bản đã commit) mà không chặn người ghi, và ngược lại. Điều này cải thiện đáng kể tính đồng thời và hiệu suất đọc, đặc biệt đối với các truy vấn SELECT chạy dài."
            }
        }
    },
    {
        _id: "pg-s-002",
        difficulty: "senior",
        tags: ["VACUUM", "autovacuum", "dead tuples"],
        content: {
            en: {
                title: "VACUUM Process",
                body: "Why is the `VACUUM` process (or `autovacuum`) crucial for maintaining the health and performance of a PostgreSQL database?",
                solution: "Due to MVCC, dead row versions ('dead tuples') remain on disk after a row is updated or deleted. VACUUM reclaims storage occupied by these dead tuples and prevents transaction ID wraparound. Without it, the database will grow indefinitely and performance will degrade."
            },
            jp: {
                title: "VACUUM プロセス",
                body: "PostgreSQL データベースの健全性とパフォーマンスを維持するために、`VACUUM` プロセス（または `autovacuum`）が不可欠なのはなぜですか？",
                solution: "MVCC のため、行が更新または削除された後も、期限切れの行バージョン（「デッドタプル」）がディスク上に残ります。VACUUM は、これらのデッドタプルが占有するストレージを再利用し、トランザクション ID の周回を防ぎます。これがないと、データベースは際限なく大きくなり、パフォーマンスが低下します。"
            },
            vi: {
                title: "Quy trình VACUUM",
                body: "Tại sao quy trình `VACUUM` (hoặc `autovacuum`) lại quan trọng đối với việc duy trì sức khỏe và hiệu suất của cơ sở dữ liệu PostgreSQL?",
                solution: "Do MVCC, các phiên bản hàng đã chết ('dead tuples') vẫn còn trên đĩa sau khi một hàng được cập nhật hoặc xóa. VACUUM thu hồi không gian lưu trữ do các dead tuples này chiếm giữ và ngăn chặn lỗi tràn ID giao dịch (transaction ID wraparound). Nếu không có nó, cơ sở dữ liệu sẽ phát triển vô hạn và hiệu suất sẽ giảm sút."
            }
        }
    },
    {
        _id: "pg-s-003",
        difficulty: "senior",
        tags: ["Partitioning", "performance", "maintenance"],
        content: {
            en: {
                title: "Table Partitioning",
                body: "What is table partitioning in PostgreSQL, and name two key benefits for large tables.",
                solution: "Partitioning is the technique of dividing a large logical table into smaller physical pieces (partitions). Benefits include: 1) **Performance:** Queries touching only a subset of data are faster (partition pruning). 2) **Maintenance:** Easier to manage (e.g., attach/detach partitions quickly), and faster VACUUM/INDEX rebuilds on smaller partitions."
            },
            jp: {
                title: "テーブルパーティショニング",
                body: "PostgreSQL のテーブルパーティショニングとは何ですか、また、大規模なテーブルにとっての主要な利点を 2 つ挙げてください。",
                solution: "パーティショニングは、大きな論理テーブルをより小さな物理的な部分（パーティション）に分割する手法です。利点には、1) **パフォーマンス:** データの一部のみに触れるクエリが高速化されます（パーティションプルーニング）。2) **メンテナンス:** 管理が容易になり（例：パーティションの迅速なアタッチ/デタッチ）、より小さなパーティションでの VACUUM/INDEX 再構築が高速化されます。"
            },
            vi: {
                title: "Phân vùng bảng (Table Partitioning)",
                body: "Phân vùng bảng trong PostgreSQL là gì, và nêu hai lợi ích chính đối với các bảng lớn.",
                solution: "Phân vùng là kỹ thuật chia một bảng logic lớn thành các phần vật lý nhỏ hơn (partitions). Lợi ích bao gồm: 1) **Hiệu suất:** Các truy vấn chỉ chạm vào một tập hợp con dữ liệu sẽ nhanh hơn (partition pruning). 2) **Bảo trì:** Dễ quản lý hơn (ví dụ: đính kèm/tách các phân vùng nhanh chóng), và VACUUM/xây dựng lại INDEX nhanh hơn trên các phân vùng nhỏ hơn."
            }
        }
    },
    {
        _id: "pg-s-004",
        difficulty: "senior",
        tags: ["data type", "hstore", "Key-Value"],
        content: {
            en: {
                title: "hstore vs JSONB",
                body: "Before JSONB became widely adopted, PostgreSQL used the `hstore` data type. What is the fundamental difference between `hstore` and `JSONB` for storing semi-structured data?",
                solution: "`hstore` is purely for storing **key/value pairs** where both keys and values are strings. `JSONB` supports the full **JSON structure**, including nested arrays and objects, and maintains type information (e.g., numbers, booleans) which hstore does not."
            },
            jp: {
                title: "hstore 対 JSONB",
                body: "JSONB が広く採用される前、PostgreSQL では `hstore` データ型が使用されていました。半構造化データを保存するための `hstore` と `JSONB` の根本的な違いは何ですか？",
                solution: "`hstore` は、キーと値の両方が文字列である**キー/値ペア**を保存するためだけのものです。`JSONB` は、ネストされた配列やオブジェクトを含む完全な **JSON 構造**をサポートし、hstore ではサポートされていない型情報（例：数値、ブール値）を維持します。"
            },
            vi: {
                title: "hstore so với JSONB",
                body: "Trước khi JSONB được áp dụng rộng rãi, PostgreSQL đã sử dụng kiểu dữ liệu `hstore`. Sự khác biệt cơ bản giữa `hstore` và `JSONB` để lưu trữ dữ liệu bán cấu trúc là gì?",
                solution: "`hstore` chỉ dùng để lưu trữ **cặp khóa/giá trị** trong đó cả khóa và giá trị đều là chuỗi. `JSONB` hỗ trợ **cấu trúc JSON** đầy đủ, bao gồm mảng và đối tượng lồng nhau, và duy trì thông tin kiểu dữ liệu (ví dụ: số, boolean) mà hstore không làm được."
            }
        }
    },
    {
        _id: "pg-s-005",
        difficulty: "senior",
        tags: ["Indexing", "GiST", "GIN", "Full-Text Search"],
        content: {
            en: {
                title: "Specialized Indexing",
                body: "PostgreSQL offers specialized index types beyond B-Tree. For what purpose would you use a **GIN (Generalized Inverted Index)** or a **GiST (Generalized Search Tree)** index?",
                solution: "GIN is typically used for indexing data with **multiple values in a single column** (e.g., arrays, JSONB keys/values, Full-Text Search documents) because it is an inverted index. GiST is a template for creating **multi-dimensional** data structures, commonly used for spatial data (PostGIS) or range types."
            },
            jp: {
                title: "特殊なインデックス作成",
                body: "PostgreSQL は B-Tree 以外の特殊なインデックスタイプを提供しています。**GIN (Generalized Inverted Index)** または **GiST (Generalized Search Tree)** インデックスをどのような目的で使用しますか？",
                solution: "GIN は、転置インデックスであるため、**単一の列に複数の値を持つ**データ（例：配列、JSONB のキー/値、全文検索ドキュメント）のインデックス作成に一般的に使用されます。GiST は、**多次元**データ構造を作成するためのテンプレートであり、空間データ（PostGIS）や範囲型によく使用されます。"
            },
            vi: {
                title: "Lập chỉ mục Chuyên biệt",
                body: "PostgreSQL cung cấp các kiểu index chuyên biệt ngoài B-Tree. Bạn sẽ sử dụng index **GIN (Generalized Inverted Index)** hoặc **GiST (Generalized Search Tree)** cho mục đích gì?",
                solution: "GIN thường được sử dụng để lập chỉ mục dữ liệu có **nhiều giá trị trong một cột duy nhất** (ví dụ: mảng, khóa/giá trị JSONB, tài liệu Full-Text Search) vì nó là một index đảo ngược. GiST là một template để tạo cấu trúc dữ liệu **đa chiều**, thường được sử dụng cho dữ liệu không gian (PostGIS) hoặc các kiểu phạm vi (range types)."
            }
        }
    },
    {
        _id: "pg-s-006",
        difficulty: "senior",
        tags: ["Replication", "High Availability", "WAL"],
        content: {
            en: {
                title: "Logical vs Physical Replication",
                body: "In PostgreSQL replication, what is the core difference between **Physical Replication** (e.g., streaming replication) and **Logical Replication**?",
                solution: "Physical Replication copies the entire database cluster file system (WAL records) to the standby server. It's binary, fast, and maintains high consistency but requires identical versions/architecture. Logical Replication uses the WAL to stream *data changes* (INSERT, UPDATE, DELETE) at the table level, allowing for more flexibility (e.g., replicating specific tables, different PostgreSQL versions/architectures) but is more complex to set up."
            },
            jp: {
                title: "論理レプリケーション 対 物理レプリケーション",
                body: "PostgreSQL のレプリケーションにおいて、**物理レプリケーション**（例: ストリーミングレプリケーション）と **論理レプリケーション** の核心的な違いは何ですか？",
                solution: "物理レプリケーションは、データベースクラスタファイルシステム全体（WAL レコード）をスタンバイサーバーにコピーします。バイナリで高速であり、高い一貫性を維持しますが、同一のバージョン/アーキテクチャが必要です。論理レプリケーションは、WAL を使用してテーブルレベルで *データ変更*（INSERT、UPDATE、DELETE）をストリーミングし、より柔軟性がありますが（例：特定のテーブルのレプリケート、異なる PostgreSQL バージョン/アーキテクチャ）、設定がより複雑です。"
            },
            vi: {
                title: "Logical so với Physical Replication",
                body: "Trong nhân bản (replication) PostgreSQL, sự khác biệt cốt lõi giữa **Physical Replication** (ví dụ: streaming replication) và **Logical Replication** là gì?",
                solution: "Physical Replication sao chép toàn bộ hệ thống file cluster cơ sở dữ liệu (WAL records) sang máy chủ standby. Nó là nhị phân, nhanh, và duy trì tính nhất quán cao nhưng yêu cầu phiên bản/kiến trúc giống hệt nhau. Logical Replication sử dụng WAL để truyền tải *các thay đổi dữ liệu* (INSERT, UPDATE, DELETE) ở cấp độ bảng, cho phép linh hoạt hơn (ví dụ: nhân bản các bảng cụ thể, các phiên bản/kiến trúc PostgreSQL khác nhau) nhưng phức tạp hơn để thiết lập."
            }
        }
    },
    {
        _id: "pg-s-007",
        difficulty: "senior",
        tags: ["optimization", "pg_stat_statements", "monitoring"],
        content: {
            en: {
                title: "Query Analysis Tool",
                body: "What PostgreSQL extension is essential for performance tuning that tracks and aggregates statistics on all SQL statements executed by the server?",
                solution: "`pg_stat_statements`. It allows developers to identify the slowest and most frequent queries, often being the first step in optimization."
            },
            jp: {
                title: "クエリ分析ツール",
                body: "サーバーによって実行されたすべての SQL ステートメントに関する統計を追跡および集計する、パフォーマンスチューニングに不可欠な PostgreSQL 拡張機能は何ですか？",
                solution: "`pg_stat_statements`。これにより、開発者は最も遅いクエリや最も頻繁なクエリを特定でき、多くの場合、最適化の最初のステップとなります。"
            },
            vi: {
                title: "Công cụ Phân tích Truy vấn",
                body: "Extension PostgreSQL nào là cần thiết cho việc tinh chỉnh hiệu suất (performance tuning) bằng cách theo dõi và tổng hợp số liệu thống kê về tất cả các câu lệnh SQL được thực thi bởi máy chủ?",
                solution: "`pg_stat_statements`. Nó cho phép các nhà phát triển xác định các truy vấn chậm nhất và thường xuyên nhất, thường là bước đầu tiên trong việc tối ưu hóa."
            }
        }
    },
    {
        _id: "pg-s-008",
        difficulty: "senior",
        tags: ["data type", "TSVECTOR", "TSQUERY", "Full-Text Search"],
        content: {
            en: {
                title: "Full-Text Search Data Types",
                body: "What two special data types are used in PostgreSQL's native Full-Text Search implementation to store the searchable document representation and the search term/pattern, respectively?",
                solution: "`TSVECTOR` (stores the processed document for searching) and `TSQUERY` (stores the processed search terms). The `@@` operator is used to compare them."
            },
            jp: {
                title: "全文検索データ型",
                body: "PostgreSQL のネイティブ全文検索実装で使用される、検索可能なドキュメント表現と検索語/パターンをそれぞれ保存するための 2 つの特別なデータ型は何ですか？",
                solution: "`TSVECTOR`（検索用に処理されたドキュメントを保存）と `TSQUERY`（処理された検索語を保存）。`@@` 演算子を使用してそれらを比較します。"
            },
            vi: {
                title: "Kiểu Dữ liệu Tìm kiếm Toàn văn",
                body: "Hai kiểu dữ liệu đặc biệt nào được sử dụng trong triển khai Tìm kiếm Toàn văn (Full-Text Search) gốc của PostgreSQL để lưu trữ biểu diễn tài liệu có thể tìm kiếm và mẫu/thuật ngữ tìm kiếm tương ứng?",
                solution: "`TSVECTOR` (lưu trữ tài liệu đã được xử lý để tìm kiếm) và `TSQUERY` (lưu trữ các thuật ngữ tìm kiếm đã được xử lý). Toán tử `@@` được sử dụng để so sánh chúng."
            }
        }
    },
    {
        _id: "pg-s-009",
        difficulty: "senior",
        tags: ["data type", "custom", "DOMAIN"],
        content: {
            en: {
                title: "Custom Data Type Constraints",
                body: "Instead of creating a full custom type, what PostgreSQL feature allows you to define a new data type based on an existing one, but with optional constraints (like NOT NULL or CHECK)?",
                solution: "A **DOMAIN**. It simplifies schema design by allowing reuse of common constraints (e.g., `CREATE DOMAIN email AS text CHECK (value ~ 'regex')`)."
            },
            jp: {
                title: "カスタムデータ型制約",
                body: "完全なカスタム型を作成する代わりに、既存のデータ型に基づいて新しいデータ型を定義できるが、オプションの制約（NOT NULL や CHECK など）を付けられる PostgreSQL の機能は何ですか？",
                solution: "**DOMAIN**。これにより、共通の制約を再利用できるため、スキーマ設計が簡素化されます（例: `CREATE DOMAIN email AS text CHECK (value ~ 'regex')`）。"
            },
            vi: {
                title: "Ràng buộc Kiểu Dữ liệu Tùy chỉnh",
                body: "Thay vì tạo một kiểu tùy chỉnh hoàn chỉnh, tính năng nào của PostgreSQL cho phép bạn định nghĩa một kiểu dữ liệu mới dựa trên một kiểu dữ liệu hiện có, nhưng có thêm các ràng buộc tùy chọn (như NOT NULL hoặc CHECK)?",
                solution: "Một **DOMAIN**. Nó đơn giản hóa thiết kế schema bằng cách cho phép tái sử dụng các ràng buộc phổ biến (ví dụ: `CREATE DOMAIN email AS text CHECK (value ~ 'regex')`)."
            }
        }
    },
    {
        _id: "pg-s-010",
        difficulty: "senior",
        tags: ["Foreign Data Wrapper", "federated query", "FDW"],
        content: {
            en: {
                title: "Foreign Data Wrappers (FDW)",
                body: "What is the primary role of a Foreign Data Wrapper (FDW) in PostgreSQL, and how does it relate to the concept of **federated queries**?",
                solution: "A FDW allows PostgreSQL to treat tables from *external* databases (e.g., MySQL, Oracle, MongoDB) or other data sources as if they were local tables. This enables **federated queries**, meaning a single PostgreSQL query can seamlessly join data between its own tables and tables living on different external systems."
            },
            jp: {
                title: "外部データラッパー (FDW)",
                body: "PostgreSQL における外部データラッパー (FDW) の主な役割は何ですか、また、**フェデレーテッドクエリ**の概念とどのように関連していますか？",
                solution: "FDW は、PostgreSQL が *外部* データベース（例：MySQL、Oracle、MongoDB）または他のデータソースのテーブルを、まるでローカルテーブルであるかのように扱うことを可能にします。これにより、**フェデレーテッドクエリ**が可能になります。つまり、単一の PostgreSQL クエリで、自身のテーブルと異なる外部システムにあるテーブルとの間でデータをシームレスに結合できます。"
            },
            vi: {
                title: "Foreign Data Wrappers (FDW)",
                body: "Vai trò chính của Foreign Data Wrapper (FDW) trong PostgreSQL là gì, và nó liên quan đến khái niệm **federated queries** như thế nào?",
                solution: "FDW cho phép PostgreSQL xử lý các bảng từ các cơ sở dữ liệu *bên ngoài* (ví dụ: MySQL, Oracle, MongoDB) hoặc các nguồn dữ liệu khác như thể chúng là các bảng cục bộ. Điều này cho phép **federated queries** (truy vấn liên hợp), nghĩa là một truy vấn PostgreSQL duy nhất có thể kết nối dữ liệu một cách liền mạch giữa các bảng của chính nó và các bảng nằm trên các hệ thống bên ngoài khác nhau."
            }
        }
    },
    {
        _id: "pg-f-011",
        difficulty: "fresher",
        tags: ["ORDER BY", "sorting"],
        content: {
            en: {
                title: "Sorting Results",
                body: "Which clause is used in a SELECT statement to sort the result set?",
                solution: "ORDER BY clause. Use ASC for ascending (default) or DESC for descending."
            },
            jp: {
                title: "結果の並べ替え",
                body: "結果セットを並べ替えるために SELECT ステートメントで使用される句は何ですか？",
                solution: "ORDER BY 句。昇順には ASC（デフォルト）、降順には DESC を使用します。"
            },
            vi: {
                title: "Sắp xếp Kết quả",
                body: "Mệnh đề nào được sử dụng trong câu lệnh SELECT để sắp xếp tập hợp kết quả?",
                solution: "Mệnh đề ORDER BY. Dùng ASC cho thứ tự tăng dần (mặc định) hoặc DESC cho thứ tự giảm dần."
            }
        }
    },
    {
        _id: "pg-f-012",
        difficulty: "fresher",
        tags: ["WHERE", "filtering"],
        content: {
            en: {
                title: "Filtering Rows",
                body: "Which SQL clause is used to filter records, extracting only those that fulfill a specified condition?",
                solution: "WHERE clause."
            },
            jp: {
                title: "行のフィルタリング",
                body: "指定された条件を満たすレコードのみを抽出するために使用される SQL 句は何ですか？",
                solution: "WHERE 句。"
            },
            vi: {
                title: "Lọc Hàng",
                body: "Mệnh đề SQL nào được sử dụng để lọc các bản ghi, chỉ trích xuất những bản ghi thỏa mãn một điều kiện cụ thể?",
                solution: "Mệnh đề WHERE."
            }
        }
    },
    {
        _id: "pg-f-013",
        difficulty: "fresher",
        tags: ["function", "aggregate", "COUNT"],
        content: {
            en: {
                title: "Counting Rows",
                body: "Which aggregate function is used to count the number of rows in a table?",
                solution: "COUNT(). For all rows, use COUNT(*) or COUNT(1)."
            },
            jp: {
                title: "行のカウント",
                body: "テーブル内の行数を数えるために使用される集計関数は何ですか？",
                solution: "COUNT()。すべての行に対しては COUNT(*) または COUNT(1) を使用します。"
            },
            vi: {
                title: "Đếm Hàng",
                body: "Hàm tổng hợp nào được sử dụng để đếm số lượng hàng trong một bảng?",
                solution: "COUNT(). Đối với tất cả các hàng, sử dụng COUNT(*) hoặc COUNT(1)."
            }
        }
    },
    {
        _id: "pg-f-014",
        difficulty: "fresher",
        tags: ["psql", "command line", "exit"],
        content: {
            en: {
                title: "Exiting psql",
                body: "What is the psql meta-command used to exit the interactive terminal session?",
                solution: "\\q."
            },
            jp: {
                title: "psql の終了",
                body: "対話型ターミナルセッションを終了するために使用される psql メタコマンドは何ですか？",
                solution: "\\q。"
            },
            vi: {
                title: "Thoát psql",
                body: "Lệnh meta của psql nào được sử dụng để thoát phiên làm việc terminal tương tác?",
                solution: "\\q."
            }
        }
    },
    {
        _id: "pg-f-015",
        difficulty: "fresher",
        tags: ["data type", "boolean"],
        content: {
            en: {
                title: "Boolean Values",
                body: "What are the three possible values for PostgreSQL's standard `boolean` data type?",
                solution: "TRUE, FALSE, and NULL."
            },
            jp: {
                title: "ブール値",
                body: "PostgreSQL の標準 `boolean` データ型には、どのような 3 つの値の可能性がありますか？",
                solution: "TRUE、FALSE、および NULL。"
            },
            vi: {
                title: "Giá trị Boolean",
                body: "Ba giá trị có thể có cho kiểu dữ liệu `boolean` tiêu chuẩn của PostgreSQL là gì?",
                solution: "TRUE, FALSE, và NULL."
            }
        }
    },
    {
        _id: "pg-f-016",
        difficulty: "fresher",
        tags: ["ALTER TABLE", "schema"],
        content: {
            en: {
                title: "Adding a Column",
                body: "What SQL command is used to add a new column to an existing table?",
                solution: "ALTER TABLE... ADD COLUMN."
            },
            jp: {
                title: "列の追加",
                body: "既存のテーブルに新しい列を追加するために使用される SQL コマンドは何ですか？",
                solution: "ALTER TABLE... ADD COLUMN。"
            },
            vi: {
                title: "Thêm cột",
                body: "Lệnh SQL nào được sử dụng để thêm một cột mới vào một bảng đã có?",
                solution: "ALTER TABLE... ADD COLUMN."
            }
        }
    },
    {
        _id: "pg-f-017",
        difficulty: "fresher",
        tags: ["Primary Key", "constraint"],
        content: {
            en: {
                title: "Primary Key Properties",
                body: "What two critical properties must a column (or set of columns) designated as a PRIMARY KEY satisfy?",
                solution: "It must be UNIQUE (no duplicate values) and NOT NULL (must contain a value)."
            },
            jp: {
                title: "主キーのプロパティ",
                body: "PRIMARY KEY として指定された列（または列のセット）が満たさなければならない 2 つの重要なプロパティは何ですか？",
                solution: "一意であること（重複値がないこと）と、NOT NULL であること（値を必ず含むこと）です。"
            },
            vi: {
                title: "Thuộc tính Khóa Chính",
                body: "Hai thuộc tính quan trọng nào mà một cột (hoặc tập hợp các cột) được chỉ định là PRIMARY KEY phải thỏa mãn?",
                solution: "Nó phải là UNIQUE (không có giá trị trùng lặp) và NOT NULL (phải chứa một giá trị)."
            }
        }
    },
    {
        _id: "pg-f-018",
        difficulty: "fresher",
        tags: ["DISTINCT", "duplicate"],
        content: {
            en: {
                title: "Removing Duplicates",
                body: "What keyword is placed immediately after SELECT to ensure that only unique (non-duplicate) values are returned in the result set?",
                solution: "DISTINCT."
            },
            jp: {
                title: "重複の削除",
                body: "結果セットで一意の（重複しない）値のみが返されるようにするために、SELECT の直後に配置されるキーワードは何ですか？",
                solution: "DISTINCT。"
            },
            vi: {
                title: "Loại bỏ trùng lặp",
                body: "Từ khóa nào được đặt ngay sau SELECT để đảm bảo rằng chỉ các giá trị duy nhất (không trùng lặp) được trả về trong tập kết quả?",
                solution: "DISTINCT."
            }
        }
    },
    {
        _id: "pg-f-019",
        difficulty: "fresher",
        tags: ["data type", "numeric", "precision"],
        content: {
            en: {
                title: "Fixed Precision Number",
                body: "Which PostgreSQL data type is recommended for storing monetary or other precise fixed-point numeric data?",
                solution: "NUMERIC or DECIMAL, as they store numbers exactly, unlike FLOAT which uses approximate storage."
            },
            jp: {
                title: "固定精度数値",
                body: "金銭やその他の正確な固定小数点数値を保存するために推奨される PostgreSQL のデータ型は何ですか？",
                solution: "NUMERIC または DECIMAL。これらは、近似値を使用する FLOAT とは異なり、数値を正確に保存します。"
            },
            vi: {
                title: "Số chính xác cố định",
                body: "Kiểu dữ liệu PostgreSQL nào được khuyến nghị để lưu trữ dữ liệu số tiền tệ hoặc dữ liệu số điểm cố định chính xác khác?",
                solution: "NUMERIC hoặc DECIMAL, vì chúng lưu trữ số chính xác, không giống như FLOAT sử dụng lưu trữ gần đúng."
            }
        }
    },
    {
        _id: "pg-f-020",
        difficulty: "fresher",
        tags: ["database", "DROP"],
        content: {
            en: {
                title: "Deleting a Table",
                body: "What SQL command is used to permanently remove an entire table from the database?",
                solution: "DROP TABLE."
            },
            jp: {
                title: "テーブルの削除",
                body: "データベースからテーブル全体を完全に削除するために使用される SQL コマンドは何ですか？",
                solution: "DROP TABLE。"
            },
            vi: {
                title: "Xóa Bảng",
                body: "Lệnh SQL nào được sử dụng để xóa vĩnh viễn toàn bộ một bảng khỏi cơ sở dữ liệu?",
                solution: "DROP TABLE."
            }
        }
    },
    // --- JUNIOR (Bổ sung 10/20 Questions) ---
    {
        _id: "pg-j-011",
        difficulty: "junior",
        tags: ["HAVING", "GROUP BY", "filtering"],
        content: {
            en: {
                title: "Filtering Groups",
                body: "When filtering groups based on the result of an aggregate function (e.g., SUM, COUNT), which SQL clause must be used instead of WHERE?",
                solution: "HAVING clause. WHERE filters individual rows before grouping, while HAVING filters the groups after aggregation."
            },
            jp: {
                title: "グループのフィルタリング",
                body: "集計関数（SUM、COUNT など）の結果に基づいてグループをフィルタリングする場合、WHERE の代わりにどの SQL 句を使用する必要がありますか？",
                solution: "HAVING 句。WHERE はグループ化前に個々の行をフィルタリングしますが、HAVING は集計後にグループをフィルタリングします。"
            },
            vi: {
                title: "Lọc Nhóm",
                body: "Khi lọc các nhóm dựa trên kết quả của một hàm tổng hợp (ví dụ: SUM, COUNT), mệnh đề SQL nào phải được sử dụng thay vì WHERE?",
                solution: "Mệnh đề HAVING. WHERE lọc các hàng riêng lẻ trước khi nhóm, trong khi HAVING lọc các nhóm sau khi tổng hợp."
            }
        }
    },
    {
        _id: "pg-j-012",
        difficulty: "junior",
        tags: ["CTE", "aliasing"],
        content: {
            en: {
                title: "Benefits of CTEs",
                body: "Aside from recursion, what is the main benefit of using a CTE (Common Table Expression) over a standard subquery?",
                solution: "Improved readability and organization, especially for complex queries. A CTE can be referenced multiple times within the main query, promoting code reuse."
            },
            jp: {
                title: "CTE の利点",
                body: "再帰以外に、標準のサブクエリと比較して CTE（共通テーブル式）を使用する主な利点は何ですか？",
                solution: "特に複雑なクエリの場合、可読性と構成が向上します。CTE はメインクエリ内で複数回参照でき、コードの再利用を促進します。"
            },
            vi: {
                title: "Lợi ích của CTE",
                body: "Ngoài đệ quy, lợi ích chính của việc sử dụng CTE (Common Table Expression) so với một subquery tiêu chuẩn là gì?",
                solution: "Cải thiện khả năng đọc và tổ chức, đặc biệt đối với các truy vấn phức tạp. Một CTE có thể được tham chiếu nhiều lần trong truy vấn chính, thúc đẩy tái sử dụng mã."
            }
        }
    },
    {
        _id: "pg-j-013",
        difficulty: "junior",
        tags: ["psql", "describe", "table structure"],
        content: {
            en: {
                title: "Inspecting Table Structure",
                body: "What is the psql meta-command used to describe the structure (columns, types, constraints) of a specific table?",
                solution: "\\d table_name."
            },
            jp: {
                title: "テーブル構造の検査",
                body: "特定のテーブルの構造（列、型、制約）を記述するために使用される psql メタコマンドは何ですか？",
                solution: "\\d table_name。"
            },
            vi: {
                title: "Kiểm tra Cấu trúc Bảng",
                body: "Lệnh meta của psql nào được sử dụng để mô tả cấu trúc (cột, kiểu, ràng buộc) của một bảng cụ thể?",
                solution: "\\d table_name."
            }
        }
    },
    {
        _id: "pg-j-014",
        difficulty: "junior",
        tags: ["data type", "array", "storage"],
        content: {
            en: {
                title: "Array Data Type",
                body: "PostgreSQL supports array data types. How would you access the second element (at index 2) of an integer array column named `scores`?",
                solution: "scores[2] (PostgreSQL arrays are 1-based by default)."
            },
            jp: {
                title: "配列データ型",
                body: "PostgreSQL は配列データ型をサポートしています。「scores」という名前の整数配列列の 2 番目の要素（インデックス 2）にアクセスするにはどうすればよいですか？",
                solution: "scores[2] (PostgreSQL の配列はデフォルトで 1 ベースです)。"
            },
            vi: {
                title: "Kiểu Dữ liệu Mảng",
                body: "PostgreSQL hỗ trợ kiểu dữ liệu mảng. Bạn sẽ truy cập phần tử thứ hai (tại chỉ mục 2) của một cột mảng số nguyên có tên `scores` như thế nào?",
                solution: "scores[2] (Mảng PostgreSQL mặc định là 1-based)."
            }
        }
    },
    {
        _id: "pg-j-015",
        difficulty: "junior",
        tags: ["function", "CAST", "data conversion"],
        content: {
            en: {
                title: "Data Type Conversion",
                body: "What is the common SQL syntax (using `::` or `CAST`) in PostgreSQL to explicitly convert a value from one data type to another (e.g., from text to integer)?",
                solution: "value::target_type (e.g., '123'::integer) OR CAST(value AS target_type) (e.g., CAST('123' AS integer))."
            },
            jp: {
                title: "データ型変換",
                body: "PostgreSQL で、値をあるデータ型から別のデータ型に明示的に変換するために使用される一般的な SQL 構文（`::` または `CAST` を使用）は何ですか（例: テキストから整数へ）？",
                solution: "value::target_type（例: '123'::integer）または CAST(value AS target_type)（例: CAST('123' AS integer)）。"
            },
            vi: {
                title: "Chuyển đổi Kiểu Dữ liệu",
                body: "Cú pháp SQL phổ biến (sử dụng `::` hoặc `CAST`) trong PostgreSQL để chuyển đổi rõ ràng một giá trị từ kiểu dữ liệu này sang kiểu dữ liệu khác là gì (ví dụ: từ text sang integer)?",
                solution: "value::target_type (ví dụ: '123'::integer) HOẶC CAST(value AS target_type) (ví dụ: CAST('123' AS integer))."
            }
        }
    },
    {
        _id: "pg-j-016",
        difficulty: "junior",
        tags: ["INDEX", "CREATE INDEX"],
        content: {
            en: {
                title: "Creating an Index",
                body: "Write the basic SQL command to create a standard B-Tree index named `idx_email` on the `email` column of the `users` table.",
                solution: "CREATE INDEX idx_email ON users (email);"
            },
            jp: {
                title: "インデックスの作成",
                body: "`users` テーブルの `email` 列に `idx_email` という名前の標準 B-Tree インデックスを作成するための基本的な SQL コマンドを記述してください。",
                solution: "CREATE INDEX idx_email ON users (email);"
            },
            vi: {
                title: "Tạo Index",
                body: "Viết lệnh SQL cơ bản để tạo một index B-Tree tiêu chuẩn có tên `idx_email` trên cột `email` của bảng `users`.",
                solution: "CREATE INDEX idx_email ON users (email);"
            }
        }
    },
    {
        _id: "pg-j-017",
        difficulty: "junior",
        tags: ["JOIN", "LEFT JOIN"],
        content: {
            en: {
                title: "LEFT JOIN Function",
                body: "Explain what a LEFT JOIN (or LEFT OUTER JOIN) does in a SQL query.",
                solution: "A LEFT JOIN returns all rows from the left table, and the matching rows from the right table. If there is no match in the right table, NULL values are returned for the right table's columns."
            },
            jp: {
                title: "LEFT JOIN の機能",
                body: "SQL クエリにおける LEFT JOIN（または LEFT OUTER JOIN）が何をするのか説明してください。",
                solution: "LEFT JOIN は、左側のテーブルからすべての行を返し、右側のテーブルから一致する行を返します。右側のテーブルに一致がない場合は、右側のテーブルの列に NULL 値が返されます。"
            },
            vi: {
                title: "Chức năng của LEFT JOIN",
                body: "Giải thích chức năng của LEFT JOIN (hoặc LEFT OUTER JOIN) trong một truy vấn SQL.",
                solution: "LEFT JOIN trả về tất cả các hàng từ bảng bên trái, và các hàng khớp từ bảng bên phải. Nếu không có sự khớp nào trong bảng bên phải, giá trị NULL sẽ được trả về cho các cột của bảng bên phải."
            }
        }
    },
    {
        _id: "pg-j-018",
        difficulty: "junior",
        tags: ["psql", "list databases"],
        content: {
            en: {
                title: "Listing Databases",
                body: "What is the psql meta-command to list all available databases on the server?",
                solution: "\\l or \\list."
            },
            jp: {
                title: "データベースのリスト表示",
                body: "サーバー上の利用可能なすべてのデータベースをリスト表示するための psql メタコマンドは何ですか？",
                solution: "\\l または \\list。"
            },
            vi: {
                title: "Liệt kê Cơ sở dữ liệu",
                body: "Lệnh meta của psql nào được sử dụng để liệt kê tất cả các cơ sở dữ liệu có sẵn trên máy chủ?",
                solution: "\\l hoặc \\list."
            }
        }
    },
    {
        _id: "pg-j-019",
        difficulty: "junior",
        tags: ["data type", "date", "time", "timezone"],
        content: {
            en: {
                title: "Timezone Handling",
                body: "Which PostgreSQL timestamp type should be used to store a time that is aware of (and potentially adjusted for) the time zone?",
                solution: "TIMESTAMP WITH TIME ZONE (or TIMESTAMPTZ)."
            },
            jp: {
                title: "タイムゾーンの処理",
                body: "タイムゾーンを認識し、それに応じて調整される可能性のある時刻を保存するために使用すべき PostgreSQL のタイムスタンプ型は何ですか？",
                solution: "TIMESTAMP WITH TIME ZONE (または TIMESTAMPTZ)。"
            },
            vi: {
                title: "Xử lý Múi giờ",
                body: "Kiểu timestamp nào của PostgreSQL nên được sử dụng để lưu trữ một thời gian có nhận biết (và có thể được điều chỉnh theo) múi giờ?",
                solution: "TIMESTAMP WITH TIME ZONE (hoặc TIMESTAMPTZ)."
            }
        }
    },
    {
        _id: "pg-j-020",
        difficulty: "junior",
        tags: ["SEQUENCE", "SERIAL", "key generation"],
        content: {
            en: {
                title: "Sequence Object",
                body: "When using the `SERIAL` pseudo-type, PostgreSQL internally creates and uses what type of object to guarantee unique, auto-incrementing numbers?",
                solution: "A SEQUENCE object."
            },
            jp: {
                title: "シーケンスオブジェクト",
                body: "`SERIAL` 疑似型を使用する場合、PostgreSQL は内部的にどのような種類のオブジェクトを作成および使用して、一意の自動増分番号を保証しますか？",
                solution: "SEQUENCE オブジェクト。"
            },
            vi: {
                title: "Đối tượng Sequence",
                body: "Khi sử dụng kiểu giả `SERIAL`, PostgreSQL nội bộ tạo và sử dụng loại đối tượng nào để đảm bảo các số tự động tăng, duy nhất?",
                solution: "Đối tượng SEQUENCE."
            }
    },
},
    {
        _id: "pg-m-011",
        difficulty: "middle",
        tags: ["CHECK constraint", "validation"],
        content: {
            en: {
                title: "CHECK Constraint",
                body: "How do you enforce a rule on a column, such as ensuring that the 'price' column always contains a value greater than 0, using a constraint?",
                solution: "Use a CHECK constraint: `price NUMERIC CHECK (price > 0)`."
            },
            jp: {
                title: "CHECK 制約",
                body: "「price」列が常に 0 より大きい値を含むことを保証するなど、列にルールを適用するには、制約を使用してどのように行いますか？",
                solution: "CHECK 制約を使用します: `price NUMERIC CHECK (price > 0)`。"
            },
            vi: {
                title: "Ràng buộc CHECK",
                body: "Làm thế nào bạn áp đặt một quy tắc lên một cột, chẳng hạn như đảm bảo cột 'price' luôn chứa một giá trị lớn hơn 0, bằng cách sử dụng ràng buộc?",
                solution: "Sử dụng ràng buộc CHECK: `price NUMERIC CHECK (price > 0)`."
            }
        }
    },
    {
        _id: "pg-m-012",
        difficulty: "middle",
        tags: ["INDEX", "partial index", "optimization"],
        content: {
            en: {
                title: "Partial Index",
                body: "What is a **partial index** in PostgreSQL, and when should you consider using one for optimization?",
                solution: "A partial index is an index built over only a subset of the rows in a table (defined by a WHERE clause). You should use it when queries frequently access only a small, specific portion of a large table, as it reduces index size and maintenance overhead."
            },
            jp: {
                title: "部分インデックス",
                body: "PostgreSQL における **部分インデックス** とは何ですか、また、最適化のためにいつそれを使用することを検討すべきですか？",
                solution: "部分インデックスは、テーブル内の行のサブセット（WHERE 句で定義される）に対してのみ構築されるインデックスです。大規模なテーブルのごく一部の特定のデータのみにクエリが頻繁にアクセスする場合に、インデックスサイズとメンテナンスオーバーヘッドを削減するために使用すべきです。"
            },
            vi: {
                title: "Index Bộ phận (Partial Index)",
                body: "**Partial index** trong PostgreSQL là gì, và khi nào bạn nên cân nhắc sử dụng nó để tối ưu hóa?",
                solution: "Partial index là một index được xây dựng chỉ trên một tập hợp con của các hàng trong một bảng (được xác định bằng mệnh đề WHERE). Bạn nên sử dụng nó khi các truy vấn thường xuyên chỉ truy cập một phần nhỏ, cụ thể của một bảng lớn, vì nó giảm kích thước index và chi phí bảo trì."
            }
        }
    },
    {
        _id: "pg-m-013",
        difficulty: "middle",
        tags: ["function", "aggregate", "CUBE", "ROLLUP"],
        content: {
            en: {
                title: "Grouping Sets",
                body: "In addition to `GROUP BY`, PostgreSQL supports `ROLLUP` and `CUBE`. Briefly explain the difference between the grouping results of `ROLLUP` and `CUBE`.",
                solution: "ROLLUP generates subtotals for a hierarchy of columns (e.g., total by year, then by year and month). CUBE generates subtotals for **all possible combinations** of the grouping columns, regardless of hierarchy."
            },
            jp: {
                title: "グループ化セット",
                body: "`GROUP BY` に加えて、PostgreSQL は `ROLLUP` と `CUBE` をサポートしています。`ROLLUP` と `CUBE` のグループ化結果の違いを簡単に説明してください。",
                solution: "ROLLUP は列の階層の小計を生成します（例：年別、次に年と月別）。CUBE は、階層に関係なく、グループ化列の**すべての可能な組み合わせ**の小計を生成します。"
            },
            vi: {
                title: "Grouping Sets",
                body: "Ngoài `GROUP BY`, PostgreSQL còn hỗ trợ `ROLLUP` và `CUBE`. Giải thích ngắn gọn sự khác biệt giữa kết quả nhóm của `ROLLUP` và `CUBE`.",
                solution: "ROLLUP tạo tổng phụ cho một hệ thống phân cấp cột (ví dụ: tổng theo năm, sau đó theo năm và tháng). CUBE tạo tổng phụ cho **tất cả các tổ hợp có thể có** của các cột nhóm, bất kể hệ thống phân cấp."
            }
        }
    },
    {
        _id: "pg-m-014",
        difficulty: "middle",
        tags: ["TRUNCATE", "performance", "privilege"],
        content: {
            en: {
                title: "TRUNCATE Privileges",
                body: "Why does the `TRUNCATE TABLE` command in PostgreSQL typically require higher privileges (like `TRUNCATE` or `DELETE`) compared to a simple `DELETE` without a WHERE clause?",
                solution: "`TRUNCATE` is a DDL command that effectively drops and recreates the table, requiring ownership or specific table privileges, whereas `DELETE` is a DML operation that only requires `DELETE` privilege on rows and respects transactional locks/rollback points."
            },
            jp: {
                title: "TRUNCATE の権限",
                body: "PostgreSQL の `TRUNCATE TABLE` コマンドは、WHERE 句のない単純な `DELETE` と比較して、通常、より高い権限（`TRUNCATE` または `DELETE` など）を必要とするのはなぜですか？",
                solution: "`TRUNCATE` はテーブルを実質的にドロップして再作成する DDL コマンドであり、所有権または特定のテーブル権限を必要としますが、`DELETE` は行に対する `DELETE` 権限のみを必要とし、トランザクションロック/ロールバックポイントを尊重する DML 操作です。"
            },
            vi: {
                title: "Quyền TRUNCATE",
                body: "Tại sao lệnh `TRUNCATE TABLE` trong PostgreSQL thường yêu cầu các đặc quyền cao hơn (như `TRUNCATE` hoặc `DELETE`) so với lệnh `DELETE` đơn giản mà không có mệnh đề WHERE?",
                solution: "`TRUNCATE` là lệnh DDL thực sự thả và tạo lại bảng, yêu cầu quyền sở hữu hoặc đặc quyền bảng cụ thể, trong khi `DELETE` là thao tác DML chỉ yêu cầu đặc quyền `DELETE` trên các hàng và tôn trọng khóa/điểm rollback giao dịch."
            }
        }
    },
    {
        _id: "pg-m-015",
        difficulty: "middle",
        tags: ["Foreign Key", "ON DELETE", "action"],
        content: {
            en: {
                title: "Foreign Key Actions",
                body: "Name two non-default actions that can be specified in a `FOREIGN KEY` constraint using the `ON DELETE` clause to handle the deletion of a referenced primary key row.",
                solution: "ON DELETE CASCADE (deletes referencing rows) and ON DELETE SET NULL (sets referencing columns to NULL). Other options include RESTRICT, NO ACTION, and SET DEFAULT."
            },
            jp: {
                title: "外部キーのアクション",
                body: "参照される主キー行の削除を処理するために、`ON DELETE` 句を使用して `FOREIGN KEY` 制約で指定できる、デフォルトではない 2 つのアクションを挙げてください。",
                solution: "ON DELETE CASCADE（参照行を削除）と ON DELETE SET NULL（参照列を NULL に設定）です。その他のオプションには RESTRICT、NO ACTION、SET DEFAULT があります。"
            },
            vi: {
                title: "Hành động Khóa Ngoại",
                body: "Nêu hai hành động không phải mặc định có thể được chỉ định trong ràng buộc `FOREIGN KEY` bằng cách sử dụng mệnh đề `ON DELETE` để xử lý việc xóa một hàng khóa chính được tham chiếu.",
                solution: "ON DELETE CASCADE (xóa các hàng tham chiếu) và ON DELETE SET NULL (đặt các cột tham chiếu thành NULL). Các tùy chọn khác bao gồm RESTRICT, NO ACTION và SET DEFAULT."
            }
        }
    },
    {
        _id: "pg-m-016",
        difficulty: "middle",
        tags: ["VIEW", "Materialized View", "performance"],
        content: {
            en: {
                title: "Materialized Views",
                body: "What is the key functional difference between a standard `VIEW` and a `MATERIALIZED VIEW` in PostgreSQL, and why is the latter often used for reporting?",
                solution: "A standard VIEW is a stored query that runs every time it is accessed. A MATERIALIZED VIEW is a stored result set (data is physically written to disk). It's used for reporting because it provides much faster read performance, at the cost of needing to be periodically refreshed (REFRSH MATERIALIZED VIEW)."
            },
            jp: {
                title: "マテリアライズドビュー",
                body: "PostgreSQL の標準の `VIEW` と `MATERIALIZED VIEW` の間の主要な機能の違いは何ですか、また後者がレポート作成によく使用されるのはなぜですか？",
                solution: "標準の VIEW はアクセスされるたびに実行される保存されたクエリです。MATERIALIZED VIEW は保存された結果セットです（データは物理的にディスクに書き込まれます）。定期的に更新（REFRSH MATERIALIZED VIEW）する必要があるというコストはかかりますが、はるかに高速な読み取りパフォーマンスを提供するため、レポート作成に使用されます。"
            },
            vi: {
                title: "Materialized Views",
                body: "Sự khác biệt chức năng chính giữa `VIEW` tiêu chuẩn và `MATERIALIZED VIEW` trong PostgreSQL là gì, và tại sao loại sau thường được sử dụng cho việc báo cáo?",
                solution: "VIEW tiêu chuẩn là một truy vấn được lưu trữ và chạy mỗi khi nó được truy cập. MATERIALIZED VIEW là một tập hợp kết quả được lưu trữ (dữ liệu được ghi vật lý vào đĩa). Nó được sử dụng cho việc báo cáo vì nó cung cấp hiệu suất đọc nhanh hơn nhiều, với chi phí là cần phải được làm mới định kỳ (REFRSH MATERIALIZED VIEW)."
            }
        }
    },
    {
        _id: "pg-m-017",
        difficulty: "middle",
        tags: ["Subquery", "EXISTS", "optimization"],
        content: {
            en: {
                title: "EXISTS Operator",
                body: "When should you prefer using the `EXISTS` operator with a subquery over using an `IN` clause with a subquery?",
                solution: "Prefer `EXISTS` when the subquery might return a very large result set. `EXISTS` stops processing as soon as it finds the first match, making it generally more efficient than `IN`, which often needs to process the entire subquery result set."
            },
            jp: {
                title: "EXISTS 演算子",
                body: "サブクエリで `IN` 句を使用する代わりに、サブクエリで `EXISTS` 演算子を使用することをいつ優先すべきですか？",
                solution: "サブクエリが非常に大きな結果セットを返す可能性がある場合は、`EXISTS` を優先します。`EXISTS` は最初の一致を見つけるとすぐに処理を停止するため、多くの場合、サブクエリの結果セット全体を処理する必要がある `IN` よりも一般的に効率的です。"
            },
            vi: {
                title: "Toán tử EXISTS",
                body: "Khi nào bạn nên ưu tiên sử dụng toán tử `EXISTS` với một subquery hơn là sử dụng mệnh đề `IN` với một subquery?",
                solution: "Nên ưu tiên `EXISTS` khi subquery có thể trả về một tập kết quả rất lớn. `EXISTS` ngừng xử lý ngay khi tìm thấy kết quả khớp đầu tiên, làm cho nó thường hiệu quả hơn `IN`, vốn thường cần xử lý toàn bộ tập kết quả của subquery."
            }
        }
    },
    {
        _id: "pg-m-018",
        difficulty: "middle",
        tags: ["data type", "JSONB", "operators"],
        content: {
            en: {
                title: "JSONB Extraction",
                body: "What is the key operator (`->` or `->>`) in PostgreSQL used to extract a JSONB field's value as the original JSONB type (retaining structure) versus extracting it as a text string?",
                solution: "`->` extracts as JSONB, retaining the structure. `->>` extracts as TEXT (string), which is necessary for comparison operations."
            },
            jp: {
                title: "JSONB の抽出",
                body: "PostgreSQL で、JSONB フィールドの値を元の JSONB 型として抽出する（構造を保持する）演算子と、テキスト文字列として抽出する演算子（`->` または `->>`）は何ですか？",
                solution: "`->` は JSONB として抽出され、構造を保持します。`->>` は TEXT（文字列）として抽出され、比較操作に必要です。"
            },
            vi: {
                title: "Trích xuất JSONB",
                body: "Toán tử khóa nào (`->` hay `->>`) trong PostgreSQL được sử dụng để trích xuất giá trị trường JSONB dưới dạng kiểu JSONB gốc (giữ cấu trúc) so với trích xuất nó dưới dạng chuỗi văn bản?",
                solution: "`->` trích xuất dưới dạng JSONB, giữ lại cấu trúc. `->>` trích xuất dưới dạng TEXT (chuỗi), cần thiết cho các thao tác so sánh."
            }
        }
    },
    {
        _id: "pg-m-019",
        difficulty: "middle",
        tags: ["LOCK", "transaction", "concurrency"],
        content: {
            en: {
                title: "Explicit Locking",
                body: "What is the SQL command used to explicitly acquire a lock on a set of rows so that a transaction can hold them until committed, preventing other transactions from modifying them?",
                solution: "SELECT ... FOR UPDATE. This is used in situations where you need to read data and then immediately update it, ensuring no other transaction changes it in the interim."
            },
            jp: {
                title: "明示的なロック",
                body: "トランザクションがコミットされるまで一連の行にロックを明示的に取得し、他のトランザクションによる変更を防ぐために使用される SQL コマンドは何ですか？",
                solution: "SELECT ... FOR UPDATE。これは、データを読み取ってからすぐに更新する必要がある状況で使用され、その間に他のトランザクションがデータを変更しないようにします。"
            },
            vi: {
                title: "Khóa Tường minh (Explicit Locking)",
                body: "Lệnh SQL nào được sử dụng để khóa tường minh một tập hợp các hàng để một giao dịch có thể giữ chúng cho đến khi commit, ngăn chặn các giao dịch khác sửa đổi chúng?",
                solution: "SELECT ... FOR UPDATE. Điều này được sử dụng trong các tình huống bạn cần đọc dữ liệu và sau đó cập nhật nó ngay lập tức, đảm bảo không có giao dịch nào khác thay đổi nó trong thời gian chờ."
            }
    }},
    {
        _id: "pg-m-020",
        difficulty: "middle",
        tags: ["GRANT", "REVOKE", "privilege"],
        content: {
            en: {
                title: "Granting Privileges",
                body: "Write the SQL command to grant the ability to read (SELECT) and update (UPDATE) data on the table `products` to a specific user named `app_user`.",
                solution: "GRANT SELECT, UPDATE ON products TO app_user;"
            },
            jp: {
                title: "権限の付与",
                body: "テーブル `products` のデータに対する読み取り（SELECT）および更新（UPDATE）の機能を、`app_user` という特定のユーザーに付与する SQL コマンドを記述してください。",
                solution: "GRANT SELECT, UPDATE ON products TO app_user;"
            },
            vi: {
                title: "Cấp Đặc quyền",
                body: "Viết lệnh SQL để cấp khả năng đọc (SELECT) và cập nhật (UPDATE) dữ liệu trên bảng `products` cho một người dùng cụ thể tên là `app_user`.",
                solution: "GRANT SELECT, UPDATE ON products TO app_user;"
            }
        }
    },
    // --- SENIOR (Bổ sung 10/20 Questions) ---
    {
        _id: "pg-s-011",
        difficulty: "senior",
        tags: ["WAL", "replication", "crash recovery"],
        content: {
            en: {
                title: "Write-Ahead Logging (WAL)",
                body: "Explain the fundamental role of **Write-Ahead Logging (WAL)** in PostgreSQL's data integrity and replication strategy.",
                solution: "WAL ensures data integrity (Atomicity) by logging all changes to disk before the actual data pages are modified. For replication, standby servers stream these WAL records to stay synchronized with the primary, allowing for point-in-time recovery and high availability."
            },
            jp: {
                title: "先行書き込みログ (WAL)",
                body: "PostgreSQL のデータ整合性とレプリケーション戦略における **Write-Ahead Logging (WAL)** の基本的な役割を説明してください。",
                solution: "WAL は、実際のデータページが変更される前にすべての変更をディスクにログ記録することで、データの整合性（原子性）を保証します。レプリケーションの場合、スタンバイサーバーはこれらの WAL レコードをストリーミングしてプライマリと同期を保ち、ポイントインタイムリカバリと高可用性を可能にします。"
            },
            vi: {
                title: "Write-Ahead Logging (WAL)",
                body: "Giải thích vai trò cơ bản của **Write-Ahead Logging (WAL)** trong tính toàn vẹn dữ liệu và chiến lược nhân bản của PostgreSQL.",
                solution: "WAL đảm bảo tính toàn vẹn dữ liệu (Atomicity) bằng cách ghi log tất cả các thay đổi vào đĩa trước khi các trang dữ liệu thực tế được sửa đổi. Đối với nhân bản, các máy chủ standby stream các bản ghi WAL này để đồng bộ với máy chủ chính, cho phép khôi phục tại một thời điểm (point-in-time recovery) và tính sẵn sàng cao."
            }
        }
    },
    {
        _id: "pg-s-012",
        difficulty: "senior",
        tags: ["Indexing", "performance", "EXPLAIN"],
        content: {
            en: {
                title: "Index Scan vs Sequential Scan",
                body: "When analyzing a query plan with `EXPLAIN`, what does it generally indicate about the index usage if the planner chooses a **Sequential Scan** over an **Index Scan**?",
                solution: "It usually indicates one of three things: 1) The table is small, so reading the whole table is faster than reading the index then the table (index overhead). 2) The query is fetching a large percentage of the rows (e.g., > 10-20%) where a sequential scan is more efficient. 3) The planner determined the index wasn't selective enough for the given WHERE clause."
            },
            jp: {
                title: "インデックススキャン 対 シーケンシャルスキャン",
                body: "`EXPLAIN` でクエリプランを分析するとき、プランナーが **インデックススキャン** ではなく **シーケンシャルスキャン** を選択した場合、インデックスの使用について一般的に何を示していますか？",
                solution: "通常、次の 3 つのいずれかを示しています。1) テーブルが小さいため、インデックスを読んでからテーブルを読むよりもテーブル全体を読む方が速い（インデックスのオーバーヘッド）。2) クエリが行の大部分（例：10-20% 以上）を取得しており、シーケンシャルスキャンの方が効率的である。3) プランナーが、指定された WHERE 句に対してインデックスが十分に選択的ではないと判断した。"
            },
            vi: {
                title: "Index Scan so với Sequential Scan",
                body: "Khi phân tích kế hoạch truy vấn bằng `EXPLAIN`, điều gì thường được chỉ ra về việc sử dụng index nếu trình lập kế hoạch chọn **Sequential Scan** thay vì **Index Scan**?",
                solution: "Nó thường chỉ ra một trong ba điều: 1) Bảng nhỏ, nên việc đọc toàn bộ bảng nhanh hơn việc đọc index rồi đọc bảng (chi phí index). 2) Truy vấn đang tìm nạp một tỷ lệ lớn các hàng (ví dụ: > 10-20%) mà Sequential Scan hiệu quả hơn. 3) Trình lập kế hoạch xác định index không đủ chọn lọc cho mệnh đề WHERE đã cho."
            }
        }
    },
    {
        _id: "pg-s-013",
        difficulty: "senior",
        tags: ["trigger", "function", "stored procedure"],
        content: {
            en: {
                title: "Trigger vs Stored Procedure",
                body: "What is the key functional difference between a PostgreSQL **Trigger** and a standard **Stored Procedure (Function)**, and when is a Trigger the appropriate choice?",
                solution: "A Stored Procedure (Function) is executed explicitly via a CALL or SELECT statement. A Trigger is a special type of function that is **automatically executed** (triggered) when a specific data modification event (INSERT, UPDATE, DELETE) occurs on a table. Triggers are appropriate for enforcing complex business rules, auditing changes, or maintaining data consistency."
            },
            jp: {
                title: "トリガー 対 ストアドプロシージャ",
                body: "PostgreSQL の **トリガー** と標準の **ストアドプロシージャ（関数）** の間の主要な機能の違いは何ですか、また、トリガーが適切な選択であるのはいつですか？",
                solution: "ストアドプロシージャ（関数）は CALL または SELECT ステートメントを介して明示的に実行されます。トリガーは、テーブルで特定のデータ変更イベント（INSERT、UPDATE、DELETE）が発生したときに**自動的に実行される**（トリガーされる）特殊なタイプの関数です。トリガーは、複雑なビジネスルールの適用、変更の監査、またはデータの一貫性の維持に適しています。"
            },
            vi: {
                title: "Trigger so với Stored Procedure",
                body: "Sự khác biệt chức năng chính giữa **Trigger** và **Stored Procedure (Function)** tiêu chuẩn của PostgreSQL là gì, và khi nào Trigger là lựa chọn thích hợp?",
                solution: "Stored Procedure (Function) được thực thi rõ ràng thông qua một câu lệnh CALL hoặc SELECT. Trigger là một loại hàm đặc biệt được **tự động thực thi** (trigger) khi một sự kiện sửa đổi dữ liệu cụ thể (INSERT, UPDATE, DELETE) xảy ra trên một bảng. Trigger thích hợp để thực thi các quy tắc nghiệp vụ phức tạp, kiểm toán các thay đổi hoặc duy trì tính nhất quán của dữ liệu."
            }
        }
    },
    {
        _id: "pg-s-014",
        difficulty: "senior",
        tags: ["transaction", "isolation", "Serializable"],
        content: {
            en: {
                title: "Serializable Isolation",
                body: "What is the highest transaction isolation level in PostgreSQL, and what kind of anomalies does it guarantee protection against (besides dirty/non-repeatable reads)?",
                solution: "**Serializable**. It guarantees protection against all three common anomalies, including **phantom reads** (new rows appearing in a transaction) and most importantly, **serialization anomalies** (where a set of concurrent transactions produces a result inconsistent with all possible serial executions)."
            },
            jp: {
                title: "Serializable 分離レベル",
                body: "PostgreSQL で最も高いトランザクション分離レベルは何ですか、また、それは（ダーティ/非再現リード以外に）どのような種類のアノマリからの保護を保証しますか？",
                solution: "**Serializable**。これは、**ファントムリード**（トランザクションに出現する新しい行）や、最も重要な**シリアライゼーションアノマリ**（並行トランザクションのセットが、可能なすべての直列実行と矛盾する結果を生成する場合）を含む、3 つの一般的なアノマリすべてからの保護を保証します。"
            },
            vi: {
                title: "Cấp độ cô lập Serializable",
                body: "Cấp độ cô lập giao dịch cao nhất trong PostgreSQL là gì, và nó đảm bảo bảo vệ khỏi những loại bất thường nào (ngoài dirty/non-repeatable reads)?",
                solution: "**Serializable**. Nó đảm bảo bảo vệ khỏi cả ba bất thường phổ biến, bao gồm **phantom reads** (các hàng mới xuất hiện trong một giao dịch) và quan trọng nhất là **serialization anomalies** (khi một tập hợp các giao dịch đồng thời tạo ra một kết quả không nhất quán với tất cả các lần thực thi tuần tự có thể có)."
            }
        }
    },
    {
        _id: "pg-s-015",
        difficulty: "senior",
        tags: ["data type", "range", "scheduling"],
        content: {
            en: {
                title: "Range Data Types",
                body: "PostgreSQL supports range data types (e.g., `daterange`). What is a major advantage of using range types for things like scheduling or checking overlapping time slots?",
                solution: "They enable the use of specialized, efficient index structures (like GiST) and operators (e.g., `@>` contains, `&&` overlaps) to quickly query and detect overlaps or containment of time intervals or other ranges without complex WHERE clauses and joins."
            },
            jp: {
                title: "範囲データ型",
                body: "PostgreSQL は範囲データ型（例: `daterange`）をサポートしています。スケジューリングや重複する時間枠のチェックなどに範囲型を使用する主な利点は何ですか？",
                solution: "特別な効率的なインデックス構造（GiST など）と演算子（例: `@>` 含む、`&&` 重複）の使用を可能にし、複雑な WHERE 句や JOIN なしで、時間間隔やその他の範囲の重複や包含を迅速にクエリおよび検出できます。"
            },
            vi: {
                title: "Kiểu Dữ liệu Phạm vi (Range Data Types)",
                body: "PostgreSQL hỗ trợ các kiểu dữ liệu phạm vi (ví dụ: `daterange`). Lợi thế lớn của việc sử dụng các kiểu phạm vi cho những thứ như lập lịch hoặc kiểm tra các khe thời gian chồng chéo là gì?",
                solution: "Chúng cho phép sử dụng các cấu trúc index chuyên biệt, hiệu quả (như GiST) và các toán tử (ví dụ: `@>` chứa, `&&` chồng chéo) để truy vấn và phát hiện nhanh chóng sự chồng chéo hoặc chứa đựng của các khoảng thời gian hoặc các phạm vi khác mà không cần các mệnh đề WHERE và JOIN phức tạp."
            }
        }
    },
    {
        _id: "pg-s-016",
        difficulty: "senior",
        tags: ["security", "ROW LEVEL SECURITY", "RLS"],
        content: {
            en: {
                title: "Row-Level Security (RLS)",
                body: "What is **Row-Level Security (RLS)** in PostgreSQL, and what type of SQL policy is used to implement it?",
                solution: "RLS restricts the rows a user can see or modify based on their user identity or other criteria. It is implemented using **POLICIES** defined with `CREATE POLICY` statements, which are attached to a table and applied automatically to query results."
            },
            jp: {
                title: "行レベルセキュリティ (RLS)",
                body: "PostgreSQL における **行レベルセキュリティ (RLS)** とは何ですか、また、それを実装するために使用される SQL ポリシーのタイプは何ですか？",
                solution: "RLS は、ユーザーの ID やその他の基準に基づいて、ユーザーが見たり変更したりできる行を制限します。これは、`CREATE POLICY` ステートメントで定義され、テーブルにアタッチされてクエリ結果に自動的に適用される **POLICIES** を使用して実装されます。"
            },
            vi: {
                title: "Row-Level Security (RLS)",
                body: "**Row-Level Security (RLS)** trong PostgreSQL là gì, và loại chính sách SQL nào được sử dụng để triển khai nó?",
                solution: "RLS giới hạn các hàng mà người dùng có thể thấy hoặc sửa đổi dựa trên danh tính người dùng hoặc các tiêu chí khác. Nó được triển khai bằng cách sử dụng **POLICIES** (chính sách) được định nghĩa bằng các câu lệnh `CREATE POLICY`, được đính kèm vào một bảng và tự động áp dụng cho kết quả truy vấn."
            }
        }
    },
    {
        _id: "pg-s-017",
        difficulty: "senior",
        tags: ["optimization", "pg_stat_activity", "monitoring"],
        content: {
            en: {
                title: "Identifying Active Queries",
                body: "Which built-in PostgreSQL system view is commonly queried by administrators to see a list of all currently active backend processes, including the running query text, connection information, and current state?",
                solution: "`pg_stat_activity`."
            },
            jp: {
                title: "アクティブなクエリの識別",
                body: "管理者によって一般的にクエリされ、実行中のクエリテキスト、接続情報、現在の状態を含む、現在アクティブなすべてのバックエンドプロセスのリストを確認するために使用される組み込みの PostgreSQL システムビューは何ですか？",
                solution: "`pg_stat_activity`。"
            },
            vi: {
                title: "Xác định Truy vấn đang Hoạt động",
                body: "Chế độ xem hệ thống tích hợp sẵn nào của PostgreSQL thường được quản trị viên truy vấn để xem danh sách tất cả các tiến trình backend đang hoạt động, bao gồm văn bản truy vấn đang chạy, thông tin kết nối và trạng thái hiện tại?",
                solution: "`pg_stat_activity`."
            }
        }
    },
    {
        _id: "pg-s-018",
        difficulty: "senior",
        tags: ["Partitioning", "Declarative Partitioning", "constraint exclusion"],
        content: {
            en: {
                title: "Declarative Partitioning",
                body: "Since PostgreSQL 10, **Declarative Partitioning** is the preferred method. What is the main difference between it and the older 'inheritance' partitioning method regarding constraint checking and query optimization?",
                solution: "Declarative partitioning allows the planner to automatically use **partition pruning** (ignoring irrelevant partitions based on the query WHERE clause) and also automatically handles key constraints (like Primary/Foreign Keys) across all partitions, which required manual constraints and triggers in the old inheritance method."
            },
            jp: {
                title: "宣言的パーティショニング",
                body: "PostgreSQL 10 以降、**宣言的パーティショニング**が推奨される方法です。制約チェックとクエリ最適化に関して、これと古い「継承」パーティショニング方法との主な違いは何ですか？",
                solution: "宣言的パーティショニングにより、プランナーは自動的に **パーティションプルーニング**（クエリの WHERE 句に基づいて無関係なパーティションを無視する）を使用でき、また、古い継承方法では手動の制約とトリガーが必要だった、すべてのパーティションにわたるキー制約（主キー/外部キーなど）を自動的に処理できます。"
            },
            vi: {
                title: "Declarative Partitioning",
                body: "Kể từ PostgreSQL 10, **Declarative Partitioning** là phương pháp được ưu tiên. Sự khác biệt chính giữa nó và phương pháp phân vùng 'kế thừa' (inheritance) cũ hơn liên quan đến kiểm tra ràng buộc và tối ưu hóa truy vấn là gì?",
                solution: "Declarative partitioning cho phép trình lập kế hoạch tự động sử dụng **partition pruning** (bỏ qua các phân vùng không liên quan dựa trên mệnh đề WHERE của truy vấn) và cũng tự động xử lý các ràng buộc khóa (như Khóa chính/Khóa ngoại) trên tất cả các phân vùng, điều này đòi hỏi các ràng buộc và trigger thủ công trong phương pháp kế thừa cũ."
            }
        }
    },
    {
        _id: "pg-s-019",
        difficulty: "senior",
        tags: ["performance", "statistics", "ANALYZE"],
        content: {
            en: {
                title: "Optimizer Statistics",
                body: "The PostgreSQL query planner relies on statistical information about the data distribution. What SQL command is used to collect and update these statistics, and why is running it regularly important?",
                solution: "The **ANALYZE** command (or `VACUUM ANALYZE`). It is crucial because the query planner uses these statistics to choose the most efficient execution plan. Outdated statistics can lead to poor plan choices (e.g., Sequential Scan when an Index Scan is better), severely hurting performance."
            },
            jp: {
                title: "オプティマイザの統計",
                body: "PostgreSQL のクエリプランナーは、データ分布に関する統計情報に依存しています。これらの統計を収集および更新するために使用される SQL コマンドは何ですか、また、それを定期的に実行することが重要であるのはなぜですか？",
                solution: "**ANALYZE** コマンド（または `VACUUM ANALYZE`）。クエリプランナーはこれらの統計を使用して最も効率的な実行計画を選択するため、不可欠です。古くなった統計は、不適切な計画の選択（例：インデックススキャンの方が良い場合にシーケンシャルスキャン）につながり、パフォーマンスを著しく損ないます。"
            },
            vi: {
                title: "Thống kê Tối ưu hóa (Optimizer Statistics)",
                body: "Trình lập kế hoạch truy vấn PostgreSQL dựa vào thông tin thống kê về phân phối dữ liệu. Lệnh SQL nào được sử dụng để thu thập và cập nhật các số liệu thống kê này, và tại sao việc chạy nó thường xuyên lại quan trọng?",
                solution: "Lệnh **ANALYZE** (hoặc `VACUUM ANALYZE`). Nó rất quan trọng vì trình lập kế hoạch truy vấn sử dụng các số liệu thống kê này để chọn kế hoạch thực thi hiệu quả nhất. Các số liệu thống kê lỗi thời có thể dẫn đến việc lựa chọn kế hoạch kém (ví dụ: Sequential Scan trong khi Index Scan tốt hơn), làm giảm hiệu suất nghiêm trọng."
            }
    }},
    {
        _id: "pg-s-020",
        difficulty: "senior",
        tags: ["extension", "PostGIS", "geo-spatial"],
        content: {
            en: {
                title: "Essential Extensions",
                body: "Name the powerful and widely used PostgreSQL extension that provides support for storing and querying geometric objects (geo-spatial data) and leverages specialized indexing techniques for spatial searches.",
                solution: "**PostGIS**. It is often considered the most feature-rich open-source spatial database extender available."
            },
            jp: {
                title: "必須の拡張機能",
                body: "ジオメトリオブジェクト（地理空間データ）の保存とクエリのサポートを提供し、空間検索のための特殊なインデックス作成技術を活用する、強力で広く使用されている PostgreSQL 拡張機能の名前を挙げてください。",
                solution: "**PostGIS**。これは、利用可能な最も機能豊富なオープンソースの空間データベース拡張機能であるとしばしば見なされています。"
            },
            vi: {
                title: "Extensions Cần thiết",
                body: "Nêu tên extension PostgreSQL mạnh mẽ và được sử dụng rộng rãi, cung cấp hỗ trợ lưu trữ và truy vấn các đối tượng hình học (dữ liệu địa không gian) và tận dụng các kỹ thuật lập chỉ mục chuyên biệt cho tìm kiếm không gian.",
                solution: "**PostGIS**. Nó thường được coi là công cụ mở rộng cơ sở dữ liệu không gian mã nguồn mở giàu tính năng nhất hiện có."
            }
        }
    }
];

export default postgresqlQuestions;

