const systemDesignMiddleQuestions = [
  {
    _id: "sd-m-001",
    difficulty: "middle",
    tags: ["load balancer", "algorithms"],
    content: {
      en: {
        title: "Load Balancer Algorithm Selection",
        body: "When should you choose the 'Least Connections' load balancing algorithm over 'Round Robin'?",
        solution: "Choose **Least Connections** when servers have varying processing capabilities or loads, as it directs traffic to the server with the fewest active sessions, ensuring better utilization and faster response times for clients. **Round Robin** is best when all servers are identical and tasks are homogenous."
      },
      jp: {
        title: "負荷分散アルゴリズムの選択",
        body: "'ラウンドロビン'と比較して、いつ'最小接続数'の負荷分散アルゴリズムを選択すべきですか？",
        solution: "サーバーの処理能力や負荷が異なる場合、**最小接続数** を選択すべきです。これにより、アクティブなセッションが最も少ないサーバーにトラフィックが向けられ、より良い利用率とクライアントへの応答時間の短縮が保証されます。**ラウンドロビン** は、すべてのサーバーが同一でタスクが均質な場合に最適です。"
      },
      vi: {
        title: "Lựa chọn Thuật toán Load Balancer",
        body: "Khi nào bạn nên chọn thuật toán cân bằng tải 'Least Connections' thay vì 'Round Robin'?",
        solution: "Nên chọn **Least Connections (Kết nối ít nhất)** khi các máy chủ có khả năng xử lý hoặc tải khác nhau, vì nó định tuyến lưu lượng truy cập đến máy chủ có số lượng phiên hoạt động ít nhất, đảm bảo sử dụng tốt hơn và thời gian phản hồi nhanh hơn cho khách hàng. **Round Robin** là tốt nhất khi tất cả các máy chủ giống hệt nhau và các tác vụ đồng nhất."
      }
    }
  },
  {
    _id: "sd-m-002",
    difficulty: "middle",
    tags: ["database", "cap theorem", "trade-off"],
    content: {
      en: {
        title: "CAP Theorem Trade-off",
        body: "In the CAP theorem, which two properties do most distributed NoSQL databases choose to prioritize, and what does this imply?",
        solution: "Most distributed NoSQL databases prioritize **Availability (A)** and **Partition Tolerance (P)**. This implies they sacrifice strong **Consistency (C)**, leading to *Eventual Consistency*."
      },
      jp: {
        title: "CAP定理のトレードオフ",
        body: "CAP定理において、ほとんどの分散NoSQLデータベースが優先する2つの特性は何ですか、そしてこれは何を意味しますか？",
        solution: "ほとんどの分散NoSQLデータベースは、**可用性 (A)** と **分断耐性 (P)** を優先します。これは、厳密な **一貫性 (C)** を犠牲にし、*結果整合性* になることを意味します。"
      },
      vi: {
        title: "Đánh đổi trong Định lý CAP",
        body: "Trong định lý CAP, hai thuộc tính nào mà hầu hết các cơ sở dữ liệu NoSQL phân tán chọn ưu tiên, và điều này ngụ ý điều gì?",
        solution: "Hầu hết các cơ sở dữ liệu NoSQL phân tán ưu tiên **Availability (A - Tính sẵn sàng)** và **Partition Tolerance (P - Khả năng chịu phân vùng)**. Điều này ngụ ý họ hy sinh **Consistency (C - Tính nhất quán)** mạnh, dẫn đến *Eventual Consistency*."
      }
    }
  },
  {
    _id: "sd-m-003",
    difficulty: "middle",
    tags: ["caching", "design", "coherency"],
    content: {
      en: {
        title: "Cache-Aside Write Strategy",
        body: "In the Cache-Aside pattern, describe the recommended sequence of operations for a **write** request to maintain cache coherency.",
        solution: "The recommended sequence is: 1. **Write** the data to the **Database** (Persistent Store). 2. **Invalidate** (delete) the corresponding entry in the **Cache**. This prevents stale data from being served if the cache write fails."
      },
      jp: {
        title: "キャッシュアサイドの書き込み戦略",
        body: "キャッシュアサイドパターンにおいて、キャッシュの一貫性を維持するために推奨される**書き込み**リクエストの操作順序を説明しなさい。",
        solution: "推奨される順序は、1. データを**データベース**（永続ストア）に**書き込む**。 2. **キャッシュ**内の対応するエントリを**無効化**（削除）する。これにより、キャッシュへの書き込みが失敗した場合に古いデータが提供されるのを防ぎます。"
      },
      vi: {
        title: "Chiến lược Ghi của Cache-Aside",
        body: "Trong mô hình Cache-Aside, mô tả chuỗi hoạt động được khuyến nghị cho một yêu cầu **ghi** để duy trì tính đồng nhất của cache.",
        solution: "Chuỗi hoạt động được khuyến nghị là: 1. **Ghi** dữ liệu vào **Cơ sở dữ liệu** (Persistent Store). 2. **Vô hiệu hóa** (xóa) mục nhập tương ứng trong **Cache**. Điều này ngăn chặn dữ liệu cũ bị phục vụ nếu thao tác ghi vào cache thất bại."
      }
    }
  },
  {
    _id: "sd-m-004",
    difficulty: "middle",
    tags: ["sharding", "database"],
    content: {
      en: {
        title: "Challenge of Sharding Key",
        body: "What is the biggest challenge or risk associated with choosing a poor sharding key (or partition key)?",
        solution: "The biggest risk is **Hotspots** (or Skewed Data Distribution). A poor key can result in an uneven distribution of data or traffic, causing one or a few shards to become overloaded while others remain underutilized."
      },
      jp: {
        title: "シャーディングキーの課題",
        body: "不適切なシャーディングキー（またはパーティションキー）を選択することに関連する最大の課題またはリスクは何ですか？",
        solution: "最大のリスクは **ホットスポット**（またはデータ分布の偏り）です。不適切なキーは、データやトラフィックの分布が不均一になり、一部のシャードが過負荷になる一方で、他のシャードが十分に活用されない状態を引き起こす可能性があります。"
      },
      vi: {
        title: "Thách thức của Sharding Key",
        body: "Thách thức hoặc rủi ro lớn nhất liên quan đến việc chọn một sharding key (hoặc partition key) không tốt là gì?",
        solution: "Rủi ro lớn nhất là **Hotspots (Điểm nóng)** (hoặc Phân phối dữ liệu bị lệch). Một khóa kém có thể dẫn đến sự phân phối không đồng đều về dữ liệu hoặc lưu lượng truy cập, khiến một hoặc một vài shard bị quá tải trong khi những shard khác vẫn chưa được sử dụng hết công suất."
      }
    }
  },
  {
    _id: "sd-m-005",
    difficulty: "middle",
    tags: ["microservices", "event-driven"],
    content: {
      en: {
        title: "Asynchronous Communication",
        body: "Why is asynchronous communication (e.g., using a message queue) generally preferred over synchronous communication (e.g., REST) between microservices?",
        solution: "Asynchronous communication improves **decoupling, fault tolerance, and responsiveness**. Services don't need to be aware of each other's status, and a failure in one service won't immediately halt the workflow of another (non-blocking)."
      },
      jp: {
        title: "非同期通信",
        body: "マイクロサービス間の通信において、非同期通信（例：メッセージキューの使用）が同期通信（例：REST）よりも一般的に好まれるのはなぜですか？",
        solution: "非同期通信は、**疎結合、耐障害性、および応答性** を向上させます。サービスは互いのステータスを知る必要がなく、あるサービスでの障害が別のサービスのワークフローを直ちに停止させることはありません（非ブロッキング）。"
      },
      vi: {
        title: "Giao tiếp Bất đồng bộ",
        body: "Tại sao giao tiếp bất đồng bộ (ví dụ: sử dụng message queue) thường được ưu tiên hơn giao tiếp đồng bộ (ví dụ: REST) giữa các microservices?",
        solution: "Giao tiếp bất đồng bộ cải thiện **khả năng tách rời (decoupling), khả năng chịu lỗi, và tính phản hồi**. Các service không cần phải biết trạng thái của nhau, và một lỗi ở một service sẽ không làm ngừng ngay lập tức quy trình làm việc của service khác (non-blocking)."
      }
    }
  },
  {
    _id: "sd-m-006",
    difficulty: "middle",
    tags: ["networking", "dns", "cdn"],
    content: {
      en: {
        title: "CDN and DNS Interaction",
        body: "How is the Domain Name System (DNS) typically used to direct users to the nearest CDN Edge Server?",
        solution: "CDN providers use **DNS redirection** (specifically, CNAME records) combined with **GeoDNS** to look up the user's location and resolve the domain name to the IP address of the closest available Edge Server hosting the content, ensuring lower latency."
      },
      jp: {
        title: "CDNとDNSの相互作用",
        body: "ユーザーを最寄りのCDNエッジサーバーに誘導するために、ドメインネームシステム（DNS）は通常どのように使用されますか？",
        solution: "CDNプロバイダーは、ユーザーの場所を検索し、ドメイン名をコンテンツをホストしている最も近い利用可能なエッジサーバーのIPアドレスに解決するために、**GeoDNS** と組み合わせた **DNSリダイレクト**（具体的にはCNAMEレコード）を使用し、低レイテンシを保証します。"
      },
      vi: {
        title: "Tương tác giữa CDN và DNS",
        body: "Hệ thống Tên miền (DNS) thường được sử dụng như thế nào để định hướng người dùng đến Máy chủ biên (Edge Server) CDN gần nhất?",
        solution: "Các nhà cung cấp CDN sử dụng **chuyển hướng DNS** (cụ thể là bản ghi CNAME) kết hợp với **GeoDNS** để tra cứu vị trí của người dùng và phân giải tên miền thành địa chỉ IP của Máy chủ biên có sẵn gần nhất đang lưu trữ nội dung, đảm bảo độ trễ thấp hơn."
      }
    }
  },
  {
    _id: "sd-m-007",
    difficulty: "middle",
    tags: ["database", "transaction", "isolation"],
    content: {
      en: {
        title: "Serializable Isolation Level",
        body: "What is the highest and most restrictive database transaction isolation level, and what problem does it prevent?",
        solution: "The highest level is **Serializable**. It prevents all concurrency anomalies, including **Phantom Reads**, **Non-Repeatable Reads**, and **Dirty Reads**, by executing transactions sequentially as if they were run one after the other."
      },
      jp: {
        title: "Serializable分離レベル",
        body: "最も高く、最も制限の厳しいデータベーストランザクション分離レベルは何ですか、そしてそれはどのような問題を防止しますか？",
        solution: "最も高いレベルは **Serializable（直列化可能）** です。トランザクションをあたかも順次実行されたかのように実行することにより、**ファントムリード**、**ノンリピータブルリード**、**ダーティリード** を含むすべての同時実行性の異常を防止します。"
      },
      vi: {
        title: "Mức độ cô lập Serializable",
        body: "Mức độ cô lập giao dịch cơ sở dữ liệu cao nhất và hạn chế nhất là gì, và nó ngăn chặn vấn đề gì?",
        solution: "Mức độ cao nhất là **Serializable (Tuần tự hóa)**. Nó ngăn chặn tất cả các bất thường đồng thời, bao gồm **Phantom Reads**, **Non-Repeatable Reads**, và **Dirty Reads**, bằng cách thực thi các giao dịch tuần tự như thể chúng được chạy từng cái một."
      }
    }
  },
  {
    _id: "sd-m-008",
    difficulty: "middle",
    tags: ["system design", "metrics", "availability"],
    content: {
      en: {
        title: "Defining Availability (Nines)",
        body: "How many minutes of downtime per year are allowed for a system aiming for 'Four Nines' (99.99%) availability?",
        solution: "Four Nines (99.99%) availability allows for approximately **52.6 minutes** (0.01% of 365 days) of total downtime per year."
      },
      jp: {
        title: "可用性の定義 (ナイン)",
        body: "「フォーナイン」（99.99%）の可用性を目指すシステムでは、年間で何分間のダウンタイムが許容されますか？",
        solution: "フォーナイン（99.99%）の可用性は、年間合計で約 **52.6分**（365日の0.01%）のダウンタイムを許容します。"
      },
      vi: {
        title: "Định nghĩa Availability (Nines)",
        body: "Một hệ thống đặt mục tiêu đạt 'Four Nines' (99.99%) tính sẵn sàng được phép có bao nhiêu phút ngừng hoạt động mỗi năm?",
        solution: "Tính sẵn sàng Bốn số Chín (99.99%) cho phép tổng cộng khoảng **52.6 phút** (0.01% của 365 ngày) ngừng hoạt động mỗi năm."
      }
    }
  },
  {
    _id: "sd-m-009",
    difficulty: "middle",
    tags: ["security", "oauth", "api"],
    content: {
      en: {
        title: "Role of OAuth 2.0",
        body: "In a system where users log in via Google/Facebook, what problem does OAuth 2.0 primarily solve?",
        solution: "OAuth 2.0 solves the problem of **Delegated Authorization**. It allows an application to obtain limited access to a user's resources on another service (like Google) without ever needing the user's password, using access tokens instead."
      },
      jp: {
        title: "OAuth 2.0の役割",
        body: "ユーザーがGoogle/Facebook経由でログインするシステムにおいて、OAuth 2.0が主に解決する問題は何ですか？",
        solution: "OAuth 2.0は **委任された認可** の問題を解決します。これにより、アプリケーションはユーザーのパスワードを必要とせずに、アクセストークンを使用して別のサービス（Googleなど）上のユーザーのリソースへの制限されたアクセスを取得できます。"
      },
      vi: {
        title: "Vai trò của OAuth 2.0",
        body: "Trong một hệ thống nơi người dùng đăng nhập qua Google/Facebook, OAuth 2.0 chủ yếu giải quyết vấn đề gì?",
        solution: "OAuth 2.0 giải quyết vấn đề **Ủy quyền được ủy thác (Delegated Authorization)**. Nó cho phép một ứng dụng có được quyền truy cập giới hạn vào tài nguyên của người dùng trên một dịch vụ khác (như Google) mà không cần mật khẩu của người dùng, bằng cách sử dụng access token."
      }
    }
  },
  {
    _id: "sd-m-010",
    difficulty: "middle",
    tags: ["architecture", "monolith", "microservices"],
    content: {
      en: {
        title: "Microservices Deployment Complexity",
        body: "What is a major operational challenge introduced by migrating from a Monolith to Microservices?",
        solution: "A major challenge is **Increased Operational Complexity (DevOps/Deployment)**. Managing, monitoring, logging, and deploying dozens of independent services is far more complex than deploying a single monolithic application, often requiring tools like Kubernetes."
      },
      jp: {
        title: "マイクロサービスのデプロイメントの複雑さ",
        body: "モノリスからマイクロサービスへの移行によって引き起こされる主要な運用上の課題は何ですか？",
        solution: "主要な課題は、**運用上の複雑さの増加 (DevOps/デプロイメント)** です。数十の独立したサービスを管理、監視、ロギング、デプロイすることは、単一のモノリシックアプリケーションをデプロイするよりもはるかに複雑であり、多くの場合Kubernetesなどのツールが必要です。"
      },
      vi: {
        title: "Độ phức tạp khi Triển khai Microservices",
        body: "Thách thức hoạt động lớn nào nảy sinh khi chuyển từ Monolith sang Microservices?",
        solution: "Một thách thức lớn là **Sự gia tăng độ phức tạp trong vận hành (DevOps/Triển khai)**. Việc quản lý, giám sát, ghi log và triển khai hàng chục dịch vụ độc lập phức tạp hơn nhiều so với việc triển khai một ứng dụng nguyên khối duy nhất, thường đòi hỏi các công cụ như Kubernetes."
      }
    }
  },
  {
    _id: "sd-m-011",
    difficulty: "middle",
    tags: ["database", "read-write", "replication"],
    content: {
      en: {
        title: "Replication Lag",
        body: "What is 'Replication Lag' in a Master-Replica database setup, and what design decision does it force you to make?",
        solution: "Replication Lag is the delay between a write to the Master database and that data being reflected in the Replica(s). It forces a trade-off between **Read Consistency** and **Read Scalability**; reading from replicas risks reading stale data."
      },
      jp: {
        title: "レプリケーションラグ",
        body: "マスター-レプリカデータベースのセットアップにおける「レプリケーションラグ」とは何ですか、そしてそれはどのような設計上の決定を迫りますか？",
        solution: "レプリケーションラグは、マスターデータベースへの書き込みと、そのデータがレプリカに反映されるまでの遅延です。これは、**読み取りの一貫性** と **読み取りのスケーラビリティ** の間のトレードオフを強制します。レプリカから読み取ると、古いデータを読み取るリスクがあります。"
      },
      vi: {
        title: "Replication Lag",
        body: "'Replication Lag' (Độ trễ nhân rộng) trong thiết lập cơ sở dữ liệu Master-Replica là gì, và nó buộc bạn phải đưa ra quyết định thiết kế nào?",
        solution: "Replication Lag là độ trễ giữa một thao tác ghi vào cơ sở dữ liệu Master và dữ liệu đó được phản ánh trong Replica(s). Nó buộc phải đánh đổi giữa **Tính nhất quán khi đọc (Read Consistency)** và **Khả năng mở rộng khi đọc (Read Scalability)**; đọc từ các bản sao có nguy cơ đọc phải dữ liệu cũ."
      }
    }
  },
  {
    _id: "sd-m-012",
    difficulty: "middle",
    tags: ["api", "rest", "graphql"],
    content: {
      en: {
        title: "GraphQL vs REST - Over-fetching",
        body: "Explain how GraphQL inherently solves the 'over-fetching' problem often encountered with traditional REST APIs.",
        solution: "REST endpoints typically return a fixed structure of data, often including fields the client doesn't need (**over-fetching**). GraphQL allows the client to precisely specify only the required fields and relationships, minimizing data transfer."
      },
      jp: {
        title: "GraphQL vs REST - 過剰なデータ取得",
        body: "GraphQLが、従来のREST APIでよく発生する「過剰なデータ取得 (over-fetching)」の問題を本質的にどのように解決するかを説明しなさい。",
        solution: "RESTエンドポイントは通常、固定されたデータ構造を返し、クライアントが不要なフィールドを含むことがよくあります（**過剰なデータ取得**）。GraphQLでは、クライアントが必要なフィールドとリレーションシップのみを正確に指定できるため、データ転送が最小限に抑えられます。"
      },
      vi: {
        title: "GraphQL và REST - Over-fetching",
        body: "Giải thích cách GraphQL giải quyết vấn đề 'over-fetching' (lấy dư thừa dữ liệu) thường gặp với các REST API truyền thống.",
        solution: "Các endpoint REST thường trả về một cấu trúc dữ liệu cố định, thường bao gồm các trường mà máy khách không cần (**over-fetching**). GraphQL cho phép máy khách chỉ định chính xác chỉ các trường và mối quan hệ cần thiết, giảm thiểu việc truyền tải dữ liệu."
      }
    }
  },
  {
    _id: "sd-m-013",
    difficulty: "middle",
    tags: ["security", "cross-site", "xss"],
    content: {
      en: {
        title: "Preventing XSS",
        body: "What is the single most effective defense mechanism against Cross-Site Scripting (XSS) attacks in web applications?",
        solution: "The most effective defense is **Output Encoding (or Escaping)**: treating any data received from external sources (user input, database) as plain text before rendering it in the HTML view, which prevents the browser from executing it as code."
      },
      jp: {
        title: "XSSの防止",
        body: "ウェブアプリケーションにおけるクロスサイトスクリプティング（XSS）攻撃に対する最も効果的な単一の防御メカニズムは何ですか？",
        solution: "最も効果的な防御策は **出力エンコーディング（またはエスケープ）** です。外部ソース（ユーザー入力、データベース）から受け取ったデータを、HTMLビューでレンダリングする前にプレーンテキストとして扱い、ブラウザがそれをコードとして実行するのを防ぎます。"
      },
      vi: {
        title: "Ngăn chặn XSS",
        body: "Cơ chế phòng thủ hiệu quả nhất chống lại các cuộc tấn công Cross-Site Scripting (XSS) trong các ứng dụng web là gì?",
        solution: "Biện pháp phòng thủ hiệu quả nhất là **Mã hóa đầu ra (Output Encoding/Escaping)**: xử lý bất kỳ dữ liệu nào nhận được từ các nguồn bên ngoài (đầu vào người dùng, cơ sở dữ liệu) dưới dạng văn bản thuần túy trước khi hiển thị nó trong chế độ xem HTML, ngăn trình duyệt thực thi nó dưới dạng mã."
      }
    }
  },
  {
    _id: "sd-m-014",
    difficulty: "middle",
    tags: ["rate limiting", "algorithms"],
    content: {
      en: {
        title: "Token Bucket vs Leaky Bucket",
        body: "Which rate limiting algorithm is generally better for handling sudden bursts of traffic while ensuring a maximum output rate, and why?",
        solution: "**Token Bucket** is better for handling bursts. It allows a user to consume multiple tokens (requests) rapidly if they have been unused, offering elasticity for short bursts, while still enforcing the maximum rate (refill rate) in the long run."
      },
      jp: {
        title: "トークンバケット vs リーキーバケット",
        body: "突然のトラフィックの急増に対応しながら、最大出力レートを保証するのにより適しているレート制限アルゴリズムはどれですか、またその理由は何ですか？",
        solution: "急増に対応するには **トークンバケット** が優れています。未使用のトークンが蓄積されていれば、ユーザーが複数のトークン（リクエスト）を迅速に消費することを可能にし、短期的な急増に対する弾力性を提供しつつ、長期的には最大レート（補充レート）を強制します。"
      },
      vi: {
        title: "Token Bucket và Leaky Bucket",
        body: "Thuật toán giới hạn tốc độ nào nhìn chung tốt hơn để xử lý các đợt bùng nổ lưu lượng truy cập đột ngột trong khi vẫn đảm bảo tốc độ đầu ra tối đa, và tại sao?",
        solution: "**Token Bucket** tốt hơn để xử lý các đợt bùng nổ. Nó cho phép người dùng tiêu thụ nhiều token (yêu cầu) một cách nhanh chóng nếu chúng chưa được sử dụng, mang lại sự linh hoạt cho các đợt bùng nổ ngắn, đồng thời vẫn thực thi tốc độ tối đa (tốc độ nạp lại) về lâu dài."
      }
    }
  },
  {
    _id: "sd-m-015",
    difficulty: "middle",
    tags: ["observability", "metrics", "tracing"],
    content: {
      en: {
        title: "Difference between Logging and Tracing",
        body: "How does Distributed Tracing differ in purpose from standard application Logging in a microservices environment?",
        solution: "Logging records events within a **single service**. Tracing records the path of a **single request** as it flows through *multiple services* (distributed transaction), making it essential for debugging latency and failures across service boundaries."
      },
      jp: {
        title: "ロギングとトレーシングの違い",
        body: "マイクロサービス環境において、分散トレーシングは標準的なアプリケーションロギングと目的がどのように異なりますか？",
        solution: "ロギングは **単一のサービス内** のイベントを記録します。トレーシングは、**単一のリクエスト** が *複数のサービス* を通過する経路（分散トランザクション）を記録し、サービス境界を越えたレイテンシや障害のデバッグに不可欠です。"
      },
      vi: {
        title: "Khác biệt giữa Logging và Tracing",
        body: "Distributed Tracing khác gì về mục đích so với Logging ứng dụng tiêu chuẩn trong môi trường microservices?",
        solution: "Logging ghi lại các sự kiện trong **một service duy nhất**. Tracing ghi lại đường đi của **một yêu cầu duy nhất** khi nó chảy qua *nhiều service* (giao dịch phân tán), khiến nó cần thiết để gỡ lỗi độ trễ và lỗi trên ranh giới các service."
      }
    }
  },
  {
    _id: "sd-m-016",
    difficulty: "middle",
    tags: ["database", "nosql", "graph"],
    content: {
      en: {
        title: "Graph Database Use Case",
        body: "Identify a system design problem where a Graph Database is clearly superior to a Relational Database, and why.",
        solution: "A Graph Database is superior for systems modeling **complex relationships and connections** (e.g., social networks, recommendation engines, fraud detection). It uses nodes and edges, allowing for highly efficient traversal of relationships, which is slow and complex with JOINs in relational databases."
      },
      jp: {
        title: "グラフデータベースのユースケース",
        body: "グラフデータベースがリレーショナルデータベースよりも明らかに優れているシステム設計の問題を特定し、その理由を説明しなさい。",
        solution: "グラフデータベースは、**複雑な関係とつながり** をモデル化するシステム（例：ソーシャルネットワーク、レコメンデーションエンジン、不正検出）に優れています。ノードとエッジを使用するため、リレーショナルデータベースでのJOINによる遅く複雑な関係のトラバーサルが非常に効率的になります。"
      },
      vi: {
        title: "Trường hợp sử dụng Graph Database",
        body: "Xác định một vấn đề thiết kế hệ thống mà ở đó Graph Database vượt trội rõ rệt so với Relational Database, và tại sao.",
        solution: "Graph Database vượt trội hơn đối với các hệ thống mô hình hóa **các mối quan hệ và kết nối phức tạp** (ví dụ: mạng xã hội, công cụ gợi ý, phát hiện gian lận). Nó sử dụng các node và edge, cho phép duyệt các mối quan hệ hiệu quả cao, điều mà các thao tác JOIN trong cơ sở dữ liệu quan hệ rất chậm và phức tạp."
      }
    }
  },
  {
    _id: "sd-m-017",
    difficulty: "middle",
    tags: ["scaling", "caching", "hotspots"],
    content: {
      en: {
        title: "Cache Stampede Mitigation",
        body: "What is 'Cache Stampede' and describe one common mitigation technique for it.",
        solution: "Cache Stampede occurs when a cached item expires, and many requests simultaneously try to fetch and recalculate the data from the backend, overloading the service. Mitigation includes **Locking** (only one process regenerates the value) or **Probabilistic/Thundering Herd Prevention** (setting different, slightly staggered TTLs)."
      },
      jp: {
        title: "キャッシュスタンピードの軽減策",
        body: "「キャッシュスタンピード」とは何ですか、またそれに対する一般的な軽減策を1つ説明しなさい。",
        solution: "キャッシュスタンピードは、キャッシュされたアイテムの有効期限が切れ、多くのリクエストが同時にバックエンドからデータを取得および再計算しようとし、サービスを過負荷にするときに発生します。軽減策には、**ロック**（1つのプロセスのみが値を再生成する）または **確率的/サンダリングハード防止**（わずかにずらした異なるTTLを設定する）があります。"
      },
      vi: {
        title: "Giảm thiểu Cache Stampede",
        body: "'Cache Stampede' là gì và mô tả một kỹ thuật giảm thiểu phổ biến cho nó.",
        solution: "Cache Stampede xảy ra khi một mục đã được cache hết hạn, và nhiều yêu cầu đồng thời cố gắng tìm nạp và tính toán lại dữ liệu từ backend, làm quá tải dịch vụ. Giảm thiểu bao gồm **Khóa (Locking)** (chỉ một tiến trình được phép tái tạo giá trị) hoặc **Phòng ngừa Probabilistic/Thundering Herd** (đặt các TTL khác nhau, hơi lệch nhau)."
      }
    }
  },
  {
    _id: "sd-m-018",
    difficulty: "middle",
    tags: ["system design", "idempotent", "api"],
    content: {
      en: {
        title: "Idempotent POST API",
        body: "How can you make a non-idempotent POST API call (e.g., creating a payment) idempotent, ensuring safe retries?",
        solution: "Use a client-provided **Idempotency Key** (a unique token/UUID) in the request header. The server stores this key with the result of the first successful processing. Subsequent requests with the same key and input are simply ignored or return the original successful response."
      },
      jp: {
        title: "冪等なPOST API",
        body: "非冪等なPOST API呼び出し（例：支払いの作成）を冪等にし、安全な再試行を保証するにはどうすればよいですか？",
        solution: "リクエストヘッダーでクライアント提供の **冪等性キー**（一意のトークン/UUID）を使用します。サーバーは、最初の成功した処理の結果とともにこのキーを保存します。同じキーと入力を持つ後続のリクエストは、単に無視されるか、元の成功した応答を返します。"
      },
      vi: {
        title: "API POST có tính Idempotent",
        body: "Làm thế nào bạn có thể làm cho một lệnh gọi API POST không có tính lũy đẳng (ví dụ: tạo thanh toán) trở nên lũy đẳng, đảm bảo việc thử lại an toàn?",
        solution: "Sử dụng **Idempotency Key (Khóa lũy đẳng)** do máy khách cung cấp (một token/UUID duy nhất) trong tiêu đề yêu cầu. Máy chủ lưu trữ khóa này cùng với kết quả của lần xử lý thành công đầu tiên. Các yêu cầu tiếp theo có cùng khóa và đầu vào sẽ bị bỏ qua hoặc trả về phản hồi thành công ban đầu."
      }
    }
  },
  {
    _id: "sd-m-019",
    difficulty: "middle",
    tags: ["networking", "load balancer", "layer 7"],
    content: {
      en: {
        title: "Layer 7 Load Balancing",
        body: "What additional, application-specific decisions can a Layer 7 (Application Layer) Load Balancer make that a Layer 4 (Transport Layer) Load Balancer cannot?",
        solution: "Layer 7 can inspect the content of the request, allowing for **content-based routing** (e.g., routing based on URL path, hostname, or HTTP headers), as well as SSL termination and cookie-based session persistence."
      },
      jp: {
        title: "レイヤー7負荷分散",
        body: "レイヤー7（アプリケーション層）ロードバランサーが、レイヤー4（トランスポート層）ロードバランサーにはできない、アプリケーション固有のどのような追加の決定を行うことができますか？",
        solution: "レイヤー7はリクエストのコンテンツを検査できるため、**コンテンツベースのルーティング**（例：URLパス、ホスト名、またはHTTPヘッダーに基づくルーティング）、SSL終端、およびCookieベースのセッション永続化が可能です。"
      },
      vi: {
        title: "Cân bằng tải Layer 7",
        body: "Bộ cân bằng tải Layer 7 (Lớp Ứng dụng) có thể đưa ra những quyết định bổ sung, dành riêng cho ứng dụng nào mà Bộ cân bằng tải Layer 4 (Lớp Vận chuyển) không thể?",
        solution: "Layer 7 có thể kiểm tra nội dung của yêu cầu, cho phép **định tuyến dựa trên nội dung** (ví dụ: định tuyến dựa trên đường dẫn URL, tên máy chủ, hoặc tiêu đề HTTP), cũng như chấm dứt SSL và duy trì phiên dựa trên cookie."
      }
    }
  },
  {
    _id: "sd-m-020",
    difficulty: "middle",
    tags: ["system design", "back pressure"],
    content: {
      en: {
        title: "Concept of Back Pressure",
        body: "Define 'Back Pressure' in a streaming or message queue system, and explain why it is important.",
        solution: "Back Pressure is a mechanism where a fast-producing component slows down its output rate when a downstream consumer component becomes overwhelmed or slow. It's important to prevent the faster component from exhausting the slower component's resources (e.g., memory, CPU)."
      },
      jp: {
        title: "バックプレッシャーの概念",
        body: "ストリーミングまたはメッセージキューシステムにおける「バックプレッシャー」を定義し、それが重要である理由を説明しなさい。",
        solution: "バックプレッシャーとは、下流のコンシューマーコンポーネントが圧倒されたり遅くなったりしたときに、高速なプロデューサーコンポーネントが出力レートを低下させるメカニズムです。これは、より高速なコンポーネントが、より低速なコンポーネントのリソース（メモリ、CPUなど）を使い果たすのを防ぐために重要です。"
      },
      vi: {
        title: "Khái niệm Back Pressure",
        body: "Định nghĩa 'Back Pressure' (Áp suất ngược) trong một hệ thống hàng đợi tin nhắn hoặc streaming, và giải thích tại sao nó quan trọng.",
        solution: "Back Pressure là một cơ chế mà một thành phần tạo ra dữ liệu nhanh sẽ giảm tốc độ đầu ra của nó khi một thành phần tiêu thụ ở hạ nguồn bị quá tải hoặc chậm lại. Nó quan trọng để ngăn thành phần nhanh hơn làm cạn kiệt tài nguyên (ví dụ: bộ nhớ, CPU) của thành phần chậm hơn."
      }
    }
  },
  {
    _id: "sd-m-021",
    difficulty: "middle",
    tags: ["database", "nosql", "transactions"],
    content: {
      en: {
        title: "NoSQL Transactions",
        body: "Explain how transactions (ACID properties) are typically handled in a distributed Document NoSQL database like MongoDB.",
        solution: "Historically, transactions were limited to a single document (Atomicity on a document). Modern versions support **multi-document ACID transactions** across multiple documents, shards, and replicas, but they often incur higher overhead than single-document operations, balancing the BASE vs. ACID trade-off."
      },
      jp: {
        title: "NoSQLトランザクション",
        body: "MongoDBのような分散ドキュメントNoSQLデータベースでは、トランザクション（ACID特性）は通常どのように処理されますか？",
        solution: "歴史的に、トランザクションは単一のドキュメントに限定されていました（ドキュメント上の不可分性）。最新バージョンでは、複数のドキュメント、シャード、レプリカにわたる **複数ドキュメントのACIDトランザクション** がサポートされていますが、BASEとACIDのトレードオフをバランスさせるため、単一ドキュメント操作よりも高いオーバーヘッドを伴うことがよくあります。"
      },
      vi: {
        title: "Giao dịch NoSQL",
        body: "Giải thích cách các giao dịch (thuộc tính ACID) thường được xử lý trong một cơ sở dữ liệu NoSQL Document phân tán như MongoDB.",
        solution: "Trong lịch sử, các giao dịch bị giới hạn trong một tài liệu duy nhất (Tính nguyên tử trên một tài liệu). Các phiên bản hiện đại hỗ trợ **giao dịch ACID đa tài liệu** trên nhiều tài liệu, shard và replica, nhưng chúng thường phát sinh chi phí overhead cao hơn so với các thao tác trên một tài liệu duy nhất, cân bằng sự đánh đổi giữa BASE và ACID."
      }
    }
  },
  {
    _id: "sd-m-022",
    difficulty: "middle",
    tags: ["data", "etl", "batch"],
    content: {
      en: {
        title: "Purpose of Data Lakes",
        body: "In a modern data architecture, what is the primary purpose of a 'Data Lake', compared to a traditional Data Warehouse?",
        solution: "A Data Lake is designed to store **massive amounts of raw, unstructured, or semi-structured data** *in its native format* for later analysis, typically schema-on-read. A Data Warehouse stores structured data that has already been processed (schema-on-write) for specific business reporting."
      },
      jp: {
        title: "データレイクの目的",
        body: "現代のデータアーキテクチャにおいて、従来のデータウェアハウスと比較して、「データレイク」の主な目的は何ですか？",
        solution: "データレイクは、後に分析するために、**大量の生データ、非構造化データ、または半構造化データ** を *ネイティブ形式で* 保存するように設計されており、通常はスキーマオンリードです。データウェアハウスは、特定のビジネスレポートのためにすでに処理された構造化データ（スキーマオンライト）を保存します。"
      },
      vi: {
        title: "Mục đích của Data Lakes",
        body: "Trong kiến trúc dữ liệu hiện đại, mục đích chính của 'Data Lake' là gì, so với Data Warehouse truyền thống?",
        solution: "Data Lake được thiết kế để lưu trữ **số lượng lớn dữ liệu thô, phi cấu trúc hoặc bán cấu trúc** *ở định dạng gốc* để phân tích sau này, thường là schema-on-read. Data Warehouse lưu trữ dữ liệu có cấu trúc đã được xử lý (schema-on-write) cho các báo cáo kinh doanh cụ thể."
      }
    }
  },
  {
    _id: "sd-m-023",
    difficulty: "middle",
    tags: ["caching", "design", "eviction"],
    content: {
      en: {
        title: "LRU Eviction Policy",
        body: "Describe the LRU (Least Recently Used) cache eviction policy.",
        solution: "The LRU policy dictates that when the cache is full and new data needs to be added, the item that was **least recently accessed (read or written to)** is removed first. This policy is based on the heuristic that data used recently will likely be used again soon."
      },
      jp: {
        title: "LRU排除ポリシー",
        body: "LRU（Least Recently Used：最も長い間使用されていない）キャッシュ排除ポリシーを説明しなさい。",
        solution: "LRUポリシーは、キャッシュがいっぱいになり、新しいデータを追加する必要がある場合、**最も長い間アクセスされていない（読み取りまたは書き込みが行われていない）** アイテムが最初に削除されることを規定しています。このポリシーは、最近使用されたデータは近いうちに再び使用される可能性が高いというヒューリスティックに基づいています。"
      },
      vi: {
        title: "Chính sách loại bỏ LRU",
        body: "Mô tả chính sách loại bỏ cache LRU (Least Recently Used - Ít được sử dụng gần đây nhất).",
        solution: "Chính sách LRU quy định rằng khi cache đầy và cần thêm dữ liệu mới, mục **ít được truy cập gần đây nhất (đọc hoặc ghi)** sẽ bị loại bỏ trước tiên. Chính sách này dựa trên kinh nghiệm thực tế rằng dữ liệu được sử dụng gần đây có khả năng được sử dụng lại sớm."
      }
    }
  },
  {
    _id: "sd-m-024",
    difficulty: "middle",
    tags: ["networking", "http", "polling"],
    content: {
      en: {
        title: "Long Polling Mechanism",
        body: "How does Long Polling improve upon traditional Polling for real-time updates while still using the HTTP request-response model?",
        solution: "In Long Polling, the server deliberately **holds the client connection open** until new data is available or a timeout occurs. Traditional polling closes the connection and the client immediately sends a new request, wasting resources and increasing latency."
      },
      jp: {
        title: "ロングポーリングのメカニズム",
        body: "ロングポーリングは、HTTPリクエスト-レスポンスモデルを使用しながら、従来のポーリングと比較してリアルタイム更新をどのように改善しますか？",
        solution: "ロングポーリングでは、新しいデータが利用可能になるかタイムアウトが発生するまで、サーバーが意図的に**クライアント接続を開いたまま**にします。従来のポーリングは接続を閉じ、クライアントはすぐに新しいリクエストを送信するため、リソースを浪費し、レイテンシが増加します。"
      },
      vi: {
        title: "Cơ chế Long Polling",
        body: "Long Polling cải tiến như thế nào so với Polling truyền thống để cập nhật thời gian thực trong khi vẫn sử dụng mô hình yêu cầu-phản hồi HTTP?",
        solution: "Trong Long Polling, máy chủ cố ý **giữ kết nối máy khách mở** cho đến khi có dữ liệu mới hoặc xảy ra thời gian chờ. Polling truyền thống đóng kết nối và máy khách ngay lập tức gửi một yêu cầu mới, gây lãng phí tài nguyên và tăng độ trễ."
      }
    }
  },
  {
    _id: "sd-m-025",
    difficulty: "middle",
    tags: ["system design", "pattern", "circuit breaker"],
    content: {
      en: {
        title: "Circuit Breaker Pattern",
        body: "Explain the purpose of the Circuit Breaker pattern in a distributed system.",
        solution: "The Circuit Breaker pattern is used to **prevent cascading failures** in microservices. When a service constantly fails, the circuit breaker 'trips' (opens), causing immediate failure for new requests and giving the failing service time to recover, instead of hammering it with more requests." 
      },
      jp: {
        title: "サーキットブレーカーパターン",
        body: "分散システムにおけるサーキットブレーカーパターンの目的を説明しなさい。",
        solution: "サーキットブレーカーパターンは、マイクロサービスにおける**連鎖的な障害を防ぐ**ために使用されます。サービスが継続的に失敗すると、サーキットブレーカーが「トリップ」（オープン）し、新しいリクエストを即座に失敗させ、障害のあるサービスに追加のリクエストで叩きつけるのではなく、回復する時間を与えます。"
      },
      vi: {
        title: "Mô hình Circuit Breaker",
        body: "Giải thích mục đích của mô hình Circuit Breaker (Ngắt mạch) trong một hệ thống phân tán.",
        solution: "Mô hình Circuit Breaker được sử dụng để **ngăn chặn các lỗi dây chuyền (cascading failures)** trong microservices. Khi một dịch vụ liên tục thất bại, ngắt mạch sẽ 'ngắt' (mở), gây ra lỗi ngay lập tức cho các yêu cầu mới và cho dịch vụ bị lỗi thời gian phục hồi, thay vì liên tục gửi thêm yêu cầu tới nó."
      }
    }
  },
  {
    _id: "sd-m-026",
    difficulty: "middle",
    tags: ["database", "sharding", "consistent hashing"],
    content: {
      en: {
        title: "Consistent Hashing Use Case",
        body: "Why is Consistent Hashing a better sharding/partitioning strategy than simple modulo hashing when nodes (servers) are frequently added or removed?",
        solution: "Simple modulo hashing requires remapping *nearly all* data when a node is added/removed. Consistent Hashing minimizes the number of keys that need to be remapped (only $1/N$ keys, where $N$ is the number of nodes), drastically reducing data movement and operational overhead." 
      },
      jp: {
        title: "Consistent Hashingのユースケース",
        body: "ノード（サーバー）が頻繁に追加または削除される場合、Consistent Hashingが単純なモジュロハッシュよりも優れたシャーディング/パーティショニング戦略であるのはなぜですか？",
        solution: "単純なモジュロハッシュは、ノードが追加/削除されたときに *ほぼすべての* データを再マッピングする必要があります。Consistent Hashingは、再マッピングが必要なキーの数（ノード数$N$の場合、約$1/N$）を最小限に抑え、データ移動と運用オーバーヘッドを劇的に削減します。"
      },
      vi: {
        title: "Trường hợp sử dụng Consistent Hashing",
        body: "Tại sao Consistent Hashing là một chiến lược sharding/phân vùng tốt hơn so với băm modulo đơn giản khi các node (máy chủ) thường xuyên được thêm vào hoặc loại bỏ?",
        solution: "Băm modulo đơn giản yêu cầu tái lập bản đồ *gần như toàn bộ* dữ liệu khi một node được thêm/bỏ. Consistent Hashing giảm thiểu số lượng khóa cần được tái lập bản đồ (chỉ $1/N$ khóa, trong đó $N$ là số node), giảm đáng kể sự di chuyển dữ liệu và chi phí hoạt động."
      }
    }
  },
  {
    _id: "sd-m-027",
    difficulty: "middle",
    tags: ["api gateway", "microservices"],
    content: {
      en: {
        title: "API Gateway Aggregation",
        body: "Explain the role of 'API Gateway Aggregation' (or Composition) and why it's necessary in microservices.",
        solution: "Aggregation allows the gateway to receive a single client request and then internally make multiple calls to various backend microservices, combining the results into a single response before returning it to the client. This reduces client-side complexity and latency by minimizing round trips."
      },
      jp: {
        title: "APIゲートウェイ集約",
        body: "「APIゲートウェイ集約」（またはコンポジション）の役割と、マイクロサービスでそれがなぜ必要かを説明しなさい。",
        solution: "集約により、ゲートウェイは単一のクライアントリクエストを受け取り、その後内部的に様々なバックエンドマイクロサービスへの複数の呼び出しを行い、結果を組み合わせて単一の応答としてクライアントに返すことができます。これにより、ラウンドトリップが最小限に抑えられ、クライアント側の複雑さとレイテンシが軽減されます。"
      },
      vi: {
        title: "API Gateway Aggregation",
        body: "Giải thích vai trò của 'API Gateway Aggregation' (hoặc Composition) và tại sao nó cần thiết trong microservices.",
        solution: "Aggregation cho phép gateway nhận một yêu cầu duy nhất từ máy khách và sau đó thực hiện nhiều lệnh gọi nội bộ đến các microservice backend khác nhau, kết hợp các kết quả thành một phản hồi duy nhất trước khi trả lại cho máy khách. Điều này làm giảm độ phức tạp và độ trễ phía máy khách bằng cách giảm thiểu số lần giao tiếp khứ hồi (round trips)."
      }
    }
  },
  {
    _id: "sd-m-028",
    difficulty: "middle",
    tags: ["system design", "data structure", "bloom filter"],
    content: {
      en: {
        title: "Bloom Filter Use Case",
        body: "What is the primary use case of a Bloom Filter in system design, and what is its key trade-off?",
        solution: "A Bloom Filter is primarily used for **checking set membership** (e.g., 'Has this item been seen before?'). Its trade-off is between **space efficiency** (very compact) and **accuracy**; it allows for *false positives* (saying an item is in the set when it's not) but *never false negatives*."
      },
      jp: {
        title: "ブルームフィルターのユースケース",
        body: "システム設計におけるブルームフィルターの主なユースケースは何ですか、そしてその主要なトレードオフは何ですか？",
        solution: "ブルームフィルターは主に **集合のメンバーシップのチェック**（例：「このアイテムは以前に見られましたか？」）に使用されます。そのトレードオフは、**スペース効率**（非常にコンパクト）と **精度** の間にあります。*偽陽性*（アイテムがないのに、あると言う）を許容しますが、*偽陰性* は決してありません。"
      },
      vi: {
        title: "Trường hợp sử dụng Bloom Filter",
        body: "Trường hợp sử dụng chính của Bloom Filter trong thiết kế hệ thống là gì, và sự đánh đổi chính của nó là gì?",
        solution: "Bloom Filter chủ yếu được sử dụng để **kiểm tra tư cách thành viên của một tập hợp** (ví dụ: 'Mục này đã được thấy trước đây chưa?'). Sự đánh đổi của nó là giữa **hiệu quả không gian** (rất nhỏ gọn) và **độ chính xác**; nó cho phép *dương tính giả (false positives)* (nói rằng một mục có trong tập hợp khi nó không có) nhưng *không bao giờ có âm tính giả (false negatives)*."
      }
    }
  },
  {
    _id: "sd-m-029",
    difficulty: "middle",
    tags: ["database", "indexing", "b-tree"],
    content: {
      en: {
        title: "B-Tree vs B+ Tree",
        body: "In database indexing, why are B+ Trees generally preferred over B Trees for disk-based storage and range queries?",
        solution: "B+ Trees are preferred because **all data records are stored only at the leaf nodes** (Sequential Linking), which are linked together. This makes range queries highly efficient, and since internal nodes only store keys, more keys fit into a single block, reducing disk I/O operations."
      },
      jp: {
        title: "B-Tree vs B+ Tree",
        body: "データベースインデックス作成において、ディスクベースのストレージと範囲クエリ（Range Queries）でB+ TreeがB Treeよりも一般的に好まれるのはなぜですか？",
        solution: "B+ Treeが好まれるのは、**すべてのデータレコードがリーフノードにのみ保存され**（順次リンク）、それらが互いにリンクされているためです。これにより、範囲クエリが非常に効率的になり、内部ノードはキーのみを保存するため、より多くのキーが単一のブロックに収まり、ディスクI/O操作が削減されます。"
      },
      vi: {
        title: "B-Tree và B+ Tree",
        body: "Trong lập chỉ mục cơ sở dữ liệu, tại sao B+ Tree thường được ưu tiên hơn B Tree cho lưu trữ dựa trên đĩa và các truy vấn phạm vi (range queries)?",
        solution: "B+ Tree được ưu tiên vì **tất cả các bản ghi dữ liệu chỉ được lưu trữ tại các nút lá (leaf nodes)** (Liên kết tuần tự), và các nút lá này được liên kết với nhau. Điều này làm cho các truy vấn phạm vi rất hiệu quả, và vì các nút bên trong chỉ lưu trữ khóa, nên nhiều khóa hơn có thể nằm gọn trong một khối duy nhất, giảm các thao tác I/O đĩa."
      }
    }
  },
  {
    _id: "sd-m-030",
    difficulty: "middle",
    tags: ["networking", "http", "performance"],
    content: {
      en: {
        title: "HTTP/2 vs HTTP/1.1",
        body: "Name one key performance improvement that HTTP/2 introduced over HTTP/1.1.",
        solution: "HTTP/2 introduced **Header Compression** (using HPACK) and **Multiplexing** (allowing multiple requests/responses over a single TCP connection simultaneously), which dramatically reduces latency and the head-of-line blocking problem of HTTP/1.1."
      },
      jp: {
        title: "HTTP/2 vs HTTP/1.1",
        body: "HTTP/2がHTTP/1.1と比較して導入した主要なパフォーマンス改善点を1つ挙げてください。",
        solution: "HTTP/2は、**ヘッダー圧縮**（HPACKの使用）と **多重化（Multiplexing）**（単一のTCP接続で複数のリクエスト/レスポンスを同時に許可する）を導入しました。これにより、レイテンシとHTTP/1.1のHead-of-Line Blocking問題が劇的に軽減されます。"
      },
      vi: {
        title: "HTTP/2 và HTTP/1.1",
        body: "Nêu một cải tiến hiệu suất chính mà HTTP/2 đã giới thiệu so với HTTP/1.1.",
        solution: "HTTP/2 đã giới thiệu **Nén tiêu đề (Header Compression)** (sử dụng HPACK) và **Ghép kênh (Multiplexing)** (cho phép nhiều yêu cầu/phản hồi trên một kết nối TCP duy nhất đồng thời), điều này làm giảm đáng kể độ trễ và vấn đề tắc nghẽn Head-of-Line của HTTP/1.1."
      }
    }
  },
  {
    _id: "sd-m-031",
    difficulty: "middle",
    tags: ["security", "csrf"],
    content: {
      en: {
        title: "CSRF Prevention",
        body: "How does the use of a **CSRF Token** primarily prevent Cross-Site Request Forgery (CSRF) attacks?",
        solution: "A CSRF token is a secret, unique, and unpredictable value generated by the server and included in every request. Since an attacker's malicious site cannot access the token from the victim's session, the server rejects the request if the token is missing or invalid."
      },
      jp: {
        title: "CSRFの防止",
        body: "**CSRFトークン** の使用は、クロスサイトリクエストフォージェリ（CSRF）攻撃を主にどのように防止しますか？",
        solution: "CSRFトークンは、サーバーによって生成され、すべてのリクエストに含まれる秘密の、一意で予測不可能な値です。攻撃者の悪意のあるサイトは被害者のセッションからトークンにアクセスできないため、トークンが欠落しているか無効な場合、サーバーはリクエストを拒否します。"
      },
      vi: {
        title: "Ngăn chặn CSRF",
        body: "Việc sử dụng **CSRF Token** ngăn chặn các cuộc tấn công Cross-Site Request Forgery (CSRF) chủ yếu như thế nào?",
        solution: "CSRF token là một giá trị bí mật, duy nhất và không thể đoán trước được tạo bởi máy chủ và được bao gồm trong mọi yêu cầu. Vì trang web độc hại của kẻ tấn công không thể truy cập token từ phiên của nạn nhân, máy chủ sẽ từ chối yêu cầu nếu token bị thiếu hoặc không hợp lệ."
      }
    }
  },
  {
    _id: "sd-m-032",
    difficulty: "middle",
    tags: ["system design", "search", "indexing"],
    content: {
      en: {
        title: "Inverted Index",
        body: "What data structure is essential for implementing a full-text search engine (like Elasticsearch/Lucene), and how does it work conceptually?",
        solution: "The **Inverted Index** is essential. It works by mapping *content* (words/terms) to *locations* (documents/records) where those terms appear. This allows the search engine to quickly find documents containing a specific word, instead of scanning every document."
      },
      jp: {
        title: "転置インデックス",
        body: "全文検索エンジン（Elasticsearch/Luceneなど）を実装するために不可欠なデータ構造は何ですか、そしてそれは概念的にどのように機能しますか？",
        solution: "**転置インデックス** が不可欠です。これは、*コンテンツ*（単語/用語）がそれらの用語が出現する *場所*（ドキュメント/レコード）にマッピングされることによって機能します。これにより、検索エンジンは、すべてのドキュメントをスキャンする代わりに、特定の単語を含むドキュメントを迅速に見つけることができます。"
      },
      vi: {
        title: "Inverted Index",
        body: "Cấu trúc dữ liệu nào là thiết yếu để triển khai công cụ tìm kiếm toàn văn (full-text search engine) (như Elasticsearch/Lucene), và nó hoạt động theo khái niệm như thế nào?",
        solution: "**Inverted Index (Chỉ mục đảo ngược)** là thiết yếu. Nó hoạt động bằng cách ánh xạ *nội dung* (từ/thuật ngữ) đến *vị trí* (tài liệu/bản ghi) nơi các thuật ngữ đó xuất hiện. Điều này cho phép công cụ tìm kiếm nhanh chóng tìm thấy các tài liệu chứa một từ cụ thể, thay vì quét qua mọi tài liệu."
      }
    }
  },
  {
    _id: "sd-m-033",
    difficulty: "middle",
    tags: ["database", "nosql", "denormalization"],
    content: {
      en: {
        title: "Denormalization in NoSQL",
        body: "Why is 'Denormalization' a common and often necessary practice when designing a schema for a NoSQL document database?",
        solution: "NoSQL databases (unlike RDBMS) often lack the ability to perform complex, efficient JOINs across documents/collections. Denormalization (embedding related data) is used to co-locate all data needed for a query in a single document, minimizing read operations and improving read performance."
      },
      jp: {
        title: "NoSQLにおける非正規化",
        body: "NoSQLドキュメントデータベースのスキーマを設計する際、「非正規化」が一般的で、しばしば必要な実践であるのはなぜですか？",
        solution: "NoSQLデータベースは（RDBMSとは異なり）ドキュメント/コレクション間での複雑で効率的なJOINを実行する機能がしばしば欠けています。非正規化（関連データの埋め込み）は、クエリに必要なすべてのデータを単一のドキュメントに配置するために使用され、読み取り操作を最小限に抑え、読み取りパフォーマンスを向上させます。"
      },
      vi: {
        title: "Denormalization trong NoSQL",
        body: "Tại sao 'Denormalization' (Phi chuẩn hóa) là một thực hành phổ biến và thường cần thiết khi thiết kế schema cho cơ sở dữ liệu NoSQL Document?",
        solution: "Các cơ sở dữ liệu NoSQL (không giống như RDBMS) thường thiếu khả năng thực hiện các thao tác JOIN phức tạp, hiệu quả trên các tài liệu/collection. Phi chuẩn hóa (nhúng dữ liệu liên quan) được sử dụng để đồng vị trí tất cả dữ liệu cần thiết cho một truy vấn trong một tài liệu duy nhất, giảm thiểu các thao tác đọc và cải thiện hiệu suất đọc."
      }
    }
  },
  {
    _id: "sd-m-034",
    difficulty: "middle",
    tags: ["networking", "rpc", "grpc"],
    content: {
      en: {
        title: "gRPC Advantage",
        body: "What is the primary technical advantage of using gRPC (based on HTTP/2 and Protocol Buffers) over a traditional JSON/REST API for microservices communication?",
        solution: "The primary advantage is **Performance and Efficiency**. gRPC uses the binary format **Protocol Buffers** for serialization and HTTP/2 for transport, resulting in smaller payload sizes and faster transmission compared to human-readable text formats like JSON over HTTP/1.1."
      },
      jp: {
        title: "gRPCの利点",
        body: "マイクロサービス通信において、従来のJSON/REST APIと比較して、gRPC（HTTP/2とProtocol Buffersに基づく）を使用する主な技術的利点は何ですか？",
        solution: "主な利点は **パフォーマンスと効率** です。gRPCは、シリアライゼーションにバイナリ形式の **Protocol Buffers** を使用し、転送にHTTP/2を使用するため、HTTP/1.1上のJSONのような人間が読めるテキスト形式と比較して、ペイロードサイズが小さく、転送速度が速くなります。"
      },
      vi: {
        title: "Ưu điểm của gRPC",
        body: "Ưu điểm kỹ thuật chính của việc sử dụng gRPC (dựa trên HTTP/2 và Protocol Buffers) so với API JSON/REST truyền thống để giao tiếp microservices là gì?",
        solution: "Ưu điểm chính là **Hiệu suất và Hiệu quả**. gRPC sử dụng định dạng nhị phân **Protocol Buffers** để tuần tự hóa và HTTP/2 để vận chuyển, dẫn đến kích thước tải trọng (payload) nhỏ hơn và truyền tải nhanh hơn so với các định dạng văn bản dễ đọc như JSON qua HTTP/1.1."
      }
    }
  },
  {
    _id: "sd-m-035",
    difficulty: "middle",
    tags: ["system design", "scaling", "read-write"],
    content: {
      en: {
        title: "Separation of Read/Write",
        body: "What architectural pattern specifically involves separating the data model and operations for updating (Writes) and querying (Reads)?",
        solution: "The pattern is **Command Query Responsibility Segregation (CQRS)**. It separates the **Command** (write) model/database from the **Query** (read) model/database, allowing each side to be optimized and scaled independently, which is highly beneficial for read-heavy systems."
      },
      jp: {
        title: "読み取り/書き込みの分離",
        body: "更新（書き込み）とクエリ（読み取り）のデータモデルと操作を分離することを具体的に伴うアーキテクチャパターンは何ですか？",
        solution: "そのパターンは **Command Query Responsibility Segregation (CQRS)** です。これは、**コマンド**（書き込み）モデル/データベースを **クエリ**（読み取り）モデル/データベースから分離し、各側を独立して最適化およびスケーリングできるようにします。これは、読み取り負荷の高いシステムにとって非常に有益です。"
      },
      vi: {
        title: "Tách biệt Read/Write",
        body: "Mô hình kiến trúc nào đặc biệt liên quan đến việc tách biệt mô hình dữ liệu và các hoạt động để cập nhật (Ghi) và truy vấn (Đọc)?",
        solution: "Mô hình đó là **Command Query Responsibility Segregation (CQRS)**. Nó tách biệt mô hình/cơ sở dữ liệu **Command** (ghi) khỏi mô hình/cơ sở dữ liệu **Query** (đọc), cho phép mỗi bên được tối ưu hóa và mở rộng độc lập, điều này rất có lợi cho các hệ thống nặng về đọc."
      }
    }
  },
  {
    _id: "sd-m-036",
    difficulty: "middle",
    tags: ["security", "auth", "jwt"],
    content: {
      en: {
        title: "JWT Statelessness",
        body: "Why does using JWT (JSON Web Tokens) for authentication allow a backend system to be more easily scaled horizontally compared to traditional session cookies?",
        solution: "JWTs are **stateless**. All necessary user information and authentication data are encoded within the token itself. The server does not need to store session state in a centralized location (like a shared database/cache), simplifying horizontal scaling of the application servers."
      },
      jp: {
        title: "JWTのステートレス性",
        body: "認証にJWT（JSON Web Tokens）を使用すると、従来のセッションCookieと比較して、バックエンドシステムを水平にスケーリングしやすくなるのはなぜですか？",
        solution: "JWTは**ステートレス**です。必要なすべてのユーザー情報と認証データはトークン自体の中にエンコードされています。サーバーはセッション状態を一元化された場所（共有データベース/キャッシュなど）に保存する必要がないため、アプリケーションサーバーの水平スケーリングが簡素化されます。"
      },
      vi: {
        title: "Tính Stateless của JWT",
        body: "Tại sao việc sử dụng JWT (JSON Web Tokens) để xác thực cho phép một hệ thống backend dễ dàng được mở rộng theo chiều ngang hơn so với cookie phiên truyền thống?",
        solution: "JWTs là **phi trạng thái (stateless)**. Tất cả thông tin người dùng và dữ liệu xác thực cần thiết đều được mã hóa trong chính token. Máy chủ không cần lưu trữ trạng thái phiên ở một vị trí tập trung (như cơ sở dữ liệu/cache chia sẻ), đơn giản hóa việc mở rộng theo chiều ngang của các máy chủ ứng dụng."
      }
    }
  },
  {
    _id: "sd-m-037",
    difficulty: "middle",
    tags: ["data structure", "rate limiting", "design"],
    content: {
      en: {
        title: "Sliding Window Log Rate Limiter",
        body: "What is the key disadvantage of implementing rate limiting using the simple 'Sliding Window Log' algorithm?",
        solution: "The main disadvantage is **high memory and storage consumption**. The system must store a timestamp for *every single request* within the window (e.g., all timestamps for the last hour) in a cache or database, making it expensive for large volumes of traffic."
      },
      jp: {
        title: "Sliding Window Logレートリミッター",
        body: "単純な「Sliding Window Log」アルゴリズムを使用してレート制限を実装する際の主な欠点は何ですか？",
        solution: "主な欠点は、**高いメモリとストレージの消費** です。システムは、ウィンドウ内の *すべての単一のリクエスト* のタイムスタンプ（例：過去1時間分のすべてのタイムスタンプ）をキャッシュまたはデータベースに保存する必要があり、大量のトラフィックに対してコストがかかります。"
      },
      vi: {
        title: "Sliding Window Log Rate Limiter",
        body: "Nhược điểm chính của việc triển khai giới hạn tốc độ bằng thuật toán 'Sliding Window Log' đơn giản là gì?",
        solution: "Nhược điểm chính là **tiêu thụ bộ nhớ và lưu trữ cao**. Hệ thống phải lưu trữ dấu thời gian cho *mọi yêu cầu* trong cửa sổ (ví dụ: tất cả các dấu thời gian trong giờ qua) trong cache hoặc cơ sở dữ liệu, khiến nó tốn kém đối với lượng truy cập lớn."
      }
    }
  },
  {
    _id: "sd-m-038",
    difficulty: "middle",
    tags: ["database", "rdbms", "scalability"],
    content: {
      en: {
        title: "Scaling Relational Databases",
        body: "Besides Read Replicas and Sharding, what is one other common technique used to scale a relational database (RDBMS)?",
        solution: "**Connection Pooling** (managing and reusing database connections efficiently) or **Database Caching** (caching query results/objects at the application level) are common techniques to reduce database load and latency."
      },
      jp: {
        title: "リレーショナルデータベースのスケーリング",
        body: "リードレプリカとシャーディングの他に、リレーショナルデータベース（RDBMS）をスケーリングするために使用される一般的な手法をもう1つ挙げてください。",
        solution: "**接続プール**（データベース接続を効率的に管理および再利用する）または **データベースキャッシング**（アプリケーションレベルでクエリ結果/オブジェクトをキャッシングする）は、データベースの負荷とレイテンシを削減するための一般的な手法です。"
      },
      vi: {
        title: "Mở rộng Relational Database",
        body: "Ngoài Read Replicas và Sharding, một kỹ thuật phổ biến khác được sử dụng để mở rộng cơ sở dữ liệu quan hệ (RDBMS) là gì?",
        solution: "**Connection Pooling (Gộp kết nối)** (quản lý và tái sử dụng các kết nối cơ sở dữ liệu một cách hiệu quả) hoặc **Database Caching** (lưu trữ kết quả truy vấn/đối tượng ở cấp độ ứng dụng) là những kỹ thuật phổ biến để giảm tải và độ trễ của cơ sở dữ liệu."
      }
    }
  },
  {
    _id: "sd-m-039",
    difficulty: "middle",
    tags: ["system design", "queue", "fanout"],
    content: {
      en: {
        title: "Message Fanout Pattern",
        body: "Describe the 'Message Fanout' pattern using a message broker (like AWS SNS/SQS or Kafka/RabbitMQ).",
        solution: "Fanout involves sending a single message from a producer to a **topic or exchange**, which then broadcasts that message to **multiple independent consumers/queues**. This allows one event to trigger multiple different, parallel actions in the system."
      },
      jp: {
        title: "メッセージファンアウトパターン",
        body: "メッセージブローカー（AWS SNS/SQSやKafka/RabbitMQなど）を使用した「メッセージファンアウト」パターンを説明しなさい。",
        solution: "ファンアウトには、プロデューサーから**トピックまたはエクスチェンジ**に単一のメッセージを送信し、それがそのメッセージを**複数の独立したコンシューマー/キュー**にブロードキャストすることが含まれます。これにより、1つのイベントがシステム内で複数の異なる並行アクションをトリガーできます。"
      },
      vi: {
        title: "Mô hình Message Fanout",
        body: "Mô tả mô hình 'Message Fanout' (Phân phối tin nhắn) sử dụng một message broker (như AWS SNS/SQS hoặc Kafka/RabbitMQ).",
        solution: "Fanout liên quan đến việc gửi một tin nhắn duy nhất từ một nhà sản xuất đến một **topic hoặc exchange**, sau đó topic/exchange này sẽ phát tán tin nhắn đó đến **nhiều consumer/queue độc lập**. Điều này cho phép một sự kiện duy nhất kích hoạt nhiều hành động song song, khác nhau trong hệ thống."
      }
    }
  },
  {
    _id: "sd-m-040",
    difficulty: "middle",
    tags: ["security", "ddos", "mitigation"],
    content: {
      en: {
        title: "DDoS Mitigation at Edge",
        body: "Why is it critical to mitigate DDoS attacks as far away from the origin servers as possible (at the network edge)?",
        solution: "Mitigating at the edge (using CDNs, Cloud WAFs) prevents the massive volume of malicious traffic from consuming the limited resources (bandwidth, processing power) of the origin servers and network infrastructure, keeping the core services available."
      },
      jp: {
        title: "エッジでのDDoS軽減",
        body: "DDoS攻撃をオリジンサーバーからできるだけ遠い場所（ネットワークエッジ）で軽減することが重要であるのはなぜですか？",
        solution: "エッジ（CDN、クラウドWAFの使用）で軽減することで、大量の悪意のあるトラフィックがオリジンサーバーとネットワークインフラストラクチャの限られたリソース（帯域幅、処理能力）を消費するのを防ぎ、コアサービスを利用可能に保ちます。"
      },
      vi: {
        title: "Giảm thiểu DDoS tại Edge",
        body: "Tại sao việc giảm thiểu các cuộc tấn công DDoS càng xa máy chủ gốc càng tốt (tại network edge) là rất quan trọng?",
        solution: "Giảm thiểu tại Edge (sử dụng CDN, Cloud WAFs) ngăn chặn lượng lớn lưu lượng truy cập độc hại tiêu thụ các tài nguyên giới hạn (băng thông, sức mạnh xử lý) của các máy chủ gốc và cơ sở hạ tầng mạng, giữ cho các dịch vụ cốt lõi luôn sẵn sàng."
      }
    }
  },
  {
    _id: "sd-m-041",
    difficulty: "middle",
    tags: ["system design", "concurrency", "mutex"],
    content: {
      en: {
        title: "Distributed Lock",
        body: "In a distributed system, why are simple in-memory locks (like a mutex in a single process) insufficient for managing concurrency, and what is the typical solution?",
        solution: "In-memory locks only protect resources *within that single process*. They are insufficient because multiple instances of the service run on different machines. The typical solution is a **Distributed Lock** mechanism, often implemented using a consensus algorithm over a shared external resource (like Redis or ZooKeeper)."
      },
      jp: {
        title: "分散ロック",
        body: "分散システムにおいて、単純なインメモリロック（単一プロセス内のmutexなど）では並行性の管理に不十分であるのはなぜですか、また典型的な解決策は何ですか？",
        solution: "インメモリロックは *その単一プロセス内* のリソースのみを保護します。サービスインスタンスの複数のコピーが異なるマシンで実行されているため、これでは不十分です。典型的な解決策は **分散ロック** メカニズムであり、多くの場合、共有外部リソース（RedisやZooKeeperなど）上でのコンセンサスアルゴリズムを使用して実装されます。"
      },
      vi: {
        title: "Distributed Lock",
        body: "Trong một hệ thống phân tán, tại sao các khóa trong bộ nhớ đơn giản (như mutex trong một tiến trình duy nhất) lại không đủ để quản lý tính đồng thời (concurrency), và giải pháp điển hình là gì?",
        solution: "Khóa trong bộ nhớ chỉ bảo vệ tài nguyên *bên trong tiến trình đơn lẻ đó*. Chúng không đủ vì nhiều phiên bản của dịch vụ chạy trên các máy khác nhau. Giải pháp điển hình là cơ chế **Distributed Lock (Khóa phân tán)**, thường được triển khai bằng cách sử dụng thuật toán đồng thuận trên một tài nguyên ngoài được chia sẻ (như Redis hoặc ZooKeeper)."
      }
    }
  },
  {
    _id: "sd-m-042",
    difficulty: "middle",
    tags: ["system design", "database", "orm"],
    content: {
      en: {
        title: "N+1 Query Problem",
        body: "Describe the 'N+1 Query Problem' commonly encountered when using an ORM with relational databases, and its performance impact.",
        solution: "The N+1 problem occurs when retrieving a list of 'N' primary records, and then executing **N additional queries** (one for each primary record) to fetch related data (e.g., fetching comments for N posts). This results in excessive database round trips and high latency."
      },
      jp: {
        title: "N+1クエリ問題",
        body: "リレーショナルデータベースでORMを使用する際によく遭遇する「N+1クエリ問題」を説明し、そのパフォーマンスへの影響を述べなさい。",
        solution: "N+1問題は、N個のプライマリレコードのリストを取得する際に発生し、その後、関連データを取得するために **N個の追加クエリ**（各プライマリレコードごとに1つ）を実行することです（例：N個の投稿のコメントを取得）。これにより、過剰なデータベースのラウンドトリップと高いレイテンシが発生します。"
      },
      vi: {
        title: "Vấn đề N+1 Query",
        body: "Mô tả 'Vấn đề N+1 Query' thường gặp khi sử dụng ORM với cơ sở dữ liệu quan hệ, và tác động của nó đến hiệu suất.",
        solution: "Vấn đề N+1 xảy ra khi truy xuất một danh sách 'N' bản ghi chính, và sau đó thực thi **N truy vấn bổ sung** (một truy vấn cho mỗi bản ghi chính) để tìm nạp dữ liệu liên quan (ví dụ: tìm nạp bình luận cho N bài đăng). Điều này dẫn đến các giao tiếp khứ hồi (round trips) cơ sở dữ liệu quá mức và độ trễ cao."
      }
    }
  },
  {
    _id: "sd-m-043",
    difficulty: "middle",
    tags: ["monitoring", "alerting", "p95"],
    content: {
      en: {
        title: "P95 Latency Metric",
        body: "Why is tracking P95 (95th percentile) latency a better indicator of user experience than tracking the average (mean) latency?",
        solution: "The average (mean) can be heavily skewed by the majority of fast requests and hides problems experienced by a significant subset of users. P95 latency ensures that **95% of users** experience a response time equal to or faster than that metric, providing a more realistic view of the **worst-case common experience**."
      },
      jp: {
        title: "P95レイテンシメトリック",
        body: "平均（mean）レイテンシを追跡するよりも、P95（95パーセンタイル）レイテンシを追跡する方が、ユーザーエクスペリエンスのより良い指標となるのはなぜですか？",
        solution: "平均（mean）は、高速なリクエストの大部分によって大きく歪められる可能性があり、ユーザーの重要なサブセットが経験する問題を隠します。P95レイテンシは、**ユーザーの95%** がそのメトリック以下またはそれより速い応答時間を経験することを保証し、**最悪の一般的な体験** のより現実的なビューを提供します。"
      },
      vi: {
        title: "Chỉ số P95 Latency",
        body: "Tại sao việc theo dõi P95 (Phân vị thứ 95) độ trễ là một chỉ báo tốt hơn về trải nghiệm người dùng so với việc theo dõi độ trễ trung bình (mean)?",
        solution: "Giá trị trung bình (mean) có thể bị lệch nặng bởi phần lớn các yêu cầu nhanh và che giấu các vấn đề mà một tập hợp con đáng kể của người dùng gặp phải. P95 latency đảm bảo rằng **95% người dùng** trải nghiệm thời gian phản hồi bằng hoặc nhanh hơn chỉ số đó, cung cấp một cái nhìn thực tế hơn về **trải nghiệm tồi tệ nhất nhưng phổ biến**."
      }
    }
  },
  {
    _id: "sd-m-044",
    difficulty: "middle",
    tags: ["architecture", "serverless", "cost"],
    content: {
      en: {
        title: "Serverless Cold Start",
        body: "In a Serverless architecture (e.g., AWS Lambda, Azure Functions), what is a 'Cold Start' and what is its main performance drawback?",
        solution: "A Cold Start occurs when a function hasn't been used recently, requiring the runtime environment (container) to be initialized from scratch. The main drawback is **significantly increased latency** for the first few requests, as opposed to 'Warm' functions that are immediately ready."
      },
      jp: {
        title: "サーバーレスのコールドスタート",
        body: "サーバーレスアーキテクチャ（AWS Lambda、Azure Functionsなど）において、「コールドスタート」とは何ですか、またその主なパフォーマンス上の欠点は何ですか？",
        solution: "コールドスタートは、関数が最近使用されていない場合に発生し、ランタイム環境（コンテナ）をゼロから初期化する必要があります。主な欠点は、すぐに準備ができている「ウォーム」な関数とは対照的に、最初のいくつかのリクエストで **レイテンシが大幅に増加する** ことです。"
      },
      vi: {
        title: "Cold Start trong Serverless",
        body: "Trong kiến trúc Serverless (ví dụ: AWS Lambda, Azure Functions), 'Cold Start' là gì và nhược điểm hiệu suất chính của nó là gì?",
        solution: "Cold Start xảy ra khi một hàm chưa được sử dụng gần đây, đòi hỏi môi trường runtime (container) phải được khởi tạo lại từ đầu. Nhược điểm chính là **độ trễ tăng lên đáng kể** cho một vài yêu cầu đầu tiên, trái ngược với các hàm 'Warm' đã sẵn sàng ngay lập tức."
      }
    }
  },
  {
    _id: "sd-m-045",
    difficulty: "middle",
    tags: ["system design", "data structure", "geo"],
    content: {
      en: {
        title: "Geospatial Indexing",
        body: "What is the key data structure or algorithm commonly used to efficiently query geospatial data (e.g., 'find all restaurants within 5km')?",
        solution: "Common structures include **Quadtrees** (dividing space into quadrants) or **Geohashes** (encoding 2D space into a searchable string, often used with Key-Value stores/NoSQL). Relational databases often use R-Trees."
      },
      jp: {
        title: "地理空間インデックス作成",
        body: "地理空間データ（例：「5km以内のすべてのレストランを見つける」）を効率的にクエリするためによく使用される主要なデータ構造またはアルゴリズムは何ですか？",
        solution: "一般的な構造には、**Quadtrees**（空間を象限に分割する）または **Geohashes**（2D空間を検索可能な文字列にエンコードする、Key-Valueストア/NoSQLでよく使用される）があります。リレーショナルデータベースでは、しばしばR-Treesが使用されます。"
      },
      vi: {
        title: "Lập chỉ mục Không gian Địa lý",
        body: "Cấu trúc dữ liệu hoặc thuật toán chính thường được sử dụng để truy vấn dữ liệu không gian địa lý một cách hiệu quả (ví dụ: 'tìm tất cả nhà hàng trong vòng 5km') là gì?",
        solution: "Các cấu trúc phổ biến bao gồm **Quadtrees** (chia không gian thành các góc phần tư) hoặc **Geohashes** (mã hóa không gian 2D thành một chuỗi có thể tìm kiếm, thường được sử dụng với các kho Key-Value/NoSQL). Các cơ sở dữ liệu quan hệ thường sử dụng R-Trees."
      }
    }
  },
  {
    _id: "sd-m-046",
    difficulty: "middle",
    tags: ["database", "nosql", "consistency"],
    content: {
      en: {
        title: "ACID vs BASE",
        body: "Briefly define the 'B' and 'E' in the BASE properties (often associated with NoSQL) and how they contrast with ACID.",
        solution: "**B** stands for **Basically Available** (system responds to requests, failures don't halt it) and **E** stands for **Eventual Consistency** (data will eventually be consistent). BASE prioritizes Availability and Partition Tolerance over immediate Consistency, unlike ACID."
      },
      jp: {
        title: "ACID vs BASE",
        body: "BASE特性（しばしばNoSQLに関連付けられる）における「B」と「E」を簡潔に定義し、それらがACIDとどのように対照的であるかを説明しなさい。",
        solution: "**B** は **Basically Available（基本的に利用可能）** の略で（システムがリクエストに応答し、障害が発生しても停止しない）、**E** は **Eventual Consistency（結果整合性）** の略です（データは最終的に一貫する）。BASEは、ACIDとは異なり、即時の整合性よりも可用性と分断耐性を優先します。"
      },
      vi: {
        title: "ACID và BASE",
        body: "Định nghĩa ngắn gọn 'B' và 'E' trong các thuộc tính BASE (thường liên quan đến NoSQL) và cách chúng đối lập với ACID.",
        solution: "**B** là viết tắt của **Basically Available (Về cơ bản là sẵn sàng)** (hệ thống phản hồi yêu cầu, lỗi không làm nó ngừng hoạt động) và **E** là viết tắt của **Eventual Consistency (Tính nhất quán cuối cùng)** (dữ liệu cuối cùng sẽ nhất quán). BASE ưu tiên Tính sẵn sàng và Khả năng chịu phân vùng hơn Tính nhất quán tức thì, không giống như ACID."
      }
    }
  },
  {
    _id: "sd-m-047",
    difficulty: "middle",
    tags: ["api", "websocket", "realtime"],
    content: {
      en: {
        title: "WebSocket vs Server-Sent Events",
        body: "When designing a real-time system, when would you choose to use **Server-Sent Events (SSE)** instead of WebSockets?",
        solution: "Choose **SSE** when the communication flow is strictly **unidirectional** (server to client only) and you only need text-based data updates. SSE is simpler to implement, works over standard HTTP/1.1 or HTTP/2, and doesn't require the persistent, bidirectional overhead of a WebSocket connection."
      },
      jp: {
        title: "WebSocket vs Server-Sent Events",
        body: "リアルタイムシステムを設計する際、WebSocketの代わりに**Server-Sent Events (SSE)** を使用することを選択するのはいつですか？",
        solution: "通信フローが厳密に**単方向**（サーバーからクライアントへのみ）であり、テキストベースのデータ更新のみが必要な場合は、**SSE** を選択します。SSEは実装がよりシンプルで、標準のHTTP/1.1またはHTTP/2上で動作し、WebSocket接続のような永続的で双方向のオーバーヘッドを必要としません。"
      },
      vi: {
        title: "WebSocket và Server-Sent Events",
        body: "Khi thiết kế một hệ thống thời gian thực, khi nào bạn chọn sử dụng **Server-Sent Events (SSE)** thay vì WebSockets?",
        solution: "Chọn **SSE** khi luồng giao tiếp nghiêm ngặt là **đơn hướng** (chỉ từ máy chủ đến máy khách) và bạn chỉ cần cập nhật dữ liệu dựa trên văn bản. SSE đơn giản hơn để triển khai, hoạt động trên HTTP/1.1 hoặc HTTP/2 tiêu chuẩn và không yêu cầu chi phí overhead song công, liên tục của kết nối WebSocket."
      }
    }
  },
  {
    _id: "sd-m-048",
    difficulty: "middle",
    tags: ["networking", "proxy", "waf"],
    content: {
      en: {
        title: "Role of a WAF",
        body: "What is a WAF (Web Application Firewall) and what is its main function that differentiates it from a standard network firewall?",
        solution: "A WAF monitors, filters, and blocks traffic to and from a web application. Its main differentiation is that it operates at **Layer 7 (Application Layer)** and can analyze HTTP/S requests for common application-layer attacks (e.g., SQL Injection, XSS) based on the *content*."
      },
      jp: {
        title: "WAFの役割",
        body: "WAF（Webアプリケーションファイアウォール）とは何ですか、また標準のネットワークファイアウォールと区別する主な機能は何ですか？",
        solution: "WAFは、ウェブアプリケーションへのトラフィックとウェブアプリケーションからのトラフィックを監視、フィルタリング、ブロックします。その主な差別化要因は、**レイヤー7（アプリケーション層）** で動作し、*コンテンツ* に基づいて一般的なアプリケーション層攻撃（例：SQLインジェクション、XSS）のためにHTTP/Sリクエストを分析できることです。"
      },
      vi: {
        title: "Vai trò của WAF",
        body: "WAF (Web Application Firewall) là gì và chức năng chính nào của nó khiến nó khác biệt so với tường lửa mạng tiêu chuẩn?",
        solution: "WAF giám sát, lọc và chặn lưu lượng truy cập đến và đi từ một ứng dụng web. Sự khác biệt chính của nó là nó hoạt động ở **Layer 7 (Lớp Ứng dụng)** và có thể phân tích các yêu cầu HTTP/S để tìm các cuộc tấn công lớp ứng dụng phổ biến (ví dụ: SQL Injection, XSS) dựa trên *nội dung*."
      }
    }
  },
  {
    _id: "sd-m-049",
    difficulty: "middle",
    tags: ["scaling", "event-driven", "etl"],
    content: {
      en: {
        title: "Change Data Capture (CDC)",
        body: "In data integration, what is Change Data Capture (CDC), and how is it often implemented in a system design?",
        solution: "CDC is a set of software design patterns used to **identify and track changes** in a database so that other systems can act on those changes in near real-time. It is often implemented by reading the database's **transaction log** (e.g., MySQL Binlog or PostgreSQL WAL) and streaming the changes to a message bus (like Kafka)."
      },
      jp: {
        title: "変更データキャプチャ（CDC）",
        body: "データ統合において、変更データキャプチャ（CDC）とは何ですか、またシステム設計でどのように実装されることが多いですか？",
        solution: "CDCは、データベース内の**変更を特定および追跡する**ために使用される一連のソフトウェア設計パターンであり、他のシステムがそれらの変更にほぼリアルタイムで対応できるようにします。多くの場合、データベースの**トランザクションログ**（例：MySQL BinlogやPostgreSQL WAL）を読み取り、変更をメッセージバス（Kafkaなど）にストリーミングすることによって実装されます。"
      },
      vi: {
        title: "Change Data Capture (CDC)",
        body: "Trong tích hợp dữ liệu, Change Data Capture (CDC) là gì, và nó thường được triển khai như thế nào trong thiết kế hệ thống?",
        solution: "CDC là một tập hợp các mô hình thiết kế phần mềm được sử dụng để **xác định và theo dõi các thay đổi** trong cơ sở dữ liệu để các hệ thống khác có thể hành động dựa trên những thay đổi đó gần như thời gian thực. Nó thường được triển khai bằng cách đọc **transaction log** của cơ sở dữ liệu (ví dụ: MySQL Binlog hoặc PostgreSQL WAL) và truyền các thay đổi đó đến một message bus (như Kafka)."
      }
    }
  },
  {
    _id: "sd-m-050",
    difficulty: "middle",
    tags: ["system design", "pattern", "bulkhead"],
    content: {
      en: {
        title: "Bulkhead Pattern",
        body: "Explain the goal of the 'Bulkhead Pattern' in a microservices environment, using a ship analogy.",
        solution: "The Bulkhead Pattern isolates parts of a system so that a failure in one area does not bring down the entire system. Like the sealed compartments (bulkheads) in a ship, if one microservice fails or is overloaded, the failure is contained, preventing it from 'sinking' the other services." 
      },
      jp: {
        title: "バルクヘッドパターン",
        body: "船の類推を使用して、マイクロサービス環境における「バルクヘッドパターン」の目的を説明しなさい。",
        solution: "バルクヘッドパターンは、システムの特定の部分を隔離し、ある領域での障害がシステム全体をダウンさせないようにします。船の密閉された区画（バルクヘッド）のように、1つのマイクロサービスが故障したり過負荷になったりした場合、その障害は封じ込められ、他のサービスを「沈める」のを防ぎます。"
      },
      vi: {
        title: "Mô hình Bulkhead",
        body: "Giải thích mục tiêu của 'Mô hình Bulkhead' (Vách ngăn) trong môi trường microservices, sử dụng phép loại suy về con tàu.",
        solution: "Mô hình Bulkhead cô lập các phần của hệ thống để một lỗi ở một khu vực không làm sập toàn bộ hệ thống. Giống như các khoang kín (vách ngăn) trên một con tàu, nếu một microservice bị lỗi hoặc quá tải, lỗi đó sẽ được ngăn chặn, không cho phép nó 'nhấn chìm' các dịch vụ khác."
      }
    }
  }
];