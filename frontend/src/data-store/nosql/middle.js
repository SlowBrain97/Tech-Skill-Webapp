const nosqlMiddleQuestions = [
    // --- MIDDLE (50 Questions) ---
    {
        _id: "nosql-m-001",
        difficulty: "middle",
        tags: ["MongoDB", "Aggregation Pipeline", "lookup", "join"],
        content: {
            en: {
                title: "Simulating Joins in MongoDB",
                body: "In the MongoDB Aggregation Pipeline, which stage is used to perform a 'left outer join' operation, linking documents from one collection to documents in another collection based on a field value?",
                solution: "The **$lookup** stage. This stage is primarily used for simulating joins across collections, enabling denormalized lookups without complex application-level logic."
            },
            jp: {
                title: "MongoDB での結合のシミュレーション",
                body: "MongoDB 集約パイプラインにおいて、あるコレクションのドキュメントを別のコレクションのドキュメントとフィールド値に基づいてリンクする「左外部結合」操作を実行するために使用されるステージは何ですか？",
                solution: " **$lookup** ステージ。このステージは主に、コレクション間の結合をシミュレートするために使用され、複雑なアプリケーションレベルのロジックなしで非正規化されたルックアップを可能にします。"
            },
            vi: {
                title: "Giả lập Joins trong MongoDB",
                body: "Trong MongoDB Aggregation Pipeline, stage nào được sử dụng để thực hiện thao tác 'left outer join', liên kết các document từ một collection với các document trong một collection khác dựa trên giá trị trường?",
                solution: "Stage **$lookup**. Stage này chủ yếu được sử dụng để giả lập joins giữa các collections, cho phép tra cứu phi chuẩn hóa mà không cần logic phức tạp ở cấp độ ứng dụng."
            }
        }
    },
    {
        _id: "nosql-m-002",
        difficulty: "middle",
        tags: ["CAP", "consistency", "Quorum"],
        content: {
            en: {
                title: "Read and Write Quorums (W, R)",
                body: "In a distributed NoSQL system that prioritizes availability (like Cassandra), explain the role of the **Write Quorum (W)** and the **Read Quorum (R)** in achieving configurable consistency.",
                solution: "W is the minimum number of replicas that must acknowledge a write for it to be considered successful. R is the minimum number of replicas that must respond to a read request. **If W + R > N (total replicas), strong consistency is guaranteed.**"
            },
            jp: {
                title: "読み取りおよび書き込みクォーラム (W, R)",
                body: "可用性を優先する分散 NoSQL システム（Cassandra など）において、構成可能な整合性を達成する上での **書き込みクォーラム (W)** および **読み取りクォーラム (R)** の役割を説明してください。",
                solution: "W は、書き込みが成功と見なされるために応答する必要があるレプリカの最小数です。R は、読み取りリクエストに応答する必要があるレプリカの最小数です。 **W + R > N（合計レプリカ数）の場合、強力な整合性が保証されます。**"
            }
            ,
            vi: {
                title: "Read và Write Quorums (W, R)",
                body: "Trong một hệ thống NoSQL phân tán ưu tiên tính sẵn sàng (như Cassandra), giải thích vai trò của **Write Quorum (W)** và **Read Quorum (R)** trong việc đạt được tính nhất quán có thể cấu hình.",
                solution: "W là số lượng bản sao tối thiểu phải xác nhận một lần ghi để nó được coi là thành công. R là số lượng bản sao tối thiểu phải phản hồi yêu cầu đọc. **Nếu W + R > N (tổng số bản sao), tính nhất quán mạnh sẽ được đảm bảo.**"
            }
        }
    },
    {
        _id: "nosql-m-003",
        difficulty: "middle",
        tags: ["Graph", "modeling", "supernode"],
        content: {
            en: {
                title: "Supernode Problem (Graph)",
                body: "Define the **Supernode Problem** in Graph databases and describe one common technique used to mitigate the performance impact when traversing relationships involving a supernode (a node with millions of edges).",
                solution: "A Supernode is a node that is connected to an unusually large number of other nodes (e.g., a famous celebrity). Mitigation techniques include: **Sharding the edge list by type**, or **Adding properties to the relationship** to allow filtering before traversal, or **Partitioning the supernode** into smaller virtual nodes."
            },
            jp: {
                title: "スーパーノード問題（グラフ）",
                body: "グラフデータベースにおける **スーパーノード問題** を定義し、スーパーノード（数百万のエッジを持つノード）を含む関係を走査する際のパフォーマンスへの影響を軽減するために使用される一般的な手法を 1 つ説明してください。",
                solution: "スーパーノードは、異常に多数の他のノードに接続されているノードです（例：有名なセレブ）。軽減策には、**エッジリストをタイプごとにシャーディングする**、または走査前にフィルタリングを可能にするために **関係にプロパティを追加する**、または **スーパーノードをより小さな仮想ノードに分割する** ことなどが含まれます。"
            },
            vi: {
                title: "Vấn đề Supernode (Graph)",
                body: "Định nghĩa **Vấn đề Supernode** trong cơ sở dữ liệu Graph và mô tả một kỹ thuật phổ biến được sử dụng để giảm thiểu tác động hiệu suất khi duyệt các mối quan hệ liên quan đến một supernode (một node có hàng triệu cạnh).",
                solution: "Supernode là một node được kết nối với số lượng node khác lớn bất thường (ví dụ: một người nổi tiếng). Các kỹ thuật giảm thiểu bao gồm: **Sharding danh sách cạnh theo loại**, hoặc **Thêm các thuộc tính vào mối quan hệ** để cho phép lọc trước khi duyệt, hoặc **Phân vùng supernode** thành các node ảo nhỏ hơn."
            }
        }
    },
    {
        _id: "nosql-m-004",
        difficulty: "middle",
        tags: ["Key-Value", "Redis", "data structure", "HyperLogLog"],
        content: {
            en: {
                title: "Cardinality Counting (HyperLogLog)",
                body: "Redis supports the **HyperLogLog** data structure. What complex statistical problem is this structure designed to solve, and what is its main trade-off?",
                solution: "It's designed to estimate the **number of unique items (cardinality)** in a large dataset (e.g., unique visitors in a day) using a small, fixed amount of memory. The trade-off is that the count is an **approximation** (it's not 100% accurate, typically with an error of about 0.81%)."
            },
            jp: {
                title: "カーディナリティのカウント (HyperLogLog)",
                body: "Redis は **HyperLogLog** データ構造をサポートしています。この構造は、どのような複雑な統計問題を解決するために設計されていますか？また、その主なトレードオフは何ですか？",
                solution: "これは、少量の固定メモリを使用して大規模なデータセット内の一意のアイテムの数（カーディナリティ）を推定するように設計されています（例：1 日のユニーク訪問者）。トレードオフは、カウントが **近似値** であることです（通常、誤差は約 0.81% で、100% 正確ではありません）。"
            },
            vi: {
                title: "Đếm Cardinality (HyperLogLog)",
                body: "Redis hỗ trợ cấu trúc dữ liệu **HyperLogLog**. Cấu trúc này được thiết kế để giải quyết vấn đề thống kê phức tạp nào, và sự đánh đổi chính của nó là gì?",
                solution: "Nó được thiết kế để ước tính **số lượng các mục duy nhất (cardinality)** trong một tập dữ liệu lớn (ví dụ: khách truy cập duy nhất trong một ngày) bằng cách sử dụng một lượng bộ nhớ nhỏ, cố định. Sự đánh đổi là số lượng đếm là một **giá trị xấp xỉ** (nó không chính xác 100%, thường có sai số khoảng 0.81%)."
            }
        }
    },
    {
        _id: "nosql-m-005",
        difficulty: "middle",
        tags: ["Column-Family", "data model", "denormalization"],
        content: {
            en: {
                title: "Query-Driven Modeling (Cassandra)",
                body: "In a Column-Family store like Cassandra, data modeling is **query-driven**. Explain what this means and how it contrasts with RDBMS modeling.",
                solution: "It means the data model is designed around the **application's read patterns (queries)**, creating separate tables (or 'Materialized Views') to serve each specific query, often resulting in massive data denormalization. RDBMS modeling is **data-driven**, focusing on normalizing data to reduce redundancy regardless of the query patterns."
            },
            jp: {
                title: "クエリ駆動型モデリング（Cassandra）",
                body: "Cassandra のようなカラムファミリーストアでは、データモデリングは **クエリ駆動型** です。これが何を意味し、RDBMS モデリングとどのように対照的であるかを説明してください。",
                solution: "これは、データモデルが **アプリケーションの読み取りパターン（クエリ）** を中心に設計されており、特定のクエリごとに個別のテーブル（または「マテリアライズドビュー」）を作成し、しばしば大規模なデータの非正規化をもたらすことを意味します。RDBMS モデリングは **データ駆動型** であり、クエリパターンに関係なくデータの正規化と冗長性の削減に焦点を当てています。"
            },
            vi: {
                title: "Mô hình hóa theo hướng Truy vấn (Cassandra)",
                body: "Trong một Column-Family store như Cassandra, mô hình hóa dữ liệu là **query-driven**. Giải thích điều này có nghĩa là gì và nó khác với mô hình hóa RDBMS như thế nào.",
                solution: "Nó có nghĩa là mô hình dữ liệu được thiết kế xoay quanh **các mẫu đọc (truy vấn) của ứng dụng**, tạo các bảng riêng biệt (hoặc 'Materialized Views') để phục vụ từng truy vấn cụ thể, thường dẫn đến việc phi chuẩn hóa dữ liệu lớn. Mô hình hóa RDBMS là **data-driven**, tập trung vào việc chuẩn hóa dữ liệu để giảm sự dư thừa bất kể các mẫu truy vấn."
            }
        }
    },
    {
        _id: "nosql-m-006",
        difficulty: "middle",
        tags: ["MongoDB", "indexing", "performance", "explain"],
        content: {
            en: {
                title: "Analyzing Query Plans (MongoDB)",
                body: "When optimizing a slow query in MongoDB, what command should a developer use to inspect the execution plan, index usage, and performance statistics of the query?",
                solution: "The **.explain('executionStats')** method (or just `.explain()`). This output details whether an index was used, how many documents were examined, and the execution time."
            },
            jp: {
                title: "クエリプランの分析（MongoDB）",
                body: "MongoDB で遅いクエリを最適化するとき、開発者はクエリの実行プラン、インデックスの使用状況、およびパフォーマンス統計を検査するためにどのコマンドを使用すべきですか？",
                solution: " **.explain('executionStats')** メソッド（または単に `.explain()`）。この出力は、インデックスが使用されたかどうか、検査されたドキュメントの数、および実行時間を詳細に示します。"
            },
            vi: {
                title: "Phân tích Kế hoạch Truy vấn (MongoDB)",
                body: "Khi tối ưu hóa một truy vấn chậm trong MongoDB, nhà phát triển nên sử dụng lệnh nào để kiểm tra kế hoạch thực thi, việc sử dụng index và thống kê hiệu suất của truy vấn?",
                solution: "Phương thức **.explain('executionStats')** (hoặc chỉ `.explain()`). Đầu ra này chi tiết xem index có được sử dụng hay không, có bao nhiêu document đã được kiểm tra và thời gian thực thi."
            }
        }
    },
    {
        _id: "nosql-m-007",
        difficulty: "middle",
        tags: ["sharding", "scalability", "rebalancing"],
        content: {
            en: {
                title: "Data Skew in Sharding",
                body: "What is **Data Skew** in a sharded database, and how does it negatively impact cluster performance and scalability?",
                solution: "Data Skew occurs when data is unevenly distributed across the shards (e.g., a poor shard key choice causes one shard to hold 80% of the data). It negatively impacts performance because the 'hot shard' becomes a bottleneck, limiting the cluster's overall capacity to the capacity of that single shard."
            },
            jp: {
                title: "シャーディングにおけるデータスキュー",
                body: "シャーディングされたデータベースにおける **データスキュー** とは何ですか？また、それがクラスターのパフォーマンスとスケーラビリティにどのように悪影響を及ぼしますか？",
                solution: "データスキューは、データがシャード間で不均一に分散されているときに発生します（例：不適切なシャードキーの選択により、1 つのシャードがデータの 80% を保持する）。「ホットシャード」がボトルネックになり、クラスター全体の容量がその単一シャードの容量に制限されるため、パフォーマンスに悪影響を及ぼします。"
            },
            vi: {
                title: "Data Skew trong Sharding",
                body: "**Data Skew** trong cơ sở dữ liệu được sharding là gì, và nó ảnh hưởng tiêu cực đến hiệu suất và khả năng mở rộng của cluster như thế nào?",
                solution: "Data Skew xảy ra khi dữ liệu được phân phối không đồng đều trên các shard (ví dụ: lựa chọn shard key kém khiến một shard giữ 80% dữ liệu). Nó ảnh hưởng tiêu cực đến hiệu suất vì 'hot shard' trở thành nút thắt cổ chai, giới hạn tổng khả năng của cluster theo khả năng của shard đơn lẻ đó."
            }
        }
    },
    {
        _id: "nosql-m-008",
        difficulty: "middle",
        tags: ["Graph", "Cypher", "paths", "shortest path"],
        content: {
            en: {
                title: "Shortest Path Query (Cypher)",
                body: "In Neo4j's Cypher, what function is used to efficiently calculate the shortest path between two nodes, and what is the typical use case for this?",
                solution: "The **shortestPath()** function (or allShortestPaths()). The typical use case is finding the most efficient route in a mapping/logistics application or calculating the 'degrees of separation' in a social network."
            },
            jp: {
                title: "最短パス クエリ (Cypher)",
                body: "Neo4j の Cypher において、2 つのノード間の最短パスを効率的に計算するために使用される関数は何ですか？また、これの典型的な使用例は何ですか？",
                solution: " **shortestPath()** 関数（または allShortestPaths()）。典型的な使用例は、マッピング/ロジスティクスアプリケーションで最も効率的なルートを見つけること、またはソーシャルネットワークで「分離の度合い」を計算することです。"
            },
            vi: {
                title: "Truy vấn Đường đi Ngắn nhất (Cypher)",
                body: "Trong Cypher của Neo4j, hàm nào được sử dụng để tính toán hiệu quả đường đi ngắn nhất giữa hai node, và trường hợp sử dụng điển hình cho việc này là gì?",
                solution: "Hàm **shortestPath()** (hoặc allShortestPaths()). Trường hợp sử dụng điển hình là tìm tuyến đường hiệu quả nhất trong ứng dụng bản đồ/logistics hoặc tính toán 'mức độ phân cách' trong mạng xã hội."
            }
        }
    },
    {
        _id: "nosql-m-009",
        difficulty: "middle",
        tags: ["Key-Value", "Redis", "data structure", "Sorted Set"],
        content: {
            en: {
                title: "Lexicographical Queries (Redis)",
                body: "Besides numerical scores, Redis **Sorted Sets** can be queried based on lexicographical order (alphabetical range). What common use case does this enable, and which special commands are used for this type of querying?",
                solution: "It enables **autocomplete or suggestion engines**. Commands used are **ZLEXCOUNT, ZRANGEBYLEX, and ZREVRANGEBYLEX**."
            },
            jp: {
                title: "辞書式クエリ（Redis）",
                body: "数値スコアに加えて、Redis **Sorted Sets** は辞書式順序（アルファベット順の範囲）に基づいてクエリを実行できます。これにより、どのような一般的な使用例が可能になり、このタイプのクエリに使用される特別なコマンドは何ですか？",
                solution: "これは、**オートコンプリートまたは提案エンジン** を可能にします。使用されるコマンドは **ZLEXCOUNT、ZRANGEBYLEX、および ZREVRANGEBYLEX** です。"
            },
            vi: {
                title: "Truy vấn Theo từ điển (Redis)",
                body: "Ngoài điểm số bằng số, Redis **Sorted Sets** có thể được truy vấn dựa trên thứ tự từ điển (phạm vi bảng chữ cái). Điều này cho phép trường hợp sử dụng phổ biến nào, và các lệnh đặc biệt nào được sử dụng cho loại truy vấn này?",
                solution: "Nó cho phép **công cụ tự động hoàn thành hoặc đề xuất**. Các lệnh được sử dụng là **ZLEXCOUNT, ZRANGEBYLEX và ZREVRANGEBYLEX**."
            }
        }
    },
    {
        _id: "nosql-m-010",
        difficulty: "middle",
        tags: ["Polyglot Persistence", "architecture"],
        content: {
            en: {
                title: "Polyglot Persistence Rationale",
                body: "Define **Polyglot Persistence** in software architecture and explain the primary benefit it offers over using a single, monolithic database system.",
                solution: "It is the practice of using **multiple different database technologies** (e.g., RDBMS for transactions, MongoDB for catalogs, Neo4j for social graph, Redis for caching) to handle different data requirements. The benefit is selecting the **best-fit database for each specific data task**, optimizing performance, scalability, and complexity for that task." 


            },
            jp: {
                title: "Polyglot Persistence の根拠",
                body: "ソフトウェアアーキテクチャにおける **Polyglot Persistence** を定義し、単一のモノリシックデータベースシステムを使用することと比較して提供する主な利点を説明してください。",
                solution: "これは、異なるデータ要件を処理するために **複数の異なるデータベース技術**（例：トランザクションには RDBMS、カタログには MongoDB、ソーシャルグラフには Neo4j、キャッシングには Redis）を使用する実践です。利点は、**特定のデータタスクごとに最適なデータベース** を選択し、そのタスクのパフォーマンス、スケーラビリティ、および複雑さを最適化することです。"
            },
            vi: {
                title: "Cơ sở của Polyglot Persistence",
                body: "Định nghĩa **Polyglot Persistence** trong kiến trúc phần mềm và giải thích lợi ích chính mà nó mang lại so với việc sử dụng một hệ thống cơ sở dữ liệu nguyên khối duy nhất.",
                solution: "Đó là thực tiễn sử dụng **nhiều công nghệ cơ sở dữ liệu khác nhau** (ví dụ: RDBMS cho giao dịch, MongoDB cho danh mục, Neo4j cho social graph, Redis cho caching) để xử lý các yêu cầu dữ liệu khác nhau. Lợi ích là chọn **cơ sở dữ liệu phù hợp nhất cho từng tác vụ dữ liệu cụ thể**, tối ưu hóa hiệu suất, khả năng mở rộng và độ phức tạp cho tác vụ đó." 


            }
        }
    },
    {
        _id: "nosql-m-011",
        difficulty: "middle",
        tags: ["MongoDB", "modeling", "embedded data"],
        content: {
            en: {
                title: "Embedding vs Referencing Trade-off",
                body: "When modeling a one-to-many relationship in MongoDB, why is embedding the 'many' side inside the 'one' side (e.g., comments inside a post) often discouraged if the 'many' side is **large and unbounded**?",
                solution: "It's discouraged because documents have a size limit (currently 16MB). An unbounded embedded array will cause the document to hit the size limit, require moving the document on disk when it grows, and lead to poor performance when reading/updating fields unrelated to the array."
            },
            jp: {
                title: "埋め込み 対 参照 のトレードオフ",
                body: "MongoDB で一対多の関係をモデリングするとき、'多' の側が **大きく、無制限** である場合、'多' の側を '一' の側に埋め込むこと（例：投稿内のコメント）がしばしば推奨されないのはなぜですか？",
                solution: "ドキュメントにはサイズ制限があるため（現在 16MB）、推奨されません。無制限の埋め込み配列は、ドキュメントがサイズ制限に達し、成長時にディスク上でドキュメントを移動する必要があり、配列に関係のないフィールドの読み取り/更新時にパフォーマンスが低下します。"
            },
            vi: {
                title: "Đánh đổi giữa Embedding và Referencing",
                body: "Khi mô hình hóa mối quan hệ một-nhiều trong MongoDB, tại sao việc nhúng phía 'nhiều' vào bên trong phía 'một' (ví dụ: comments bên trong một bài đăng) thường không được khuyến khích nếu phía 'nhiều' là **lớn và không giới hạn**?",
                solution: "Nó không được khuyến khích vì các document có giới hạn kích thước (hiện tại là 16MB). Một mảng nhúng không giới hạn sẽ khiến document đạt đến giới hạn kích thước, yêu cầu di chuyển document trên đĩa khi nó phát triển và dẫn đến hiệu suất kém khi đọc/cập nhật các trường không liên quan đến mảng."
            }
        }
    },
    {
        _id: "nosql-m-012",
        difficulty: "middle",
        tags: ["Column-Family", "consistency", "tombstone", "latency"],
        content: {
            en: {
                title: "Tombstones and Read Latency (Cassandra)",
                body: "In Cassandra, when data is deleted, a **tombstone** marker is written. Explain how an excessive number of tombstones can increase **read latency** and what process eventually removes them.",
                solution: "Excessive tombstones increase read latency because the database must read and then discard all tombstones it encounters across multiple SSTables before it can retrieve the valid data. The process that eventually removes them is **compaction**."
            },
            jp: {
                title: "墓石と読み取りレイテンシ（Cassandra）",
                body: "Cassandra では、データが削除されると、**墓石（tombstone）** マーカーが書き込まれます。過剰な数の墓石が **読み取りレイテンシ** をどのように増加させるか、そしてどのプロセスが最終的にそれらを削除するかを説明してください。",
                solution: "過剰な墓石は、データベースが有効なデータを取得する前に、複数の SSTable で遭遇するすべての墓石を読み取ってから破棄する必要があるため、読み取りレイテンシを増加させます。最終的にそれらを削除するプロセスは **コンパクション** です。"
            }
            ,
            vi: {
                title: "Tombstones và Read Latency (Cassandra)",
                body: "Trong Cassandra, khi dữ liệu bị xóa, một **tombstone** (bia mộ) được ghi. Giải thích làm thế nào số lượng tombstone quá mức có thể làm tăng **độ trễ đọc (read latency)** và quá trình nào cuối cùng sẽ xóa chúng.",
                solution: "Tombstone quá mức làm tăng độ trễ đọc vì cơ sở dữ liệu phải đọc và sau đó loại bỏ tất cả các tombstone mà nó gặp phải trên nhiều SSTable trước khi có thể truy xuất dữ liệu hợp lệ. Quá trình cuối cùng loại bỏ chúng là **compaction**."
            }
        }
    },
    {
        _id: "nosql-m-013",
        difficulty: "middle",
        tags: ["Event Sourcing", "CQRS", "architecture"],
        content: {
            en: {
                title: "Event Sourcing vs Traditional Persistence",
                body: "In the context of **Event Sourcing**, how does data persistence fundamentally differ from traditional state-based persistence (e.g., RDBMS or standard Document stores)?",
                solution: "Traditional persistence stores the **current state** of an entity. Event Sourcing stores the **sequence of events** that led to the current state. The current state must be derived by replaying all historical events." 



            },
            jp: {
                title: "イベントソーシング 対 従来の永続性",
                body: " **イベントソーシング** のコンテキストにおいて、データの永続性は従来の状態ベースの永続性（例：RDBMS または標準のドキュメントストア）とどのように根本的に異なりますか？",
                solution: "従来の永続性は、エンティティの **現在の状態** を保存します。イベントソーシングは、現在の状態につながった **イベントのシーケンス** を保存します。現在の状態は、すべての履歴イベントを再生することによって導出される必要があります。" 


            }
            ,
            vi: {
                title: "Event Sourcing so với Persistence Truyền thống",
                body: "Trong bối cảnh của **Event Sourcing**, việc lưu trữ dữ liệu cơ bản khác với việc lưu trữ dựa trên trạng thái truyền thống (ví dụ: RDBMS hoặc Document store tiêu chuẩn) như thế nào?",
                solution: "Lưu trữ truyền thống lưu trữ **trạng thái hiện tại** của một thực thể. Event Sourcing lưu trữ **chuỗi các sự kiện** dẫn đến trạng thái hiện tại. Trạng thái hiện tại phải được suy ra bằng cách phát lại tất cả các sự kiện lịch sử." 



            }
        }
    },
    {
        _id: "nosql-m-014",
        difficulty: "middle",
        tags: ["MongoDB", "transactions", "isolation"],
        content: {
            en: {
                title: "Read Isolation Levels (MongoDB)",
                body: "In MongoDB multi-document transactions, what is the default **read isolation level** provided, and what key relational property does this guarantee?",
                solution: "The default read isolation level is **'snapshot'** isolation. This guarantees that all reads within the transaction will see a consistent view of the data from the start of the transaction, which is critical for the **Isolation** property of ACID."
            },
            jp: {
                title: "読み取り分離レベル（MongoDB）",
                body: "MongoDB の複数ドキュメントトランザクションにおいて、提供されるデフォルトの **読み取り分離レベル** は何ですか？また、これはどの重要なリレーショナルプロパティを保証しますか？",
                solution: "デフォルトの読み取り分離レベルは **'snapshot'** 隔離です。これは、トランザクション内のすべての読み取りが、トランザクションの開始時からのデータの一貫したビューを確認することを保証し、ACID の **分離性 (Isolation)** プロパティにとって不可欠です。"
            },
            vi: {
                title: "Read Isolation Levels (MongoDB)",
                body: "Trong các giao dịch đa document của MongoDB, **mức độ cách ly đọc (read isolation level)** mặc định được cung cấp là gì, và điều này đảm bảo thuộc tính quan hệ quan trọng nào?",
                solution: "Mức độ cách ly đọc mặc định là cách ly **'snapshot'**. Điều này đảm bảo rằng tất cả các lần đọc trong giao dịch sẽ thấy một chế độ xem dữ liệu nhất quán kể từ khi bắt đầu giao dịch, điều này rất quan trọng đối với thuộc tính **Isolation** (Tính cô lập) của ACID."
            }
        }
    },
    {
        _id: "nosql-m-015",
        difficulty: "middle",
        tags: ["Key-Value", "Redis", "data structure", "Bitmaps"],
        content: {
            en: {
                title: "Bitmaps for Presence Tracking (Redis)",
                body: "A Redis **Bitmap** is often used for tracking user presence (e.g., 'Has this user logged in today?'). Explain how a Bitmap solves this problem efficiently for millions of users.",
                solution: "A Bitmap uses a string where each bit represents a user (identified by their ID as the bit offset). To mark a user as present, you set the bit at their ID's offset to 1. Since only 1 bit is needed per user, it is extremely memory efficient, and you can quickly count the total active users with the **BITCOUNT** command."
            },
            jp: {
                title: "プレゼンス追跡のためのビットマップ（Redis）",
                body: "Redis **ビットマップ** は、ユーザーのプレゼンス追跡（例：「このユーザーは今日ログインしましたか？」）によく使用されます。ビットマップが数百万のユーザーに対してこの問題を効率的に解決する方法を説明してください。",
                solution: "ビットマップは、各ビットがユーザーを表す文字列を使用します（ID をビットオフセットとして識別されます）。ユーザーをプレゼンスとしてマークするには、ID のオフセットにあるビットを 1 に設定します。ユーザーあたり 1 ビットしか必要ないため、メモリ効率が非常に高く、**BITCOUNT** コマンドでアクティブなユーザーの総数をすばやくカウントできます。"
            },
            vi: {
                title: "Bitmaps cho Theo dõi Sự hiện diện (Redis)",
                body: "Một Redis **Bitmap** thường được sử dụng để theo dõi sự hiện diện của người dùng (ví dụ: 'Người dùng này đã đăng nhập hôm nay chưa?'). Giải thích làm thế nào Bitmap giải quyết vấn đề này một cách hiệu quả cho hàng triệu người dùng.",
                solution: "Một Bitmap sử dụng một chuỗi trong đó mỗi bit đại diện cho một người dùng (được xác định bằng ID của họ làm bit offset). Để đánh dấu một người dùng là có mặt, bạn đặt bit tại offset ID của họ thành 1. Vì chỉ cần 1 bit cho mỗi người dùng, nó cực kỳ hiệu quả về bộ nhớ và bạn có thể nhanh chóng đếm tổng số người dùng hoạt động bằng lệnh **BITCOUNT**."
            }
        }
    },
    {
        _id: "nosql-m-016",
        difficulty: "middle",
        tags: ["sharding", "scalability", "distributed transactions"],
        content: {
            en: {
                title: "Saga Pattern (Distributed Transactions)",
                body: "Since distributed transactions (XA) are often avoided in large-scale NoSQL systems, what architectural pattern is commonly used to manage consistency for an operation that spans multiple different NoSQL services or databases?",
                solution: "The **Saga Pattern**. A Saga is a sequence of local transactions where each local transaction updates the database and publishes an event to trigger the next step. If a step fails, the Saga executes compensating transactions to undo the preceding changes."
            },
            jp: {
                title: "Saga パターン（分散トランザクション）",
                body: "大規模な NoSQL システムでは分散トランザクション（XA）はしばしば回避されるため、複数の異なる NoSQL サービスまたはデータベースにまたがる操作の整合性を管理するために一般的に使用されるアーキテクチャパターンは何ですか？",
                solution: " **Saga パターン**。Saga は、各ローカルトランザクションがデータベースを更新し、次のステップをトリガーするためのイベントを発行するローカルトランザクションのシーケンスです。ステップが失敗した場合、Saga は補償トランザクションを実行して、先行する変更を元に戻します。"
            },
            vi: {
                title: "Saga Pattern (Giao dịch Phân tán)",
                body: "Vì các giao dịch phân tán (XA) thường bị tránh trong các hệ thống NoSQL quy mô lớn, mô hình kiến trúc nào thường được sử dụng để quản lý tính nhất quán cho một thao tác trải rộng trên nhiều dịch vụ hoặc cơ sở dữ liệu NoSQL khác nhau?",
                solution: " **Saga Pattern**. Saga là một chuỗi các giao dịch cục bộ, trong đó mỗi giao dịch cục bộ cập nhật cơ sở dữ liệu và xuất bản một sự kiện để kích hoạt bước tiếp theo. Nếu một bước thất bại, Saga sẽ thực hiện các giao dịch bù đắp (compensating transactions) để hoàn tác các thay đổi trước đó."
            }
        }
    },
    {
        _id: "nosql-m-017",
        difficulty: "middle",
        tags: ["Column-Family", "performance", "read repair"],
        content: {
            en: {
                title: "Read Repair (Cassandra)",
                body: "What is the purpose of **Read Repair** in Cassandra, and why is it essential for maintaining eventual consistency in the cluster?",
                solution: "Read Repair is a mechanism where, during a read request, the node coordinating the read checks the consistency of the data across all replicas. If a replica is stale, the coordinator writes the newer version back to the stale replica. This is essential because it corrects inconsistencies *during* a read operation, helping the system achieve eventual consistency faster."
            },
            jp: {
                title: "読み取り修復（Cassandra）",
                body: "Cassandra における **読み取り修復（Read Repair）** の目的は何ですか？また、クラスターの最終的な整合性を維持するために不可欠なのはなぜですか？",
                solution: "読み取り修復は、読み取りリクエスト中に、読み取りを調整しているノードがすべてのレプリカ間でデータの一貫性をチェックするメカニズムです。レプリカが古くなっている場合、コーディネーターはより新しいバージョンを古いレプリカに書き戻します。これは、読み取り操作 *中* に不整合を修正し、システムが最終的な整合性をより速く達成するのを助けるため、不可欠です。"
            },
            vi: {
                title: "Read Repair (Cassandra)",
                body: "Mục đích của **Read Repair** trong Cassandra là gì, và tại sao nó lại cần thiết để duy trì tính nhất quán cuối cùng trong cluster?",
                solution: "Read Repair là một cơ chế trong đó, trong quá trình yêu cầu đọc, node điều phối việc đọc kiểm tra tính nhất quán của dữ liệu trên tất cả các bản sao. Nếu một bản sao bị lỗi thời, bộ điều phối sẽ ghi lại phiên bản mới hơn cho bản sao bị lỗi thời đó. Điều này rất cần thiết vì nó khắc phục sự không nhất quán *trong quá trình* thao tác đọc, giúp hệ thống đạt được tính nhất quán cuối cùng nhanh hơn."
            }
        }
    },
    {
        _id: "nosql-m-018",
        difficulty: "middle",
        tags: ["MongoDB", "indexing", "geospatial", "query"],
        content: {
            en: {
                title: "$near vs $geoWithin",
                body: "In MongoDB geospatial queries, explain the difference in outcome and typical use case for the **$near** operator versus the **$geoWithin** operator.",
                solution: "**$near** finds documents and **sorts** them by distance from a point (e.g., 'nearest coffee shops'). **$geoWithin** finds documents that are entirely contained within a specified shape (e.g., 'all users inside this city boundary') and does not automatically sort by distance."
            },
            jp: {
                title: "$near 対 $geoWithin",
                body: "MongoDB の地理空間クエリにおいて、 **$near** オペレーターと **$geoWithin** オペレーターの出力と典型的な使用例の違いを説明してください。",
                solution: " **$near** はドキュメントを見つけ、ポイントからの距離で **ソート** します（例：「最寄りのコーヒーショップ」）。 **$geoWithin** は、指定された形状内に完全に含まれるドキュメントを見つけます（例：「この都市の境界内のすべてのユーザー」）。"
            },
            vi: {
                title: "$near so với $geoWithin",
                body: "Trong các truy vấn không gian địa lý của MongoDB, giải thích sự khác biệt về kết quả và trường hợp sử dụng điển hình của toán tử **$near** so với toán tử **$geoWithin**.",
                solution: " **$near** tìm các document và **sắp xếp** chúng theo khoảng cách từ một điểm (ví dụ: 'các quán cà phê gần nhất'). **$geoWithin** tìm các document nằm hoàn toàn bên trong một hình dạng được chỉ định (ví dụ: 'tất cả người dùng bên trong ranh giới thành phố này') và không tự động sắp xếp theo khoảng cách."
            }
        }
    },
    {
        _id: "nosql-m-019",
        difficulty: "middle",
        tags: ["Graph", "Cypher", "paths", "APOC"],
        content: {
            en: {
                title: "Using APOC (Neo4j)",
                body: "The Cypher query language is often extended with the **APOC** library. What does APOC stand for, and what general category of functionality does it add to Neo4j?",
                solution: "APOC stands for **Awesome Procedures on Cypher**. It adds hundreds of utility procedures and functions for data integration, graph algorithms (e.g., centrality), data import/export, and schema introspection that are not native to standard Cypher."
            },
            jp: {
                title: "APOC の使用 (Neo4j)",
                body: "Cypher クエリ言語は、しばしば **APOC** ライブラリで拡張されます。APOC は何を表していますか？また、Neo4j にどのような一般的なカテゴリの機能を追加しますか？",
                solution: "APOC は **Awesome Procedures on Cypher** の略です。データ統合、グラフアルゴリズム（例：中心性）、データインポート/エクスポート、および標準の Cypher にネイティブではないスキーマイントロスペクションのための何百ものユーティリティプロシージャと関数を追加します。"
            },
            vi: {
                title: "Sử dụng APOC (Neo4j)",
                body: "Ngôn ngữ truy vấn Cypher thường được mở rộng bằng thư viện **APOC**. APOC là viết tắt của từ gì, và nó thêm loại chức năng chung nào vào Neo4j?",
                solution: "APOC là viết tắt của **Awesome Procedures on Cypher**. Nó bổ sung hàng trăm thủ tục và hàm tiện ích cho việc tích hợp dữ liệu, thuật toán graph (ví dụ: centrality), nhập/xuất dữ liệu và nội quan schema (schema introspection) mà không có sẵn trong Cypher tiêu chuẩn."
            }
        }
    },
    {
        _id: "nosql-m-020",
        difficulty: "middle",
        tags: ["Key-Value", "Redis", "persistence", "AOF"],
        content: {
            en: {
                title: "AOF Rewriting (Redis)",
                body: "The Redis **Append Only File (AOF)** log can grow very large. What is the process called that reduces the size of the AOF by creating a new, optimized version of the file, and how does this process generally work?",
                solution: "The process is called **AOF Rewriting (or Compaction)**. It works by creating a minimal set of commands needed to rebuild the *current* dataset, discarding redundant/outdated commands without blocking the main Redis server process."
            },
            jp: {
                title: "AOF の書き換え (Redis)",
                body: "Redis **Append Only File (AOF)** ログは非常に大きくなる可能性があります。ファイルの新しい最適化されたバージョンを作成することにより、AOF のサイズを削減するプロセスは何と呼ばれますか？また、このプロセスは一般的にどのように機能しますか？",
                solution: "このプロセスは **AOF 書き換え（またはコンパクション）** と呼ばれます。これは、*現在の* データセットを再構築するために必要な最小限のコマンドセットを作成し、メインの Redis サーバープロセスをブロックすることなく冗長な/古くなったコマンドを破棄することによって機能します。"
            },
            vi: {
                title: "AOF Rewriting (Redis)",
                body: "Log **Append Only File (AOF)** của Redis có thể trở nên rất lớn. Quá trình nào được gọi là giảm kích thước của AOF bằng cách tạo ra một phiên bản mới, được tối ưu hóa của file, và quá trình này thường hoạt động như thế nào?",
                solution: "Quá trình này được gọi là **AOF Rewriting (hoặc Compaction)**. Nó hoạt động bằng cách tạo ra một tập hợp tối thiểu các lệnh cần thiết để xây dựng lại *tập dữ liệu hiện tại*, loại bỏ các lệnh dư thừa/lỗi thời mà không chặn quá trình máy chủ Redis chính."
            }
        }
    },
    {
        _id: "nosql-m-021",
        difficulty: "middle",
        tags: ["MongoDB", "indexing", "partial index"],
        content: {
            en: {
                title: "Partial Index (MongoDB)",
                body: "What is a **Partial Index** in MongoDB, and what is the key benefit it provides over a standard index?",
                solution: "A Partial Index indexes only the documents that satisfy a specified **filter expression**. The key benefit is a **reduced index size** and **reduced index maintenance overhead**, leading to better performance and lower storage costs, especially when the index field is only present in a small subset of documents."
            },
            jp: {
                title: "部分インデックス（MongoDB）",
                body: "MongoDB における **部分インデックス（Partial Index）** とは何ですか？また、標準インデックスと比較して提供する主な利点は何ですか？",
                solution: "部分インデックスは、指定された **フィルター式** を満たすドキュメントのみをインデックス化します。主な利点は、**インデックスサイズの削減** と **インデックスメンテナンスオーバーヘッドの削減** であり、特にインデックスフィールドがドキュメントの小さなサブセットにのみ存在する場合に、パフォーマンスの向上とストレージコストの削減につながります。"
            },
            vi: {
                title: "Partial Index (MongoDB)",
                body: "**Partial Index** trong MongoDB là gì, và lợi ích chính mà nó mang lại so với một index tiêu chuẩn là gì?",
                solution: "Partial Index chỉ lập index cho các document thỏa mãn một **biểu thức lọc** được chỉ định. Lợi ích chính là **giảm kích thước index** và **giảm chi phí bảo trì index**, dẫn đến hiệu suất tốt hơn và chi phí lưu trữ thấp hơn, đặc biệt khi trường index chỉ có mặt trong một tập hợp con nhỏ của các document."
            }
        }
    },
    {
        _id: "nosql-m-022",
        difficulty: "middle",
        tags: ["Column-Family", "data model", "anti-pattern"],
        content: {
            en: {
                title: "Wide Row Anti-Pattern (Cassandra)",
                body: "In Cassandra, the **Wide Row** anti-pattern occurs when a single partition key maps to an extremely large number of clustering keys. What are the two primary technical problems caused by this pattern?",
                solution: "1. **Increased Read Latency:** Reading the data requires fetching and processing an enormous amount of data on a single node. 2. **Node Management Issues:** The size of the row can exceed memory limits or cause issues with compaction and node balancing."
            },
            jp: {
                title: "ワイドローのアンチパターン（Cassandra）",
                body: "Cassandra では、単一のパーティションキーが非常に多数のクラスタリングキーにマッピングされるときに、**ワイドロー（Wide Row）** のアンチパターンが発生します。このパターンによって引き起こされる 2 つの主要な技術的問題は何ですか？",
                solution: "1. **読み取りレイテンシの増加：** データを読み取るには、単一のノードで膨大な量のデータをフェッチして処理する必要があります。2. **ノード管理の問題：** 行のサイズがメモリ制限を超えたり、コンパクションやノードのバランス調整の問題を引き起こしたりする可能性があります。"
            },
            vi: {
                title: "Anti-Pattern Wide Row (Cassandra)",
                body: "Trong Cassandra, anti-pattern **Wide Row** xảy ra khi một khóa phân vùng duy nhất ánh xạ tới một số lượng lớn bất thường các khóa clustering. Hai vấn đề kỹ thuật chính do mô hình này gây ra là gì?",
                solution: "1. **Tăng độ trễ đọc (Read Latency):** Việc đọc dữ liệu yêu cầu tìm nạp và xử lý một lượng dữ liệu khổng lồ trên một node duy nhất. 2. **Các vấn đề về Quản lý Node:** Kích thước của hàng có thể vượt quá giới hạn bộ nhớ hoặc gây ra sự cố với compaction và cân bằng node."
            }
        }
    },
    {
        _id: "nosql-m-023",
        difficulty: "middle",
        tags: ["Graph", "Cypher", "CREATE", "SET"],
        content: {
            en: {
                title: "Creating Nodes and Relationships (Cypher)",
                body: "Write a two-line **Cypher** query to create a `(:Person {name: 'Bob'})` node and a `:WORKS_FOR` relationship connecting Bob to an existing company node named 'Acme Corp'.",
                solution: "MATCH (c:Company {name: 'Acme Corp'}) \nCREATE (p:Person {name: 'Bob'})-[:WORKS_FOR]->(c)"
            },
            jp: {
                title: "ノードと関係の作成 (Cypher)",
                body: "「Bob」という名前の `(:Person {name: 'Bob'})` ノードと、Bob を既存の「Acme Corp」という名前の会社ノードに接続する `:WORKS_FOR` 関係を作成する 2 行の **Cypher** クエリを記述してください。",
                solution: "MATCH (c:Company {name: 'Acme Corp'}) \nCREATE (p:Person {name: 'Bob'})-[:WORKS_FOR]->(c)"
            },
            vi: {
                title: "Tạo Nodes và Relationships (Cypher)",
                body: "Viết truy vấn **Cypher** hai dòng để tạo một node `(:Person {name: 'Bob'})` và một mối quan hệ `:WORKS_FOR` kết nối Bob với một node công ty hiện có tên là 'Acme Corp'.",
                solution: "MATCH (c:Company {name: 'Acme Corp'}) \nCREATE (p:Person {name: 'Bob'})-[:WORKS_FOR]->(c)"
            }
        }
    },
    {
        _id: "nosql-m-024",
        difficulty: "middle",
        tags: ["Key-Value", "Redis", "consistency", "transactions"],
        content: {
            en: {
                title: "Redis Transactions and WATCH",
                body: "Redis supports transactions using the MULTI/EXEC block. However, for conditional updates based on the current value of a key, you must use the **WATCH** command. Explain the purpose of WATCH in this context.",
                solution: "The **WATCH** command monitors a key for changes *before* the transaction begins. If the key is modified by another client between the WATCH command and the EXEC command, the transaction is immediately aborted, preventing a race condition (optimistic locking)."
            },
            jp: {
                title: "Redis トランザクションと WATCH",
                body: "Redis は MULTI/EXEC ブロックを使用したトランザクションをサポートしています。ただし、キーの現在の値に基づく条件付き更新の場合、**WATCH** コマンドを使用する必要があります。このコンテキストにおける WATCH の目的を説明してください。",
                solution: " **WATCH** コマンドは、トランザクションが始まる *前* にキーの変更を監視します。WATCH コマンドと EXEC コマンドの間でキーが別のクライアントによって変更された場合、トランザクションは直ちに中止され、競合状態（楽観的ロック）を防ぎます。"
            },
            vi: {
                title: "Redis Transactions và WATCH",
                body: "Redis hỗ trợ các giao dịch bằng cách sử dụng khối MULTI/EXEC. Tuy nhiên, đối với các cập nhật có điều kiện dựa trên giá trị hiện tại của một khóa, bạn phải sử dụng lệnh **WATCH**. Giải thích mục đích của WATCH trong ngữ cảnh này.",
                solution: "Lệnh **WATCH** giám sát một khóa để tìm kiếm các thay đổi *trước khi* giao dịch bắt đầu. Nếu khóa bị sửa đổi bởi một client khác giữa lệnh WATCH và lệnh EXEC, giao dịch sẽ bị hủy bỏ ngay lập tức, ngăn chặn tình trạng race condition (khóa lạc quan)."
            }
        }
    },
    {
        _id: "nosql-m-025",
        difficulty: "middle",
        tags: ["sharding", "distributed systems", "load balancing"],
        content: {
            en: {
                title: "Sharding vs Replication",
                body: "What is the fundamental difference between **Sharding (Horizontal Partitioning)** and **Replication** in terms of database scalability goals?",
                solution: " **Sharding** (scaling-out) is used to scale **writes** and **storage capacity** by distributing data across multiple independent nodes. **Replication** (read replicas) is used to scale **reads** and improve **availability/fault tolerance** by having identical copies of the data on multiple nodes." 


            },
            jp: {
                title: "シャーディング 対 レプリケーション",
                body: "データベースのスケーラビリティの目標に関して、 **シャーディング（水平パーティショニング）** と **レプリケーション** の根本的な違いは何ですか？",
                solution: " **シャーディング**（スケールアウト）は、複数の独立したノードにデータを分散することで、**書き込み** と **ストレージ容量** をスケーリングするために使用されます。 **レプリケーション**（読み取りレプリカ）は、複数のノードにデータの同一のコピーを持つことで、**読み取り** をスケーリングし、**可用性/耐障害性** を向上させるために使用されます。" 


            }
            ,
            vi: {
                title: "Sharding so với Replication",
                body: "Sự khác biệt cơ bản giữa **Sharding (Phân vùng Ngang)** và **Replication** về mục tiêu khả năng mở rộng cơ sở dữ liệu là gì?",
                solution: " **Sharding** (scaling-out) được sử dụng để mở rộng **ghi** và **dung lượng lưu trữ** bằng cách phân phối dữ liệu trên nhiều node độc lập. **Replication** (bản sao đọc) được sử dụng để mở rộng **đọc** và cải thiện **tính sẵn sàng/khả năng chịu lỗi** bằng cách có các bản sao giống hệt nhau của dữ liệu trên nhiều node." 


            }
        }
    },
    {
        _id: "nosql-m-026",
        difficulty: "middle",
        tags: ["MongoDB", "modeling", "tree structure"],
        content: {
            en: {
                title: "Modeling Tree Structures (MongoDB)",
                body: "Name one of the two common modeling patterns (besides a simple parent reference) used in MongoDB to efficiently query data with a tree-like structure (e.g., categories or forum threads).",
                solution: "1. **Materialized Path:** Storing the full ancestry of the node as a string or array (e.g., `/electronics/tvs/oled`). 2. **Nested Sets (Tree Traversal):** Storing references to descendants or an array of all ancestors (Ancestor Array)."
            },
            jp: {
                title: "ツリー構造のモデリング（MongoDB）",
                body: "ツリーのような構造（例：カテゴリやフォーラムのスレッド）を持つデータを効率的にクエリするために MongoDB で使用される 2 つの一般的なモデリングパターン（単純な親参照を除く）のうち 1 つを挙げてください。",
                solution: "1. **Materialized Path（具体化されたパス）：** ノードの完全な祖先を文字列または配列として保存します（例：`/electronics/tvs/oled`）。2. **Nested Sets（ツリー走査）：** 子孫への参照またはすべての祖先の配列を保存します（Ancestor Array）。"
            },
            vi: {
                title: "Mô hình hóa Cấu trúc Cây (MongoDB)",
                body: "Kể tên một trong hai mô hình mô hình hóa phổ biến (ngoài tham chiếu cha đơn giản) được sử dụng trong MongoDB để truy vấn dữ liệu một cách hiệu quả với cấu trúc giống cây (ví dụ: danh mục hoặc chủ đề diễn đàn).",
                solution: "1. **Materialized Path:** Lưu trữ toàn bộ tổ tiên của node dưới dạng chuỗi hoặc mảng (ví dụ: `/electronics/tvs/oled`). 2. **Nested Sets (Tree Traversal):** Lưu trữ tham chiếu đến hậu duệ hoặc một mảng của tất cả tổ tiên (Ancestor Array)."
            }
        }
    },
    {
        _id: "nosql-m-027",
        difficulty: "middle",
        tags: ["Column-Family", "consistency", "replication factor"],
        content: {
            en: {
                title: "Replication Factor and Consistency",
                body: "In a Cassandra cluster with a Replication Factor (N) of 5, a developer sets the Write Consistency Level (W) to 3 and the Read Consistency Level (R) to 3. What level of consistency does this combination guarantee, and why?",
                solution: "This combination guarantees **Strong Consistency**. Because W + R = 6, which is greater than N=5. This ensures that a read operation will always query at least one node that successfully participated in the most recent write operation."
            },
            jp: {
                title: "レプリケーションファクターと整合性",
                body: "レプリケーションファクター (N) が 5 の Cassandra クラスターで、開発者が書き込み整合性レベル (W) を 3、読み取り整合性レベル (R) を 3 に設定しました。この組み合わせはどの程度の整合性を保証しますか？また、その理由は何ですか？",
                solution: "この組み合わせは **強力な整合性** を保証します。なぜなら、W + R = 6 であり、N=5 より大きいからです。これにより、読み取り操作は常に、最新の書き込み操作に正常に参加したノードを少なくとも 1 つクエリすることが保証されます。"
            },
            vi: {
                title: "Replication Factor và Tính nhất quán",
                body: "Trong một cluster Cassandra với Replication Factor (N) là 5, một nhà phát triển đặt Write Consistency Level (W) là 3 và Read Consistency Level (R) là 3. Sự kết hợp này đảm bảo mức độ nhất quán nào, và tại sao?",
                solution: "Sự kết hợp này đảm bảo **Strong Consistency (Tính nhất quán mạnh)**. Bởi vì W + R = 6, lớn hơn N=5. Điều này đảm bảo rằng thao tác đọc sẽ luôn truy vấn ít nhất một node đã tham gia thành công vào thao tác ghi gần đây nhất."
            }
        }
    },
    {
        _id: "nosql-m-028",
        difficulty: "middle",
        tags: ["Graph", "Cypher", "UNWIND"],
        content: {
            en: {
                title: "UNWIND Clause (Cypher)",
                body: "What is the primary function of the **UNWIND** clause in Cypher, and in what common scenario is it used in conjunction with the MERGE clause?",
                solution: "UNWIND takes a list (or array) of values and turns them into individual rows (records). It is commonly used with MERGE to iterate over a list of entities from an application and create/update all of them efficiently in a single query."
            },
            jp: {
                title: "UNWIND 句 (Cypher)",
                body: "Cypher における **UNWIND** 句の主な機能は何ですか？また、MERGE 句と組み合わせて使用​​される一般的なシナリオは何ですか？",
                solution: "UNWIND は値のリスト（または配列）を取得し、それらを個々の行（レコード）に変換します。これは、アプリケーションからのエンティティのリストを反復処理し、それらすべてを単一のクエリで効率的に作成/更新するために、MERGE と組み合わせて一般的に使用されます。"
            },
            vi: {
                title: "Mệnh đề UNWIND (Cypher)",
                body: "Chức năng chính của mệnh đề **UNWIND** trong Cypher là gì, và nó được sử dụng trong kịch bản phổ biến nào cùng với mệnh đề MERGE?",
                solution: "UNWIND lấy một danh sách (hoặc mảng) các giá trị và biến chúng thành các hàng (bản ghi) riêng lẻ. Nó thường được sử dụng với MERGE để lặp lại một danh sách các thực thể từ một ứng dụng và tạo/cập nhật tất cả chúng một cách hiệu quả trong một truy vấn duy nhất."
            }
        }
    },
    {
        _id: "nosql-m-029",
        difficulty: "middle",
        tags: ["Document", "indexing", "B-Tree"],
        content: {
            en: {
                title: "B-Tree Index and Sorting",
                body: "Explain why a single **B-Tree index** in a Document or Relational database can support efficient sorting for both ascending and descending order of the indexed field.",
                solution: "A B-Tree stores key entries in a sorted, balanced tree structure. The index can be traversed from left-to-right to retrieve results in **ascending** order, and traversed from right-to-left to retrieve results in **descending** order." 



            },
            jp: {
                title: "B-Tree インデックスとソート",
                body: "ドキュメントまたはリレーショナルデータベースにおける単一の **B-Tree インデックス** が、インデックス付きフィールドの昇順と降順の両方の効率的なソートをサポートできる理由を説明してください。",
                solution: "B-Tree はキーエントリをソートされたバランスの取れたツリー構造に保存します。インデックスは左から右に走査して **昇順** で結果を取得でき、右から左に走査して **降順** で結果を取得できます。" 


            }
            ,
            vi: {
                title: "B-Tree Index và Sắp xếp",
                body: "Giải thích tại sao một **B-Tree index** duy nhất trong cơ sở dữ liệu Document hoặc Quan hệ có thể hỗ trợ sắp xếp hiệu quả cho cả thứ tự tăng dần và giảm dần của trường được lập index.",
                solution: "Một B-Tree lưu trữ các mục khóa trong cấu trúc cây được sắp xếp, cân bằng. Index có thể được duyệt từ trái sang phải để truy xuất kết quả theo thứ tự **tăng dần**, và duyệt từ phải sang trái để truy xuất kết quả theo thứ tự **giảm dần**." 


            }
        }
    },
    {
        _id: "nosql-m-030",
        difficulty: "middle",
        tags: ["Key-Value", "Redis", "eviction", "LRU"],
        content: {
            en: {
                title: "Key Eviction Policy (Redis)",
                body: "If Redis is configured as a cache (with a maximum memory limit), which common eviction policy is often chosen to remove keys when the limit is reached, and how does it prioritize key removal?",
                solution: "The **Least Recently Used (LRU)** policy. It prioritizes the removal of keys that have not been accessed for the longest period of time, assuming that data not recently used is less likely to be needed again."
            },
            jp: {
                title: "キーの削除ポリシー（Redis）",
                body: "Redis がキャッシュとして構成されている場合（最大メモリ制限あり）、制限に達したときにキーを削除するためにどの一般的な削除ポリシーがしばしば選択されますか？また、キーの削除をどのように優先しますか？",
                solution: " **Least Recently Used (LRU)** ポリシー。これは、最も長い間アクセスされていないキーの削除を優先します。これは、最近使用されていないデータは再度必要とされる可能性が低いと想定しているためです。"
            },
            vi: {
                title: "Chính sách Đuổi khóa (Redis)",
                body: "Nếu Redis được cấu hình làm bộ nhớ đệm (với giới hạn bộ nhớ tối đa), chính sách đuổi nào phổ biến thường được chọn để loại bỏ các khóa khi đạt đến giới hạn và nó ưu tiên loại bỏ khóa như thế nào?",
                solution: "Chính sách **Least Recently Used (LRU)**. Nó ưu tiên loại bỏ các khóa đã không được truy cập trong thời gian dài nhất, giả định rằng dữ liệu không được sử dụng gần đây ít có khả năng cần thiết trở lại."
            }
        }
    },
    {
        _id: "nosql-m-031",
        difficulty: "middle",
        tags: ["MongoDB", "indexing", "performance", "sort"],
        content: {
            en: {
                title: "Sort Order in Compound Index",
                body: "When a query uses a compound index `{field_A: 1, field_B: -1}` for filtering on A and sorting on B, why must the sort order of B match the index order for the index to be fully effective?",
                solution: "The compound index stores data in a specific pre-sorted order. If the query's sort order matches the index (A ascending, B descending), the database can read the data directly from the index. If the sort order doesn't match, the database must perform an in-memory **blocking sort** on the result set, which is slow."
            },
            jp: {
                title: "複合インデックスにおけるソート順序",
                body: "クエリが A のフィルタリングと B のソートに複合インデックス `{field_A: 1, field_B: -1}` を使用する場合、インデックスが完全に有効であるために、B のソート順序がインデックス順序と一致しなければならないのはなぜですか？",
                solution: "複合インデックスは、特定の事前ソートされた順序でデータを保存します。クエリのソート順序がインデックスと一致する場合（A 昇順、B 降順）、データベースはインデックスからデータを直接読み取ることができます。ソート順序が一致しない場合、データベースは結果セットに対してインメモリの **ブロッキングソート** を実行する必要があり、これは遅いです。"
            },
            vi: {
                title: "Thứ tự Sắp xếp trong Compound Index",
                body: "Khi một truy vấn sử dụng compound index `{field_A: 1, field_B: -1}` để lọc trên A và sắp xếp trên B, tại sao thứ tự sắp xếp của B phải khớp với thứ tự index để index có hiệu quả hoàn toàn?",
                solution: "Compound index lưu trữ dữ liệu theo một thứ tự được sắp xếp trước cụ thể. Nếu thứ tự sắp xếp của truy vấn khớp với index (A tăng dần, B giảm dần), cơ sở dữ liệu có thể đọc dữ liệu trực tiếp từ index. Nếu thứ tự sắp xếp không khớp, cơ sở dữ liệu phải thực hiện một thao tác **blocking sort** trong bộ nhớ trên tập kết quả, điều này rất chậm."
            }
        }
    },
    {
        _id: "nosql-m-032",
        difficulty: "middle",
        tags: ["Column-Family", "performance", "SSTable"],
        content: {
            en: {
                title: "SSTables and Read Operations (Cassandra)",
                body: "In Cassandra, what is an **SSTable (Sorted String Table)**, and how does the presence of multiple SSTables containing data for the same key affect the latency of a read operation?",
                solution: "An SSTable is an immutable, sorted data file on disk. The presence of multiple SSTables means a read operation may have to check **multiple SSTables** on disk (and memory tables) to find all parts of the data, then merge the results based on timestamps. This greatly increases read latency."
            },
            jp: {
                title: "SSTable と読み取り操作（Cassandra）",
                body: "Cassandra における **SSTable (Sorted String Table)** とは何ですか？また、同じキーのデータを含む複数の SSTable の存在が、読み取り操作のレイテンシにどのように影響しますか？",
                solution: "SSTable は、ディスク上の不変のソートされたデータファイルです。複数の SSTable の存在は、読み取り操作がデータのすべての部分を見つけるためにディスク上の **複数の SSTable**（およびメモリテーブル）をチェックし、次にタイムスタンプに基づいて結果をマージする必要があることを意味します。これにより、読み取りレイテンシが大幅に増加します。"
            },
            vi: {
                title: "SSTables và Thao tác Đọc (Cassandra)",
                body: "Trong Cassandra, **SSTable (Sorted String Table)** là gì, và sự hiện diện của nhiều SSTable chứa dữ liệu cho cùng một khóa ảnh hưởng đến độ trễ của thao tác đọc như thế nào?",
                solution: "SSTable là một tệp dữ liệu không thể thay đổi, được sắp xếp trên đĩa. Sự hiện diện của nhiều SSTable có nghĩa là thao tác đọc có thể phải kiểm tra **nhiều SSTable** trên đĩa (và các bảng bộ nhớ) để tìm tất cả các phần của dữ liệu, sau đó hợp nhất các kết quả dựa trên dấu thời gian. Điều này làm tăng đáng kể độ trễ đọc."
            }
        }
    },
    {
        _id: "nosql-m-033",
        difficulty: "middle",
        tags: ["Event Sourcing", "CQRS", "write model"],
        content: {
            en: {
                title: "Command-Query Responsibility Segregation (CQRS)",
                body: "In the **CQRS** pattern, which is often used with Event Sourcing, what is the fundamental purpose of the **Command** side (Write Model)?",
                solution: "The Command side is responsible for handling all **updates/writes** (commands), validating business rules, and generating/persisting events. It is focused on **consistency and data integrity**."
            },
            jp: {
                title: "Command-Query Responsibility Segregation (CQRS)",
                body: "イベントソーシングでよく使用される **CQRS** パターンにおいて、**Command** 側（書き込みモデル）の根本的な目的は何ですか？",
                solution: "Command 側は、すべての **更新/書き込み**（コマンド）の処理、ビジネスルールの検証、およびイベントの生成/永続化を担当します。**整合性とデータインテグリティ** に焦点を当てています。"
            },
            vi: {
                title: "Command-Query Responsibility Segregation (CQRS)",
                body: "Trong mô hình **CQRS**, thường được sử dụng với Event Sourcing, mục đích cơ bản của phía **Command** (Write Model) là gì?",
                solution: "Phía Command chịu trách nhiệm xử lý tất cả các **cập nhật/ghi** (lệnh), xác thực các quy tắc nghiệp vụ và tạo/lưu trữ các sự kiện. Nó tập trung vào **tính nhất quán và tính toàn vẹn dữ liệu**."
            }
        }
    },
    {
        _id: "nosql-m-034",
        difficulty: "middle",
        tags: ["MongoDB", "aggregation", "operators"],
        content: {
            en: {
                title: "$unwind vs $group (Aggregation)",
                body: "Explain the distinct purposes of the **$unwind** and **$group** stages in the MongoDB Aggregation Pipeline.",
                solution: "**$unwind** deconstructs an array field from the input documents to output one document for each element in the array. **$group** aggregates documents based on a grouping key, calculating aggregate values (like sums, averages, or counts) for each group."
            },
            jp: {
                title: "$unwind 対 $group（集約）",
                body: "MongoDB 集約パイプラインにおける **$unwind** と **$group** ステージの明確な目的を説明してください。",
                solution: " **$unwind** は、入力ドキュメントから配列フィールドを分解し、配列内の要素ごとに 1 つのドキュメントを出力します。 **$group** は、グループ化キーに基づいてドキュメントを集約し、グループごとに集計値（合計、平均、カウントなど）を計算します。"
            },
            vi: {
                title: "$unwind so với $group (Aggregation)",
                body: "Giải thích mục đích riêng biệt của các stage **$unwind** và **$group** trong MongoDB Aggregation Pipeline.",
                solution: " **$unwind** phân tích một trường mảng từ các document đầu vào để xuất ra một document cho mỗi phần tử trong mảng. **$group** tổng hợp các document dựa trên một khóa nhóm, tính toán các giá trị tổng hợp (như tổng, trung bình hoặc số lượng) cho mỗi nhóm."
            }
        }
    },
    {
        _id: "nosql-m-035",
        difficulty: "middle",
        tags: ["Graph", "modeling", "properties"],
        content: {
            en: {
                title: "Properties on Relationships (Graph)",
                body: "Why is it a recommended practice in Graph modeling to store attributes (properties) on the **relationships (edges)** rather than just on the nodes?",
                solution: "Properties on relationships capture context and state about the connection itself. For example, a `:WORKS_FOR` relationship can have a `startDate` and a `title` property, capturing the specific context of *when* and *how* the two nodes were connected."
            },
            jp: {
                title: "関係上のプロパティ（グラフ）",
                body: "グラフモデリングにおいて、属性（プロパティ）をノード上だけでなく **関係（エッジ）** 上にも保存することが推奨されるのはなぜですか？",
                solution: "関係上のプロパティは、接続自体に関するコンテキストと状態をキャプチャします。たとえば、`:WORKS_FOR` 関係には `startDate` および `title` プロパティを含めることができ、2 つのノードが接続された *時期* と *方法* の特定のコンテキストをキャプチャします。"
            },
            vi: {
                title: "Thuộc tính trên Relationships (Graph)",
                body: "Tại sao việc lưu trữ các thuộc tính (properties) trên **relationships (edges)** thay vì chỉ trên các nodes lại là một thực tiễn được khuyến nghị trong mô hình hóa Graph?",
                solution: "Các thuộc tính trên relationships nắm bắt ngữ cảnh và trạng thái về chính kết nối đó. Ví dụ, mối quan hệ `:WORKS_FOR` có thể có thuộc tính `startDate` và `title`, nắm bắt ngữ cảnh cụ thể về *thời điểm* và *cách thức* hai node được kết nối."
            }
        }
    },
    {
        _id: "nosql-m-036",
        difficulty: "middle",
        tags: ["Key-Value", "Redis", "data structure", "Set"],
        content: {
            en: {
                title: "Intersection Operations (Redis Set)",
                body: "If you have two Redis Sets representing two distinct user segments (`users:segment_A` and `users:segment_B`), what command would you use to find the list of users that belong to **both** segments (the intersection)?",
                solution: "The **SINTER** command (Set INTERsection). You can also use **SINTERSTORE** to store the result in a new key."
            },
            jp: {
                title: "交差操作（Redis Set）",
                body: "2 つの異なるユーザーセグメント（`users:segment_A` と `users:segment_B`）を表す 2 つの Redis Set がある場合、**両方** のセグメントに属するユーザーのリスト（交差）を見つけるためにどのコマンドを使用しますか？",
                solution: " **SINTER** コマンド（Set INTERsection）。結果を新しいキーに保存するために **SINTERSTORE** も使用できます。"
            },
            vi: {
                title: "Thao tác Giao nhau (Redis Set)",
                body: "Nếu bạn có hai Redis Set đại diện cho hai phân đoạn người dùng riêng biệt (`users:segment_A` và `users:segment_B`), bạn sẽ sử dụng lệnh nào để tìm danh sách người dùng thuộc về **cả hai** phân đoạn (giao nhau)?",
                solution: "Lệnh **SINTER** (Set INTERsection). Bạn cũng có thể sử dụng **SINTERSTORE** để lưu trữ kết quả trong một khóa mới."
            }
        }
    },
    {
        _id: "nosql-m-037",
        difficulty: "middle",
        tags: ["sharding", "consistency", "load balancing"],
        content: {
            en: {
                title: "Choosing a Good Shard Key",
                body: "When choosing a shard key for a distributed database, what are the two main properties the key should ideally have to ensure optimal performance and distribution?",
                solution: "1. **High Cardinality:** The key should have a large number of unique values to allow data to be split finely. 2. **Low Frequency/Random Distribution:** The key should be accessed/written to with roughly equal frequency across all values (i.e., avoid 'hot' keys) to ensure even load balancing."
            },
            jp: {
                title: "適切なシャードキーの選択",
                body: "分散データベースのシャードキーを選択するとき、最適なパフォーマンスと分散を確保するために、キーが理想的に持つべき 2 つの主なプロパティは何ですか？",
                solution: "1. **高カーディナリティ：** キーは、データを細かく分割できるように、多数の一意の値を持つ必要があります。2. **低頻度/ランダムな分布：** 均等な負荷分散を確保するために、キーはすべての値でほぼ同じ頻度でアクセス/書き込みされる必要があります（つまり、「ホット」キーを避ける）。"
            },
            vi: {
                title: "Chọn một Shard Key Tốt",
                body: "Khi chọn một shard key cho cơ sở dữ liệu phân tán, hai thuộc tính chính mà khóa đó lý tưởng nên có để đảm bảo hiệu suất và phân phối tối ưu là gì?",
                solution: "1. **High Cardinality (Cardinality cao):** Khóa nên có số lượng lớn các giá trị duy nhất để cho phép dữ liệu được chia nhỏ. 2. **Low Frequency/Random Distribution (Tần suất thấp/Phân phối ngẫu nhiên):** Khóa nên được truy cập/ghi với tần suất gần như bằng nhau trên tất cả các giá trị (tức là tránh các khóa 'hot') để đảm bảo cân bằng tải đồng đều."
            }
        }
    },
    {
        _id: "nosql-m-038",
        difficulty: "middle",
        tags: ["Document", "indexing", "Wildcard Index"],
        content: {
            en: {
                title: "Wildcard Index (MongoDB)",
                body: "What is the key benefit of using a **Wildcard Index** in MongoDB, and what is its primary limitation or drawback?",
                solution: "Benefit: Allows indexing of **arbitrary fields** within a sub-document or array without knowing the field names in advance, useful for semi-structured data. Drawback: It generally has **higher storage overhead and slower write performance** compared to a dedicated index because it indexes many fields."
            },
            jp: {
                title: "ワイルドカードインデックス（MongoDB）",
                body: "MongoDB で **ワイルドカードインデックス** を使用する主な利点は何ですか？また、その主な制限または欠点は何ですか？",
                solution: "利点：サブドキュメントまたは配列内の **任意のフィールド** を、フィールド名を事前に知らなくてもインデックス化できます。これは半構造化データに役立ちます。欠点：多くのフィールドをインデックス化するため、専用インデックスと比較して一般的に **より高いストレージオーバーヘッドと遅い書き込みパフォーマンス** があります。"
            },
            vi: {
                title: "Wildcard Index (MongoDB)",
                body: "Lợi ích chính của việc sử dụng **Wildcard Index** trong MongoDB là gì, và hạn chế hoặc nhược điểm chính của nó là gì?",
                solution: "Lợi ích: Cho phép lập index cho **các trường tùy ý** bên trong một sub-document hoặc mảng mà không cần biết trước tên trường, hữu ích cho dữ liệu bán cấu trúc. Nhược điểm: Nó thường có **chi phí lưu trữ cao hơn và hiệu suất ghi chậm hơn** so với một index chuyên dụng vì nó lập index cho nhiều trường."
            }
        }
    },
    {
        _id: "nosql-m-039",
        difficulty: "middle",
        tags: ["Column-Family", "consistency", "read-before-write"],
        content: {
            en: {
                title: "Lightweight Transactions (LWT) (Cassandra)",
                body: "Cassandra supports **Lightweight Transactions (LWT)**, which provide ACID properties (specifically Isolation and Atomicity). What is the common performance trade-off associated with using LWTs, and what mechanism enables them?",
                solution: "Trade-off: **Higher latency** and **lower throughput** because LWTs require a **Read-Before-Write** operation to compare and set values. Mechanism: They are implemented using the **Paxos Consensus Algorithm** (a three-phase commit-like protocol)."
            },
            jp: {
                title: "軽量トランザクション（LWT）（Cassandra）",
                body: "Cassandra は、ACID 特性（特に分離性と原子性）を提供する **軽量トランザクション（LWT）** をサポートしています。LWT の使用に伴う一般的なパフォーマンスのトレードオフは何ですか？また、それらを可能にするメカニズムは何ですか？",
                solution: "トレードオフ：LWT は値を比較して設定するために **Read-Before-Write** 操作を必要とするため、**高レイテンシ** と **低スループット** になります。メカニズム：**Paxos コンセンサスアルゴリズム**（3 フェーズコミットのようなプロトコル）を使用して実装されています。"
            },
            vi: {
                title: "Lightweight Transactions (LWT) (Cassandra)",
                body: "Cassandra hỗ trợ **Lightweight Transactions (LWT)**, cung cấp các thuộc tính ACID (đặc biệt là Isolation và Atomicity). Sự đánh đổi hiệu suất phổ biến liên quan đến việc sử dụng LWT là gì, và cơ chế nào cho phép chúng?",
                solution: "Sự đánh đổi: **Độ trễ cao hơn** và **thông lượng thấp hơn** vì LWT yêu cầu thao tác **Read-Before-Write** để so sánh và đặt giá trị. Cơ chế: Chúng được triển khai bằng cách sử dụng **Thuật toán Đồng thuận Paxos** (một giao thức giống như three-phase commit)."
            }
        }
    },
    {
        _id: "nosql-m-040",
        difficulty: "middle",
        tags: ["Graph", "Cypher", "MERGE"],
        content: {
            en: {
                title: "MERGE vs CREATE (Cypher)",
                body: "In Cypher, what is the key difference in behavior between the **CREATE** clause and the **MERGE** clause when trying to ensure a node with a unique property (e.g., email) exists?",
                solution: "**CREATE** always creates a new node or relationship, potentially leading to duplicates. **MERGE** attempts to match the pattern first; if it exists, it is used (like an implicit MATCH); if it does not exist, it is created. This ensures uniqueness based on the specified pattern."
            },
            jp: {
                title: "MERGE 対 CREATE (Cypher)",
                body: "Cypher において、一意のプロパティ（例：メールアドレス）を持つノードが存在することを保証しようとするとき、**CREATE** 句と **MERGE** 句の動作の主な違いは何ですか？",
                solution: " **CREATE** は常に新しいノードまたは関係を作成し、重複につながる可能性があります。 **MERGE** はまずパターンを照合しようとします。存在する場合はそれが使用され（暗黙的な MATCH のように）、存在しない場合は作成されます。これにより、指定されたパターンに基づいて一意性が保証されます。"
            },
            vi: {
                title: "MERGE so với CREATE (Cypher)",
                body: "Trong Cypher, sự khác biệt chính trong hành vi giữa mệnh đề **CREATE** và mệnh đề **MERGE** khi cố gắng đảm bảo rằng một node với một thuộc tính duy nhất (ví dụ: email) tồn tại là gì?",
                solution: "**CREATE** luôn tạo một node hoặc mối quan hệ mới, có khả năng dẫn đến trùng lặp. **MERGE** cố gắng khớp với mẫu trước; nếu nó tồn tại, nó được sử dụng (giống như một MATCH ngầm); nếu nó không tồn tại, nó được tạo. Điều này đảm bảo tính duy nhất dựa trên mẫu được chỉ định."
            }
        }
    },
    {
        _id: "nosql-m-041",
        difficulty: "middle",
        tags: ["Document", "indexing", "TTL"],
        content: {
            en: {
                title: "TTL Index (MongoDB)",
                body: "What is the specific purpose of a **TTL (Time-To-Live) index** in MongoDB, and on what type of field must it be created?",
                solution: "A TTL index is used to automatically delete documents from a collection after a certain amount of time. It must be created on a single field of type **Date** or an array of Date objects, and the field must store the moment after which the document should expire."
            },
            jp: {
                title: "TTL インデックス（MongoDB）",
                body: "MongoDB における **TTL（Time-To-Live）インデックス** の特定の目的は何ですか？また、どのタイプのフィールドに作成する必要がありますか？",
                solution: "TTL インデックスは、一定期間後にコレクションからドキュメントを自動的に削除するために使用されます。これは、**Date** 型の単一フィールド、または Date オブジェクトの配列に作成する必要があり、フィールドはドキュメントが期限切れになるべき瞬間を保存する必要があります。"
            },
            vi: {
                title: "TTL Index (MongoDB)",
                body: "Mục đích cụ thể của một **TTL (Time-To-Live) index** trong MongoDB là gì, và nó phải được tạo trên loại trường nào?",
                solution: "TTL index được sử dụng để tự động xóa các document khỏi một collection sau một khoảng thời gian nhất định. Nó phải được tạo trên một trường duy nhất thuộc loại **Date** hoặc một mảng các đối tượng Date, và trường đó phải lưu trữ thời điểm mà sau đó document sẽ hết hạn."
            }
        }
    },
    {
        _id: "nosql-m-042",
        difficulty: "middle",
        tags: ["Key-Value", "Redis", "latency", "pipeline"],
        content: {
            en: {
                title: "Pipelining (Redis)",
                body: "In high-performance applications, why is **pipelining** the execution of multiple Redis commands (e.g., 100 SET commands) much faster than executing them one after another without pipelining?",
                solution: "Pipelining reduces the **Round Trip Time (RTT)** latency overhead. Without pipelining, each command requires a full network round trip. With pipelining, multiple commands are buffered and sent in a single network packet, and the server processes them and sends all replies back in a single response."
            },
            jp: {
                title: "パイプライン処理（Redis）",
                body: "高性能アプリケーションにおいて、複数の Redis コマンド（例：100 個の SET コマンド）の実行を **パイプライン処理** することは、パイプライン処理なしでそれらを次々に実行するよりもはるかに高速なのはなぜですか？",
                solution: "パイプライン処理は、**ラウンドトリップタイム（RTT）** のレイテンシオーバーヘッドを削減します。パイプライン処理なしでは、各コマンドは完全なネットワーク往復を必要とします。パイプライン処理を使用すると、複数のコマンドがバッファリングされ、単一のネットワークパケットで送信され、サーバーはそれらを処理し、すべての応答を単一の応答で送り返します。"
            },
            vi: {
                title: "Pipelining (Redis)",
                body: "Trong các ứng dụng hiệu suất cao, tại sao việc **pipelining** (đường ống) thực thi nhiều lệnh Redis (ví dụ: 100 lệnh SET) lại nhanh hơn nhiều so với việc thực thi chúng liên tiếp mà không có pipelining?",
                solution: "Pipelining làm giảm chi phí độ trễ **Round Trip Time (RTT)**. Không có pipelining, mỗi lệnh yêu cầu một chuyến khứ hồi mạng đầy đủ. Với pipelining, nhiều lệnh được đệm và gửi trong một gói mạng duy nhất, và máy chủ xử lý chúng và gửi tất cả các phản hồi trở lại trong một phản hồi duy nhất."
            }
        }
    },
    {
        _id: "nosql-m-043",
        difficulty: "middle",
        tags: ["sharding", "distributed systems", "config server"],
        content: {
            en: {
                title: "Config Servers (Sharded Clusters)",
                body: "In a sharded cluster architecture (like MongoDB's sharded setup), what is the primary role of the **Config Servers**?",
                solution: "Config Servers store the **metadata and configuration** for the entire cluster, including the list of shards, the data distribution (the chunk ranges/boundaries), and authentication information. They are critical for the operation of the cluster."
            },
            jp: {
                title: "Config サーバー（シャーディングされたクラスター）",
                body: "シャーディングされたクラスターアーキテクチャ（MongoDB のシャーディングされたセットアップなど）において、**Config サーバー** の主な役割は何ですか？",
                solution: "Config サーバーは、シャードのリスト、データ分散（チャンク範囲/境界）、および認証情報を含む、クラスター全体の **メタデータと構成** を保存します。これらはクラスターの運用にとって不可欠です。"
            }
            ,
            vi: {
                title: "Config Servers (Sharded Clusters)",
                body: "Trong kiến trúc cluster được sharding (ví dụ: thiết lập sharding của MongoDB), vai trò chính của **Config Servers** là gì?",
                solution: "Config Servers lưu trữ **siêu dữ liệu và cấu hình** cho toàn bộ cluster, bao gồm danh sách các shard, sự phân phối dữ liệu (các phạm vi/ranh giới chunk) và thông tin xác thực. Chúng rất quan trọng cho hoạt động của cluster."
            }
        }
    },
    {
        _id: "nosql-m-044",
        difficulty: "middle",
        tags: ["MongoDB", "aggregation", "operators"],
        content: {
            en: {
                title: "$match vs $filter (Aggregation)",
                body: "In MongoDB aggregation, what is the difference between the **$match** stage (which filters documents) and the **$filter** operator (which operates on arrays)?",
                solution: "The **$match** stage is applied **early** in the pipeline to efficiently reduce the number of documents passed to subsequent stages. The **$filter** operator is used *within* a stage (like $project or $group) to selectively remove elements from an **array** *within* a document."
            },
            jp: {
                title: "$match 対 $filter（集約）",
                body: "MongoDB の集約において、**$match** ステージ（ドキュメントをフィルタリングする）と **$filter** オペレーター（配列を操作する）の違いは何ですか？",
                solution: " **$match** ステージは、後続のステージに渡されるドキュメントの数を効率的に減らすために、パイプラインの **早い段階** で適用されます。 **$filter** オペレーターは、ステージ内（$project や $group など）で、ドキュメント *内* の **配列** から要素を選択的に削除するために使用されます。"
            },
            vi: {
                title: "$match so với $filter (Aggregation)",
                body: "Trong MongoDB aggregation, sự khác biệt giữa stage **$match** (lọc document) và toán tử **$filter** (thao tác trên mảng) là gì?",
                solution: "Stage **$match** được áp dụng **sớm** trong pipeline để giảm hiệu quả số lượng document được chuyển đến các stage tiếp theo. Toán tử **$filter** được sử dụng *bên trong* một stage (như $project hoặc $group) để loại bỏ có chọn lọc các phần tử khỏi một **mảng** *bên trong* một document."
            }
        }
    },
    {
        _id: "nosql-m-045",
        difficulty: "middle",
        tags: ["Graph", "terms", "traversal", "Dijkstra"],
        content: {
            en: {
                title: "Graph Algorithms",
                body: "Name one classical graph algorithm that is frequently implemented or provided as a built-in feature in Graph databases for analyzing network structure or reachability (besides shortest path).",
                solution: "PageRank, Louvain Modularity (Community Detection), Centrality Algorithms (e.g., Betweenness, Closeness), or Connected Components."
            },
            jp: {
                title: "グラフアルゴリズム",
                body: "ネットワーク構造または到達可能性を分析するために、グラフデータベースで頻繁に実装または組み込み機能として提供されている古典的なグラフアルゴリズムを 1 つ挙げてください（最短パスを除く）。",
                solution: "PageRank、Louvain Modularity（コミュニティ検出）、中心性アルゴリズム（例：媒介中心性、近接中心性）、または連結コンポーネント。"
            },
            vi: {
                title: "Thuật toán Graph",
                body: "Kể tên một thuật toán graph cổ điển thường được triển khai hoặc cung cấp dưới dạng tính năng tích hợp sẵn trong các cơ sở dữ liệu Graph để phân tích cấu trúc mạng hoặc khả năng tiếp cận (ngoài đường đi ngắn nhất).",
                solution: "PageRank, Louvain Modularity (Phát hiện Cộng đồng), Centrality Algorithms (ví dụ: Betweenness, Closeness), hoặc Connected Components."
            }
        }
    },
    {
        _id: "nosql-m-046",
        difficulty: "middle",
        tags: ["Key-Value", "Redis", "data structure", "Geospatial"],
        content: {
            en: {
                title: "Geospatial Indexing (Redis)",
                body: "Which Redis data structure is used to implement its geospatial indexing features (GEOADD, GEORADIUS), and what underlying mathematical concept makes these queries efficient?",
                solution: "The **Sorted Set** data structure is used. Efficiency is achieved using **Geohash encoding**, which translates 2D coordinates into a single sortable string value, allowing for range queries on the Sorted Set to approximate distance."
            },
            jp: {
                title: "地理空間インデックス（Redis）",
                body: "Redis の地理空間インデックス機能（GEOADD、GEORADIUS）を実装するためにどの Redis データ構造が使用されていますか？また、これらのクエリを効率的にする根底にある数学的概念は何ですか？",
                solution: " **Sorted Set** データ構造が使用されます。効率は **Geohash エンコーディング** を使用して達成されます。これにより、2D 座標が単一のソート可能な文字列値に変換され、Sorted Set の範囲クエリによって距離を近似できます。"
            },
            vi: {
                title: "Geospatial Indexing (Redis)",
                body: "Cấu trúc dữ liệu Redis nào được sử dụng để triển khai các tính năng lập index không gian địa lý của nó (GEOADD, GEORADIUS), và khái niệm toán học cơ bản nào làm cho các truy vấn này hiệu quả?",
                solution: "Cấu trúc dữ liệu **Sorted Set** được sử dụng. Hiệu quả đạt được bằng cách sử dụng **mã hóa Geohash**, dịch các tọa độ 2D thành một giá trị chuỗi có thể sắp xếp duy nhất, cho phép các truy vấn phạm vi trên Sorted Set để xấp xỉ khoảng cách."
            }
        }
    },
    {
        _id: "nosql-m-047",
        difficulty: "middle",
        tags: ["Column-Family", "consistency", "conflict resolution"],
        content: {
            en: {
                title: "Last Write Wins (LWW)",
                body: "Column-Family stores typically use the **Last Write Wins (LWW)** strategy for conflict resolution. Explain how LWW works and what component of the data is used to determine the 'latest' write.",
                solution: "LWW resolves write conflicts by selecting the data version with the **highest timestamp** as the definitive value. The timestamp is generally a system-generated microsecond timestamp associated with the written cell/value. Data is written to all replicas, but only the latest timestamp survives."
            },
            jp: {
                title: "最終書き込み優先（LWW）",
                body: "カラムファミリーストアは通常、競合解決のために **最終書き込み優先（LWW）** 戦略を使用します。LWW がどのように機能するか、そしてデータのどのコンポーネントが「最新の」書き込みを決定するために使用されるかを説明してください。",
                solution: "LWW は、**最高のタイムスタンプ** を持つデータバージョンを決定的な値として選択することにより、書き込み競合を解決します。タイムスタンプは通常、書き込まれたセル/値に関連付けられたシステム生成のマイクロ秒タイムスタンプです。データはすべてのレプリカに書き込まれますが、最新のタイムスタンプのみが残ります。"
            },
            vi: {
                title: "Last Write Wins (LWW)",
                body: "Column-Family store thường sử dụng chiến lược **Last Write Wins (LWW)** để giải quyết xung đột. Giải thích cách LWW hoạt động và thành phần nào của dữ liệu được sử dụng để xác định lần ghi 'mới nhất'.",
                solution: "LWW giải quyết xung đột ghi bằng cách chọn phiên bản dữ liệu có **dấu thời gian cao nhất** làm giá trị dứt khoát. Dấu thời gian thường là dấu thời gian micro giây do hệ thống tạo ra được liên kết với ô/giá trị đã ghi. Dữ liệu được ghi vào tất cả các bản sao, nhưng chỉ dấu thời gian mới nhất tồn tại."
            }
        }
    },
    {
        _id: "nosql-m-048",
        difficulty: "middle",
        tags: ["Event Sourcing", "CQRS", "Read Model"],
        content: {
            en: {
                title: "Read Model (CQRS)",
                body: "In the **CQRS** pattern, what is the fundamental purpose of the **Query** side (Read Model), and how is it populated?",
                solution: "The Query side is responsible for handling all **read queries**, providing highly optimized, denormalized representations of the data specifically tuned for application display needs. It is populated by **subscribing to events** published by the Command side and updating its projection accordingly."
            },
            jp: {
                title: "読み取りモデル (CQRS)",
                body: " **CQRS** パターンにおいて、**Query** 側（読み取りモデル）の根本的な目的は何ですか？また、それはどのように入力されますか？",
                solution: "Query 側は、すべての **読み取りクエリ** の処理を担当し、アプリケーションの表示ニーズに合わせて特別に調整された、高度に最適化された非正規化されたデータの表現を提供します。これは、Command 側によって発行された **イベントを購読し**、それに応じてそのプロジェクションを更新することによって入力されます。"
            },
            vi: {
                title: "Read Model (CQRS)",
                body: "Trong mô hình **CQRS**, mục đích cơ bản của phía **Query** (Read Model) là gì, và nó được điền (populate) như thế nào?",
                solution: "Phía Query chịu trách nhiệm xử lý tất cả các **truy vấn đọc**, cung cấp các biểu diễn dữ liệu phi chuẩn hóa, được tối ưu hóa cao, được điều chỉnh đặc biệt cho nhu cầu hiển thị của ứng dụng. Nó được điền bằng cách **đăng ký các sự kiện** được xuất bản bởi phía Command và cập nhật hình chiếu (projection) của nó cho phù hợp."
            }
        }
    },
    {
        _id: "nosql-m-049",
        difficulty: "middle",
        tags: ["MongoDB", "aggregation", "performance"],
        content: {
            en: {
                title: "Optimizing Aggregation ($sort, $match)",
                body: "When designing an Aggregation Pipeline, why is it generally recommended to place the **$match** stage and the **$sort** stage as early as possible in the pipeline?",
                solution: "Placing **$match** early quickly filters the dataset, reducing the number of documents passed to subsequent, often more expensive, stages. Placing **$sort** early allows the stage to potentially use an index to order the data, avoiding an expensive in-memory sort later in the pipeline."
            },
            jp: {
                title: "集約の最適化（$sort、$match）",
                body: "集約パイプラインを設計するとき、**$match** ステージと **$sort** ステージをパイプラインのできるだけ早い段階に配置することが一般的に推奨されるのはなぜですか？",
                solution: " **$match** を早い段階に配置すると、データセットが迅速にフィルタリングされ、後続の（多くの場合、より高価な）ステージに渡されるドキュメントの数が減少します。 **$sort** を早い段階に配置すると、ステージがインデックスを使用してデータを順序付ける可能性があり、パイプラインの後半での高価なインメモリソートを回避できます。"
            },
            vi: {
                title: "Tối ưu hóa Aggregation ($sort, $match)",
                body: "Khi thiết kế một Aggregation Pipeline, tại sao việc đặt stage **$match** và stage **$sort** càng sớm càng tốt trong pipeline lại được khuyến nghị chung?",
                solution: "Việc đặt **$match** sớm sẽ nhanh chóng lọc tập dữ liệu, giảm số lượng document được chuyển đến các stage tiếp theo, vốn thường tốn kém hơn. Việc đặt **$sort** sớm cho phép stage có khả năng sử dụng index để sắp xếp dữ liệu, tránh một thao tác sắp xếp trong bộ nhớ tốn kém ở giai đoạn sau của pipeline."
            }
        }
    },
    {
        _id: "nosql-m-050",
        difficulty: "middle",
        tags: ["sharding", "distributed systems", "Consistent Hashing"],
        content: {
            en: {
                title: "Consistent Hashing (Data Distribution)",
                body: "Explain how **Consistent Hashing** (often used by distributed NoSQL stores) solves the problem of minimizing data movement when a node is added to or removed from a distributed cluster.",
                solution: "Consistent Hashing maps both data keys and cluster nodes onto a circular hash ring. When a node is added or removed, only the keys nearest to the node's position on the ring need to be remapped and moved, leaving the vast majority of the data distribution unaffected, which is superior to standard modulo hashing."
            },
            jp: {
                title: "コンシステントハッシング（データ分散）",
                body: "**コンシステントハッシング**（分散 NoSQL ストアでよく使用される）が、分散クラスターにノードが追加または削除されたときにデータの移動を最小限に抑える問題をどのように解決するかを説明してください。",
                solution: "コンシステントハッシングは、データキーとクラスターノードの両方を円形のハッシュリングにマッピングします。ノードが追加または削除された場合、リング上のノードの位置に最も近いキーのみを再マッピングして移動する必要があり、データの大部分の分布は影響を受けず、標準のモジュロハッシングよりも優れています。"
            },
            vi: {
                title: "Consistent Hashing (Phân phối Dữ liệu)",
                body: "Giải thích làm thế nào **Consistent Hashing** (thường được sử dụng bởi các store NoSQL phân tán) giải quyết vấn đề giảm thiểu việc di chuyển dữ liệu khi một node được thêm vào hoặc xóa khỏi một cluster phân tán.",
                solution: "Consistent Hashing ánh xạ cả khóa dữ liệu và các node cluster lên một vòng tròn băm (hash ring) hình tròn. Khi một node được thêm vào hoặc xóa đi, chỉ những khóa gần vị trí của node trên vòng tròn mới cần được ánh xạ lại và di chuyển, để lại phần lớn sự phân phối dữ liệu không bị ảnh hưởng, điều này vượt trội so với băm modulo tiêu chuẩn."
            }
        }
    }
];

// Để import vào project frontend
export default nosqlMiddleQuestions;