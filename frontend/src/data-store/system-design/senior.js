const systemDesignSeniorQuestions = [
  {
    _id: "sd-s-001",
    difficulty: "senior",
    tags: ["consensus", "distributed system", "leader election"],
    content: {
      en: {
        title: "Raft vs Paxos",
        body: "Explain the primary reason why the **Raft** consensus algorithm is often preferred over **Paxos** in modern distributed systems.",
        solution: "Raft was designed to be **more understandable** than Paxos while being functionally equivalent. Its mechanism for **leader election** and log replication is simpler and more explicit, reducing implementation complexity and bugs, making it easier to reason about system state."
      },
      jp: {
        title: "RaftとPaxosの比較",
        body: "最新の分散システムにおいて、**Raft** コンセンサスアルゴリズムが **Paxos** よりも好まれる主な理由を説明しなさい。",
        solution: "Raftは、機能的には同等でありながら、Paxosよりも**理解しやすい**ように設計されました。その**リーダー選出**とログ複製のためのメカニズムはよりシンプルで明確であり、実装の複雑さとバグを減らし、システムの状態について推論しやすくします。"
      },
      vi: {
        title: "Raft và Paxos",
        body: "Giải thích lý do chính tại sao thuật toán đồng thuận **Raft** thường được ưu tiên hơn **Paxos** trong các hệ thống phân tán hiện đại.",
        solution: "Raft được thiết kế để **dễ hiểu hơn** Paxos trong khi vẫn có chức năng tương đương. Cơ chế **bầu chọn lãnh đạo (leader election)** và sao chép log của nó đơn giản và rõ ràng hơn, giảm độ phức tạp khi triển khai và lỗi, giúp dễ dàng suy luận về trạng thái hệ thống hơn."
      }
    }
  },
  {
    _id: "sd-s-002",
    difficulty: "senior",
    tags: ["data modeling", "database", "trade-off"],
    content: {
      en: {
        title: "Normalization vs Denormalization Trade-off",
        body: "Describe a scenario where excessive denormalization in a highly available, write-heavy system could lead to a severe consistency problem that is difficult to fix.",
        solution: "Excessive denormalization leads to **redundant data**. In a write-heavy system, every change to a primary entity must be replicated across many denormalized documents/tables. If the process updating these copies fails (e.g., due to eventual consistency lag or a transaction failure), it results in **Stale or Inconsistent data** across the system, requiring complex reconciliation logic."
      },
      jp: {
        title: "正規化 vs 非正規化のトレードオフ",
        body: "可用性の高い書き込み頻度の高いシステムで過度な非正規化を行うと、修正が困難な深刻な一貫性の問題につながる可能性があるシナリオを説明しなさい。",
        solution: "過度な非正規化は**冗長なデータ**につながります。書き込み頻度の高いシステムでは、プライマリエンティティへのすべての変更を多数の非正規化されたドキュメント/テーブルに複製する必要があります。これらのコピーを更新するプロセスが失敗した場合（例：結果整合性の遅延やトランザクションの失敗による）、システム全体で**古いデータまたは一貫性のないデータ**が発生し、複雑な調整ロジックが必要になります。"
      },
      vi: {
        title: "Đánh đổi Normalization vs Denormalization",
        body: "Mô tả một kịch bản mà việc phi chuẩn hóa quá mức trong một hệ thống có tính sẵn sàng cao, nặng về ghi (write-heavy) có thể dẫn đến vấn đề nhất quán nghiêm trọng khó khắc phục.",
        solution: "Phi chuẩn hóa quá mức dẫn đến **dữ liệu dư thừa**. Trong một hệ thống nặng về ghi, mọi thay đổi đối với một thực thể chính phải được sao chép trên nhiều tài liệu/bảng đã phi chuẩn hóa. Nếu quá trình cập nhật các bản sao này thất bại (ví dụ: do độ trễ nhất quán cuối cùng hoặc lỗi giao dịch), nó sẽ dẫn đến **dữ liệu cũ hoặc không nhất quán** trên toàn hệ thống, đòi hỏi logic đối chiếu phức tạp."
      }
    }
  },
  {
    _id: "sd-s-003",
    difficulty: "senior",
    tags: ["caching", "design", "distributed system"],
    content: {
      en: {
        title: "Write-Through vs Write-Back",
        body: "For a critical service where data durability and consistency are paramount, which cache write strategy (**Write-Through** or **Write-Back**) would you choose, and what is its main drawback?",
        solution: "Choose **Write-Through**. It writes data simultaneously to both the cache and the permanent store (database), ensuring data is durable before the client receives a success response. The main drawback is **increased write latency**, as the operation is not complete until both writes finish."
      },
      jp: {
        title: "Write-Through vs Write-Back",
        body: "データの耐久性と一貫性が最優先される重要なサービスのために、どのキャッシュ書き込み戦略（**Write-Through**または**Write-Back**）を選択しますか、またその主な欠点は何ですか？",
        solution: "**Write-Through** を選択します。これは、データがキャッシュと永続ストア（データベース）の両方に同時に書き込まれるため、クライアントが成功応答を受け取る前にデータが耐久性があることを保証します。主な欠点は、両方の書き込みが完了するまで操作が完了しないため、**書き込みレイテンシが増加する**ことです。"
      },
      vi: {
        title: "Write-Through và Write-Back",
        body: "Đối với một dịch vụ quan trọng mà độ bền và tính nhất quán của dữ liệu là tối quan trọng, bạn sẽ chọn chiến lược ghi cache nào (**Write-Through** hay **Write-Back**), và nhược điểm chính của nó là gì?",
        solution: "Chọn **Write-Through**. Nó ghi dữ liệu đồng thời vào cả cache và kho lưu trữ vĩnh viễn (cơ sở dữ liệu), đảm bảo dữ liệu bền vững trước khi máy khách nhận được phản hồi thành công. Nhược điểm chính là **tăng độ trễ ghi (write latency)**, vì thao tác chưa hoàn thành cho đến khi cả hai lần ghi kết thúc."
      }
    }
  },
  {
    _id: "sd-s-004",
    difficulty: "senior",
    tags: ["scaling", "messaging", "ordering"],
    content: {
      en: {
        title: "Ordering in Distributed Queues",
        body: "How do distributed messaging systems (like Kafka or RabbitMQ with partitions) typically ensure **message ordering** for consumers, and what is the trade-off in scalability?",
        solution: "Ordering is ensured by having all related messages go through the **same partition or queue** and be processed by a **single consumer** instance tied to that partition. The trade-off is that scaling the number of consumers beyond the number of partitions does not increase throughput for that topic, limiting **horizontal scalability** for strictly ordered data."
      },
      jp: {
        title: "分散キューにおける順序付け",
        body: "分散メッセージングシステム（Kafkaやパーティションを持つRabbitMQなど）は、コンシューマーに対して**メッセージの順序付け**をどのように保証しますか、またスケーラビリティにおけるトレードオフは何ですか？",
        solution: "順序付けは、関連するすべてのメッセージが**同じパーティションまたはキュー**を通過し、そのパーティションに結び付けられた**単一のコンシューマー**インスタンスによって処理されることによって保証されます。トレードオフは、コンシューマーの数をパーティションの数を超えてスケーリングしても、そのトピックのスループットは増加せず、厳密に順序付けられたデータの**水平スケーラビリティ**が制限されることです。"
      },
      vi: {
        title: "Thứ tự trong Distributed Queues",
        body: "Các hệ thống nhắn tin phân tán (như Kafka hoặc RabbitMQ có phân vùng) thường đảm bảo **thứ tự tin nhắn** cho người tiêu thụ như thế nào, và sự đánh đổi về khả năng mở rộng là gì?",
        solution: "Thứ tự được đảm bảo bằng cách cho tất cả các tin nhắn liên quan đi qua **cùng một phân vùng hoặc hàng đợi** và được xử lý bởi một **phiên bản consumer duy nhất** gắn với phân vùng đó. Sự đánh đổi là việc mở rộng số lượng consumer vượt quá số lượng phân vùng sẽ không làm tăng thông lượng cho chủ đề đó, giới hạn **khả năng mở rộng ngang** cho dữ liệu được sắp xếp nghiêm ngặt."
      }
    }
  },
  {
    _id: "sd-s-005",
    difficulty: "senior",
    tags: ["architecture", "microservices", "data consistency"],
    content: {
      en: {
        title: "Saga Pattern Compensation",
        body: "When implementing the **Saga Pattern** for a distributed transaction across microservices, what is the role of a **Compensating Transaction**?",
        solution: "A Compensating Transaction is executed when a step in the Saga fails, to **undo the effects** of the previously successful transactions and restore the system to a consistent state. It does not literally 'rollback' like an ACID transaction, but performs a domain-specific action to reverse the outcome (e.g., refunding a payment)."
      },
      jp: {
        title: "Sagaパターン補償トランザクション",
        body: "マイクロサービス全体にわたる分散トランザクションのために**Sagaパターン**を実装する際、**補償トランザクション**の役割は何ですか？",
        solution: "補償トランザクションは、Sagaのあるステップが失敗したときに実行され、以前に成功したトランザクションの**影響を取り消し**、システムを一貫した状態に戻します。これはACIDトランザクションのように文字通り「ロールバック」するのではなく、結果を元に戻すためにドメイン固有のアクションを実行します（例：支払いの払い戻し）。"
      },
      vi: {
        title: "Bù trừ trong Mô hình Saga",
        body: "Khi triển khai **Mô hình Saga** cho một giao dịch phân tán trên các microservices, vai trò của **Giao dịch Bù trừ (Compensating Transaction)** là gì?",
        solution: "Giao dịch Bù trừ được thực hiện khi một bước trong Saga thất bại, để **hoàn tác các tác động** của các giao dịch thành công trước đó và khôi phục hệ thống về trạng thái nhất quán. Nó không thực sự 'rollback' như một giao dịch ACID, mà thực hiện một hành động cụ thể theo nghiệp vụ để đảo ngược kết quả (ví dụ: hoàn tiền thanh toán)."
      }
    }
  },
  {
    _id: "sd-s-006",
    difficulty: "senior",
    tags: ["networking", "rpc", "protocol"],
    content: {
      en: {
        title: "Head-of-Line Blocking in HTTP/1.1",
        body: "Explain the cause of **Head-of-Line (HOL) Blocking** in HTTP/1.1 and how HTTP/2 addresses this issue.",
        solution: "In HTTP/1.1, pipelining meant that responses had to be received in the order requests were sent, even if a later request finished first. A slow response blocked all subsequent responses on that TCP connection. HTTP/2 eliminates this by using **multiplexing** (streams) over a single TCP connection, allowing independent requests/responses to be interleaved."
      },
      jp: {
        title: "HTTP/1.1のHead-of-Line Blocking",
        body: "HTTP/1.1における**Head-of-Line (HOL) Blocking**の原因を説明し、HTTP/2がこの問題にどのように対処するかを述べなさい。",
        solution: "HTTP/1.1では、パイプライン処理は、後のリクエストが先に完了した場合でも、リクエストが送信された順序で応答を受信する必要があることを意味しました。遅い応答は、そのTCP接続上のすべての後続の応答をブロックしました。HTTP/2は、単一のTCP接続上で**多重化（ストリーム）**を使用することでこれを排除し、独立したリクエスト/応答をインターリーブできるようにします。"
      },
      vi: {
        title: "Head-of-Line Blocking trong HTTP/1.1",
        body: "Giải thích nguyên nhân của **Head-of-Line (HOL) Blocking** trong HTTP/1.1 và cách HTTP/2 giải quyết vấn đề này.",
        solution: "Trong HTTP/1.1, việc xếp hàng yêu cầu (pipelining) có nghĩa là các phản hồi phải được nhận theo thứ tự các yêu cầu đã được gửi, ngay cả khi một yêu cầu sau đó kết thúc trước. Một phản hồi chậm đã chặn tất cả các phản hồi tiếp theo trên kết nối TCP đó. HTTP/2 loại bỏ điều này bằng cách sử dụng **ghép kênh (multiplexing)** (streams) trên một kết nối TCP duy nhất, cho phép các yêu cầu/phản hồi độc lập được xen kẽ."
      }
    }
  },
  {
    _id: "sd-s-007",
    difficulty: "senior",
    tags: ["database", "replication", "consistency"],
    content: {
      en: {
        title: "Quorum Reads/Writes",
        body: "In a distributed key-value store, explain the concept of **Quorum Reads** and **Quorum Writes** ($R+W > N$), and why this is used.",
        solution: "Quorum Writes (W) require confirmation from a majority ($W > N/2$) of $N$ replicas before confirming the write. Quorum Reads (R) read from a majority ($R > N/2$) of $N$ replicas. When $R+W > N$, it guarantees **Strong Consistency** because the read set is guaranteed to overlap with the most recent write set, retrieving the latest data."
      },
      jp: {
        title: "クォーラムの読み取り/書き込み",
        body: "分散キーバリューストアにおいて、**クォーラムの読み取り**と**クォーラムの書き込み**（$R+W > N$）の概念を説明し、これが使用される理由を述べなさい。",
        solution: "クォーラム書き込み（W）は、書き込みを確認する前に、$N$個のレプリカの過半数（$W > N/2$）からの確認を必要とします。クォーラム読み取り（R）は、$N$個のレプリカの過半数（$R > N/2$）から読み取ります。$R+W > N$ の場合、読み取りセットが最新の書き込みセットと重複することが保証され、最新のデータが取得されるため、**強い一貫性**が保証されます。"
      },
      vi: {
        title: "Đọc/Ghi Quorum",
        body: "Trong một kho lưu trữ khóa-giá trị phân tán, giải thích khái niệm **Quorum Reads** và **Quorum Writes** ($R+W > N$), và tại sao điều này được sử dụng.",
        solution: "Quorum Writes (W) yêu cầu xác nhận từ đa số ($W > N/2$) trong số $N$ bản sao trước khi xác nhận ghi. Quorum Reads (R) đọc từ đa số ($R > N/2$) trong số $N$ bản sao. Khi $R+W > N$, nó đảm bảo **Tính nhất quán Mạnh (Strong Consistency)** vì tập hợp đọc được đảm bảo chồng chéo với tập hợp ghi gần đây nhất, truy xuất dữ liệu mới nhất."
      }
    }
  },
  {
    _id: "sd-s-008",
    difficulty: "senior",
    tags: ["system design", "scaling", "latency"],
    content: {
      en: {
        title: "Tail Latency Reduction",
        body: "What is 'Tail Latency' (P99+), and describe one advanced technique used to reduce it in large-scale services.",
        solution: "Tail Latency refers to the response time experienced by the slowest fraction of users (99th percentile and above). An advanced reduction technique is **Request Hedging (or Backup Requests)**, where the system sends a second, identical request to another server if the first request hasn't returned within a small deadline, using whichever response arrives first."
      },
      jp: {
        title: "テールレイテンシの削減",
        body: "「テールレイテンシ」（P99+）とは何ですか、また大規模サービスでそれを削減するために使用される高度な手法を1つ説明しなさい。",
        solution: "テールレイテンシは、最も遅いユーザーの割合（99パーセンタイル以上）が経験する応答時間のことです。高度な削減手法は**リクエストヘッジング（またはバックアップリクエスト）**であり、最初の要求が短い期限内に戻らない場合、システムは2番目の同一の要求を別のサーバーに送信し、最初に到着した応答を使用します。"
      },
      vi: {
        title: "Giảm thiểu Tail Latency",
        body: "'Tail Latency' (P99+) là gì, và mô tả một kỹ thuật nâng cao được sử dụng để giảm nó trong các dịch vụ quy mô lớn.",
        solution: "Tail Latency đề cập đến thời gian phản hồi mà một phần nhỏ người dùng chậm nhất (phân vị thứ 99 trở lên) trải nghiệm. Một kỹ thuật giảm thiểu nâng cao là **Request Hedging (hoặc Backup Requests)**, trong đó hệ thống gửi yêu cầu thứ hai, giống hệt nhau đến một máy chủ khác nếu yêu cầu đầu tiên chưa trả về trong một thời hạn ngắn, sử dụng phản hồi nào đến trước."
      }
    }
  },
  {
    _id: "sd-s-009",
    difficulty: "senior",
    tags: ["data modeling", "search", "denormalization"],
    content: {
      en: {
        title: "Search Index Optimization",
        body: "When integrating a relational database with a full-text search engine (like Elasticsearch), what is the primary benefit of **denormalizing** the data into the search index?",
        solution: "The primary benefit is **Read Performance**. Search engines are optimized for fast reads. Denormalizing means the search index document contains all the necessary fields from related tables (e.g., product, seller, reviews), allowing a single search query to retrieve a complete result set without requiring expensive **JOIN** operations back to the primary database."
      },
      jp: {
        title: "検索インデックスの最適化",
        body: "リレーショナルデータベースと全文検索エンジン（Elasticsearchなど）を統合する際、データを検索インデックスに**非正規化**することの主な利点は何ですか？",
        solution: "主な利点は**読み取りパフォーマンス**です。検索エンジンは高速な読み取りのために最適化されています。非正規化とは、検索インデックスドキュメントに、関連するテーブル（例：製品、販売者、レビュー）からの必要なすべてのフィールドが含まれることを意味し、単一の検索クエリで完全な結果セットを取得でき、プライマリデータベースへの高コストな**JOIN**操作を必要としません。"
      },
      vi: {
        title: "Tối ưu hóa Search Index",
        body: "Khi tích hợp cơ sở dữ liệu quan hệ với công cụ tìm kiếm toàn văn (như Elasticsearch), lợi ích chính của việc **phi chuẩn hóa** dữ liệu vào chỉ mục tìm kiếm là gì?",
        solution: "Lợi ích chính là **Hiệu suất Đọc (Read Performance)**. Các công cụ tìm kiếm được tối ưu hóa cho việc đọc nhanh. Phi chuẩn hóa có nghĩa là tài liệu chỉ mục tìm kiếm chứa tất cả các trường cần thiết từ các bảng liên quan (ví dụ: sản phẩm, người bán, đánh giá), cho phép một truy vấn tìm kiếm duy nhất truy xuất một tập hợp kết quả hoàn chỉnh mà không yêu cầu các thao tác **JOIN** tốn kém trở lại cơ sở dữ liệu chính."
      }
    }
  },
  {
    _id: "sd-s-010",
    difficulty: "senior",
    tags: ["security", "encryption", "data in transit"],
    content: {
      en: {
        title: "Zero Trust Architecture",
        body: "In the context of a **Zero Trust Architecture** (ZTA) in a microservices environment, why is it necessary to secure and encrypt *internal* service-to-service communication?",
        solution: "ZTA dictates 'Never Trust, Always Verify.' Securing internal communication (often via mTLS/service mesh) ensures that even if an external attacker breaches the perimeter or an internal machine is compromised, they cannot move laterally or easily access sensitive data because every service interaction must be **authenticated** and **authorized**."
      },
      jp: {
        title: "ゼロトラストアーキテクチャ",
        body: "マイクロサービス環境における**ゼロトラストアーキテクチャ**（ZTA）のコンテキストで、*内部*サービス間通信を保護および暗号化することが必要なのはなぜですか？",
        solution: "ZTAは「決して信頼せず、常に検証する」ことを規定しています。内部通信を保護すること（通常はmTLS/サービスメッシュ経由）により、外部の攻撃者が境界を侵害したり、内部マシンが侵害されたりしても、すべてのサービス相互作用が**認証**され、**認可**されなければならないため、横方向に移動したり機密データに簡単にアクセスしたりすることができなくなります。"
      },
      vi: {
        title: "Kiến trúc Zero Trust",
        body: "Trong bối cảnh của **Kiến trúc Zero Trust (ZTA)** trong môi trường microservices, tại sao việc bảo mật và mã hóa giao tiếp *nội bộ* giữa các service là cần thiết?",
        solution: "ZTA quy định 'Không bao giờ tin tưởng, Luôn luôn xác minh.' Bảo mật giao tiếp nội bộ (thường thông qua mTLS/service mesh) đảm bảo rằng ngay cả khi kẻ tấn công bên ngoài vượt qua được vành đai bảo vệ hoặc một máy nội bộ bị xâm nhập, chúng không thể di chuyển ngang hoặc dễ dàng truy cập dữ liệu nhạy cảm vì mọi tương tác dịch vụ phải được **xác thực** và **ủy quyền**."
      }
    }
  },
  {
    _id: "sd-s-011",
    difficulty: "senior",
    tags: ["system design", "id generation", "scaling"],
    content: {
      en: {
        title: "Globally Unique IDs at Scale",
        body: "When designing a massive-scale distributed system (e.g., Twitter/X status IDs), what is one non-database method used to generate globally unique, time-sortable IDs, and what is its structure?",
        solution: "One common method is **Snowflake ID** (used by Twitter). This is a 64-bit integer ID that is **time-sortable** and includes: a timestamp (41 bits), a machine/node ID (10 bits), and a sequence number (12 bits). This approach generates unique IDs without requiring synchronization across the central database."
      },
      jp: {
        title: "大規模なグローバルに一意なID",
        body: "大規模な分散システム（例：Twitter/XのステータスID）を設計する際、グローバルに一意で時間でソート可能なIDを生成するために使用される非データベースの手法を1つ挙げ、その構造を述べなさい。",
        solution: "一般的な方法の1つは **Snowflake ID**（Twitterで使用されている）です。これは**時間でソート可能**な64ビット整数のIDであり、タイムスタンプ（41ビット）、マシン/ノードID（10ビット）、およびシーケンス番号（12ビット）を含みます。このアプローチは、中央データベースでの同期を必要とせずに一意のIDを生成します。"
      },
      vi: {
        title: "IDs duy nhất toàn cầu ở quy mô lớn",
        body: "Khi thiết kế một hệ thống phân tán quy mô lớn (ví dụ: ID trạng thái của Twitter/X), một phương pháp không dựa vào cơ sở dữ liệu được sử dụng để tạo ID duy nhất toàn cầu, có thể sắp xếp theo thời gian là gì, và cấu trúc của nó?",
        solution: "Một phương pháp phổ biến là **Snowflake ID** (được Twitter sử dụng). Đây là một ID số nguyên 64-bit có thể **sắp xếp theo thời gian** và bao gồm: dấu thời gian (41 bit), ID máy/node (10 bit), và số thứ tự (12 bit). Cách tiếp cận này tạo ra các ID duy nhất mà không yêu cầu đồng bộ hóa trên cơ sở dữ liệu trung tâm."
      }
    }
  },
  {
    _id: "sd-s-012",
    difficulty: "senior",
    tags: ["scaling", "caching", "hotspots"],
    content: {
      en: {
        title: "Mitigating Cache Hotspots",
        body: "A system is experiencing severe cache thrashing because a few popular items (e.g., a viral video) create a **hotspot** on a single cache server. What advanced technique can be used to mitigate this?",
        solution: "Use **Cache Spreading (or Fanout)**. Instead of mapping a single hot key to one cache instance, create multiple copies of the hot item across different cache servers. Randomly selecting one of the replicas for reads distributes the load and prevents a single server from being overwhelmed."
      },
      jp: {
        title: "キャッシュホットスポットの軽減",
        body: "いくつかの人気のあるアイテム（例：バイラルビデオ）が単一のキャッシュサーバー上で**ホットスポット**を作成するため、システムが深刻なキャッシングスラッシングを経験しています。これを軽減するために使用できる高度な手法は何ですか？",
        solution: "**キャッシュ拡散（またはファンアウト）**を使用します。単一のホットキーを1つのキャッシュインスタンスにマッピングする代わりに、ホットアイテムの複数のコピーを異なるキャッシュサーバー間で作成します。読み取りのためにレプリカの1つをランダムに選択することで、負荷が分散され、単一のサーバーが圧倒されるのを防ぎます。"
      },
      vi: {
        title: "Giảm thiểu Cache Hotspots",
        body: "Một hệ thống đang gặp phải tình trạng cache thrashing nghiêm trọng vì một vài mục phổ biến (ví dụ: một video lan truyền) tạo ra **hotspot** trên một máy chủ cache duy nhất. Kỹ thuật nâng cao nào có thể được sử dụng để giảm thiểu điều này?",
        solution: "Sử dụng **Cache Spreading (hoặc Fanout)**. Thay vì ánh xạ một khóa nóng duy nhất tới một phiên bản cache, hãy tạo nhiều bản sao của mục nóng đó trên các máy chủ cache khác nhau. Việc chọn ngẫu nhiên một trong các bản sao để đọc sẽ phân tán tải và ngăn một máy chủ duy nhất bị quá tải."
      }
    }
  },
  {
    _id: "sd-s-013",
    difficulty: "senior",
    tags: ["system design", "cost", "cloud"],
    content: {
      en: {
        title: "Cloud Cost Optimization",
        body: "In a cloud environment, what is the 'EBS optimization' trade-off, and why is minimizing EBS/disk I/O a critical focus for cost control in large data systems?",
        solution: "EBS (Elastic Block Store) I/O is often a **variable, consumption-based cost** separate from compute/CPU. The trade-off is between **cost** and **latency**. Minimizing I/O (e.g., through better caching, better query planning, or consolidating small files) is critical because excessive I/O operations directly translate to higher monthly cloud bills, even if the CPU utilization is low."
      },
      jp: {
        title: "クラウドコストの最適化",
        body: "クラウド環境において、「EBS最適化」のトレードオフは何ですか、また大規模データシステムでEBS/ディスクI/Oを最小限に抑えることがコスト管理にとって重要な焦点となるのはなぜですか？",
        solution: "EBS（Elastic Block Store）I/Oは、コンピューティング/CPUとは別の**変動的で消費ベースのコスト**であることがよくあります。トレードオフは**コスト**と**レイテンシ**の間にあります。過剰なI/O操作は、CPU使用率が低くても、直接的により高い月額クラウド請求に変換されるため、I/Oを最小限に抑えること（例：より良いキャッシング、より良いクエリ計画、または小さなファイルの統合を通じて）が重要です。"
      },
      vi: {
        title: "Tối ưu hóa Chi phí Cloud",
        body: "Trong môi trường đám mây, sự đánh đổi 'tối ưu hóa EBS' là gì, và tại sao việc giảm thiểu EBS/disk I/O là một trọng tâm quan trọng để kiểm soát chi phí trong các hệ thống dữ liệu lớn?",
        solution: "I/O của EBS (Elastic Block Store) thường là **chi phí biến đổi, dựa trên mức tiêu thụ** tách biệt với chi phí tính toán/CPU. Sự đánh đổi là giữa **chi phí** và **độ trễ**. Giảm thiểu I/O (ví dụ: thông qua việc caching tốt hơn, lập kế hoạch truy vấn tốt hơn, hoặc hợp nhất các tệp nhỏ) là rất quan trọng vì các thao tác I/O quá mức trực tiếp dẫn đến hóa đơn đám mây hàng tháng cao hơn, ngay cả khi mức sử dụng CPU thấp."
      }
    }
  },
  {
    _id: "sd-s-014",
    difficulty: "senior",
    tags: ["database", "nosql", "vector"],
    content: {
      en: {
        title: "Vector Database Role",
        body: "In an architecture involving Generative AI or advanced search, what is the primary function of a **Vector Database** (or Vector Index) and how does it store data?",
        solution: "Its primary function is to store and efficiently query **Vector Embeddings** (numerical representations of objects like text, images, or audio). It uses algorithms like K-Nearest Neighbors (KNN) or Approximate Nearest Neighbors (ANN) to quickly find items that are **semantically similar** to a query vector, not just exact matches."
      },
      jp: {
        title: "ベクターデータベースの役割",
        body: "生成AIや高度な検索を含むアーキテクチャにおいて、**ベクターデータベース**（またはベクターインデックス）の主な機能は何ですか、またデータをどのように保存しますか？",
        solution: "その主な機能は、**ベクター埋め込み**（テキスト、画像、音声などのオブジェクトの数値表現）を保存し、効率的にクエリすることです。これは、K近傍法（KNN）や近似近傍法（ANN）などのアルゴリズムを使用して、クエリベクターと**意味的に類似している**アイテムを、完全一致だけでなく、迅速に見つけます。"
      },
      vi: {
        title: "Vai trò của Vector Database",
        body: "Trong một kiến trúc liên quan đến AI tạo sinh hoặc tìm kiếm nâng cao, chức năng chính của **Vector Database** (hoặc Vector Index) là gì và nó lưu trữ dữ liệu như thế nào?",
        solution: "Chức năng chính của nó là lưu trữ và truy vấn hiệu quả **Vector Embeddings** (các biểu diễn số học của các đối tượng như văn bản, hình ảnh, hoặc âm thanh). Nó sử dụng các thuật toán như K-Nearest Neighbors (KNN) hoặc Approximate Nearest Neighbors (ANN) để nhanh chóng tìm thấy các mục **tương tự về mặt ngữ nghĩa** với vector truy vấn, chứ không chỉ là khớp chính xác."
      }
    }
  },
  {
    _id: "sd-s-015",
    difficulty: "senior",
    tags: ["observability", "metrics", "monitoring"],
    content: {
      en: {
        title: "Golden Signals for Monitoring",
        body: "What are the four 'Golden Signals' of monitoring defined by Google SRE, and why is tracking these four critical?",
        solution: "The four signals are **Latency**, **Traffic**, **Errors**, and **Saturation**. They are critical because they provide a high-level, actionable, and customer-focused view of the system's health, allowing teams to quickly identify and respond to performance issues that directly impact user experience."
      },
      jp: {
        title: "監視のためのゴールデンシグナル",
        body: "Google SREによって定義された監視の4つの「ゴールデンシグナル」は何ですか、またこれら4つを追跡することが重要であるのはなぜですか？",
        solution: "4つのシグナルは、**レイテンシ**、**トラフィック**、**エラー**、**飽和**です。これらは、システムの健全性について高レベルで、実行可能で、顧客に焦点を合わせたビューを提供するため、チームはユーザーエクスペリエンスに直接影響を与えるパフォーマンスの問題を迅速に特定し、対応することができます。"
      },
      vi: {
        title: "Golden Signals cho Monitoring",
        body: "Bốn 'Golden Signals' (Tín hiệu Vàng) để giám sát được định nghĩa bởi Google SRE là gì, và tại sao việc theo dõi bốn tín hiệu này là rất quan trọng?",
        solution: "Bốn tín hiệu là **Latency (Độ trễ)**, **Traffic (Lưu lượng)**, **Errors (Lỗi)**, và **Saturation (Độ bão hòa)**. Chúng rất quan trọng vì chúng cung cấp một cái nhìn cấp cao, có thể hành động và tập trung vào khách hàng về tình trạng sức khỏe của hệ thống, cho phép các nhóm nhanh chóng xác định và phản ứng với các vấn đề hiệu suất ảnh hưởng trực tiếp đến trải nghiệm người dùng."
      }
    }
  },
  {
    _id: "sd-s-016",
    difficulty: "senior",
    tags: ["networking", "cdn", "caching"],
    content: {
      en: {
        title: "CDN Cache Invalidation",
        body: "When an update is made to a dynamic resource, what are the two main ways to force a CDN to serve the new content immediately, and what is the trade-off?",
        solution: "1. **Purging/Invalidation:** Explicitly telling the CDN to remove the old object from all edge caches. Fast, but may incur cost and rate limits. 2. **Cache Busting:** Changing the URL of the resource (e.g., adding a version number or hash like `/js/app.v123.js`). Guarantees the new content is fetched, but requires code changes on the client/server."
      },
      jp: {
        title: "CDNキャッシュの無効化",
        body: "動的リソースが更新されたとき、CDNに新しいコンテンツをすぐに提供させるための主な2つの方法は何ですか、またそのトレードオフは何ですか？",
        solution: "1. **パージ/無効化:** CDNにすべてのエッジキャッシュから古いオブジェクトを明示的に削除するように指示します。高速ですが、コストとレート制限が発生する場合があります。 2. **キャッシュバスト:** リソースのURLを変更します（例：`/js/app.v123.js`のようにバージョン番号またはハッシュを追加）。新しいコンテンツが確実に取得されますが、クライアント/サーバーでのコード変更が必要です。"
      },
      vi: {
        title: "Vô hiệu hóa Cache CDN",
        body: "Khi một tài nguyên động được cập nhật, hai cách chính để buộc CDN phục vụ nội dung mới ngay lập tức là gì, và sự đánh đổi là gì?",
        solution: "1. **Purging/Invalidation (Thanh lọc/Vô hiệu hóa):** Chỉ thị rõ ràng cho CDN xóa đối tượng cũ khỏi tất cả các cache biên. Nhanh, nhưng có thể phát sinh chi phí và giới hạn tốc độ. 2. **Cache Busting:** Thay đổi URL của tài nguyên (ví dụ: thêm số phiên bản hoặc hash như `/js/app.v123.js`). Đảm bảo nội dung mới được tìm nạp, nhưng yêu cầu thay đổi mã trên máy khách/máy chủ."
      }
    }
  },
  {
    _id: "sd-s-017",
    difficulty: "senior",
    tags: ["database", "sharding", "rebalancing"],
    content: {
      en: {
        title: "Sharding Rebalancing Challenge",
        body: "In a heavily sharded database, explain the difficulty and complexity involved in **rebalancing** when a new shard is added to the cluster.",
        solution: "Rebalancing is difficult because it requires **moving a substantial amount of data** (often in the terabytes) between existing shards and the new shard while the system remains **online and operational**. This process must be carefully orchestrated to minimize impact on read/write latency and ensure data consistency, often involving temporary read-only modes or complex shadow copies."
      },
      jp: {
        title: "シャーディングのリバランスの課題",
        body: "シャーディングされたデータベースにおいて、クラスターに新しいシャードが追加されたとき、**リバランス**に伴う困難さと複雑さを説明しなさい。",
        solution: "リバランスは、システムが**オンラインで稼働している間**に、既存のシャードと新しいシャードの間で**大量のデータ**（しばしばテラバイト単位）を移動する必要があるため、困難です。このプロセスは、読み取り/書き込みのレイテンシへの影響を最小限に抑え、データの一貫性を確保するために慎重に調整される必要があり、多くの場合、一時的な読み取り専用モードや複雑なシャドウコピーを伴います。"
      },
      vi: {
        title: "Thách thức Rebalancing Sharding",
        body: "Trong một cơ sở dữ liệu được sharding nhiều, giải thích sự khó khăn và phức tạp liên quan đến việc **cân bằng lại (rebalancing)** khi một shard mới được thêm vào cluster.",
        solution: "Việc cân bằng lại rất khó khăn vì nó đòi hỏi **di chuyển một lượng lớn dữ liệu** (thường là terabyte) giữa các shard hiện có và shard mới trong khi hệ thống vẫn **trực tuyến và hoạt động**. Quá trình này phải được điều phối cẩn thận để giảm thiểu tác động đến độ trễ đọc/ghi và đảm bảo tính nhất quán của dữ liệu, thường liên quan đến các chế độ chỉ đọc tạm thời hoặc các bản sao bóng (shadow copies) phức tạp."
      }
    }
  },
  {
    _id: "sd-s-018",
    difficulty: "senior",
    tags: ["system design", "rate limiting", "distributed system"],
    content: {
      en: {
        title: "Distributed Rate Limiting",
        body: "When implementing a distributed rate limiter across many service instances, why is using a simple Redis counter for the 'Fixed Window' algorithm problematic?",
        solution: "The Fixed Window algorithm with a simple counter suffers from the **Edge Case Problem (Burst at the Edges)**. A user could send a full quota of requests just before the window ends and another full quota immediately after it starts, effectively getting double the allowed rate in a short time frame. This is exacerbated in a distributed system where clock synchronization is difficult."
      },
      jp: {
        title: "分散レート制限",
        body: "多くのサービスインスタンス間で分散レートリミッターを実装する際、「固定ウィンドウ」アルゴリズムに単純なRedisカウンターを使用することが問題となるのはなぜですか？",
        solution: "単純なカウンターを使用した固定ウィンドウアルゴリズムは、**エッジケースの問題（エッジでのバースト）**に悩まされます。ユーザーはウィンドウが終了する直前に全割り当てのリクエストを送信し、開始直後に別の全割り当てを送信する可能性があり、短時間で許可されたレートの2倍を実質的に得ることになります。これは、クロック同期が困難な分散システムでは悪化します。"
      },
      vi: {
        title: "Distributed Rate Limiting",
        body: "Khi triển khai bộ giới hạn tốc độ phân tán trên nhiều phiên bản dịch vụ, tại sao việc sử dụng bộ đếm Redis đơn giản cho thuật toán 'Fixed Window' lại có vấn đề?",
        solution: "Thuật toán Fixed Window với bộ đếm đơn giản gặp phải **Vấn đề Edge Case (Tấn công tại các cạnh)**. Người dùng có thể gửi toàn bộ hạn ngạch yêu cầu ngay trước khi cửa sổ kết thúc và một hạn ngạch đầy đủ khác ngay sau khi nó bắt đầu, về cơ bản nhận được gấp đôi tốc độ cho phép trong một khung thời gian ngắn. Điều này càng trầm trọng hơn trong một hệ thống phân tán nơi việc đồng bộ hóa đồng hồ là khó khăn."
      }
    }
  },
  {
    _id: "sd-s-019",
    difficulty: "senior",
    tags: ["architecture", "monolith", "strangler"],
    content: {
      en: {
        title: "Strangler Fig Pattern",
        body: "Explain the **Strangler Fig Pattern** and why it is considered the safest approach for migrating a legacy monolithic application to microservices.",
        solution: "The pattern involves gradually replacing specific functionalities of the monolith with new microservices, routing traffic to the new services through an API Gateway, while the monolith handles the rest. It's the safest because it allows for a **phased, iterative migration** without requiring a massive, risky 'big-bang' rewrite of the entire system." 
      },
      jp: {
        title: "ストラングラーパターン",
        body: "**ストラングラーパターン**を説明し、レガシーなモノリシックアプリケーションをマイクロサービスに移行するための最も安全なアプローチと見なされる理由を述べなさい。",
        solution: "このパターンには、モノリスの特定の機能を新しいマイクロサービスで徐々に置き換え、APIゲートウェイを通じて新しいサービスにトラフィックをルーティングし、モノリスが残りを処理することが含まれます。これは、システム全体の巨大で危険な「ビッグバン」な書き換えを必要とせずに、**段階的で反復的な移行**を可能にするため、最も安全です。"
      },
      vi: {
        title: "Mô hình Strangler Fig",
        body: "Giải thích **Mô hình Strangler Fig (Cây siết cổ)** và tại sao nó được coi là cách tiếp cận an toàn nhất để di chuyển một ứng dụng monolithic kế thừa sang microservices.",
        solution: "Mô hình này liên quan đến việc dần dần thay thế các chức năng cụ thể của monolith bằng các microservice mới, định tuyến lưu lượng truy cập đến các dịch vụ mới thông qua API Gateway, trong khi monolith xử lý phần còn lại. Nó là an toàn nhất vì nó cho phép **di chuyển theo từng giai đoạn, lặp đi lặp lại** mà không yêu cầu viết lại toàn bộ hệ thống theo kiểu 'big-bang' lớn và rủi ro."
      }
    }
  },
  {
    _id: "sd-s-020",
    difficulty: "senior",
    tags: ["data structure", "streaming", "analytics"],
    content: {
      en: {
        title: "HyperLogLog Use Case",
        body: "In high-scale data analytics (e.g., tracking unique visitors), what problem does the **HyperLogLog** data structure solve, and what is its key trade-off?",
        solution: "HyperLogLog is used for **estimating the number of distinct elements (cardinality)** in a multiset (e.g., how many unique user IDs). It solves the problem of huge memory consumption by using a fixed, very small amount of memory (around 1.5KB) regardless of the set size, at the cost of a **small, quantifiable error rate** (it's an estimate, not an exact count)."
      },
      jp: {
        title: "HyperLogLogのユースケース",
        body: "大規模データ分析（例：ユニーク訪問者の追跡）において、**HyperLogLog**データ構造が解決する問題は何ですか、またその主要なトレードオフは何ですか？",
        solution: "HyperLogLogは、マルチセット内の**異なる要素の数（カーディナリティ）を推定する**ために使用されます（例：ユニークユーザーIDの数）。セットサイズに関係なく固定された非常に少ないメモリ量（約1.5KB）を使用することで、巨大なメモリ消費の問題を解決しますが、その代償として**小さく定量化可能なエラー率**があります（正確なカウントではなく推定です）。"
      },
      vi: {
        title: "Trường hợp sử dụng HyperLogLog",
        body: "Trong phân tích dữ liệu quy mô lớn (ví dụ: theo dõi khách truy cập duy nhất), cấu trúc dữ liệu **HyperLogLog** giải quyết vấn đề gì, và sự đánh đổi chính của nó là gì?",
        solution: "HyperLogLog được sử dụng để **ước tính số lượng phần tử khác biệt (cardinality)** trong một multiset (ví dụ: có bao nhiêu ID người dùng duy nhất). Nó giải quyết vấn đề tiêu thụ bộ nhớ khổng lồ bằng cách sử dụng một lượng bộ nhớ cố định, rất nhỏ (khoảng 1.5KB) bất kể kích thước tập hợp, với chi phí là **tỷ lệ lỗi nhỏ, có thể định lượng** (đó là một ước tính, không phải là một số đếm chính xác)."
      }
    }
  },
  {
    _id: "sd-s-021",
    difficulty: "senior",
    tags: ["database", "locking", "concurrency"],
    content: {
      en: {
        title: "Optimistic Locking",
        body: "Explain the mechanism of **Optimistic Locking** in a database context and when it is preferred over Pessimistic Locking.",
        solution: "Optimistic Locking assumes conflicts are rare. It checks for conflicts **only upon commit** using a version number or timestamp field. If the version has changed, the transaction is rolled back and retried. It is preferred for **read-heavy systems** or high-latency distributed systems because it avoids holding locks for long periods, increasing concurrency."
      },
      jp: {
        title: "楽観的ロック",
        body: "データベースのコンテキストにおける**楽観的ロック**のメカニズムと、悲観的ロックよりも好まれるのはいつかを説明しなさい。",
        solution: "楽観的ロックは、競合がまれであると仮定します。バージョン番号またはタイムスタンプフィールドを使用して、**コミット時のみ**競合をチェックします。バージョンが変更されている場合、トランザクションはロールバックされ、再試行されます。これは、ロックを長期間保持することを回避し、同時実行性を向上させるため、**読み取り頻度の高いシステム**や高レイテンシの分散システムで好まれます。"
      },
      vi: {
        title: "Optimistic Locking",
        body: "Giải thích cơ chế của **Optimistic Locking (Khóa lạc quan)** trong bối cảnh cơ sở dữ liệu và khi nào nó được ưu tiên hơn Pessimistic Locking (Khóa bi quan).",
        solution: "Optimistic Locking giả định rằng xung đột là hiếm. Nó chỉ kiểm tra xung đột **khi commit** bằng cách sử dụng số phiên bản hoặc trường dấu thời gian. Nếu phiên bản đã thay đổi, giao dịch sẽ được rollback và thử lại. Nó được ưu tiên cho **các hệ thống nặng về đọc** hoặc các hệ thống phân tán có độ trễ cao vì nó tránh việc giữ khóa trong thời gian dài, tăng tính đồng thời."
      }
    }
  },
  {
    _id: "sd-s-022",
    difficulty: "senior",
    tags: ["system design", "pattern", "failover"],
    content: {
      en: {
        title: "Multi-Region Active/Active",
        body: "What is the biggest operational and data consistency challenge when setting up a truly **Active/Active** system across multiple geographic regions?",
        solution: "The biggest challenge is **Conflict Resolution and Write Consistency** due to network latency between regions. Since writes can occur simultaneously in two different regions, the system must use complex techniques (like DynamoDB's Vector Clocks or custom CRDTs) to reconcile conflicts and ensure both regions eventually agree on the final state without data loss."
      },
      jp: {
        title: "マルチリージョンActive/Active",
        body: "複数の地理的リージョン間で真の**Active/Active**システムをセットアップする際の、最大の運用上およびデータの一貫性の課題は何ですか？",
        solution: "最大の課題は、リージョン間のネットワークレイテンシによる**競合解決と書き込み一貫性**です。書き込みが2つの異なるリージョンで同時に発生する可能性があるため、システムは、競合を調整し、両方のリージョンがデータ損失なしに最終状態に最終的に合意することを保証するために、複雑な手法（DynamoDBのベクタークロックやカスタムCRDTなど）を使用する必要があります。"
      },
      vi: {
        title: "Multi-Region Active/Active",
        body: "Thách thức lớn nhất về mặt vận hành và tính nhất quán của dữ liệu khi thiết lập một hệ thống **Active/Active** thực sự trên nhiều khu vực địa lý là gì?",
        solution: "Thách thức lớn nhất là **Giải quyết xung đột và Tính nhất quán ghi (Write Consistency)** do độ trễ mạng giữa các khu vực. Vì thao tác ghi có thể xảy ra đồng thời ở hai khu vực khác nhau, hệ thống phải sử dụng các kỹ thuật phức tạp (như Vector Clocks của DynamoDB hoặc CRDT tùy chỉnh) để hòa giải xung đột và đảm bảo cả hai khu vực cuối cùng thống nhất về trạng thái cuối cùng mà không bị mất dữ liệu."
      }
    }
  },
  {
    _id: "sd-s-023",
    difficulty: "senior",
    tags: ["api", "data format", "efficiency"],
    content: {
      en: {
        title: "JSON vs Protocol Buffers",
        body: "When designing a high-throughput internal API, what are the two main technical reasons to choose **Protocol Buffers** (Protobuf) over JSON?",
        solution: "1. **Serialization Efficiency:** Protobuf is a **binary format**, making payloads significantly smaller than JSON, reducing bandwidth consumption. 2. **Performance:** Encoding/decoding (marshaling/unmarshaling) binary data is generally **much faster** than parsing text-based JSON, leading to lower CPU utilization and latency."
      },
      jp: {
        title: "JSON vs Protocol Buffers",
        body: "高スループットの内部APIを設計する際、JSONよりも**Protocol Buffers**（Protobuf）を選択する主な技術的な理由を2つ挙げなさい。",
        solution: "1. **シリアライゼーション効率:** Protobufは**バイナリ形式**であり、ペイロードがJSONよりも大幅に小さくなり、帯域幅の消費が削減されます。 2. **パフォーマンス:** バイナリデータのエンコード/デコード（マーシャリング/アンマーシャリング）は、テキストベースのJSONを解析するよりも一般的に**はるかに高速**であり、CPU使用率とレイテンシの低下につながります。"
      },
      vi: {
        title: "JSON và Protocol Buffers",
        body: "Khi thiết kế một API nội bộ có thông lượng cao, hai lý do kỹ thuật chính để chọn **Protocol Buffers** (Protobuf) thay vì JSON là gì?",
        solution: "1. **Hiệu quả tuần tự hóa (Serialization Efficiency):** Protobuf là một **định dạng nhị phân**, làm cho tải trọng (payload) nhỏ hơn đáng kể so với JSON, giảm tiêu thụ băng thông. 2. **Hiệu suất (Performance):** Việc mã hóa/giải mã (marshaling/unmarshaling) dữ liệu nhị phân nói chung **nhanh hơn nhiều** so với việc phân tích cú pháp JSON dựa trên văn bản, dẫn đến việc sử dụng CPU và độ trễ thấp hơn."
      }
    }
  },
  {
    _id: "sd-s-024",
    difficulty: "senior",
    tags: ["machine learning", "deployment", "mlops"],
    content: {
      en: {
        title: "ML Model Drift",
        body: "In an MLOps pipeline, what is **Model Drift** and what operational challenge does it create for a production system?",
        solution: "Model Drift occurs when the **statistical properties of the input data change** over time (data drift) or the relationship between inputs and outputs changes (concept drift), causing a deployed machine learning model's predictions to become inaccurate. The operational challenge is that the model fails silently, requiring proactive **monitoring of prediction quality** (not just system health) and a retraining/redeployment pipeline."
      },
      jp: {
        title: "MLモデルドリフト",
        body: "MLOpsパイプラインにおいて、**モデルドリフト**とは何ですか、またそれが本番システムにどのような運用上の課題をもたらしますか？",
        solution: "モデルドリフトは、時間の経過とともに**入力データの統計的特性が変化する**（データドリフト）か、入力と出力の関係が変化する（コンセプトドリフト）場合に発生し、デプロイされた機械学習モデルの予測が不正確になる原因となります。運用上の課題は、モデルが静かに失敗することであり、（システムの健全性だけでなく）**予測品質のプロアクティブな監視**と再トレーニング/再デプロイパイプラインが必要になります。"
      },
      vi: {
        title: "ML Model Drift",
        body: "Trong một pipeline MLOps, **Model Drift (Trôi mô hình)** là gì và nó tạo ra thách thức vận hành nào cho một hệ thống sản xuất?",
        solution: "Model Drift xảy ra khi **các thuộc tính thống kê của dữ liệu đầu vào thay đổi** theo thời gian (data drift) hoặc mối quan hệ giữa đầu vào và đầu ra thay đổi (concept drift), khiến các dự đoán của mô hình học máy đã triển khai trở nên không chính xác. Thách thức vận hành là mô hình thất bại một cách âm thầm, đòi hỏi phải **giám sát chủ động chất lượng dự đoán** (chứ không chỉ tình trạng hệ thống) và một pipeline huấn luyện/triển khai lại."
      }
    }
  },
  {
    _id: "sd-s-025",
    difficulty: "senior",
    tags: ["system design", "resiliency", "pattern"],
    content: {
      en: {
        title: "Retry Mechanism Jitter",
        body: "When implementing a retry mechanism with Exponential Backoff, why is adding **jitter** (randomized delay) crucial in a distributed system?",
        solution: "Jitter prevents a **Thundering Herd** problem. Without randomization, if a failed service recovers, all clients retrying simultaneously (due to having the same backoff timer) will immediately overload the recovering service again, causing it to crash (retry storm). Jitter spreads the retries over time, allowing the service to stabilize."
      },
      jp: {
        title: "再試行メカニズムのジッター",
        body: "指数バックオフ（Exponential Backoff）で再試行メカニズムを実装する際、分散システムで**ジッター**（ランダム化された遅延）を追加することが重要であるのはなぜですか？",
        solution: "ジッターは**サンダリングハード**の問題を防ぎます。ランダム化がないと、失敗したサービスが回復した場合、同時に再試行するすべてのクライアント（同じバックオフタイマーを持っているため）が回復中のサービスをすぐに再び過負荷にし、クラッシュを引き起こします（再試行ストーム）。ジッターは再試行を時間にわたって分散させ、サービスが安定できるようにします。"
      },
      vi: {
        title: "Jitter trong Cơ chế Retry",
        body: "Khi triển khai cơ chế thử lại với Exponential Backoff, tại sao việc thêm **jitter** (độ trễ ngẫu nhiên) lại rất quan trọng trong một hệ thống phân tán?",
        solution: "Jitter ngăn chặn vấn đề **Thundering Herd**. Nếu không có ngẫu nhiên hóa, nếu một dịch vụ bị lỗi khôi phục, tất cả các máy khách thử lại đồng thời (do có cùng bộ hẹn giờ backoff) sẽ ngay lập tức làm quá tải dịch vụ đang khôi phục trở lại, khiến nó bị sập (retry storm). Jitter phân tán các lần thử lại theo thời gian, cho phép dịch vụ ổn định."
      }
    }
  },
  {
    _id: "sd-s-026",
    difficulty: "senior",
    tags: ["networking", "dns", "resiliency"],
    content: {
      en: {
        title: "DNS TTL Impact on Failover",
        body: "Explain how a very **high TTL** (Time To Live) on a DNS record negatively impacts the recovery time during a regional failover event.",
        solution: "A high TTL means caching DNS resolvers (and clients) will continue to cache and use the old, failed IP address for a longer duration (e.g., hours), even after the DNS record has been updated to point to the new, healthy region. This significantly increases the **Recovery Time Objective (RTO)** for the system."
      },
      jp: {
        title: "フェイルオーバーにおけるDNS TTLの影響",
        body: "DNSレコードの非常に**高いTTL**（Time To Live）が、リージョナルフェイルオーバーイベント中の復旧時間にどのように悪影響を及ぼすかを説明しなさい。",
        solution: "TTLが高いということは、キャッシュするDNSリゾルバー（およびクライアント）が、DNSレコードが新しい健全なリージョンを指すように更新された後でも、古い失敗したIPアドレスをより長い期間（例：数時間）キャッシュして使用し続けることを意味します。これにより、システムの**目標復旧時間（RTO）**が大幅に増加します。"
      },
      vi: {
        title: "Tác động của DNS TTL lên Failover",
        body: "Giải thích cách **TTL (Time To Live) rất cao** trên bản ghi DNS ảnh hưởng tiêu cực đến thời gian phục hồi trong sự kiện chuyển đổi dự phòng (failover) khu vực.",
        solution: "TTL cao có nghĩa là các trình phân giải DNS bộ nhớ đệm (và máy khách) sẽ tiếp tục lưu trữ và sử dụng địa chỉ IP cũ, bị lỗi trong thời gian dài hơn (ví dụ: hàng giờ), ngay cả sau khi bản ghi DNS đã được cập nhật để trỏ đến khu vực mới, khỏe mạnh. Điều này làm tăng đáng kể **Mục tiêu Thời gian Phục hồi (RTO)** của hệ thống."
      }
    }
  },
  {
    _id: "sd-s-027",
    difficulty: "senior",
    tags: ["data modeling", "database", "timeseries"],
    content: {
      en: {
        title: "Time-Series Database Advantage",
        body: "For a high-volume IoT telemetry system, why is a **Time-Series Database (TSDB)** generally preferred over a traditional relational database (RDBMS)?",
        solution: "TSDBs are optimized for **ingesting high-volume, ordered, time-stamped data** and performing **time-range queries** (e.g., averages over the last month) efficiently. They often use specialized compression and indexing (like Gorilla or Delta) that RDBMS tables lack, resulting in much better storage efficiency and query performance for time-based data."
      },
      jp: {
        title: "時系列データベースの利点",
        body: "大量のIoTテレメトリーシステムにとって、従来のリレーショナルデータベース（RDBMS）よりも**時系列データベース（TSDB）**が一般的に好まれるのはなぜですか？",
        solution: "TSDBは、**大量の、順序付けられた、タイムスタンプ付きのデータを取り込み**、**時間範囲クエリ**（例：過去1ヶ月の平均）を効率的に実行するために最適化されています。これらは、RDBMSテーブルにはない特殊な圧縮とインデックス作成（GorillaやDeltaなど）を使用することが多く、時間ベースのデータに対してはるかに優れたストレージ効率とクエリパフォーマンスをもたらします。"
      },
      vi: {
        title: "Ưu điểm của Time-Series Database",
        body: "Đối với một hệ thống đo từ xa IoT có khối lượng lớn, tại sao **Time-Series Database (TSDB)** thường được ưu tiên hơn cơ sở dữ liệu quan hệ truyền thống (RDBMS)?",
        solution: "TSDB được tối ưu hóa cho việc **thu nạp dữ liệu có dấu thời gian, được sắp xếp, khối lượng lớn** và thực hiện **các truy vấn phạm vi thời gian** (ví dụ: trung bình trong tháng trước) một cách hiệu quả. Chúng thường sử dụng nén và lập chỉ mục chuyên biệt (như Gorilla hoặc Delta) mà các bảng RDBMS thiếu, dẫn đến hiệu quả lưu trữ và hiệu suất truy vấn tốt hơn nhiều đối với dữ liệu dựa trên thời gian."
      }
    }
  },
  {
    _id: "sd-s-028",
    difficulty: "senior",
    tags: ["data structure", "concurrency", "distributed system"],
    content: {
      en: {
        title: "Conflict-free Replicated Data Types (CRDTs)",
        body: "What is the primary motivation for using **CRDTs** (Conflict-free Replicated Data Types) in systems like Google Docs or collaborative editors?",
        solution: "CRDTs allow replicas (clients/servers) to be updated **independently and concurrently** without coordination, and guarantee that all replicas will eventually reach the same final state (strong eventual consistency) **without requiring manual conflict resolution** when merging. This makes them ideal for highly available, low-latency collaborative applications."
      },
      jp: {
        title: "競合のないレプリケートされたデータ型 (CRDTs)",
        body: "Google Docsや共同編集エディタのようなシステムで**CRDTs**（競合のないレプリケートされたデータ型）を使用する主な動機は何ですか？",
        solution: "CRDTは、レプリカ（クライアント/サーバー）が調整なしに**独立して同時に**更新されることを可能にし、マージ時に**手動での競合解決を必要とせずに**、すべてのレプリカが最終的に同じ最終状態に到達することを保証します（強力な結果整合性）。これにより、高可用性、低レイテンシの共同作業アプリケーションに最適です。"
      },
      vi: {
        title: "Conflict-free Replicated Data Types (CRDTs)",
        body: "Động lực chính để sử dụng **CRDTs** (Conflict-free Replicated Data Types - Kiểu dữ liệu sao chép không xung đột) trong các hệ thống như Google Docs hoặc các trình soạn thảo cộng tác là gì?",
        solution: "CRDT cho phép các bản sao (máy khách/máy chủ) được cập nhật **độc lập và đồng thời** mà không cần điều phối, và đảm bảo rằng tất cả các bản sao cuối cùng sẽ đạt đến cùng một trạng thái cuối cùng (tính nhất quán cuối cùng mạnh mẽ) **mà không yêu cầu giải quyết xung đột thủ công** khi hợp nhất. Điều này làm cho chúng lý tưởng cho các ứng dụng cộng tác có tính sẵn sàng cao, độ trễ thấp."
      }
    }
  },
  {
    _id: "sd-s-029",
    difficulty: "senior",
    tags: ["api", "graphql", "performance"],
    content: {
      en: {
        title: "GraphQL N+1 Solution",
        body: "What is the primary tool or technique used on the server-side to prevent the 'N+1 Query Problem' when resolving nested fields in a GraphQL API?",
        solution: "The primary technique is **Data Loaders** (or similar batching/caching libraries). Data Loaders batch multiple requests for the same type of data (e.g., users for 10 different posts) that occur during a single GraphQL execution into a **single database query**, drastically reducing the number of database round trips."
      },
      jp: {
        title: "GraphQL N+1の解決策",
        body: "GraphQL APIでネストされたフィールドを解決する際に、「N+1クエリ問題」を防ぐためにサーバー側で使用される主要なツールまたは手法は何ですか？",
        solution: "主要な手法は**データローダー**（または同様のバッチ処理/キャッシングライブラリ）です。データローダーは、単一のGraphQL実行中に発生する同じ種類のデータ（例：10個の異なる投稿のユーザー）に対する複数のリクエストを**単一のデータベースクエリ**にバッチ処理し、データベースのラウンドトリップの数を劇的に削減します。"
      },
      vi: {
        title: "Giải pháp N+1 của GraphQL",
        body: "Công cụ hoặc kỹ thuật chính được sử dụng ở phía máy chủ để ngăn chặn 'Vấn đề N+1 Query' khi giải quyết các trường lồng nhau trong API GraphQL là gì?",
        solution: "Kỹ thuật chính là **Data Loaders** (hoặc các thư viện batching/caching tương tự). Data Loaders gộp nhiều yêu cầu cho cùng một loại dữ liệu (ví dụ: người dùng cho 10 bài đăng khác nhau) xảy ra trong một lần thực thi GraphQL thành một **truy vấn cơ sở dữ liệu duy nhất**, giảm đáng kể số lần giao tiếp khứ hồi (round trips) của cơ sở dữ liệu."
      }
    }
  },
  {
    _id: "sd-s-030",
    difficulty: "senior",
    tags: ["system design", "pattern", "data pipeline"],
    content: {
      en: {
        title: "Lambda Architecture Challenge",
        body: "What is the main complexity introduced by the **Lambda Architecture** (combining batch and speed/stream processing layers) that the newer Kappa Architecture attempts to solve?",
        solution: "The main complexity is **maintaining two separate codebases** (one for the batch layer, one for the speed layer) that implement the same business logic, leading to operational overhead, duplicated effort, and the risk of **inconsistent results** between the two views."
      },
      jp: {
        title: "Lambdaアーキテクチャの課題",
        body: "新しいKappaアーキテクチャが解決しようとしている、**Lambdaアーキテクチャ**（バッチ処理層とスピード/ストリーム処理層を組み合わせる）によって導入される主な複雑さは何ですか？",
        solution: "主な複雑さは、同じビジネスロジックを実装する**2つの別々のコードベースを維持する**ことであり（バッチ層用とスピード層用）、運用上のオーバーヘッド、作業の重複、および2つのビュー間での**一貫性のない結果**のリスクにつながります。"
      },
      vi: {
        title: "Thách thức của Lambda Architecture",
        body: "Độ phức tạp chính được giới thiệu bởi **Lambda Architecture** (kết hợp các lớp xử lý batch và tốc độ/streaming) mà Kiến trúc Kappa mới hơn cố gắng giải quyết là gì?",
        solution: "Độ phức tạp chính là **duy trì hai cơ sở mã riêng biệt** (một cho lớp batch, một cho lớp tốc độ) thực hiện cùng một logic nghiệp vụ, dẫn đến chi phí vận hành, nỗ lực trùng lặp và nguy cơ **kết quả không nhất quán** giữa hai chế độ xem."
      }
    }
  },
  {
    _id: "sd-s-031",
    difficulty: "senior",
    tags: ["security", "pci", "data isolation"],
    content: {
      en: {
        title: "PCI Compliance and Service Boundaries",
        body: "When designing a system that handles sensitive payment card data (PCI compliance), why is it a recommended design practice to **isolate** the payment service from other microservices?",
        solution: "Isolation minimizes the **scope of compliance** (The 'Compliance Burden'). By containing the cardholder data environment (CDE) to a small, isolated service, the majority of the application's infrastructure (authentication, user profile, recommendations) is kept out of the costly and rigorous PCI audit scope."
      },
      jp: {
        title: "PCIコンプライアンスとサービス境界",
        body: "機密性の高い支払いカードデータ（PCIコンプライアンス）を処理するシステムを設計する際、支払いサービスを他のマイクロサービスから**分離**することが推奨される設計プラクティスであるのはなぜですか？",
        solution: "分離は**コンプライアンスの範囲**（「コンプライアンスの負担」）を最小限に抑えます。カード所有者データ環境（CDE）を小さく隔離されたサービスに含めることで、アプリケーションのインフラストラクチャの大部分（認証、ユーザープロファイル、推奨事項）が高コストで厳格なPCI監査の範囲外に保たれます。"
      },
      vi: {
        title: "Tuân thủ PCI và Ranh giới Dịch vụ",
        body: "Khi thiết kế một hệ thống xử lý dữ liệu thẻ thanh toán nhạy cảm (tuân thủ PCI), tại sao việc **cô lập** dịch vụ thanh toán khỏi các microservices khác là một thực hành thiết kế được khuyến nghị?",
        solution: "Việc cô lập giảm thiểu **phạm vi tuân thủ (Scope of Compliance)** (Tải trọng Tuân thủ). Bằng cách chứa môi trường dữ liệu chủ thẻ (CDE) trong một dịch vụ nhỏ, biệt lập, phần lớn cơ sở hạ tầng của ứng dụng (xác thực, hồ sơ người dùng, đề xuất) được giữ ngoài phạm vi kiểm toán PCI tốn kém và nghiêm ngặt."
      }
    }
  },
  {
    _id: "sd-s-032",
    difficulty: "senior",
    tags: ["system design", "load balancer", "session persistence"],
    content: {
      en: {
        title: "Sticky Sessions Drawback",
        body: "Load balancers use **Sticky Sessions** (session affinity) to route a user's requests to the same server. What is the major drawback of this approach regarding scaling and availability?",
        solution: "The major drawback is **uneven load distribution** (hotspots) and **reduced availability**. If the sticky session server fails, the user's session state is lost, forcing them to re-authenticate or restart their workflow. It also prevents the load balancer from evenly distributing new traffic across all servers, potentially overloading the sticky servers."
      },
      jp: {
        title: "スティッキーセッションの欠点",
        body: "ロードバランサーは、ユーザーのリクエストを同じサーバーにルーティングするために**スティッキーセッション**（セッションアフィニティ）を使用します。スケーリングと可用性に関して、このアプローチの主な欠点は何ですか？",
        solution: "主な欠点は、**不均一な負荷分散**（ホットスポット）と**可用性の低下**です。スティッキーセッションサーバーが失敗すると、ユーザーのセッション状態が失われ、再認証またはワークフローの再開を余儀なくされます。また、ロードバランサーがすべてのサーバーに新しいトラフィックを均等に分散するのを妨げ、スティッキーサーバーを過負荷にする可能性があります。"
      },
      vi: {
        title: "Nhược điểm của Sticky Sessions",
        body: "Bộ cân bằng tải sử dụng **Sticky Sessions** (session affinity) để định tuyến các yêu cầu của người dùng đến cùng một máy chủ. Nhược điểm lớn của cách tiếp cận này đối với khả năng mở rộng và tính sẵn sàng là gì?",
        solution: "Nhược điểm chính là **phân phối tải không đồng đều** (hotspots) và **giảm tính sẵn sàng**. Nếu máy chủ sticky session bị lỗi, trạng thái phiên của người dùng bị mất, buộc họ phải xác thực lại hoặc khởi động lại quy trình làm việc. Nó cũng ngăn bộ cân bằng tải phân phối lưu lượng truy cập mới đồng đều trên tất cả các máy chủ, có khả năng làm quá tải các máy chủ 'sticky'."
      }
    }
  },
  {
    _id: "sd-s-033",
    difficulty: "senior",
    tags: ["data modeling", "database", "analytics"],
    content: {
      en: {
        title: "Star Schema vs Snowflake Schema",
        body: "In data warehousing design, what is the main difference between a **Star Schema** and a **Snowflake Schema**, and which is generally preferred for simpler querying and performance?",
        solution: "In a Star Schema, the Fact Table joins directly to only primary Dimension Tables (denormalized). In a Snowflake Schema, Dimension Tables are normalized into multiple related tables. **Star Schema** is generally preferred for **simpler querying and better read performance** because it requires fewer JOIN operations."
      },
      jp: {
        title: "スター・スキーマ vs スノーフレーク・スキーマ",
        body: "データウェアハウジング設計において、**スター・スキーマ**と**スノーフレーク・スキーマ**の主な違いは何ですか、またよりシンプルなクエリとパフォーマンスのために一般的に好まれるのはどちらですか？",
        solution: "スター・スキーマでは、ファクトテーブルはプライマリディメンションテーブル（非正規化されている）にのみ直接結合します。スノーフレーク・スキーマでは、ディメンションテーブルが複数の関連テーブルに正規化されます。**スター・スキーマ**は、必要なJOIN操作が少ないため、一般的に**よりシンプルなクエリとより良い読み取りパフォーマンス**のために好まれます。"
      },
      vi: {
        title: "Star Schema và Snowflake Schema",
        body: "Trong thiết kế kho dữ liệu, sự khác biệt chính giữa **Star Schema** và **Snowflake Schema** là gì, và cấu trúc nào thường được ưu tiên cho truy vấn đơn giản và hiệu suất hơn?",
        solution: "Trong Star Schema, Bảng Fact chỉ nối trực tiếp với các Bảng Dimension chính (phi chuẩn hóa). Trong Snowflake Schema, các Bảng Dimension được chuẩn hóa thành nhiều bảng liên quan. **Star Schema** thường được ưu tiên hơn cho **truy vấn đơn giản hơn và hiệu suất đọc tốt hơn** vì nó yêu cầu ít thao tác JOIN hơn."
      }
    }
  },
  {
    _id: "sd-s-034",
    difficulty: "senior",
    tags: ["system design", "search", "relevance"],
    content: {
      en: {
        title: "Term Frequency-Inverse Document Frequency (TF-IDF)",
        body: "In search engine design, explain how the two components of the **TF-IDF** scoring algorithm contribute to determining the relevance of a document.",
        solution: "**Term Frequency (TF)** measures how often a term appears in a document; it indicates the document's relevance to that term. **Inverse Document Frequency (IDF)** measures how rare a term is across *all* documents; it increases the weight of terms that are specific and therefore more meaningful for a search query, filtering out common, less-useful words."
      },
      jp: {
        title: "ターム頻度-逆文書頻度 (TF-IDF)",
        body: "検索エンジン設計において、**TF-IDF**スコアリングアルゴリズムの2つのコンポーネントが、文書の関連性を決定するためにどのように貢献するかを説明しなさい。",
        solution: "**ターム頻度（TF）**は、文書内で用語がどれだけ頻繁に出現するかを測定します。これは、その用語に対する文書の関連性を示します。**逆文書頻度（IDF）**は、*すべての*文書で用語がどれだけまれであるかを測定します。これは、特定の、したがって検索クエリにとってより意味のある用語の重みを増やし、一般的で役に立たない単語を除外します。"
      },
      vi: {
        title: "Term Frequency-Inverse Document Frequency (TF-IDF)",
        body: "Trong thiết kế công cụ tìm kiếm, giải thích cách hai thành phần của thuật toán tính điểm **TF-IDF** đóng góp vào việc xác định mức độ liên quan của một tài liệu.",
        solution: "**Term Frequency (TF - Tần suất Thuật ngữ)** đo tần suất một thuật ngữ xuất hiện trong một tài liệu; nó cho biết mức độ liên quan của tài liệu đó với thuật ngữ đó. **Inverse Document Frequency (IDF - Tần suất Tài liệu Nghịch đảo)** đo độ hiếm của một thuật ngữ trên *tất cả* các tài liệu; nó tăng trọng số của các thuật ngữ cụ thể và do đó có ý nghĩa hơn đối với truy vấn tìm kiếm, lọc ra các từ phổ biến, ít hữu ích hơn."
      }
    }
  },
  {
    _id: "sd-s-035",
    difficulty: "senior",
    tags: ["system design", "event sourcing", "query"],
    content: {
      en: {
        title: "Read Model in Event Sourcing",
        body: "In the **Event Sourcing** architectural pattern, why are **Read Models** (Projections) necessary, and what purpose do they serve?",
        solution: "Read Models are necessary because querying the raw stream of historical events (the source of truth) is complex and inefficient for the current state. Read Models are **denormalized, optimized views** (e.g., materialized views, specialized databases) of the current or aggregated state, derived from the events, allowing for fast, specific queries that serve the application's needs."
      },
      jp: {
        title: "イベントソーシングにおける読み取りモデル",
        body: "**イベントソーシング**アーキテクチャパターンにおいて、**読み取りモデル**（プロジェクション）が必要なのはなぜですか、またそれらはどのような目的を果たしますか？",
        solution: "読み取りモデルは、生の履歴イベントのストリーム（真実のソース）にクエリを実行することが、現在の状態にとっては複雑で非効率であるため、必要です。読み取りモデルは、イベントから派生した、現在または集約された状態の**非正規化され、最適化されたビュー**（例：マテリアライズドビュー、特殊なデータベース）であり、アプリケーションのニーズを満たすための高速で特定のクエリを可能にします。"
      },
      vi: {
        title: "Read Model trong Event Sourcing",
        body: "Trong mô hình kiến trúc **Event Sourcing**, tại sao **Read Models** (Projections) là cần thiết, và chúng phục vụ mục đích gì?",
        solution: "Read Models là cần thiết vì việc truy vấn luồng thô của các sự kiện lịch sử (nguồn chân lý) là phức tạp và không hiệu quả đối với trạng thái hiện tại. Read Models là **các chế độ xem được phi chuẩn hóa, tối ưu hóa** (ví dụ: materialized views, cơ sở dữ liệu chuyên biệt) của trạng thái hiện tại hoặc trạng thái tổng hợp, được dẫn xuất từ các sự kiện, cho phép các truy vấn nhanh, cụ thể phục vụ nhu cầu của ứng dụng."
      }
    }
  },
  {
    _id: "sd-s-036",
    difficulty: "senior",
    tags: ["networking", "rpc", "load balancing"],
    content: {
      en: {
        title: "Client-Side Load Balancing",
        body: "In a microservices system using gRPC (or another smart client), explain the concept of **Client-Side Load Balancing** and its primary advantage over traditional Load Balancer appliances.",
        solution: "Client-Side Load Balancing (implemented via a service discovery mechanism like Consul/Eureka) involves the client **itself** knowing all available service instances and making the load balancing decision. The main advantage is **eliminating a network hop** (the LB appliance) and enabling more sophisticated, application-aware load balancing algorithms (e.g., weighted, lowest latency) directly on the client."
      },
      jp: {
        title: "クライアント側負荷分散",
        body: "gRPC（またはその他のスマートクライアント）を使用するマイクロサービスシステムにおいて、**クライアント側負荷分散**の概念と、従来のロードバランサーアプライアンスに対する主な利点を説明しなさい。",
        solution: "クライアント側負荷分散（Consul/Eurekaなどのサービスディスカバリメカニズムを介して実装される）には、クライアント**自体**が利用可能なすべてのサービスインスタンスを知り、負荷分散の決定を行うことが含まれます。主な利点は、**ネットワークホップ**（LBアプライアンス）を排除し、より洗練された、アプリケーションを認識した負荷分散アルゴリズム（例：重み付け、最低レイテンシ）をクライアント上で直接可能にすることです。"
      },
      vi: {
        title: "Client-Side Load Balancing",
        body: "Trong một hệ thống microservices sử dụng gRPC (hoặc một client thông minh khác), giải thích khái niệm **Client-Side Load Balancing (Cân bằng tải phía máy khách)** và lợi thế chính của nó so với các thiết bị Load Balancer truyền thống.",
        solution: "Client-Side Load Balancing (được triển khai thông qua cơ chế khám phá dịch vụ như Consul/Eureka) liên quan đến việc bản thân **máy khách** biết tất cả các phiên bản dịch vụ có sẵn và tự đưa ra quyết định cân bằng tải. Lợi thế chính là **loại bỏ một bước nhảy mạng (network hop)** (thiết bị LB) và cho phép các thuật toán cân bằng tải tinh vi hơn, nhận biết ứng dụng (ví dụ: có trọng số, độ trễ thấp nhất) trực tiếp trên máy khách."
      }
    }
  },
  {
    _id: "sd-s-037",
    difficulty: "senior",
    tags: ["system design", "data structure", "caching"],
    content: {
      en: {
        title: "Leaky-Ducky Caching",
        body: "Describe the 'Leaky-Ducky' (L2/L3) caching pattern often used to efficiently manage different levels of cache expiration in a multi-tier system.",
        solution: "The Leaky-Ducky pattern uses different, staggered TTLs (Time-to-Live) across different cache levels (L1: in-memory, L2: local Redis, L3: distributed Redis). This ensures that even when the L1 cache expires, the sudden traffic burst is handled by the L2 or L3 cache, preventing the burst from reaching the underlying database (the **Cache Stampede** is 'leaked' softly)."
      },
      jp: {
        title: "リーキーダッキーキャッシング",
        body: "マルチティアシステムで異なるレベルのキャッシュ有効期限を効率的に管理するためにしばしば使用される「リーキーダッキー」（L2/L3）キャッシングパターンを説明しなさい。",
        solution: "リーキーダッキーパターンは、異なるキャッシュレベル（L1：インメモリ、L2：ローカルRedis、L3：分散Redis）間で、異なる、ずらされたTTL（Time-to-Live）を使用します。これにより、L1キャッシュが期限切れになった場合でも、突然のトラフィックの急増はL2またはL3キャッシュによって処理され、急増が基盤となるデータベースに到達するのを防ぎます（**キャッシュスタンピード**は穏やかに「リーク」されます）。"
      },
      vi: {
        title: "Leaky-Ducky Caching",
        body: "Mô tả mô hình caching 'Leaky-Ducky' (L2/L3) thường được sử dụng để quản lý hiệu quả các mức độ hết hạn cache khác nhau trong một hệ thống đa tầng.",
        solution: "Mô hình Leaky-Ducky sử dụng các TTL (Time-to-Live) khác nhau, so le nhau trên các cấp độ cache khác nhau (L1: trong bộ nhớ, L2: Redis cục bộ, L3: Redis phân tán). Điều này đảm bảo rằng ngay cả khi cache L1 hết hạn, sự bùng nổ lưu lượng truy cập đột ngột vẫn được cache L2 hoặc L3 xử lý, ngăn chặn sự bùng nổ chạm tới cơ sở dữ liệu bên dưới (**Cache Stampede** được 'rò rỉ' một cách nhẹ nhàng)."
      }
    }
  },
  {
    _id: "sd-s-038",
    difficulty: "senior",
    tags: ["security", "api", "authorization"],
    content: {
      en: {
        title: "Principle of Least Privilege (PoLP)",
        body: "When designing internal APIs in a microservices system, how does adhering to the **Principle of Least Privilege (PoLP)** help improve security?",
        solution: "PoLP dictates that every service, user, or process should be granted only the minimum permissions necessary to perform its function. This improves security by **limiting the blast radius**; if a service is compromised, the attacker only gains access to the very limited set of resources that service is authorized to touch, preventing widespread lateral movement."
      },
      jp: {
        title: "最小権限の原則（PoLP）",
        body: "マイクロサービスシステムで内部APIを設計する際、**最小権限の原則（PoLP）**を順守することは、セキュリティの向上にどのように役立ちますか？",
        solution: "PoLPは、すべてのサービス、ユーザー、またはプロセスがその機能を実行するために必要な最小限の権限のみを付与されるべきであると規定しています。これは**爆発半径を制限する**ことでセキュリティを向上させます。サービスが侵害された場合、攻撃者はそのサービスが触れることを許可されている非常に限られたリソースセットにのみアクセスできるようになり、広範な横方向への移動を防ぎます。"
      },
      vi: {
        title: "Principle of Least Privilege (PoLP)",
        body: "Khi thiết kế các API nội bộ trong một hệ thống microservices, việc tuân thủ **Principle of Least Privilege (PoLP - Nguyên tắc Đặc quyền Tối thiểu)** giúp cải thiện bảo mật như thế nào?",
        solution: "PoLP quy định rằng mọi dịch vụ, người dùng hoặc quy trình chỉ nên được cấp quyền tối thiểu cần thiết để thực hiện chức năng của nó. Điều này cải thiện bảo mật bằng cách **hạn chế phạm vi ảnh hưởng (blast radius)**; nếu một dịch vụ bị xâm phạm, kẻ tấn công chỉ có quyền truy cập vào tập hợp tài nguyên rất hạn chế mà dịch vụ đó được ủy quyền chạm vào, ngăn chặn sự di chuyển ngang rộng rãi."
      }
    }
  },
  {
    _id: "sd-s-039",
    difficulty: "senior",
    tags: ["system design", "queue", "dlq"],
    content: {
      en: {
        title: "Dead Letter Queue (DLQ)",
        body: "What is the specific purpose of a **Dead Letter Queue (DLQ)** in a message processing system, and when should a message be moved to it?",
        solution: "A DLQ is a secondary queue used to isolate messages that **cannot be processed successfully** after a certain number of attempts (retries). Its purpose is to prevent poison messages from repeatedly clogging the main queue, potentially blocking legitimate messages, and to allow for **manual inspection and debugging** of failed messages."
      },
      jp: {
        title: "デッドレターキュー（DLQ）",
        body: "メッセージ処理システムにおける**デッドレターキュー（DLQ）**の特定の目的は何ですか、またメッセージはいつDLQに移動されるべきですか？",
        solution: "DLQは、特定の回数の試行（再試行）の後も**正常に処理できない**メッセージを隔離するために使用されるセカンダリキューです。その目的は、ポイズンメッセージがメインキューを繰り返し詰まらせ、正当なメッセージをブロックする可能性を防ぎ、失敗したメッセージの**手動検査とデバッグ**を可能にすることです。"
      },
      vi: {
        title: "Dead Letter Queue (DLQ)",
        body: "Mục đích cụ thể của **Dead Letter Queue (DLQ)** trong một hệ thống xử lý tin nhắn là gì, và khi nào một tin nhắn nên được chuyển đến đó?",
        solution: "DLQ là một hàng đợi phụ được sử dụng để cô lập các tin nhắn **không thể xử lý thành công** sau một số lần thử nhất định (thử lại). Mục đích của nó là để ngăn các tin nhắn độc (poison messages) lặp đi lặp lại làm tắc nghẽn hàng đợi chính, có khả năng chặn các tin nhắn hợp lệ, và cho phép **kiểm tra và gỡ lỗi thủ công** các tin nhắn bị lỗi."
      }
    }
  },
  {
    _id: "sd-s-040",
    difficulty: "senior",
    tags: ["architecture", "scaling", "realtime"],
    content: {
      en: {
        title: "State Management in Stream Processing",
        body: "In a real-time stream processing framework (like Kafka Streams or Flink), what does **state management** refer to, and why is it complex in a distributed context?",
        solution: "State management refers to the ability of a stream processor to remember data from previous events to compute results for the current event (e.g., calculating a running average). It's complex because the state must be **fault-tolerant, persistent** (to survive restarts), and **partitioned/distributed** correctly across multiple worker nodes to match the distributed data, requiring checkpointing and serialization."
      },
      jp: {
        title: "ストリーム処理における状態管理",
        body: "リアルタイムストリーム処理フレームワーク（Kafka StreamsやFlinkなど）において、**状態管理**とは何を指し、分散コンテキストでそれが複雑なのはなぜですか？",
        solution: "状態管理とは、ストリームプロセッサが以前のイベントからのデータを記憶して現在のイベントの結果を計算する能力を指します（例：移動平均の計算）。状態は、再起動後も存続するために**耐障害性があり、永続的**である必要があり、分散データと一致するように複数のワーカーノード間で正しく**パーティション化/分散**される必要があるため、複雑であり、チェックポイントとシリアライゼーションが必要です。"
      },
      vi: {
        title: "Quản lý trạng thái trong Stream Processing",
        body: "Trong một framework xử lý luồng thời gian thực (như Kafka Streams hoặc Flink), **quản lý trạng thái** đề cập đến điều gì, và tại sao nó phức tạp trong bối cảnh phân tán?",
        solution: "Quản lý trạng thái đề cập đến khả năng của bộ xử lý luồng ghi nhớ dữ liệu từ các sự kiện trước đó để tính toán kết quả cho sự kiện hiện tại (ví dụ: tính trung bình động). Nó phức tạp vì trạng thái phải **chịu lỗi, bền vững** (để tồn tại sau khi khởi động lại) và được **phân vùng/phân tán** chính xác trên nhiều node worker để khớp với dữ liệu phân tán, yêu cầu checkpointing và tuần tự hóa."
      }
    }
  },
  {
    _id: "sd-s-041",
    difficulty: "senior",
    tags: ["database", "rdbms", "optimizing"],
    content: {
      en: {
        title: "Index Cardinality",
        body: "In RDBMS performance tuning, explain the concept of **Index Cardinality** and why a high-cardinality index is more valuable than a low-cardinality index.",
        solution: "Cardinality is the number of **unique values** in a column relative to the total number of rows. A **high-cardinality** index (e.g., email address, UUID) is more valuable because it makes the index filter more selective, meaning the database can quickly narrow down the results to a small set of rows, significantly improving query speed."
      },
      jp: {
        title: "インデックスカーディナリティ",
        body: "RDBMSのパフォーマンスチューニングにおいて、**インデックスカーディナリティ**の概念と、カーディナリティの低いインデックスよりもカーディナリティの高いインデックスの方が価値がある理由を説明しなさい。",
        solution: "カーディナリティは、列内の**一意の値**の数と行の総数の比率です。**カーディナリティの高い**インデックス（例：メールアドレス、UUID）は、インデックスフィルターの選択性を高めるため、より価値があります。これは、データベースが結果を少数の行に迅速に絞り込むことができ、クエリ速度を大幅に向上させることを意味します。"
      },
      vi: {
        title: "Index Cardinality",
        body: "Trong điều chỉnh hiệu suất RDBMS, giải thích khái niệm **Index Cardinality (Độ phân biệt của Chỉ mục)** và tại sao một chỉ mục có độ phân biệt cao lại có giá trị hơn một chỉ mục có độ phân biệt thấp.",
        solution: "Cardinality là số lượng **giá trị duy nhất** trong một cột so với tổng số hàng. Một chỉ mục có **độ phân biệt cao** (ví dụ: địa chỉ email, UUID) có giá trị hơn vì nó làm cho bộ lọc chỉ mục có tính chọn lọc cao hơn, nghĩa là cơ sở dữ liệu có thể nhanh chóng thu hẹp kết quả thành một tập hợp nhỏ các hàng, cải thiện đáng kể tốc độ truy vấn."
      }
    }
  },
  {
    _id: "sd-s-042",
    difficulty: "senior",
    tags: ["system design", "api", "versioning"],
    content: {
      en: {
        title: "API Versioning Strategy",
        body: "Compare and contrast two major API versioning strategies: **URI versioning** (e.g., `/v1/users`) and **Header versioning** (e.g., `Accept-Version: v1`), including a trade-off for each.",
        solution: "1. **URI Versioning:** Simple, explicit, works easily with caching (trade-off: URL 'pollution', hard to support non-versioned requests). 2. **Header Versioning:** Cleaner URIs, keeps versioning separate (trade-off: more complex caching since the URL is the same, requires inspecting headers)."
      },
      jp: {
        title: "APIバージョン管理戦略",
        body: "主要な2つのAPIバージョン管理戦略である**URIバージョン管理**（例：`/v1/users`）と**ヘッダーバージョン管理**（例：`Accept-Version: v1`）を比較対照し、それぞれのトレードオフを含めて述べなさい。",
        solution: "1. **URIバージョン管理:** シンプルで明示的、キャッシングと容易に連携（トレードオフ：URLの「汚染」、バージョン管理されていないリクエストのサポートが困難）。 2. **ヘッダーバージョン管理:** URIがクリーン、バージョン管理を分離（トレードオフ：URLが同じであるためキャッシングがより複雑、ヘッダーの検査が必要）。"
      },
      vi: {
        title: "Chiến lược API Versioning",
        body: "So sánh và đối chiếu hai chiến lược API versioning chính: **URI versioning** (ví dụ: `/v1/users`) và **Header versioning** (ví dụ: `Accept-Version: v1`), bao gồm một sự đánh đổi cho mỗi chiến lược.",
        solution: "1. **URI Versioning:** Đơn giản, rõ ràng, hoạt động dễ dàng với caching (đánh đổi: 'ô nhiễm' URL, khó hỗ trợ các yêu cầu không có phiên bản). 2. **Header Versioning:** URI sạch hơn, giữ phiên bản tách biệt (đánh đổi: caching phức tạp hơn vì URL giống nhau, yêu cầu kiểm tra header)."
      }
    }
  },
  {
    _id: "sd-s-043",
    difficulty: "senior",
    tags: ["scaling", "load balancer", "metrics"],
    content: {
      en: {
        title: "Least Outstanding Requests",
        body: "Why is the **Least Outstanding Requests** load balancing algorithm generally considered superior to Least Connections in modern HTTP/2 microservices, and what metric does it use?",
        solution: "Least Outstanding Requests is superior because the 'number of connections' is less meaningful with HTTP/2 (which reuses connections). It uses the **number of requests currently being processed** by a server as the metric. This is a better indicator of the server's immediate processing load and response time, leading to more granular and effective load balancing decisions."
      },
      jp: {
        title: "最小未処理リクエスト",
        body: "最新のHTTP/2マイクロサービスにおいて、**最小未処理リクエスト**負荷分散アルゴリズムが最小接続数よりも一般的に優れていると見なされるのはなぜですか、またそれはどのメトリックを使用しますか？",
        solution: "最小未処理リクエストが優れているのは、HTTP/2（接続を再利用する）では「接続数」の意味が薄いためです。これは、サーバーによって**現在処理されているリクエストの数**をメトリックとして使用します。これは、サーバーの即時の処理負荷と応答時間のより良い指標となり、よりきめ細かく効果的な負荷分散の決定につながります。"
      },
      vi: {
        title: "Least Outstanding Requests",
        body: "Tại sao thuật toán cân bằng tải **Least Outstanding Requests (Yêu cầu đang chờ xử lý ít nhất)** thường được coi là vượt trội hơn so với Least Connections trong microservices HTTP/2 hiện đại, và nó sử dụng chỉ số nào?",
        solution: "Least Outstanding Requests vượt trội hơn vì 'số lượng kết nối' ít có ý nghĩa hơn với HTTP/2 (cái mà tái sử dụng kết nối). Nó sử dụng **số lượng yêu cầu hiện đang được xử lý** bởi một máy chủ làm chỉ số. Đây là một chỉ báo tốt hơn về tải xử lý tức thời và thời gian phản hồi của máy chủ, dẫn đến các quyết định cân bằng tải chi tiết và hiệu quả hơn."
      }
    }
  },
  {
    _id: "sd-s-044",
    difficulty: "senior",
    tags: ["system design", "data consistency", "trade-off"],
    content: {
      en: {
        title: "Linearizability vs Serializability",
        body: "Distinguish between **Linearizability** and **Serializability** in the context of database transactions and distributed systems.",
        solution: "**Serializability** ensures that a set of concurrent transactions produces the same result as some sequential execution of those transactions. **Linearizability** is a stronger condition for single operations: it ensures that *every* operation appears to take effect instantaneously at some point between its invocation and its response, maintaining a single, total ordering of all operations across the entire distributed system."
      },
      jp: {
        title: "線形化可能性 vs 直列化可能性",
        body: "データベーストランザクションと分散システムのコンテキストで、**線形化可能性（Linearizability）**と**直列化可能性（Serializability）**を区別しなさい。",
        solution: "**直列化可能性（Serializability）**は、一連の同時実行トランザクションが、それらのトランザクションのある逐次実行と同じ結果を生み出すことを保証します。**線形化可能性（Linearizability）**は単一操作に対するより強力な条件であり、*すべて*の操作が、その呼び出しと応答の間のどこかの時点で瞬時に効果を発揮するように見え、分散システム全体で**すべて**の操作の単一の、完全な順序付けを維持することを保証します。"
      },
      vi: {
        title: "Linearizability và Serializability",
        body: "Phân biệt giữa **Linearizability (Tính tuyến tính)** và **Serializability (Tính tuần tự hóa)** trong bối cảnh các giao dịch cơ sở dữ liệu và hệ thống phân tán.",
        solution: "**Serializability (Tính tuần tự hóa)** đảm bảo rằng một tập hợp các giao dịch đồng thời tạo ra cùng một kết quả như một số lần thực thi tuần tự của các giao dịch đó. **Linearizability (Tính tuyến tính)** là một điều kiện mạnh hơn cho các thao tác đơn lẻ: nó đảm bảo rằng *mọi* thao tác dường như có hiệu lực ngay lập tức tại một thời điểm nào đó giữa lời gọi và phản hồi của nó, duy trì một thứ tự tổng thể, duy nhất của **tất cả** các thao tác trên toàn bộ hệ thống phân tán."
      }
    }
  },
  {
    _id: "sd-s-045",
    difficulty: "senior",
    tags: ["security", "csrf", "samesite"],
    content: {
      en: {
        title: "SameSite Cookie Attribute",
        body: "Explain how setting the **SameSite** cookie attribute to `Strict` helps prevent Cross-Site Request Forgery (CSRF) attacks.",
        solution: "Setting `SameSite=Strict` ensures that the browser **will not send the cookie** with requests that originate from a different site (cross-site requests), even for navigation. Since a CSRF attack requires the attacker's site to successfully send a request with the victim's session cookie, preventing cross-site cookie transmission effectively mitigates the attack."
      },
      jp: {
        title: "SameSite Cookie属性",
        body: "**SameSite** Cookie属性を `Strict` に設定することが、クロスサイトリクエストフォージェリ（CSRF）攻撃を防ぐのにどのように役立つかを説明しなさい。",
        solution: "`SameSite=Strict` を設定すると、ナビゲーションの場合でも、異なるサイト（クロスサイトリクエスト）から発信されたリクエストでは、ブラウザが**Cookieを送信しない**ことが保証されます。CSRF攻撃では、攻撃者のサイトが被害者のセッションCookieを使用してリクエストを正常に送信する必要があるため、クロスサイトCookieの送信を防ぐことは、攻撃を効果的に軽減します。"
      },
      vi: {
        title: "Thuộc tính SameSite Cookie",
        body: "Giải thích cách việc đặt thuộc tính **SameSite** cookie thành `Strict` giúp ngăn chặn các cuộc tấn công Cross-Site Request Forgery (CSRF).",
        solution: "Việc đặt `SameSite=Strict` đảm bảo rằng trình duyệt **sẽ không gửi cookie** với các yêu cầu bắt nguồn từ một trang web khác (yêu cầu xuyên trang web), ngay cả đối với việc điều hướng. Vì một cuộc tấn công CSRF yêu cầu trang web của kẻ tấn công gửi thành công một yêu cầu với cookie phiên của nạn nhân, việc ngăn chặn truyền cookie xuyên trang web sẽ giảm thiểu hiệu quả cuộc tấn công."
      }
    }
  },
  {
    _id: "sd-s-046",
    difficulty: "senior",
    tags: ["system design", "pattern", "deployment"],
    content: {
      en: {
        title: "Blue/Green Deployment Drawback",
        body: "What is the primary technical challenge or risk associated with the **Blue/Green Deployment** strategy, specifically regarding databases and stateful services?",
        solution: "The primary challenge is **Database Schema Migration and Data Synchronization**. The 'Green' environment must be compatible with the 'Blue' database, or the schema must be changed backward-compatibly *before* the switch. Running two environments simultaneously often requires **dual-writing** or complex data sync to ensure the rollback ('Green' to 'Blue') is possible without data loss." 
      },
      jp: {
        title: "Blue/Greenデプロイメントの欠点",
        body: "特にデータベースとステートフルサービスに関して、**Blue/Greenデプロイメント**戦略に関連する主な技術的な課題またはリスクは何ですか？",
        solution: "主な課題は**データベーススキーマの移行とデータ同期**です。「Green」環境は「Blue」データベースと互換性があるか、またはスキーマが切り替え*前*に後方互換性のある方法で変更されている必要があります。2つの環境を同時に実行するには、データ損失なしにロールバック（「Green」から「Blue」へ）が可能であることを保証するために、**デュアルライティング**または複雑なデータ同期が必要になることがよくあります。"
      },
      vi: {
        title: "Nhược điểm của Blue/Green Deployment",
        body: "Thách thức hoặc rủi ro kỹ thuật chính liên quan đến chiến lược **Blue/Green Deployment** là gì, đặc biệt liên quan đến cơ sở dữ liệu và các dịch vụ có trạng thái (stateful services)?",
        solution: "Thách thức chính là **Di chuyển Schema Cơ sở Dữ liệu và Đồng bộ hóa Dữ liệu**. Môi trường 'Green' phải tương thích với cơ sở dữ liệu 'Blue', hoặc schema phải được thay đổi tương thích ngược *trước* khi chuyển đổi. Việc chạy đồng thời hai môi trường thường yêu cầu **ghi kép (dual-writing)** hoặc đồng bộ hóa dữ liệu phức tạp để đảm bảo việc rollback ('Green' sang 'Blue') có thể thực hiện được mà không mất dữ liệu."
      }
    }
  },
  {
    _id: "sd-s-047",
    difficulty: "senior",
    tags: ["system design", "networking", "firewall"],
    content: {
      en: {
        title: "Reverse Proxy vs Forward Proxy",
        body: "Distinguish the primary function and deployment goal of a **Reverse Proxy** versus a **Forward Proxy**.",
        solution: "A **Forward Proxy** sits **in front of a client** (e.g., in a corporate network) and routes requests *from* clients to external servers; its goal is filtering, security, and anonymity for the clients. A **Reverse Proxy** sits **in front of one or more web servers** and routes requests *to* the servers; its goal is load balancing, SSL termination, and caching to improve server performance and security."
      },
      jp: {
        title: "リバースプロキシ vs フォワードプロキシ",
        body: "**リバースプロキシ**と**フォワードプロキシ**の主な機能とデプロイメントの目標を区別しなさい。",
        solution: "**フォワードプロキシ**は**クライアントの前**に配置され（例：企業ネットワーク内）、クライアント*から*外部サーバーへのリクエストをルーティングします。その目標は、クライアントのフィルタリング、セキュリティ、匿名性です。**リバースプロキシ**は**1つ以上のウェブサーバーの前**に配置され、サーバー*へ*のリクエストをルーティングします。その目標は、サーバーのパフォーマンスとセキュリティを向上させるための負荷分散、SSL終端、およびキャッシングです。"
      },
      vi: {
        title: "Reverse Proxy và Forward Proxy",
        body: "Phân biệt chức năng chính và mục tiêu triển khai của **Reverse Proxy** so với **Forward Proxy**.",
        solution: "Một **Forward Proxy (Proxy chuyển tiếp)** nằm **trước một máy khách** (ví dụ: trong mạng công ty) và định tuyến các yêu cầu *từ* máy khách đến các máy chủ bên ngoài; mục tiêu của nó là lọc, bảo mật và ẩn danh cho máy khách. Một **Reverse Proxy (Proxy ngược)** nằm **trước một hoặc nhiều máy chủ web** và định tuyến các yêu cầu *đến* các máy chủ; mục tiêu của nó là cân bằng tải, chấm dứt SSL và caching để cải thiện hiệu suất và bảo mật của máy chủ."
      }
    }
  },
  {
    _id: "sd-s-048",
    difficulty: "senior",
    tags: ["system design", "mlops", "data pipeline"],
    content: {
      en: {
        title: "Feature Store",
        body: "What is a **Feature Store** in a machine learning system, and what specific problem does it solve in the deployment phase?",
        solution: "A Feature Store is a centralized service for managing, serving, and sharing processed data **features** (inputs to ML models). It solves the **training-serving skew** problem by guaranteeing that the data used for model *training* is exactly the same as the data used for real-time model *serving*, ensuring consistent model behavior in production."
      },
      jp: {
        title: "特徴量ストア",
        body: "機械学習システムにおける**特徴量ストア**とは何ですか、またデプロイメントフェーズでそれが解決する特定の問題は何ですか？",
        solution: "特徴量ストアは、処理されたデータ**特徴量**（MLモデルへの入力）を管理、提供、共有するための一元化されたサービスです。これは、モデルの*トレーニング*に使用されるデータと、リアルタイムのモデル*サービング*に使用されるデータが完全に同じであることを保証することで、**トレーニングとサービングのスキュー**の問題を解決し、本番環境での一貫したモデルの動作を保証します。"
      },
      vi: {
        title: "Feature Store",
        body: "Một **Feature Store (Kho Đặc trưng)** trong hệ thống học máy là gì, và vấn đề cụ thể nào nó giải quyết trong giai đoạn triển khai?",
        solution: "Feature Store là một dịch vụ tập trung để quản lý, phục vụ và chia sẻ các **feature (đặc trưng)** dữ liệu đã được xử lý (đầu vào cho các mô hình ML). Nó giải quyết vấn đề **training-serving skew (lệch đào tạo-phục vụ)** bằng cách đảm bảo rằng dữ liệu được sử dụng để *đào tạo* mô hình hoàn toàn giống với dữ liệu được sử dụng để *phục vụ* mô hình trong thời gian thực, đảm bảo hành vi mô hình nhất quán trong sản xuất."
      }
    }
  },
  {
    _id: "sd-s-049",
    difficulty: "senior",
    tags: ["data modeling", "database", "scaling"],
    content: {
      en: {
        title: "Multi-tenancy Database Strategies",
        body: "For a SaaS product, describe the **isolated schema/database** multi-tenancy strategy, and what is its primary advantage over the shared table strategy.",
        solution: "The isolated strategy dedicates a **separate database instance or schema** entirely to each tenant (customer). Its primary advantage is **stronger data isolation and security**. A breach in one tenant's environment cannot easily access another tenant's data, and it simplifies regulatory compliance and per-tenant backups/restores."
      },
      jp: {
        title: "マルチテナンシーデータベース戦略",
        body: "SaaS製品の場合、**隔離されたスキーマ/データベース**のマルチテナンシー戦略を説明し、共有テーブル戦略に対するその主な利点は何ですか。",
        solution: "隔離戦略では、テナント（顧客）ごとに完全に**分離されたデータベースインスタンスまたはスキーマ**を割り当てます。その主な利点は、**より強力なデータ隔離とセキュリティ**です。あるテナントの環境での侵害が、別のテナントのデータに簡単にアクセスすることを防ぎ、規制遵守とテナントごとのバックアップ/復元を簡素化します。"
      },
      vi: {
        title: "Chiến lược Multi-tenancy Database",
        body: "Đối với một sản phẩm SaaS, mô tả chiến lược đa thuê bao **schema/database cô lập**, và lợi thế chính của nó so với chiến lược bảng chia sẻ.",
        solution: "Chiến lược cô lập dành một **phiên bản cơ sở dữ liệu hoặc schema riêng biệt** hoàn toàn cho mỗi người thuê (khách hàng). Lợi thế chính của nó là **cô lập dữ liệu và bảo mật mạnh mẽ hơn**. Một sự vi phạm trong môi trường của một người thuê không thể dễ dàng truy cập dữ liệu của người thuê khác, và nó đơn giản hóa việc tuân thủ quy định cũng như sao lưu/khôi phục cho từng người thuê."
      }
    }
  },
  {
    _id: "sd-s-050",
    difficulty: "senior",
    tags: ["system design", "cost", "cloud"],
    content: {
      en: {
        title: "Reserved Instances vs Spot Instances",
        body: "Compare the use cases and cost trade-offs between **Reserved Instances (RIs)** and **Spot Instances** in a cloud computing architecture.",
        solution: "**Reserved Instances** are for **predictable, long-term, critical loads** (e.g., databases, core APIs). They offer the largest discount in exchange for a 1 or 3-year commitment (low risk, low flexibility). **Spot Instances** are for **fault-tolerant, non-critical, or batch loads** (e.g., job queues, data processing). They offer the largest cost savings but can be interrupted (high risk, high cost savings, high flexibility)."
      },
      jp: {
        title: "Reserved Instances vs Spot Instances",
        body: "クラウドコンピューティングアーキテクチャにおける**リザーブドインスタンス（RIs）**と**スポットインスタンス**の使用ケースとコストのトレードオフを比較しなさい。",
        solution: "**リザーブドインスタンス**は、**予測可能で長期的な重要な負荷**（例：データベース、コアAPI）向けです。1年または3年のコミットメントと引き換えに最大の割引を提供します（低リスク、低柔軟性）。**スポットインスタンス**は、**耐障害性のある、非重要、またはバッチ負荷**（例：ジョブキュー、データ処理）向けです。最大のコスト削減を提供しますが、中断される可能性があります（高リスク、高コスト削減、高柔軟性）。"
      },
      vi: {
        title: "Reserved Instances và Spot Instances",
        body: "So sánh các trường hợp sử dụng và sự đánh đổi về chi phí giữa **Reserved Instances (RI - Phiên bản Dự trữ)** và **Spot Instances** trong kiến trúc điện toán đám mây.",
        solution: "**Reserved Instances** dành cho **tải trọng quan trọng, dài hạn, có thể dự đoán được** (ví dụ: cơ sở dữ liệu, API cốt lõi). Chúng cung cấp mức giảm giá lớn nhất để đổi lấy cam kết 1 hoặc 3 năm (rủi ro thấp, ít linh hoạt). **Spot Instances** dành cho **tải trọng chịu lỗi, không quan trọng hoặc batch** (ví dụ: hàng đợi công việc, xử lý dữ liệu). Chúng cung cấp khoản tiết kiệm chi phí lớn nhất nhưng có thể bị gián đoạn (rủi ro cao, tiết kiệm chi phí cao, linh hoạt cao)."
      }
    }
  }
];