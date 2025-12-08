export const rdbmsJuniorQuestions = [
    {
        _id: "rdbms-j-001",
        difficulty: "junior",
        tags: ["sql", "join", "full join"],
        content: {
            en: {
                title: "What is the purpose of a **FULL OUTER JOIN**?",
                body: "Which rows does it return from the joined tables?",
                solution: "It returns all rows when there is a match in **either** the left or the right table. Where there is no match, the result set will have NULL values for the table that is missing a match."
            },
            jp: {
                title: "**FULL OUTER JOIN**の目的は何ですか？",
                body: "結合されたテーブルからどの行を返しますか？",
                solution: "左テーブルまたは右テーブルの**どちらか**に一致がある場合にすべての行を返します。一致がない場合、結果セットには一致がないテーブルに対してNULL値が含まれます。"
            },
            vi: {
                title: "Mục đích của **FULL OUTER JOIN** là gì?",
                body: "Nó trả về những hàng nào từ các bảng đã được join?",
                solution: "Nó trả về tất cả các hàng khi có sự khớp nối ở **một trong hai** bảng (trái hoặc phải). Nếu không có sự khớp nối, tập kết quả sẽ có giá trị NULL cho bảng bị thiếu khớp nối."
            }
        }
    },
    {
        _id: "rdbms-j-002",
        difficulty: "junior",
        tags: ["sql", "join", "cross join"],
        content: {
            en: {
                title: "What is the result of a **CROSS JOIN** (Cartesian Product)?",
                body: "If Table A has M rows and Table B has N rows, how many rows are returned?",
                solution: "It returns the **Cartesian Product** of the sets of records from the two joined tables. The number of rows returned is **M * N** (M rows from Table A multiplied by N rows from Table B)."
            },
            jp: {
                title: "**CROSS JOIN**（デカルト積）の結果は何ですか？",
                body: "テーブルAにM行、テーブルBにN行がある場合、何行が返されますか？",
                solution: "結合された2つのテーブルのレコードセットの**デカルト積**を返します。返される行数は**M * N**です（テーブルAのM行にテーブルBのN行を乗じたもの）。"
            },
            vi: {
                title: "Kết quả của một **CROSS JOIN** (Tích Đề-các) là gì?",
                body: "Nếu Bảng A có M hàng và Bảng B có N hàng, bao nhiêu hàng được trả về?",
                solution: "Nó trả về **Tích Đề-các** của các tập bản ghi từ hai bảng đã được join. Số hàng trả về là **M * N** (M hàng từ Bảng A nhân với N hàng từ Bảng B)."
            }
        }
    },
    {
        _id: "rdbms-j-003",
        difficulty: "junior",
        tags: ["normalization", "1nf", "design"],
        content: {
            en: {
                title: "What is the primary requirement for a table to be in **First Normal Form (1NF)**?",
                body: "What is the rule regarding multi-valued attributes and column values?",
                solution: "A table is in 1NF if every column contains **atomic (single) values**, meaning there are no repeating groups of columns and no multi-valued attributes in any cell."
            },
            jp: {
                title: "テーブルが**第一正規形（1NF）**であるための主な要件は何ですか？",
                body: "多値属性と列の値に関するルールは何ですか？",
                solution: "テーブルが1NFであるのは、すべての列が**アトミックな（単一の）値**を含んでいる場合です。つまり、繰り返しグループの列がなく、どのセルにも多値属性がないということです。"
            },
            vi: {
                title: "Yêu cầu chính để một bảng ở **Dạng Chuẩn Đầu tiên (1NF)** là gì?",
                body: "Quy tắc về các thuộc tính đa giá trị và giá trị cột là gì?",
                solution: "Một bảng ở 1NF nếu mỗi cột chứa các **giá trị nguyên tố (đơn lẻ)**, nghĩa là không có nhóm cột lặp lại và không có thuộc tính đa giá trị trong bất kỳ ô nào."
            }
        }
    },
    {
        _id: "rdbms-j-004",
        difficulty: "junior",
        tags: ["normalization", "2nf", "dependency"],
        content: {
            en: {
                title: "What is the key requirement for a table to move from 1NF to **Second Normal Form (2NF)**?",
                body: "The rule relates to non-key attributes and the composite primary key.",
                solution: "A table must be in 1NF, and **every non-key attribute must be fully functionally dependent on the entire primary key**. If the key is composite, no non-key attribute can depend only on a part of the key."
            },
            jp: {
                title: "テーブルが1NFから**第二正規形（2NF）**に移行するための主要な要件は何ですか？",
                body: "このルールは、非キー属性と複合主キーに関連しています。",
                solution: "テーブルは1NFである必要があり、**すべての非キー属性は、主キー全体に完全に機能的に依存している**必要があります。キーが複合キーである場合、非キー属性はキーの一部のみに依存することはできません。"
            },
            vi: {
                title: "Yêu cầu chính để một bảng chuyển từ 1NF sang **Dạng Chuẩn Thứ hai (2NF)** là gì?",
                body: "Quy tắc này liên quan đến các thuộc tính không phải là khóa và khóa chính tổng hợp.",
                solution: "Một bảng phải ở 1NF, và **mọi thuộc tính không phải là khóa phải phụ thuộc hàm đầy đủ vào toàn bộ khóa chính**. Nếu khóa là khóa tổng hợp, không có thuộc tính không phải khóa nào có thể chỉ phụ thuộc vào một phần của khóa."
            }
        }
    },
    {
        _id: "rdbms-j-005",
        difficulty: "junior",
        tags: ["normalization", "3nf", "dependency"],
        content: {
            en: {
                title: "What is the key requirement for a table to move from 2NF to **Third Normal Form (3NF)**?",
                body: "The rule relates to transitive dependency.",
                solution: "A table must be in 2NF, and there should be **no transitive dependencies**. That is, no non-key attribute should depend on another non-key attribute."
            },
            jp: {
                title: "テーブルが2NFから**第三正規形（3NF）**に移行するための主要な要件は何ですか？",
                body: "このルールは推移的依存性に関連しています。",
                solution: "テーブルは2NFである必要があり、**推移的依存性がない**必要があります。つまり、非キー属性が別の非キー属性に依存してはならないということです。"
            },
            vi: {
                title: "Yêu cầu chính để một bảng chuyển từ 2NF sang **Dạng Chuẩn Thứ ba (3NF)** là gì?",
                body: "Quy tắc này liên quan đến sự phụ thuộc bắc cầu.",
                solution: "Một bảng phải ở 2NF, và không được có **sự phụ thuộc bắc cầu (transitive dependencies)**. Tức là, không có thuộc tính không phải là khóa nào được phụ thuộc vào một thuộc tính không phải là khóa khác."
            }
        }
    },
    {
        _id: "rdbms-j-006",
        difficulty: "junior",
        tags: ["sql", "join", "self join"],
        content: {
            en: {
                title: "Explain the concept of a **Self-Join** and why it requires the use of aliases.",
                body: "When is a Self-Join used?",
                solution: "A Self-Join is when a table is joined to **itself**. It is used to compare rows within the same table. Aliases (like `T1` and `T2`) are mandatory to distinguish between the two identical table references in the query."
            },
            jp: {
                title: "**自己結合（Self-Join）**の概念と、なぜエイリアスの使用が必要なのかを説明してください。",
                body: "自己結合はいつ使用されますか？",
                solution: "自己結合は、テーブルが**それ自体**に結合されることです。同じテーブル内の行を比較するために使用されます。エイリアス（`T1`や`T2`など）は、クエリ内の同一のテーブル参照を区別するために必須です。"
            },
            vi: {
                title: "Giải thích khái niệm về **Self-Join** (Tự Join) và tại sao nó yêu cầu sử dụng bí danh (alias).",
                body: "Self-Join được sử dụng khi nào?",
                solution: "Self-Join là khi một bảng được join với **chính nó**. Nó được sử dụng để so sánh các hàng trong cùng một bảng. Bí danh (như `T1` và `T2`) là bắt buộc để phân biệt giữa hai tham chiếu bảng giống hệt nhau trong truy vấn."
            }
        }
    },
    {
        _id: "rdbms-j-007",
        difficulty: "junior",
        tags: ["sql", "function", "date", "mysql", "postgres"],
        content: {
            en: {
                title: "In a common RDBMS like MySQL or PostgreSQL, what is the function to get the current system date and time?",
                body: "Name the function that returns the current timestamp.",
                solution: "Commonly used functions are **`NOW()`** or **`CURRENT_TIMESTAMP`**."
            },
            jp: {
                title: "MySQLやPostgreSQLのような一般的なRDBMSで、現在のシステムの日付と時刻を取得する関数は何ですか？",
                body: "現在のタイムスタンプを返す関数の名前を挙げてください。",
                solution: "一般的に使用される関数は **`NOW()`** または **`CURRENT_TIMESTAMP`** です。"
            },
            vi: {
                title: "Trong một RDBMS phổ biến như MySQL hoặc PostgreSQL, hàm nào được sử dụng để lấy ngày và giờ hệ thống hiện tại?",
                body: "Nêu tên hàm trả về dấu thời gian hiện tại.",
                solution: "Các hàm thường dùng là **`NOW()`** hoặc **`CURRENT_TIMESTAMP`**."
            }
        }
    },
    {
        _id: "rdbms-j-008",
        difficulty: "junior",
        tags: ["sql", "window function", "ranking"],
        content: {
            en: {
                title: "Explain the difference between the SQL ranking functions **`ROW_NUMBER()`** and **`RANK()`**.",
                body: "How do they handle ties (rows with the same value)?",
                solution: "**`ROW_NUMBER()`** assigns a unique, sequential integer to each row, starting with 1, regardless of ties. **`RANK()`** assigns the same rank number to tied rows, but skips the subsequent rank numbers."
            },
            jp: {
                title: "SQLランキング関数**`ROW_NUMBER()`**と**`RANK()`**の違いを説明してください。",
                body: "それらはタイ（同じ値を持つ行）をどのように扱いますか？",
                solution: "**`ROW_NUMBER()`** は、タイに関係なく、各行に1から始まる一意の連続した整数を割り当てます。**`RANK()`** は、タイになった行に同じランク番号を割り当てますが、後続のランク番号をスキップします。"
            },
            vi: {
                title: "Giải thích sự khác biệt giữa các hàm xếp hạng SQL **`ROW_NUMBER()`** và **`RANK()`**.",
                body: "Chúng xử lý các trường hợp hòa (hàng có cùng giá trị) như thế nào?",
                solution: "**`ROW_NUMBER()`** gán một số nguyên duy nhất, tuần tự cho mỗi hàng, bắt đầu từ 1, bất kể có hòa. **`RANK()`** gán cùng một số thứ hạng cho các hàng hòa, nhưng bỏ qua các số thứ hạng tiếp theo."
            }
        }
    },
    {
        _id: "rdbms-j-009",
        difficulty: "junior",
        tags: ["transaction", "acid", "isolation"],
        content: {
            en: {
                title: "In the context of database transactions, what does the 'I' in the ACID acronym stand for?",
                body: "Briefly explain the goal of this property.",
                solution: "'I' stands for **Isolation**. It means that concurrent transactions should not interfere with each other. Each transaction should feel as if it is the only transaction running on the database."
            },
            jp: {
                title: "データベースのトランザクションの文脈で、ACIDの頭字語の「I」は何を表しますか？",
                body: "このプロパティの目的を簡潔に説明してください。",
                solution: "「I」は**Isolation**（隔離性）を表します。これは、並行トランザクションが互いに干渉してはならないことを意味します。各トランザクションは、データベースで実行されている唯一のトランザクションであるかのように感じられるべきです。"
            },
            vi: {
                title: "Trong bối cảnh các giao dịch cơ sở dữ liệu, chữ 'I' trong từ viết tắt ACID là viết tắt của từ gì?",
                body: "Giải thích ngắn gọn mục tiêu của thuộc tính này.",
                solution: "'I' là viết tắt của **Isolation** (Tính cô lập). Nó có nghĩa là các giao dịch đồng thời không được can thiệp lẫn nhau. Mỗi giao dịch phải cảm thấy như thể nó là giao dịch duy nhất đang chạy trên cơ sở dữ liệu."
            }
        }
    },
    {
        _id: "rdbms-j-010",
        difficulty: "junior",
        tags: ["transaction", "acid", "durability"],
        content: {
            en: {
                title: "In the context of database transactions, what does the 'D' in the ACID acronym stand for?",
                body: "Briefly explain the goal of this property.",
                solution: "'D' stands for **Durability**. It means that once a transaction has been committed, it will remain permanently in the database, even in the event of system failures (like a power outage)."
            },
            jp: {
                title: "データベースのトランザクションの文脈で、ACIDの頭字語の「D」は何を表しますか？",
                body: "このプロパティの目的を簡潔に説明してください。",
                solution: "「D」は**Durability**（永続性）を表します。これは、トランザクションがコミットされた後、システム障害（停電など）が発生した場合でも、データベースに永続的に残ることを意味します。"
            },
            vi: {
                title: "Trong bối cảnh các giao dịch cơ sở dữ liệu, chữ 'D' trong từ viết tắt ACID là viết tắt của từ gì?",
                body: "Giải thích ngắn gọn mục tiêu của thuộc tính này.",
                solution: "'D' là viết tắt của **Durability** (Tính bền vững). Nó có nghĩa là một khi một giao dịch đã được commit, nó sẽ duy trì vĩnh viễn trong cơ sở dữ liệu, ngay cả trong trường hợp hệ thống gặp lỗi (như mất điện)."
            }
        }
    },
    {
        _id: "rdbms-j-011",
        difficulty: "junior",
        tags: ["index", "clustered index", "physical storage"],
        content: {
            en: {
                title: "What is a **Clustered Index**, and why can a table only have one?",
                body: "How does it affect the physical storage of data?",
                solution: "A Clustered Index defines the **physical order in which the data rows are stored** on disk. Since the data can only be physically stored in one order, a table can only have **one** Clustered Index (usually on the Primary Key)."
            },
            jp: {
                title: "**クラスター化インデックス**とは何ですか、そしてテーブルはなぜ1つしか持てないのですか？",
                body: "それはデータの物理的な格納にどのように影響しますか？",
                solution: "クラスター化インデックスは、ディスク上にデータ行が**物理的に格納される順序**を定義します。データは物理的に1つの順序でのみ格納できるため、テーブルは**1つ**のクラスター化インデックスしか持つことができません（通常は主キーに対して）。"
            },
            vi: {
                title: "**Clustered Index** (Chỉ mục Phân cụm) là gì, và tại sao một bảng chỉ có thể có một cái?",
                body: "Nó ảnh hưởng đến việc lưu trữ vật lý của dữ liệu như thế nào?",
                solution: "Clustered Index định nghĩa **thứ tự vật lý mà các hàng dữ liệu được lưu trữ** trên đĩa. Vì dữ liệu chỉ có thể được lưu trữ vật lý theo một thứ tự, một bảng chỉ có thể có **một** Clustered Index (thường là trên Khóa Chính)."
            }
        }
    },
    {
        _id: "rdbms-j-012",
        difficulty: "junior",
        tags: ["index", "nonclustered index", "pointer"],
        content: {
            en: {
                title: "What is a **Non-Clustered Index**?",
                body: "How does it differ from a Clustered Index in terms of physical storage?",
                solution: "A Non-Clustered Index is a separate structure that stores the column values and **pointers** (or addresses) to the actual data rows. The physical order of the data remains unaffected, and a table can have multiple Non-Clustered Indexes."
            },
            jp: {
                title: "**非クラスター化インデックス**とは何ですか？",
                body: "物理的な格納の点で、クラスター化インデックスとどのように異なりますか？",
                solution: "非クラスター化インデックスは、列の値と実際のデータ行への**ポインター**（またはアドレス）を格納する別の構造です。データの物理的な順序は影響を受けず、テーブルは複数の非クラスター化インデックスを持つことができます。"
            },
            vi: {
                title: "**Non-Clustered Index** (Chỉ mục Không phân cụm) là gì?",
                body: "Nó khác với Clustered Index như thế nào về mặt lưu trữ vật lý?",
                solution: "Non-Clustered Index là một cấu trúc riêng biệt lưu trữ các giá trị cột và **con trỏ** (hoặc địa chỉ) đến các hàng dữ liệu thực tế. Thứ tự vật lý của dữ liệu không bị ảnh hưởng và một bảng có thể có nhiều Non-Clustered Index."
            }
        }
    },
    {
        _id: "rdbms-j-013",
        difficulty: "junior",
        tags: ["stored procedure", "performance", "security"],
        content: {
            en: {
                title: "What is a **Stored Procedure**, and what are two main benefits of using them?",
                body: "How do they contribute to performance and security?",
                solution: "A Stored Procedure is a prepared SQL code block saved in the database. Benefits include **1. Performance** (since they are pre-compiled and cached) and **2. Security** (by abstracting direct table access and applying security layers)."
            },
            jp: {
                title: "**ストアドプロシージャ**とは何ですか、そしてそれらを使用する主な利点は何ですか？",
                body: "それらはパフォーマンスとセキュリティにどのように貢献しますか？",
                solution: "ストアドプロシージャは、データベースに保存された準備済みのSQLコードブロックです。利点には、**1. パフォーマンス**（事前にコンパイルされ、キャッシュされるため）と**2. セキュリティ**（直接的なテーブルアクセスを抽象化し、セキュリティ層を適用することによる）があります。"
            },
            vi: {
                title: "**Stored Procedure** (Thủ tục Lưu trữ) là gì, và hai lợi ích chính của việc sử dụng chúng là gì?",
                body: "Chúng đóng góp vào hiệu suất và bảo mật như thế nào?",
                solution: "Stored Procedure là một khối mã SQL đã được chuẩn bị và lưu trữ trong cơ sở dữ liệu. Lợi ích bao gồm **1. Hiệu suất** (vì chúng được biên dịch trước và lưu vào bộ nhớ cache) và **2. Bảo mật** (bằng cách trừu tượng hóa quyền truy cập trực tiếp vào bảng và áp dụng các lớp bảo mật)."
            }
        }
    },
    {
        _id: "rdbms-j-014",
        difficulty: "junior",
        tags: ["trigger", "automation", "integrity"],
        content: {
            en: {
                title: "What is a **Trigger** in SQL, and when does it execute?",
                body: "What is the purpose of a trigger?",
                solution: "A Trigger is a special type of Stored Procedure that is automatically executed (or **fired**) when a specific event (e.g., `INSERT`, `UPDATE`, or `DELETE`) occurs on a specific table/view. Its purpose is typically to **enforce complex business rules** or maintain complex data integrity."
            },
            jp: {
                title: "SQLにおける**トリガー**とは何ですか、そしてそれはいつ実行されますか？",
                body: "トリガーの目的は何ですか？",
                solution: "トリガーは、特定のイベント（例: `INSERT`、`UPDATE`、または`DELETE`）が特定のテーブル/ビューで発生したときに自動的に実行される（または**発火する**）特殊なタイプのストアドプロシージャです。その目的は通常、**複雑なビジネスルールを強制する**こと、または複雑なデータ整合性を維持することです。"
            },
            vi: {
                title: "Một **Trigger** (Bộ kích hoạt) trong SQL là gì, và nó được thực thi khi nào?",
                body: "Mục đích của trigger là gì?",
                solution: "Trigger là một loại Stored Procedure đặc biệt được tự động thực thi (hoặc **kích hoạt**) khi một sự kiện cụ thể (ví dụ: `INSERT`, `UPDATE`, hoặc `DELETE`) xảy ra trên một bảng/view cụ thể. Mục đích của nó thường là để **thực thi các quy tắc nghiệp vụ phức tạp** hoặc duy trì tính toàn vẹn dữ liệu phức tạp."
            }
        }
    },
    {
        _id: "rdbms-j-015",
        difficulty: "junior",
        tags: ["view", "updatable view", "limitations"],
        content: {
            en: {
                title: "Under what general condition can an SQL **View** typically be updated (allowing `INSERT`, `UPDATE`, or `DELETE`)?",
                body: "What must the view definition be based on?",
                solution: "A View is generally updatable only if it is based on a **single base table**, does not contain aggregate functions (`SUM`, `COUNT`, etc.), and does not use `GROUP BY`, `UNION`, or complex joins that hide the primary key of the base table."
            },
            jp: {
                title: "SQLの**ビュー**は、どのような一般的な条件下で通常更新可能（`INSERT`、`UPDATE`、または`DELETE`を許可）ですか？",
                body: "ビューの定義は何に基づいている必要がありますか？",
                solution: "ビューは通常、**単一のベーステーブル**に基づいている場合、集計関数（`SUM`、`COUNT`など）を含まない場合、およびベーステーブルの主キーを隠す`GROUP BY`、`UNION`、または複雑な結合を使用しない場合にのみ更新可能です。"
            },
            vi: {
                title: "Trong điều kiện chung nào thì một **View** (Khung nhìn) trong SQL thường có thể được cập nhật (cho phép `INSERT`, `UPDATE`, hoặc `DELETE`)?",
                body: "Định nghĩa View phải dựa trên cái gì?",
                solution: "View thường chỉ có thể cập nhật được nếu nó dựa trên **một bảng cơ sở duy nhất**, không chứa các hàm tổng hợp (`SUM`, `COUNT`, v.v.), và không sử dụng `GROUP BY`, `UNION`, hoặc các phép join phức tạp làm ẩn khóa chính của bảng cơ sở."
            }
        }
    },
    {
        _id: "rdbms-j-016",
        difficulty: "junior",
        tags: ["subquery", "where", "in", "vs", "join"],
        content: {
            en: {
                title: "In terms of performance and style, when is it generally better to use a **JOIN** over a subquery in the `WHERE` clause (using `IN`)?",
                body: "Which method is often optimized better by the database engine?",
                solution: "It is generally better to use a **JOIN** when retrieving data from both tables or when dealing with large datasets. Database engines are often better optimized to execute JOIN operations efficiently compared to subqueries in the `WHERE` clause."
            },
            jp: {
                title: "パフォーマンスとスタイルの観点から、`WHERE`句のサブクエリ（`IN`を使用）よりも**JOIN**を使用する方が一般的に優れているのはいつですか？",
                body: "データベースエンジンによって、どちらの方法がより良く最適化されることが多いですか？",
                solution: "両方のテーブルからデータを取得する場合や、大規模なデータセットを扱う場合は、一般的に**JOIN**を使用する方が優れています。データベースエンジンは、`WHERE`句のサブクエリと比較して、JOIN操作を効率的に実行するように最適化されていることがよくあります。"
            },
            vi: {
                title: "Về hiệu suất và phong cách, khi nào thì thường tốt hơn khi sử dụng **JOIN** thay vì subquery trong mệnh đề `WHERE` (sử dụng `IN`)?",
                body: "Phương pháp nào thường được công cụ cơ sở dữ liệu tối ưu hóa tốt hơn?",
                solution: "Nói chung, tốt hơn nên sử dụng **JOIN** khi truy xuất dữ liệu từ cả hai bảng hoặc khi xử lý các tập dữ liệu lớn. Các công cụ cơ sở dữ liệu thường được tối ưu hóa tốt hơn để thực thi các thao tác JOIN một cách hiệu quả so với các subquery trong mệnh đề `WHERE`."
            }
        }
    },
    {
        _id: "rdbms-j-017",
        difficulty: "junior",
        tags: ["sql", "operators", "exist", "subquery"],
        content: {
            en: {
                title: "What is the purpose of the **`EXISTS`** operator in SQL, and what does it check for?",
                body: "Does it return data or a boolean result?",
                solution: "`EXISTS` is used to test for the **existence of any record** in a subquery. It returns `TRUE` if the subquery returns one or more rows, and `FALSE` otherwise. It doesn't return the data itself."
            },
            jp: {
                title: "SQLにおける**`EXISTS`**演算子の目的は何ですか、そしてそれは何をチェックしますか？",
                body: "データまたはブール値を返しますか？",
                solution: "`EXISTS`は、サブクエリ内の**レコードの存在**をテストするために使用されます。サブクエリが1行以上を返す場合は`TRUE`を返し、それ以外の場合は`FALSE`を返します。データ自体は返しません。"
            },
            vi: {
                title: "Mục đích của toán tử **`EXISTS`** trong SQL là gì, và nó kiểm tra điều gì?",
                body: "Nó trả về dữ liệu hay một kết quả boolean?",
                solution: "`EXISTS` được sử dụng để kiểm tra **sự tồn tại của bất kỳ bản ghi nào** trong một subquery. Nó trả về `TRUE` nếu subquery trả về một hoặc nhiều hàng, và `FALSE` nếu không. Nó không trả về bản thân dữ liệu."
            }
        }
    },
    {
        _id: "rdbms-j-018",
        difficulty: "junior",
        tags: ["sql", "set operators", "union", "union all"],
        content: {
            en: {
                title: "What is the key difference between the set operators **`UNION`** and **`UNION ALL`**?",
                body: "Which one handles duplicates, and how?",
                solution: "**`UNION`** combines the results of two or more `SELECT` statements and **removes duplicate rows**. **`UNION ALL`** combines the results but **includes all duplicate rows** (which is typically faster)."
            },
            jp: {
                title: "集合演算子**`UNION`**と**`UNION ALL`**の主な違いは何ですか？",
                body: "どちらが重複を処理し、どのように処理しますか？",
                solution: "**`UNION`** は2つ以上の`SELECT`ステートメントの結果を結合し、**重複行を削除します**。**`UNION ALL`** は結果を結合しますが、**すべての重複行を含めます**（これは通常高速です）。"
            },
            vi: {
                title: "Sự khác biệt chính giữa các toán tử tập hợp **`UNION`** và **`UNION ALL`** là gì?",
                body: "Toán tử nào xử lý các bản ghi trùng lặp, và xử lý như thế nào?",
                solution: "**`UNION`** kết hợp kết quả của hai hoặc nhiều câu lệnh `SELECT` và **loại bỏ các hàng trùng lặp**. **`UNION ALL`** kết hợp kết quả nhưng **bao gồm tất cả các hàng trùng lặp** (thường nhanh hơn)."
            }
        }
    },
    {
        _id: "rdbms-j-019",
        difficulty: "junior",
        tags: ["sql", "set operators", "intersect", "minus"],
        content: {
            en: {
                title: "Briefly describe the function of the set operators **`INTERSECT`** and **`EXCEPT`** (or `MINUS` in Oracle).",
                body: "What rows do they return?",
                solution: "**`INTERSECT`** returns only the rows that are **common** to both `SELECT` statements. **`EXCEPT`** (or `MINUS`) returns the rows returned by the first query that are **not** returned by the second query."
            },
            jp: {
                title: "集合演算子**`INTERSECT`**と**`EXCEPT`**（またはOracleの`MINUS`）の機能を簡潔に説明してください。",
                body: "それらはどの行を返しますか？",
                solution: "**`INTERSECT`** は、両方の`SELECT`ステートメントに**共通**する行のみを返します。**`EXCEPT`**（または`MINUS`）は、2番目のクエリでは返されない、最初のクエリによって返された行を返します。"
            },
            vi: {
                title: "Mô tả ngắn gọn chức năng của các toán tử tập hợp **`INTERSECT`** và **`EXCEPT`** (hoặc `MINUS` trong Oracle).",
                body: "Chúng trả về những hàng nào?",
                solution: "**`INTERSECT`** chỉ trả về các hàng **chung** cho cả hai câu lệnh `SELECT`. **`EXCEPT`** (hoặc `MINUS`) trả về các hàng được trả về bởi truy vấn đầu tiên mà **không** được trả về bởi truy vấn thứ hai."
            }
        }
    },
    {
        _id: "rdbms-j-020",
        difficulty: "junior",
        tags: ["data type", "varchar", "char", "difference"],
        content: {
            en: {
                title: "What is the key difference between the SQL data types **`VARCHAR(N)`** and **`CHAR(N)`**?",
                body: "Which one is fixed-length, and how does the other manage space?",
                solution: "**`CHAR(N)`** is **fixed-length**; it always reserves N characters and pads shorter strings with spaces. **`VARCHAR(N)`** is **variable-length**; it only uses the space needed to store the actual string, saving storage space."
            },
            jp: {
                title: "SQLデータ型**`VARCHAR(N)`**と**`CHAR(N)`**の主な違いは何ですか？",
                body: "どちらが固定長で、もう一方はスペースをどのように管理しますか？",
                solution: "**`CHAR(N)`** は**固定長**です。常にN文字を予約し、短い文字列をスペースで埋めます。**`VARCHAR(N)`** は**可変長**です。実際の文字列を格納するために必要なスペースのみを使用し、ストレージスペースを節約します。"
            },
            vi: {
                title: "Sự khác biệt chính giữa các kiểu dữ liệu SQL **`VARCHAR(N)`** và **`CHAR(N)`** là gì?",
                body: "Kiểu nào có độ dài cố định, và kiểu còn lại quản lý không gian như thế nào?",
                solution: "**`CHAR(N)`** là **độ dài cố định**; nó luôn dự trữ N ký tự và đệm các chuỗi ngắn hơn bằng khoảng trắng. **`VARCHAR(N)`** là **độ dài thay đổi**; nó chỉ sử dụng không gian cần thiết để lưu trữ chuỗi thực tế, tiết kiệm không gian lưu trữ."
            }
        }
    },
    {
        _id: "rdbms-j-021",
        difficulty: "junior",
        tags: ["data type", "date", "datetime", "timestamp"],
        content: {
            en: {
                title: "In some RDBMS, what is the key difference between **`DATETIME`** and **`TIMESTAMP`** data types?",
                body: "Which one automatically converts to a UTC value upon storage?",
                solution: "**`DATETIME`** stores the year, month, day, hour, minute, and second *as is*. **`TIMESTAMP`** often automatically converts and stores the value in UTC, and converts it back to the local time zone upon retrieval."
            },
            jp: {
                title: "一部のRDBMSで、**`DATETIME`**と**`TIMESTAMP`**データ型の主な違いは何ですか？",
                body: "どちらが格納時に自動的にUTC値に変換されますか？",
                solution: "**`DATETIME`** は、年、月、日、時、分、秒を*そのまま*格納します。**`TIMESTAMP`** は、格納時に自動的に値をUTCに変換して格納し、取得時にローカルタイムゾーンに変換して戻すことがよくあります。"
            },
            vi: {
                title: "Trong một số RDBMS, sự khác biệt chính giữa các kiểu dữ liệu **`DATETIME`** và **`TIMESTAMP`** là gì?",
                body: "Kiểu nào tự động chuyển đổi sang giá trị UTC khi lưu trữ?",
                solution: "**`DATETIME`** lưu trữ năm, tháng, ngày, giờ, phút và giây *nguyên trạng*. **`TIMESTAMP`** thường tự động chuyển đổi và lưu trữ giá trị ở UTC, và chuyển đổi lại về múi giờ địa phương khi truy xuất."
            }
        }
    },
    {
        _id: "rdbms-j-022",
        difficulty: "junior",
        tags: ["sql", "ranking", "dense rank"],
        content: {
            en: {
                title: "How does the SQL function **`DENSE_RANK()`** handle ties compared to `RANK()`?",
                body: "Does it skip rank numbers after a tie?",
                solution: "`DENSE_RANK()` assigns the same rank number to tied rows, but unlike `RANK()`, it **does not skip subsequent rank numbers**. The next rank is always the previous rank + 1."
            },
            jp: {
                title: "SQL関数**`DENSE_RANK()`**は、`RANK()`と比較してタイをどのように扱いますか？",
                body: "タイの後にランク番号をスキップしますか？",
                solution: "`DENSE_RANK()` はタイになった行に同じランク番号を割り当てますが、`RANK()`とは異なり、**後続のランク番号をスキップしません**。次のランクは常に前のランク + 1 です。"
            },
            vi: {
                title: "Hàm SQL **`DENSE_RANK()`** xử lý các trường hợp hòa như thế nào so với `RANK()`?",
                body: "Nó có bỏ qua các số thứ hạng sau một trường hợp hòa không?",
                solution: "`DENSE_RANK()` gán cùng một số thứ hạng cho các hàng hòa, nhưng không giống như `RANK()`, nó **không bỏ qua các số thứ hạng tiếp theo**. Thứ hạng tiếp theo luôn là thứ hạng trước đó + 1."
            }
        }
    },
    {
        _id: "rdbms-j-023",
        difficulty: "junior",
        tags: ["sql", "case", "conditional logic"],
        content: {
            en: {
                title: "What is the primary use case for the SQL **`CASE`** expression?",
                body: "What kind of logic does it allow you to implement?",
                solution: "The `CASE` expression is used to implement **conditional (if/then/else) logic** in SQL queries. It allows you to return different values based on different conditions, often used for creating calculated columns."
            },
            jp: {
                title: "SQLの**`CASE`**式の主な使用例は何ですか？",
                body: "どのような種類のロジックを実装できますか？",
                solution: "`CASE`式は、SQLクエリで**条件付き（if/then/else）ロジック**を実装するために使用されます。異なる条件に基づいて異なる値を返すことができ、計算列を作成するためによく使用されます。"
            },
            vi: {
                title: "Trường hợp sử dụng chính cho biểu thức **`CASE`** trong SQL là gì?",
                body: "Nó cho phép bạn triển khai loại logic nào?",
                solution: "Biểu thức `CASE` được sử dụng để triển khai **logic điều kiện (if/then/else)** trong các truy vấn SQL. Nó cho phép bạn trả về các giá trị khác nhau dựa trên các điều kiện khác nhau, thường được sử dụng để tạo các cột tính toán."
            }
        }
    },
    {
        _id: "rdbms-j-024",
        difficulty: "junior",
        tags: ["rdbms", "oltp", "olap"],
        content: {
            en: {
                title: "Briefly explain the difference between **OLTP** (Online Transaction Processing) and **OLAP** (Online Analytical Processing).",
                body: "What is the focus of each?",
                solution: "**OLTP** focuses on **transaction-oriented** tasks (inserts, updates, deletes) in real-time, often normalized databases (e.g., e-commerce orders). **OLAP** focuses on **complex queries** for business intelligence and analytics, typically in de-normalized data warehouses."
            },
            jp: {
                title: "**OLTP**（オンライン・トランザクション処理）と**OLAP**（オンライン分析処理）の違いを簡潔に説明してください。",
                body: "それぞれの焦点は何ですか？",
                solution: "**OLTP**は、リアルタイムでの**トランザクション指向**のタスク（挿入、更新、削除）に焦点を当てており、しばしば正規化されたデータベース（例: eコマースの注文）です。**OLAP**は、ビジネスインテリジェンスと分析のための**複雑なクエリ**に焦点を当てており、通常は非正規化されたデータウェアハウスで行われます。"
            },
            vi: {
                title: "Giải thích ngắn gọn sự khác biệt giữa **OLTP** (Online Transaction Processing - Xử lý Giao dịch Trực tuyến) và **OLAP** (Online Analytical Processing - Xử lý Phân tích Trực tuyến).",
                body: "Trọng tâm của mỗi loại là gì?",
                solution: "**OLTP** tập trung vào các tác vụ **hướng giao dịch** (thêm, cập nhật, xóa) trong thời gian thực, thường là các cơ sở dữ liệu đã được chuẩn hóa (ví dụ: đơn đặt hàng thương mại điện tử). **OLAP** tập trung vào **các truy vấn phức tạp** cho thông minh kinh doanh và phân tích, thường là trong các kho dữ liệu đã được phi chuẩn hóa."
            }
        }
    },
    {
        _id: "rdbms-j-025",
        difficulty: "junior",
        tags: ["constraint", "check", "integrity"],
        content: {
            en: {
                title: "What is the purpose of the **`CHECK`** constraint in a table definition?",
                body: "What kind of data integrity does it enforce?",
                solution: "The `CHECK` constraint is used to **limit the range of values** that can be placed in a column. It enforces domain integrity, ensuring that data meets a specified Boolean expression (e.g., `Price > 0`)."
            },
            jp: {
                title: "テーブル定義における**`CHECK`**制約の目的は何ですか？",
                body: "どのような種類のデータ整合性を強制しますか？",
                solution: "`CHECK`制約は、列に配置できる**値の範囲を制限する**ために使用されます。これはドメイン整合性を強制し、データが指定されたブール式（例: `Price > 0`）を満たすことを保証します。"
            },
            vi: {
                title: "Mục đích của ràng buộc **`CHECK`** trong định nghĩa bảng là gì?",
                body: "Nó thực thi loại tính toàn vẹn dữ liệu nào?",
                solution: "Ràng buộc `CHECK` được sử dụng để **giới hạn phạm vi giá trị** có thể được đặt trong một cột. Nó thực thi tính toàn vẹn miền (domain integrity), đảm bảo rằng dữ liệu đáp ứng một biểu thức Boolean được chỉ định (ví dụ: `Price > 0`)."
            }
        }
    },
    {
        _id: "rdbms-j-026",
        difficulty: "junior",
        tags: ["transaction", "isolation level", "concurrency"],
        content: {
            en: {
                title: "What is the purpose of **Isolation Levels** in transaction management?",
                body: "How do they manage concurrency and data consistency?",
                solution: "Isolation Levels define **how and when changes made by one transaction become visible to others**. They balance the need for high **concurrency** (allowing many users simultaneously) against the need for high **data consistency** (preventing dirty reads, non-repeatable reads, and phantom reads)."
            },
            jp: {
                title: "トランザクション管理における**隔離レベル**の目的は何ですか？",
                body: "それらは並行性とデータ一貫性をどのように管理しますか？",
                solution: "隔離レベルは、**あるトランザクションによって行われた変更が他のトランザクションにいつ、どのように可視になるか**を定義します。これらは、高い**並行性**（多くのユーザーを同時に許可する）の必要性と、高い**データ一貫性**（ダーティリード、反復不可能なリード、ファントムリードを防ぐ）の必要性のバランスを取ります。"
            },
            vi: {
                title: "Mục đích của **Isolation Levels** (Mức độ Cô lập) trong quản lý giao dịch là gì?",
                body: "Chúng quản lý tính đồng thời và tính nhất quán dữ liệu như thế nào?",
                solution: "Mức độ Cô lập định nghĩa **cách thức và thời điểm các thay đổi được thực hiện bởi một giao dịch trở nên hiển thị đối với các giao dịch khác**. Chúng cân bằng nhu cầu về **tính đồng thời** cao (cho phép nhiều người dùng đồng thời) với nhu cầu về **tính nhất quán dữ liệu** cao (ngăn chặn các lỗi dirty read, non-repeatable read và phantom read)."
            }
        }
    },
    {
        _id: "rdbms-j-027",
        difficulty: "junior",
        tags: ["sql", "conditional", "coalesce", "null"],
        content: {
            en: {
                title: "What is the function of the SQL function **`COALESCE()`**?",
                body: "What value does it return from a list of expressions?",
                solution: "The `COALESCE()` function returns the **first non-null expression** in its list of arguments. It is commonly used to substitute a default value when a column might otherwise contain NULL."
            },
            jp: {
                title: "SQL関数**`COALESCE()`**の機能は何ですか？",
                body: "式のリストからどの値を返しますか？",
                solution: "`COALESCE()`関数は、引数のリストの中で**最初の非NULLの式**を返します。列がNULLを含む可能性がある場合に、デフォルト値を代入するためによく使用されます。"
            },
            vi: {
                title: "Chức năng của hàm SQL **`COALESCE()`** là gì?",
                body: "Nó trả về giá trị nào từ một danh sách các biểu thức?",
                solution: "Hàm `COALESCE()` trả về **biểu thức không phải NULL đầu tiên** trong danh sách các đối số của nó. Nó thường được sử dụng để thay thế một giá trị mặc định khi một cột có thể chứa NULL."
            }
        }
    },
    {
        _id: "rdbms-j-028",
        difficulty: "junior",
        tags: ["data modeling", "erd", "notation"],
        content: {
            en: {
                title: "In Entity-Relationship Diagrams (ERD), what does the **Crow's Foot notation** represent on a relationship line?",
                body: "How is the 'many' side of a relationship represented?",
                solution: "The Crow's Foot notation (three lines/prongs) is used to represent the **'many'** side of a relationship (e.g., One-to-Many or Many-to-Many)."
            },
            jp: {
                title: "実体関連図（ERD）において、**Crow's Foot表記**はリレーションシップ線上で何を表しますか？",
                body: "リレーションシップの「多」側はどのように表されますか？",
                solution: "Crow's Foot表記（3本の線/突起）は、リレーションシップの**「多」**側を表すために使用されます（例: 1対多または多対多）。"
            },
            vi: {
                title: "Trong Sơ đồ Thực thể-Mối quan hệ (ERD), **ký hiệu Chân Quạ (Crow's Foot)** đại diện cho điều gì trên một đường quan hệ?",
                body: "Phía 'nhiều' của một quan hệ được đại diện như thế nào?",
                solution: "Ký hiệu Chân Quạ (ba đường/chấu) được sử dụng để đại diện cho phía **'nhiều'** của một quan hệ (ví dụ: Một-nhiều hoặc Nhiều-nhiều)."
            }
        }
    },
    {
        _id: "rdbms-j-029",
        difficulty: "junior",
        tags: ["sql", "dml", "upsert", "merge"],
        content: {
            en: {
                title: "Which single SQL command is often used to perform an **'UPSERT'** operation (either INSERT a new row or UPDATE an existing row) based on a condition?",
                body: "Name the command available in Oracle/SQL Server or the equivalent concept in MySQL/PostgreSQL.",
                solution: "The **`MERGE`** statement (in SQL Server/Oracle) or the **`INSERT ... ON DUPLICATE KEY UPDATE`** (in MySQL) or **`INSERT ... ON CONFLICT`** (in PostgreSQL)."
            },
            jp: {
                title: "条件に基づいて**「UPSERT」**操作（新しい行をINSERTするか、既存の行をUPDATEする）を実行するために一般的に使用される単一のSQLコマンドは何ですか？",
                body: "Oracle/SQL Serverで利用可能なコマンド、またはMySQL/PostgreSQLでの同等の概念の名前を挙げてください。",
                solution: "**`MERGE`** ステートメント（SQL Server/Oracle）または **`INSERT ... ON DUPLICATE KEY UPDATE`** （MySQL）または **`INSERT ... ON CONFLICT`** （PostgreSQL）。"
            },
            vi: {
                title: "Lệnh SQL đơn nào thường được sử dụng để thực hiện thao tác **'UPSERT'** (hoặc INSERT một hàng mới hoặc UPDATE một hàng hiện có) dựa trên một điều kiện?",
                body: "Nêu tên lệnh có sẵn trong Oracle/SQL Server hoặc khái niệm tương đương trong MySQL/PostgreSQL.",
                solution: "Câu lệnh **`MERGE`** (trong SQL Server/Oracle) hoặc **`INSERT ... ON DUPLICATE KEY UPDATE`** (trong MySQL) hoặc **`INSERT ... ON CONFLICT`** (trong PostgreSQL)."
            }
        }
    },
    {
        _id: "rdbms-j-030",
        difficulty: "junior",
        tags: ["key", "surrogate key", "natural key"],
        content: {
            en: {
                title: "What is the difference between a **Natural Key** and a **Surrogate Key**?",
                body: "Which one is derived from business data?",
                solution: "A **Natural Key** is a column (or columns) that exists and is meaningful in the real world (e.g., Social Security Number, Email). A **Surrogate Key** is an artificially created column (e.g., an auto-incremented ID) that has no external meaning, used solely for primary key purposes."
            },
            jp: {
                title: "**ナチュラルキー**と**サロゲートキー**の違いは何ですか？",
                body: "どちらがビジネスデータから派生していますか？",
                solution: "**ナチュラルキー**は、現実の世界に存在し、意味を持つ列（または列の組み合わせ）です（例: 社会保障番号、Eメール）。**サロゲートキー**は、外部的な意味を持たない人工的に作成された列（例: 自動インクリメントID）であり、主キーの目的でのみ使用されます。"
            },
            vi: {
                title: "Sự khác biệt giữa **Natural Key** (Khóa Tự nhiên) và **Surrogate Key** (Khóa Thay thế) là gì?",
                body: "Khóa nào được lấy từ dữ liệu nghiệp vụ?",
                solution: "**Natural Key** là một cột (hoặc nhiều cột) tồn tại và có ý nghĩa trong thế giới thực (ví dụ: Số An sinh Xã hội, Email). **Surrogate Key** là một cột được tạo ra một cách nhân tạo (ví dụ: ID tự tăng) không có ý nghĩa bên ngoài, chỉ được sử dụng cho mục đích khóa chính."
            }
        }
    },
    {
        _id: "rdbms-j-031",
        difficulty: "junior",
        tags: ["sql", "window function", "partition by"],
        content: {
            en: {
                title: "What is the purpose of the **`PARTITION BY`** clause when used with SQL Window Functions?",
                body: "How does it divide the result set?",
                solution: "The `PARTITION BY` clause divides the result set into **partitions (groups)**. The window function (like `RANK` or `AVG`) is then applied independently to each partition, effectively resetting the calculation for each group."
            },
            jp: {
                title: "SQLウィンドウ関数で使用される**`PARTITION BY`**句の目的は何ですか？",
                body: "結果セットをどのように分割しますか？",
                solution: "`PARTITION BY`句は、結果セットを**パーティション（グループ）**に分割します。その後、ウィンドウ関数（`RANK`や`AVG`など）が各パーティションに独立して適用され、各グループに対して計算が効果的にリセットされます。"
            },
            vi: {
                title: "Mục đích của mệnh đề **`PARTITION BY`** khi được sử dụng với SQL Window Functions là gì?",
                body: "Nó chia tập kết quả như thế nào?",
                solution: "Mệnh đề `PARTITION BY` chia tập kết quả thành các **phân vùng (nhóm)**. Hàm cửa sổ (như `RANK` hoặc `AVG`) sau đó được áp dụng độc lập cho từng phân vùng, làm cho phép tính được thiết lập lại hiệu quả cho mỗi nhóm."
            }
        }
    },
    {
        _id: "rdbms-j-032",
        difficulty: "junior",
        tags: ["sql", "limit", "fetch", "top"],
        content: {
            en: {
                title: "Name the three common, vendor-specific clauses used to limit the number of rows returned by a query (e.g., MySQL, SQL Server, standard SQL).",
                body: "List the keywords for limiting rows.",
                solution: "1. **`LIMIT`** (MySQL, PostgreSQL), 2. **`TOP`** (SQL Server, MS Access), 3. **`FETCH FIRST N ROWS ONLY`** (standard SQL, Oracle)."
            },
            jp: {
                title: "クエリによって返される行数を制限するために使用される、一般的なベンダー固有の3つの句の名前を挙げてください（例: MySQL、SQL Server、標準SQL）。",
                body: "行を制限するためのキーワードをリストしてください。",
                solution: "1. **`LIMIT`** (MySQL, PostgreSQL), 2. **`TOP`** (SQL Server, MS Access), 3. **`FETCH FIRST N ROWS ONLY`** (標準SQL, Oracle)."
            },
            vi: {
                title: "Nêu tên ba mệnh đề phổ biến, dành riêng cho nhà cung cấp, được sử dụng để giới hạn số lượng hàng được trả về bởi một truy vấn (ví dụ: MySQL, SQL Server, SQL tiêu chuẩn).",
                body: "Liệt kê các từ khóa để giới hạn các hàng.",
                solution: "1. **`LIMIT`** (MySQL, PostgreSQL), 2. **`TOP`** (SQL Server, MS Access), 3. **`FETCH FIRST N ROWS ONLY`** (SQL tiêu chuẩn, Oracle)."
            }
        }
    },
    {
        _id: "rdbms-j-033",
        difficulty: "junior",
        tags: ["sql", "ddl", "dcl", "grant", "revoke"],
        content: {
            en: {
                title: "What is the purpose of the SQL **DCL** (Data Control Language) commands `GRANT` and `REVOKE`?",
                body: "What resources do they control?",
                solution: "`GRANT` and `REVOKE` are used to **manage database permissions** (privileges). `GRANT` gives a user permission to perform an action (like `SELECT` or `INSERT`), and `REVOKE` removes those permissions."
            },
            jp: {
                title: "SQLの**DCL**（データ制御言語）コマンド`GRANT`と`REVOKE`の目的は何ですか？",
                body: "それらはどのリソースを制御しますか？",
                solution: "`GRANT`と`REVOKE`は、**データベースの権限**（特権）を管理するために使用されます。`GRANT`はユーザーにアクションを実行する権限（`SELECT`や`INSERT`など）を与え、`REVOKE`はそれらの権限を取り消します。"
            },
            vi: {
                title: "Mục đích của các lệnh **DCL** (Data Control Language - Ngôn ngữ Kiểm soát Dữ liệu) `GRANT` và `REVOKE` trong SQL là gì?",
                body: "Chúng kiểm soát những tài nguyên nào?",
                solution: "`GRANT` và `REVOKE` được sử dụng để **quản lý các quyền (đặc quyền) cơ sở dữ liệu**. `GRANT` cấp cho người dùng quyền thực hiện một hành động (như `SELECT` hoặc `INSERT`), và `REVOKE` thu hồi những quyền đó."
            }
        }
    },
    {
        _id: "rdbms-j-034",
        difficulty: "junior",
        tags: ["sql", "dml", "delete", "foreign key"],
        content: {
            en: {
                title: "When attempting to `DELETE` a row from a parent table, what is the default behavior if the primary key of that row is referenced by a Foreign Key in a child table?",
                body: "What error/restriction is typically encountered?",
                solution: "The operation will typically **fail** with a foreign key constraint violation error. By default, RDBMS prevents the deletion of parent records that have dependent child records (ensuring referential integrity)."
            },
            jp: {
                title: "親テーブルから行を`DELETE`しようとしたときに、その行の主キーが子テーブルの外部キーによって参照されている場合、デフォルトの動作は何ですか？",
                body: "通常、どのようなエラー/制限に遭遇しますか？",
                solution: "操作は通常、外部キー制約違反エラーで**失敗**します。デフォルトでは、RDBMSは依存する子レコードを持つ親レコードの削除を防ぎます（参照整合性を保証します）。"
            },
            vi: {
                title: "Khi cố gắng `DELETE` một hàng từ bảng cha, hành vi mặc định là gì nếu khóa chính của hàng đó được tham chiếu bởi Khóa Ngoại trong bảng con?",
                body: "Lỗi/hạn chế nào thường gặp phải?",
                solution: "Thao tác thường sẽ **thất bại** với lỗi vi phạm ràng buộc khóa ngoại. Theo mặc định, RDBMS ngăn chặn việc xóa các bản ghi cha có các bản ghi con phụ thuộc (đảm bảo tính toàn vẹn tham chiếu)."
            }
        }
    },
    {
        _id: "rdbms-j-035",
        difficulty: "junior",
        tags: ["sql", "foreign key", "on delete cascade"],
        content: {
            en: {
                title: "How can you modify a Foreign Key constraint to automatically remove dependent child rows when the parent row is deleted?",
                body: "What clause is added to the Foreign Key definition?",
                solution: "By adding the **`ON DELETE CASCADE`** clause to the Foreign Key definition. This instructs the RDBMS to automatically delete all dependent child rows when the parent row is deleted."
            },
            jp: {
                title: "親行が削除されたときに、依存する子行を自動的に削除するように外部キー制約を変更するにはどうすればよいですか？",
                body: "外部キー定義に追加される句は何ですか？",
                solution: "外部キー定義に**`ON DELETE CASCADE`**句を追加することによって。これにより、親行が削除されたときに、RDBMSは依存するすべての子行を自動的に削除するように指示されます。"
            },
            vi: {
                title: "Làm thế nào bạn có thể sửa đổi ràng buộc Khóa Ngoại để tự động xóa các hàng con phụ thuộc khi hàng cha bị xóa?",
                body: "Mệnh đề nào được thêm vào định nghĩa Khóa Ngoại?",
                solution: "Bằng cách thêm mệnh đề **`ON DELETE CASCADE`** vào định nghĩa Khóa Ngoại. Điều này hướng dẫn RDBMS tự động xóa tất cả các hàng con phụ thuộc khi hàng cha bị xóa."
            }
        }
    },
    {
        _id: "rdbms-j-036",
        difficulty: "junior",
        tags: ["sql", "numeric function", "round", "ceiling"],
        content: {
            en: {
                title: "What is the difference between the SQL numeric functions **`ROUND()`** and **`CEILING()`**?",
                body: "Which one rounds up to the next integer, and which one rounds to the nearest number of decimal places?",
                solution: "**`ROUND()`** rounds a number to a specified number of decimal places or to the nearest integer. **`CEILING()`** returns the smallest integer value that is greater than or equal to the numeric expression (always rounds up)."
            },
            jp: {
                title: "SQLの数値関数**`ROUND()`**と**`CEILING()`**の違いは何ですか？",
                body: "どちらが次の整数に切り上げ、どちらが最も近い小数点以下の桁数に丸めますか？",
                solution: "**`ROUND()`** は、数値を指定された小数点以下の桁数または最も近い整数に丸めます。**`CEILING()`** は、数値式以上の最小の整数値を返します（常に切り上げます）。"
            },
            vi: {
                title: "Sự khác biệt giữa các hàm số học SQL **`ROUND()`** và **`CEILING()`** là gì?",
                body: "Hàm nào làm tròn lên số nguyên tiếp theo, và hàm nào làm tròn đến số chữ số thập phân gần nhất?",
                solution: "**`ROUND()`** làm tròn một số đến số chữ số thập phân được chỉ định hoặc đến số nguyên gần nhất. **`CEILING()`** trả về giá trị số nguyên nhỏ nhất lớn hơn hoặc bằng biểu thức số (luôn làm tròn lên)."
            }
        }
    },
    {
        _id: "rdbms-j-037",
        difficulty: "junior",
        tags: ["database", "integrity", "referential", "domain"],
        content: {
            en: {
                title: "What are the three main types of data integrity (beyond entity integrity)?",
                body: "List the three other types of data integrity constraints.",
                solution: "1. **Referential Integrity** (enforced by Foreign Keys), 2. **Domain Integrity** (enforced by `CHECK` constraints, `NOT NULL`, and data types), and 3. **User-Defined Integrity** (enforced by business rules/Stored Procedures)."
            },
            jp: {
                title: "データエンティティ整合性以外の、データの整合性の3つの主要なタイプは何ですか？",
                body: "データの整合性制約の他の3つのタイプをリストしてください。",
                solution: "1. **Referential Integrity**（参照整合性、外部キーによって強制される）、2. **Domain Integrity**（ドメイン整合性、`CHECK`制約、`NOT NULL`、およびデータ型によって強制される）、3. **User-Defined Integrity**（ユーザー定義の整合性、ビジネスルール/ストアドプロシージャによって強制される）。"
            }
        }
    },
    {
        _id: "rdbms-j-038",
        difficulty: "junior",
        tags: ["rdbms", "database", "system catalog"],
        content: {
            en: {
                title: "What is the **System Catalog** (or Data Dictionary) in an RDBMS?",
                body: "What kind of metadata does it store?",
                solution: "The System Catalog is a set of tables and views managed by the RDBMS that stores **metadata** (data about the data). It describes the database structure, including table definitions, column types, constraints, user permissions, etc."
            },
            jp: {
                title: "RDBMSにおける**システムカタログ**（またはデータディクショナリ）とは何ですか？",
                body: "どのような種類のメタデータを格納しますか？",
                solution: "システムカタログは、RDBMSによって管理されるテーブルとビューのセットであり、**メタデータ**（データに関するデータ）を格納します。これには、テーブル定義、列型、制約、ユーザー権限などのデータベース構造が記述されています。"
            },
            vi: {
                title: "**System Catalog** (Danh mục Hệ thống) (hoặc Data Dictionary) trong một RDBMS là gì?",
                body: "Nó lưu trữ loại siêu dữ liệu nào?",
                solution: "System Catalog là một tập hợp các bảng và khung nhìn được quản lý bởi RDBMS để lưu trữ **siêu dữ liệu (metadata)** (dữ liệu về dữ liệu). Nó mô tả cấu trúc cơ sở dữ liệu, bao gồm định nghĩa bảng, kiểu cột, ràng buộc, quyền người dùng, v.v."
            }
        }
    },
    {
        _id: "rdbms-j-039",
        difficulty: "junior",
        tags: ["sql", "dml", "transaction", "savepoint"],
        content: {
            en: {
                title: "What is the purpose of a **`SAVEPOINT`** within a transaction?",
                body: "How does it affect the `ROLLBACK` command?",
                solution: "A `SAVEPOINT` is a marker within a transaction that allows a partial `ROLLBACK`. The `ROLLBACK TO SAVEPOINT` command lets you undo changes **up to that specific savepoint**, rather than rolling back the entire transaction."
            },
            jp: {
                title: "トランザクション内での**`SAVEPOINT`**の目的は何ですか？",
                body: "`ROLLBACK`コマンドにどのように影響しますか？",
                solution: "`SAVEPOINT`は、部分的な`ROLLBACK`を可能にするトランザクション内のマーカーです。`ROLLBACK TO SAVEPOINT`コマンドを使用すると、トランザクション全体をロールバックするのではなく、**その特定のセーブポイントまでの**変更を元に戻すことができます。"
            },
            vi: {
                title: "Mục đích của **`SAVEPOINT`** trong một giao dịch là gì?",
                body: "Nó ảnh hưởng đến lệnh `ROLLBACK` như thế nào?",
                solution: "`SAVEPOINT` là một điểm đánh dấu trong một giao dịch cho phép thực hiện `ROLLBACK` một phần. Lệnh `ROLLBACK TO SAVEPOINT` cho phép bạn hoàn tác các thay đổi **cho đến điểm lưu cụ thể đó**, thay vì hoàn tác toàn bộ giao dịch."
            }
        }
    },
    {
        _id: "rdbms-j-040",
        difficulty: "junior",
        tags: ["sql", "window function", "aggregate", "comparison"],
        content: {
            en: {
                title: "What is the main advantage of using an aggregate function as a **Window Function** (with `OVER()`) instead of the `GROUP BY` clause?",
                body: "How does the result set differ?",
                solution: "Window Functions perform aggregation **without collapsing the individual rows** into a single output row. They allow you to view the aggregate value (e.g., average salary) alongside the details of each individual row."
            },
            jp: {
                title: "集計関数を`GROUP BY`句の代わりに**ウィンドウ関数**（`OVER()`を使用）として使用する主な利点は何ですか？",
                body: "結果セットはどのように異なりますか？",
                solution: "ウィンドウ関数は、個々の行を単一の出力行に**折りたたむことなく**集計を実行します。これにより、個々の行の詳細と並行して集計値（例: 平均給与）を表示できます。"
            },
            vi: {
                title: "Lợi thế chính của việc sử dụng một hàm tổng hợp như là **Window Function** (với `OVER()`) thay vì mệnh đề `GROUP BY` là gì?",
                body: "Tập kết quả khác nhau như thế nào?",
                solution: "Window Functions thực hiện tổng hợp **mà không làm gộp các hàng riêng lẻ** thành một hàng kết quả duy nhất. Chúng cho phép bạn xem giá trị tổng hợp (ví dụ: mức lương trung bình) cùng với các chi tiết của từng hàng riêng lẻ."
            }
        }
    },
    {
        _id: "rdbms-j-041",
        difficulty: "junior",
        tags: ["sql", "string function", "substring", "length"],
        content: {
            en: {
                title: "Describe the function of the SQL string function **`SUBSTRING(string, start, length)`**.",
                body: "What do the three arguments represent?",
                solution: "The function extracts a **substring** of a specified length from a string, starting from a specified position. `string` is the input string, `start` is the starting position (usually 1 or 0), and `length` is the number of characters to extract."
            },
            jp: {
                title: "SQL文字列関数**`SUBSTRING(string, start, length)`**の機能を説明してください。",
                body: "3つの引数は何を表していますか？",
                solution: "この関数は、指定された位置から開始して、指定された長さの**部分文字列**を文字列から抽出します。`string`は入力文字列、`start`は開始位置（通常1または0）、`length`は抽出する文字数です。"
            },
            vi: {
                title: "Mô tả chức năng của hàm chuỗi SQL **`SUBSTRING(chuỗi, bắt đầu, độ dài)`**.",
                body: "Ba đối số đại diện cho điều gì?",
                solution: "Hàm này trích xuất một **chuỗi con (substring)** có độ dài được chỉ định từ một chuỗi, bắt đầu từ một vị trí được chỉ định. `chuỗi` là chuỗi đầu vào, `bắt đầu` là vị trí bắt đầu (thường là 1 hoặc 0), và `độ dài` là số ký tự cần trích xuất."
            }
        }
    },
    {
        _id: "rdbms-j-042",
        difficulty: "junior",
        tags: ["sql", "string function", "trim", "space"],
        content: {
            en: {
                title: "Which SQL function is used to remove leading and trailing spaces (or other specified characters) from a string?",
                body: "Name the function used for cleaning up whitespace.",
                solution: "The **`TRIM()`** function (often used as `TRIM(LEADING|TRAILING|BOTH characters FROM string)` or simply `TRIM(string)` to remove all leading/trailing whitespace)."
            },
            jp: {
                title: "文字列から先頭と末尾のスペース（または他の指定された文字）を削除するために使用されるSQL関数は何ですか？",
                body: "空白のクリーンアップに使用される関数の名前を挙げてください。",
                solution: "The **`TRIM()`** function (しばしば `TRIM(LEADING|TRAILING|BOTH characters FROM string)` または単に `TRIM(string)` として使用され、すべての先頭/末尾の空白を削除します）。"
            },
            vi: {
                title: "Hàm SQL nào được sử dụng để loại bỏ khoảng trắng ở đầu và cuối (hoặc các ký tự được chỉ định khác) khỏi một chuỗi?",
                body: "Nêu tên hàm được sử dụng để làm sạch khoảng trắng.",
                solution: "Hàm **`TRIM()`** (thường được sử dụng dưới dạng `TRIM(LEADING|TRAILING|BOTH characters FROM string)` hoặc đơn giản là `TRIM(string)` để loại bỏ tất cả khoảng trắng ở đầu/cuối)."
            }
        }
    },
    {
        _id: "rdbms-j-043",
        difficulty: "junior",
        tags: ["sql", "date function", "datediff", "interval"],
        content: {
            en: {
                title: "How do RDBMS systems typically handle date arithmetic, such as calculating the number of days between two dates or adding an interval (e.g., 30 days) to a date?",
                body: "What is the common term/syntax used for this operation?",
                solution: "They use specific functions like **`DATEDIFF()`** or **`DATE_ADD()`** (MySQL/SQL Server) or the **`INTERVAL`** keyword with basic addition/subtraction operators (PostgreSQL/standard SQL)."
            },
            jp: {
                title: "RDBMSシステムは、2つの日付間の日数を計算したり、日付に間隔（例: 30日）を追加したりするなど、日付の算術を通常どのように処理しますか？",
                body: "この操作に使用される一般的な用語/構文は何ですか？",
                solution: "**`DATEDIFF()`** や **`DATE_ADD()`** などの特定の関数（MySQL/SQL Server）または基本的な加算/減算演算子と組み合わせた**`INTERVAL`**キーワード（PostgreSQL/標準SQL）を使用します。"
            },
            vi: {
                title: "Các hệ thống RDBMS thường xử lý phép toán số học ngày tháng như thế nào, ví dụ như tính toán số ngày giữa hai ngày hoặc thêm một khoảng thời gian (ví dụ: 30 ngày) vào một ngày?",
                body: "Thuật ngữ/cú pháp phổ biến được sử dụng cho thao tác này là gì?",
                solution: "Chúng sử dụng các hàm cụ thể như **`DATEDIFF()`** hoặc **`DATE_ADD()`** (MySQL/SQL Server) hoặc từ khóa **`INTERVAL`** với các toán tử cộng/trừ cơ bản (PostgreSQL/SQL tiêu chuẩn)."
            }
        }
    },
    {
        _id: "rdbms-j-044",
        difficulty: "junior",
        tags: ["sql", "having", "where", "difference"],
        content: {
            en: {
                title: "What is the fundamental rule dictating whether to use the `WHERE` clause or the `HAVING` clause in an SQL query?",
                body: "Which clause is evaluated first, and what does each filter?",
                solution: "**`WHERE`** filters individual **rows** *before* grouping and aggregation occurs. **`HAVING`** filters the aggregated **groups** *after* grouping has occurred. `WHERE` is evaluated first."
            },
            jp: {
                title: "SQLクエリで`WHERE`句または`HAVING`句のどちらを使用するかを決定する基本的なルールは何ですか？",
                body: "どちらの句が最初に評価され、それぞれは何をフィルタリングしますか？",
                solution: "**`WHERE`** は、グループ化と集計が発生する*前に*個々の**行**をフィルタリングします。**`HAVING`** は、グループ化が発生した*後に*集計された**グループ**をフィルタリングします。`WHERE`が最初に評価されます。"
            },
            vi: {
                title: "Quy tắc cơ bản nào chi phối việc sử dụng mệnh đề `WHERE` hay mệnh đề `HAVING` trong một truy vấn SQL?",
                body: "Mệnh đề nào được đánh giá trước, và mỗi mệnh đề lọc cái gì?",
                solution: "**`WHERE`** lọc các **hàng** riêng lẻ *trước khi* việc nhóm và tổng hợp xảy ra. **`HAVING`** lọc các **nhóm** đã được tổng hợp *sau khi* việc nhóm đã xảy ra. `WHERE` được đánh giá trước."
            }
        }
    },
    {
        _id: "rdbms-j-045",
        difficulty: "junior",
        tags: ["sql", "case", "searched", "simple"],
        content: {
            en: {
                title: "Explain the difference between a **Simple CASE** expression and a **Searched CASE** expression.",
                body: "Which one allows for more complex logical conditions?",
                solution: "A **Simple CASE** compares one expression against several values (e.g., `CASE column WHEN value1 THEN...`). A **Searched CASE** allows for general Boolean conditions for each `WHEN` clause (e.g., `CASE WHEN column > 10 THEN...`), making it more flexible for complex logic."
            },
            jp: {
                title: "**Simple CASE**式と**Searched CASE**式の違いを説明してください。",
                body: "どちらがより複雑な論理条件を許可しますか？",
                solution: "**Simple CASE**は1つの式を複数の値と比較します（例: `CASE column WHEN value1 THEN...`）。**Searched CASE**は、各`WHEN`句に一般的なブール条件を許可し（例: `CASE WHEN column > 10 THEN...`）、複雑なロジックに対してより柔軟性があります。"
            },
            vi: {
                title: "Giải thích sự khác biệt giữa biểu thức **Simple CASE** và biểu thức **Searched CASE**.",
                body: "Biểu thức nào cho phép các điều kiện logic phức tạp hơn?",
                solution: "**Simple CASE** so sánh một biểu thức với nhiều giá trị (ví dụ: `CASE column WHEN value1 THEN...`). **Searched CASE** cho phép các điều kiện Boolean chung cho mỗi mệnh đề `WHEN` (ví dụ: `CASE WHEN column > 10 THEN...`), làm cho nó linh hoạt hơn đối với logic phức tạp."
            }
        }
    },
    {
        _id: "rdbms-j-046",
        difficulty: "junior",
        tags: ["sql", "temporary table", "performance"],
        content: {
            en: {
                title: "What is a **Temporary Table**, and why might a developer use one in a complex Stored Procedure or batch script?",
                body: "What happens to the table after the session ends?",
                solution: "A Temporary Table is a table that exists only for the duration of a database session or transaction. They are used to **store intermediate results** of complex calculations, making the query/script logic simpler, more readable, and often faster than nested subqueries."
            },
            jp: {
                title: "**一時テーブル**とは何ですか、そして開発者が複雑なストアドプロシージャやバッチスクリプトでそれを使用する理由は何ですか？",
                body: "セッションが終了した後、テーブルはどうなりますか？",
                solution: "一時テーブルは、データベースセッションまたはトランザクションの期間のみ存在するテーブルです。これらは、複雑な計算の**中間結果を格納する**ために使用され、クエリ/スクリプトのロジックをよりシンプルで読みやすく、しばしばネストされたサブクエリよりも高速にします。"
            },
            vi: {
                title: "**Temporary Table** (Bảng Tạm thời) là gì, và tại sao một nhà phát triển có thể sử dụng nó trong một Stored Procedure hoặc tập lệnh hàng loạt phức tạp?",
                body: "Điều gì xảy ra với bảng sau khi phiên kết thúc?",
                solution: "Temporary Table là một bảng chỉ tồn tại trong suốt thời gian của một phiên hoặc giao dịch cơ sở dữ liệu. Chúng được sử dụng để **lưu trữ kết quả trung gian** của các phép tính phức tạp, làm cho logic truy vấn/tập lệnh đơn giản hơn, dễ đọc hơn và thường nhanh hơn so với các subquery lồng nhau."
            }
        }
    },
    {
        _id: "rdbms-j-047",
        difficulty: "junior",
        tags: ["database", "schema", "naming convention"],
        content: {
            en: {
                title: "What is the purpose of using a consistent **Naming Convention** (e.g., snake\_case for columns, singular table names) in RDBMS design?",
                body: "How does it improve developer experience?",
                solution: "Consistent Naming Conventions dramatically improve **readability** and **maintainability** of the database schema and SQL code. They reduce ambiguity, speed up onboarding for new developers, and make it easier to predict table/column names."
            },
            jp: {
                title: "RDBMS設計で一貫した**命名規則**（例: 列にはsnake\_case、テーブル名には単数形）を使用する目的は何ですか？",
                body: "それは開発者のエクスペリエンスをどのように向上させますか？",
                solution: "一貫した命名規則は、データベーススキーマとSQLコードの**読みやすさ**と**保守性**を劇的に向上させます。これにより、曖昧さが減り、新しい開発者のオンボーディングが高速化され、テーブル/列の名前を予測しやすくなります。"
            },
            vi: {
                title: "Mục đích của việc sử dụng **Quy ước Đặt tên** (ví dụ: snake\_case cho cột, tên bảng số ít) nhất quán trong thiết kế RDBMS là gì?",
                body: "Nó cải thiện trải nghiệm của nhà phát triển như thế nào?",
                solution: "Quy ước Đặt tên nhất quán giúp cải thiện đáng kể **khả năng đọc** và **khả năng bảo trì** của lược đồ cơ sở dữ liệu và mã SQL. Chúng giảm sự mơ hồ, tăng tốc quá trình làm quen cho các nhà phát triển mới và giúp dễ dàng dự đoán tên bảng/cột hơn."
            }
        }
    },
    {
        _id: "rdbms-j-048",
        difficulty: "junior",
        tags: ["index", "when to use", "trade-off"],
        content: {
            en: {
                title: "When should you **avoid** adding an index to a column, even if it is frequently queried?",
                body: "What is the key trade-off when using indexes?",
                solution: "You should avoid adding indexes on tables that experience **very frequent INSERT/UPDATE/DELETE operations**. The key trade-off is that every index must be updated (re-sorted) whenever data changes, which significantly slows down DML operations."
            },
            jp: {
                title: "頻繁にクエリされる列であっても、インデックスの追加を**避けるべき**なのはいつですか？",
                body: "インデックスを使用する際の主なトレードオフは何ですか？",
                solution: "**非常に頻繁なINSERT/UPDATE/DELETE操作**が発生するテーブルには、インデックスの追加を避けるべきです。主なトレードオフは、データが変更されるたびにすべてのインデックスを更新（再ソート）する必要があるため、DML操作が大幅に遅くなることです。"
            },
            vi: {
                title: "Khi nào bạn **nên tránh** thêm chỉ mục (index) vào một cột, ngay cả khi nó thường xuyên được truy vấn?",
                body: "Sự đánh đổi chính khi sử dụng chỉ mục là gì?",
                solution: "Bạn nên tránh thêm chỉ mục vào các bảng thường xuyên trải qua **các thao tác INSERT/UPDATE/DELETE rất thường xuyên**. Sự đánh đổi chính là mọi chỉ mục phải được cập nhật (sắp xếp lại) bất cứ khi nào dữ liệu thay đổi, điều này làm chậm đáng kể các thao tác DML."
            }
        }
    },
    {
        _id: "rdbms-j-049",
        difficulty: "junior",
        tags: ["performance", "explain", "execution plan"],
        content: {
            en: {
                title: "What is the general name for the SQL tool/command (e.g., `EXPLAIN` or `EXPLAIN PLAN`) used to analyze the performance of a query?",
                body: "What key information does this tool provide?",
                solution: "The tool is called the **Query Optimizer** or the **Execution Plan** generator, typically invoked with commands like **`EXPLAIN`** (PostgreSQL, MySQL) or `EXPLAIN PLAN` (Oracle). It shows how the RDBMS executes the query (e.g., which indexes are used, which tables are scanned)." 
            },
            jp: {
                title: "クエリのパフォーマンスを分析するために使用されるSQLツール/コマンド（例: `EXPLAIN`や`EXPLAIN PLAN`）の一般的な名前は何ですか？",
                body: "このツールはどのような重要な情報を提供しますか？",
                solution: "このツールは、通常**`EXPLAIN`**（PostgreSQL、MySQL）や`EXPLAIN PLAN`（Oracle）などのコマンドで呼び出される**クエリオプティマイザー**または**実行計画**ジェネレーターと呼ばれます。これは、RDBMSがクエリをどのように実行するかを示します（例: どのインデックスが使用され、どのテーブルがスキャンされるか）。"
            },
            vi: {
                title: "Tên chung cho công cụ/lệnh SQL (ví dụ: `EXPLAIN` hoặc `EXPLAIN PLAN`) được sử dụng để phân tích hiệu suất của một truy vấn là gì?",
                body: "Công cụ này cung cấp thông tin quan trọng nào?",
                solution: "Công cụ này được gọi là **Bộ tối ưu hóa truy vấn (Query Optimizer)** hoặc trình tạo **Kế hoạch Thực thi (Execution Plan)**, thường được gọi bằng các lệnh như **`EXPLAIN`** (PostgreSQL, MySQL) hoặc `EXPLAIN PLAN` (Oracle). Nó cho biết RDBMS thực thi truy vấn như thế nào (ví dụ: chỉ mục nào được sử dụng, bảng nào được quét)." 
            }
        }
    },
    {
        _id: "rdbms-j-050",
        difficulty: "junior",
        tags: ["security", "injection", "prevent"],
        content: {
            en: {
                title: "What is the most effective and common technique for preventing **SQL Injection** attacks?",
                body: "Name the concept involving parameters and placeholders.",
                solution: "Using **Parameterized Queries** (also known as Prepared Statements). This separates the SQL command structure from the user-provided data, ensuring that user input is always treated as data, not executable code."
            },
            jp: {
                title: "**SQLインジェクション**攻撃を防ぐための最も効果的で一般的な手法は何ですか？",
                body: "パラメーターとプレースホルダーを含む概念の名前を挙げてください。",
                solution: "**パラメーター化クエリ**（プリペアドステートメントとも呼ばれます）を使用することです。これにより、SQLコマンドの構造がユーザー提供のデータと分離され、ユーザー入力が常にデータとして扱われ、実行可能なコードとして扱われないことが保証されます。"
            },
            vi: {
                title: "Kỹ thuật hiệu quả và phổ biến nhất để ngăn chặn các cuộc tấn công **SQL Injection** là gì?",
                body: "Nêu tên khái niệm liên quan đến tham số và trình giữ chỗ.",
                solution: "Sử dụng **Truy vấn Tham số hóa (Parameterized Queries)** (còn được gọi là Prepared Statements). Điều này tách biệt cấu trúc lệnh SQL khỏi dữ liệu do người dùng cung cấp, đảm bảo rằng đầu vào của người dùng luôn được xử lý dưới dạng dữ liệu, chứ không phải là mã có thể thực thi."
            }
        }
    }
];