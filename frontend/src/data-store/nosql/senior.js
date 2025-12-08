const nosqlSeniorQuestions = [
    // --- SENIOR (50 Questions) ---
    {
        _id: "nosql-s-001",
        difficulty: "senior",
        tags: ["distributed systems", "CAP", "eventual consistency", "CRDT"],
        content: {
            en: {
                title: "CRDTs vs LWW",
                body: "Explain the fundamental advantage of using **Conflict-free Replicated Data Types (CRDTs)** over the simple **Last Write Wins (LWW)** conflict resolution strategy in eventually consistent NoSQL systems, especially when dealing with data like shopping carts or collaborative documents.",
                solution: "CRDTs guarantee strong eventual consistency by defining a mathematical structure and merge function that is commutative and associative, meaning concurrent updates can be merged deterministically without data loss, regardless of the order they arrive. LWW, conversely, may lose data if a write with an earlier timestamp arrives last, making it unsuitable for complex state aggregation like counter increments."
            },
            jp: {
                title: "CRDT 対 LWW",
                body: "特にショッピングカートや共同ドキュメントなどのデータを扱う場合、結果整合性のある NoSQL システムで、単純な **最終書き込み優先（LWW）** の競合解決戦略と比較して、**競合のないレプリケートデータ型（CRDT）** を使用する根本的な利点を説明してください。",
                solution: "CRDT は、可換および結合的である数学的構造とマージ関数を定義することにより、強力な結果整合性を保証します。つまり、同時更新は、到着順序に関係なく、データ損失なしで決定論的にマージできます。対照的に、LWW は、より古いタイムスタンプを持つ書き込みが最後に到着した場合にデータを失う可能性があり、カウンターのインクリメントのような複雑な状態集約には適していません。"
            },
            vi: {
                title: "CRDTs so với LWW",
                body: "Giải thích lợi thế cơ bản của việc sử dụng **Conflict-free Replicated Data Types (CRDTs)** so với chiến lược giải quyết xung đột **Last Write Wins (LWW)** đơn giản trong các hệ thống NoSQL nhất quán cuối cùng, đặc biệt khi xử lý dữ liệu như giỏ hàng hoặc tài liệu cộng tác.",
                solution: "CRDTs đảm bảo tính nhất quán cuối cùng mạnh mẽ bằng cách xác định một cấu trúc toán học và hàm hợp nhất có tính giao hoán và kết hợp, nghĩa là các cập nhật đồng thời có thể được hợp nhất một cách xác định mà không làm mất dữ liệu, bất kể thứ tự chúng đến. Ngược lại, LWW có thể làm mất dữ liệu nếu một lần ghi có dấu thời gian cũ hơn đến sau cùng, khiến nó không phù hợp cho việc tổng hợp trạng thái phức tạp như tăng bộ đếm."
            }
        }
    },
    {
        _id: "nosql-s-002",
        difficulty: "senior",
        tags: ["MongoDB", "transactions", "causal consistency", "write concern"],
        content: {
            en: {
                title: "Causal Consistency (MongoDB)",
                body: "Beyond ACID transactions, MongoDB supports **Causal Consistency** through sessions. How do driver sessions enforce causal consistency across multiple read and write operations, and why is this critical in a distributed sharded cluster?",
                solution: "Driver sessions maintain a **Logical Clock** (using the cluster's operation time) that is passed with every read and write. The next operation in the session waits until it sees the state guaranteed by the previous operation's time. This prevents clients from reading stale data (Write-Follows-Read consistency) even if those operations hit different shards."
            },
            jp: {
                title: "因果整合性（MongoDB）",
                body: "ACID トランザクションを超えて、MongoDB はセッションを通じて **因果整合性** をサポートしています。ドライバーセッションは、複数の読み取りおよび書き込み操作間で因果整合性をどのように強制しますか？また、これは分散シャーディングクラスターでなぜ重要ですか？",
                solution: "ドライバーセッションは、すべての読み取りおよび書き込みと共に渡される **論理クロック**（クラスターの操作時間を使用）を維持します。セッション内の次の操作は、前の操作の時刻によって保証された状態を確認するまで待機します。これにより、操作が異なるシャードにヒットした場合でも、クライアントが古いデータを読み取るのを防ぎます（Write-Follows-Read 整合性）。"
            }
            ,
            vi: {
                title: "Causal Consistency (MongoDB)",
                body: "Ngoài các giao dịch ACID, MongoDB hỗ trợ **Causal Consistency (Tính nhất quán Nguyên nhân)** thông qua các phiên. Các phiên trình điều khiển thực thi tính nhất quán nguyên nhân trên nhiều thao tác đọc và ghi như thế nào, và tại sao điều này lại quan trọng trong một cluster phân tán được sharding?",
                solution: "Các phiên trình điều khiển duy trì một **Đồng hồ Logic (Logical Clock)** (sử dụng thời gian hoạt động của cluster) được truyền đi với mọi thao tác đọc và ghi. Thao tác tiếp theo trong phiên sẽ chờ cho đến khi nó thấy trạng thái được đảm bảo bởi thời gian của thao tác trước đó. Điều này ngăn chặn client đọc dữ liệu cũ (nhất quán Ghi-theo-Đọc) ngay cả khi các thao tác đó chạm vào các shard khác nhau."
            }
        }
    },
    {
        _id: "nosql-s-003",
        difficulty: "senior",
        tags: ["Column-Family", "data model", "anti-pattern", "secondary index"],
        content: {
            en: {
                title: "Secondary Index Anti-Pattern (Cassandra)",
                body: "Explain why using a **Secondary Index** in Cassandra on a high-cardinality, low-frequency column (i.e., most values are unique, like user ID) is generally an anti-pattern that severely degrades read performance across the cluster.",
                solution: "Secondary Indexes are global in Cassandra. When queried, the coordinating node must fan-out the request to **ALL** nodes in the cluster to search the index locally, then gather and merge the results. For high-cardinality data, this requires a costly full-cluster scan (scatter/gather operation) every time, negating the distribution advantage."
            },
            jp: {
                title: "セカンダリインデックスのアンチパターン（Cassandra）",
                body: "Cassandra で、カーディナリティが高く、頻度の低いカラム（つまり、ユーザー ID のようにほとんどの値が一意である）に **セカンダリインデックス** を使用することが、クラスター全体の読み取りパフォーマンスを著しく低下させるアンチパターンであるのはなぜか説明してください。",
                solution: "Cassandra のセカンダリインデックスはグローバルです。クエリが実行されると、コーディネーターノードはクラスター内の **すべて** のノードにリクエストをファンアウトしてインデックスをローカルで検索し、次に結果を収集してマージする必要があります。カーディナリティの高いデータの場合、これにより毎回コストのかかるフルクラスター検索（スキャッター/ギャザー操作）が必要になり、分散の利点が失われます。"
            },
            vi: {
                title: "Anti-Pattern Secondary Index (Cassandra)",
                body: "Giải thích tại sao việc sử dụng **Secondary Index** trong Cassandra trên một cột có cardinality cao, tần suất thấp (tức là hầu hết các giá trị là duy nhất, như ID người dùng) lại thường là một anti-pattern làm giảm nghiêm trọng hiệu suất đọc trên toàn bộ cluster.",
                solution: "Secondary Index là global trong Cassandra. Khi được truy vấn, node điều phối phải fan-out yêu cầu đến **TẤT CẢ** các node trong cluster để tìm kiếm index cục bộ, sau đó thu thập và hợp nhất các kết quả. Đối với dữ liệu có cardinality cao, điều này đòi hỏi một lần quét toàn bộ cluster tốn kém (thao tác scatter/gather) mỗi lần, làm mất đi lợi thế phân phối."
            }
        }
    },
    {
        _id: "nosql-s-004",
        difficulty: "senior",
        tags: ["Graph", "modeling", "data warehouse"],
        content: {
            en: {
                title: "Graph Data Warehouse Integration",
                body: "How can a Graph database (like Neo4j) be strategically integrated into a company's data architecture to complement a traditional Data Warehouse/Lake, rather than replace it? Provide a use case.",
                solution: "The Data Warehouse handles large-scale OLAP (analytical) aggregations and historical storage. The Graph DB handles **relationship-intensive operational queries** (OLTP). Use Case: Run OLAP on the DW to identify fraudulent *accounts*, then load those accounts into the Graph DB to instantly trace the **network of connections** (phones, addresses, transactions) linked to them to find *rings* of fraud."
            },
            jp: {
                title: "グラフデータウェアハウスの統合",
                body: "グラフデータベース（Neo4j など）を、従来のデータウェアハウス/レイクに取って代わるのではなく、補完するために、会社のデータアーキテクチャに戦略的に統合するにはどうすればよいですか？ユースケースを提供してください。",
                solution: "データウェアハウスは大規模な OLAP（分析）集計と履歴ストレージを処理します。グラフ DB は **関係集約型の運用クエリ**（OLTP）を処理します。ユースケース：DW で OLAP を実行して不正な *アカウント* を特定し、次にそれらのアカウントをグラフ DB にロードして、それらに関連付けられた **接続のネットワーク**（電話、住所、トランザクション）を即座に追跡し、不正の *リング* を見つけます。"
            },
            vi: {
                title: "Tích hợp Graph Data Warehouse",
                body: "Làm thế nào một cơ sở dữ liệu Graph (như Neo4j) có thể được tích hợp một cách chiến lược vào kiến trúc dữ liệu của công ty để bổ sung, thay vì thay thế, một Data Warehouse/Lake truyền thống? Cung cấp một trường hợp sử dụng.",
                solution: "Data Warehouse xử lý các tổng hợp OLAP (phân tích) quy mô lớn và lưu trữ lịch sử. Graph DB xử lý **các truy vấn hoạt động chuyên sâu về mối quan hệ** (OLTP). Trường hợp sử dụng: Chạy OLAP trên DW để xác định các *tài khoản* gian lận, sau đó tải các tài khoản đó vào Graph DB để ngay lập tức truy tìm **mạng lưới kết nối** (điện thoại, địa chỉ, giao dịch) liên kết với chúng để tìm *các vòng* gian lận."
            }
        }
    },
    {
        _id: "nosql-s-005",
        difficulty: "senior",
        tags: ["Key-Value", "Redis", "scripting", "EVAL", "atomicity"],
        content: {
            en: {
                title: "Atomic Operations with Lua (Redis)",
                body: "In Redis, why is the **EVAL** command, which executes Lua scripts, the preferred way to ensure **atomicity** for complex, multi-step operations (e.g., check stock, decrement stock, add to order log) over using MULTI/EXEC transactions alone?",
                solution: "Redis guarantees that a Lua script executed via **EVAL** runs to completion **atomically** without interruption from other commands or clients. While MULTI/EXEC provides isolation, it can still fail if the WATCH command detects changes (optimistic locking). EVAL provides true *guaranteed* atomicity (like pessimistic locking) for the duration of the script, preventing race conditions more reliably."
            },
            jp: {
                title: "Lua によるアトミック操作（Redis）",
                body: "Redis では、Lua スクリプトを実行する **EVAL** コマンドが、複雑な多段階操作（例：在庫確認、在庫削減、注文ログへの追加）の **原子性** を確保するために、MULTI/EXEC トランザクション単独を使用するよりも優先されるのはなぜですか？",
                solution: " **EVAL** を介して実行される Lua スクリプトは、他のコマンドやクライアントによる中断なしに **アトミックに** 完了することが保証されます。MULTI/EXEC は隔離性を提供しますが、WATCH コマンドが変更を検出すると失敗する可能性があります（楽観的ロック）。EVAL は、スクリプトの実行期間中、真の *保証された* 原子性（悲観的ロックのようなもの）を提供し、競合状態をより確実に防ぎます。"
            },
            vi: {
                title: "Thao tác Atomic với Lua (Redis)",
                body: "Trong Redis, tại sao lệnh **EVAL**, thực thi các script Lua, lại là cách ưu tiên để đảm bảo **tính nguyên tử (atomicity)** cho các thao tác phức tạp, nhiều bước (ví dụ: kiểm tra kho, giảm kho, thêm vào log đơn hàng) so với việc chỉ sử dụng các giao dịch MULTI/EXEC?",
                solution: "Redis đảm bảo rằng một script Lua được thực thi thông qua **EVAL** chạy đến khi hoàn thành **một cách nguyên tử** mà không bị gián đoạn bởi các lệnh hoặc client khác. Mặc dù MULTI/EXEC cung cấp sự cô lập, nó vẫn có thể thất bại nếu lệnh WATCH phát hiện ra các thay đổi (khóa lạc quan). EVAL cung cấp tính nguyên tử *được đảm bảo* thực sự (giống như khóa bi quan) trong suốt thời gian script chạy, ngăn chặn race condition một cách đáng tin cậy hơn."
            }
        }
    },
    {
        _id: "nosql-s-006",
        difficulty: "senior",
        tags: ["distributed systems", "sharding", "rebalancing", "consistency"],
        content: {
            en: {
                title: "Manual vs Automatic Rebalancing",
                body: "In the context of distributed NoSQL systems, compare the architectural complexity and trade-offs of a system requiring **manual sharding and rebalancing** (e.g., early MongoDB/Cassandra) versus one providing **automatic/transparent rebalancing** (e.g., CockroachDB/DynamoDB).",
                solution: "Manual rebalancing shifts the operational burden and risk (data loss/downtime) to the DevOps team, but offers greater control over shard key choice. Automatic rebalancing uses complex consensus algorithms (like Raft/Paxos) to autonomously move data and update metadata, which simplifies operations but adds complexity to the database kernel and can introduce performance jitters during background rebalancing activity." 


            },
            jp: {
                title: "手動 対 自動リバランス",
                body: "分散 NoSQL システムのコンテキストで、**手動のシャーディングとリバランス** を必要とするシステム（例：初期の MongoDB/Cassandra）と、**自動/透過的なリバランス** を提供するシステム（例：CockroachDB/DynamoDB）のアーキテクチャ上の複雑さとトレードオフを比較してください。",
                solution: "手動リバランスは、運用上の負担とリスク（データ損失/ダウンタイム）を DevOps チームに移行しますが、シャードキーの選択をより細かく制御できます。自動リバランスは、複雑なコンセンサスアルゴリズム（Raft/Paxos など）を使用して自律的にデータを移動し、メタデータを更新します。これにより、操作は簡素化されますが、データベースカーネルに複雑さが加わり、バックグラウンドでのリバランスアクティビティ中にパフォーマンスのジッターが発生する可能性があります。" 



            },
            vi: {
                title: "Tái cân bằng Thủ công so với Tự động",
                body: "Trong bối cảnh các hệ thống NoSQL phân tán, hãy so sánh sự phức tạp kiến trúc và sự đánh đổi giữa một hệ thống yêu cầu **sharding và tái cân bằng thủ công** (ví dụ: MongoDB/Cassandra đời đầu) so với một hệ thống cung cấp **tái cân bằng tự động/minh bạch** (ví dụ: CockroachDB/DynamoDB).",
                solution: "Tái cân bằng thủ công chuyển gánh nặng và rủi ro vận hành (mất dữ liệu/thời gian chết) sang đội ngũ DevOps, nhưng cung cấp khả năng kiểm soát lớn hơn đối với việc lựa chọn shard key. Tái cân bằng tự động sử dụng các thuật toán đồng thuận phức tạp (như Raft/Paxos) để tự động di chuyển dữ liệu và cập nhật siêu dữ liệu, điều này đơn giản hóa hoạt động nhưng tăng thêm sự phức tạp cho kernel cơ sở dữ liệu và có thể gây ra hiện tượng giật hiệu suất (performance jitters) trong quá trình tái cân bằng nền." 


            }
        }
    },
    {
        _id: "nosql-s-007",
        difficulty: "senior",
        tags: ["MongoDB", "indexing", "performance", "covered query"],
        content: {
            en: {
                title: "Covered Queries and Index Size",
                body: "In MongoDB, what is a **Covered Query**, and what is the trade-off between the performance boost gained from covered queries and the overall cost (storage/write latency) of the indexes required to support them?",
                solution: "A Covered Query is a query where all fields requested in the query (the query, projection, and sort) are included in an index. The performance boost comes from MongoDB being able to serve the entire query result **directly from the index** without fetching documents from disk. The trade-off is that these indexes must include more fields, making them **larger on disk** and requiring **more overhead during writes** and updates."
            },
            jp: {
                title: "カバードクエリとインデックスサイズ",
                body: "MongoDB における **カバードクエリ（Covered Query）** とは何ですか？また、カバードクエリから得られるパフォーマンス向上と、それらをサポートするために必要なインデックスの全体的なコスト（ストレージ/書き込みレイテンシ）とのトレードオフは何ですか？",
                solution: "カバードクエリとは、クエリで要求されたすべてのフィールド（クエリ、プロジェクション、ソート）がインデックスに含まれているクエリです。パフォーマンス向上は、MongoDB がディスクからドキュメントをフェッチすることなく、**インデックスから直接** クエリ結果全体を提供できることからもたらされます。トレードオフは、これらのインデックスにはより多くのフィールドを含める必要があり、ディスク上で **より大きく** なり、書き込みおよび更新中に **より多くのオーバーヘッド** を必要とすることです。"
            },
            vi: {
                title: "Covered Queries và Kích thước Index",
                body: "Trong MongoDB, **Covered Query** là gì, và sự đánh đổi giữa việc tăng hiệu suất đạt được từ covered query và chi phí tổng thể (lưu trữ/độ trễ ghi) của các index cần thiết để hỗ trợ chúng là gì?",
                solution: "Covered Query là một truy vấn mà tất cả các trường được yêu cầu trong truy vấn (truy vấn, projection và sort) đều được bao gồm trong một index. Hiệu suất tăng lên là do MongoDB có thể phục vụ toàn bộ kết quả truy vấn **trực tiếp từ index** mà không cần tìm nạp document từ đĩa. Sự đánh đổi là các index này phải bao gồm nhiều trường hơn, làm cho chúng **lớn hơn trên đĩa** và yêu cầu **nhiều chi phí overhead hơn trong quá trình ghi** và cập nhật."
            }
        }
    },
    {
        _id: "nosql-s-008",
        difficulty: "senior",
        tags: ["Column-Family", "data model", "time series", "compaction"],
        content: {
            en: {
                title: "Time Series Data Model (Cassandra)",
                body: "Describe the optimal Cassandra data modeling approach for a **time series workload** (e.g., storing sensor readings every minute), emphasizing the choice of partition key and clustering column.",
                solution: "Use a compound partition key consisting of a **coarse time bucket** (e.g., date, or hour) and a **sensor ID**. The clustering column should be the **microsecond timestamp**. This groups all readings for a sensor/time bucket on a single node (efficient writes/reads for the time range) and uses the clustering column for efficient range querying and ordering within that partition."
            },
            jp: {
                title: "時系列データモデル（Cassandra）",
                body: "**時系列ワークロード**（例：毎分のセンサー測定値の保存）に対する最適な Cassandra データモデリングアプローチを説明し、パーティションキーとクラスタリングカラムの選択を強調してください。",
                solution: " **粗い時間バケット**（例：日付、または時間）と **センサー ID** からなる複合パーティションキーを使用します。クラスタリングカラムは **マイクロ秒のタイムスタンプ** である必要があります。これにより、センサー/時間バケットのすべての測定値が単一のノードにグループ化され（時間範囲の効率的な書き込み/読み取り）、そのパーティション内での効率的な範囲クエリと順序付けにクラスタリングカラムが使用されます。"
            },
            vi: {
                title: "Mô hình Dữ liệu Time Series (Cassandra)",
                body: "Mô tả cách tiếp cận mô hình hóa dữ liệu Cassandra tối ưu cho một **workload time series** (ví dụ: lưu trữ các chỉ số cảm biến mỗi phút), nhấn mạnh sự lựa chọn của partition key và clustering column.",
                solution: "Sử dụng một compound partition key bao gồm một **time bucket thô** (ví dụ: ngày, hoặc giờ) và một **ID cảm biến**. Clustering column nên là **dấu thời gian micro giây**. Điều này nhóm tất cả các chỉ số cho một cảm biến/time bucket trên một node duy nhất (ghi/đọc hiệu quả cho phạm vi thời gian) và sử dụng clustering column để truy vấn phạm vi và sắp xếp hiệu quả trong partition đó."
            }
        }
    },
    {
        _id: "nosql-s-009",
        difficulty: "senior",
        tags: ["Graph", "Cypher", "query optimization", "index"],
        content: {
            en: {
                title: "Optimizing Cypher Traversal",
                body: "In Cypher, describe the typical pattern for optimizing a traversal query that starts with a specific node, emphasizing the importance of an index and a specific query operator.",
                solution: "An efficient query must use an index (constraint) on the starting node label and property. The optimal pattern is: **`MATCH (n:Label {property: 'value'})-[r:RELATION]->(m)`**. This pattern first uses the index to quickly locate the starting node (the **seek**), which is much faster than doing a label scan and filtering later. The relationship type should also be defined early."
            },
            jp: {
                title: "Cypher トラバーサルの最適化",
                body: "Cypher において、特定のノードから始まるトラバーサルクエリを最適化するための典型的なパターンを説明し、インデックスと特定のクエリオペレーターの重要性を強調してください。",
                solution: "効率的なクエリは、開始ノードのラベルとプロパティにインデックス（制約）を使用する必要があります。最適なパターンは、**`MATCH (n:Label {property: 'value'})-[r:RELATION]->(m)`** です。このパターンは、最初にインデックスを使用して開始ノードをすばやく見つけます（**シーク**）。これは、ラベルスキャンを後で行ってからフィルタリングするよりもはるかに高速です。関係タイプも早い段階で定義する必要があります。"
            },
            vi: {
                title: "Tối ưu hóa Cypher Traversal",
                body: "Trong Cypher, mô tả mô hình điển hình để tối ưu hóa truy vấn traversal bắt đầu bằng một node cụ thể, nhấn mạnh tầm quan trọng của index và một toán tử truy vấn cụ thể.",
                solution: "Một truy vấn hiệu quả phải sử dụng index (ràng buộc) trên nhãn và thuộc tính của node bắt đầu. Mô hình tối ưu là: **`MATCH (n:Label {property: 'value'})-[r:RELATION]->(m)`**. Mô hình này đầu tiên sử dụng index để nhanh chóng định vị node bắt đầu (thao tác **seek**), điều này nhanh hơn nhiều so với việc quét nhãn và lọc sau. Loại mối quan hệ cũng nên được xác định sớm."
            }
        }
    },
    {
        _id: "nosql-s-010",
        difficulty: "senior",
        tags: ["Key-Value", "Redis", "persistence", "AOF", "RDB"],
        content: {
            en: {
                title: "AOF vs RDB Persistence Trade-offs",
                body: "Compare the trade-offs between Redis's two primary persistence mechanisms: **RDB (Snapshotting)** and **AOF (Append Only File)** in terms of recovery speed and data loss tolerance.",
                solution: "**RDB** offers **faster recovery speed** because it loads a single, compacted file, but has **lower data loss tolerance** (data since the last snapshot is lost). **AOF** offers **higher data loss tolerance** because it logs every write operation, but it has **slower recovery speed** because the entire log file must be replayed (though AOF Rewriting mitigates this)."
            },
            jp: {
                title: "AOF 対 RDB 永続性のトレードオフ",
                body: "Redis の 2 つの主要な永続性メカニズムである **RDB（スナップショット）** と **AOF（追記専用ファイル）** を、回復速度とデータ損失耐性の観点から比較してください。",
                solution: " **RDB** は、単一の圧縮されたファイルをロードするため、**より速い回復速度** を提供しますが、**データ損失耐性** は低くなります（最後のスナップショット以降のデータは失われます）。 **AOF** は、すべての書き込み操作をログに記録するため、**より高いデータ損失耐性** を提供しますが、ログファイル全体を再生する必要があるため、**回復速度** は遅くなります（AOF Rewriting がこれを軽減しますが）。"
            },
            vi: {
                title: "Đánh đổi Persistence AOF so với RDB",
                body: "So sánh sự đánh đổi giữa hai cơ chế lưu trữ chính của Redis: **RDB (Snapshotting)** và **AOF (Append Only File)** về tốc độ phục hồi và khả năng chịu lỗi mất dữ liệu.",
                solution: " **RDB** cung cấp **tốc độ phục hồi nhanh hơn** vì nó tải một file duy nhất, đã được nén, nhưng có **khả năng chịu lỗi mất dữ liệu thấp hơn** (dữ liệu kể từ snapshot cuối cùng bị mất). **AOF** cung cấp **khả năng chịu lỗi mất dữ liệu cao hơn** vì nó ghi log mọi thao tác ghi, nhưng nó có **tốc độ phục hồi chậm hơn** vì toàn bộ file log phải được phát lại (mặc dù AOF Rewriting giúp giảm thiểu điều này)."
            }
        }
    },
    {
        _id: "nosql-s-011",
        difficulty: "senior",
        tags: ["MongoDB", "modeling", "anti-pattern", "array $push"],
        content: {
            en: {
                title: "Unbounded Array Anti-Pattern",
                body: "The **unbounded array** anti-pattern (constantly using `$push` on a huge array inside a document) causes two major performance issues in MongoDB. Identify and explain both issues.",
                solution: "1. **Increased Write Latency:** When the document exceeds its allocated space on disk, MongoDB must move the entire document to a new location, which is a costly operation. 2. **Oversized Documents:** The document risks hitting the 16MB BSON size limit, preventing future updates. The document will also be inefficiently read into memory even if only a small part is needed."
            },
            jp: {
                title: "無制限配列のアンチパターン",
                body: "**無制限配列** のアンチパターン（ドキュメント内の巨大な配列に対して `$push` を継続的に使用する）は、MongoDB で 2 つの主要なパフォーマンス問題を引き起こします。両方の問題を特定し、説明してください。",
                solution: "1. **書き込みレイテンシの増加：** ドキュメントがディスク上の割り当てられたスペースを超えると、MongoDB はドキュメント全体を新しい場所に移動する必要があり、これはコストのかかる操作です。2. **肥大化したドキュメント：** ドキュメントが 16MB の BSON サイズ制限に達するリスクがあり、将来の更新を妨げます。また、一部のみが必要な場合でも、ドキュメントが非効率的にメモリに読み込まれます。"
            },
            vi: {
                title: "Anti-Pattern Mảng không Giới hạn",
                body: "Anti-pattern **mảng không giới hạn** (liên tục sử dụng `$push` trên một mảng khổng lồ bên trong một document) gây ra hai vấn đề hiệu suất lớn trong MongoDB. Xác định và giải thích cả hai vấn đề.",
                solution: "1. **Tăng độ trễ ghi (Write Latency):** Khi document vượt quá không gian được cấp phát trên đĩa, MongoDB phải di chuyển toàn bộ document đến một vị trí mới, đây là một thao tác tốn kém. 2. **Document quá khổ:** Document có nguy cơ chạm đến giới hạn kích thước BSON 16MB, ngăn chặn các cập nhật trong tương lai. Document cũng sẽ được đọc vào bộ nhớ một cách không hiệu quả ngay cả khi chỉ cần một phần nhỏ."
            }
        }
    },
    {
        _id: "nosql-s-012",
        difficulty: "senior",
        tags: ["distributed systems", "consensus", "Paxos", "Raft"],
        content: {
            en: {
                title: "Paxos/Raft in Distributed Databases",
                body: "Why is an algorithm like **Paxos or Raft** essential for maintaining high availability and strong consistency in the **Config Servers** or **Master/Primary nodes** of a distributed NoSQL cluster, even if the primary data nodes are eventually consistent?",
                solution: "Paxos/Raft ensures that the cluster's **metadata and state machine** (e.g., shard boundaries, failover elections, configuration) remains strongly consistent and available. While the data itself might be eventually consistent, the *rules* governing the cluster's operation and topology must be agreed upon by a supermajority (quorum) to prevent 'split-brain' scenarios."
            },
            jp: {
                title: "分散データベースにおける Paxos/Raft",
                body: "プライマリデータノードが結果整合性であっても、分散 NoSQL クラスターの **Config サーバー** または **マスター/プライマリノード** で高可用性と強力な整合性を維持するために、**Paxos または Raft** のようなアルゴリズムが不可欠であるのはなぜですか？",
                solution: "Paxos/Raft は、クラスターの **メタデータと状態マシン**（例：シャード境界、フェイルオーバー選挙、構成）が強力に整合し、利用可能であることを保証します。データ自体は結果整合性である可能性がありますが、クラスターの操作とトポロジを管理する *ルール* は、「スプリットブレイン」シナリオを防ぐために、過半数（クォーラム）によって合意される必要があります。"
            },
            vi: {
                title: "Paxos/Raft trong Cơ sở dữ liệu Phân tán",
                body: "Tại sao một thuật toán như **Paxos hoặc Raft** lại cần thiết để duy trì tính sẵn sàng cao và tính nhất quán mạnh mẽ trong **Config Servers** hoặc **các node Master/Primary** của một cluster NoSQL phân tán, ngay cả khi các node dữ liệu chính cuối cùng là nhất quán?",
                solution: "Paxos/Raft đảm bảo rằng **siêu dữ liệu và máy trạng thái** của cluster (ví dụ: ranh giới shard, bầu cử failover, cấu hình) vẫn nhất quán mạnh mẽ và sẵn sàng. Mặc dù bản thân dữ liệu có thể là nhất quán cuối cùng, nhưng *các quy tắc* quản lý hoạt động và cấu trúc liên kết của cluster phải được đồng ý bởi một siêu đa số (quorum) để ngăn chặn các kịch bản 'split-brain'."
            }
        }
    },
    {
        _id: "nosql-s-013",
        difficulty: "senior",
        tags: ["Key-Value", "Redis", "latency", "NUMA", "CPU pinning"],
        content: {
            en: {
                title: "NUMA and Redis Performance",
                body: "Explain how **NUMA (Non-Uniform Memory Access)** architecture can negatively impact Redis performance, and what common server-side technique (involving CPU/memory affinity) is used to mitigate this issue.",
                solution: "In a NUMA system, CPU cores accessing memory on a remote node (not local to that core) suffer significantly higher latency. Since Redis is single-threaded and memory-intensive, remote memory access hurts throughput. Mitigation involves **CPU Pinning (or NUMA affinity)**, where the Redis process is explicitly restricted to run on CPU cores associated with its local memory bank."
            },
            jp: {
                title: "NUMA と Redis パフォーマンス",
                body: " **NUMA（Non-Uniform Memory Access）** アーキテクチャが Redis のパフォーマンスにどのように悪影響を与える可能性があるか、そしてこの問題を軽減するために使用される一般的なサーバー側の手法（CPU/メモリ親和性を含む）を説明してください。",
                solution: "NUMA システムでは、リモートノード（そのコアにローカルではない）のメモリにアクセスする CPU コアは、著しく高いレイテンシを被ります。Redis はシングルスレッドでメモリ集約型であるため、リモートメモリアクセスはスループットを低下させます。軽減策には、**CPU ピンニング（または NUMA アフィニティ）** が含まれます。これは、Redis プロセスが、ローカルメモリバンクに関連付けられた CPU コアで実行するように明示的に制限されるものです。"
            },
            vi: {
                title: "NUMA và Hiệu suất Redis",
                body: "Giải thích cách kiến trúc **NUMA (Non-Uniform Memory Access)** có thể tác động tiêu cực đến hiệu suất Redis, và kỹ thuật phía máy chủ phổ biến nào (liên quan đến CPU/memory affinity) được sử dụng để giảm thiểu vấn đề này.",
                solution: "Trong một hệ thống NUMA, các lõi CPU truy cập bộ nhớ trên một node từ xa (không cục bộ với lõi đó) phải chịu độ trễ cao hơn đáng kể. Vì Redis là đơn luồng và tốn nhiều bộ nhớ, truy cập bộ nhớ từ xa làm giảm thông lượng. Biện pháp giảm thiểu liên quan đến **CPU Pinning (hoặc NUMA affinity)**, trong đó quá trình Redis được giới hạn rõ ràng để chạy trên các lõi CPU được liên kết với ngân hàng bộ nhớ cục bộ của nó."
            }
        }
    },
    {
        _id: "nosql-s-014",
        difficulty: "senior",
        tags: ["Document", "indexing", "performance", "collations"],
        content: {
            en: {
                title: "Collation and Index Usage (MongoDB)",
                body: "In MongoDB, what is the role of **Collation**, and explain why a query with a case-insensitive match/sort will often **not** use a standard index, requiring a specific index setup.",
                solution: "Collation specifies the language-specific rules for string comparison (e.g., case-sensitivity, accent-sensitivity). A standard index stores strings based on a binary comparison. If a query uses a case-insensitive match/sort without a matching collation-aware index, it cannot use the standard index because the sort order is different, forcing an expensive **collection scan and in-memory sort**."
            },
            jp: {
                title: "照合順序とインデックスの使用（MongoDB）",
                body: "MongoDB において、**照合順序（Collation）** の役割は何ですか？また、大文字と小文字を区別しない一致/ソートを含むクエリが、なぜ標準インデックスを **使用しない** ことが多く、特定のインデックス設定を必要とするのかを説明してください。",
                solution: "照合順序は、文字列比較の言語固有のルール（例：大文字と小文字の区別、アクセントの区別）を指定します。標準インデックスは、バイナリ比較に基づいて文字列を保存します。クエリが、一致する照合順序対応インデックスなしで大文字と小文字を区別しない一致/ソートを使用する場合、ソート順序が異なるため、標準インデックスを使用できず、コストのかかる **コレクションスキャンとインメモリソート** が強制されます。"
            },
            vi: {
                title: "Collation và Sử dụng Index (MongoDB)",
                body: "Trong MongoDB, vai trò của **Collation** là gì, và giải thích tại sao một truy vấn với khớp/sắp xếp không phân biệt chữ hoa chữ thường lại thường **không** sử dụng một index tiêu chuẩn, yêu cầu một thiết lập index cụ thể.",
                solution: "Collation chỉ định các quy tắc cụ thể theo ngôn ngữ để so sánh chuỗi (ví dụ: phân biệt chữ hoa chữ thường, phân biệt dấu). Index tiêu chuẩn lưu trữ các chuỗi dựa trên so sánh nhị phân. Nếu một truy vấn sử dụng khớp/sắp xếp không phân biệt chữ hoa chữ thường mà không có index nhận biết collation phù hợp, nó không thể sử dụng index tiêu chuẩn vì thứ tự sắp xếp khác, buộc phải thực hiện một thao tác **quét collection và sắp xếp trong bộ nhớ** tốn kém."
            }
        }
    },
    {
        _id: "nosql-s-015",
        difficulty: "senior",
        tags: ["Column-Family", "performance", "compaction", "LCS"],
        content: {
            en: {
                title: "Date-Tiered Compaction Strategy (DTCS)",
                body: "Cassandra's **Date-Tiered Compaction Strategy (DTCS)** is optimized for time series workloads. Explain how DTCS works (grouping data based on age) and why it is superior to Size-Tiered Compaction Strategy (STCS) for TTL-heavy data.",
                solution: "DTCS groups SSTables into tiers based on the oldest timestamp within the table, compacting them only when a tier is full (by time range). It is superior for TTL-heavy data because it ensures that all data within an SSTable has a similar expiration time, making it efficient to **drop the entire SSTable** once the TTL has passed, instead of performing expensive row-by-row tombstone checks during compaction."
            },
            jp: {
                title: "日付階層コンパクション戦略 (DTCS)",
                body: "Cassandra の **日付階層コンパクション戦略（DTCS）** は、時系列ワークロード向けに最適化されています。DTCS がどのように機能するか（年齢に基づいてデータをグループ化する）と、TTL の多いデータに対してサイズ階層コンパクション戦略（STCS）よりも優れている理由を説明してください。",
                solution: "DTCS は、テーブル内の最も古いタイムスタンプに基づいて SSTable を層にグループ化し、層がいっぱいになったときにのみ（時間範囲で）それらを圧縮します。TTL の多いデータに優れているのは、SSTable 内のすべてのデータが同様の有効期限を持つことを保証し、TTL が過ぎた後に高価な行ごとの墓石チェックを実行する代わりに、**SSTable 全体をドロップ** するのを効率的にするためです。"
            },
            vi: {
                title: "Date-Tiered Compaction Strategy (DTCS)",
                body: "**Date-Tiered Compaction Strategy (DTCS)** của Cassandra được tối ưu hóa cho các workload time series. Giải thích cách DTCS hoạt động (nhóm dữ liệu dựa trên tuổi) và tại sao nó lại vượt trội hơn Size-Tiered Compaction Strategy (STCS) đối với dữ liệu nặng về TTL.",
                solution: "DTCS nhóm các SSTable thành các tầng dựa trên dấu thời gian cũ nhất trong bảng, chỉ nén chúng khi một tầng đầy (theo phạm vi thời gian). Nó vượt trội hơn đối với dữ liệu nặng về TTL vì nó đảm bảo rằng tất cả dữ liệu trong một SSTable có thời gian hết hạn tương tự, giúp việc **loại bỏ toàn bộ SSTable** một cách hiệu quả sau khi TTL đã trôi qua, thay vì thực hiện kiểm tra tombstone từng hàng tốn kém trong quá trình compaction."
            }
        }
    },
    {
        _id: "nosql-s-016",
        difficulty: "senior",
        tags: ["distributed systems", "sharding", "distributed transactions"],
        content: {
            en: {
                title: "Two-Phase Commit vs Saga",
                body: "Compare and contrast **Two-Phase Commit (2PC)** and the **Saga Pattern** as approaches to achieving consistency across multiple distributed data stores in a microservices environment, focusing on performance and fault tolerance.",
                solution: "**2PC** guarantees **Atomic Consistency (ACID)** but is **blocking, slow, and non-fault-tolerant** (if the coordinator fails, resources remain locked). The **Saga Pattern** provides **Eventual Consistency** but is **non-blocking, faster, and highly fault-tolerant** (failures are handled by compensating transactions), making it suitable for high-throughput microservices."
            },
            jp: {
                title: "Two-Phase Commit 対 Saga",
                body: "マイクロサービス環境で複数の分散データストア間で整合性を達成するためのアプローチとして、**Two-Phase Commit (2PC)** と **Saga パターン** を、パフォーマンスと耐障害性に焦点を当てて比較対照してください。",
                solution: " **2PC** は **原子整合性 (ACID)** を保証しますが、**ブロッキング、低速、非耐障害性** です（コーディネーターが失敗すると、リソースはロックされたままになります）。 **Saga パターン** は **結果整合性** を提供しますが、**非ブロッキング、高速、高耐障害性** です（障害は補償トランザクションによって処理されます）。"
            },
            vi: {
                title: "Two-Phase Commit so với Saga",
                body: "So sánh và đối chiếu **Two-Phase Commit (2PC)** và **Saga Pattern** như các cách tiếp cận để đạt được tính nhất quán trên nhiều store dữ liệu phân tán trong môi trường microservices, tập trung vào hiệu suất và khả năng chịu lỗi.",
                solution: " **2PC** đảm bảo **Tính nhất quán Nguyên tử (ACID)** nhưng **bị chặn (blocking), chậm và không chịu lỗi** (nếu bộ điều phối thất bại, tài nguyên vẫn bị khóa). **Saga Pattern** cung cấp **Tính nhất quán Cuối cùng (Eventual Consistency)** nhưng **không bị chặn (non-blocking), nhanh hơn và có khả năng chịu lỗi cao** (các lỗi được xử lý bằng các giao dịch bù đắp - compensating transactions), làm cho nó phù hợp với các microservice có thông lượng cao."
            }
        }
    },
    {
        _id: "nosql-s-017",
        difficulty: "senior",
        tags: ["MongoDB", "indexing", "performance", "hint"],
        content: {
            en: {
                title: "Using Query Hints (MongoDB)",
                body: "When is it appropriate (or necessary) for a developer to use a **query hint** (`.hint()`) in MongoDB, given that the query optimizer usually selects the best index?",
                solution: "Hints should only be used in rare scenarios: 1. **Benchmarking:** To force the use of a specific index for testing purposes. 2. **Optimizer Misbehavior:** When the optimizer consistently chooses a demonstrably inefficient index plan (which can happen with complex queries or indexes). However, this usually signals an issue with the indexes/query itself that should ideally be fixed rather than hinted."
            },
            jp: {
                title: "クエリヒントの使用（MongoDB）",
                body: "クエリオプティマイザーが通常最適なインデックスを選択することを考えると、開発者が MongoDB で **クエリヒント** (`.hint()`) を使用するのが適切（または必要）なのはいつですか？",
                solution: "ヒントは、まれなシナリオでのみ使用する必要があります。1. **ベンチマーク：** テスト目的で特定のインデックスの使用を強制するため。2. **オプティマイザーの誤動作：** オプティマイザーが一貫して明らかに非効率なインデックスプランを選択する場合（複雑なクエリやインデックスで発生する可能性があります）。ただし、これは通常、ヒントを付けるのではなく、インデックス/クエリ自体に問題があることを示しています。"
            },
            vi: {
                title: "Sử dụng Query Hints (MongoDB)",
                body: "Khi nào thì việc nhà phát triển sử dụng **query hint** (`.hint()`) trong MongoDB là phù hợp (hoặc cần thiết), trong khi trình tối ưu hóa truy vấn thường chọn index tốt nhất?",
                solution: "Hint chỉ nên được sử dụng trong các tình huống hiếm hoi: 1. **Benchmarking:** Để buộc sử dụng một index cụ thể cho mục đích thử nghiệm. 2. **Lỗi hành vi của Trình tối ưu hóa:** Khi trình tối ưu hóa liên tục chọn một kế hoạch index được chứng minh là không hiệu quả (điều này có thể xảy ra với các truy vấn hoặc index phức tạp). Tuy nhiên, điều này thường báo hiệu một vấn đề với chính index/truy vấn mà lý tưởng nên được khắc phục hơn là dùng hint."
            }
        }
    },
    {
        _id: "nosql-s-018",
        difficulty: "senior",
        tags: ["Column-Family", "consistency", "anti-pattern", "reads"],
        content: {
            en: {
                title: "Partition Scan Anti-Pattern (Cassandra)",
                body: "Explain the **Partition Scan** anti-pattern in Cassandra. Why is a query without a full partition key considered highly detrimental to performance and stability, even if a filter on a clustering column is provided?",
                solution: "A query missing the full partition key requires the coordinating node to fan-out the request to **ALL** nodes in the cluster (or at least all replicas), forcing them to perform an expensive **full partition scan** locally to find the relevant data. This is inefficient, dramatically increases read latency, and can destabilize the cluster by overwhelming all nodes simultaneously."
            },
            jp: {
                title: "パーティションスキャンのアンチパターン（Cassandra）",
                body: "Cassandra における **パーティションスキャン** のアンチパターンを説明してください。クラスタリングカラムにフィルターが提供されていても、完全なパーティションキーのないクエリがパフォーマンスと安定性に非常に有害であると見なされるのはなぜですか？",
                solution: "完全なパーティションキーを欠くクエリは、コーディネーターノードがクラスター内の **すべて** のノード（または少なくともすべてのレプリカ）にリクエストをファンアウトすることを要求し、関連するデータを見つけるためにローカルでコストのかかる **フルパーティションスキャン** を実行することを強制します。これは非効率的であり、読み取りレイテンシを劇的に増加させ、すべてのノードを同時に圧倒することによりクラスターを不安定にする可能性があります。"
            },
            vi: {
                title: "Anti-Pattern Partition Scan (Cassandra)",
                body: "Giải thích anti-pattern **Partition Scan** trong Cassandra. Tại sao một truy vấn không có đầy đủ partition key lại được coi là cực kỳ bất lợi cho hiệu suất và sự ổn định, ngay cả khi có cung cấp một bộ lọc trên clustering column?",
                solution: "Một truy vấn thiếu partition key đầy đủ yêu cầu node điều phối phải fan-out yêu cầu đến **TẤT CẢ** các node trong cluster (hoặc ít nhất là tất cả các bản sao), buộc chúng phải thực hiện một thao tác **quét toàn bộ partition** tốn kém cục bộ để tìm dữ liệu liên quan. Điều này là không hiệu quả, làm tăng đáng kể độ trễ đọc và có thể gây mất ổn định cluster bằng cách làm quá tải tất cả các node cùng một lúc."
            }
        }
    },
    {
        _id: "nosql-s-019",
        difficulty: "senior",
        tags: ["Graph", "modeling", "anti-pattern", "indexing"],
        content: {
            en: {
                title: "Modeling Many-to-Many Relationships (Graph)",
                body: "In a Graph database, what makes modeling a many-to-many relationship using a dedicated **Relationship Type** (edge) superior to the typical RDBMS approach of using an intermediary 'join table' (which would be modeled as an intermediary node in the Graph)?",
                solution: "Using a dedicated Relationship Type (edge) is superior because it allows for **direct traversal** between the two main nodes, which is highly optimized. An intermediary 'join node' requires two traversals (A -> JOIN -> B), slowing down common queries. Relationship properties efficiently store metadata (like `since` date) directly on the edge, which is the natural place for relationship context."
            },
            jp: {
                title: "多対多の関係のモデリング（グラフ）",
                body: "グラフデータベースにおいて、専用の **関係タイプ**（エッジ）を使用して多対多の関係をモデリングすることが、一般的な RDBMS の仲介「結合テーブル」を使用するアプローチ（グラフでは仲介ノードとしてモデリングされる）よりも優れているのはなぜですか？",
                solution: "専用の関係タイプ（エッジ）を使用する方が優れているのは、高度に最適化された 2 つの主要なノード間の **直接トラバーサル** を可能にするためです。仲介の「結合ノード」は 2 つのトラバーサル（A -> JOIN -> B）を必要とし、一般的なクエリを遅くします。関係プロパティは、メタデータ（`since` 日付など）をエッジ上に直接効率的に保存します。これは、関係のコンテキストにとって自然な場所です。"
            },
            vi: {
                title: "Mô hình hóa Mối quan hệ Nhiều-Nhiều (Graph)",
                body: "Trong cơ sở dữ liệu Graph, điều gì làm cho việc mô hình hóa mối quan hệ nhiều-nhiều bằng cách sử dụng một **Loại Mối quan hệ** (cạnh) chuyên dụng lại vượt trội so với cách tiếp cận RDBMS điển hình là sử dụng 'bảng join' trung gian (sẽ được mô hình hóa dưới dạng node trung gian trong Graph)?",
                solution: "Sử dụng một Loại Mối quan hệ (cạnh) chuyên dụng vượt trội vì nó cho phép **duyệt trực tiếp** giữa hai node chính, điều này được tối ưu hóa cao. Một 'node join' trung gian yêu cầu hai lần duyệt (A -> JOIN -> B), làm chậm các truy vấn phổ biến. Các thuộc tính mối quan hệ lưu trữ siêu dữ liệu (như ngày `since`) trực tiếp trên cạnh một cách hiệu quả, đây là nơi tự nhiên cho ngữ cảnh mối quan hệ."
            }
        }
    },
    {
        _id: "nosql-s-020",
        difficulty: "senior",
        tags: ["distributed systems", "sharding", "scalability", "latency"],
        content: {
            en: {
                title: "Cross-Shard Joins (Anti-Pattern)",
                body: "In a sharded NoSQL cluster, a **Cross-Shard Join** query is a severe anti-pattern. Describe the performance overhead this operation imposes on the entire cluster and the architectural pattern used to avoid it.",
                solution: "Cross-shard joins require the query coordinator to send requests to multiple shards, retrieve large intermediate result sets from each shard, and perform the join/aggregation logic **in memory** (scatter-gather). This consumes network bandwidth, memory, and CPU resources across the cluster. The pattern used to avoid it is **Data Denormalization** (duplicating/embedding data across documents based on query patterns) and sometimes **Colocation** (sharding related data by the same key)."
            },
            jp: {
                title: "クロスシャード結合（アンチパターン）",
                body: "シャーディングされた NoSQL クラスターでは、**クロスシャード結合** クエリは深刻なアンチパターンです。この操作がクラスター全体に課すパフォーマンスオーバーヘッドと、それを回避するために使用されるアーキテクチャパターンを説明してください。",
                solution: "クロスシャード結合では、クエリコーディネーターが複数のシャードにリクエストを送信し、各シャードから大きな中間結果セットを取得し、結合/集約ロジックを **メモリ内** で実行する必要があります（スキャッターギャザー）。これは、クラスター全体のネットワーク帯域幅、メモリ、および CPU リソースを消費します。それを回避するために使用されるパターンは、**データ非正規化**（クエリパターンに基づいてドキュメント間でデータを複製/埋め込むこと）であり、時には **コロケーション**（関連データを同じキーでシャーディングすること）です。"
            },
            vi: {
                title: "Cross-Shard Joins (Anti-Pattern)",
                body: "Trong một cluster NoSQL được sharding, một truy vấn **Cross-Shard Join** là một anti-pattern nghiêm trọng. Mô tả chi phí hiệu suất mà thao tác này áp đặt lên toàn bộ cluster và mô hình kiến trúc được sử dụng để tránh nó.",
                solution: "Cross-shard joins yêu cầu bộ điều phối truy vấn gửi yêu cầu đến nhiều shard, truy xuất các tập kết quả trung gian lớn từ mỗi shard và thực hiện logic join/tổng hợp **trong bộ nhớ** (scatter-gather). Điều này tiêu thụ băng thông mạng, bộ nhớ và tài nguyên CPU trên toàn bộ cluster. Mô hình được sử dụng để tránh nó là **Phi chuẩn hóa Dữ liệu (Data Denormalization)** (nhân đôi/nhúng dữ liệu trên các document dựa trên các mẫu truy vấn) và đôi khi là **Colocation** (sharding dữ liệu liên quan bằng cùng một khóa)."
            }
        }
    },
    {
        _id: "nosql-s-021",
        difficulty: "senior",
        tags: ["MongoDB", "aggregation", "memory limits", "$limit"],
        content: {
            en: {
                title: "Aggregation Memory Limit",
                body: "The MongoDB Aggregation Pipeline has a default memory limit (often 100MB). Name the aggregation stage that can be used to explicitly allow the pipeline to exceed this memory limit by writing temporary data to disk, and explain the necessary performance trade-off.",
                solution: "The stage is **`{ allowDiskUse: true }`** (a pipeline option, but often considered implicitly applied to the stages). The trade-off is that while it prevents the query from failing, it can dramatically increase latency because it involves expensive **I/O operations** (writing temporary data to disk) instead of operating purely in fast RAM."
            },
            jp: {
                title: "集約メモリ制限",
                body: "MongoDB 集約パイプラインにはデフォルトのメモリ制限（通常 100MB）があります。一時データをディスクに書き込むことにより、パイプラインがこのメモリ制限を超えることを明示的に許可するために使用できる集約ステージの名前を挙げ、必要なパフォーマンスのトレードオフを説明してください。",
                solution: "このステージは **`{ allowDiskUse: true }`** です（パイプラインオプションですが、しばしばステージに暗黙的に適用されると見なされます）。トレードオフは、クエリが失敗するのを防ぎますが、高速 RAM だけで操作する代わりに、コストのかかる **I/O 操作**（一時データをディスクに書き込む）を伴うため、レイテンシが劇的に増加する可能性があることです。"
            },
            vi: {
                title: "Giới hạn Bộ nhớ Aggregation",
                body: "MongoDB Aggregation Pipeline có giới hạn bộ nhớ mặc định (thường là 100MB). Kể tên stage aggregation có thể được sử dụng để cho phép pipeline vượt quá giới hạn bộ nhớ này bằng cách ghi dữ liệu tạm thời vào đĩa, và giải thích sự đánh đổi hiệu suất cần thiết.",
                solution: "Stage là **`{ allowDiskUse: true }`** (một tùy chọn pipeline, nhưng thường được coi là ngầm áp dụng cho các stage). Sự đánh đổi là mặc dù nó ngăn truy vấn thất bại, nhưng nó có thể làm tăng đáng kể độ trễ vì nó liên quan đến **các thao tác I/O** tốn kém (ghi dữ liệu tạm thời vào đĩa) thay vì hoạt động hoàn toàn trong RAM nhanh."
            }
        }
    },
    {
        _id: "nosql-s-022",
        difficulty: "senior",
        tags: ["Column-Family", "consistency", "anti-pattern", "timestamp"],
        content: {
            en: {
                title: "Client-Side Timestamp Anti-Pattern (Cassandra)",
                body: "In Cassandra, why is manually setting a **client-side timestamp** for a write operation generally considered a dangerous anti-pattern that can violate consistency guarantees and lead to non-deterministic data loss?",
                solution: "Manually setting a client-side timestamp violates the LWW rule by bypassing the node's authoritative server-side timestamp. If two concurrent writes arrive at different nodes, and the write that should logically be 'last' (because it happened later chronologically) has a client-set timestamp that is *lower* than the other write, the 'correct' write will be ignored, resulting in data loss."
            },
            jp: {
                title: "クライアント側タイムスタンプのアンチパターン（Cassandra）",
                body: "Cassandra では、書き込み操作に **クライアント側タイムスタンプ** を手動で設定することは、整合性の保証に違反し、非決定的なデータ損失につながる可能性があるため、一般的に危険なアンチパターンと見なされるのはなぜですか？",
                solution: "クライアント側タイムスタンプを手動で設定すると、ノードの信頼できるサーバー側タイムスタンプをバイパスすることにより、LWW ルールに違反します。2 つの同時書き込みが異なるノードに到着し、論理的に「最後」であるべき書き込み（時系列的に後に発生したため）が、他の書き込みよりも *低い* クライアント設定タイムスタンプを持っている場合、「正しい」書き込みは無視され、データ損失につながります。"
            },
            vi: {
                title: "Anti-Pattern Timestamp phía Client (Cassandra)",
                body: "Trong Cassandra, tại sao việc đặt **timestamp phía client** theo cách thủ công cho một thao tác ghi lại thường được coi là một anti-pattern nguy hiểm có thể vi phạm các đảm bảo về tính nhất quán và dẫn đến mất dữ liệu không xác định?",
                solution: "Việc đặt timestamp phía client theo cách thủ công vi phạm quy tắc LWW bằng cách bỏ qua timestamp phía máy chủ có thẩm quyền của node. Nếu hai lần ghi đồng thời đến các node khác nhau, và lần ghi lẽ ra phải là 'sau cùng' (vì nó xảy ra sau theo thứ tự thời gian) lại có timestamp do client đặt *thấp hơn* so với lần ghi kia, lần ghi 'đúng' sẽ bị bỏ qua, dẫn đến mất dữ liệu."
            }
        }
    },
    {
        _id: "nosql-s-023",
        difficulty: "senior",
        tags: ["Graph", "modeling", "anti-pattern", "index"],
        content: {
            en: {
                title: "Index on Relationship Properties (Graph)",
                body: "Explain why creating an index on a **Relationship Property** (e.g., indexing `r.date` on a `[:FRIENDS_WITH]` relationship) is often a poor optimization choice in a large graph compared to a property index on a node.",
                solution: "Relationship properties are not entry points for traversals. To use the index on `r.date`, the Cypher query must still first locate the connected **node** (the starting point). The database must scan all relationships of that type across the graph, then apply the index filter, making it inefficient. Property indexes are best used on **node properties** that are used as starting points for graph traversals."
            },
            jp: {
                title: "関係プロパティのインデックス（グラフ）",
                body: "ノード上のプロパティインデックスと比較して、**関係プロパティ** 上にインデックスを作成すること（例：`[:FRIENDS_WITH]` 関係上の `r.date` にインデックスを作成すること）が、大規模なグラフでは最適化の選択肢として不適切なことが多いのはなぜですか？",
                solution: "関係プロパティは、トラバーサルのエントリーポイントではありません。 `r.date` のインデックスを使用するには、Cypher クエリは最初に接続された **ノード**（開始点）を見つける必要があります。データベースは、グラフ全体でそのタイプのすべての関係をスキャンしてから、インデックスフィルターを適用する必要があり、非効率的です。プロパティインデックスは、グラフトラバーサルの開始点として使用される **ノードプロパティ** で使用するのが最適です。"
            },
            vi: {
                title: "Index trên Relationship Properties (Graph)",
                body: "Giải thích tại sao việc tạo index trên một **Relationship Property** (ví dụ: lập index `r.date` trên mối quan hệ `[:FRIENDS_WITH]`) thường là một lựa chọn tối ưu hóa kém hiệu quả trong một graph lớn so với index thuộc tính trên một node.",
                solution: "Relationship properties không phải là điểm vào cho các thao tác traversal. Để sử dụng index trên `r.date`, truy vấn Cypher vẫn phải xác định vị trí **node** được kết nối trước (điểm bắt đầu). Cơ sở dữ liệu phải quét tất cả các mối quan hệ của loại đó trên toàn bộ graph, sau đó áp dụng bộ lọc index, làm cho nó không hiệu quả. Property index được sử dụng tốt nhất trên **các thuộc tính node** được sử dụng làm điểm bắt đầu cho các thao tác graph traversal."
            }
        }
    },
    {
        _id: "nosql-s-024",
        difficulty: "senior",
        tags: ["Key-Value", "Redis", "data structure", "Bloom Filter"],
        content: {
            en: {
                title: "Bloom Filters for Non-Existence (Redis)",
                body: "The **Bloom Filter** data structure is often used with Redis. What problem does a Bloom Filter solve (specifically regarding non-existence), and what is the key drawback that must be accepted by the application developer?",
                solution: "A Bloom Filter solves the problem of checking for the **non-existence** of an item with extremely high probability, preventing unnecessary expensive database lookups (i.e., 'Do not query the slow DB if the user definitely hasn't signed up'). The key drawback is the **false positive rate**: a Bloom Filter may indicate that an element *is* present when it is not, but it will never indicate an element is *not* present when it is."
            },
            jp: {
                title: "非存在のためのブルームフィルター（Redis）",
                body: "**ブルームフィルター** データ構造は、Redis でよく使用されます。ブルームフィルターはどのような問題（特に非存在に関して）を解決しますか？また、アプリケーション開発者が受け入れなければならない主な欠点は何ですか？",
                solution: "ブルームフィルターは、アイテムの **非存在** を非常に高い確率でチェックする問題を解決し、不要な高価なデータベースルックアップを防ぎます（つまり、「ユーザーがサインアップしていないことが確実な場合は、遅い DB にクエリしないでください」）。主な欠点は **誤検知率** です。ブルームフィルターは、要素が存在しない場合でも *存在する* ことを示す可能性がありますが、要素が存在するときに *存在しない* ことを示すことはありません。"
            },
            vi: {
                title: "Bloom Filters cho Sự không Tồn tại (Redis)",
                body: "Cấu trúc dữ liệu **Bloom Filter** thường được sử dụng với Redis. Bloom Filter giải quyết vấn đề gì (cụ thể liên quan đến sự không tồn tại), và nhược điểm chính mà nhà phát triển ứng dụng phải chấp nhận là gì?",
                solution: "Bloom Filter giải quyết vấn đề kiểm tra **sự không tồn tại** của một mục với xác suất cực kỳ cao, ngăn chặn các tra cứu cơ sở dữ liệu tốn kém không cần thiết (tức là, 'Đừng truy vấn DB chậm nếu người dùng chắc chắn chưa đăng ký'). Nhược điểm chính là **tỷ lệ dương tính giả (false positive rate)**: Bloom Filter có thể chỉ ra rằng một phần tử *có* mặt khi nó không có, nhưng nó sẽ không bao giờ chỉ ra rằng một phần tử *không* có mặt khi nó có."
            }
        }
    },
    {
        _id: "nosql-s-025",
        difficulty: "senior",
        tags: ["distributed systems", "sharding", "range sharding", "hot shard"],
        content: {
            en: {
                title: "Hot Shard in Range Sharding",
                body: "When implementing a **Range-based Sharding** strategy, what is the most common and severe problem that leads to a **Hot Shard**, and what architectural change (often involving a hash of the key) is used to mitigate this?",
                solution: "The most severe problem is that the **workload naturally focuses on a small, sequential range** of keys (e.g., newest users, recent timestamps). This causes all traffic to hit one shard. The mitigation is to use a **Hashed Shard Key** or a combination of a Range key and a Hash key (e.g., MongoDB's Hashed Sharding), which distributes writes randomly across all shards, converting the sequential access into a random, balanced one."
            },
            jp: {
                title: "レンジシャーディングにおけるホットシャード",
                body: " **範囲ベースのシャーディング** 戦略を実装するとき、**ホットシャード** につながる最も一般的で深刻な問題は何ですか？また、これを軽減するために使用されるアーキテクチャ上の変更（しばしばキーのハッシュを含む）は何ですか？",
                solution: "最も深刻な問題は、**ワークロードがキーの小さな連続した範囲**（例：最新のユーザー、最近のタイムスタンプ）に自然に集中することです。これにより、すべてのトラフィックが 1 つのシャードにヒットします。軽減策は、**ハッシュ化されたシャードキー** または範囲キーとハッシュキーの組み合わせ（例：MongoDB のハッシュ化されたシャーディング）を使用することです。これにより、書き込みがすべてのシャードにランダムに分散され、シーケンシャルアクセスがランダムでバランスの取れたアクセスに変換されます。"
            },
            vi: {
                title: "Hot Shard trong Range Sharding",
                body: "Khi triển khai chiến lược **Range-based Sharding**, vấn đề phổ biến và nghiêm trọng nhất dẫn đến **Hot Shard** là gì, và thay đổi kiến trúc nào (thường liên quan đến hàm băm của khóa) được sử dụng để giảm thiểu điều này?",
                solution: "Vấn đề nghiêm trọng nhất là **workload tự nhiên tập trung vào một phạm vi khóa nhỏ, tuần tự** (ví dụ: người dùng mới nhất, dấu thời gian gần đây). Điều này khiến tất cả lưu lượng truy cập đổ vào một shard. Biện pháp giảm thiểu là sử dụng **Hashed Shard Key** hoặc kết hợp khóa Range và khóa Hash (ví dụ: Hashed Sharding của MongoDB), điều này phân phối các lần ghi ngẫu nhiên trên tất cả các shard, chuyển đổi quyền truy cập tuần tự thành quyền truy cập ngẫu nhiên, cân bằng."
            }
        }
    },
    {
        _id: "nosql-s-026",
        difficulty: "senior",
        tags: ["MongoDB", "modeling", "tree structure", "closure table"],
        content: {
            en: {
                title: "Closure Table Pattern (Document)",
                body: "In the context of MongoDB and modeling tree/graph structures, describe the **Closure Table** pattern (or similar Ancestor Array pattern). How does it optimize deep queries (e.g., 'find all descendants of X') at the cost of write complexity?",
                solution: "The Closure Table pattern stores all possible paths between all descendants and ancestors. In MongoDB, this is often an **Ancestor Array** that lists all parent IDs up to the root. It optimizes deep queries by allowing them to be resolved with a single, highly efficient query (e.g., `db.docs.find({ ancestors: 'X_ID' })`) that uses an index, but writes become complex because inserting a new node requires calculating and updating the ancestor arrays for all its descendants."
            },
            jp: {
                title: "クロージャテーブルパターン（ドキュメント）",
                body: "MongoDB およびツリー/グラフ構造のモデリングのコンテキストで、**クロージャテーブル** パターン（または同様の祖先配列パターン）を説明してください。書き込みの複雑さを犠牲にして、深いクエリ（例：「X のすべての子孫を見つける」）をどのように最適化しますか？",
                solution: "クロージャテーブルパターンは、すべての子孫と祖先の間のすべての可能なパスを保存します。MongoDB では、これは多くの場合、ルートまでのすべての親 ID をリストする **祖先配列（Ancestor Array）** です。インデックスを使用する単一の非常に効率的なクエリ（例：`db.docs.find({ ancestors: 'X_ID' })`）で解決できるようにすることで、深いクエリを最適化しますが、新しいノードを挿入すると、すべての子孫の祖先配列を計算して更新する必要があるため、書き込みが複雑になります。"
            },
            vi: {
                title: "Mô hình Closure Table (Document)",
                body: "Trong bối cảnh MongoDB và mô hình hóa cấu trúc cây/graph, mô tả mô hình **Closure Table** (hoặc mô hình Ancestor Array tương tự). Nó tối ưu hóa các truy vấn sâu (ví dụ: 'tìm tất cả hậu duệ của X') như thế nào với chi phí làm tăng sự phức tạp khi ghi?",
                solution: "Mô hình Closure Table lưu trữ tất cả các đường dẫn có thể có giữa tất cả các hậu duệ và tổ tiên. Trong MongoDB, đây thường là một **Ancestor Array** liệt kê tất cả các ID cha mẹ lên đến gốc. Nó tối ưu hóa các truy vấn sâu bằng cách cho phép chúng được giải quyết bằng một truy vấn duy nhất, có hiệu suất cao (ví dụ: `db.docs.find({ ancestors: 'X_ID' })`) sử dụng index, nhưng các thao tác ghi trở nên phức tạp vì việc chèn một node mới yêu cầu tính toán và cập nhật các mảng tổ tiên cho tất cả các hậu duệ của nó."
            }
        }
    },
    {
        _id: "nosql-s-027",
        difficulty: "senior",
        tags: ["Column-Family", "consistency", "hinted handoff", "gossip"],
        content: {
            en: {
                title: "Hinted Handoff (Cassandra)",
                body: "Describe the function of **Hinted Handoff** in Cassandra's distributed architecture. When and how is a 'hint' (a lightweight message) created, and what problem does it help solve related to temporary node failure and write availability?",
                solution: "Hinted Handoff is a mechanism to ensure write availability when a replica node is temporarily down or unreachable. When a write is targeted for a down node, the coordinator node writes a 'hint' (a promise to deliver the write later) to its local disk. When the down node comes back online, the coordinator (or another node that owns the hint) delivers the buffered write, ensuring the write eventually completes."
            },
            jp: {
                title: "ヒント付きハンドオフ（Cassandra）",
                body: "Cassandra の分散アーキテクチャにおける **ヒント付きハンドオフ（Hinted Handoff）** の機能を説明してください。「ヒント」（軽量メッセージ）はいつ、どのように作成されますか？また、一時的なノード障害と書き込みの可用性に関連して、どのような問題の解決に役立ちますか？",
                solution: "ヒント付きハンドオフは、レプリカノードが一時的にダウンまたは到達不能な場合に書き込みの可用性を確保するメカニズムです。ダウンしたノードを対象とした書き込みが行われた場合、コーディネーターノードはローカルディスクに「ヒント」（後で書き込みを配信するという約束）を書き込みます。ダウンしたノードがオンラインに戻ると、コーディネーター（またはヒントを所有する別のノード）がバッファリングされた書き込みを配信し、書き込みが最終的に完了することを保証します。"
            },
            vi: {
                title: "Hinted Handoff (Cassandra)",
                body: "Mô tả chức năng của **Hinted Handoff** trong kiến trúc phân tán của Cassandra. 'Hint' (một thông điệp nhẹ) được tạo ra khi nào và như thế nào, và nó giúp giải quyết vấn đề gì liên quan đến lỗi node tạm thời và tính sẵn sàng ghi?",
                solution: "Hinted Handoff là một cơ chế để đảm bảo tính sẵn sàng ghi khi một node bản sao tạm thời bị lỗi hoặc không thể truy cập được. Khi một thao tác ghi được nhắm mục tiêu đến một node bị lỗi, node điều phối ghi một 'hint' (lời hứa sẽ gửi lần ghi đó sau) vào đĩa cục bộ của nó. Khi node bị lỗi hoạt động trở lại, node điều phối (hoặc node khác sở hữu hint) sẽ gửi lần ghi được đệm, đảm bảo rằng thao tác ghi cuối cùng sẽ hoàn thành."
            }
        }
    },
    {
        _id: "nosql-s-028",
        difficulty: "senior",
        tags: ["Graph", "Cypher", "performance", "eager"],
        content: {
            en: {
                title: "Eager Traversal (Cypher)",
                body: "In advanced Cypher queries, using the **EAGER** keyword or certain operations can force 'eager traversal.' Explain what eager traversal means and why it can severely degrade performance by forcing a materialization step that bypasses the database's streaming capabilities.",
                solution: "Eager traversal forces the database to fully calculate an intermediate result set and store it in memory before proceeding to the next step. This can be necessary for operations like `WITH DISTINCT`. It degrades performance because it breaks the pipeline's ability to **stream** results and requires large memory allocations for the intermediate data, potentially causing high memory pressure and slow execution if the intermediate result set is massive."
            },
            jp: {
                title: "Eager Traversal (Cypher)",
                body: "高度な Cypher クエリでは、**EAGER** キーワードまたは特定の操作を使用すると、「eager traversal」が強制される可能性があります。eager traversal が何を意味し、データベースのストリーミング機能をバイパスする具現化ステップを強制することにより、パフォーマンスを著しく低下させる可能性があるのはなぜか説明してください。",
                solution: "Eager traversal は、データベースに中間結果セットを完全に計算し、次のステップに進む前にメモリに保存することを強制します。これは、`WITH DISTINCT` のような操作に必要となる場合があります。これは、パイプラインの結果を **ストリーミング** する能力を破壊し、中間データに大きなメモリ割り当てを必要とするため、中間結果セットが巨大な場合、高いメモリ負荷と遅い実行を引き起こす可能性があるため、パフォーマンスが低下します。"
            },
            vi: {
                title: "Eager Traversal (Cypher)",
                body: "Trong các truy vấn Cypher nâng cao, việc sử dụng từ khóa **EAGER** hoặc các thao tác nhất định có thể buộc 'eager traversal.' Giải thích eager traversal có nghĩa là gì và tại sao nó có thể làm giảm nghiêm trọng hiệu suất bằng cách buộc một bước vật chất hóa (materialization) bỏ qua khả năng streaming của cơ sở dữ liệu.",
                solution: "Eager traversal buộc cơ sở dữ liệu phải tính toán hoàn toàn một tập kết quả trung gian và lưu trữ nó trong bộ nhớ trước khi chuyển sang bước tiếp theo. Điều này có thể cần thiết cho các thao tác như `WITH DISTINCT`. Nó làm giảm hiệu suất vì nó phá vỡ khả năng **streaming** kết quả của pipeline và yêu cầu cấp phát bộ nhớ lớn cho dữ liệu trung gian, có khả năng gây áp lực bộ nhớ cao và thực thi chậm nếu tập kết quả trung gian rất lớn."
            }
        }
    },
    {
        _id: "nosql-s-029",
        difficulty: "senior",
        tags: ["Key-Value", "Redis", "data structure", "Streams"],
        content: {
            en: {
                title: "Redis Streams vs Pub/Sub",
                body: "Compare Redis **Streams** (a newer data type) with the traditional Redis **Pub/Sub** model, focusing on the key benefit Streams offer regarding consumer state and message durability.",
                solution: "Redis **Pub/Sub** is a fire-and-forget mechanism where messages are **not durable** and consumers cannot recover lost messages or track their progress. Redis **Streams** are an **append-only, durable log** data structure. Streams allow for **Consumer Groups**, where the server tracks the consumer's state (which messages have been read/acknowledged), enabling message replay, message persistence, and reliable processing even if consumers fail."
            },
            jp: {
                title: "Redis Streams 対 Pub/Sub",
                body: "Redis **Streams**（新しいデータ型）を従来の Redis **Pub/Sub** モデルと比較し、コンシューマの状態とメッセージの耐久性に関して Streams が提供する主な利点に焦点を当ててください。",
                solution: "Redis **Pub/Sub** は、メッセージが **耐久性がない** 「fire-and-forget」メカニズムであり、コンシューマは失われたメッセージを回復したり、進行状況を追跡したりできません。Redis **Streams** は、**追記専用の耐久性のあるログ** データ構造です。Streams は **コンシューマグループ** を可能にし、サーバーがコンシューマの状態（どのメッセージが読み取られた/確認されたか）を追跡するため、コンシューマが失敗した場合でもメッセージの再生、メッセージの永続性、および信頼性の高い処理が可能になります。"
            },
            vi: {
                title: "Redis Streams so với Pub/Sub",
                body: "So sánh **Redis Streams** (một kiểu dữ liệu mới hơn) với mô hình **Pub/Sub** truyền thống của Redis, tập trung vào lợi ích chính mà Streams mang lại về trạng thái người tiêu dùng (consumer state) và tính bền vững của thông điệp (message durability).",
                solution: "Redis **Pub/Sub** là một cơ chế 'fire-and-forget' (gửi rồi quên) trong đó các thông điệp **không bền vững** và người tiêu dùng không thể phục hồi các thông điệp bị mất hoặc theo dõi tiến trình của chúng. Redis **Streams** là một cấu trúc dữ liệu **log chỉ ghi thêm (append-only), bền vững**. Streams cho phép **Consumer Groups**, nơi máy chủ theo dõi trạng thái của người tiêu dùng (thông điệp nào đã được đọc/xác nhận), cho phép phát lại thông điệp, tính bền vững của thông điệp và xử lý đáng tin cậy ngay cả khi người tiêu dùng thất bại."
            }
        }
    },
    {
        _id: "nosql-s-030",
        difficulty: "senior",
        tags: ["distributed systems", "design", "lambda architecture"],
        content: {
            en: {
                title: "Lambda Architecture Role",
                body: "Describe the two primary processing layers in the **Lambda Architecture** (Speed Layer and Batch Layer) and explain how they often rely on different types of NoSQL stores to fulfill their distinct roles.",
                solution: "The **Batch Layer** processes all historical data for accuracy (Master Dataset) and typically uses durable, high-capacity NoSQL stores like **Hadoop/Cassandra**. The **Speed Layer** processes new data in real-time to provide low-latency results until the Batch Layer catches up, typically using low-latency, in-memory NoSQL stores like **Redis/VoltDB**." 


            },
            jp: {
                title: "Lambda アーキテクチャの役割",
                body: " **Lambda アーキテクチャ** における 2 つの主要な処理レイヤー（スピードレイヤーとバッチレイヤー）を説明し、それらがそれぞれの役割を果たすために、どのように異なるタイプの NoSQL ストアに依存することが多いかを説明してください。",
                solution: " **バッチレイヤー** は、正確性のためにすべての履歴データ（マスターデータセット）を処理し、通常、**Hadoop/Cassandra** のような耐久性のある大容量 NoSQL ストアを使用します。 **スピードレイヤー** は、バッチレイヤーが追いつくまで、リアルタイムで新しいデータを処理して低レイテンシの結果を提供し、通常、**Redis/VoltDB** のような低レイテンシのインメモリ NoSQL ストアを使用します。" 
            },
            vi: {
                title: "Vai trò của Kiến trúc Lambda",
                body: "Mô tả hai layer xử lý chính trong **Kiến trúc Lambda** (Speed Layer và Batch Layer) và giải thích cách chúng thường dựa vào các loại store NoSQL khác nhau để thực hiện các vai trò riêng biệt của mình.",
                solution: " **Batch Layer** xử lý tất cả dữ liệu lịch sử để đảm bảo tính chính xác (Master Dataset) và thường sử dụng các store NoSQL bền vững, dung lượng cao như **Hadoop/Cassandra**. **Speed Layer** xử lý dữ liệu mới theo thời gian thực để cung cấp kết quả độ trễ thấp cho đến khi Batch Layer bắt kịp, thường sử dụng các store NoSQL trong bộ nhớ, độ trễ thấp như **Redis/VoltDB**." 


            }
        }
    },
    {
        _id: "nosql-s-031",
        difficulty: "senior",
        tags: ["MongoDB", "indexing", "performance", "covered query"],
        content: {
            en: {
                title: "Index Intersection vs Compound Index",
                body: "Under what specific conditions might the MongoDB query optimizer choose to use **Index Intersection** (combining two separate single-field indexes) instead of relying on a single Compound Index, and what is the associated trade-off?",
                solution: "Index Intersection is chosen when the query predicates (filters) on the two fields are **highly selective** and the documents matching the combined query are few. The trade-off is that Index Intersection saves storage space (as two smaller indexes are created instead of one large compound index), but the query is often **slower** than a perfectly tuned compound index because the database must perform an extra merge step on the result sets from the two indexes."
            },
            jp: {
                title: "インデックスインターセクション 対 複合インデックス",
                body: "MongoDB クエリオプティマイザーが、単一の複合インデックスに頼るのではなく、**インデックスインターセクション**（2 つの個別の単一フィールドインデックスを組み合わせる）を使用することを選択する特定の条件は何ですか？また、それに関連するトレードオフは何ですか？",
                solution: "インデックスインターセクションは、2 つのフィールドのクエリ述語（フィルター）が **非常に選択的** であり、結合されたクエリに一致するドキュメントが少ない場合に選択されます。トレードオフは、インデックスインターセクションはストレージスペースを節約しますが（1 つの大きな複合インデックスの代わりに 2 つの小さなインデックスが作成されるため）、データベースが 2 つのインデックスからの結果セットに対して追加のマージステップを実行する必要があるため、クエリは完全に調整された複合インデックスよりも **遅い** ことがよくあります。"
            },
            vi: {
                title: "Index Intersection so với Compound Index",
                body: "Trong điều kiện cụ thể nào, trình tối ưu hóa truy vấn MongoDB có thể chọn sử dụng **Index Intersection** (kết hợp hai index trường đơn riêng biệt) thay vì dựa vào một Compound Index duy nhất, và sự đánh đổi liên quan là gì?",
                solution: "Index Intersection được chọn khi các vị từ truy vấn (bộ lọc) trên hai trường **có tính chọn lọc cao** và các document khớp với truy vấn kết hợp là ít. Sự đánh đổi là Index Intersection tiết kiệm không gian lưu trữ (vì hai index nhỏ hơn được tạo thay vì một compound index lớn), nhưng truy vấn thường **chậm hơn** so với một compound index được điều chỉnh hoàn hảo vì cơ sở dữ liệu phải thực hiện một bước hợp nhất bổ sung trên các tập kết quả từ hai index."
            }
        }
    },
    {
        _id: "nosql-s-032",
        difficulty: "senior",
        tags: ["Column-Family", "performance", "memtable", "flush"],
        content: {
            en: {
                title: "Memtable Flush and Write Performance (Cassandra)",
                body: "In Cassandra's write path, how does the **Memtable** (an in-memory structure) contribute to the system's low write latency? What happens when the Memtable limit is reached, and how does that process (flushing) affect potential read latency?",
                solution: "Writes are first committed to the commit log and then written to the **Memtable** in memory, allowing writes to return immediately, resulting in low latency. When the Memtable is full, it is **flushed** to a new, immutable SSTable on disk. This flush creates another SSTable that readers must check, thus **increasing read latency** until compaction merges the new SSTable with others."
            },
            jp: {
                title: "Memtable フラッシュと書き込みパフォーマンス（Cassandra）",
                body: "Cassandra の書き込みパスにおいて、**Memtable**（インメモリ構造）はシステムの低い書き込みレイテンシにどのように貢献しますか？Memtable の制限に達すると何が起こりますか？また、そのプロセス（フラッシュ）は潜在的な読み取りレイテンシにどのように影響しますか？",
                solution: "書き込みは最初にコミットログにコミットされ、次にメモリ内の **Memtable** に書き込まれます。これにより、書き込みはすぐに戻ることができ、低いレイテンシが実現します。Memtable がいっぱいになると、ディスク上の新しい不変の SSTable に **フラッシュ** されます。このフラッシュにより、リーダーがチェックしなければならない別の SSTable が作成され、コンパクションが新しい SSTable を他の SSTable とマージするまで **読み取りレイテンシが増加** します。"
            },
            vi: {
                title: "Memtable Flush và Hiệu suất Ghi (Cassandra)",
                body: "Trong đường dẫn ghi của Cassandra, **Memtable** (một cấu trúc trong bộ nhớ) đóng góp như thế nào vào độ trễ ghi thấp của hệ thống? Điều gì xảy ra khi đạt đến giới hạn Memtable, và quá trình đó (flushing) ảnh hưởng đến độ trễ đọc tiềm năng như thế nào?",
                solution: "Các thao tác ghi được cam kết đầu tiên vào commit log và sau đó được ghi vào **Memtable** trong bộ nhớ, cho phép các thao tác ghi trả về ngay lập tức, dẫn đến độ trễ thấp. Khi Memtable đầy, nó được **flush** (xả) sang một SSTable mới, bất biến trên đĩa. Thao tác flush này tạo ra một SSTable khác mà trình đọc phải kiểm tra, do đó **làm tăng độ trễ đọc** cho đến khi compaction hợp nhất SSTable mới với các SSTable khác."
            }
        }
    },
    {
        _id: "nosql-s-033",
        difficulty: "senior",
        tags: ["distributed systems", "event sourcing", "projection", "immutability"],
        content: {
            en: {
                title: "Projection Rebuilding (Event Sourcing)",
                body: "In an Event Sourcing/CQRS architecture, why is the ability to **rebuild a Read Model (Projection)** from the ground up by replaying the entire Event Stream a fundamental architectural capability, and what does this capability allow developers to safely change?",
                solution: "Rebuilding a Projection is fundamental because the events in the Event Store are **immutable** and serve as the single source of truth. This capability allows developers to safely change the **Read Model's schema, structure, or business logic** without losing any data, simply by writing a new projection function and replaying the history."
            },
            jp: {
                title: "プロジェクションの再構築（イベントソーシング）",
                body: "イベントソーシング/CQRS アーキテクチャにおいて、イベントストリーム全体を再生して **読み取りモデル（プロジェクション）** をゼロから再構築する能力が、基本的なアーキテクチャ機能であるのはなぜですか？また、この機能により、開発者は何を安全に変更できるようになりますか？",
                solution: "イベントストアのイベントは **不変** であり、真実の単一の情報源として機能するため、プロジェクションの再構築は基本です。この機能により、開発者は、新しいプロジェクション関数を記述し、履歴を再生するだけで、データを失うことなく **読み取りモデルのスキーマ、構造、またはビジネスロジック** を安全に変更できます。"
            },
            vi: {
                title: "Tái xây dựng Projection (Event Sourcing)",
                body: "Trong kiến trúc Event Sourcing/CQRS, tại sao khả năng **tái xây dựng Read Model (Projection)** từ đầu bằng cách phát lại toàn bộ Event Stream lại là một khả năng kiến trúc cơ bản, và khả năng này cho phép các nhà phát triển thay đổi điều gì một cách an toàn?",
                solution: "Tái xây dựng Projection là cơ bản vì các sự kiện trong Event Store là **bất biến** và đóng vai trò là nguồn chân lý duy nhất. Khả năng này cho phép các nhà phát triển thay đổi **schema, cấu trúc, hoặc logic nghiệp vụ của Read Model** một cách an toàn mà không làm mất bất kỳ dữ liệu nào, chỉ bằng cách viết một hàm projection mới và phát lại lịch sử."
            }
        }
    },
    {
        _id: "nosql-s-034",
        difficulty: "senior",
        tags: ["MongoDB", "aggregation", "optimization", "$project"],
        content: {
            en: {
                title: "Projection Early in Pipeline",
                body: "In the MongoDB Aggregation Pipeline, besides reducing the dataset size with `$match`, why is it beneficial to include a **$project** stage **early** in the pipeline to exclude unnecessary fields?",
                solution: "Including `$project` early minimizes the amount of data the remaining stages must process, potentially speeding up subsequent operations like `$group` or `$sort`. More critically, it prevents unnecessary data from being streamed across the network and loaded into memory for intermediate calculations, which is crucial for efficiency in memory-constrained aggregation stages."
            },
            jp: {
                title: "パイプラインの早い段階でのプロジェクション",
                body: "MongoDB 集約パイプラインにおいて、$match でデータセットのサイズを削減することに加えて、不要なフィールドを除外するためにパイプラインの **早い段階** に **$project** ステージを含めることが有益なのはなぜですか？",
                solution: " `$project` を早い段階に含めることで、残りのステージが処理しなければならないデータの量が最小限に抑えられ、 `$group` や `$sort` のような後続の操作が潜在的に高速化されます。より重要なのは、不要なデータがネットワークを介してストリーミングされ、中間計算のためにメモリにロードされるのを防ぐことであり、これはメモリ制約のある集約ステージの効率にとって重要です。"
            },
            vi: {
                title: "Projection sớm trong Pipeline",
                body: "Trong MongoDB Aggregation Pipeline, ngoài việc giảm kích thước tập dữ liệu với `$match`, tại sao việc đưa một stage **$project** vào **sớm** trong pipeline để loại trừ các trường không cần thiết lại có lợi?",
                solution: "Việc đưa `$project` vào sớm sẽ giảm thiểu lượng dữ liệu mà các stage còn lại phải xử lý, có khả năng tăng tốc các thao tác tiếp theo như `$group` hoặc `$sort`. Quan trọng hơn, nó ngăn dữ liệu không cần thiết được truyền qua mạng và được tải vào bộ nhớ cho các phép tính trung gian, điều này rất quan trọng đối với hiệu quả trong các stage aggregation bị giới hạn bộ nhớ."
            }
        }
    },
    {
        _id: "nosql-s-035",
        difficulty: "senior",
        tags: ["Graph", "modeling", "reification"],
        content: {
            en: {
                title: "Relationship Reification (Graph)",
                body: "In Graph modeling, what is the concept of **relationship reification**, and when is it necessary to 'reify' a relationship (i.e., convert an edge into a node with two new connecting edges)?",
                solution: "Reification is the process of converting a relationship (edge) into a new node (often called an 'Event' or 'Interaction' node). It is necessary when the relationship itself needs to become the **subject of its own relationships**—i.e., you need to attach properties or connect *other* nodes to the relationship itself (e.g., 'User A reviewed the `:Rented` relationship between User B and Movie C')."
            },
            jp: {
                title: "関係の実体化（グラフ）",
                body: "グラフモデリングにおいて、**関係の実体化（Reification）** の概念とは何ですか？また、いつ関係を「実体化」する（つまり、エッジを 2 つの新しい接続エッジを持つノードに変換する）必要がありますか？",
                solution: "実体化は、関係（エッジ）を新しいノード（しばしば「イベント」または「インタラクション」ノードと呼ばれる）に変換するプロセスです。関係自体が **独自の新しい関係の主体** になる必要がある場合に必要です。つまり、関係自体にプロパティをアタッチしたり、*他の* ノードを接続したりする必要がある場合です（例：「ユーザー A は、ユーザー B とムービー C の間の `:Rented` 関係をレビューした」）。"
            },
            vi: {
                title: "Relationship Reification (Graph)",
                body: "Trong mô hình hóa Graph, khái niệm **relationship reification** là gì, và khi nào cần 'reify' một mối quan hệ (tức là chuyển đổi một cạnh thành một node với hai cạnh kết nối mới)?",
                solution: "Reification là quá trình chuyển đổi một mối quan hệ (cạnh) thành một node mới (thường được gọi là node 'Event' hoặc 'Interaction'). Nó là cần thiết khi bản thân mối quan hệ cần trở thành **chủ thể của các mối quan hệ riêng của nó**—tức là, bạn cần gắn các thuộc tính hoặc kết nối *các* node khác với chính mối quan hệ đó (ví dụ: 'Người dùng A đã đánh giá mối quan hệ `:Rented` giữa Người dùng B và Phim C')."
            }
        }
    },
    {
        _id: "nosql-s-036",
        difficulty: "senior",
        tags: ["Key-Value", "Redis", "data structure", "HyperLogLog"],
        content: {
            en: {
                title: "HyperLogLog Merge (Redis)",
                body: "The Redis **PFMERGE** command is used to combine multiple HyperLogLog structures. Explain the mathematical basis that allows PFMERGE to accurately estimate the cardinality of the **union** of the underlying sets, even though the HyperLogLogs only store probability data.",
                solution: "HyperLogLog structures store a fixed-size array of **registers** that track the maximum number of leading zeros encountered for the hash of each item. PFMERGE works by simply performing a **bitwise maximum** operation on the corresponding registers of the input HyperLogLogs. This maximum value is then used in the final estimation formula to represent the cardinality of the combined set."
            },
            jp: {
                title: "HyperLogLog マージ (Redis)",
                body: "Redis の **PFMERGE** コマンドは、複数の HyperLogLog 構造を結合するために使用されます。HyperLogLog が確率データのみを保存しているにもかかわらず、PFMERGE が基礎となるセットの **ユニオン** のカーディナリティを正確に推定できる数学的根拠を説明してください。",
                solution: "HyperLogLog 構造は、各アイテムのハッシュで遭遇した先行ゼロの最大数を追跡する固定サイズの **レジスタ** の配列を保存します。PFMERGE は、入力 HyperLogLog の対応するレジスタに対して **ビットごとの最大** 演算を実行するだけで機能します。この最大値は、結合されたセットのカーディナリティを表すために、最終的な推定式で使用されます。"
            },
            vi: {
                title: "HyperLogLog Merge (Redis)",
                body: "Lệnh **PFMERGE** của Redis được sử dụng để kết hợp nhiều cấu trúc HyperLogLog. Giải thích cơ sở toán học cho phép PFMERGE ước tính chính xác cardinality của **tập hợp hợp (union)** của các tập hợp cơ bản, mặc dù HyperLogLogs chỉ lưu trữ dữ liệu xác suất.",
                solution: "Cấu trúc HyperLogLog lưu trữ một mảng **thanh ghi (registers)** có kích thước cố định, theo dõi số lượng tối đa các số 0 đứng đầu được tìm thấy cho hàm băm của mỗi mục. PFMERGE hoạt động bằng cách chỉ thực hiện thao tác **bitwise maximum** trên các thanh ghi tương ứng của các HyperLogLog đầu vào. Giá trị tối đa này sau đó được sử dụng trong công thức ước tính cuối cùng để đại diện cho cardinality của tập hợp kết hợp."
            }
        }
    },
    {
        _id: "nosql-s-037",
        difficulty: "senior",
        tags: ["distributed systems", "sharding", "consistency", "ACID"],
        content: {
            en: {
                title: "Spanner and TrueTime (NewSQL/Distributed)",
                body: "Google Spanner is often classified as a NewSQL or distributed database that achieves external consistency. What unique hardware/software mechanism (involving atomic clocks) does Spanner use to achieve globally synchronized, consistent ACID transactions across shards?",
                solution: "Spanner uses **TrueTime**, a combination of GPS receivers and atomic clocks on every server to establish a precise, global time reference with a known error bound. This error bound allows Spanner to use a two-phase commit protocol to establish an absolute transaction order (Serialization) globally, guaranteeing that any read will see data committed before its guaranteed read time, thus ensuring **External Consistency**."
            },
            jp: {
                title: "Spanner と TrueTime (NewSQL/分散)",
                body: "Google Spanner は、外部整合性を実現する NewSQL または分散データベースとして分類されることがよくあります。Spanner は、シャーディング全体でグローバルに同期された一貫性のある ACID トランザクションを実現するために、どのような独自のハードウェア/ソフトウェアメカニズム（原子時計を含む）を使用していますか？",
                solution: "Spanner は、すべてのサーバー上の GPS 受信機と原子時計の組み合わせである **TrueTime** を使用して、既知のエラー範囲を持つ正確なグローバル時間参照を確立します。このエラー範囲により、Spanner は 2 フェーズコミットプロトコルを使用してグローバルに絶対的なトランザクション順序（シリアル化）を確立し、読み取りが保証された読み取り時間の前にコミットされたデータを常に確認できるようにすることで、**外部整合性** を保証します。"
            },
            vi: {
                title: "Spanner và TrueTime (NewSQL/Phân tán)",
                body: "Google Spanner thường được phân loại là NewSQL hoặc cơ sở dữ liệu phân tán đạt được external consistency. Cơ chế phần cứng/phần mềm độc đáo nào (liên quan đến đồng hồ nguyên tử) mà Spanner sử dụng để đạt được các giao dịch ACID nhất quán, đồng bộ hóa toàn cầu trên các shard?",
                solution: "Spanner sử dụng **TrueTime**, sự kết hợp giữa bộ thu GPS và đồng hồ nguyên tử trên mọi máy chủ để thiết lập một tham chiếu thời gian toàn cầu, chính xác với giới hạn lỗi đã biết. Giới hạn lỗi này cho phép Spanner sử dụng giao thức two-phase commit để thiết lập thứ tự giao dịch tuyệt đối (Serialization) trên toàn cầu, đảm bảo rằng mọi lần đọc sẽ thấy dữ liệu được cam kết trước thời gian đọc được đảm bảo của nó, do đó đảm bảo **External Consistency (Tính nhất quán Ngoại vi)**."
            }
        }
    },
    {
        _id: "nosql-s-038",
        difficulty: "senior",
        tags: ["MongoDB", "indexing", "text search", "performance"],
        content: {
            en: {
                title: "Text Index vs Dedicated Search Engine",
                body: "For full-text search capabilities in MongoDB, compare the use of a native **Text Index** to integrating a dedicated search engine like Elasticsearch/Solr, focusing on the trade-offs in query complexity and search relevance features.",
                solution: "MongoDB's **Text Index** is simpler to set up and query (native to the DB) but offers **limited search relevance** (basic stemming, stop words). Dedicated search engines (Elasticsearch/Solr) require external infrastructure and synchronization complexity but provide **advanced relevance features** (custom analyzers, phonetic matching, boosting/scoring, faceted search) that are far superior for complex information retrieval workloads."
            },
            jp: {
                title: "テキストインデックス 対 専用検索エンジン",
                body: "MongoDB の全文検索機能について、ネイティブの **テキストインデックス** の使用と、Elasticsearch/Solr のような専用検索エンジンの統合を比較し、クエリの複雑さと検索関連性の機能におけるトレードオフに焦点を当ててください。",
                solution: "MongoDB の **テキストインデックス** は設定とクエリが簡単ですが（DB にネイティブ）、提供する **検索関連性** は限られています（基本的なステミング、ストップワード）。専用検索エンジン（Elasticsearch/Solr）は、外部インフラストラクチャと同期の複雑さを必要としますが、複雑な情報検索ワークロードにはるかに優れた **高度な関連性機能**（カスタムアナライザー、音声一致、ブースト/スコアリング、ファセット検索）を提供します。"
            },
            vi: {
                title: "Text Index so với Dedicated Search Engine",
                body: "Đối với khả năng tìm kiếm toàn văn trong MongoDB, hãy so sánh việc sử dụng **Text Index** gốc với việc tích hợp một công cụ tìm kiếm chuyên dụng như Elasticsearch/Solr, tập trung vào sự đánh đổi về độ phức tạp của truy vấn và các tính năng liên quan đến sự liên quan của tìm kiếm.",
                solution: "**Text Index** của MongoDB đơn giản hơn để thiết lập và truy vấn (gốc của DB) nhưng cung cấp **sự liên quan tìm kiếm hạn chế** (cơ bản về stemming, stop words). Các công cụ tìm kiếm chuyên dụng (Elasticsearch/Solr) yêu cầu cơ sở hạ tầng bên ngoài và sự phức tạp đồng bộ hóa nhưng cung cấp **các tính năng liên quan nâng cao** (bộ phân tích tùy chỉnh, so khớp ngữ âm, boosting/scoring, faceted search) vượt trội hơn nhiều cho các workload truy xuất thông tin phức tạp."
            }
        }
    },
    {
        _id: "nosql-s-039",
        difficulty: "senior",
        tags: ["Column-Family", "consistency", "isolation", "ACID"],
        content: {
            en: {
                title: "Isolation Levels (Cassandra)",
                body: "Cassandra's default read operation does not provide the **Isolation** guarantee of ACID. Explain what read anomaly is still possible under default settings (QUORUM reads) and how Lightweight Transactions (LWTs) mitigate this, at the cost of performance.",
                solution: "The possible anomaly is a **non-repeatable read**, where two reads within the same transaction/request might return different values because a concurrent write committed between the reads. LWTs (using `IF EXISTS` or `IF NOT EXISTS`) enforce a strict serial order using Paxos, preventing concurrent updates and ensuring that a read returns the most recently committed value across the replicas."
            },
            jp: {
                title: "隔離レベル（Cassandra）",
                body: "Cassandra のデフォルトの読み取り操作は、ACID の **隔離性（Isolation）** の保証を提供しません。デフォルト設定（QUORUM 読み取り）の下で依然として可能性のある読み取り異常は何ですか？また、パフォーマンスを犠牲にして、軽量トランザクション（LWT）がこれをどのように軽減するかを説明してください。",
                solution: "可能性のある異常は **反復不可能な読み取り（non-repeatable read）** です。これは、読み取り間に同時書き込みがコミットされたために、同じトランザクション/リクエスト内の 2 つの読み取りが異なる値を返す可能性があるものです。LWT（`IF EXISTS` または `IF NOT EXISTS` を使用）は、Paxos を使用して厳密なシリアル順序を強制し、同時更新を防ぎ、読み取りがレプリカ全体で最も最近コミットされた値を返すことを保証します。"
            },
            vi: {
                title: "Isolation Levels (Cassandra)",
                body: "Thao tác đọc mặc định của Cassandra không cung cấp đảm bảo **Isolation (Tính cô lập)** của ACID. Giải thích sự bất thường đọc nào vẫn có thể xảy ra theo cài đặt mặc định (QUORUM reads) và cách Lightweight Transactions (LWTs) giảm thiểu điều này, với chi phí là hiệu suất.",
                solution: "Sự bất thường có thể xảy ra là **non-repeatable read** (đọc không lặp lại), trong đó hai lần đọc trong cùng một giao dịch/yêu cầu có thể trả về các giá trị khác nhau vì một lần ghi đồng thời đã cam kết giữa các lần đọc. LWTs (sử dụng `IF EXISTS` hoặc `IF NOT EXISTS`) thực thi một thứ tự tuần tự nghiêm ngặt bằng cách sử dụng Paxos, ngăn chặn các cập nhật đồng thời và đảm bảo rằng một lần đọc trả về giá trị được cam kết gần đây nhất trên các bản sao."
            }
        }
    },
    {
        _id: "nosql-s-040",
        difficulty: "senior",
        tags: ["Graph", "Cypher", "query optimization", "profile"],
        content: {
            en: {
                title: "Profiling Cypher Queries",
                body: "What is the key difference in the output and purpose between using the **EXPLAIN** and **PROFILE** keywords when analyzing the performance of a complex Cypher query in Neo4j?",
                solution: "**EXPLAIN** shows the **theoretical execution plan** that the query optimizer *intends* to use, without actually running the query. **PROFILE** executes the query and returns the actual execution plan, along with **runtime statistics** such as the number of database hits, rows produced at each step, and execution time, allowing for real-world performance assessment."
            },
            jp: {
                title: "Cypher クエリのプロファイリング",
                body: "Neo4j で複雑な Cypher クエリのパフォーマンスを分析するときに、**EXPLAIN** キーワードと **PROFILE** キーワードを使用する場合の出力と目的の主な違いは何ですか？",
                solution: " **EXPLAIN** は、クエリオプティマイザーが *意図する* **理論的な実行計画** を、実際にクエリを実行せずに表示します。 **PROFILE** はクエリを実行し、データベースヒット数、各ステップで生成された行、実行時間などの **ランタイム統計** とともに実際の実行計画を返し、実際のパフォーマンス評価を可能にします。"
            },
            vi: {
                title: "Profiling Cypher Queries",
                body: "Sự khác biệt chính về đầu ra và mục đích giữa việc sử dụng các từ khóa **EXPLAIN** và **PROFILE** khi phân tích hiệu suất của một truy vấn Cypher phức tạp trong Neo4j là gì?",
                solution: " **EXPLAIN** hiển thị **kế hoạch thực thi lý thuyết** mà trình tối ưu hóa truy vấn *dự định* sử dụng, mà không thực sự chạy truy vấn. **PROFILE** thực thi truy vấn và trả về kế hoạch thực thi thực tế, cùng với **thống kê thời gian chạy** như số lần truy cập cơ sở dữ liệu, số hàng được tạo ở mỗi bước và thời gian thực thi, cho phép đánh giá hiệu suất trong thế giới thực."
            }
        }
    },
    {
        _id: "nosql-s-041",
        difficulty: "senior",
        tags: ["MongoDB", "indexing", "performance", "B-Tree"],
        content: {
            en: {
                title: "Index Prefixes and Optimization",
                body: "Given a compound index `{ A: 1, B: 1, C: 1 }` in MongoDB, explain which of the following queries can use the index as a **prefix** for filtering, and which cannot: 1) `WHERE B=val` 2) `WHERE A=val AND C=val` 3) `WHERE A=val AND B=val`.",
                solution: "Only **3) `WHERE A=val AND B=val`** can fully use the index prefix for both filtering. **2) `WHERE A=val AND C=val`** can use the `A` part of the index for filtering but must perform an in-memory check for `C`. **1) `WHERE B=val`** **cannot** use the index as a prefix because the index always starts with `A`."
            },
            jp: {
                title: "インデックスプレフィックスと最適化",
                body: "MongoDB の複合インデックス `{ A: 1, B: 1, C: 1 }` が与えられた場合、次のどのクエリがフィルタリングの **プレフィックス** としてインデックスを使用でき、どれが使用できないかを説明してください。1) `WHERE B=val` 2) `WHERE A=val AND C=val` 3) `WHERE A=val AND B=val`。",
                solution: " **3) `WHERE A=val AND B=val`** のみが、フィルタリングのためにインデックスプレフィックスを完全に利用できます。 **2) `WHERE A=val AND C=val`** は、フィルタリングのためにインデックスの `A` 部分を使用できますが、`C` のインメモリチェックを実行する必要があります。 **1) `WHERE B=val`** は、インデックスが常に `A` から始まるため、プレフィックスとしてインデックスを **使用できません**。"
            },
            vi: {
                title: "Index Prefixes và Tối ưu hóa",
                body: "Với một compound index `{ A: 1, B: 1, C: 1 }` trong MongoDB, hãy giải thích truy vấn nào trong số các truy vấn sau có thể sử dụng index làm **tiền tố** để lọc và truy vấn nào không thể: 1) `WHERE B=val` 2) `WHERE A=val AND C=val` 3) `WHERE A=val AND B=val`.",
                solution: "Chỉ **3) `WHERE A=val AND B=val`** mới có thể sử dụng hoàn toàn tiền tố index cho cả việc lọc. **2) `WHERE A=val AND C=val`** có thể sử dụng phần `A` của index để lọc nhưng phải thực hiện kiểm tra `C` trong bộ nhớ. **1) `WHERE B=val`** **không thể** sử dụng index làm tiền tố vì index luôn bắt đầu bằng `A`."
            }
        }
    },
    {
        _id: "nosql-s-042",
        difficulty: "senior",
        tags: ["Key-Value", "Redis", "data structure", "Geospatial", "efficiency"],
        content: {
            en: {
                title: "Geohash Precision (Redis)",
                body: "When using Redis's geospatial commands (based on Geohash), why does increasing the **precision** (bit length) of the Geohash improve query accuracy (e.g., GEORADIUS) but also increase the number of index lookups required?",
                solution: "Increasing precision means the Geohash string is longer, mapping the location to a smaller, more specific bounding box. This improves accuracy because the radius query is performed over a more granular area. However, the query must check a larger number of **neighboring Geohash boxes** to ensure it captures all points within the specified radius, increasing the number of index lookups."
            },
            jp: {
                title: "Geohash 精度（Redis）",
                body: "Redis の地理空間コマンド（Geohash に基づく）を使用する場合、Geohash の **精度**（ビット長）を上げると、クエリの精度（例：GEORADIUS）が向上しますが、必要なインデックスルックアップの数も増加するのはなぜですか？",
                solution: "精度を上げると、Geohash 文字列が長くなり、場所がより小さく、より具体的な境界ボックスにマッピングされます。これにより、半径クエリがよりきめ細かな領域で実行されるため、精度が向上します。ただし、クエリは、指定された半径内のすべてのポイントを確実にキャプチャするために、**より多くの近隣の Geohash ボックス** をチェックする必要があり、インデックスルックアップの数が増加します。"
            },
            vi: {
                title: "Độ chính xác Geohash (Redis)",
                body: "Khi sử dụng các lệnh không gian địa lý của Redis (dựa trên Geohash), tại sao việc tăng **độ chính xác** (độ dài bit) của Geohash lại cải thiện độ chính xác truy vấn (ví dụ: GEORADIUS) nhưng cũng làm tăng số lần tra cứu index cần thiết?",
                solution: "Tăng độ chính xác có nghĩa là chuỗi Geohash dài hơn, ánh xạ vị trí đến một hộp giới hạn nhỏ hơn, cụ thể hơn. Điều này cải thiện độ chính xác vì truy vấn bán kính được thực hiện trên một khu vực chi tiết hơn. Tuy nhiên, truy vấn phải kiểm tra số lượng **hộp Geohash lân cận** lớn hơn để đảm bảo nó thu thập tất cả các điểm trong bán kính được chỉ định, làm tăng số lần tra cứu index."
            }
        }
    },
    {
        _id: "nosql-s-043",
        difficulty: "senior",
        tags: ["distributed systems", "sharding", "consistency", "load balancing"],
        content: {
            en: {
                title: "Colocation for Joins (Sharding)",
                body: "In sharded NoSQL systems, what is the strategy of **colocation** (or zone sharding), and how is it used to enable efficient 'pseudo-joins' between two related collections without triggering a cross-shard join anti-pattern?",
                solution: "Colocation involves ensuring that two logically related documents (e.g., `User` and their `Orders`) are always stored on the **same physical shard** by using the **same shard key** (e.g., `user_id`). This avoids cross-shard joins because the database can execute the entire join operation locally on a single shard, treating the two collections as partitioned tables within that shard."
            },
            jp: {
                title: "結合のためのコロケーション（シャーディング）",
                body: "シャーディングされた NoSQL システムにおいて、**コロケーション**（またはゾーンシャーディング）の戦略とは何ですか？また、クロスシャード結合のアンチパターンをトリガーせずに、2 つの関連するコレクション間で効率的な「疑似結合」を可能にするために、どのように使用されますか？",
                solution: "コロケーションには、2 つの論理的に関連するドキュメント（例：`User` とその `Orders`）が常に **同じ物理シャード** に保存されるように、**同じシャードキー**（例：`user_id`）を使用することが含まれます。これにより、データベースは単一のシャードで結合操作全体をローカルで実行できるため、クロスシャード結合が回避されます。これは、そのシャード内のパーティション分割されたテーブルとして 2 つのコレクションを扱います。"
            },
            vi: {
                title: "Colocation cho Joins (Sharding)",
                body: "Trong các hệ thống NoSQL được sharding, chiến lược **colocation** (hoặc zone sharding) là gì, và nó được sử dụng như thế nào để cho phép 'pseudo-joins' hiệu quả giữa hai collection liên quan mà không kích hoạt anti-pattern cross-shard join?",
                solution: "Colocation liên quan đến việc đảm bảo rằng hai document liên quan logic (ví dụ: `User` và `Orders` của họ) luôn được lưu trữ trên **cùng một shard vật lý** bằng cách sử dụng **cùng một shard key** (ví dụ: `user_id`). Điều này tránh cross-shard joins vì cơ sở dữ liệu có thể thực thi toàn bộ thao tác join cục bộ trên một shard duy nhất, coi hai collection là các bảng được phân vùng trong shard đó."
            }
        }
    },
    {
        _id: "nosql-s-044",
        difficulty: "senior",
        tags: ["MongoDB", "aggregation", "operators", "window function"],
        content: {
            en: {
                title: "Window Functions (Aggregation)",
                body: "MongoDB's Aggregation Pipeline now supports **Window Functions** (like `$setWindowFields`). Describe a complex analytical problem this feature can solve that would have been impossible or highly inefficient using only pre-window aggregation stages like `$group` and `$sort`.",
                solution: "Window Functions can calculate metrics that depend on the surrounding rows **without collapsing the result set** (which `$group` does). Example: Calculating a **running total/cumulative sum** of sales over time, or calculating a **moving average** across the last 7 documents, while still returning all individual documents. This preserves row detail while calculating aggregates across a defined 'window'."
            },
            jp: {
                title: "ウィンドウ関数（集約）",
                body: "MongoDB の集約パイプラインは、**ウィンドウ関数**（ `$setWindowFields` など）をサポートするようになりました。この機能が解決できる、従来の `$group` や `$sort` のような集約ステージのみを使用した場合に不可能であったか、または非常に非効率であった複雑な分析問題について説明してください。",
                solution: "ウィンドウ関数は、**結果セットを折りたたむことなく**（ `$group` が行うように）、周囲の行に依存するメトリックを計算できます。例：すべての個々のドキュメントを返しながら、時間の経過に伴う売上の **実行中の合計/累積合計** を計算したり、過去 7 つのドキュメントにわたる **移動平均** を計算したりします。これにより、「ウィンドウ」全体で集計を計算しながら行の詳細が保持されます。"
            },
            vi: {
                title: "Window Functions (Aggregation)",
                body: "MongoDB Aggregation Pipeline hiện hỗ trợ **Window Functions** (như `$setWindowFields`). Mô tả một vấn đề phân tích phức tạp mà tính năng này có thể giải quyết mà sẽ là không thể hoặc kém hiệu quả cao nếu chỉ sử dụng các stage aggregation tiền-window như `$group` và `$sort`.",
                solution: "Window Functions có thể tính toán các chỉ số phụ thuộc vào các hàng xung quanh **mà không làm sụp đổ tập kết quả** (điều mà `$group` làm). Ví dụ: Tính toán **tổng lũy tiến/tổng tích lũy** của doanh số bán hàng theo thời gian, hoặc tính **trung bình động** trên 7 document cuối cùng, trong khi vẫn trả về tất cả các document riêng lẻ. Điều này giữ lại chi tiết hàng trong khi tính toán tổng hợp trên một 'window' được xác định."
            }
        }
    },
    {
        _id: "nosql-s-045",
        difficulty: "senior",
        tags: ["Graph", "Cypher", "query optimization", "Cardinality"],
        content: {
            en: {
                title: "Filter vs Traversal Order (Graph)",
                body: "In Cypher, when writing a query involving multiple MATCH clauses and WHERE filters, describe the rule of thumb regarding the order of operations and filtering to ensure optimal performance (relating to **cardinality**).",
                solution: "The rule of thumb is to **filter early and traverse late**, meaning you should apply restrictive WHERE clauses (that reduce the cardinality of the result set) on indexed properties of the starting nodes *before* initiating deep traversals. This ensures that the expensive traversal only operates on a small, highly selective set of starting nodes, rather than exploring a large, un-filtered portion of the graph."
            },
            jp: {
                title: "フィルター 対 トラバーサル順序（グラフ）",
                body: "Cypher で、複数の MATCH 句と WHERE フィルターを含むクエリを作成するとき、最適なパフォーマンスを確保するための操作とフィルタリングの順序に関する経験則を説明してください（**カーディナリティ** に関連して）。",
                solution: "経験則は **早くフィルタリングし、遅くトラバースする** ことです。つまり、深いトラバーサルを開始する *前* に、開始ノードのインデックス付きプロパティに制限的な WHERE 句（結果セットのカーディナリティを減らす）を適用する必要があります。これにより、高価なトラバーサルは、グラフの大きくフィルタリングされていない部分を探索するのではなく、小さな、選択性の高い開始ノードのセットに対してのみ動作することが保証されます。"
            },
            vi: {
                title: "Thứ tự Filter so với Traversal (Graph)",
                body: "Trong Cypher, khi viết một truy vấn liên quan đến nhiều mệnh đề MATCH và bộ lọc WHERE, mô tả quy tắc chung về thứ tự các thao tác và lọc để đảm bảo hiệu suất tối ưu (liên quan đến **cardinality**).",
                solution: "Quy tắc chung là **lọc sớm và duyệt muộn**, nghĩa là bạn nên áp dụng các mệnh đề WHERE giới hạn (làm giảm cardinality của tập kết quả) trên các thuộc tính được lập index của các node bắt đầu *trước khi* bắt đầu các thao tác traversal sâu. Điều này đảm bảo rằng thao tác traversal tốn kém chỉ hoạt động trên một tập hợp nhỏ, có tính chọn lọc cao các node bắt đầu, thay vì khám phá một phần lớn, chưa được lọc của graph."
            }
        }
    },
    {
        _id: "nosql-s-046",
        difficulty: "senior",
        tags: ["Key-Value", "Redis", "scalability", "cluster", "hash slot"],
        content: {
            en: {
                title: "Redis Cluster Hash Slot Concept",
                body: "In a Redis Cluster setup, the keyspace is partitioned into **16384 hash slots**. How does the concept of hash slots enable the cluster to achieve automatic sharding and transparent rebalancing without requiring a separate configuration service like MongoDB's Config Servers?",
                solution: "Each key is mapped to one of the 16384 slots using `CRC16(key) mod 16384`. The cluster configuration maintains a mapping of which node owns which range of slots. Sharding is automatic because keys map directly to a slot, and rebalancing is transparent because moving a slot simply means changing the mapping and moving the data (without changing the client's hashing logic), thus eliminating the need for a separate config server/router."
            },
            jp: {
                title: "Redis クラスターハッシュスロットの概念",
                body: "Redis クラスターのセットアップでは、キースペースは **16384 個のハッシュスロット** に分割されます。ハッシュスロットの概念は、MongoDB の Config サーバーのような個別の構成サービスを必要とせずに、クラスターが自動シャーディングと透過的なリバランスを実現できるようにするのはなぜですか？",
                solution: "各キーは、`CRC16(key) mod 16384` を使用して 16384 個のスロットのいずれかにマッピングされます。クラスター構成は、どのノードがどのスロットの範囲を所有しているかのマッピングを維持します。キーはスロットに直接マッピングされるため、シャーディングは自動であり、スロットを移動することは、マッピングを変更してデータを移動することだけを意味するため（クライアントのハッシュロジックを変更せずに）、個別の構成サーバー/ルーターの必要性がなくなります。"
            },
            vi: {
                title: "Khái niệm Hash Slot của Redis Cluster",
                body: "Trong thiết lập Redis Cluster, keyspace được phân vùng thành **16384 hash slots**. Khái niệm hash slots cho phép cluster đạt được sharding tự động và tái cân bằng minh bạch như thế nào mà không cần một dịch vụ cấu hình riêng biệt như Config Servers của MongoDB?",
                solution: "Mỗi khóa được ánh xạ tới một trong 16384 slot bằng cách sử dụng `CRC16(key) mod 16384`. Cấu hình cluster duy trì ánh xạ về việc node nào sở hữu phạm vi slot nào. Sharding là tự động vì các khóa ánh xạ trực tiếp đến một slot, và tái cân bằng là minh bạch vì việc di chuyển một slot đơn giản có nghĩa là thay đổi ánh xạ và di chuyển dữ liệu (mà không cần thay đổi logic băm của client), do đó loại bỏ nhu cầu về một config server/router riêng biệt."
            }
        }
    },
    {
        _id: "nosql-s-047",
        difficulty: "senior",
        tags: ["Column-Family", "performance", "read repair", "latency"],
        content: {
            en: {
                title: "Read Repair Trade-offs (Cassandra)",
                body: "While Read Repair is essential for consistency in Cassandra, why is enabling a high Read Repair chance (e.g., 100%) an anti-pattern for high-throughput, low-latency applications?",
                solution: "Read Repair involves an extra, often synchronous, write operation to repair the stale replica. Enabling a high chance of Read Repair means that many read requests will execute this extra write operation, dramatically **increasing the latency** of the read request itself and consuming valuable write resources (CPU/IO) that should be reserved for dedicated write operations. It trades higher read latency for faster consistency convergence."
            },
            jp: {
                title: "読み取り修復のトレードオフ（Cassandra）",
                body: "読み取り修復は Cassandra の整合性にとって不可欠ですが、高スループット、低レイテンシのアプリケーションにとって、高い読み取り修復の機会（例：100%）を有効にすることがアンチパターンであるのはなぜですか？",
                solution: "読み取り修復には、古いレプリカを修復するための追加の、しばしば同期的な書き込み操作が伴います。読み取り修復の高い機会を有効にすることは、多くの読み取りリクエストがこの追加の書き込み操作を実行することを意味し、読み取りリクエスト自体の **レイテンシを劇的に増加** させ、専用の書き込み操作のために予約されるべき貴重な書き込みリソース（CPU/IO）を消費します。これは、より速い整合性の収束のために、より高い読み取りレイテンシを犠牲にします。"
            },
            vi: {
                title: "Đánh đổi Read Repair (Cassandra)",
                body: "Mặc dù Read Repair rất cần thiết cho tính nhất quán trong Cassandra, tại sao việc bật khả năng Read Repair cao (ví dụ: 100%) lại là một anti-pattern đối với các ứng dụng có thông lượng cao, độ trễ thấp?",
                solution: "Read Repair liên quan đến một thao tác ghi bổ sung, thường là đồng bộ, để sửa chữa bản sao bị lỗi thời. Việc bật khả năng Read Repair cao có nghĩa là nhiều yêu cầu đọc sẽ thực thi thao tác ghi bổ sung này, làm **tăng đáng kể độ trễ** của chính yêu cầu đọc và tiêu thụ các tài nguyên ghi có giá trị (CPU/IO) lẽ ra phải được dành riêng cho các thao tác ghi chuyên dụng. Nó đánh đổi độ trễ đọc cao hơn để có sự hội tụ nhất quán nhanh hơn."
            }
        }
    },
    {
        _id: "nosql-s-048",
        difficulty: "senior",
        tags: ["distributed systems", "event sourcing", "transaction log", "audit"],
        content: {
            en: {
                title: "Event Store as Audit Log",
                body: "In Event Sourcing, the Event Store serves as the definitive source of truth. Describe the two key benefits this architecture provides for **auditing and regulatory compliance** that are difficult to achieve with traditional mutation-based databases.",
                solution: "1. **Immutable History:** Since events are never deleted or modified, the Event Store provides a perfect, tamper-proof audit trail of every state change that ever occurred. 2. **Time Travel:** The ability to easily rebuild the application's state *as it was* at any arbitrary point in the past by simply replaying events up to that timestamp, which is invaluable for forensic analysis and compliance checks." 


            },
            jp: {
                title: "監査ログとしてのイベントストア",
                body: "イベントソーシングにおいて、イベントストアは真実の決定的な情報源として機能します。このアーキテクチャが、従来のミューテーションベースのデータベースでは達成が困難な、**監査と規制遵守** のために提供する 2 つの主要な利点を説明してください。",
                solution: "1. **不変の履歴：** イベントは削除または変更されることがないため、イベントストアは発生したすべての状態変化の完全で改ざん防止の監査証跡を提供します。2. **タイムトラベル：** 任意の過去の時点でのアプリケーションの状態 *をそのまま*、そのタイムスタンプまでのイベントを再生するだけで簡単に再構築できる機能。これは、フォレンジック分析とコンプライアンスチェックにとって非常に貴重です。" 


            },
            vi: {
                title: "Event Store như Log Kiểm toán",
                body: "Trong Event Sourcing, Event Store đóng vai trò là nguồn chân lý dứt khoát. Mô tả hai lợi ích chính mà kiến trúc này cung cấp cho **kiểm toán và tuân thủ quy định** mà khó đạt được với các cơ sở dữ liệu dựa trên đột biến (mutation-based) truyền thống.",
                solution: "1. **Lịch sử Bất biến (Immutable History):** Vì các sự kiện không bao giờ bị xóa hoặc sửa đổi, Event Store cung cấp một dấu vết kiểm toán hoàn hảo, chống giả mạo về mọi thay đổi trạng thái đã từng xảy ra. 2. **Du hành Thời gian (Time Travel):** Khả năng dễ dàng xây dựng lại trạng thái của ứng dụng *như nó đã từng* tại bất kỳ thời điểm tùy ý nào trong quá khứ bằng cách chỉ cần phát lại các sự kiện cho đến dấu thời gian đó, điều này vô giá cho phân tích pháp y và kiểm tra tuân thủ." 


            }
        }
    },
    {
        _id: "nosql-s-049",
        difficulty: "senior",
        tags: ["MongoDB", "aggregation", "performance", "pipeline optimization"],
        content: {
            en: {
                title: "Optimizing $lookup Performance",
                body: "Explain how to effectively optimize a `$lookup` stage in the MongoDB Aggregation Pipeline, focusing on the source and foreign collections. What is the key indexing strategy that transforms the lookup into an efficient indexed probe?",
                solution: "The foreign collection (the 'many' side being looked up) must have an **index on the `localField`** (the field used to match the documents). This index allows the `$lookup` to efficiently probe the foreign collection, transforming what would otherwise be a full scan on the foreign collection into a fast, indexed lookup for each document in the source collection."
            },
            jp: {
                title: "$lookup パフォーマンスの最適化",
                body: "ソースコレクションと外部コレクションに焦点を当てて、MongoDB 集約パイプラインで `$lookup` ステージを効果的に最適化する方法を説明してください。ルックアップを効率的なインデックス付きプローブに変換する主要なインデックス戦略は何ですか？",
                solution: "外部コレクション（ルックアップされる「多」側）は、ドキュメントを照合するために使用されるフィールドである **`localField` にインデックス** を持っている必要があります。このインデックスにより、`$lookup` は外部コレクションを効率的にプローブでき、そうでなければ外部コレクションでのフルスキャンとなるものを、ソースコレクション内の各ドキュメントの高速なインデックス付きルックアップに変換します。"
            },
            vi: {
                title: "Tối ưu hóa Hiệu suất $lookup",
                body: "Giải thích cách tối ưu hóa hiệu quả stage `$lookup` trong MongoDB Aggregation Pipeline, tập trung vào các collection nguồn và ngoại lai. Chiến lược index chính biến thao tác lookup thành một thao tác thăm dò được lập index hiệu quả là gì?",
                solution: "Collection ngoại lai (phía 'nhiều' đang được tra cứu) phải có **index trên `localField`** (trường được sử dụng để khớp các document). Index này cho phép `$lookup` thăm dò collection ngoại lai một cách hiệu quả, biến thao tác lẽ ra là quét toàn bộ collection ngoại lai thành một thao tác tra cứu nhanh, được lập index cho mỗi document trong collection nguồn."
            }
        }
    },
    {
        _id: "nosql-s-050",
        difficulty: "senior",
        tags: ["distributed systems", "consistency", "anti-pattern", "write"],
        content: {
            en: {
                title: "Monotonic Writes (Consistency Guarantee)",
                body: "In distributed NoSQL systems, what is the **Monotonic Writes** consistency guarantee, and why is it essential for processes that perform a sequence of related write operations?",
                solution: "Monotonic Writes guarantee that if a client performs a write operation $W_1$ and then a subsequent write operation $W_2$, the system guarantees that $W_2$ will happen **after** $W_1$. It is essential because without it, the writes could be committed to different replicas in a different order, leading to a state where an earlier write might overwrite a later, logical write, violating the application's sequential logic."
            },
            jp: {
                title: "単調書き込み（整合性の保証）",
                body: "分散 NoSQL システムにおいて、**単調書き込み（Monotonic Writes）** の整合性の保証とは何ですか？また、関連する書き込み操作のシーケンスを実行するプロセスにとって、これが不可欠なのはなぜですか？",
                solution: "単調書き込みは、クライアントが書き込み操作 $W_1$ を実行し、その後引き続いて書き込み操作 $W_2$ を実行した場合、システムが $W_2$ が $W_1$ の **後** に発生することを保証するものです。これが不可欠なのは、これがないと、書き込みが異なる順序で異なるレプリカにコミットされる可能性があり、以前の書き込みが後の論理的な書き込みを上書きする状態につながり、アプリケーションのシーケンシャルロジックに違反するためです。"
            },
            vi: {
                title: "Monotonic Writes (Đảm bảo Nhất quán)",
                body: "Trong các hệ thống NoSQL phân tán, đảm bảo nhất quán **Monotonic Writes (Ghi đơn điệu)** là gì, và tại sao nó lại cần thiết cho các quy trình thực hiện một chuỗi các thao tác ghi liên quan?",
                solution: "Monotonic Writes đảm bảo rằng nếu một client thực hiện thao tác ghi $W_1$ và sau đó là thao tác ghi $W_2$ tiếp theo, hệ thống đảm bảo rằng $W_2$ sẽ xảy ra **sau** $W_1$. Điều này rất cần thiết vì nếu không có nó, các thao tác ghi có thể được cam kết với các bản sao khác nhau theo một thứ tự khác, dẫn đến trạng thái mà một lần ghi trước đó có thể ghi đè lên một lần ghi logic, sau đó, vi phạm logic tuần tự của ứng dụng."
            }
        }
    }
];

// Để import vào project frontend
export default nosqlSeniorQuestions;