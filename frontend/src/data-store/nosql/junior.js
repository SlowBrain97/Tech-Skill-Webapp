const nosqlJuniorQuestions = [
    // --- JUNIOR (50 Questions) ---
    {
        _id: "nosql-j-001",
        difficulty: "junior",
        tags: ["CAP", "theorem", "trade-off"],
        content: {
            en: {
                title: "CAP Theorem Trade-offs",
                body: "In the CAP theorem, which two properties are often prioritized by a modern **Key-Value Store** like DynamoDB or Cassandra, and what does this imply about the third property?",
                solution: "Availability (A) and Partition Tolerance (P). This means they often sacrifice immediate Consistency (C), opting for eventual consistency."
            },
            jp: {
                title: "CAP 定理のトレードオフ",
                body: "CAP 定理において、DynamoDB や Cassandra のような最新の **キーバリューストア** によってしばしば優先される 2 つのプロパティは何ですか？また、これは 3 番目のプロパティについて何を意味しますか？",
                solution: "可用性 (A) とパーティション耐性 (P)。これは、しばしば即時の整合性 (C) を犠牲にし、結果整合性を選択することを意味します。"
            },
            vi: {
                title: "Sự đánh đổi của Định lý CAP",
                body: "Trong định lý CAP, hai thuộc tính nào thường được ưu tiên bởi một **Key-Value Store** hiện đại như DynamoDB hoặc Cassandra, và điều này ngụ ý gì về thuộc tính thứ ba?",
                solution: "Availability (A - Tính sẵn sàng) và Partition Tolerance (P - Khả năng chịu lỗi phân vùng). Điều này có nghĩa là chúng thường hy sinh Consistency (C - Tính nhất quán) tức thời, lựa chọn tính nhất quán cuối cùng."
            }
        }
    },
    {
        _id: "nosql-j-002",
        difficulty: "junior",
        tags: ["Document", "indexing", "Compound Index"],
        content: {
            en: {
                title: "Compound Index in Document DBs",
                body: "When designing an index for a Document database (like MongoDB), why is the order of fields in a **compound index** critical (e.g., indexing on `{a: 1, b: 1}` vs. `{b: 1, a: 1}`)?",
                solution: "The compound index is useful only for queries that use a prefix of the index fields. A query on field 'b' will not use an index defined as `{a: 1, b: 1}` because 'a' is the leading field."
            },
            jp: {
                title: "ドキュメント DB における複合インデックス",
                body: "ドキュメントデータベース（MongoDB など）のインデックスを設計する際、**複合インデックス**におけるフィールドの順序が重要であるのはなぜですか（例：`{a: 1, b: 1}` と `{b: 1, a: 1}` のインデックス）？",
                solution: "複合インデックスは、インデックスフィールドのプレフィックスを使用するクエリに対してのみ役立ちます。'a' が先行フィールドであるため、フィールド 'b' のクエリは `{a: 1, b: 1}` として定義されたインデックスを使用しません。"
            },
            vi: {
                title: "Compound Index trong Document DB",
                body: "Khi thiết kế một index cho cơ sở dữ liệu Document (như MongoDB), tại sao thứ tự của các trường trong một **compound index** lại quan trọng (ví dụ: lập index trên `{a: 1, b: 1}` so với `{b: 1, a: 1}`)?",
                solution: "Compound index chỉ hữu ích cho các truy vấn sử dụng tiền tố (prefix) của các trường index. Một truy vấn trên trường 'b' sẽ không sử dụng index được định nghĩa là `{a: 1, b: 1}` vì 'a' là trường dẫn đầu."
            }
        }
    },
    {
        _id: "nosql-j-003",
        difficulty: "junior",
        tags: ["Graph", "use case", "paths"],
        content: {
            en: {
                title: "Pathfinding Queries",
                body: "In a Graph database, what is the primary advantage of storing relationships explicitly (as edges) when executing pathfinding queries compared to modeling relationships using Foreign Keys in RDBMS?",
                solution: "Graph databases are optimized for rapid traversal of relationships. Finding a path of arbitrary length (e.g., '6 degrees of separation') is highly performant, whereas it requires complex, self-joining, or recursive SQL queries in an RDBMS."
            },
            jp: {
                title: "パスファインディングクエリ",
                body: "グラフデータベースにおいて、パスファインディングクエリを実行する際、RDBMS で外部キーを使用して関係をモデリングする場合と比較して、関係を明示的に（エッジとして）保存することの主な利点は何ですか？",
                solution: "グラフデータベースは、関係の高速な走査のために最適化されています。任意の長さのパスを見つけること（例：「6次の隔たり」）は非常に高性能ですが、RDBMS では複雑な自己結合または再帰的な SQL クエリが必要です。"
            },
            vi: {
                title: "Truy vấn Tìm đường đi (Pathfinding)",
                body: "Trong cơ sở dữ liệu Graph, lợi thế chính của việc lưu trữ các mối quan hệ một cách rõ ràng (dưới dạng edges) khi thực hiện các truy vấn tìm đường đi so với việc mô hình hóa các mối quan hệ bằng Foreign Keys trong RDBMS là gì?",
                solution: "Các cơ sở dữ liệu Graph được tối ưu hóa cho việc duyệt nhanh các mối quan hệ. Việc tìm một đường đi có độ dài tùy ý (ví dụ: '6 bước phân cách') có hiệu suất rất cao, trong khi nó đòi hỏi các truy vấn SQL tự nối phức tạp hoặc đệ quy trong RDBMS."
            }
        }
    },
    {
        _id: "nosql-j-004",
        difficulty: "junior",
        tags: ["Key-Value", "Redis", "data structure"],
        content: {
            en: {
                title: "Redis Data Structures",
                body: "Redis is often called a Data Structure Store. Name two data structures (besides simple strings) that Redis natively supports.",
                solution: "Lists, Sets, Sorted Sets, Hashes, Bitmaps, or HyperLogLogs (Any two)."
            },
            jp: {
                title: "Redis のデータ構造",
                body: "Redis はしばしばデータ構造ストアと呼ばれます。Redis がネイティブにサポートしている 2 つのデータ構造（単純な文字列以外）を挙げてください。",
                solution: "リスト、セット、ソート済みセット、ハッシュ、ビットマップ、または HyperLogLogs（任意の 2 つ）。"
            },
            vi: {
                title: "Cấu trúc Dữ liệu Redis",
                body: "Redis thường được gọi là Data Structure Store. Kể tên hai cấu trúc dữ liệu (ngoài chuỗi đơn giản) mà Redis hỗ trợ nguyên bản.",
                solution: "Lists (Danh sách), Sets (Tập hợp), Sorted Sets (Tập hợp được sắp xếp), Hashes (Bảng băm), Bitmaps, hoặc HyperLogLogs (Bất kỳ hai nào)."
            }
        }
    },
    {
        _id: "nosql-j-005",
        difficulty: "junior",
        tags: ["Column-Family", "indexing", "partitioning"],
        content: {
            en: {
                title: "Partition Key Importance (Cassandra)",
                body: "In a Column-Family store like Cassandra, why is selecting a good **Partition Key** the single most critical factor for query performance and data distribution?",
                solution: "The Partition Key determines which node (server) the data resides on. Poor key selection leads to 'hot spots' (too much data on one node) or inefficient queries that have to scatter across many nodes."
            },
            jp: {
                title: "パーティションキーの重要性（Cassandra）",
                body: "Cassandra のようなカラムファミリーストアにおいて、適切な **パーティションキー** を選択することが、クエリパフォーマンスとデータ分散にとって最も重要な単一の要因であるのはなぜですか？",
                solution: "パーティションキーは、データがどのノード（サーバー）に格納されるかを決定します。不適切なキーの選択は、「ホットスポット」（1 つのノードにデータが多すぎる）や、多くのノードに分散する必要がある非効率的なクエリにつながります。"
            },
            vi: {
                title: "Tầm quan trọng của Partition Key (Cassandra)",
                body: "Trong một Column-Family store như Cassandra, tại sao việc chọn một **Partition Key** tốt lại là yếu tố quan trọng nhất đối với hiệu suất truy vấn và phân phối dữ liệu?",
                solution: "Partition Key xác định node (máy chủ) nào chứa dữ liệu. Việc chọn khóa kém sẽ dẫn đến 'hot spots' (quá nhiều dữ liệu trên một node) hoặc các truy vấn kém hiệu quả phải phân tán trên nhiều node."
            }
        }
    },
    {
        _id: "nosql-j-006",
        difficulty: "junior",
        tags: ["Document", "relationships", "references"],
        content: {
            en: {
                title: "Referencing in Document DBs",
                body: "If embedding related data leads to overly large documents or frequently changing embedded fields, what is the alternative modeling technique used in Document databases to link related data?",
                solution: "Referencing (using a Foreign Key-like ID in one document to point to another document), often requiring two lookups (joins at the application level)."
            },
            jp: {
                title: "ドキュメント DB における参照",
                body: "関連するデータの埋め込みが過度に大きなドキュメントや頻繁に変更される埋め込みフィールドにつながる場合、関連するデータをリンクするためにドキュメントデータベースで使用される代替のモデリング手法は何ですか？",
                solution: "参照（Referencing）（1 つのドキュメントで外部キーのような ID を使用して別のドキュメントを指す）。これはしばしば 2 回のルックアップ（アプリケーションレベルでの結合）を必要とします。"
            },
            vi: {
                title: "Tham chiếu trong Document DB",
                body: "Nếu việc nhúng dữ liệu liên quan dẫn đến các document quá lớn hoặc các trường được nhúng thay đổi thường xuyên, kỹ thuật mô hình hóa thay thế được sử dụng trong các cơ sở dữ liệu Document để liên kết dữ liệu liên quan là gì?",
                solution: "Referencing (Sử dụng một ID giống Foreign Key trong một document để trỏ đến document khác), thường yêu cầu hai lần tra cứu (join ở cấp độ ứng dụng)."
            }
        }
    },
    {
        _id: "nosql-j-007",
        difficulty: "junior",
        tags: ["sharding", "scalability", "distributed"],
        content: {
            en: {
                title: "Sharding and Distributed Transactions",
                body: "Why do distributed NoSQL systems generally discourage or heavily limit **distributed transactions** (transactions spanning multiple shards/nodes)?",
                solution: "Distributed transactions violate the goal of high availability and partition tolerance. They incur significant network overhead and are slow, making it difficult to maintain low latency across the system."
            },
            jp: {
                title: "シャーディングと分散トランザクション",
                body: "分散 NoSQL システムが一般に **分散トランザクション**（複数のシャード/ノードにまたがるトランザクション）を思いとどまらせるか、厳しく制限するのはなぜですか？",
                solution: "分散トランザクションは、高可用性とパーティション耐性の目標に反します。それらは大きなネットワークオーバーヘッドを発生させ、遅く、システム全体の低レイテンシを維持することが困難になります。"
            },
            vi: {
                title: "Sharding và Giao dịch Phân tán",
                body: "Tại sao các hệ thống NoSQL phân tán thường không khuyến khích hoặc hạn chế nặng nề **giao dịch phân tán** (các giao dịch trải rộng trên nhiều shard/node)?",
                solution: "Giao dịch phân tán vi phạm mục tiêu về tính sẵn sàng cao và khả năng chịu lỗi phân vùng. Chúng gây ra chi phí mạng đáng kể và chậm, khiến việc duy trì độ trễ thấp trên toàn hệ thống trở nên khó khăn."
            }
        }
    },
    {
        _id: "nosql-j-008",
        difficulty: "junior",
        tags: ["Graph", "Cypher", "query"],
        content: {
            en: {
                title: "Basic Cypher Query Structure",
                body: "Write the basic **Cypher** query to find all 'FRIENDS_WITH' relationships starting from a person named 'Alice'.",
                solution: "MATCH (a:Person {name: 'Alice'})-[:FRIENDS_WITH]->(friend) RETURN friend"
            },
            jp: {
                title: "基本的な Cypher クエリ構造",
                body: "「Alice」という名前の人物から始まるすべての 'FRIENDS_WITH' 関係を見つけるための基本的な **Cypher** クエリを記述してください。",
                solution: "MATCH (a:Person {name: 'Alice'})-[:FRIENDS_WITH]->(friend) RETURN friend"
            },
            vi: {
                title: "Cấu trúc Truy vấn Cypher Cơ bản",
                body: "Viết truy vấn **Cypher** cơ bản để tìm tất cả các mối quan hệ 'FRIENDS_WITH' bắt đầu từ một người tên là 'Alice'.",
                solution: "MATCH (a:Person {name: 'Alice'})-[:FRIENDS_WITH]->(friend) RETURN friend"
            }
        }
    },
    {
        _id: "nosql-j-009",
        difficulty: "junior",
        tags: ["ACID", "BASE", "Eventual Consistency"],
        content: {
            en: {
                title: "Handling Eventual Consistency",
                body: "Describe a common scenario or application where **Eventual Consistency** (BASE model) is an acceptable trade-off for performance and scale.",
                solution: "Social media feeds, website comment sections, product review counters, or recommendation engines. Data doesn't need to be 100% up-to-date instantly, and a slight delay is acceptable for massive scale."
            },
            jp: {
                title: "結果整合性の処理",
                body: "パフォーマンスとスケールのために **結果整合性**（BASE モデル）が許容できるトレードオフとなる一般的なシナリオまたはアプリケーションを説明してください。",
                solution: "ソーシャルメディアのフィード、ウェブサイトのコメントセクション、製品レビューカウンター、またはレコメンデーションエンジン。データは瞬時に 100% 最新である必要はなく、大規模なスケールのためにはわずかな遅延が許容されます。"
            },
            vi: {
                title: "Xử lý Tính nhất quán Cuối cùng",
                body: "Mô tả một kịch bản hoặc ứng dụng phổ biến mà **Eventual Consistency** (mô hình BASE) là một sự đánh đổi có thể chấp nhận được cho hiệu suất và khả năng mở rộng.",
                solution: "Các bảng tin mạng xã hội, phần bình luận trên trang web, bộ đếm đánh giá sản phẩm, hoặc công cụ đề xuất. Dữ liệu không cần phải được cập nhật 100% ngay lập tức, và một sự chậm trễ nhỏ là chấp nhận được cho quy mô lớn."
            }
        }
    },
    {
        _id: "nosql-j-010",
        difficulty: "junior",
        tags: ["Key-Value", "use case", "rate limiting"],
        content: {
            en: {
                title: "Rate Limiting with Redis",
                body: "How can a Key-Value store like Redis be used effectively to implement a simple API **rate limiting** mechanism (e.g., limit 100 requests per minute per user)?",
                solution: "Use the user ID as the key and a Redis counter (using INCR) or a Redis List/Sorted Set as the value. The counter or the key itself is given a TTL (Time-To-Live) corresponding to the rate-limiting window (e.g., 60 seconds)."
            },
            jp: {
                title: "Redis を使用したレート制限",
                body: "Redis のようなキーバリューストアは、単純な API **レート制限** メカニズム（例：ユーザーあたり 1 分間に 100 リクエストに制限）を実装するためにどのように効果的に使用できますか？",
                solution: "ユーザー ID をキーとして、Redis カウンター（INCR を使用）または Redis リスト/ソート済みセットを値として使用します。カウンターまたはキー自体には、レート制限ウィンドウに対応する TTL（Time-To-Live）が与えられます（例：60 秒）。"
            },
            vi: {
                title: "Giới hạn Tốc độ bằng Redis",
                body: "Làm thế nào một Key-Value store như Redis có thể được sử dụng hiệu quả để triển khai một cơ chế **giới hạn tốc độ** API đơn giản (ví dụ: giới hạn 100 yêu cầu mỗi phút cho mỗi người dùng)?",
                solution: "Sử dụng ID người dùng làm khóa và một bộ đếm Redis (sử dụng INCR) hoặc một Redis List/Sorted Set làm giá trị. Bộ đếm hoặc bản thân khóa được gán một TTL (Time-To-Live) tương ứng với cửa sổ giới hạn tốc độ (ví dụ: 60 giây)."
            }
        }
    },
    {
        _id: "nosql-j-011",
        difficulty: "junior",
        tags: ["MongoDB", "Aggregation Pipeline", "query"],
        content: {
            en: {
                title: "Aggregation Pipeline (MongoDB)",
                body: "What is the primary purpose of the **Aggregation Pipeline** in MongoDB, and how does it differ from a simple `find()` query?",
                solution: "The Aggregation Pipeline is used for data transformations, grouping, complex filtering, and calculations (like joins/lookups) across documents. A `find()` query simply selects documents based on criteria, while the pipeline processes data through multiple stages."
            },
            jp: {
                title: "集約パイプライン（MongoDB）",
                body: "MongoDB の **集約パイプライン** の主な目的は何ですか？また、単純な `find()` クエリとどのように異なりますか？",
                solution: "集約パイプラインは、ドキュメント全体のデータ変換、グループ化、複雑なフィルタリング、および計算（結合/ルックアップなど）に使用されます。`find()` クエリは基準に基づいてドキュメントを選択するだけですが、パイプラインは複数のステージを通してデータを処理します。"
            },
            vi: {
                title: "Aggregation Pipeline (MongoDB)",
                body: "Mục đích chính của **Aggregation Pipeline** trong MongoDB là gì, và nó khác với một truy vấn `find()` đơn giản như thế nào?",
                solution: "Aggregation Pipeline được sử dụng cho các phép biến đổi dữ liệu, nhóm, lọc phức tạp và tính toán (như joins/lookups) trên các document. Một truy vấn `find()` chỉ đơn giản là chọn các document dựa trên tiêu chí, trong khi pipeline xử lý dữ liệu qua nhiều giai đoạn."
            }
        }
    },
    {
        _id: "nosql-j-012",
        difficulty: "junior",
        tags: ["Column-Family", "indexing", "clustering key"],
        content: {
            en: {
                title: "Clustering Key (Cassandra)",
                body: "In Cassandra, after the Partition Key determines the node, what is the role of the **Clustering Key** in the table definition?",
                solution: "The Clustering Key determines the physical order of the columns/cells *within* that partition on the disk. This is essential for efficient range queries (e.g., retrieving data between two timestamps) that only hit a single node."
            },
            jp: {
                title: "クラスタリングキー（Cassandra）",
                body: "Cassandra では、パーティションキーがノードを決定した後、テーブル定義における **クラスタリングキー** の役割は何ですか？",
                solution: "クラスタリングキーは、そのパーティション内の列/セルの物理的な順序をディスク上で決定します。これは、単一ノードのみにアクセスする効率的な範囲クエリ（例：2 つのタイムスタンプ間のデータを取得する）に不可欠です。"
            },
            vi: {
                title: "Clustering Key (Cassandra)",
                body: "Trong Cassandra, sau khi Partition Key xác định node, vai trò của **Clustering Key** trong định nghĩa bảng là gì?",
                solution: "Clustering Key xác định thứ tự vật lý của các cột/ô *bên trong* phân vùng đó trên đĩa. Điều này rất cần thiết cho các truy vấn phạm vi hiệu quả (ví dụ: truy xuất dữ liệu giữa hai dấu thời gian) chỉ truy cập một node duy nhất."
            }
        }
    },
    {
        _id: "nosql-j-013",
        difficulty: "junior",
        tags: ["Document", "Atomicity", "transactions"],
        content: {
            en: {
                title: "Atomicity in MongoDB",
                body: "In MongoDB, what is the smallest unit of operation that is always guaranteed to be **atomic** (all or nothing)?",
                solution: "A single Document. Any update or insert operation on a single document is atomic. Multi-document atomicity requires explicit multi-document transactions (available since MongoDB 4.0)."
            },
            jp: {
                title: "MongoDB における原子性",
                body: "MongoDB において、常に **アトミック**（すべてかゼロか）であることが保証されている操作の最小単位は何ですか？",
                solution: "単一のドキュメント。単一のドキュメントに対する更新または挿入操作はアトミックです。複数ドキュメントの原子性には、明示的な複数ドキュメントトランザクションが必要です（MongoDB 4.0 以降で利用可能）。"
            },
            vi: {
                title: "Atomicity trong MongoDB",
                body: "Trong MongoDB, đơn vị hoạt động nhỏ nhất luôn được đảm bảo là **atomic** (tất cả hoặc không có gì) là gì?",
                solution: "Một Document đơn lẻ. Bất kỳ thao tác cập nhật hoặc chèn nào trên một document đơn lẻ đều là atomic. Tính atomic đa document yêu cầu các giao dịch đa document rõ ràng (có sẵn từ MongoDB 4.0)."
            }
        }
    },
    {
        _id: "nosql-j-014",
        difficulty: "junior",
        tags: ["Graph", "Cypher", "MATCH"],
        content: {
            en: {
                title: "Cypher MATCH Clause",
                body: "In the Cypher query language, what is the primary purpose of the **MATCH** clause?",
                solution: "The MATCH clause is used to specify the patterns (nodes and relationships) to be searched for in the graph."
            },
            jp: {
                title: "Cypher の MATCH 句",
                body: "Cypher クエリ言語において、**MATCH** 句の主な目的は何ですか？",
                solution: "MATCH 句は、グラフ内で検索するパターン（ノードと関係）を指定するために使用されます。"
            },
            vi: {
                title: "Mệnh đề MATCH của Cypher",
                body: "Trong ngôn ngữ truy vấn Cypher, mục đích chính của mệnh đề **MATCH** là gì?",
                solution: "Mệnh đề MATCH được sử dụng để chỉ định các mẫu (nodes và relationships) cần được tìm kiếm trong graph."
            }
        }
    },
    {
        _id: "nosql-j-015",
        difficulty: "junior",
        tags: ["Key-Value", "Redis", "persistence"],
        content: {
            en: {
                title: "Redis Persistence Methods",
                body: "Since Redis is in-memory, how does it ensure data persistence when the server restarts? Name one of the two main persistence methods.",
                solution: "RDB (Redis Database) snapshots (point-in-time backups) OR AOF (Append Only File) logging (recording every write operation)."
            },
            jp: {
                title: "Redis の永続化方法",
                body: "Redis はインメモリであるため、サーバーが再起動したときにデータの永続性をどのように保証しますか？2 つの主要な永続化方法のうち 1 つを挙げてください。",
                solution: "RDB（Redis データベース）スナップショット（特定の時点のバックアップ）または AOF（Append Only File）ロギング（すべての書き込み操作を記録）。"
            },
            vi: {
                title: "Các Phương pháp Lưu trữ bền vững của Redis",
                body: "Vì Redis là in-memory, làm thế nào nó đảm bảo tính bền vững của dữ liệu khi máy chủ khởi động lại? Kể tên một trong hai phương pháp lưu trữ bền vững chính.",
                solution: "RDB (Redis Database) snapshots (các bản sao lưu tại một thời điểm) HOẶC AOF (Append Only File) logging (ghi lại mọi thao tác ghi)."
            }
        }
    },
    {
        _id: "nosql-j-016",
        difficulty: "junior",
        tags: ["Column-Family", "read vs write", "performance"],
        content: {
            en: {
                title: "Columnar Write Performance",
                body: "Column-Family stores like Cassandra are known for extremely fast **write performance**. Why are writes generally faster than reads in this model?",
                solution: "Writes are fast because they are simply appended to a log and an in-memory structure (memtable) without immediate disk seeks or expensive updates to existing data files. The bulk of the work (sorting, merging) is deferred until read time or compaction."
            },
            jp: {
                title: "カラム型の書き込みパフォーマンス",
                body: "Cassandra のようなカラムファミリーストアは、非常に高速な **書き込みパフォーマンス** で知られています。このモデルでは、書き込みが一般的に読み取りよりも速いのはなぜですか？",
                solution: "書き込みは、既存のデータファイルへの即時のディスクシークや高価な更新なしに、ログとインメモリ構造（memtable）に追加されるだけなので高速です。作業の大部分（ソート、マージ）は読み取り時またはコンパクションまで延期されます。"
            },
            vi: {
                title: "Hiệu suất Ghi của Columnar",
                body: "Các Column-Family store như Cassandra nổi tiếng với **hiệu suất ghi** cực kỳ nhanh. Tại sao việc ghi thường nhanh hơn việc đọc trong mô hình này?",
                solution: "Việc ghi nhanh vì chúng chỉ đơn giản được thêm vào một log và một cấu trúc trong bộ nhớ (memtable) mà không cần tìm kiếm đĩa ngay lập tức hoặc cập nhật tốn kém cho các tệp dữ liệu hiện có. Phần lớn công việc (sắp xếp, hợp nhất) bị hoãn lại cho đến khi đọc hoặc nén."
            }
        }
    },
    {
        _id: "nosql-j-017",
        difficulty: "junior",
        tags: ["Document", "indexing", "sparse"],
        content: {
            en: {
                title: "Sparse Index (MongoDB)",
                body: "What is a **Sparse Index** in MongoDB, and when is it useful?",
                solution: "A Sparse Index only includes documents that have the indexed field. It's useful when you have a large collection where only a small subset of documents contain the field you want to index, saving space and improving index maintenance."
            },
            jp: {
                title: "スパースインデックス（MongoDB）",
                body: "MongoDB における **スパースインデックス** とは何ですか？また、それはいつ役立ちますか？",
                solution: "スパースインデックスは、インデックスが付けられたフィールドを持つドキュメントのみを含みます。インデックスを付けたいフィールドを持つドキュメントのサブセットが少ない大規模なコレクションがある場合に役立ち、スペースを節約し、インデックスのメンテナンスを改善します。"
            },
            vi: {
                title: "Sparse Index (MongoDB)",
                body: "**Sparse Index** trong MongoDB là gì, và khi nào nó hữu ích?",
                solution: "Sparse Index chỉ bao gồm các document có trường được lập index. Nó hữu ích khi bạn có một collection lớn mà chỉ một tập hợp con nhỏ các document chứa trường bạn muốn lập index, giúp tiết kiệm không gian và cải thiện việc bảo trì index."
            }
        }
    },
    {
        _id: "nosql-j-018",
        difficulty: "junior",
        tags: ["RDBMS", "vs NoSQL", "integrity"],
        content: {
            en: {
                title: "Database vs Application Integrity",
                body: "A key distinction between RDBMS and many NoSQL databases is the enforcement of data integrity. Briefly describe the term **'Schema-on-Read'** and how it relates to Document stores.",
                solution: "Schema-on-Read means the data structure (schema) is determined and enforced by the application when the data is read, not enforced by the database when data is written. Document stores use this flexible approach."
            },
            jp: {
                title: "データベース 対 アプリケーションの整合性",
                body: "RDBMS と多くの NoSQL データベースの主な違いは、データ整合性の適用です。**「Schema-on-Read」** という用語を簡単に説明し、それがドキュメントストアとどのように関連するかを説明してください。",
                solution: "Schema-on-Read は、データ構造（スキーマ）がデータが書き込まれるときにデータベースによって適用されるのではなく、データが読み取られるときにアプリケーションによって決定され、適用されることを意味します。ドキュメントストアはこの柔軟なアプローチを使用します。"
            },
            vi: {
                title: "Tính toàn vẹn Database so với Ứng dụng",
                body: "Sự khác biệt chính giữa RDBMS và nhiều cơ sở dữ liệu NoSQL là việc áp dụng tính toàn vẹn dữ liệu. Mô tả ngắn gọn thuật ngữ **'Schema-on-Read'** và nó liên quan đến Document store như thế nào.",
                solution: "Schema-on-Read có nghĩa là cấu trúc dữ liệu (schema) được xác định và áp dụng bởi ứng dụng khi dữ liệu được đọc, chứ không phải được áp dụng bởi cơ sở dữ liệu khi dữ liệu được ghi. Các Document store sử dụng cách tiếp cận linh hoạt này."
            }
        }
    },
    {
        _id: "nosql-j-019",
        difficulty: "junior",
        tags: ["Key-Value", "use case", "queues"],
        content: {
            en: {
                title: "Redis as a Message Broker",
                body: "Which native Redis data structure is commonly used to implement a simple message queue or worker queue, and what are the two common commands used to push/pull from it?",
                solution: "Redis List. Commands are LPUSH (push to the left/head) and BRPOP (blocking right pop/pull from the tail, often used by workers)."
            },
            jp: {
                title: "メッセージブローカーとしての Redis",
                body: "単純なメッセージキューまたはワーカーキューを実装するために一般的に使用されるネイティブの Redis データ構造は何ですか？また、そこからプッシュ/プルするために使用される 2 つの一般的なコマンドは何ですか？",
                solution: "Redis リスト。コマンドは LPUSH（左/ヘッドにプッシュ）と BRPOP（ブロッキング右ポップ/テールからプル、ワーカーによってよく使用される）です。"
            },
            vi: {
                title: "Redis như một Message Broker",
                body: "Cấu trúc dữ liệu gốc nào của Redis thường được sử dụng để triển khai một hàng đợi tin nhắn (message queue) hoặc hàng đợi worker đơn giản, và hai lệnh phổ biến được sử dụng để push/pull từ nó là gì?",
                solution: "Redis List. Các lệnh là LPUSH (push vào bên trái/đầu) và BRPOP (blocking right pop/pull từ đuôi, thường được sử dụng bởi các worker)."
            }
        }
    },
    {
        _id: "nosql-j-020",
        difficulty: "junior",
        tags: ["sharding", "scalability", "horizontal"],
        content: {
            en: {
                title: "Hashing for Sharding",
                body: "When sharding data across multiple nodes, what common technique is used to ensure the data is distributed evenly based on the sharding key, and what is its main drawback when adding/removing nodes?",
                solution: "Consistent Hashing. The drawback is that when a node is added or removed, only a small fraction of the keys need to be remapped/moved, minimizing data migration."
            },
            jp: {
                title: "シャーディングのためのハッシュ化",
                body: "複数のノードにデータをシャーディングするとき、シャーディングキーに基づいてデータが均等に分散されるようにするために使用される一般的な手法は何ですか？また、ノードを追加/削除する際の主な欠点は何ですか？",
                solution: "コンシステントハッシュ（Consistent Hashing）。欠点は、ノードが追加または削除されたときに、キーのごく一部のみを再マッピング/移動する必要があるため、データ移行が最小限に抑えられることです。"
            },
            vi: {
                title: "Hashing cho Sharding",
                body: "Khi sharding dữ liệu trên nhiều node, kỹ thuật phổ biến nào được sử dụng để đảm bảo dữ liệu được phân phối đều dựa trên sharding key, và nhược điểm chính của nó khi thêm/xóa node là gì?",
                solution: "Consistent Hashing. Nhược điểm là khi một node được thêm hoặc xóa, chỉ một phần nhỏ các khóa cần được ánh xạ lại/di chuyển, giảm thiểu việc di chuyển dữ liệu."
            }
        }
    },
    {
        _id: "nosql-j-021",
        difficulty: "junior",
        tags: ["MongoDB", "indexing", "text search"],
        content: {
            en: {
                title: "Full-Text Search (MongoDB)",
                body: "What type of index in MongoDB is specifically designed to support efficient natural language queries for searching keywords and phrases across string content?",
                solution: "Text Index."
            },
            jp: {
                title: "フルテキスト検索（MongoDB）",
                body: "MongoDB のどのタイプのインデックスが、文字列コンテンツ全体でキーワードやフレーズを検索するための効率的な自然言語クエリをサポートするように特別に設計されていますか？",
                solution: "Text Index（テキストインデックス）。"
            }
            ,
            vi: {
                title: "Tìm kiếm Toàn văn (MongoDB)",
                body: "Loại index nào trong MongoDB được thiết kế đặc biệt để hỗ trợ các truy vấn ngôn ngữ tự nhiên hiệu quả cho việc tìm kiếm từ khóa và cụm từ trên nội dung chuỗi?",
                solution: "Text Index."
            }
        }
    },
    {
        _id: "nosql-j-022",
        difficulty: "junior",
        tags: ["RDBMS", "normalization", "Denormalization"],
            content: {
            en: {
                title: "Denormalization Drawbacks",
                body: "What is the primary drawback of using the **denormalization** modeling strategy (embedding data) in Document stores?",
                solution: "Increased data redundancy, which leads to higher storage usage and increased complexity/cost when updating the duplicated data across multiple documents."
            },
            jp: {
                title: "非正規化の欠点",
                body: "ドキュメントストアで **非正規化** モデリング戦略（データの埋め込み）を使用することの主な欠点は何ですか？",
                solution: "データの冗長性が増加し、ストレージの使用量が増加し、複数のドキュメントにわたる重複したデータを更新する際の複雑さ/コストが増加します。"
            },
            vi: {
                title: "Nhược điểm của Phi chuẩn hóa",
                body: "Nhược điểm chính của việc sử dụng chiến lược mô hình hóa **phi chuẩn hóa** (nhúng dữ liệu) trong Document store là gì?",
                solution: "Tăng tính dư thừa dữ liệu (data redundancy), dẫn đến việc sử dụng bộ nhớ cao hơn và tăng độ phức tạp/chi phí khi cập nhật dữ liệu bị trùng lặp trên nhiều document."
            }
        }
    },
    {
        _id: "nosql-j-023",
        difficulty: "junior",
        tags: ["Graph", "use case", "recommendation"],
        content: {
            en: {
                title: "Recommendation Engines (Graph)",
                body: "How does a Graph database typically approach generating personalized recommendations (e.g., 'People you may know' or 'Products you might like')?",
                solution: "By traversing relationships (edges) to find connections between entities (nodes) that are separated by a small number of hops, based on shared interests or common friends."
            },
            jp: {
                title: "レコメンデーションエンジン（グラフ）",
                body: "グラフデータベースは、パーソナライズされたレコメンデーション（例：「知り合いかもしれない人」や「好きかもしれない製品」）を生成するために通常どのようにアプローチしますか？",
                solution: "共有された興味や共通の友人に基づいて、少数のホップで分離されたエンティティ（ノード）間の接続を見つけるために、関係（エッジ）を走査することによって。"
            },
            vi: {
                title: "Công cụ Đề xuất (Graph)",
                body: "Một cơ sở dữ liệu Graph thường tiếp cận việc tạo ra các đề xuất cá nhân hóa (ví dụ: 'Những người bạn có thể biết' hoặc 'Sản phẩm bạn có thể thích') như thế nào?",
                solution: "Bằng cách duyệt các mối quan hệ (edges) để tìm các kết nối giữa các thực thể (nodes) được tách biệt bởi một số bước nhảy nhỏ, dựa trên sở thích chung hoặc bạn bè chung."
            }
        }
    },
    {
        _id: "nosql-j-024",
        difficulty: "junior",
        tags: ["Key-Value", "use case", "simple"],
        content: {
            en: {
                title: "Limitations of Key-Value",
                body: "What is the biggest limitation of the Key-Value model when you need to perform complex queries (e.g., filtering data based on an attribute within the value, or joining data)?",
                solution: "You can only efficiently look up data by its exact key. You cannot easily search or filter based on the *content* of the stored value without loading and processing the data outside the database."
            },
            jp: {
                title: "キーバリューの制限",
                body: "複雑なクエリを実行する必要がある場合（例：値内の属性に基づいてデータをフィルタリングしたり、データを結合したりする場合）、キーバリューモデルの最大の制限は何ですか？",
                solution: "正確なキーによってのみ効率的にデータをルックアップできます。データベース外でデータをロードして処理することなく、保存された値の *コンテンツ* に基づいてデータを簡単に検索またはフィルタリングすることはできません。"
            },
            vi: {
                title: "Hạn chế của Key-Value",
                body: "Hạn chế lớn nhất của mô hình Key-Value là gì khi bạn cần thực hiện các truy vấn phức tạp (ví dụ: lọc dữ liệu dựa trên một thuộc tính bên trong giá trị, hoặc nối dữ liệu)?",
                solution: "Bạn chỉ có thể tra cứu dữ liệu hiệu quả bằng khóa chính xác của nó. Bạn không thể dễ dàng tìm kiếm hoặc lọc dựa trên *nội dung* của giá trị được lưu trữ mà không cần tải và xử lý dữ liệu bên ngoài cơ sở dữ liệu."
            }
        }
    },
    {
        _id: "nosql-j-025",
        difficulty: "junior",
        tags: ["Column-Family", "data model", "sparsity"],
        content: {
            en: {
                title: "Sparsity in Wide-Column Stores",
                body: "Explain what **data sparsity** means in the context of a Wide-Column (Column-Family) store, and why it is easily handled by this model.",
                solution: "Data sparsity means that different rows in the same column family can have a wildly different set of columns defined (many cells are empty/null). It's handled easily because data is stored by column, so null values simply don't take up any disk space."
            },
            jp: {
                title: "ワイドカラムストアにおけるスパース性",
                body: "ワイドカラム（カラムファミリー）ストアのコンテキストで、**データスパース性**が何を意味するか、そしてこのモデルでなぜそれが簡単に処理されるのかを説明してください。",
                solution: "データスパース性とは、同じカラムファミリー内の異なる行が、非常に異なる列のセットを持つことができること（多くのセルが空/ヌルであること）を意味します。データは列ごとに保存されるため、ヌル値はディスクスペースを占有しないため、簡単に処理されます。"
            },
            vi: {
                title: "Tính thưa thớt trong Wide-Column Store",
                body: "Giải thích **tính thưa thớt dữ liệu (data sparsity)** có nghĩa là gì trong bối cảnh của một Wide-Column (Column-Family) store, và tại sao mô hình này dễ dàng xử lý nó.",
                solution: "Tính thưa thớt dữ liệu có nghĩa là các hàng khác nhau trong cùng một họ cột có thể có một tập hợp các cột được định nghĩa khác nhau rất nhiều (nhiều ô trống/null). Nó được xử lý dễ dàng vì dữ liệu được lưu trữ theo cột, nên các giá trị null đơn giản là không chiếm bất kỳ không gian đĩa nào."
            }
        }
    },
    {
        _id: "nosql-j-026",
        difficulty: "junior",
        tags: ["MongoDB", "Query Projection", "performance"],
        content: {
            en: {
                title: "Query Projection (MongoDB)",
                body: "When querying a Document database, what is the concept of **projection**, and why is it important for performance?",
                solution: "Projection is the technique of selecting only a specific subset of fields (columns) from the documents that match the query, rather than the entire document. It's important for performance because it reduces the amount of data transferred over the network and processed by the application."
            },
            jp: {
                title: "クエリプロジェクション（MongoDB）",
                body: "ドキュメントデータベースをクエリするとき、**プロジェクション** の概念は何ですか？また、なぜそれがパフォーマンスにとって重要ですか？",
                solution: "プロジェクションは、クエリに一致するドキュメント全体ではなく、ドキュメントから特定のフィールド（列）のサブセットのみを選択する手法です。ネットワーク経由で転送され、アプリケーションによって処理されるデータ量を減らすため、パフォーマンスにとって重要です。"
            },
            vi: {
                title: "Query Projection (MongoDB)",
                body: "Khi truy vấn một Document database, khái niệm **projection** là gì, và tại sao nó quan trọng đối với hiệu suất?",
                solution: "Projection là kỹ thuật chọn chỉ một tập hợp con cụ thể các trường (cột) từ các document khớp với truy vấn, thay vì toàn bộ document. Nó quan trọng đối với hiệu suất vì nó làm giảm lượng dữ liệu được truyền qua mạng và được xử lý bởi ứng dụng."
            }
        }
    },
    {
        _id: "nosql-j-027",
        difficulty: "junior",
        tags: ["Graph", "use case", "fraud detection"],
        content: {
            en: {
                title: "Fraud Detection (Graph)",
                body: "How is a Graph database superior to an RDBMS for real-time **fraud detection** based on complex patterns (e.g., detecting a ring of fraudulent accounts)?",
                solution: "Graph databases can traverse connections extremely fast to find complex, multi-hop patterns (e.g., 'Account A connected to Account B via Shared Phone Number C, and they both link to the same IP address'). This complex pattern matching is computationally expensive and slow in an RDBMS."
            },
            jp: {
                title: "不正検出（グラフ）",
                body: "複雑なパターンに基づくリアルタイムの **不正検出**（例：不正なアカウントのネットワークの検出）において、グラフデータベースが RDBMS よりも優れているのはなぜですか？",
                solution: "グラフデータベースは、接続を非常に高速に走査して、複雑なマルチホップパターンを見つけることができます（例：「アカウント A は共有電話番号 C を介してアカウント B に接続されており、両方とも同じ IP アドレスにリンクしている」）。この複雑なパターンマッチングは、RDBMS では計算コストが高く、遅いです。"
            },
            vi: {
                title: "Phát hiện Gian lận (Graph)",
                body: "Làm thế nào một cơ sở dữ liệu Graph lại vượt trội hơn RDBMS trong việc **phát hiện gian lận** theo thời gian thực dựa trên các mẫu phức tạp (ví dụ: phát hiện một mạng lưới các tài khoản gian lận)?",
                solution: "Các cơ sở dữ liệu Graph có thể duyệt các kết nối cực kỳ nhanh để tìm các mẫu phức tạp, đa bước nhảy (multi-hop) (ví dụ: 'Tài khoản A được kết nối với Tài khoản B thông qua Số điện thoại chung C, và cả hai đều liên kết đến cùng một địa chỉ IP'). Việc so khớp mẫu phức tạp này rất tốn kém về mặt tính toán và chậm trong RDBMS."
            }
        }
    },
    {
        _id: "nosql-j-028",
        difficulty: "junior",
        tags: ["Key-Value", "Redis", "data structure", "Set"],
            content: {
            en: {
                title: "Redis Set Use Case",
                body: "Which Redis data structure should you use if you need to store a list of unique user IDs who have liked an article, and you frequently need to check if a specific user is in that list?",
                solution: "A Redis Set. Sets automatically enforce uniqueness and provide very fast membership checking (SISMEMBER command) because they are based on hash tables."
            },
            jp: {
                title: "Redis Set の使用例",
                body: "ある記事に「いいね」をした一意のユーザー ID のリストを保存する必要があり、特定のユーザーがそのリストにいるかどうかを頻繁にチェックする必要がある場合、どの Redis データ構造を使用すべきですか？",
                solution: "Redis Set。Set は一意性を自動的に強制し、ハッシュテーブルに基づいているため、非常に高速なメンバーシップチェック（SISMEMBER コマンド）を提供します。"
            },
            vi: {
                title: "Trường hợp sử dụng Redis Set",
                body: "Bạn nên sử dụng cấu trúc dữ liệu Redis nào nếu bạn cần lưu trữ danh sách các ID người dùng duy nhất đã thích một bài viết, và bạn thường xuyên cần kiểm tra xem một người dùng cụ thể có trong danh sách đó hay không?",
                solution: "Một Redis Set. Sets tự động áp đặt tính duy nhất và cung cấp kiểm tra thành viên rất nhanh (lệnh SISMEMBER) vì chúng dựa trên bảng băm."
            }
        }
    },
    {
        _id: "nosql-j-029",
        difficulty: "junior",
        tags: ["sharding", "consistency", "trade-off"],
        content: {
            en: {
                title: "Query Scatter/Gather",
                body: "In a sharded NoSQL cluster, what is a **scatter/gather** query, and why is it problematic for performance?",
                solution: "A scatter/gather query is one that cannot be routed to a single node and must be executed by sending the request to *all* nodes (scatter), which then process the data and send the results back to the querying client for merging (gather). It's slow because it hits every node and incurs high network overhead."
            },
            jp: {
                title: "クエリの散乱/収集",
                body: "シャーディングされた NoSQL クラスターにおいて、**散乱/収集（scatter/gather）** クエリとは何ですか？また、なぜそれはパフォーマンスにとって問題になりますか？",
                solution: "散乱/収集クエリとは、単一のノードにルーティングできず、*すべて* のノードにリクエストを送信して実行する必要があるクエリです（散乱）。ノードはデータを処理し、結果をクエリ元のクライアントに返送してマージします（収集）。すべてのノードにアクセスし、高いネットワークオーバーヘッドが発生するため、遅いです。"
            },
            vi: {
                title: "Query Scatter/Gather",
                body: "Trong một cluster NoSQL được sharding, **scatter/gather** query là gì, và tại sao nó lại gây vấn đề cho hiệu suất?",
                solution: "Truy vấn scatter/gather là một truy vấn không thể được định tuyến đến một node duy nhất và phải được thực thi bằng cách gửi yêu cầu đến *tất cả* các node (scatter), sau đó các node này xử lý dữ liệu và gửi kết quả trở lại client truy vấn để hợp nhất (gather). Nó chậm vì nó truy cập mọi node và gây ra chi phí mạng cao."
            }
        }
    },
    {
        _id: "nosql-j-030",
        difficulty: "junior",
        tags: ["Document", "schema validation", "integrity"],
        content: {
            en: {
                title: "Schema Validation (MongoDB)",
                body: "Although Document stores are schema-less by default, modern systems like MongoDB offer a feature to enforce structure. What is this feature called, and what standard format is often used to define the rules?",
                solution: "Schema Validation. The rules are often defined using the JSON Schema standard."
            },
            jp: {
                title: "スキーマ検証（MongoDB）",
                body: "ドキュメントストアはデフォルトではスキーマレスですが、MongoDB のような最新のシステムは構造を強制する機能を提供しています。この機能は何と呼ばれ、ルールを定義するためによく使用される標準形式は何ですか？",
                solution: "スキーマ検証（Schema Validation）。ルールはしばしば JSON Schema 標準を使用して定義されます。"
            },
            vi: {
                title: "Schema Validation (MongoDB)",
                body: "Mặc dù Document store mặc định là schema-less, các hệ thống hiện đại như MongoDB cung cấp một tính năng để áp đặt cấu trúc. Tính năng này được gọi là gì, và định dạng tiêu chuẩn nào thường được sử dụng để định nghĩa các quy tắc?",
                solution: "Schema Validation. Các quy tắc thường được định nghĩa bằng cách sử dụng tiêu chuẩn JSON Schema."
            }
        }
    },
    {
        _id: "nosql-j-031",
        difficulty: "junior",
        tags: ["Graph", "Cypher", "relationships"],
        content: {
            en: {
                title: "Cypher Relationship Direction",
                body: "In Cypher, when matching a relationship, why is specifying the direction of the arrow (e.g., `->` or `<-`) generally recommended, even if you want to find relationships in both directions?",
                solution: "Specifying the direction is highly recommended because traversing relationships in an undirected manner is computationally more expensive (it checks in both directions) and can lead to less precise query results."
            },
            jp: {
                title: "Cypher の関係の方向",
                body: "Cypher では、両方向の関係を見つけたい場合でも、関係をマッチングするときに矢印の方向（例：`->` または `<-`）を指定することが一般的に推奨されるのはなぜですか？",
                solution: "方向を指定することは強く推奨されます。なぜなら、無向の方法で関係を走査することは計算コストが高く（両方向をチェックする）、クエリ結果の精度が低くなる可能性があるからです。"
            },
            vi: {
                title: "Hướng Mối quan hệ trong Cypher",
                body: "Trong Cypher, khi khớp một mối quan hệ, tại sao việc chỉ định hướng của mũi tên (ví dụ: `->` hoặc `<-`) thường được khuyến nghị, ngay cả khi bạn muốn tìm các mối quan hệ theo cả hai hướng?",
                solution: "Việc chỉ định hướng rất được khuyến nghị vì việc duyệt các mối quan hệ theo cách không định hướng tốn kém hơn về mặt tính toán (nó kiểm tra cả hai hướng) và có thể dẫn đến kết quả truy vấn kém chính xác hơn."
            }
        }
    },
    {
        _id: "nosql-j-032",
        difficulty: "junior",
        tags: ["CAP", "consistency", "linearizability"],
        content: {
            en: {
                title: "Strong Consistency vs Eventual Consistency",
                body: "What is the key difference between **Strong Consistency** (often associated with RDBMS and some NoSQL) and **Eventual Consistency** (BASE model)?",
                solution: "Strong Consistency guarantees that a read operation returns the result of the *most recent* completed write operation (immediately). Eventual Consistency only guarantees that this will happen *eventually* (after a propagation delay)."
            },
            jp: {
                title: "強力な整合性 対 結果整合性",
                body: "**強力な整合性**（RDBMS と一部の NoSQL に関連付けられることが多い）と **結果整合性**（BASE モデル）の主な違いは何ですか？",
                solution: "強力な整合性は、読み取り操作が *最新の* 完了した書き込み操作の結果を返すことを保証します（即座に）。結果整合性は、これが *最終的に* 発生することのみを保証します（伝播遅延の後）。"
            },
            vi: {
                title: "Strong Consistency so với Eventual Consistency",
                body: "Sự khác biệt chính giữa **Strong Consistency** (thường liên quan đến RDBMS và một số NoSQL) và **Eventual Consistency** (mô hình BASE) là gì?",
                solution: "Strong Consistency đảm bảo rằng thao tác đọc trả về kết quả của thao tác ghi đã hoàn thành *gần đây nhất* (ngay lập tức). Eventual Consistency chỉ đảm bảo rằng điều này sẽ xảy ra *cuối cùng* (sau một độ trễ lan truyền)."
            }
        }
    },
    {
        _id: "nosql-j-033",
        difficulty: "junior",
        tags: ["Key-Value", "use case", "inventory"],
        content: {
            en: {
                title: "Key-Value for Inventory",
                body: "If you were tracking the current stock count of millions of fast-moving inventory items, why would a Key-Value store be a better choice than an RDBMS for the inventory count lookup?",
                solution: "The Key-Value store provides extremely fast, low-latency lookups by item ID (key) and can handle the massive concurrent read/write throughput (high availability) required for fast-moving inventory without incurring the locking overhead of a relational system."
            },
            jp: {
                title: "在庫管理のためのキーバリュー",
                body: "数百万の動きの速い在庫アイテムの現在の在庫数を追跡している場合、在庫数ルックアップに RDBMS よりもキーバリューストアの方が適しているのはなぜですか？",
                solution: "キーバリューストアは、アイテム ID（キー）による非常に高速で低レイテンシのルックアップを提供し、リレーショナルシステムのロックオーバーヘッドを発生させることなく、動きの速い在庫に必要な大規模な同時読み取り/書き込みスループット（高可用性）を処理できます。"
            },
            vi: {
                title: "Key-Value cho Kho hàng",
                body: "Nếu bạn đang theo dõi số lượng tồn kho hiện tại của hàng triệu mặt hàng tồn kho di chuyển nhanh, tại sao Key-Value store lại là lựa chọn tốt hơn RDBMS cho việc tra cứu số lượng tồn kho?",
                solution: "Key-Value store cung cấp khả năng tra cứu cực nhanh, độ trễ thấp bằng ID mặt hàng (khóa) và có thể xử lý thông lượng đọc/ghi đồng thời lớn (tính sẵn sàng cao) cần thiết cho kho hàng di chuyển nhanh mà không gây ra chi phí khóa (locking overhead) của một hệ thống quan hệ."
            }
        }
    },
    {
        _id: "nosql-j-034",
        difficulty: "junior",
        tags: ["Column-Family", "data model", "time series"],
        content: {
            en: {
                title: "Time Series Data (Columnar)",
                body: "Why are Column-Family stores (like Cassandra) often excellent choices for storing and querying **time series data** (e.g., sensor readings or stock ticks)?",
                solution: "The data model naturally supports this: the Partition Key groups the data by device/sensor/stock, and the Clustering Key (usually a timestamp) ensures the data is physically stored in chronological order within that partition, making time-range queries extremely fast."
            },
            jp: {
                title: "時系列データ（カラム型）",
                body: "カラムファミリーストア（Cassandra など）が **時系列データ**（例：センサーの読み取り値や株価のティック）を保存およびクエリするための優れた選択肢となることが多いのはなぜですか？",
                solution: "データモデルがこれを自然にサポートしています。パーティションキーはデータデバイス/センサー/株価でデータをグループ化し、クラスタリングキー（通常はタイムスタンプ）はデータがそのパーティション内で時系列に物理的に保存されることを保証し、時間範囲クエリを非常に高速にします。"
            },
            vi: {
                title: "Dữ liệu Chuỗi thời gian (Columnar)",
                body: "Tại sao các Column-Family store (như Cassandra) thường là lựa chọn tuyệt vời để lưu trữ và truy vấn **dữ liệu chuỗi thời gian** (ví dụ: các chỉ số cảm biến hoặc tick chứng khoán)?",
                solution: "Mô hình dữ liệu hỗ trợ điều này một cách tự nhiên: Partition Key nhóm dữ liệu theo thiết bị/cảm biến/cổ phiếu, và Clustering Key (thường là dấu thời gian) đảm bảo dữ liệu được lưu trữ vật lý theo thứ tự thời gian trong phân vùng đó, giúp các truy vấn phạm vi thời gian cực kỳ nhanh."
            }
        }
    },
    {
        _id: "nosql-j-035",
        difficulty: "junior",
        tags: ["MongoDB", "transactions", "Multi-Document"],
        content: {
            en: {
                title: "Multi-Document Transactions (MongoDB)",
                body: "Since MongoDB 4.0, multi-document transactions were introduced. Why would a developer choose to use these transactions instead of relying on the standard single-document atomicity?",
                solution: "To maintain ACID properties (specifically atomicity and isolation) when updating multiple related documents (which are not embedded) in a complex operation, ensuring that either all changes are committed or none are."
            },
            jp: {
                title: "複数ドキュメントトランザクション（MongoDB）",
                body: "MongoDB 4.0 以降、複数ドキュメントトランザクションが導入されました。開発者は、標準の単一ドキュメントの原子性に頼るのではなく、これらのトランザクションを使用することを選択するのはなぜですか？",
                solution: "複雑な操作で複数の関連ドキュメント（埋め込まれていない）を更新するときに、ACID 特性（特に原子性と分離性）を維持し、すべての変更がコミットされるか、何もコミットされないことを保証するためです。"
            },
            vi: {
                title: "Multi-Document Transactions (MongoDB)",
                body: "Kể từ MongoDB 4.0, các giao dịch đa document đã được giới thiệu. Tại sao một nhà phát triển lại chọn sử dụng các giao dịch này thay vì dựa vào tính atomic đơn document tiêu chuẩn?",
                solution: "Để duy trì các thuộc tính ACID (đặc biệt là tính atomic và isolation) khi cập nhật nhiều document liên quan (không được nhúng) trong một thao tác phức tạp, đảm bảo rằng tất cả các thay đổi được commit hoặc không có thay đổi nào."
            }
        }
    },
    {
        _id: "nosql-j-036",
        difficulty: "junior",
        tags: ["Graph", "Cypher", "paths"],
        content: {
            en: {
                title: "Variable Length Paths (Cypher)",
                body: "In a Cypher query, how do you specify a relationship path that can be of variable length, ranging from 1 hop to 5 hops?",
                solution: "Use the path notation with a range: `-[:RELATIONSHIP*1..5]->`"
            },
            jp: {
                title: "可変長パス（Cypher）",
                body: "Cypher クエリで、1 ホップから 5 ホップまでの可変長の関係パスをどのように指定しますか？",
                solution: "範囲を持つパス表記を使用します: `-[:RELATIONSHIP*1..5]->`"
            },
            vi: {
                title: "Đường đi Độ dài Biến đổi (Cypher)",
                body: "Trong một truy vấn Cypher, làm thế nào bạn chỉ định một đường đi mối quan hệ có thể có độ dài biến đổi, dao động từ 1 bước nhảy đến 5 bước nhảy?",
                solution: "Sử dụng ký hiệu đường đi với một phạm vi: `-[:RELATIONSHIP*1..5]->`"
            }
        }
    },
    {
        _id: "nosql-j-037",
        difficulty: "junior",
        tags: ["Key-Value", "Redis", "data structure", "Hash"],
        content: {
            en: {
                title: "Redis Hash vs String",
                body: "If you need to store detailed profile information for millions of users (e.g., name, email, last login), why would using a Redis **Hash** be preferable to storing each attribute as a separate Redis String (Key-Value pair)?",
                solution: "Using a Hash stores all user attributes under a single key (`user:123`) which reduces key space overhead, allows fetching all attributes in one request (HMGET/HGETALL), and enables atomic updates to individual fields within the object."
            },
            jp: {
                title: "Redis Hash 対 String",
                body: "数百万のユーザーの詳細なプロファイル情報（例：名前、メールアドレス、最終ログイン）を保存する必要がある場合、各属性を個別の Redis String（キーバリューペア）として保存するよりも、Redis **Hash** を使用することが推奨されるのはなぜですか？",
                solution: "Hash を使用すると、すべてのユーザー属性が単一のキー（`user:123`）の下に保存され、キー空間のオーバーヘッドが減り、1 つのリクエストですべての属性を取得でき（HMGET/HGETALL）、オブジェクト内の個々のフィールドへのアトミックな更新が可能になります。"
            },
            vi: {
                title: "Redis Hash so với String",
                body: "Nếu bạn cần lưu trữ thông tin hồ sơ chi tiết cho hàng triệu người dùng (ví dụ: tên, email, lần đăng nhập cuối cùng), tại sao việc sử dụng Redis **Hash** lại tốt hơn so với việc lưu trữ mỗi thuộc tính dưới dạng một Redis String (cặp Key-Value) riêng biệt?",
                solution: "Sử dụng Hash lưu trữ tất cả các thuộc tính người dùng dưới một khóa duy nhất (`user:123`), điều này làm giảm chi phí key space, cho phép tìm nạp tất cả các thuộc tính trong một yêu cầu (HMGET/HGETALL) và cho phép cập nhật atomic cho từng trường riêng lẻ bên trong đối tượng."
            }
        }
    },
    {
        _id: "nosql-j-038",
        difficulty: "junior",
        tags: ["Column-Family", "Compaction", "performance"],
        content: {
            en: {
                title: "Compaction (Cassandra)",
                body: "In Cassandra, the system frequently performs a background process called **Compaction**. What is the main goal of compaction, and why is it necessary?",
                solution: "Compaction merges multiple sorted on-disk data files (SSTables) into one, consolidating data, deleting old/expired values, and freeing up disk space. It's necessary because new writes are always appended, leading to multiple versions of the same data over time."
            },
            jp: {
                title: "コンパクション（Cassandra）",
                body: "Cassandra では、システムは頻繁に **コンパクション** と呼ばれるバックグラウンドプロセスを実行します。コンパクションの主な目的は何ですか？また、なぜそれが必要なのですか？",
                solution: "コンパクションは、複数のソートされたオンディスクデータファイル（SSTables）を 1 つにマージし、データを統合し、古くなった/期限切れの値を削除し、ディスクスペースを解放します。新しい書き込みは常に追加されるため、時間の経過とともに同じデータの複数のバージョンが発生するため、必要です。"
            },
            vi: {
                title: "Compaction (Cassandra)",
                body: "Trong Cassandra, hệ thống thường xuyên thực hiện một quy trình nền được gọi là **Compaction**. Mục tiêu chính của compaction là gì, và tại sao nó cần thiết?",
                solution: "Compaction hợp nhất nhiều tệp dữ liệu được sắp xếp trên đĩa (SSTables) thành một, hợp nhất dữ liệu, xóa các giá trị cũ/hết hạn và giải phóng không gian đĩa. Nó cần thiết vì các lần ghi mới luôn được thêm vào, dẫn đến nhiều phiên bản của cùng một dữ liệu theo thời gian."
            }
        }
    },
    {
        _id: "nosql-j-039",
        difficulty: "junior",
        tags: ["Document", "indexing", "geospatial"],
        content: {
            en: {
                title: "Geospatial Index (MongoDB)",
                body: "What specialized type of index is used by MongoDB to efficiently query location data (e.g., 'find all restaurants within 5 miles of this point')?",
                solution: "2dsphere or 2d index."
            },
            jp: {
                title: "地理空間インデックス（MongoDB）",
                body: "MongoDB が位置情報データ（例：「この地点から 5 マイル以内のすべてのレストランを見つける」）を効率的にクエリするために使用する特殊なタイプのインデックスは何ですか？",
                solution: "2dsphere または 2d index。"
            }
            ,
            vi: {
                title: "Geospatial Index (MongoDB)",
                body: "Loại index chuyên biệt nào được MongoDB sử dụng để truy vấn dữ liệu vị trí một cách hiệu quả (ví dụ: 'tìm tất cả các nhà hàng trong vòng 5 dặm tính từ điểm này')?",
                solution: "2dsphere hoặc 2d index."
            }
        }
    },
    {
        _id: "nosql-j-040",
        difficulty: "junior",
        tags: ["CAP", "partition tolerance", "sharding"],
        content: {
            en: {
                title: "Partition Tolerance",
                body: "In the context of the CAP theorem, define **Partition Tolerance**.",
                solution: "The system continues to operate and function (albeit perhaps with a loss of consistency or availability) even if the network fails to communicate between some nodes (a network partition)."
            },
            jp: {
                title: "パーティション耐性",
                body: "CAP 定理のコンテキストにおいて、**パーティション耐性** を定義してください。",
                solution: "ネットワークが一部のノード間で通信できなくなった場合でも（ネットワークパーティション）、システムが動作し続けること（ただし、整合性または可用性が失われる可能性がある）。"
            }
            ,
            vi: {
                title: "Partition Tolerance",
                body: "Trong bối cảnh của định lý CAP, định nghĩa **Partition Tolerance** (Khả năng chịu lỗi phân vùng).",
                solution: "Hệ thống tiếp tục hoạt động và chức năng (mặc dù có thể bị mất tính nhất quán hoặc tính sẵn sàng) ngay cả khi mạng không thể giao tiếp giữa một số node (sự cố phân vùng mạng)."
            }
        }
    },
    {
        _id: "nosql-j-041",
        difficulty: "junior",
        tags: ["Graph", "terms", "label", "type"],
        content: {
            en: {
                title: "Node Label vs Relationship Type",
                body: "In a Graph database, what is the difference between a **Node Label** and a **Relationship Type**?",
                solution: "A Node Label (e.g., :Person) categorizes the entity, similar to a class or table. A Relationship Type (e.g., :WORKS_FOR) defines the meaning of the connection between two nodes."
            },
            jp: {
                title: "ノードラベル 対 関係タイプ",
                body: "グラフデータベースにおいて、**ノードラベル** と **関係タイプ** の違いは何ですか？",
                solution: "ノードラベル（例：:Person）は、クラスやテーブルと同様に、エンティティを分類します。関係タイプ（例：:WORKS_FOR）は、2 つのノード間の接続の意味を定義します。"
            },
            vi: {
                title: "Node Label so với Relationship Type",
                body: "Trong cơ sở dữ liệu Graph, sự khác biệt giữa **Node Label** và **Relationship Type** là gì?",
                solution: "Node Label (ví dụ: :Person) phân loại thực thể, tương tự như một class hoặc table. Relationship Type (ví dụ: :WORKS_FOR) định nghĩa ý nghĩa của kết nối giữa hai node."
            }
        }
    },
    {
        _id: "nosql-j-042",
        difficulty: "junior",
        tags: ["Key-Value", "use case", "leaderboard"],
        content: {
            en: {
                title: "Leaderboards with Redis",
                body: "Which native Redis data structure is the best choice for implementing a real-time game leaderboard that ranks users based on scores and allows fetching the top 10 users?",
                solution: "A Redis Sorted Set. It keeps elements unique, associated with a score, and maintains the list in sorted order for fast range querying."
            }
            ,
            jp: {
                title: "Redis を使用したリーダーボード",
                body: "スコアに基づいてユーザーをランク付けし、トップ 10 のユーザーを取得できるようにするリアルタイムのゲームリーダーボードを実装するための最良の選択であるネイティブの Redis データ構造は何ですか？",
                solution: "Redis ソート済みセット（Sorted Set）。要素を一意に保ち、スコアに関連付け、高速な範囲クエリのためにリストをソートされた順序で維持します。"
            }
            ,
            vi: {
                title: "Bảng xếp hạng với Redis",
                body: "Cấu trúc dữ liệu gốc nào của Redis là lựa chọn tốt nhất để triển khai bảng xếp hạng trò chơi theo thời gian thực, xếp hạng người dùng dựa trên điểm số và cho phép tìm nạp 10 người dùng hàng đầu?",
                solution: "A Redis Sorted Set. Nó giữ các phần tử duy nhất, liên kết với một điểm số, và duy trì danh sách theo thứ tự đã sắp xếp để truy vấn phạm vi nhanh chóng."
            }
        }
    },
    {
        _id: "nosql-j-043",
        difficulty: "junior",
        tags: ["Column-Family", "indexing", "secondary"],
        content: {
            en: {
                title: "Secondary Index Limitations (Cassandra)",
                body: "Why are **Secondary Indexes** in Cassandra generally only recommended for low-cardinality columns (columns with few unique values) and not for high-cardinality columns (columns with many unique values)?",
                solution: "Secondary Indexes must be maintained on *every* node. Indexing high-cardinality data leads to scatter/gather queries across all nodes, defeating the purpose of distributed partitioning and severely impacting performance."
            },
            jp: {
                title: "セカンダリインデックスの制限（Cassandra）",
                body: "Cassandra の **セカンダリインデックス** は、一般に低カーディナリティの列（一意の値が少ない列）にのみ推奨され、高カーディナリティの列（一意の値が多い列）には推奨されないのはなぜですか？",
                solution: "セカンダリインデックスは *すべて* のノードで維持される必要があります。高カーディナリティのデータにインデックスを付けると、すべてのノードにわたる散乱/収集クエリが発生し、分散パーティショニングの目的が損なわれ、パフォーマンスに深刻な影響を与えます。"
            },
            vi: {
                title: "Hạn chế của Secondary Index (Cassandra)",
                body: "Tại sao **Secondary Index** trong Cassandra nhìn chung chỉ được khuyến nghị cho các cột có cardinality thấp (cột có ít giá trị duy nhất) mà không phải cho các cột có cardinality cao (cột có nhiều giá trị duy nhất)?",
                solution: "Secondary Index phải được duy trì trên *mọi* node. Lập index cho dữ liệu cardinality cao dẫn đến các truy vấn scatter/gather trên tất cả các node, làm mất đi mục đích của việc phân vùng phân tán và ảnh hưởng nghiêm trọng đến hiệu suất."
            }
        }
    },
    {
        _id: "nosql-j-044",
        difficulty: "junior",
        tags: ["Document", "indexing", "performance"],
        content: {
            en: {
                title: "Covered Query (MongoDB)",
                body: "What is a **Covered Query** in MongoDB, and why is it the fastest type of query?",
                solution: "A Covered Query is one where all the fields in the query (the criteria, the projected fields, and the sort fields) are part of an index. It's the fastest because MongoDB can satisfy the query entirely from the index without having to look up the actual documents on disk."
            },
            jp: {
                title: "カバードクエリ（MongoDB）",
                body: "MongoDB における **カバードクエリ** とは何ですか？また、なぜそれが最も速いタイプのクエリなのですか？",
                solution: "カバードクエリとは、クエリ内のすべてのフィールド（条件、射影されたフィールド、ソートフィールド）がインデックスの一部であるクエリです。MongoDB はディスク上の実際のドキュメントをルックアップすることなく、インデックスからクエリ全体を満たすことができるため、最も高速です。"
            },
            vi: {
                title: "Covered Query (MongoDB)",
                body: "**Covered Query** trong MongoDB là gì, và tại sao nó là loại truy vấn nhanh nhất?",
                solution: "Covered Query là một truy vấn mà tất cả các trường trong truy vấn (tiêu chí, các trường được chiếu (projected fields) và các trường sắp xếp) đều là một phần của một index. Nó nhanh nhất vì MongoDB có thể thỏa mãn truy vấn hoàn toàn từ index mà không cần phải tra cứu các document thực tế trên đĩa."
            }
        }
    },
    {
        _id: "nosql-j-045",
        difficulty: "junior",
        tags: ["Key-Value", "use case", "session"],
        content: {
            en: {
                title: "Session Expiration",
                body: "For using a Key-Value store for session management, why is setting a **TTL (Time-To-Live)** on the session key crucial?",
                solution: "The TTL ensures that session data is automatically removed from the database after a period of inactivity or expiration, preventing stale data from accumulating and causing security or memory issues."
            },
            jp: {
                title: "セッションの有効期限",
                body: "セッション管理のためにキーバリューストアを使用する場合、セッションキーに **TTL（Time-To-Live）** を設定することが非常に重要であるのはなぜですか？",
                solution: "TTL は、セッションデータが非アクティブまたは有効期限が切れた後にデータベースから自動的に削除されることを保証し、古いデータが蓄積するのを防ぎ、セキュリティやメモリの問題を引き起こすのを防ぎます。"
            },
            vi: {
                title: "Hết hạn Phiên",
                body: "Đối với việc sử dụng Key-Value store để quản lý phiên, tại sao việc đặt **TTL (Time-To-Live)** trên khóa phiên lại quan trọng?",
                solution: "TTL đảm bảo rằng dữ liệu phiên được tự động xóa khỏi cơ sở dữ liệu sau một khoảng thời gian không hoạt động hoặc hết hạn, ngăn chặn dữ liệu cũ tích tụ và gây ra các vấn đề về bảo mật hoặc bộ nhớ."
            }
        }
    },
    {
        _id: "nosql-j-046",
        difficulty: "junior",
        tags: ["Graph", "terms", "traversal"],
        content: {
            en: {
                title: "Graph Traversal vs Relational Joins",
                body: "Explain why executing a graph traversal query involving 4 'hops' (relationships) is much more efficient than executing a 4-level deep JOIN query in a large RDBMS.",
                solution: "Graph databases physically store nodes and their relationships together (index-free adjacency), allowing the query engine to immediately jump from one node to the next. RDBMS requires four separate index lookups and expensive hash or merge operations to join tables four times."
            },
            jp: {
                title: "グラフ走査 対 リレーショナル結合",
                body: "4 つの「ホップ」（関係）を含むグラフ走査クエリを実行することが、大規模な RDBMS で 4 レベルの深い JOIN クエリを実行するよりもはるかに効率的である理由を説明してください。",
                solution: "グラフデータベースは、ノードとその関係を物理的に一緒に保存するため（インデックスフリー隣接）、クエリエンジンはすぐに次のノードにジャンプできます。RDBMS は、テーブルを 4 回結合するために、4 つの個別のインデックスルックアップと高価なハッシュまたはマージ操作を必要とします。"
            },
            vi: {
                title: "Graph Traversal so với Relational Joins",
                body: "Giải thích tại sao việc thực hiện một truy vấn duyệt graph bao gồm 4 'bước nhảy' (mối quan hệ) lại hiệu quả hơn nhiều so với việc thực hiện một truy vấn JOIN sâu 4 cấp trong một RDBMS lớn.",
                solution: "Các cơ sở dữ liệu Graph lưu trữ vật lý các node và mối quan hệ của chúng cùng nhau (index-free adjacency), cho phép công cụ truy vấn nhảy ngay lập tức từ node này sang node tiếp theo. RDBMS yêu cầu bốn lần tra cứu index riêng biệt và các thao tác băm hoặc hợp nhất tốn kém để nối bốn bảng."
            }
        }
    },
    {
        _id: "nosql-j-047",
        difficulty: "junior",
        tags: ["Document", "indexing", "performance"],
        content: {
            en: {
                title: "Index on Array Field (MongoDB)",
                body: "Can MongoDB create a standard B-Tree index on a field that contains an array of values (e.g., a list of tags)? If so, how does the index store the array?",
                solution: "Yes, it can. MongoDB creates a multi-key index, where there is a separate index entry for *each* element in the array, allowing queries to efficiently find documents that contain a specific array element."
            },
            jp: {
                title: "配列フィールドのインデックス（MongoDB）",
                body: "MongoDB は、値の配列を含むフィールド（例：タグのリスト）に標準の B-Tree インデックスを作成できますか？もしそうなら、インデックスは配列をどのように保存しますか？",
                solution: "はい、作成できます。MongoDB はマルチキーインデックスを作成します。そこでは、配列内の *各* 要素に対して個別のインデックスエントリがあり、クエリが特定の配列要素を含むドキュメントを効率的に見つけることができます。"
            },
            vi: {
                title: "Index trên Trường Mảng (MongoDB)",
                body: "MongoDB có thể tạo một index B-Tree tiêu chuẩn trên một trường chứa một mảng các giá trị không (ví dụ: một danh sách các tags)? Nếu có, index lưu trữ mảng như thế nào?",
                solution: "Có, nó có thể. MongoDB tạo một multi-key index, trong đó có một mục index riêng cho *mỗi* phần tử trong mảng, cho phép các truy vấn tìm kiếm hiệu quả các document chứa một phần tử mảng cụ thể."
            }
        }
    },
    {
        _id: "nosql-j-048",
        difficulty: "junior",
        tags: ["Column-Family", "data model", "mutability"],
        content: {
            en: {
                title: "Updates in Columnar Stores",
                body: "In a Column-Family store, are records technically 'updated' or are they effectively a new write? Explain the difference.",
                solution: "They are effectively a new write. Instead of updating the data in place (like RDBMS), a new timestamped cell value is written. The old value is marked as a tombstone or simply ignored during reads, with the actual removal happening later during compaction."
            },
            jp: {
                title: "カラム型ストアでの更新",
                body: "カラムファミリーストアでは、レコードは技術的に「更新」されますか、それとも実質的に新しい書き込みですか？違いを説明してください。",
                solution: "それらは実質的に新しい書き込みです。インプレースでデータを更新する（RDBMS のように）代わりに、新しいタイムスタンプ付きのセル値が書き込まれます。古い値は墓石としてマークされるか、読み取り中に単純に無視され、実際の削除は後でコンパクション中に行われます。"
            },
            vi: {
                title: "Cập nhật trong Columnar Store",
                body: "Trong một Column-Family store, các bản ghi có được 'cập nhật' về mặt kỹ thuật hay chúng thực chất là một lần ghi mới? Giải thích sự khác biệt.",
                solution: "Chúng thực chất là một lần ghi mới. Thay vì cập nhật dữ liệu tại chỗ (như RDBMS), một giá trị ô mới có dấu thời gian được ghi. Giá trị cũ được đánh dấu là tombstone (bia mộ) hoặc chỉ đơn giản bị bỏ qua trong quá trình đọc, với việc xóa thực tế xảy ra sau đó trong quá trình compaction."
            }
        }
    },
    {
        _id: "nosql-j-049",
        difficulty: "junior",
        tags: ["Key-Value", "use case", "pub/sub"],
        content: {
            en: {
                title: "Pub/Sub (Redis)",
                body: "Besides data structures, Redis can act as a lightweight message broker. What is the messaging pattern called where senders categorize messages into channels, and receivers subscribe to only the channels they are interested in?",
                solution: "Publish/Subscribe (Pub/Sub)."
            }
            ,
            jp: {
                title: "Pub/Sub（Redis）",
                body: "Redis はデータ構造に加えて、軽量なメッセージブローカーとしても機能します。送信者がメッセージをチャネルに分類し、受信者が関心のあるチャネルのみを購読するメッセージングパターンは何と呼ばれますか？",
                solution: "パブリッシュ/サブスクライブ（Pub/Sub）。"
            }
            ,
            vi: {
                title: "Pub/Sub (Redis)",
                body: "Ngoài các cấu trúc dữ liệu, Redis có thể hoạt động như một message broker nhẹ. Mô hình nhắn tin nào được gọi là nơi người gửi phân loại tin nhắn thành các kênh và người nhận chỉ đăng ký các kênh mà họ quan tâm?",
                solution: "Publish/Subscribe (Pub/Sub)."
            }
        }
    },
    {
        _id: "nosql-j-050",
        difficulty: "junior",
        tags: ["Document", "indexing", "unique"],
        content: {
            en: {
                title: "Unique Index (Document DB)",
                body: "How can you use an index in a Document database (e.g., MongoDB) to enforce the relational concept of a unique constraint (e.g., ensuring no two users have the same email address)?",
                solution: "By creating a **unique index** on the `email` field. If an attempt is made to insert or update a document with a duplicate email value, the database will reject the operation."
            },
            jp: {
                title: "一意インデックス（ドキュメント DB）",
                body: "ドキュメントデータベース（MongoDB など）でインデックスを使用して、一意制約のリレーショナルな概念（例：2 人のユーザーが同じメールアドレスを持たないようにする）を強制するにはどうすればよいですか？",
                solution: "`email` フィールドに **一意インデックス（unique index）** を作成します。重複するメール値を持つドキュメントを挿入または更新しようとすると、データベースはその操作を拒否します。"
            },
            vi: {
                title: "Unique Index (Document DB)",
                body: "Làm thế nào bạn có thể sử dụng một index trong cơ sở dữ liệu Document (ví dụ: MongoDB) để áp dụng khái niệm ràng buộc duy nhất (unique constraint) của quan hệ (ví dụ: đảm bảo không có hai người dùng nào có cùng địa chỉ email)?",
                solution: "Bằng cách tạo một **unique index** trên trường `email`. Nếu cố gắng chèn hoặc cập nhật một document với giá trị email trùng lặp, cơ sở dữ liệu sẽ từ chối thao tác đó."
            }
        }
    }
];

// Để import vào project frontend
export default nosqlJuniorQuestions;