export const rdbmsMiddleQuestions = [
    {
        _id: "rdbms-m-001",
        difficulty: "middle",
        tags: ["sql", "join", "performance", "nested loop"],
        content: {
            en: {
                title: "In the context of query optimization, briefly describe how a **Nested Loop Join** works.",
                body: "What is its primary inefficiency with large, unindexed tables?",
                solution: "A Nested Loop Join iterates through the outer table row by row, and for each outer row, it **scans the entire inner table** (or uses an index on the inner table) to find matching rows. Inefficiency arises because the inner table is scanned repeatedly, which is costly if no index is available."
            },
            jp: {
                title: "クエリ最適化の文脈で、**ネストされたループ結合**がどのように機能するかを簡単に説明してください。",
                body: "大規模でインデックスのないテーブルでの主な非効率性は何ですか？",
                solution: "ネストされたループ結合は、外側のテーブルを行ごとに反復処理し、外側の行ごとに、**内側のテーブル全体をスキャン**（または内側のテーブルのインデックスを使用）して一致する行を見つけます。インデックスが利用できない場合、内側のテーブルが繰り返しスキャンされるため、非効率性が生じます。"
            },
            vi: {
                title: "Trong bối cảnh tối ưu hóa truy vấn, mô tả ngắn gọn cách thức hoạt động của **Nested Loop Join** (Join Vòng lặp Lồng nhau).",
                body: "Điểm không hiệu quả chính của nó với các bảng lớn, không có chỉ mục là gì?",
                solution: "Nested Loop Join lặp qua bảng ngoài từng hàng một, và đối với mỗi hàng ngoài, nó **quét toàn bộ bảng trong** (hoặc sử dụng chỉ mục trên bảng trong) để tìm các hàng khớp. Sự không hiệu quả phát sinh vì bảng trong bị quét lặp đi lặp lại, điều này tốn kém nếu không có chỉ mục nào khả dụng."
            }
        }
    },
    {
        _id: "rdbms-m-002",
        difficulty: "middle",
        tags: ["sql", "join", "performance", "hash join"],
        content: {
            en: {
                title: "Briefly describe how a **Hash Join** works and why it is often preferred for large, non-indexed tables.",
                body: "What two phases are involved in a Hash Join?",
                solution: "A Hash Join has two phases: **1. Build Phase:** It builds a hash table on the smaller relation's join keys in memory. **2. Probe Phase:** It scans the larger relation, hashes its join keys, and probes the hash table for matches. It is efficient for large tables because it avoids repeated scans of the inner table."
            },
            jp: {
                title: "**ハッシュ結合**がどのように機能するか、そしてなぜ大規模でインデックスのないテーブルでしばしば好まれるのかを簡単に説明してください。",
                body: "ハッシュ結合に関わる2つのフェーズは何ですか？",
                solution: "ハッシュ結合には2つのフェーズがあります。**1. ビルドフェーズ:** より小さなリレーションの結合キーに基づいてメモリ内にハッシュテーブルを構築します。**2. プローブフェーズ:** より大きなリレーションをスキャンし、その結合キーをハッシュ化し、ハッシュテーブルをプローブして一致を探します。内側のテーブルの繰り返しスキャンを避けるため、大規模なテーブルで効率的です。"
            },
            vi: {
                title: "Mô tả ngắn gọn cách thức hoạt động của **Hash Join** (Join Băm) và tại sao nó thường được ưu tiên cho các bảng lớn, không có chỉ mục.",
                body: "Hai giai đoạn nào liên quan đến Hash Join?",
                solution: "Hash Join có hai giai đoạn: **1. Giai đoạn Xây dựng (Build Phase):** Nó xây dựng một bảng băm dựa trên các khóa join của quan hệ nhỏ hơn trong bộ nhớ. **2. Giai đoạn Thăm dò (Probe Phase):** Nó quét quan hệ lớn hơn, băm các khóa join của nó và thăm dò bảng băm để tìm các kết quả khớp. Nó hiệu quả cho các bảng lớn vì nó tránh quét lặp lại bảng trong."
            }
        }
    },
    {
        _id: "rdbms-m-003",
        difficulty: "middle",
        tags: ["transaction", "isolation level", "non-repeatable read"],
        content: {
            en: {
                title: "Which **Transaction Isolation Level** is the lowest level that prevents the **Non-Repeatable Read** phenomenon?",
                body: "Describe what a Non-Repeatable Read is.",
                solution: "The lowest level that prevents Non-Repeatable Reads is **Repeatable Read**. A Non-Repeatable Read occurs when a transaction reads the same row twice, but the data is changed (updated or deleted) by another committed transaction between the two reads."
            },
            jp: {
                title: "**反復不可能な読み取り**現象を防ぐ最も低い**トランザクション隔離レベル**は何ですか？",
                body: "反復不可能な読み取りとは何かを説明してください。",
                solution: "反復不可能な読み取りを防ぐ最も低いレベルは**Repeatable Read**（反復可能読み取り）です。反復不可能な読み取りは、トランザクションが同じ行を2回読み取るが、その2回の読み取りの間に別のコミットされたトランザクションによってデータが変更（更新または削除）されるときに発生します。"
            },
            vi: {
                title: "**Mức độ Cô lập Giao dịch** nào là mức thấp nhất ngăn chặn hiện tượng **Non-Repeatable Read** (Đọc Không lặp lại)?",
                body: "Mô tả Non-Repeatable Read là gì.",
                solution: "Mức thấp nhất ngăn chặn Non-Repeatable Read là **Repeatable Read** (Đọc lặp lại được). Non-Repeatable Read xảy ra khi một giao dịch đọc cùng một hàng hai lần, nhưng dữ liệu bị thay đổi (cập nhật hoặc xóa) bởi một giao dịch đã commit khác ở giữa hai lần đọc."
            }
        }
    },
    {
        _id: "rdbms-m-004",
        difficulty: "middle",
        tags: ["transaction", "isolation level", "phantom read"],
        content: {
            en: {
                title: "Which **Transaction Isolation Level** is the lowest level that prevents the **Phantom Read** phenomenon?",
                body: "Describe what a Phantom Read is.",
                solution: "The lowest level that prevents Phantom Reads is **Serializable**. A Phantom Read occurs when a transaction reads a set of rows based on a `WHERE` clause twice, but the second read returns a **different set of rows** (new rows were inserted or existing rows were deleted) by another committed transaction."
            },
            jp: {
                title: "**ファントム読み取り**現象を防ぐ最も低い**トランザクション隔離レベル**は何ですか？",
                body: "ファントム読み取りとは何かを説明してください。",
                solution: "ファントム読み取りを防ぐ最も低いレベルは**Serializable**（直列化可能）です。ファントム読み取りは、トランザクションが`WHERE`句に基づいて行のセットを2回読み取るが、2回目の読み取りが別のコミットされたトランザクションによって**異なる行のセット**を返す（新しい行が挿入されたり、既存の行が削除されたりした）ときに発生します。"
            },
            vi: {
                title: "**Mức độ Cô lập Giao dịch** nào là mức thấp nhất ngăn chặn hiện tượng **Phantom Read** (Đọc bóng ma)?",
                body: "Mô tả Phantom Read là gì.",
                solution: "Mức thấp nhất ngăn chặn Phantom Read là **Serializable** (Có thể tuần tự hóa). Phantom Read xảy ra khi một giao dịch đọc một tập hợp các hàng dựa trên mệnh đề `WHERE` hai lần, nhưng lần đọc thứ hai trả về một **tập hợp các hàng khác nhau** (các hàng mới đã được chèn hoặc các hàng hiện có đã bị xóa) bởi một giao dịch đã commit khác."
            }
        }
    },
    {
        _id: "rdbms-m-005",
        difficulty: "middle",
        tags: ["index", "composite index", "optimization"],
        content: {
            en: {
                title: "When creating a **Composite Index** on columns (A, B, C), what is the key principle for ordering the columns (A, B, C) to maximize index usage?",
                body: "The principle relates to the cardinality and the `WHERE` clause.",
                solution: "The columns should be ordered based on the **leading column principle**. The most selective column (highest **cardinality** or the one most frequently used in the `WHERE` clause for filtering) should be placed **first** in the index definition."
            },
            jp: {
                title: "列（A、B、C）に**複合インデックス**を作成する場合、インデックスの使用を最大化するために列（A、B、C）を順序付けるための重要な原則は何ですか？",
                body: "この原則はカーディナリティと`WHERE`句に関連しています。",
                solution: "列は**先行列の原則**に基づいて順序付けられるべきです。最も選択性の高い列（最も高い**カーディナリティ**、またはフィルタリングのために`WHERE`句で最も頻繁に使用される列）をインデックス定義の**最初**に配置する必要があります。"
            },
            vi: {
                title: "Khi tạo **Composite Index** (Chỉ mục Tổng hợp) trên các cột (A, B, C), nguyên tắc chính để sắp xếp thứ tự các cột (A, B, C) nhằm tối đa hóa việc sử dụng chỉ mục là gì?",
                body: "Nguyên tắc này liên quan đến tính phân biệt (cardinality) và mệnh đề `WHERE`.",
                solution: "Các cột nên được sắp xếp dựa trên **nguyên tắc cột dẫn đầu (leading column principle)**. Cột có tính phân biệt cao nhất (cao nhất **cardinality** hoặc cột được sử dụng thường xuyên nhất trong mệnh đề `WHERE` để lọc) nên được đặt **đầu tiên** trong định nghĩa chỉ mục."
            }
        }
    },
    {
        _id: "rdbms-m-006",
        difficulty: "middle",
        tags: ["sql", "performance", "wildcard", "index"],
        content: {
            en: {
                title: "Explain why using a leading wildcard (`%`) in a `LIKE` clause (e.g., `WHERE name LIKE '%smith'`) often results in poor query performance.",
                body: "What action does the database engine usually have to take?",
                solution: "Using a leading wildcard prevents the RDBMS from utilizing a standard index on that column. The database engine is forced to perform a **full table scan** on every row to match the pattern, which is computationally very expensive."
            },
            jp: {
                title: "先頭のワイルドカード（`%`）を`LIKE`句で使用する（例: `WHERE name LIKE '%smith'`）と、クエリのパフォーマンスが低下することが多い理由を説明してください。",
                body: "データベースエンジンは通常、どのようなアクションを実行する必要がありますか？",
                solution: "先頭のワイルドカードを使用すると、RDBMSはその列の標準インデックスを利用できなくなります。データベースエンジンは、パターンに一致させるためにすべての行に対して**フルテーブルスキャン**を実行することを余儀なくされ、これは計算コストが非常に高くなります。"
            },
            vi: {
                title: "Giải thích tại sao việc sử dụng ký tự đại diện ở đầu (`%`) trong mệnh đề `LIKE` (ví dụ: `WHERE name LIKE '%smith'`) thường dẫn đến hiệu suất truy vấn kém.",
                body: "Hành động nào mà công cụ cơ sở dữ liệu thường phải thực hiện?",
                solution: "Việc sử dụng ký tự đại diện ở đầu ngăn RDBMS sử dụng chỉ mục tiêu chuẩn trên cột đó. Công cụ cơ sở dữ liệu buộc phải thực hiện **quét toàn bộ bảng (full table scan)** trên mọi hàng để khớp với mẫu, điều này rất tốn kém về mặt tính toán."
            }
        }
    },
    {
        _id: "rdbms-m-007",
        difficulty: "middle",
        tags: ["database", "shard", "scalability", "horizontal"],
        content: {
            en: {
                title: "What is **Database Sharding**, and what problem is it primarily designed to solve?",
                body: "What technique is used to split the data?",
                solution: "Sharding is a technique used for **horizontal partitioning** (splitting rows across multiple, separate database servers) to solve the problem of **scalability** (handling high load/traffic) and to overcome the storage and processing limits of a single database instance." 

            },
            jp: {
                title: "**データベースシャーディング**とは何ですか、そしてそれは主にどのような問題を解決するために設計されていますか？",
                body: "データを分割するためにどのような手法が使用されますか？",
                solution: "シャーディングは、**水平パーティショニング**（複数の個別のデータベースサーバー間でデータを分割すること）に使用される手法であり、**スケーラビリティ**（高い負荷/トラフィックの処理）の問題を解決し、単一のデータベースインスタンスのストレージと処理の制限を克服するために設計されています。" 


            },
            vi: {
                title: "**Database Sharding** (Phân mảnh Cơ sở dữ liệu) là gì, và nó chủ yếu được thiết kế để giải quyết vấn đề gì?",
                body: "Kỹ thuật nào được sử dụng để chia dữ liệu?",
                solution: "Sharding là một kỹ thuật được sử dụng cho **phân vùng ngang (horizontal partitioning)** (chia các hàng qua nhiều máy chủ cơ sở dữ liệu riêng biệt) để giải quyết vấn đề **khả năng mở rộng (scalability)** (xử lý tải/lưu lượng truy cập cao) và khắc phục giới hạn lưu trữ và xử lý của một phiên bản cơ sở dữ liệu duy nhất." 


            }
        }
    },
    {
        _id: "rdbms-m-008",
        difficulty: "middle",
        tags: ["database", "replication", "read", "write"],
        content: {
            en: {
                title: "Explain the concept of **Master-Slave Replication** and how it improves read performance.",
                body: "Which server handles writes, and which handles reads?",
                solution: "Master-Slave Replication involves a **Master** database that handles all **writes (inserts/updates)** and replicates the data asynchronously to one or more **Slave** databases. The Slaves are then used to handle the majority of the **read** traffic, distributing the load and improving read performance." 
            },
            jp: {
                title: "**マスター・スレーブ・レプリケーション**の概念と、それが読み取りパフォーマンスをどのように向上させるかを説明してください。",
                body: "どのサーバーが書き込みを処理し、どのサーバーが読み取りを処理しますか？",
                solution: "マスター・スレーブ・レプリケーションには、すべての**書き込み（挿入/更新）**を処理し、データを1つ以上の**スレーブ**データベースに非同期的に複製する**マスター**データベースが関与します。スレーブは、トラフィックの大部分の**読み取り**を処理するために使用され、負荷を分散し、読み取りパフォーマンスを向上させます。" 
            },
            vi: {
                title: "Giải thích khái niệm **Master-Slave Replication** (Nhân bản Chủ-Tớ) và cách nó cải thiện hiệu suất đọc.",
                body: "Máy chủ nào xử lý ghi, và máy chủ nào xử lý đọc?",
                solution: "Master-Slave Replication liên quan đến một cơ sở dữ liệu **Master** xử lý tất cả các hoạt động **ghi (chèn/cập nhật)** và sao chép dữ liệu không đồng bộ đến một hoặc nhiều cơ sở dữ liệu **Slave**. Các Slave sau đó được sử dụng để xử lý phần lớn lưu lượng **đọc**, phân tán tải và cải thiện hiệu suất đọc." 
            }
        }
    },
    {
        _id: "rdbms-m-009",
        difficulty: "middle",
        tags: ["sql", "ctes", "readability", "recursion"],
        content: {
            en: {
                title: "What is a **Common Table Expression (CTE)** in SQL (using the `WITH` clause), and what are its two main benefits?",
                body: "How does it compare to a subquery?",
                solution: "A CTE is a named temporary result set defined within the execution scope of a single SQL statement. Benefits include improved **readability** and the ability to implement **recursive queries** (which subqueries cannot do). Unlike views, CTEs are not stored and only exist during the query execution."
            },
            jp: {
                title: "SQLにおける**共通テーブル式（CTE）**（`WITH`句を使用）とは何ですか、そしてその主な2つの利点は何ですか？",
                body: "サブクエリと比較してどうですか？",
                solution: "CTEは、単一のSQLステートメントの実行スコープ内で定義される名前付きの一時的な結果セットです。利点には、**読みやすさ**の向上と、**再帰クエリ**を実装する能力（サブクエリではできない）が含まれます。ビューとは異なり、CTEは保存されず、クエリ実行中のみ存在します。"
            },
            vi: {
                title: "**Common Table Expression (CTE)** (Biểu thức Bảng Chung) trong SQL (sử dụng mệnh đề `WITH`) là gì, và hai lợi ích chính của nó là gì?",
                body: "Nó so sánh với một subquery như thế nào?",
                solution: "CTE là một tập hợp kết quả tạm thời được đặt tên được định nghĩa trong phạm vi thực thi của một câu lệnh SQL duy nhất. Lợi ích bao gồm cải thiện **khả năng đọc** và khả năng triển khai **các truy vấn đệ quy (recursive queries)** (điều mà subquery không thể làm). Khác với views, CTE không được lưu trữ và chỉ tồn tại trong quá trình thực thi truy vấn."
            }
        }
    },
    {
        _id: "rdbms-m-010",
        difficulty: "middle",
        tags: ["normalization", "bcnf", "dependency"],
        content: {
            en: {
                title: "What is the key difference between **Third Normal Form (3NF)** and **Boyce-Codd Normal Form (BCNF)**?",
                body: "Which form specifically handles the dependency where a non-key attribute determines a part of a composite key?",
                solution: "BCNF is a stricter version of 3NF. A relation is in BCNF if and only if **every determinant is a candidate key**. BCNF explicitly handles cases where 3NF fails: when a table has two or more overlapping composite candidate keys where a non-key attribute functionally determines part of one of the candidate keys."
            },
            jp: {
                title: "**第三正規形（3NF）**と**Boyce-Codd正規形（BCNF）**の主な違いは何ですか？",
                body: "どの正規形が、非キー属性が複合キーの一部を決定する依存関係を特に処理しますか？",
                solution: "BCNFは3NFのより厳格なバージョンです。リレーションは、**すべての決定項が候補キーである**場合に限り、BCNFです。BCNFは、3NFが失敗するケース、つまりテーブルに2つ以上の重複する複合候補キーがあり、非キー属性が候補キーの一部を機能的に決定する場合を明示的に処理します。"
            },
            vi: {
                title: "Sự khác biệt chính giữa **Third Normal Form (3NF)** (Dạng Chuẩn Thứ ba) và **Boyce-Codd Normal Form (BCNF)** là gì?",
                body: "Dạng nào xử lý cụ thể sự phụ thuộc mà một thuộc tính không phải là khóa quyết định một phần của khóa tổng hợp?",
                solution: "BCNF là một phiên bản nghiêm ngặt hơn của 3NF. Một quan hệ ở dạng BCNF nếu và chỉ nếu **mọi định thức (determinant) là một khóa ứng cử (candidate key)**. BCNF xử lý rõ ràng các trường hợp 3NF thất bại: khi một bảng có hai hoặc nhiều khóa ứng cử tổng hợp chồng chéo, trong đó một thuộc tính không phải là khóa xác định chức năng một phần của một trong các khóa ứng cử."
            }
        }
    },
    {
        _id: "rdbms-m-011",
        difficulty: "middle",
        tags: ["locking", "concurrency", "deadlock", "prevent"],
        content: {
            en: {
                title: "What is a **Deadlock**, and what is the common RDBMS strategy for resolving (detecting and breaking) deadlocks?",
                body: "What action does the database take when a deadlock is detected?",
                solution: "A Deadlock occurs when two or more transactions are each waiting for the other to release a lock, resulting in an endless wait. The RDBMS typically uses a **Deadlock Detector** that periodically checks for cycles in the wait graph. When detected, the database **terminates (rolls back) one of the transactions** (the victim) to allow the others to proceed." 
            },
            jp: {
                title: "**デッドロック**とは何ですか、そしてデッドロックを解決（検出および解消）するための一般的なRDBMS戦略は何ですか？",
                body: "デッドロックが検出されたとき、データベースはどのようなアクションを実行しますか？",
                solution: "デッドロックは、2つ以上のトランザクションが互いにロックを解除するのを待っている状態になり、無限の待機が発生するときに発生します。RDBMSは通常、待機グラフ内のサイクルを定期的にチェックする**デッドロック検出器**を使用します。検出されると、データベースは他のトランザクションを続行させるために**トランザクションの1つを終了（ロールバック）**します（犠牲者）。" 
            },
            vi: {
                title: "**Deadlock** (Khóa chết) là gì, và chiến lược RDBMS phổ biến để giải quyết (phát hiện và phá vỡ) khóa chết là gì?",
                body: "Hành động nào mà cơ sở dữ liệu thực hiện khi khóa chết được phát hiện?",
                solution: "Deadlock xảy ra khi hai hoặc nhiều giao dịch đang chờ đợi lẫn nhau giải phóng một khóa, dẫn đến sự chờ đợi vô tận. RDBMS thường sử dụng **Bộ phát hiện Khóa chết (Deadlock Detector)** kiểm tra định kỳ các chu trình trong biểu đồ chờ. Khi phát hiện, cơ sở dữ liệu **chấm dứt (hoàn tác) một trong các giao dịch** (nạn nhân) để cho phép các giao dịch khác tiếp tục." 
            }
        }
    },
    {
        _id: "rdbms-m-012",
        difficulty: "middle",
        tags: ["query optimization", "statistics", "cost model"],
        content: {
            en: {
                title: "What is the role of the **Query Optimizer** in an RDBMS, and what crucial external information does it rely on to choose the best execution plan?",
                body: "What information is gathered about the data?",
                solution: "The Query Optimizer analyzes an SQL query and generates the most efficient **Execution Plan** (the step-by-step process for retrieving data). It relies heavily on database **Statistics** (e.g., cardinality of columns, distribution of values, index density) and a **Cost Model** to estimate the I/O and CPU cost of different plans."
            },
            jp: {
                title: "RDBMSにおける**クエリオプティマイザー**の役割は何ですか、そして最適な実行計画を選択するためにそれが依存する重要な外部情報は何ですか？",
                body: "データに関してどのような情報が収集されますか？",
                solution: "クエリオプティマイザーはSQLクエリを分析し、最も効率的な**実行計画**（データを取得するための段階的なプロセス）を生成します。これは、さまざまな計画のI/OおよびCPUコストを推定するために、データベースの**統計**（例: 列のカーディナリティ、値の分布、インデックス密度）と**コストモデル**に大きく依存しています。"
            },
            vi: {
                title: "Vai trò của **Query Optimizer** (Bộ tối ưu hóa Truy vấn) trong RDBMS là gì, và thông tin bên ngoài quan trọng nào nó dựa vào để chọn kế hoạch thực thi tốt nhất?",
                body: "Thông tin nào được thu thập về dữ liệu?",
                solution: "Query Optimizer phân tích một truy vấn SQL và tạo ra **Kế hoạch Thực thi (Execution Plan)** hiệu quả nhất (quá trình từng bước để truy xuất dữ liệu). Nó phụ thuộc nhiều vào **Thống kê (Statistics)** cơ sở dữ liệu (ví dụ: tính phân biệt của các cột, phân bố giá trị, mật độ chỉ mục) và **Mô hình Chi phí (Cost Model)** để ước tính chi phí I/O và CPU của các kế hoạch khác nhau."
            }
        }
    },
    {
        _id: "rdbms-m-013",
        difficulty: "middle",
        tags: ["sql", "stored procedure", "recompile", "staleness"],
        content: {
            en: {
                title: "Why might a **Stored Procedure** or **Function** suffer from poor performance over time, and what common action can the database administrator take to resolve this?",
                body: "What issue is caused by changes in underlying data/statistics?",
                solution: "Stored Procedures can suffer from **Parameter Sniffing** or using an outdated **Execution Plan**. This happens when the underlying table statistics change significantly after the procedure was first compiled. The resolution is to explicitly **recompile** the stored procedure, forcing the Query Optimizer to generate a new, optimized plan based on current statistics."
            },
            jp: {
                title: "**ストアドプロシージャ**や**関数**が時間の経過とともにパフォーマンスが低下する可能性があるのはなぜですか、そしてデータベース管理者がこれを解決するために取ることができる一般的なアクションは何ですか？",
                body: "基になるデータ/統計の変化によって引き起こされる問題は何ですか？",
                solution: "ストアドプロシージャは、**パラメーター・スニッフィング**または古い**実行計画**の使用によってパフォーマンスが低下する可能性があります。これは、プロシージャが最初にコンパイルされた後、基になるテーブルの統計が大幅に変更されたときに発生します。解決策は、ストアドプロシージャを明示的に**再コンパイル**し、クエリオプティマイザーに現在の統計に基づいて新しい最適化された計画を生成させることです。"
            },
            vi: {
                title: "Tại sao một **Stored Procedure** (Thủ tục Lưu trữ) hoặc **Function** (Hàm) có thể bị giảm hiệu suất theo thời gian, và hành động phổ biến nào mà quản trị viên cơ sở dữ liệu có thể thực hiện để giải quyết vấn đề này?",
                body: "Vấn đề nào gây ra bởi những thay đổi trong dữ liệu/thống kê cơ bản?",
                solution: "Stored Procedure có thể bị **Parameter Sniffing** (Ngửi tham số) hoặc sử dụng một **Kế hoạch Thực thi** lỗi thời. Điều này xảy ra khi thống kê bảng cơ bản thay đổi đáng kể sau khi thủ tục được biên dịch lần đầu. Giải pháp là **biên dịch lại** thủ tục lưu trữ một cách rõ ràng, buộc Query Optimizer phải tạo ra một kế hoạch mới, được tối ưu hóa dựa trên thống kê hiện tại."
            }
        }
    },
    {
        _id: "rdbms-m-014",
        difficulty: "middle",
        tags: ["sql", "window function", "lag", "lead"],
        content: {
            en: {
                title: "What is the primary use case for the SQL **`LAG()`** and **`LEAD()`** Window Functions?",
                body: "What kind of comparison do they allow?",
                solution: "`LAG()` and `LEAD()` are used to **access data from a preceding or succeeding row** within the same result set partition, without joining the table. They are essential for calculating differences or performing comparisons between the current row and the row immediately before or after it (e.g., finding the change in price from the previous day)."
            },
            jp: {
                title: "SQLの**`LAG()`**および**`LEAD()`**ウィンドウ関数の主な使用例は何ですか？",
                body: "それらはどのような種類の比較を可能にしますか？",
                solution: "`LAG()`と`LEAD()`は、テーブルを結合することなく、同じ結果セットパーティション内の**先行または後続の行からデータにアクセスする**ために使用されます。これらは、現在の行とその直前または直後の行との差を計算したり、比較を実行したりするために不可欠です（例: 前日からの価格の変化を見つける）。"
            },
            vi: {
                title: "Trường hợp sử dụng chính cho các Hàm Cửa sổ SQL **`LAG()`** và **`LEAD()`** là gì?",
                body: "Chúng cho phép loại so sánh nào?",
                solution: "`LAG()` và `LEAD()` được sử dụng để **truy cập dữ liệu từ một hàng trước hoặc hàng sau** trong cùng một phân vùng tập hợp kết quả, mà không cần join bảng. Chúng rất cần thiết để tính toán sự khác biệt hoặc thực hiện so sánh giữa hàng hiện tại và hàng ngay trước hoặc ngay sau nó (ví dụ: tìm sự thay đổi giá so với ngày hôm trước)."
            }
        }
    },
    {
        _id: "rdbms-m-015",
        difficulty: "middle",
        tags: ["data modeling", "many-to-many", "junction table"],
        content: {
            en: {
                title: "In relational database design, how do you resolve a **Many-to-Many (M:N)** relationship between two entities (e.g., Students and Courses)?",
                body: "What is the name of the new table introduced?",
                solution: "A Many-to-Many relationship is resolved by introducing a new table between the two entities, called a **Junction Table**, **Bridge Table**, or **Associative Entity**. This new table has a **Composite Primary Key** consisting of the Foreign Keys of the two original entities." 
            },
            jp: {
                title: "リレーショナルデータベース設計において、2つのエンティティ間（例: 学生とコース）の**多対多（M:N）**リレーションシップをどのように解決しますか？",
                body: "導入された新しいテーブルの名前は何ですか？",
                solution: "多対多のリレーションシップは、2つのエンティティ間に新しいテーブルを導入することによって解決されます。これは**ジャンクションテーブル**、**ブリッジテーブル**、または**関連エンティティ**と呼ばれます。この新しいテーブルは、元の2つのエンティティの外部キーで構成される**複合主キー**を持ちます。" 
            },
            vi: {
                title: "Trong thiết kế cơ sở dữ liệu quan hệ, làm thế nào bạn giải quyết mối quan hệ **Nhiều-Nhiều (M:N)** giữa hai thực thể (ví dụ: Sinh viên và Khóa học)?",
                body: "Tên của bảng mới được giới thiệu là gì?",
                solution: "Mối quan hệ Nhiều-Nhiều được giải quyết bằng cách giới thiệu một bảng mới giữa hai thực thể, được gọi là **Bảng Liên kết (Junction Table)**, **Bảng Cầu nối (Bridge Table)**, hoặc **Thực thể Kết hợp (Associative Entity)**. Bảng mới này có một **Khóa Chính Tổng hợp (Composite Primary Key)** bao gồm các Khóa Ngoại của hai thực thể ban đầu." 
            }
        }
    },
    {
        _id: "rdbms-m-016",
        difficulty: "middle",
        tags: ["sql", "dml", "delete", "truncate", "difference"],
        content: {
            en: {
                title: "What is the key difference between the SQL commands **`DELETE FROM table`** and **`TRUNCATE TABLE table`**?",
                body: "Which one can be rolled back, and which one is DDL?",
                solution: "**`DELETE`** is DML, removes rows one by one, logs the operation, and can be **rolled back**. **`TRUNCATE`** is DDL, de-allocates the data pages (or segments) quickly, does minimal logging, and **cannot be rolled back** (it implicitly commits the transaction)."
            },
            jp: {
                title: "SQLコマンド**`DELETE FROM table`**と**`TRUNCATE TABLE table`**の主な違いは何ですか？",
                body: "どちらがロールバック可能で、どちらがDDLですか？",
                solution: "**`DELETE`** はDMLであり、行を1つずつ削除し、操作をログに記録し、**ロールバック可能**です。**`TRUNCATE`** はDDLであり、データページ（またはセグメント）を迅速に解放し、最小限のロギングを行い、**ロールバックできません**（暗黙的にトランザクションをコミットします）。"
            },
            vi: {
                title: "Sự khác biệt chính giữa các lệnh SQL **`DELETE FROM table`** và **`TRUNCATE TABLE table`** là gì?",
                body: "Lệnh nào có thể được hoàn tác (roll back), và lệnh nào là DDL?",
                solution: "**`DELETE`** là DML, xóa từng hàng một, ghi log hoạt động, và **có thể được hoàn tác**. **`TRUNCATE`** là DDL, giải phóng các trang dữ liệu (hoặc phân đoạn) một cách nhanh chóng, ghi log tối thiểu, và **không thể được hoàn tác** (nó ngầm định commit giao dịch)."
            }
        }
    },
    {
        _id: "rdbms-m-017",
        difficulty: "middle",
        tags: ["sql", "stored procedure", "security", "privileges"],
        content: {
            en: {
                title: "Explain the security benefit of using **Stored Procedures** known as 'hiding access privileges'.",
                body: "How does it enforce the principle of least privilege?",
                solution: "Stored Procedures allow developers to **grant execution rights** on the procedure, but **revoke direct access rights** to the underlying tables. This enforces the **principle of least privilege**, as users can only interact with the data in ways pre-defined by the procedure, preventing arbitrary `DELETE` or `UPDATE` operations."
            },
            jp: {
                title: "「アクセス権限の非表示」として知られる**ストアドプロシージャ**を使用することのセキュリティ上の利点を説明してください。",
                body: "それは最小特権の原則をどのように強制しますか？",
                solution: "ストアドプロシージャを使用すると、開発者はプロシージャに対する**実行権限を付与**できますが、基になるテーブルへの**直接アクセス権限を取り消す**ことができます。これにより、ユーザーはプロシージャによって事前に定義された方法でのみデータとやり取りできるため、任意の`DELETE`や`UPDATE`操作を防ぎ、**最小特権の原則**が強制されます。"
            },
            vi: {
                title: "Giải thích lợi ích bảo mật của việc sử dụng **Stored Procedures** (Thủ tục Lưu trữ) được gọi là 'ẩn quyền truy cập'.",
                body: "Nó thực thi nguyên tắc đặc quyền tối thiểu như thế nào?",
                solution: "Stored Procedure cho phép nhà phát triển **cấp quyền thực thi** trên thủ tục, nhưng **thu hồi quyền truy cập trực tiếp** vào các bảng cơ bản. Điều này thực thi **nguyên tắc đặc quyền tối thiểu (principle of least privilege)**, vì người dùng chỉ có thể tương tác với dữ liệu theo những cách đã được xác định trước bởi thủ tục, ngăn chặn các thao tác `DELETE` hoặc `UPDATE` tùy ý."
            }
        }
    },
    {
        _id: "rdbms-m-018",
        difficulty: "middle",
        tags: ["index", "b-tree", "structure"],
        content: {
            en: {
                title: "Briefly describe the physical structure of a **B-Tree Index**, and why it is so effective for range queries (e.g., `WHERE salary BETWEEN 50000 AND 70000`).",
                body: "What is stored in the leaf nodes?",
                solution: "A B-Tree Index organizes keys in a tree structure that is balanced (all leaf nodes are at the same depth). Since keys are stored in a **sorted order**, it allows the RDBMS to quickly navigate to the start of the range and then sequentially read the contiguous leaf nodes (which contain pointers to the data rows) to find all matching values." 

            },
            jp: {
                title: "**B-Treeインデックス**の物理的な構造を簡単に説明し、なぜ範囲クエリ（例: `WHERE salary BETWEEN 50000 AND 70000`）に非常に効果的なのかを説明してください。",
                body: "リーフノードには何が格納されますか？",
                solution: "B-Treeインデックスは、キーをバランスの取れたツリー構造（すべてのリーフノードが同じ深さにある）で整理します。キーは**ソートされた順序**で格納されているため、RDBMSは範囲の開始に迅速に移動し、その後、連続したリーフノード（データ行へのポインターを含む）を順次読み取って、一致するすべての値を見つけることができます。" 


            },
            vi: {
                title: "Mô tả ngắn gọn cấu trúc vật lý của **B-Tree Index** (Chỉ mục B-Tree), và tại sao nó rất hiệu quả đối với các truy vấn phạm vi (ví dụ: `WHERE salary BETWEEN 50000 AND 70000`).",
                body: "Những gì được lưu trữ trong các nút lá (leaf nodes)?",
                solution: "B-Tree Index tổ chức các khóa trong một cấu trúc cây được cân bằng (tất cả các nút lá đều ở cùng một độ sâu). Vì các khóa được lưu trữ theo **thứ tự đã sắp xếp**, nó cho phép RDBMS nhanh chóng điều hướng đến điểm bắt đầu của phạm vi và sau đó đọc tuần tự các nút lá liền kề (chứa các con trỏ đến các hàng dữ liệu) để tìm tất cả các giá trị khớp." 

            }
        }
    },
    {
        _id: "rdbms-m-019",
        difficulty: "middle",
        tags: ["sql", "dml", "update", "performance"],
        content: {
            en: {
                title: "When performing a massive `UPDATE` operation, why is it often better to use a **batching strategy** (multiple small updates) rather than a single, large update?",
                body: "The reason relates to logging, locking, and transaction size.",
                solution: "A single large `UPDATE` requires the transaction log (journal) to hold all changes until the commit, leading to high resource consumption and potential out-of-space issues. Batching reduces the **transaction size** and the **duration of locks** held, minimizing contention and system resource strain, especially on high-traffic systems."
            },
            jp: {
                title: "大規模な`UPDATE`操作を実行する場合、単一の大きな更新ではなく、**バッチ戦略**（複数の小さな更新）を使用する方がしばしば優れているのはなぜですか？",
                body: "その理由は、ロギング、ロック、およびトランザクションサイズに関連しています。",
                solution: "単一の大規模な`UPDATE`は、コミットされるまですべての変更をトランザクションログ（ジャーナル）に保持する必要があり、リソース消費が高くなり、領域不足の問題が発生する可能性があります。バッチ処理は**トランザクションサイズ**と保持される**ロックの期間**を減らし、特に高トラフィックシステムでの競合とシステムリソースへの負担を最小限に抑えます。"
            },
            vi: {
                title: "Khi thực hiện thao tác `UPDATE` lớn, tại sao thường tốt hơn nên sử dụng **chiến lược theo lô (batching strategy)** (nhiều lần cập nhật nhỏ) thay vì một lần cập nhật lớn duy nhất?",
                body: "Lý do liên quan đến việc ghi log, khóa và kích thước giao dịch.",
                solution: "Một lần `UPDATE` lớn duy nhất yêu cầu nhật ký giao dịch (journal) phải giữ tất cả các thay đổi cho đến khi commit, dẫn đến tiêu thụ tài nguyên cao và các vấn đề tiềm ẩn về hết dung lượng. Việc theo lô làm giảm **kích thước giao dịch** và **thời gian khóa** được giữ, giảm thiểu tranh chấp và căng thẳng tài nguyên hệ thống, đặc biệt trên các hệ thống có lưu lượng truy cập cao."
            }
        }
    },
    {
        _id: "rdbms-m-020",
        difficulty: "middle",
        tags: ["data modeling", "dimension", "fact", "data warehouse"],
        content: {
            en: {
                title: "In Data Warehouse modeling (e.g., Star Schema), what is the difference between a **Fact Table** and a **Dimension Table**?",
                body: "Which table stores metrics/measurements, and which stores descriptive attributes?",
                solution: "A **Fact Table** stores **metrics** or **measurements** (e.g., sales amount, quantity) and Foreign Keys to Dimension Tables. A **Dimension Table** stores **descriptive attributes** (e.g., customer name, product color, date) that provide context to the facts."
            },
            jp: {
                title: "データウェアハウスモデリング（例: スタースキーマ）において、**ファクトテーブル**と**ディメンションテーブル**の違いは何ですか？",
                body: "どのテーブルがメトリック/測定値を格納し、どのテーブルが記述属性を格納しますか？",
                solution: "**ファクトテーブル**は**メトリック**または**測定値**（例: 売上額、数量）とディメンションテーブルへの外部キーを格納します。**ディメンションテーブル**は、ファクトにコンテキストを提供する**記述属性**（例: 顧客名、製品の色、日付）を格納します。"
            },
            vi: {
                title: "Trong mô hình hóa Kho dữ liệu (ví dụ: Star Schema), sự khác biệt giữa **Fact Table** (Bảng Sự kiện) và **Dimension Table** (Bảng Chiều) là gì?",
                body: "Bảng nào lưu trữ các số liệu/đo lường, và bảng nào lưu trữ các thuộc tính mô tả?",
                solution: "**Fact Table** lưu trữ **các số liệu (metrics)** hoặc **các đo lường (measurements)** (ví dụ: số lượng bán hàng, số lượng) và Khóa Ngoại đến các Bảng Chiều. **Dimension Table** lưu trữ **các thuộc tính mô tả** (ví dụ: tên khách hàng, màu sản phẩm, ngày tháng) cung cấp ngữ cảnh cho các sự kiện."
            }
        }
    },
    {
        _id: "rdbms-m-021",
        difficulty: "middle",
        tags: ["data type", "json", "indexing", "performance"],
        content: {
            en: {
                title: "Why are specialized index types (like **GIN** in PostgreSQL or **JSON_TABLE** functions) often necessary for efficiently querying data stored in **JSON/JSONB** columns?",
                body: "What limitation does indexing the entire JSON column have?",
                solution: "Indexing the entire JSON column often only helps with existence checks, not internal value lookups. Specialized indexes or functions are needed to index **individual keys/paths** *within* the JSON document, allowing the RDBMS to quickly search for specific internal values without having to parse the entire JSON blob for every query."
            },
            jp: {
                title: "**JSON/JSONB**列に格納されたデータを効率的にクエリするために、なぜ特殊なインデックスタイプ（PostgreSQLの**GIN**や**JSON_TABLE**関数など）がしばしば必要なのですか？",
                body: "JSON列全体にインデックスを付けることの制限は何ですか？",
                solution: "JSON列全体にインデックスを付けても、内部の値のルックアップではなく、存在チェックにのみ役立つことがよくあります。RDBMSがクエリごとにJSONブロブ全体を解析することなく、特定の内部値を迅速に検索できるように、JSONドキュメント*内*の**個々のキー/パス**にインデックスを付けるために特殊なインデックスまたは関数が必要です。"
            },
            vi: {
                title: "Tại sao các loại chỉ mục chuyên biệt (như **GIN** trong PostgreSQL hoặc các hàm **JSON\_TABLE**) thường cần thiết để truy vấn hiệu quả dữ liệu được lưu trữ trong các cột **JSON/JSONB**?",
                body: "Hạn chế của việc lập chỉ mục toàn bộ cột JSON là gì?",
                solution: "Việc lập chỉ mục toàn bộ cột JSON thường chỉ giúp kiểm tra sự tồn tại, chứ không phải tìm kiếm giá trị nội bộ. Cần có các chỉ mục hoặc hàm chuyên biệt để lập chỉ mục **các khóa/đường dẫn riêng lẻ** *bên trong* tài liệu JSON, cho phép RDBMS nhanh chóng tìm kiếm các giá trị nội bộ cụ thể mà không cần phải phân tích toàn bộ khối JSON cho mọi truy vấn."
            }
        }
    },
    {
        _id: "rdbms-m-022",
        difficulty: "middle",
        tags: ["sql", "analytic function", "nth value", "percentile"],
        content: {
            en: {
                title: "Name two advanced SQL **Analytic Functions** (Window Functions) that are used for finding a specific value at a certain position or percentile within an ordered partition.",
                body: "Which functions are related to ranking and distribution?",
                solution: "1. **`NTH_VALUE()`**: Returns the value of an expression at the $N$-th row in the window frame. 2. **`PERCENT_RANK()`** or **`CUME_DIST()`** (Cumulative Distribution) or **`NTILE()`** (divides the ordered set into a specified number of groups)."
            },
            jp: {
                title: "順序付けられたパーティション内で特定の**位置またはパーセンタイル**で特定の値を見つけるために使用される、2つの高度なSQL**分析関数**（ウィンドウ関数）の名前を挙げてください。",
                body: "どの関数がランキングと分布に関連していますか？",
                solution: "1. **`NTH_VALUE()`**: ウィンドウフレーム内の$N$番目の行の式の値を返します。2. **`PERCENT_RANK()`** または **`CUME_DIST()`**（累積分布）または **`NTILE()`**（順序付けられたセットを指定された数のグループに分割します）。"
            },
            vi: {
                title: "Nêu tên hai **Hàm Phân tích (Analytic Functions)** SQL nâng cao (Window Functions) được sử dụng để tìm một giá trị cụ thể tại một vị trí hoặc phần trăm nhất định trong một phân vùng đã được sắp xếp.",
                body: "Những hàm nào liên quan đến xếp hạng và phân bố?",
                solution: "1. **`NTH_VALUE()`**: Trả về giá trị của một biểu thức tại hàng thứ $N$ trong khung cửa sổ. 2. **`PERCENT_RANK()`** hoặc **`CUME_DIST()`** (Phân phối Tích lũy) hoặc **`NTILE()`** (chia tập hợp đã sắp xếp thành một số nhóm được chỉ định)."
            }
        }
    },
    {
        _id: "rdbms-m-023",
        difficulty: "middle",
        tags: ["sql", "subquery", "correlated subquery", "performance"],
        content: {
            en: {
                title: "What is a **Correlated Subquery**, and why does it often lead to poor performance compared to a non-correlated subquery or a JOIN?",
                body: "How many times is it executed?",
                solution: "A Correlated Subquery is one that **references a column from the outer query** and depends on the outer query for its values. It is generally inefficient because it must be **executed once for every row** processed by the outer query, leading to $N \times M$ complexity (where $N$ is the outer table size)."
            },
            jp: {
                title: "**相関サブクエリ**とは何ですか、そして非相関サブクエリやJOINと比較して、なぜパフォーマンスが低下することが多いのですか？",
                body: "それは何回実行されますか？",
                solution: "相関サブクエリは、**外部クエリの列を参照する**ものであり、その値のために外部クエリに依存します。外部クエリによって処理される**すべての行に対して1回実行**する必要があるため、一般的に非効率的であり、$N \times M$の複雑さにつながります（$N$は外部テーブルのサイズ）。"
            },
            vi: {
                title: "**Correlated Subquery** (Subquery Tương quan) là gì, và tại sao nó thường dẫn đến hiệu suất kém so với subquery không tương quan hoặc JOIN?",
                body: "Nó được thực thi bao nhiêu lần?",
                solution: "Correlated Subquery là một truy vấn **tham chiếu một cột từ truy vấn bên ngoài** và phụ thuộc vào truy vấn bên ngoài để có giá trị. Nó thường không hiệu quả vì nó phải được **thực thi một lần cho mỗi hàng** được xử lý bởi truy vấn bên ngoài, dẫn đến độ phức tạp $N \times M$ (trong đó $N$ là kích thước bảng ngoài)."
            }
        }
    },
    {
        _id: "rdbms-m-024",
        difficulty: "middle",
        tags: ["data modeling", "erd", "supertype", "subtype"],
        content: {
            en: {
                title: "In advanced Entity-Relationship modeling, what is the concept of a **Supertype/Subtype** relationship, and when is it used?",
                body: "What problem does it solve in modeling similar entities?",
                solution: "A Supertype/Subtype relationship (or generalization/specialization) is used when a single entity (the Supertype, e.g., **Person**) can have several distinct forms or classifications (the Subtypes, e.g., **Employee, Customer**), each with unique attributes, but sharing some common attributes. It minimizes NULLs and redundancy." 
            },
            jp: {
                title: "高度な実体関連モデリングにおいて、**スーパータイプ/サブタイプ**リレーションシップの概念は何ですか、そしてそれはいつ使用されますか？",
                body: "類似のエンティティをモデリングする上でどのような問題を解決しますか？",
                solution: "スーパータイプ/サブタイプのリレーションシップ（または一般化/特殊化）は、単一のエンティティ（スーパータイプ、例: **人**）が、それぞれ固有の属性を持つが、いくつかの共通属性を共有するいくつかの異なる形式または分類（サブタイプ、例: **従業員、顧客**）を持つことができる場合に使用されます。これにより、NULLと冗長性が最小限に抑えられます。" 
            },
            vi: {
                title: "Trong mô hình hóa Thực thể-Mối quan hệ nâng cao, khái niệm về mối quan hệ **Supertype/Subtype** (Kiểu Siêu/Kiểu Phụ) là gì, và khi nào nó được sử dụng?",
                body: "Nó giải quyết vấn đề gì trong việc mô hình hóa các thực thể tương tự?",
                solution: "Mối quan hệ Supertype/Subtype (hoặc tổng quát hóa/chuyên biệt hóa) được sử dụng khi một thực thể duy nhất (Supertype, ví dụ: **Người**) có thể có nhiều hình thức hoặc phân loại khác nhau (Subtypes, ví dụ: **Nhân viên, Khách hàng**), mỗi loại có các thuộc tính duy nhất, nhưng chia sẻ một số thuộc tính chung. Nó giảm thiểu giá trị NULL và sự dư thừa." 
            }
        }
    },
    {
        _id: "rdbms-m-025",
        difficulty: "middle",
        tags: ["transaction", "locking", "optimistic", "pessimistic"],
        content: {
            en: {
                title: "What is the fundamental difference between **Optimistic Locking** and **Pessimistic Locking** strategies in concurrency control?",
                body: "Which one holds locks for a longer duration?",
                solution: "**Pessimistic Locking** assumes conflicts are likely and prevents them by acquiring and holding exclusive locks on resources for the **entire duration of the transaction**. **Optimistic Locking** assumes conflicts are rare; it doesn't acquire locks but instead checks for changes (e.g., using a version number or timestamp) only at the time of committing the transaction."
            },
            jp: {
                title: "同時実行制御における**楽観的ロック**戦略と**悲観的ロック**戦略の根本的な違いは何ですか？",
                body: "どちらがより長い期間ロックを保持しますか？",
                solution: "**悲観的ロック**は、競合が発生する可能性が高いと想定し、**トランザクションの全期間**にわたってリソースに対する排他ロックを取得および保持することで競合を防ぎます。**楽観的ロック**は、競合がまれであると想定します。ロックを取得せず、代わりにトランザクションをコミットするときにのみ変更をチェックします（例: バージョン番号またはタイムスタンプを使用）。"
            },
            vi: {
                title: "Sự khác biệt cơ bản giữa các chiến lược **Optimistic Locking** (Khóa lạc quan) và **Pessimistic Locking** (Khóa bi quan) trong kiểm soát đồng thời là gì?",
                body: "Chiến lược nào giữ khóa trong thời gian dài hơn?",
                solution: "**Pessimistic Locking** giả định rằng xung đột có khả năng xảy ra và ngăn chặn chúng bằng cách giành và giữ các khóa độc quyền trên tài nguyên trong **toàn bộ thời gian của giao dịch**. **Optimistic Locking** giả định rằng xung đột là hiếm; nó không giành khóa mà thay vào đó chỉ kiểm tra các thay đổi (ví dụ: sử dụng số phiên bản hoặc dấu thời gian) tại thời điểm commit giao dịch."
            }
        }
    },
    {
        _id: "rdbms-m-026",
        difficulty: "middle",
        tags: ["sql", "data definition", "alter", "rename"],
        content: {
            en: {
                title: "In SQL, what is the DDL command used to **rename a column** or a table, and what is a potential impact of renaming a column?",
                body: "What objects need to be reviewed/updated after a column rename?",
                solution: "The command is typically **`ALTER TABLE table_name RENAME COLUMN old_name TO new_name`** (syntax varies). Renaming a column requires checking and potentially updating all dependent database objects, including **Views, Stored Procedures, Functions, and Triggers**, which will break if they reference the old column name."
            },
            jp: {
                title: "SQLで、**列の名前**またはテーブルの**名前を変更**するために使用されるDDLコマンドは何ですか、そして列の名前を変更することの潜在的な影響は何ですか？",
                body: "列の名前を変更した後、どのオブジェクトを確認/更新する必要がありますか？",
                solution: "このコマンドは通常、**`ALTER TABLE table_name RENAME COLUMN old_name TO new_name`** です（構文は異なります）。列の名前を変更するには、古い列名を参照している**ビュー、ストアドプロシージャ、関数、およびトリガー**を含む、すべての依存データベースオブジェクトを確認し、場合によっては更新する必要があります。これらは古い列名を参照していると壊れます。"
            },
            vi: {
                title: "Trong SQL, lệnh DDL nào được sử dụng để **đổi tên một cột** hoặc một bảng, và tác động tiềm ẩn của việc đổi tên một cột là gì?",
                body: "Những đối tượng nào cần được xem xét/cập nhật sau khi đổi tên cột?",
                solution: "Lệnh này thường là **`ALTER TABLE table_name RENAME COLUMN old_name TO new_name`** (cú pháp có thể khác nhau). Việc đổi tên một cột đòi hỏi phải kiểm tra và có khả năng cập nhật tất cả các đối tượng cơ sở dữ liệu phụ thuộc, bao gồm **Views, Stored Procedures, Functions, và Triggers**, những đối tượng này sẽ bị lỗi nếu chúng tham chiếu đến tên cột cũ."
            }
        }
    },
    {
        _id: "rdbms-m-027",
        difficulty: "middle",
        tags: ["index", "covering index", "optimization"],
        content: {
            en: {
                title: "What is a **Covering Index** (or Index-Only Scan), and why is it the fastest type of index access?",
                body: "What step of the data retrieval process does it skip?",
                solution: "A Covering Index is an index (usually composite) that includes **all the columns requested by the query** (`SELECT` and `WHERE` clauses). It is the fastest because the RDBMS can satisfy the entire query just by reading the index structure, completely **skipping the step of accessing the actual data rows** on the disk (the data page lookup)."
            },
            jp: {
                title: "**カバリングインデックス**（またはインデックスオンリースキャン）とは何ですか、そしてなぜそれが最速のインデックスアクセスタイプなのですか？",
                body: "データ取得プロセスのどのステップをスキップしますか？",
                solution: "カバリングインデックスは、**クエリによって要求されたすべての列**（`SELECT`および`WHERE`句）を含むインデックス（通常は複合インデックス）です。RDBMSはインデックス構造を読むだけでクエリ全体を満たすことができるため、これは最速です。これにより、ディスク上の**実際のデータ行へのアクセスステップを完全にスキップ**します（データページルックアップ）。"
            },
            vi: {
                title: "**Covering Index** (Chỉ mục Bao phủ) (hoặc Index-Only Scan) là gì, và tại sao nó là loại truy cập chỉ mục nhanh nhất?",
                body: "Nó bỏ qua bước nào của quá trình truy xuất dữ liệu?",
                solution: "Covering Index là một chỉ mục (thường là tổng hợp) bao gồm **tất cả các cột được yêu cầu bởi truy vấn** (mệnh đề `SELECT` và `WHERE`). Nó nhanh nhất vì RDBMS có thể đáp ứng toàn bộ truy vấn chỉ bằng cách đọc cấu trúc chỉ mục, hoàn toàn **bỏ qua bước truy cập các hàng dữ liệu thực tế** trên đĩa (tra cứu trang dữ liệu)."
            }
        }
    },
    {
        _id: "rdbms-m-028",
        difficulty: "middle",
        tags: ["sql", "dml", "recursive cte", "hierarchy"],
        content: {
            en: {
                title: "What is the main use case for a **Recursive CTE** (using `WITH RECURSIVE`)?",
                body: "What type of data structure does it allow you to traverse and query?",
                solution: "A Recursive CTE is primarily used to traverse and query **hierarchical or graph data structures** (e.g., organizational charts, bill of materials, network paths). It consists of an 'anchor' member (initial result set) and a 'recursive' member (which references itself and repeats until a condition is met)." 
            },
            jp: {
                title: "**再帰CTE**（`WITH RECURSIVE`を使用）の主な使用例は何ですか？",
                body: "どのような種類のデータ構造をトラバースおよびクエリできますか？",
                solution: "再帰CTEは、主に**階層的またはグラフのデータ構造**（例: 組織図、部品表、ネットワークパス）をトラバースおよびクエリするために使用されます。これは、「アンカー」メンバー（初期の結果セット）と、「再帰的」メンバー（それ自体を参照し、条件が満たされるまで繰り返す）で構成されます。" 
            },
            vi: {
                title: "Trường hợp sử dụng chính cho **Recursive CTE** (CTE Đệ quy) (sử dụng `WITH RECURSIVE`) là gì?",
                body: "Nó cho phép bạn duyệt và truy vấn loại cấu trúc dữ liệu nào?",
                solution: "Recursive CTE chủ yếu được sử dụng để duyệt và truy vấn **các cấu trúc dữ liệu phân cấp (hierarchical) hoặc đồ thị (graph)** (ví dụ: sơ đồ tổ chức, danh sách nguyên vật liệu, đường dẫn mạng). Nó bao gồm một thành phần 'neo' (anchor) (tập hợp kết quả ban đầu) và một thành phần 'đệ quy' (recursive) (tham chiếu đến chính nó và lặp lại cho đến khi một điều kiện được đáp ứng)." 
            }
        }
    },
    {
        _id: "rdbms-m-029",
        difficulty: "middle",
        tags: ["performance", "caching", "query cache"],
        content: {
            en: {
                title: "Explain how a database's **Query Cache** mechanism typically works, and why it can become ineffective in high-volume OLTP environments.",
                body: "What condition must a new query meet to use the cache?",
                solution: "The Query Cache stores the text of a `SELECT` query and its result set. For a new query to use the cache, it must **match the cached query text exactly (byte-for-byte)**. In high-volume OLTP systems, frequent `INSERT`/`UPDATE`/`DELETE` operations cause constant table modifications, forcing the RDBMS to **invalidate** and flush relevant cached results, rendering the cache ineffective."
            },
            jp: {
                title: "データベースの**クエリキャッシュ**メカニズムが通常どのように機能するか、そしてなぜ高負荷のOLTP環境で効果がなくなる可能性があるのかを説明してください。",
                body: "新しいクエリがキャッシュを使用するために満たす必要がある条件は何ですか？",
                solution: "クエリキャッシュは、`SELECT`クエリのテキストとその結果セットを格納します。新しいクエリがキャッシュを使用するには、キャッシュされたクエリテキストと**完全に一致する**必要があります（バイト単位で）。高負荷のOLTPシステムでは、頻繁な`INSERT`/`UPDATE`/`DELETE`操作によりテーブルが常に変更され、RDBMSは関連するキャッシュされた結果を**無効化**してフラッシュする必要があり、キャッシュが効果的でなくなります。"
            },
            vi: {
                title: "Giải thích cách hoạt động điển hình của cơ chế **Query Cache** (Bộ nhớ đệm Truy vấn) của cơ sở dữ liệu, và tại sao nó có thể trở nên không hiệu quả trong các môi trường OLTP có khối lượng lớn.",
                body: "Điều kiện nào mà một truy vấn mới phải đáp ứng để sử dụng bộ đệm?",
                solution: "Query Cache lưu trữ văn bản của một truy vấn `SELECT` và tập hợp kết quả của nó. Để một truy vấn mới sử dụng bộ đệm, nó phải **khớp chính xác (từng byte)** với văn bản truy vấn đã được lưu trong bộ đệm. Trong các hệ thống OLTP có khối lượng lớn, các thao tác `INSERT`/`UPDATE`/`DELETE` thường xuyên gây ra các sửa đổi bảng liên tục, buộc RDBMS phải **vô hiệu hóa** và xóa các kết quả đã được lưu trong bộ đệm có liên quan, làm cho bộ đệm không hiệu quả."
            }
        }
    },
    {
        _id: "rdbms-m-030",
        difficulty: "middle",
        tags: ["sql", "stored procedure", "error handling", "try catch"],
        content: {
            en: {
                title: "In Stored Procedure programming, why is robust **error handling** (e.g., using `TRY...CATCH` blocks) especially critical for DML operations that modify data?",
                body: "What needs to be managed if an error occurs within a transaction?",
                solution: "Robust error handling is critical to ensure **data integrity** and prevent transactions from being left in an ambiguous state. If a DML error occurs within a multi-statement transaction, the `CATCH` block ensures that any changes made *before* the error are explicitly **rolled back** (or committed if appropriate), preventing partial updates."
            },
            jp: {
                title: "ストアドプロシージャのプログラミングにおいて、堅牢な**エラー処理**（例: `TRY...CATCH`ブロックの使用）が、データを変更するDML操作にとって特に重要であるのはなぜですか？",
                body: "トランザクション内でエラーが発生した場合、何を管理する必要がありますか？",
                solution: "堅牢なエラー処理は、**データの整合性**を確保し、トランザクションがあいまいな状態に残されるのを防ぐために不可欠です。複数ステートメントのトランザクション内でDMLエラーが発生した場合、`CATCH`ブロックは、エラー*前*に行われた変更が明示的に**ロールバック**される（または適切な場合はコミットされる）ことを保証し、部分的な更新を防ぎます。"
            },
            vi: {
                title: "Trong lập trình Stored Procedure, tại sao **xử lý lỗi** mạnh mẽ (ví dụ: sử dụng khối `TRY...CATCH`) đặc biệt quan trọng đối với các thao tác DML sửa đổi dữ liệu?",
                body: "Những gì cần được quản lý nếu lỗi xảy ra trong một giao dịch?",
                solution: "Xử lý lỗi mạnh mẽ rất quan trọng để đảm bảo **tính toàn vẹn dữ liệu** và ngăn các giao dịch bị bỏ lại trong trạng thái mơ hồ. Nếu lỗi DML xảy ra trong một giao dịch đa câu lệnh, khối `CATCH` đảm bảo rằng mọi thay đổi được thực hiện *trước* lỗi đều được **hoàn tác (roll back)** rõ ràng (hoặc commit nếu thích hợp), ngăn chặn các cập nhật một phần."
            }
        }
    },
    {
        _id: "rdbms-m-031",
        difficulty: "middle",
        tags: ["database", "nosql", "acid", "cap theorem"],
        content: {
            en: {
                title: "Relational databases generally prioritize which two components of the **CAP Theorem** (Consistency, Availability, Partition Tolerance)?",
                body: "What is the key trade-off they make regarding network partitions?",
                solution: "RDBMS (like MySQL, PostgreSQL) generally prioritize **Consistency** and **Availability** (or Consistency and Partition Tolerance, depending on the setup, but consistency is key). However, they typically achieve strong **Consistency** by being less tolerant of network partitions, often choosing to halt operations or elect a new master during a partition event."
            },
            jp: {
                title: "リレーショナルデータベースは、**CAP定理**（一貫性、可用性、分断耐性）のどの2つの要素を一般的に優先しますか？",
                body: "ネットワークパーティションに関して、彼らが行う主要なトレードオフは何ですか？",
                solution: "RDBMS（MySQL、PostgreSQLなど）は、一般的に**一貫性（Consistency）**と**可用性（Availability）**を優先します（または設定に応じて一貫性と分断耐性ですが、一貫性が鍵です）。しかし、それらは通常、ネットワークパーティションに対する耐性が低く、パーティションイベント中に操作を停止するか、新しいマスターを選出することを選択することが多いため、強力な**一貫性**を達成します。"
            },
            vi: {
                title: "Các cơ sở dữ liệu quan hệ thường ưu tiên hai thành phần nào của **Định lý CAP** (Tính nhất quán, Tính khả dụng, Dung sai Phân vùng)?",
                body: "Sự đánh đổi chính mà chúng thực hiện liên quan đến phân vùng mạng là gì?",
                solution: "RDBMS (như MySQL, PostgreSQL) thường ưu tiên **Tính nhất quán (Consistency)** và **Tính khả dụng (Availability)** (hoặc Tính nhất quán và Dung sai Phân vùng, tùy thuộc vào thiết lập, nhưng tính nhất quán là yếu tố then chốt). Tuy nhiên, chúng thường đạt được **Tính nhất quán** mạnh mẽ bằng cách ít chịu đựng hơn đối với các phân vùng mạng, thường chọn ngừng hoạt động hoặc bầu ra một master mới trong sự kiện phân vùng."
            }
        }
    },
    {
        _id: "rdbms-m-032",
        difficulty: "middle",
        tags: ["sql", "window function", "running total", "aggregate"],
        content: {
            en: {
                title: "Write an SQL query snippet using a Window Function that calculates the **running total** of `SalesAmount` ordered by `SaleDate`.",
                body: "What syntax is required in the `OVER` clause for a running total?",
                solution: "`SUM(SalesAmount) OVER (ORDER BY SaleDate ROWS UNBOUNDED PRECEDING)`"
            },
            jp: {
                title: "ウィンドウ関数を使用して、`SaleDate`で順序付けられた`SalesAmount`の**累計**を計算するSQLクエリのスニペットを作成してください。",
                body: "累計のために`OVER`句で必要な構文は何ですか？",
                solution: "`SUM(SalesAmount) OVER (ORDER BY SaleDate ROWS UNBOUNDED PRECEDING)`"
            },
            vi: {
                title: "Viết một đoạn mã truy vấn SQL sử dụng Window Function tính toán **tổng lũy kế (running total)** của `SalesAmount` được sắp xếp theo `SaleDate`.",
                body: "Cú pháp nào được yêu cầu trong mệnh đề `OVER` cho tổng lũy kế?",
                solution: "`SUM(SalesAmount) OVER (ORDER BY SaleDate ROWS UNBOUNDED PRECEDING)`"
            }
        }
    },
    {
        _id: "rdbms-m-033",
        difficulty: "middle",
        tags: ["sql", "group by", "rollup", "cube"],
        content: {
            en: {
                title: "What is the purpose of the **`ROLLUP`** extension to the `GROUP BY` clause?",
                body: "How does the output structure differ from a standard `GROUP BY`?",
                solution: "`ROLLUP` generates **subtotal rows** for all possible hierarchical combinations of the grouping columns, plus a **grand total** row (where all grouping columns are NULL). It is useful for analytical reports where a hierarchy of totals is needed."
            },
            jp: {
                title: "`GROUP BY`句への**`ROLLUP`**拡張の目的は何ですか？",
                body: "出力構造は標準の`GROUP BY`とどのように異なりますか？",
                solution: "`ROLLUP`は、グループ化列のすべての可能な階層的な組み合わせの**小計行**と、**総計**行（すべてのグループ化列がNULLになる行）を生成します。これは、集計の階層が必要な分析レポートに役立ちます。"
            },
            vi: {
                title: "Mục đích của phần mở rộng **`ROLLUP`** cho mệnh đề `GROUP BY` là gì?",
                body: "Cấu trúc đầu ra khác với `GROUP BY` tiêu chuẩn như thế nào?",
                solution: "`ROLLUP` tạo ra **các hàng tổng phụ (subtotal rows)** cho tất cả các kết hợp phân cấp có thể có của các cột nhóm, cộng với một hàng **tổng cộng (grand total)** (nơi tất cả các cột nhóm là NULL). Nó hữu ích cho các báo cáo phân tích nơi cần có một hệ thống phân cấp các tổng."
            }
        }
    },
    {
        _id: "rdbms-m-034",
        difficulty: "middle",
        tags: ["sql", "temporal data", "history", "pit"],
        content: {
            en: {
                title: "In the context of data warehousing or auditing, what is a **Point-in-Time (PIT)** query, and what kind of data is required to support it?",
                body: "What temporal information must be stored for each record?",
                solution: "A Point-in-Time query allows you to retrieve the state of the data **as it existed at a specific moment in the past**. It requires **Temporal Data** support, meaning each record must store its **Start Date** and **End Date** (or system-versioned columns) to track its validity period."
            },
            jp: {
                title: "データウェアハウジングまたは監査の文脈で、**特定の時点（PIT）**クエリとは何ですか、そしてそれをサポートするためにどのような種類のデータが必要ですか？",
                body: "各レコードについてどのような時間情報が格納される必要がありますか？",
                solution: "特定の時点クエリを使用すると、**過去の特定の瞬間に存在していた**データの状態を取得できます。これには**テンポラルデータ（時間データ）**のサポートが必要であり、各レコードはその有効期間を追跡するために**開始日**と**終了日**（またはシステムバージョン管理された列）を格納する必要があります。"
            },
            vi: {
                title: "Trong bối cảnh kho dữ liệu hoặc kiểm toán, **Point-in-Time (PIT)** query (Truy vấn tại một Thời điểm cụ thể) là gì, và loại dữ liệu nào được yêu cầu để hỗ trợ nó?",
                body: "Thông tin thời gian nào phải được lưu trữ cho mỗi bản ghi?",
                solution: "Truy vấn tại một Thời điểm cụ thể cho phép bạn truy xuất trạng thái của dữ liệu **như nó đã tồn tại tại một thời điểm cụ thể trong quá khứ**. Nó yêu cầu hỗ trợ **Dữ liệu Thời gian (Temporal Data)**, nghĩa là mỗi bản ghi phải lưu trữ **Ngày Bắt đầu** và **Ngày Kết thúc** của nó (hoặc các cột được phiên bản hóa theo hệ thống) để theo dõi khoảng thời gian hợp lệ của nó."
            }
        }
    },
    {
        _id: "rdbms-m-035",
        difficulty: "middle",
        tags: ["database", "backup", "cold backup", "hot backup"],
        content: {
            en: {
                title: "What is the key difference between a **Cold Backup** (Offline Backup) and a **Hot Backup** (Online Backup)?",
                body: "Which type guarantees absolute consistency, and which allows continuous operations?",
                solution: "A **Cold Backup** is taken while the database is **shut down**, guaranteeing absolute **data consistency**. A **Hot Backup** is taken while the database is **running** and accepting transactions; it allows continuous operations but requires the use of transaction logs to ensure consistency during the recovery process."
            },
            jp: {
                title: "**コールドバックアップ**（オフラインバックアップ）と**ホットバックアップ**（オンラインバックアップ）の主な違いは何ですか？",
                body: "どちらのタイプが絶対的な一貫性を保証し、どちらが継続的な操作を許可しますか？",
                solution: "**コールドバックアップ**は、データベースが**シャットダウンされている間**に取得され、絶対的な**データ一貫性**を保証します。**ホットバックアップ**は、データベースが**実行中**でトランザクションを受け入れている間に取得されます。継続的な操作を可能にしますが、リカバリプロセス中に一貫性を確保するためにトランザクションログの使用が必要です。"
            },
            vi: {
                title: "Sự khác biệt chính giữa **Cold Backup** (Sao lưu Ngoại tuyến) và **Hot Backup** (Sao lưu Trực tuyến) là gì?",
                body: "Loại nào đảm bảo tính nhất quán tuyệt đối, và loại nào cho phép hoạt động liên tục?",
                solution: "**Cold Backup** được thực hiện khi cơ sở dữ liệu **tắt**, đảm bảo tính **nhất quán dữ liệu** tuyệt đối. **Hot Backup** được thực hiện khi cơ sở dữ liệu **đang chạy** và chấp nhận các giao dịch; nó cho phép hoạt động liên tục nhưng yêu cầu sử dụng nhật ký giao dịch để đảm bảo tính nhất quán trong quá trình phục hồi."
            }
        }
    },
    {
        _id: "rdbms-m-036",
        difficulty: "middle",
        tags: ["sql", "function", "deterministic", "non-deterministic"],
        content: {
            en: {
                title: "What is a **Deterministic Function** in SQL, and why is this property important for query optimization and performance?",
                body: "How does the output relate to the input?",
                solution: "A Deterministic Function always returns the **same result for the same set of input values**, regardless of when it is executed (e.g., `SUM()`, `ABS()`). This is important because the Query Optimizer can safely **cache the result** and reuse it without re-executing the function for every row or every time the query is run."
            },
            jp: {
                title: "SQLにおける**決定的関数**とは何ですか、そしてこのプロパティがクエリ最適化とパフォーマンスにとって重要であるのはなぜですか？",
                body: "出力は入力とどのように関連していますか？",
                solution: "決定的関数は、いつ実行されても、**同じ入力値のセットに対して常に同じ結果**を返します（例: `SUM()`、`ABS()`）。これは、クエリオプティマイザーが結果を安全に**キャッシュ**し、クエリが実行されるたびに、またはすべての行に対して関数を再実行することなく再利用できるため、重要です。"
            },
            vi: {
                title: "**Deterministic Function** (Hàm Xác định) trong SQL là gì, và tại sao thuộc tính này lại quan trọng đối với việc tối ưu hóa và hiệu suất truy vấn?",
                body: "Đầu ra liên quan đến đầu vào như thế nào?",
                solution: "Deterministic Function luôn trả về **cùng một kết quả cho cùng một tập hợp các giá trị đầu vào**, bất kể thời điểm nó được thực thi (ví dụ: `SUM()`, `ABS()`). Điều này quan trọng vì Query Optimizer có thể an toàn **lưu vào bộ đệm (cache) kết quả** và tái sử dụng nó mà không cần thực thi lại hàm cho mọi hàng hoặc mỗi lần truy vấn được chạy."
            }
        }
    },
    {
        _id: "rdbms-m-037",
        difficulty: "middle",
        tags: ["sql", "group by", "grouping sets"],
        content: {
            en: {
                title: "What is the benefit of using the **`GROUPING SETS`** clause over writing multiple `UNION ALL` statements with standard `GROUP BY` clauses?",
                body: "What does it optimize?",
                solution: "`GROUPING SETS` allows you to specify multiple grouping options within a **single `SELECT` statement**. This avoids the need for multiple passes over the base table (which `UNION ALL` would require), potentially leading to better performance and simpler syntax by performing all aggregations in one pass."
            },
            jp: {
                title: "標準の`GROUP BY`句を使用した複数の`UNION ALL`ステートメントを作成するよりも、**`GROUPING SETS`**句を使用する利点は何ですか？",
                body: "それは何を最適化しますか？",
                solution: "`GROUPING SETS`を使用すると、**単一の`SELECT`ステートメント内**で複数のグループ化オプションを指定できます。これにより、（`UNION ALL`が必要とする）ベーステーブルに対する複数回のパスが不要になり、すべての集計を1回のパスで実行することで、パフォーマンスが向上し、構文が簡素化される可能性があります。"
            },
            vi: {
                title: "Lợi ích của việc sử dụng mệnh đề **`GROUPING SETS`** so với việc viết nhiều câu lệnh `UNION ALL` với các mệnh đề `GROUP BY` tiêu chuẩn là gì?",
                body: "Nó tối ưu hóa điều gì?",
                solution: "`GROUPING SETS` cho phép bạn chỉ định nhiều tùy chọn nhóm trong một **câu lệnh `SELECT` duy nhất**. Điều này tránh được nhu cầu thực hiện nhiều lần quét trên bảng cơ sở (điều mà `UNION ALL` sẽ yêu cầu), có khả năng dẫn đến hiệu suất tốt hơn và cú pháp đơn giản hơn bằng cách thực hiện tất cả các tổng hợp trong một lần quét."
            }
        }
    },
    {
        _id: "rdbms-m-038",
        difficulty: "middle",
        tags: ["database", "schema", "denormalization", "trade-off"],
        content: {
            en: {
                title: "In which situation is **Denormalization** usually preferred over a highly normalized schema, and what is the trade-off?",
                body: "What kind of systems benefit from Denormalization?",
                solution: "Denormalization is preferred in **Read-Heavy** systems, especially in **OLAP/Data Warehousing**, where complex JOINs would be too slow. The trade-off is **faster read performance** (fewer JOINs) at the cost of **increased data redundancy** and potential **slower write performance** (due to having to update the redundant data in multiple places)."
            },
            jp: {
                title: "**非正規化**が高度に正規化されたスキーマよりも通常好まれるのはどのような状況ですか、そしてそのトレードオフは何ですか？",
                body: "どのような種類のシステムが非正規化の恩恵を受けますか？",
                solution: "非正規化は、複雑なJOINが遅すぎる**読み取り負荷の高い**システム、特に**OLAP/データウェアハウジング**で好まれます。トレードオフは、**データ冗長性の増加**と潜在的な**書き込みパフォーマンスの低下**（複数の場所で冗長データを更新する必要があるため）を犠牲にして、**読み取りパフォーマンスを高速化**することです。"
            },
            vi: {
                title: "Trong tình huống nào thì **Denormalization** (Phi chuẩn hóa) thường được ưu tiên hơn so với một lược đồ được chuẩn hóa cao, và sự đánh đổi là gì?",
                body: "Loại hệ thống nào được hưởng lợi từ Phi chuẩn hóa?",
                solution: "Phi chuẩn hóa được ưu tiên trong các hệ thống **Đọc nhiều (Read-Heavy)**, đặc biệt là trong **OLAP/Kho dữ liệu**, nơi các thao tác JOIN phức tạp sẽ quá chậm. Sự đánh đổi là **hiệu suất đọc nhanh hơn** (ít thao tác JOIN hơn) phải trả giá bằng **tăng tính dư thừa dữ liệu** và tiềm năng **hiệu suất ghi chậm hơn** (do phải cập nhật dữ liệu dư thừa ở nhiều nơi)."
            }
        }
    },
    {
        _id: "rdbms-m-039",
        difficulty: "middle",
        tags: ["sql", "data type", "uuid", "performance"],
        content: {
            en: {
                title: "Why might using a large, randomly generated **UUID/GUID** as a clustered primary key lead to performance issues and index fragmentation, especially with frequent inserts?",
                body: "What is the problem with storing large, unsorted values?",
                solution: "Randomly generated UUIDs are **not sequential**, meaning new inserts must be physically written to random locations within the clustered index structure. This leads to **index fragmentation** (scattered pages on disk) and causes excessive page splits, degrading I/O performance and increasing storage size."
            },
            jp: {
                title: "大規模でランダムに生成された**UUID/GUID**をクラスター化された主キーとして使用すると、特に頻繁な挿入の場合に、パフォーマンスの問題やインデックスの断片化につながる可能性があるのはなぜですか？",
                body: "大規模でソートされていない値を格納することの問題は何ですか？",
                solution: "ランダムに生成されたUUIDは**シーケンシャルではない**ため、新しい挿入はクラスター化されたインデックス構造内のランダムな場所に物理的に書き込まれる必要があります。これにより、**インデックスの断片化**（ディスク上のページが散在する）が発生し、過度のページ分割が引き起こされ、I/Oパフォーマンスが低下し、ストレージサイズが増加します。"
            },
            vi: {
                title: "Tại sao việc sử dụng một **UUID/GUID** lớn, được tạo ngẫu nhiên làm khóa chính phân cụm có thể dẫn đến các vấn đề về hiệu suất và phân mảnh chỉ mục, đặc biệt với các thao tác chèn thường xuyên?",
                body: "Vấn đề của việc lưu trữ các giá trị lớn, không được sắp xếp là gì?",
                solution: "UUID được tạo ngẫu nhiên **không tuần tự**, có nghĩa là các thao tác chèn mới phải được ghi vật lý vào các vị trí ngẫu nhiên trong cấu trúc chỉ mục phân cụm. Điều này dẫn đến **phân mảnh chỉ mục (index fragmentation)** (các trang bị phân tán trên đĩa) và gây ra sự phân tách trang quá mức, làm giảm hiệu suất I/O và tăng kích thước lưu trữ."
            }
        }
    },
    {
        _id: "rdbms-m-040",
        difficulty: "middle",
        tags: ["security", "injection", "orm", "prepared statement"],
        content: {
            en: {
                title: "If a developer is using an **ORM (Object-Relational Mapper)**, how does the ORM typically help prevent SQL Injection attacks?",
                body: "What feature of the ORM handles the separation of code and data?",
                solution: "ORMs automatically use **Prepared Statements** (Parameterized Queries) under the hood for all data-modification and lookup methods. The ORM takes the user input and the SQL template separately, ensuring that the input is passed as data parameters, thereby neutralizing any malicious SQL code embedded within the input string."
            },
            jp: {
                title: "開発者が**ORM（オブジェクトリレーショナルマッパー）**を使用している場合、ORMは通常、SQLインジェクション攻撃を防ぐのにどのように役立ちますか？",
                body: "ORMのどの機能がコードとデータの分離を処理しますか？",
                solution: "ORMは、すべてのデータ変更およびルックアップメソッドに対して、内部的に自動的に**プリペアドステートメント**（パラメーター化クエリ）を使用します。ORMはユーザー入力とSQLテンプレートを別々に受け取り、入力がデータパラメーターとして渡されることを保証し、それによって入力文字列内に埋め込まれた悪意のあるSQLコードを無効化します。"
            },
            vi: {
                title: "Nếu một nhà phát triển đang sử dụng **ORM (Object-Relational Mapper)**, ORM thường giúp ngăn chặn các cuộc tấn công SQL Injection như thế nào?",
                body: "Tính năng nào của ORM xử lý việc tách biệt mã và dữ liệu?",
                solution: "ORM tự động sử dụng **Prepared Statements** (Truy vấn Tham số hóa) bên trong cho tất cả các phương thức sửa đổi và tra cứu dữ liệu. ORM lấy đầu vào của người dùng và mẫu SQL một cách riêng biệt, đảm bảo rằng đầu vào được truyền dưới dạng tham số dữ liệu, qua đó vô hiệu hóa bất kỳ mã SQL độc hại nào được nhúng trong chuỗi đầu vào."
            }
        }
    },
    {
        _id: "rdbms-m-041",
        difficulty: "middle",
        tags: ["sql", "dml", "merge", "upsert", "limitations"],
        content: {
            en: {
                title: "What is a major limitation or potential risk when using the **`MERGE`** (UPSERT) statement in a highly concurrent environment?",
                body: "The risk relates to race conditions and simultaneous operations.",
                solution: "The primary risk is a **Merge Race Condition**. If two transactions attempt to `MERGE` into the same target row simultaneously (one checking the `WHEN NOT MATCHED` condition and the other inserting the row before the first commits), the second transaction might fail or violate constraints if not properly handled with transaction isolation and locking hints."
            },
            jp: {
                title: "高度に並行な環境で**`MERGE`**（UPSERT）ステートメントを使用する際の主要な制限または潜在的なリスクは何ですか？",
                body: "リスクは競合状態と同時操作に関連しています。",
                solution: "主なリスクは**マージ競合状態**です。2つのトランザクションが同時に同じターゲット行に`MERGE`しようとした場合（一方が`WHEN NOT MATCHED`条件をチェックし、もう一方が最初のコミット前にその行を挿入した場合）、トランザクション隔離とロックヒントで適切に処理されないと、2番目のトランザクションが失敗したり制約に違反したりする可能性があります。"
            },
            vi: {
                title: "Hạn chế lớn hoặc rủi ro tiềm ẩn khi sử dụng câu lệnh **`MERGE`** (UPSERT) trong một môi trường có tính đồng thời cao là gì?",
                body: "Rủi ro liên quan đến điều kiện tranh chấp (race conditions) và các thao tác đồng thời.",
                solution: "Rủi ro chính là **Điều kiện Tranh chấp Merge (Merge Race Condition)**. Nếu hai giao dịch cố gắng `MERGE` vào cùng một hàng đích cùng lúc (một giao dịch kiểm tra điều kiện `WHEN NOT MATCHED` và giao dịch kia chèn hàng trước khi giao dịch đầu tiên commit), giao dịch thứ hai có thể thất bại hoặc vi phạm ràng buộc nếu không được xử lý đúng cách bằng cô lập giao dịch và các gợi ý khóa."
            }
        }
    },
    {
        _id: "rdbms-m-042",
        difficulty: "middle",
        tags: ["database", "nosql", "difference", "schema"],
        content: {
            en: {
                title: "What is the fundamental difference in schema structure between a Relational Database and a **Document-based NoSQL** database (like MongoDB)?",
                body: "What term describes the schema structure of a NoSQL document store?",
                solution: "RDBMS uses a **fixed, predefined schema** where data must conform to the table structure. Document-based NoSQL uses a **flexible, schema-less (or schema-on-read)** structure, where documents in the same collection can have different fields and data types."
            },
            jp: {
                title: "リレーショナルデータベースと**ドキュメントベースのNoSQL**データベース（MongoDBなど）のスキーマ構造における根本的な違いは何ですか？",
                body: "NoSQLドキュメントストアのスキーマ構造を説明する用語は何ですか？",
                solution: "RDBMSは、データがテーブル構造に準拠する必要がある**固定された、事前に定義されたスキーマ**を使用します。ドキュメントベースのNoSQLは、**柔軟でスキーマレス（またはスキーマオンリード）**な構造を使用し、同じコレクション内のドキュメントが異なるフィールドとデータ型を持つことができます。"
            },
            vi: {
                title: "Sự khác biệt cơ bản về cấu trúc lược đồ giữa Cơ sở dữ liệu Quan hệ và cơ sở dữ liệu **NoSQL dựa trên Tài liệu (Document-based NoSQL)** (như MongoDB) là gì?",
                body: "Thuật ngữ nào mô tả cấu trúc lược đồ của một kho tài liệu NoSQL?",
                solution: "RDBMS sử dụng một **lược đồ cố định, được xác định trước** nơi dữ liệu phải tuân theo cấu trúc bảng. NoSQL dựa trên Tài liệu sử dụng một cấu trúc **linh hoạt, phi lược đồ (schema-less) (hoặc schema-on-read)**, nơi các tài liệu trong cùng một bộ sưu tập có thể có các trường và kiểu dữ liệu khác nhau."
            }
        }
    },
    {
        _id: "rdbms-m-043",
        difficulty: "middle",
        tags: ["data modeling", "erd", "optionality", "modality"],
        content: {
            en: {
                title: "In ERD notation, what is the meaning of **Optionality** and **Modality** when defining a relationship?",
                body: "Which term relates to whether the relationship is required or not?",
                solution: "**Optionality** (or Participation) specifies whether the relationship is **mandatory or optional** for an entity instance (e.g., a single line vs. a circle). **Modality** refers to the degree (cardinality) of the relationship (e.g., one, many)." 
            },
            jp: {
                title: "ERD表記において、リレーションシップを定義する際の**オプショナリティ（Optionality）**と**モダリティ（Modality）**の意味は何ですか？",
                body: "どちらの用語がリレーションシップが必須かどうかに関連していますか？",
                solution: "**オプショナリティ**（または参加度）は、リレーションシップがエンティティインスタンスに対して**必須かオプションか**を指定します（例: 単線 vs 円）。**モダリティ**は、リレーションシップの程度（カーディナリティ）を指します（例: 1、多）。" 
            },
            vi: {
                title: "Trong ký hiệu ERD, ý nghĩa của **Optionality** (Tính tùy chọn) và **Modality** (Tính hình thức) khi xác định một mối quan hệ là gì?",
                body: "Thuật ngữ nào liên quan đến việc mối quan hệ là bắt buộc hay không?",
                solution: "**Optionality** (hoặc Tham gia) chỉ định liệu mối quan hệ có **bắt buộc hay tùy chọn** đối với một thể hiện thực thể hay không (ví dụ: một đường đơn so với một vòng tròn). **Modality** đề cập đến mức độ (tính phân biệt) của mối quan hệ (ví dụ: một, nhiều)." 
            }
        }
    },
    {
        _id: "rdbms-m-044",
        difficulty: "middle",
        tags: ["sql", "performance", "operator", "vs"],
        content: {
            en: {
                title: "In terms of SQL execution and performance, explain the general difference between the **`IN`** operator and the **`EXISTS`** operator.",
                body: "Which is better when the subquery result set is large, and why?",
                solution: "**`IN`** evaluates the subquery first, creates a temporary list of values, and then scans the outer query rows to match against that list. **`EXISTS`** executes the subquery only until the first match is found for the outer row. `EXISTS` is often **better when the subquery result set is very large** because it can stop processing immediately upon finding a match."
            },
            jp: {
                title: "SQLの実行とパフォーマンスの観点から、**`IN`**演算子と**`EXISTS`**演算子の一般的な違いを説明してください。",
                body: "サブクエリの結果セットが大きい場合、どちらが優れており、なぜですか？",
                solution: "**`IN`** は最初にサブクエリを評価し、値の一時リストを作成してから、外側のクエリ行をスキャンしてそのリストと照合します。**`EXISTS`** は、外側の行に対して最初の一致が見つかるまでのみサブクエリを実行します。`EXISTS`は、一致を見つけるとすぐに処理を停止できるため、**サブクエリの結果セットが非常に大きい場合**にしばしば優れています。"
            },
            vi: {
                title: "Về mặt thực thi và hiệu suất SQL, hãy giải thích sự khác biệt chung giữa toán tử **`IN`** và toán tử **`EXISTS`**.",
                body: "Toán tử nào tốt hơn khi tập hợp kết quả subquery lớn, và tại sao?",
                solution: "**`IN`** đánh giá subquery trước, tạo một danh sách giá trị tạm thời, và sau đó quét các hàng truy vấn bên ngoài để khớp với danh sách đó. **`EXISTS`** chỉ thực thi subquery cho đến khi tìm thấy sự khớp đầu tiên cho hàng bên ngoài. `EXISTS` thường **tốt hơn khi tập hợp kết quả subquery rất lớn** vì nó có thể dừng xử lý ngay lập tức khi tìm thấy sự khớp."
            }
        }
    },
    {
        _id: "rdbms-m-045",
        difficulty: "middle",
        tags: ["sql", "pivot", "unpivot", "data transformation"],
        content: {
            en: {
                title: "In SQL, what is the process of **Pivoting** data, and when would you use it?",
                body: "How does it change the orientation of the data?",
                solution: "Pivoting is the process of **rotating rows into columns**. It takes unique values from one column (e.g., Month names) and transforms them into separate columns, often aggregating other values (e.g., Sales totals) to summarize the data. It's used for generating cross-tabular reports." 
            },
            jp: {
                title: "SQLにおけるデータの**ピボット**処理とは何ですか、そしてそれはいつ使用されますか？",
                body: "データの向きをどのように変更しますか？",
                solution: "ピボットは、**行を列に回転させる**プロセスです。ある列から一意の値（例: 月の名前）を取得し、それらを個別の列に変換し、しばしば他の値（例: 売上合計）を集計してデータを要約します。これは、クロス集計レポートを生成するために使用されます。" 
            },
            vi: {
                title: "Trong SQL, quá trình **Pivoting** (Xoay) dữ liệu là gì, và bạn sẽ sử dụng nó khi nào?",
                body: "Nó thay đổi hướng dữ liệu như thế nào?",
                solution: "Pivoting là quá trình **xoay các hàng thành các cột**. Nó lấy các giá trị duy nhất từ một cột (ví dụ: tên Tháng) và biến chúng thành các cột riêng biệt, thường tổng hợp các giá trị khác (ví dụ: Tổng doanh số) để tóm tắt dữ liệu. Nó được sử dụng để tạo các báo cáo chéo bảng." 
            }
        }
    },
    {
        _id: "rdbms-m-046",
        difficulty: "middle",
        tags: ["database", "view", "materialized view", "performance"],
        content: {
            en: {
                title: "What is a **Materialized View** (Indexed View in SQL Server), and how does it benefit query performance compared to a standard View?",
                body: "What is the key difference in how the result set is stored?",
                solution: "A Materialized View is a View where the **result set is actually computed and stored (persisted) on disk** as a physical table. It dramatically improves query performance because the query reads the pre-calculated result, avoiding the need to execute the complex underlying query (JOINs/aggregations) every time."
            },
            jp: {
                title: "**マテリアライズドビュー**（SQL Serverのインデックス付きビュー）とは何ですか、そして標準のビューと比較してクエリパフォーマンスにどのように貢献しますか？",
                body: "結果セットが格納される方法の主な違いは何ですか？",
                solution: "マテリアライズドビューは、**結果セットが実際に計算され、物理テーブルとしてディスクに格納（永続化）される**ビューです。クエリが事前に計算された結果を読み取るため、クエリのパフォーマンスが劇的に向上し、複雑な基になるクエリ（JOIN/集計）を毎回実行する必要がなくなります。"
            },
            vi: {
                title: "**Materialized View** (Khung nhìn Vật chất hóa) (Indexed View trong SQL Server) là gì, và nó mang lại lợi ích gì cho hiệu suất truy vấn so với một View tiêu chuẩn?",
                body: "Sự khác biệt chính trong cách tập hợp kết quả được lưu trữ là gì?",
                solution: "Materialized View là một View mà **tập hợp kết quả thực sự được tính toán và lưu trữ (lưu lại) trên đĩa** dưới dạng một bảng vật lý. Nó cải thiện đáng kể hiệu suất truy vấn vì truy vấn đọc kết quả đã được tính toán trước, tránh được nhu cầu thực thi truy vấn cơ bản phức tạp (JOIN/tổng hợp) mỗi lần."
            }
        }
    },
    {
        _id: "rdbms-m-047",
        difficulty: "middle",
        tags: ["locking", "latch", "difference", "concurrency"],
        content: {
            en: {
                title: "What is the distinction between a **Lock** and a **Latch** in database concurrency control?",
                body: "Which one is held for a shorter duration and protects internal data structures?",
                solution: "A **Lock** is a high-level concurrency control mechanism protecting logical data structures (rows, tables) held for the **duration of a transaction**. A **Latch** is a lightweight, internal control mechanism that protects the database's internal memory structures (like index pages and data buffers) and is held only for the **duration of a very short operation**."
            },
            jp: {
                title: "データベースの同時実行制御における**ロック**と**ラッチ**の違いは何ですか？",
                body: "どちらがより短い期間保持され、内部データ構造を保護しますか？",
                solution: "**ロック**は、論理データ構造（行、テーブル）を保護する高レベルの同時実行制御メカニズムであり、**トランザクションの期間**保持されます。**ラッチ**は、データベースの内部メモリ構造（インデックスページやデータバッファなど）を保護する軽量の内部制御メカニズムであり、**非常に短い操作の期間**のみ保持されます。"
            },
            vi: {
                title: "Sự khác biệt giữa **Lock** (Khóa) và **Latch** (Chốt) trong kiểm soát đồng thời cơ sở dữ liệu là gì?",
                body: "Thành phần nào được giữ trong thời gian ngắn hơn và bảo vệ các cấu trúc dữ liệu nội bộ?",
                solution: "**Lock** là cơ chế kiểm soát đồng thời cấp cao bảo vệ các cấu trúc dữ liệu logic (hàng, bảng) được giữ trong **suốt thời gian của một giao dịch**. **Latch** là một cơ chế kiểm soát nội bộ, nhẹ, bảo vệ các cấu trúc bộ nhớ nội bộ của cơ sở dữ liệu (như trang chỉ mục và bộ đệm dữ liệu) và chỉ được giữ trong **thời gian của một thao tác rất ngắn**."
            }
        }
    },
    {
        _id: "rdbms-m-048",
        difficulty: "middle",
        tags: ["sql", "dml", "insert", "select", "performance"],
        content: {
            en: {
                title: "When inserting a large amount of data into a table, why is **`INSERT INTO table SELECT * FROM another_table`** often significantly faster than looping and running individual `INSERT` statements?",
                body: "How does the single bulk operation benefit from transactions and logging?",
                solution: "The bulk operation is faster because it is treated as a **single transaction** (one commit/rollback event) and often involves a **minimal logging** mechanism (or a single large log entry) in the transaction log. Individual inserts require a separate transaction boundary and logging entry for every single row, causing I/O overhead."
            },
            jp: {
                title: "大量のデータをテーブルに挿入する場合、**`INSERT INTO table SELECT * FROM another_table`** が、ループして個別の`INSERT`ステートメントを実行するよりも著しく高速であるのはなぜですか？",
                body: "単一の一括操作は、トランザクションとロギングからどのように恩恵を受けますか？",
                solution: "一括操作は、**単一のトランザクション**（1回のコミット/ロールバックイベント）として扱われ、多くの場合、トランザクションログに**最小限のロギング**メカニズム（または単一の大きなログエントリ）が含まれるため、高速です。個別の挿入では、すべての単一行に対して個別のトランザクション境界とロギングエントリが必要になり、I/Oオーバーヘッドが発生します。"
            },
            vi: {
                title: "Khi chèn một lượng lớn dữ liệu vào một bảng, tại sao **`INSERT INTO table SELECT * FROM another_table`** thường nhanh hơn đáng kể so với việc lặp và chạy các câu lệnh `INSERT` riêng lẻ?",
                body: "Thao tác hàng loạt đơn lẻ được hưởng lợi từ giao dịch và ghi log như thế nào?",
                solution: "Thao tác hàng loạt nhanh hơn vì nó được xử lý như một **giao dịch duy nhất** (một sự kiện commit/hoàn tác) và thường liên quan đến cơ chế **ghi log tối thiểu** (hoặc một mục nhật ký lớn duy nhất) trong nhật ký giao dịch. Các thao tác chèn riêng lẻ yêu cầu một ranh giới giao dịch và mục nhập ghi log riêng biệt cho mỗi hàng, gây ra chi phí I/O."
            }
        }
    },
    {
        _id: "rdbms-m-049",
        difficulty: "middle",
        tags: ["database", "transaction", "dirty read", "isolation"],
        content: {
            en: {
                title: "Which of the four standard Isolation Levels permits the **Dirty Read** phenomenon, and what is the consequence of this phenomenon?",
                body: "Describe the nature of the data being read.",
                solution: "The lowest isolation level, **Read Uncommitted**, permits the Dirty Read phenomenon. A Dirty Read occurs when one transaction reads **uncommitted data** written by another transaction. If the second transaction then rolls back, the data read by the first transaction is invalid (it was 'dirty')."
            },
            jp: {
                title: "4つの標準的な隔離レベルのうち、**ダーティリード**現象を許可するのはどれですか、そしてこの現象の結果は何ですか？",
                body: "読み取られているデータの性質を説明してください。",
                solution: "最も低い隔離レベルである**Read Uncommitted**（未コミット読み取り）は、ダーティリード現象を許可します。ダーティリードは、あるトランザクションが別のトランザクションによって書き込まれた**未コミットのデータ**を読み取るときに発生します。その後、2番目のトランザクションがロールバックした場合、最初のトランザクションによって読み取られたデータは無効になります（それは「ダーティ」でした）。"
            },
            vi: {
                title: "Mức độ Cô lập chuẩn nào trong bốn mức cho phép hiện tượng **Dirty Read** (Đọc bẩn), và hậu quả của hiện tượng này là gì?",
                body: "Mô tả tính chất của dữ liệu đang được đọc.",
                solution: "Mức độ cô lập thấp nhất, **Read Uncommitted** (Đọc chưa cam kết), cho phép hiện tượng Dirty Read. Dirty Read xảy ra khi một giao dịch đọc **dữ liệu chưa được commit** được ghi bởi một giao dịch khác. Nếu giao dịch thứ hai sau đó hoàn tác (roll back), dữ liệu được đọc bởi giao dịch đầu tiên sẽ không hợp lệ (nó đã 'bẩn')."
            }
        }
    },
    {
        _id: "rdbms-m-050",
        difficulty: "middle",
        tags: ["sql", "join", "anti join", "set difference"],
        content: {
            en: {
                title: "What is an **Anti-Join**, and what is the most common SQL syntax used to achieve it?",
                body: "What is the purpose of an Anti-Join?",
                solution: "An Anti-Join is an operation that returns all rows from the left table where **no match exists** in the right table (finding rows with no relation). The most common syntax to implement it is using a `LEFT JOIN` combined with a `WHERE right_key IS NULL`, or using the `NOT IN` or **`NOT EXISTS`** operators with a subquery."
            },
            jp: {
                title: "**アンチジョイン**とは何ですか、そしてそれを実現するために使用される最も一般的なSQL構文は何ですか？",
                body: "アンチジョインの目的は何ですか？",
                solution: "アンチジョインは、右側のテーブルに**一致が存在しない**左側のテーブルからのすべての行を返す操作です（関連のない行を見つける）。これを実装するための最も一般的な構文は、`LEFT JOIN`と`WHERE right_key IS NULL`を組み合わせるか、サブクエリとともに`NOT IN`または**`NOT EXISTS`**演算子を使用することです。"
            },
            vi: {
                title: "**Anti-Join** (Join Ngược) là gì, và cú pháp SQL phổ biến nhất được sử dụng để đạt được nó là gì?",
                body: "Mục đích của Anti-Join là gì?",
                solution: "Anti-Join là một thao tác trả về tất cả các hàng từ bảng bên trái mà **không có sự khớp nối nào tồn tại** trong bảng bên phải (tìm các hàng không có quan hệ). Cú pháp phổ biến nhất để triển khai nó là sử dụng `LEFT JOIN` kết hợp với `WHERE right_key IS NULL`, hoặc sử dụng toán tử `NOT IN` hoặc **`NOT EXISTS`** với một subquery."
            }
        }
    }
];