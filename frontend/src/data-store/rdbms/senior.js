export const rdbmsSeniorQuestions = [
    {
        _id: "rdbms-s-001",
        difficulty: "senior",
        tags: ["storage", "clustering", "index", "performance"],
        content: {
            en: {
                title: "Explain the fundamental difference between a **Clustered Index** and a **Non-Clustered Index** in terms of data storage.",
                body: "What critical impact does the Clustered Index have on the physical order of the data?",
                solution: "A **Clustered Index** defines the **physical order in which the data rows are stored** on disk (the leaf nodes *are* the data rows). A table can only have one. A **Non-Clustered Index** is a separate structure that stores the key columns and a pointer (the Clustered Key or Row ID) back to the data rows. A table can have many."
            },
            jp: {
                title: "**クラスター化インデックス**と**非クラスター化インデックス**の、データストレージの観点からの根本的な違いを説明してください。",
                body: "クラスター化インデックスは、データの物理的な順序にどのような重大な影響を与えますか？",
                solution: "**クラスター化インデックス**は、データ行がディスクに**物理的に格納される順序を定義**します（リーフノードはデータ行そのものです）。テーブルには1つしか持つことができません。**非クラスター化インデックス**は、キー列とデータ行へのポインター（クラスター化キーまたは行ID）を格納する別の構造です。テーブルには多数持つことができます。"
            },
            vi: {
                title: "Giải thích sự khác biệt cơ bản giữa **Clustered Index** (Chỉ mục Phân cụm) và **Non-Clustered Index** (Chỉ mục Không phân cụm) về mặt lưu trữ dữ liệu.",
                body: "Chỉ mục Phân cụm có tác động quan trọng nào đến thứ tự vật lý của dữ liệu?",
                solution: "**Clustered Index** định nghĩa **thứ tự vật lý mà các hàng dữ liệu được lưu trữ** trên đĩa (các nút lá *chính là* các hàng dữ liệu). Một bảng chỉ có thể có một. **Non-Clustered Index** là một cấu trúc riêng biệt lưu trữ các cột khóa và một con trỏ (Khóa Phân cụm hoặc ID Hàng) trở lại các hàng dữ liệu. Một bảng có thể có nhiều chỉ mục không phân cụm."
            }
        }
    },
    {
        _id: "rdbms-s-002",
        difficulty: "senior",
        tags: ["transaction", "isolation level", "serializable", "locking"],
        content: {
            en: {
                title: "In the **Serializable** Isolation Level, how does the RDBMS prevent **Phantom Reads** without potentially locking the entire table?",
                body: "What is the name of the locking technique used to protect the set of rows?",
                solution: "The RDBMS prevents Phantom Reads using **Key-Range Locks** or **Predicate Locks**. Instead of just locking the existing data rows, it locks the range of index entries that cover the criteria used in the `WHERE` clause. This prevents new rows from being inserted or deleted within that range until the transaction commits, thereby protecting the 'keys' of the phantom rows."
            },
            jp: {
                title: "**Serializable**（直列化可能）隔離レベルでは、RDBMSはテーブル全体をロックすることなく、**ファントム読み取り**をどのように防ぎますか？",
                body: "行のセットを保護するために使用されるロック技術の名前は何ですか？",
                solution: "RDBMSは、**キー範囲ロック**または**述語ロック**を使用してファントム読み取りを防ぎます。既存のデータ行をロックするだけでなく、`WHERE`句で使用される基準をカバーするインデックスエントリの範囲をロックします。これにより、トランザクションがコミットされるまで、その範囲内に新しい行が挿入または削除されるのを防ぎ、ファントム行の「キー」を保護します。"
            },
            vi: {
                title: "Trong Mức độ Cô lập **Serializable** (Có thể Tuần tự hóa), RDBMS ngăn chặn **Phantom Reads** (Đọc bóng ma) như thế nào mà không cần khóa toàn bộ bảng?",
                body: "Tên của kỹ thuật khóa được sử dụng để bảo vệ tập hợp các hàng là gì?",
                solution: "RDBMS ngăn chặn Phantom Reads bằng cách sử dụng **Khóa Phạm vi Khóa (Key-Range Locks)** hoặc **Khóa Vị từ (Predicate Locks)**. Thay vì chỉ khóa các hàng dữ liệu hiện có, nó khóa phạm vi các mục chỉ mục bao gồm các tiêu chí được sử dụng trong mệnh đề `WHERE`. Điều này ngăn không cho các hàng mới được chèn hoặc xóa trong phạm vi đó cho đến khi giao dịch commit, qua đó bảo vệ 'các khóa' của các hàng bóng ma."
            }
        }
    },
    {
        _id: "rdbms-s-003",
        difficulty: "senior",
        tags: ["sql", "join", "merge join", "optimization"],
        content: {
            en: {
                title: "Briefly describe how a **Sort-Merge Join** works, and under what conditions it is often the most efficient join method.",
                body: "What is the prerequisite for both tables involved in the join?",
                solution: "A Sort-Merge Join involves two phases: **1. Sort Phase:** Both input tables are sorted on the join key (if not already indexed/sorted). **2. Merge Phase:** The sorted inputs are scanned simultaneously to find matches. It is highly efficient when **both input tables are large** and **already sorted** (or have covering indexes) on the join column, as it avoids repeated lookups and hashing."
            },
            jp: {
                title: "**ソートマージ結合**がどのように機能するか、そしてどのような条件下で最も効率的な結合方法となることが多いかを簡単に説明してください。",
                body: "結合に関わる両方のテーブルの前提条件は何ですか？",
                solution: "ソートマージ結合には2つのフェーズがあります。**1. ソートフェーズ:** 両方の入力テーブルが結合キーでソートされます（まだインデックス/ソートされていない場合）。**2. マージフェーズ:** ソートされた入力が同時にスキャンされ、一致が検索されます。**両方の入力テーブルが大きく**、結合列で**すでにソートされている**（またはカバリングインデックスを持っている）場合に非常に効率的です。これにより、繰り返しのルックアップとハッシュ化が回避されます。"
            },
            vi: {
                title: "Mô tả ngắn gọn cách thức hoạt động của **Sort-Merge Join** (Join Sắp xếp-Hợp nhất), và trong điều kiện nào nó thường là phương pháp join hiệu quả nhất.",
                body: "Điều kiện tiên quyết cho cả hai bảng tham gia vào phép join là gì?",
                solution: "Sort-Merge Join bao gồm hai giai đoạn: **1. Giai đoạn Sắp xếp (Sort Phase):** Cả hai bảng đầu vào được sắp xếp theo khóa join (nếu chưa được lập chỉ mục/sắp xếp). **2. Giai đoạn Hợp nhất (Merge Phase):** Các đầu vào đã được sắp xếp được quét đồng thời để tìm các kết quả khớp. Nó rất hiệu quả khi **cả hai bảng đầu vào đều lớn** và **đã được sắp xếp** (hoặc có chỉ mục bao phủ) trên cột join, vì nó tránh việc tra cứu và băm lặp đi lặp lại."
            }
        }
    },
    {
        _id: "rdbms-s-004",
        difficulty: "senior",
        tags: ["index", "fragmentation", "rebuild", "reorganize"],
        content: {
            en: {
                title: "What is **Index Fragmentation**, and what is the difference between an index **REBUILD** and an index **REORGANIZE** operation in addressing it?",
                body: "Which operation is typically faster and runs online?",
                solution: "Fragmentation is when the logical order of index pages does not match their physical storage order on disk, degrading I/O performance. **REBUILD** drops and recreates the index, completely removing fragmentation and updating statistics (often requires more space/logging). **REORGANIZE** physically reorders the leaf nodes of the index *in place* (typically faster and can run online), but doesn't guarantee 100% defragmentation."
            },
            jp: {
                title: "**インデックスの断片化**とは何ですか、そしてそれに対処するためのインデックスの**REBUILD**操作とインデックスの**REORGANIZE**操作の違いは何ですか？",
                body: "どちらの操作が通常高速でオンラインで実行されますか？",
                solution: "断片化とは、インデックスページの論理的な順序がディスク上の物理的なストレージ順序と一致しないことであり、I/Oパフォーマンスを低下させます。**REBUILD**はインデックスをドロップして再作成し、断片化を完全に削除し、統計を更新します（通常、より多くのスペース/ロギングが必要です）。**REORGANIZE**は、インデックスのリーフノードを*その場で*物理的に再編成します（通常高速でオンラインで実行できます）が、100%のデフラグメンテーションは保証しません。"
            },
            vi: {
                title: "**Index Fragmentation** (Phân mảnh Chỉ mục) là gì, và sự khác biệt giữa thao tác **REBUILD** và **REORGANIZE** chỉ mục trong việc giải quyết nó là gì?",
                body: "Thao tác nào thường nhanh hơn và chạy trực tuyến (online)?",
                solution: "Phân mảnh xảy ra khi thứ tự logic của các trang chỉ mục không khớp với thứ tự lưu trữ vật lý của chúng trên đĩa, làm giảm hiệu suất I/O. **REBUILD** loại bỏ và tạo lại chỉ mục, loại bỏ hoàn toàn phân mảnh và cập nhật thống kê (thường yêu cầu nhiều không gian/ghi log hơn). **REORGANIZE** sắp xếp lại vật lý các nút lá của chỉ mục *tại chỗ* (thường nhanh hơn và có thể chạy trực tuyến), nhưng không đảm bảo khử phân mảnh 100%."
            }
        }
    },
    {
        _id: "rdbms-s-005",
        difficulty: "senior",
        tags: ["concurrency", "latching", "spin lock", "buffer pool"],
        content: {
            en: {
                title: "In the context of high concurrency, explain the concept of **Latching** contention (e.g., on B-Tree index pages).",
                body: "How does latching differ from locking, and why is high latch contention detrimental to scalability?",
                solution: "**Latching** is a lightweight, internal protection mechanism for memory structures (like index pages in the buffer pool) to ensure data integrity during very short operations. High latch contention occurs when many threads try to access the same memory structure simultaneously. Unlike locks, latches are very short spin-locks, but high contention blocks the CPU from doing useful work, severely limiting the system's **scalability** and increasing query latency."
            },
            jp: {
                title: "高同時実行性の文脈で、**ラッチ**競合（B-Treeインデックスページなど）の概念を説明してください。",
                body: "ラッチングはロックとどう異なり、なぜ高いラッチ競合はスケーラビリティにとって有害なのですか？",
                solution: "**ラッチング**は、メモリ構造（バッファプール内のインデックスページなど）を保護するための軽量の内部保護メカニズムであり、非常に短い操作中のデータ整合性を確保します。高いラッチ競合は、多くのスレッドが同時に同じメモリ構造にアクセスしようとするときに発生します。ロックとは異なり、ラッチは非常に短いスピンロックですが、高い競合はCPUが有用な作業を行うのを妨げ、システムの**スケーラビリティ**を著しく制限し、クエリのレイテンシを増加させます。"
            },
            vi: {
                title: "Trong bối cảnh đồng thời cao, giải thích khái niệm về tranh chấp **Latching** (Chốt) (ví dụ: trên các trang chỉ mục B-Tree).",
                body: "Latching khác với locking như thế nào, và tại sao tranh chấp chốt cao lại gây hại cho khả năng mở rộng?",
                solution: "**Latching** là một cơ chế bảo vệ nội bộ, nhẹ cho các cấu trúc bộ nhớ (như các trang chỉ mục trong vùng bộ đệm) để đảm bảo tính toàn vẹn dữ liệu trong các thao tác rất ngắn. Tranh chấp chốt cao xảy ra khi nhiều luồng cố gắng truy cập cùng một cấu trúc bộ nhớ cùng lúc. Khác với khóa, chốt là các spin-lock rất ngắn, nhưng tranh chấp cao ngăn cản CPU thực hiện công việc hữu ích, hạn chế nghiêm trọng **khả năng mở rộng (scalability)** của hệ thống và làm tăng độ trễ của truy vấn."
            }
        }
    },
    {
        _id: "rdbms-s-006",
        difficulty: "senior",
        tags: ["optimization", "query plan", "statistics", "histogram"],
        content: {
            en: {
                title: "What is **Data Skew** (non-uniform distribution) in a column, and how do RDBMS Query Optimizers use **Histograms** to generate a more accurate execution plan in its presence?",
                body: "What is the consequence of not having a histogram for a skewed column?",
                solution: "Data Skew is when data values are not evenly distributed (e.g., 90% of rows have `Status='Completed'`). Without a Histogram, the Optimizer assumes uniform distribution and might select a slow Full Table Scan. A **Histogram** provides the Optimizer with **detailed frequency distribution statistics**, allowing it to accurately estimate the selectivity of the `WHERE` clause and choose the correct index usage." 

            },
            jp: {
                title: "列における**データの偏り**（非均一な分布）とは何ですか、そしてRDBMSクエリオプティマイザーは、その存在下でより正確な実行計画を生成するために**ヒストグラム**をどのように使用しますか？",
                body: "偏りのある列にヒストグラムがない場合の結果は何ですか？",
                solution: "データの偏りは、データ値が均等に分布していない場合です（例: 90%の行が`Status='Completed'`）。ヒストグラムがない場合、オプティマイザーは均一な分布を想定し、遅いフルテーブルスキャンを選択する可能性があります。**ヒストグラム**は、オプティマイザーに**詳細な頻度分布統計**を提供し、`WHERE`句の選択性を正確に推定し、正しいインデックスの使用を選択できるようにします。" 

            },
            vi: {
                title: "**Data Skew** (Độ lệch Dữ liệu) (phân bố không đồng đều) trong một cột là gì, và Bộ tối ưu hóa Truy vấn RDBMS sử dụng **Histograms** (Biểu đồ Tần suất) như thế nào để tạo ra kế hoạch thực thi chính xác hơn khi có độ lệch?",
                body: "Hậu quả của việc không có biểu đồ tần suất cho một cột bị lệch là gì?",
                solution: "Data Skew là khi các giá trị dữ liệu không được phân bố đồng đều (ví dụ: 90% số hàng có `Status='Completed'`). Nếu không có Histogram, Optimizer sẽ giả định phân bố đồng đều và có thể chọn Quét Bảng Toàn bộ (Full Table Scan) chậm. **Histogram** cung cấp cho Optimizer **thống kê phân bố tần suất chi tiết**, cho phép nó ước tính chính xác tính chọn lọc của mệnh đề `WHERE` và chọn cách sử dụng chỉ mục chính xác." 

            }
        }
    },
    {
        _id: "rdbms-s-007",
        difficulty: "senior",
        tags: ["database", "transaction", "two phase commit", "distributed"],
        content: {
            en: {
                title: "Describe the purpose and potential issues of the **Two-Phase Commit (2PC)** protocol in distributed database transactions.",
                body: "What are the two phases, and what is the major single point of failure?",
                solution: "2PC ensures **atomicity** (all participants commit or all abort) across multiple distributed database nodes. **Phase 1 (Prepare):** The coordinator asks all participants to prepare to commit. **Phase 2 (Commit/Rollback):** If all participants vote 'Yes', the coordinator issues a global 'Commit'. The major issue is the **Coordinator** itself; if it fails *after* Phase 1 but *before* Phase 2, resources remain locked in an **'In Doubt'** state indefinitely, leading to blockages." 
            },
            jp: {
                title: "分散データベース取引における**二相コミット（2PC）**プロトコルの目的と潜在的な問題を説明してください。",
                body: "2つのフェーズは何ですか、そして主要な単一障害点（SPOF）は何ですか？",
                solution: "2PCは、複数の分散データベースノード間で**アトミック性**（すべての参加者がコミットするか、すべてが中止する）を保証します。**フェーズ1（準備）:** コーディネーターはすべての参加者にコミットの準備をするように要求します。**フェーズ2（コミット/ロールバック）:** すべての参加者が「はい」と投票した場合、コーディネーターはグローバルな「コミット」を発行します。主要な問題は**コーディネーター**自体です。フェーズ1の*後*、フェーズ2の*前*に障害が発生すると、リソースは無期限に**「疑義」**状態でロックされたままになり、ブロックが発生します。" 
            },
            vi: {
                title: "Mô tả mục đích và các vấn đề tiềm ẩn của giao thức **Two-Phase Commit (2PC)** (Cam kết Hai Giai đoạn) trong các giao dịch cơ sở dữ liệu phân tán.",
                body: "Hai giai đoạn là gì, và điểm lỗi đơn lẻ chính là gì?",
                solution: "2PC đảm bảo **tính nguyên tử (atomicity)** (tất cả các bên tham gia commit hoặc tất cả đều hủy bỏ) trên nhiều nút cơ sở dữ liệu phân tán. **Giai đoạn 1 (Chuẩn bị):** Điều phối viên yêu cầu tất cả các bên tham gia chuẩn bị commit. **Giai đoạn 2 (Commit/Hoàn tác):** Nếu tất cả các bên tham gia bỏ phiếu 'Đồng ý', điều phối viên sẽ đưa ra lệnh 'Commit' toàn cầu. Vấn đề chính là bản thân **Điều phối viên (Coordinator)**; nếu nó bị lỗi *sau* Giai đoạn 1 nhưng *trước* Giai đoạn 2, tài nguyên vẫn bị khóa trong trạng thái **'Nghi ngờ' (In Doubt)** vô thời hạn, dẫn đến tắc nghẽn." 
            }
        }
    },
    {
        _id: "rdbms-s-008",
        difficulty: "senior",
        tags: ["data modeling", "erd", "temporal data", "slowly changing dimension"],
        content: {
            en: {
                title: "In data warehousing, describe the difference between **Slowly Changing Dimension (SCD) Type 1** and **SCD Type 2**.",
                body: "Which type maintains historical data by adding new rows?",
                solution: "**SCD Type 1** (Overwrite): Changes are applied directly to the existing dimension record, losing historical data. **SCD Type 2** (Add Row): Historical data is preserved by **creating a new record** for the change and using **Start Date** and **End Date** columns (or version numbers) to manage the validity period of each row. This allows accurate point-in-time historical reporting." 
            },
            jp: {
                title: "データウェアハウジングにおいて、**Slowly Changing Dimension (SCD) Type 1**と**SCD Type 2**の違いを説明してください。",
                body: "どのタイプが新しい行を追加することで履歴データを保持しますか？",
                solution: "**SCD Type 1**（上書き）：変更は既存のディメンションレコードに直接適用され、履歴データは失われます。**SCD Type 2**（行の追加）：変更に対して**新しいレコードを作成**し、各行の有効期間を管理するために**開始日**と**終了日**の列（またはバージョン番号）を使用することで、履歴データが保持されます。これにより、正確な特定の時点の履歴レポートが可能になります。" 
            },
            vi: {
                title: "Trong kho dữ liệu, mô tả sự khác biệt giữa **Slowly Changing Dimension (SCD) Loại 1** và **SCD Loại 2**.",
                body: "Loại nào duy trì dữ liệu lịch sử bằng cách thêm các hàng mới?",
                solution: "**SCD Loại 1** (Ghi đè): Các thay đổi được áp dụng trực tiếp vào bản ghi chiều hiện có, làm mất dữ liệu lịch sử. **SCD Loại 2** (Thêm Hàng): Dữ liệu lịch sử được bảo toàn bằng cách **tạo một bản ghi mới** cho sự thay đổi và sử dụng các cột **Ngày Bắt đầu** và **Ngày Kết thúc** (hoặc số phiên bản) để quản lý thời gian hiệu lực của mỗi hàng. Điều này cho phép báo cáo lịch sử điểm-trong-thời gian chính xác." 
            }
        }
    },
    {
        _id: "rdbms-s-009",
        difficulty: "senior",
        tags: ["sql", "analytic function", "ranking", "rank vs dense_rank"],
        content: {
            en: {
                title: "Explain the difference in behavior and output between the SQL Window Functions **`RANK()`** and **`DENSE_RANK()`**.",
                body: "When two rows have the same value, how do the subsequent ranks differ?",
                solution: "Both assign ranks within a partition. **`RANK()`** leaves a gap in the ranking sequence when there are ties (e.g., 1, 2, 2, **4**). **`DENSE_RANK()`** assigns consecutive ranks regardless of ties, meaning no gaps are left (e.g., 1, 2, 2, **3**). DENSE_RANK is often preferred for percentile calculations."
            },
            jp: {
                title: "SQLウィンドウ関数**`RANK()`**と**`DENSE_RANK()`**の動作と出力の違いを説明してください。",
                body: "2つの行が同じ値を持つ場合、その後のランクはどのように異なりますか？",
                solution: "どちらもパーティション内でランクを割り当てます。**`RANK()`** は、タイがある場合にランキングシーケンスにギャップを残します（例: 1, 2, 2, **4**）。**`DENSE_RANK()`** は、タイに関係なく連続したランクを割り当てます。つまり、ギャップは残りません（例: 1, 2, 2, **3**）。DENSE_RANKは、パーセンタイル計算でしばしば好まれます。"
            },
            vi: {
                title: "Giải thích sự khác biệt về hành vi và đầu ra giữa các Hàm Cửa sổ SQL **`RANK()`** và **`DENSE_RANK()`**.",
                body: "Khi hai hàng có cùng giá trị, các thứ hạng tiếp theo khác nhau như thế nào?",
                solution: "Cả hai đều gán thứ hạng trong một phân vùng. **`RANK()`** để lại một khoảng trống trong chuỗi thứ hạng khi có sự hòa (ví dụ: 1, 2, 2, **4**). **`DENSE_RANK()`** gán thứ hạng liên tiếp bất kể sự hòa, nghĩa là không có khoảng trống nào được để lại (ví dụ: 1, 2, 2, **3**). DENSE_RANK thường được ưu tiên cho các tính toán phần trăm."
            }
        }
    },
    {
        _id: "rdbms-s-010",
        difficulty: "senior",
        tags: ["performance", "data dictionary", "optimization", "metadata"],
        content: {
            en: {
                title: "What is the **Data Dictionary** (or System Catalog) in an RDBMS, and why is its internal efficiency crucial for overall database performance?",
                body: "What critical function is performed by frequently accessing the Data Dictionary?",
                solution: "The Data Dictionary is a set of read-only tables/views containing the database's **metadata** (definitions of tables, columns, indexes, users, privileges, etc.). Its efficiency is crucial because the Query Optimizer must **frequently access it** to retrieve the latest schema information and statistics **before compiling and executing every query**. Slow access to the dictionary slows down all queries."
            },
            jp: {
                title: "RDBMSにおける**データディクショナリ**（またはシステムカタログ）とは何ですか、そしてその内部効率がデータベース全体のパフォーマンスにとって非常に重要であるのはなぜですか？",
                body: "データディクショナリに頻繁にアクセスすることで実行される重要な機能は何ですか？",
                solution: "データディクショナリは、データベースの**メタデータ**（テーブル、列、インデックス、ユーザー、権限などの定義）を含む読み取り専用のテーブル/ビューのセットです。クエリオプティマイザーは、すべてのクエリをコンパイルおよび実行する**前**に、最新のスキーマ情報と統計を取得するために**頻繁にアクセスする必要がある**ため、その効率性は非常に重要です。ディクショナリへのアクセスが遅いと、すべてのクエリが遅くなります。"
            },
            vi: {
                title: "**Data Dictionary** (Từ điển Dữ liệu) (hoặc System Catalog) trong RDBMS là gì, và tại sao hiệu suất nội bộ của nó lại quan trọng đối với hiệu suất cơ sở dữ liệu tổng thể?",
                body: "Chức năng quan trọng nào được thực hiện bằng cách thường xuyên truy cập vào Từ điển Dữ liệu?",
                solution: "Data Dictionary là một tập hợp các bảng/khung nhìn chỉ đọc chứa **siêu dữ liệu (metadata)** của cơ sở dữ liệu (định nghĩa về bảng, cột, chỉ mục, người dùng, đặc quyền, v.v.). Hiệu suất của nó rất quan trọng vì Query Optimizer phải **thường xuyên truy cập nó** để truy xuất thông tin lược đồ và thống kê mới nhất **trước khi biên dịch và thực thi mọi truy vấn**. Truy cập chậm vào từ điển sẽ làm chậm tất cả các truy vấn."
            }
        }
    },
    {
        _id: "rdbms-s-011",
        difficulty: "senior",
        tags: ["data type", "character set", "collation", "i18n"],
        content: {
            en: {
                title: "Explain the difference between a database's **Character Set** and its **Collation**.",
                body: "Which one determines how characters are stored, and which one determines how they are sorted and compared?",
                solution: "The **Character Set** determines **how character data is stored** (the mapping of characters to binary bytes, e.g., UTF-8). The **Collation** determines **how data is sorted and compared** (including case-sensitivity, accent-sensitivity, and locale-specific rules). Both are crucial for internationalization (i18n)."
            },
            jp: {
                title: "データベースの**文字セット**と**照合順序**の違いを説明してください。",
                body: "どちらが文字が格納される方法を決定し、どちらがそれらがソートおよび比較される方法を決定しますか？",
                solution: "**文字セット**は、**文字データがどのように格納されるか**を決定します（文字とバイナリバイトのマッピング、例: UTF-8）。**照合順序**は、**データがどのようにソートおよび比較されるか**を決定します（大文字と小文字の区別、アクセントの区別、ロケール固有のルールを含む）。どちらも国際化（i18n）にとって非常に重要です。"
            },
            vi: {
                title: "Giải thích sự khác biệt giữa **Character Set** (Bộ ký tự) và **Collation** (Đối chiếu) của cơ sở dữ liệu.",
                body: "Thành phần nào quyết định cách các ký tự được lưu trữ, và thành phần nào quyết định cách chúng được sắp xếp và so sánh?",
                solution: "**Character Set** quyết định **cách dữ liệu ký tự được lưu trữ** (ánh xạ các ký tự sang byte nhị phân, ví dụ: UTF-8). **Collation** quyết định **cách dữ liệu được sắp xếp và so sánh** (bao gồm phân biệt chữ hoa-chữ thường, phân biệt dấu, và các quy tắc cụ thể theo địa phương). Cả hai đều rất quan trọng cho quốc tế hóa (i18n)."
            }
        }
    },
    {
        _id: "rdbms-s-012",
        difficulty: "senior",
        tags: ["sql", "procedure", "inlining", "performance"],
        content: {
            en: {
                title: "In the context of SQL optimization, what is **Function Inlining**, and when might it negatively impact the Query Optimizer's ability to create an efficient plan?",
                body: "How does inlining affect the cost estimation process?",
                solution: "Function Inlining is when the RDBMS replaces the call to a scalar or simple table-valued function with the function's body code directly into the calling query's execution plan. While often good, it can be detrimental if the inlined function contains complex logic or multiple access paths, as it may **artificially inflate the complexity** and lead the Optimizer to incorrectly estimate the overall query cost, selecting a suboptimal plan."
            },
            jp: {
                title: "SQL最適化の文脈で、**関数インライン化**とは何ですか、そしてそれが効率的な計画を作成するクエリオプティマイザーの能力に悪影響を与える可能性があるのはいつですか？",
                body: "インライン化はコスト推定プロセスにどのように影響しますか？",
                solution: "関数インライン化は、RDBMSがスカラーまたは単純なテーブル値関数への呼び出しを、関数の本体コードで直接呼び出しクエリの実行計画に置き換えることです。通常は良いことですが、インライン化された関数が複雑なロジックや複数のアクセスパスを含んでいる場合、**人為的に複雑さを膨らませ**、オプティマイザーが全体のクエリコストを誤って推定し、最適ではない計画を選択する可能性があるため、有害になることがあります。"
            },
            vi: {
                title: "Trong bối cảnh tối ưu hóa SQL, **Function Inlining** (Nội tuyến hóa Hàm) là gì, và khi nào nó có thể tác động tiêu cực đến khả năng của Bộ tối ưu hóa Truy vấn trong việc tạo ra một kế hoạch hiệu quả?",
                body: "Nội tuyến hóa ảnh hưởng đến quá trình ước tính chi phí như thế nào?",
                solution: "Function Inlining là khi RDBMS thay thế lời gọi đến một hàm vô hướng (scalar) hoặc hàm giá trị bảng đơn giản bằng mã thân hàm trực tiếp vào kế hoạch thực thi của truy vấn gọi. Mặc dù thường là tốt, nhưng nó có thể gây hại nếu hàm được nội tuyến chứa logic phức tạp hoặc nhiều đường dẫn truy cập, vì nó có thể **tăng độ phức tạp một cách giả tạo** và khiến Optimizer ước tính sai chi phí truy vấn tổng thể, chọn một kế hoạch không tối ưu."
            }
        }
    },
    {
        _id: "rdbms-s-013",
        difficulty: "senior",
        tags: ["database", "replication", "consistency", "latency"],
        content: {
            en: {
                title: "In asynchronous database replication (Master-Slave), what is **Replication Lag**, and what are the two common strategies to mitigate its impact on read-heavy applications?",
                body: "What technique ensures a user reads their own writes immediately?",
                solution: "Replication Lag is the delay between a transaction committing on the Master and being applied to the Slave(s). Strategies to mitigate: 1) **Read-Your-Own-Writes Consistency:** Directing a user's reads back to the Master for a short period after they perform a write. 2) **Delayed Replication:** Setting a minimum acceptable lag (e.g., 5 seconds) and only routing reads to Slaves that are within that lag tolerance." 
            },
            jp: {
                title: "非同期データベースレプリケーション（マスター・スレーブ）において、**レプリケーションラグ**とは何ですか、そして読み取り負荷の高いアプリケーションへの影響を軽減するための2つの一般的な戦略は何ですか？",
                body: "ユーザーが自分の書き込みをすぐに読み取れるようにする技術は何ですか？",
                solution: "レプリケーションラグは、トランザクションがマスターでコミットされてからスレーブに適用されるまでの遅延です。軽減するための戦略：1) **Read-Your-Own-Writes Consistency（自分の書き込みの一貫性を読み取る）:** ユーザーが書き込みを実行した後、短期間、そのユーザーの読み取りをマスターに戻す。2) **Delayed Replication（遅延レプリケーション）:** 許容できる最小限のラグを設定し（例: 5秒）、そのラグ許容範囲内のスレーブにのみ読み取りをルーティングする。" 
            },
            vi: {
                title: "Trong nhân bản cơ sở dữ liệu không đồng bộ (Master-Slave), **Replication Lag** (Độ trễ Nhân bản) là gì, và hai chiến lược phổ biến để giảm thiểu tác động của nó đối với các ứng dụng đọc nhiều là gì?",
                body: "Kỹ thuật nào đảm bảo người dùng đọc ngay lập tức những gì họ vừa ghi?",
                solution: "Replication Lag là độ trễ giữa thời điểm một giao dịch commit trên Master và được áp dụng cho (các) Slave. Các chiến lược để giảm thiểu: 1) **Read-Your-Own-Writes Consistency (Tính nhất quán Đọc-Những-Gì-Bạn-Vừa-Ghi):** Chuyển hướng các thao tác đọc của người dùng trở lại Master trong một thời gian ngắn sau khi họ thực hiện thao tác ghi. 2) **Delayed Replication (Nhân bản Chậm):** Đặt một độ trễ tối thiểu có thể chấp nhận được (ví dụ: 5 giây) và chỉ định tuyến các thao tác đọc đến các Slave nằm trong giới hạn dung sai độ trễ đó." 
            }
        }
    },
    {
        _id: "rdbms-s-014",
        difficulty: "senior",
        tags: ["sql", "window function", "frame", "boundary"],
        content: {
            en: {
                title: "In SQL Window Functions, explain the difference between the default window frame (e.g., in `AVG()`) and specifying **`RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`**.",
                body: "What happens when you omit the `ORDER BY` clause with the default frame?",
                solution: "The default frame is usually `RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING` (the entire partition). Specifying `ROWS/RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` limits the calculation to only the current row and all preceding rows in the order (creating a running calculation). If `ORDER BY` is omitted, the default frame is used, and the function calculates over **the entire partition** (or table) without ordering."
            },
            jp: {
                title: "SQLウィンドウ関数において、デフォルトのウィンドウフレーム（例: `AVG()`）と**`RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`**を指定することの違いを説明してください。",
                body: "デフォルトのフレームで`ORDER BY`句を省略するとどうなりますか？",
                solution: "デフォルトのフレームは通常 `RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING` です（パーティション全体）。`ROWS/RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`を指定すると、計算が順序内の現在の行と先行するすべての行にのみ制限されます（実行中の計算を作成します）。`ORDER BY`が省略されている場合、デフォルトのフレームが使用され、関数は順序付けなしで**パーティション全体**（またはテーブル全体）に対して計算します。"
            },
            vi: {
                title: "Trong Hàm Cửa sổ SQL, giải thích sự khác biệt giữa khung cửa sổ mặc định (ví dụ: trong `AVG()`) và việc chỉ định **`RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`**.",
                body: "Điều gì xảy ra khi bạn bỏ qua mệnh đề `ORDER BY` với khung mặc định?",
                solution: "Khung mặc định thường là `RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING` (toàn bộ phân vùng). Việc chỉ định `ROWS/RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` giới hạn phép tính chỉ cho hàng hiện tại và tất cả các hàng trước đó theo thứ tự (tạo ra một phép tính lũy kế). Nếu `ORDER BY` bị bỏ qua, khung mặc định được sử dụng, và hàm tính toán trên **toàn bộ phân vùng** (hoặc bảng) mà không có thứ tự."
            }
        }
    },
    {
        _id: "rdbms-s-015",
        difficulty: "senior",
        tags: ["data modeling", "normalization", "6nf", "temporal"],
        content: {
            en: {
                title: "What is the primary motivation for implementing a schema in **Sixth Normal Form (6NF)**, and what are the main implications for data storage?",
                body: "What kind of data does 6NF specifically address?",
                solution: "The primary motivation for 6NF is to handle **Temporal Data** (time-varying data) efficiently. 6NF ensures that a table is decomposed into irreducible components, removing all update anomalies and specifically handling the fact that attributes may change over time by storing the primary key and the attribute value **alongside its validity period**. This results in many small, highly specialized tables."
            },
            jp: {
                title: "**第六正規形（6NF）**でスキーマを実装する主な動機は何ですか、そしてデータストレージへの主な影響は何ですか？",
                body: "6NFは具体的にどのような種類のデータを扱いますか？",
                solution: "6NFの主な動機は、**時間的データ**（時間とともに変化するデータ）を効率的に処理することです。6NFは、テーブルが既約なコンポーネントに分解されることを保証し、すべての更新異常を排除し、属性が時間とともに変化する可能性があるという事実を、主キーと属性値を**その有効期間とともに**格納することで具体的に処理します。これにより、多くの小さく、高度に特化されたテーブルが作成されます。"
            },
            vi: {
                title: "Động lực chính để triển khai một lược đồ ở **Sixth Normal Form (6NF)** (Dạng Chuẩn Thứ sáu) là gì, và ý nghĩa chính đối với việc lưu trữ dữ liệu là gì?",
                body: "6NF giải quyết cụ thể loại dữ liệu nào?",
                solution: "Động lực chính cho 6NF là xử lý **Dữ liệu Thời gian (Temporal Data)** (dữ liệu thay đổi theo thời gian) một cách hiệu quả. 6NF đảm bảo rằng một bảng được phân rã thành các thành phần không thể rút gọn, loại bỏ tất cả các bất thường cập nhật và xử lý cụ thể thực tế là các thuộc tính có thể thay đổi theo thời gian bằng cách lưu trữ khóa chính và giá trị thuộc tính **cùng với thời gian hiệu lực của nó**. Điều này dẫn đến nhiều bảng nhỏ, chuyên biệt cao."
            }
        }
    },
    {
        _id: "rdbms-s-016",
        difficulty: "senior",
        tags: ["database", "trigger", "recursive", "danger"],
        content: {
            en: {
                title: "What is a **Recursive Trigger**, and why is it a dangerous pattern that database administrators often try to prevent?",
                body: "What is the potential consequence related to infinite loops?",
                solution: "A Recursive Trigger is a trigger that executes DML that causes the *same trigger to fire again* (either directly or indirectly via another trigger). It is dangerous because it can easily lead to an **infinite loop**, consuming all system resources (CPU, stack space) and eventually crashing the database session or the entire server process. Recursion limits are usually set to prevent this."
            },
            jp: {
                title: "**再帰トリガー**とは何ですか、そしてなぜそれはデータベース管理者がしばしば防ごうとする危険なパターンなのですか？",
                body: "無限ループに関連する潜在的な結果は何ですか？",
                solution: "再帰トリガーは、DMLを実行するトリガーであり、それが*同じトリガーを再び起動させる*（直接的または別のトリガーを介して間接的に）ものです。これは、**無限ループ**に簡単につながり、すべてのシステムリソース（CPU、スタックスペース）を消費し、最終的にデータベースセッションまたはサーバープロセス全体をクラッシュさせる可能性があるため、危険です。通常、これを防ぐために再帰制限が設定されます。"
            },
            vi: {
                title: "**Recursive Trigger** (Trigger Đệ quy) là gì, và tại sao nó là một mẫu nguy hiểm mà quản trị viên cơ sở dữ liệu thường cố gắng ngăn chặn?",
                body: "Hậu quả tiềm ẩn liên quan đến vòng lặp vô hạn là gì?",
                solution: "Recursive Trigger là một trigger thực thi DML mà làm cho *chính trigger đó được kích hoạt lại* (trực tiếp hoặc gián tiếp thông qua một trigger khác). Nó nguy hiểm vì nó có thể dễ dàng dẫn đến **vòng lặp vô hạn**, tiêu thụ tất cả tài nguyên hệ thống (CPU, không gian stack) và cuối cùng làm sập phiên cơ sở dữ liệu hoặc toàn bộ quy trình máy chủ. Giới hạn đệ quy thường được đặt để ngăn chặn điều này."
            }
        }
    },
    {
        _id: "rdbms-s-017",
        difficulty: "senior",
        tags: ["database", "transaction", "write ahead log", "durability"],
        content: {
            en: {
                title: "In the context of the ACID property **Durability**, explain the purpose of the **Write-Ahead Logging (WAL)** protocol.",
                body: "Why does WAL allow the RDBMS to acknowledge a transaction commit before the data pages are written to disk?",
                solution: "WAL dictates that every change must first be written to the **transaction log file** on disk *before* the corresponding data page in memory is written to disk. This ensures Durability because the log file, which is written sequentially and quickly, contains enough information to **re-apply or roll forward** any committed changes in case of a system crash before the data pages are flushed." 
            },
            jp: {
                title: "ACID特性**Durability（永続性）**の文脈で、**Write-Ahead Logging (WAL)**プロトコルの目的を説明してください。",
                body: "WALは、データページがディスクに書き込まれる前に、RDBMSがトランザクションコミットを承認できるようにするのはなぜですか？",
                solution: "WALは、すべての変更が、対応するメモリ内のデータページがディスクに書き込まれる*前*に、まずディスク上の**トランザクションログファイル**に書き込まれる必要があると規定しています。ログファイルはシーケンシャルに素早く書き込まれ、データページがフラッシュされる前のシステムクラッシュの場合にコミットされた変更を**再適用またはロールフォワード**するのに十分な情報を含んでいるため、これにより永続性が保証されます。" 
            },
            vi: {
                title: "Trong bối cảnh thuộc tính ACID **Durability** (Bền vững), giải thích mục đích của giao thức **Write-Ahead Logging (WAL)** (Ghi Log Trước).",
                body: "Tại sao WAL cho phép RDBMS xác nhận cam kết giao dịch trước khi các trang dữ liệu được ghi vào đĩa?",
                solution: "WAL quy định rằng mọi thay đổi phải được ghi vào **tệp nhật ký giao dịch** trên đĩa *trước khi* trang dữ liệu tương ứng trong bộ nhớ được ghi vào đĩa. Điều này đảm bảo tính Bền vững vì tệp nhật ký, được ghi tuần tự và nhanh chóng, chứa đủ thông tin để **áp dụng lại hoặc cuộn tới (roll forward)** bất kỳ thay đổi nào đã được commit trong trường hợp hệ thống gặp sự cố trước khi các trang dữ liệu được đẩy ra." 
            }
        }
    },
    {
        _id: "rdbms-s-018",
        difficulty: "senior",
        tags: ["database", "partitioning", "data access", "strategy"],
        content: {
            en: {
                title: "Name and briefly describe the difference between **Range Partitioning** and **Hash Partitioning** strategies.",
                body: "Which strategy is better for balancing I/O load, and which is better for time-based data archiving?",
                solution: "**Range Partitioning** splits data based on value ranges of a column (e.g., dates: data for Q1, Q2, etc.). It is ideal for **time-based archiving** and fast access to specific ranges. **Hash Partitioning** splits data based on a hash function of a column value. It is ideal for **balancing I/O load** across disks and is used when data access is random or the range of keys is unknown."
            },
            jp: {
                title: "**レンジパーティショニング**と**ハッシュパーティショニング**戦略の違いを挙げ、簡単に説明してください。",
                body: "どちらの戦略がI/O負荷のバランスを取るのに優れており、どちらが時間ベースのデータアーカイブに適していますか？",
                solution: "**レンジパーティショニング**は、列の値の範囲に基づいてデータを分割します（例: 日付: 第1四半期、第2四半期などのデータ）。**時間ベースのアーカイブ**や特定の範囲への高速アクセスに最適です。**ハッシュパーティショニング**は、列の値のハッシュ関数に基づいてデータを分割します。**I/O負荷のバランスを取る**のに理想的であり、データアクセスがランダムであるか、キーの範囲が不明な場合に使用されます。"
            },
            vi: {
                title: "Nêu tên và mô tả ngắn gọn sự khác biệt giữa các chiến lược **Range Partitioning** (Phân vùng theo Phạm vi) và **Hash Partitioning** (Phân vùng theo Băm).",
                body: "Chiến lược nào tốt hơn để cân bằng tải I/O, và chiến lược nào tốt hơn để lưu trữ dữ liệu theo thời gian?",
                solution: "**Range Partitioning** chia dữ liệu dựa trên phạm vi giá trị của một cột (ví dụ: ngày tháng: dữ liệu cho Q1, Q2, v.v.). Nó lý tưởng cho **lưu trữ theo thời gian** và truy cập nhanh vào các phạm vi cụ thể. **Hash Partitioning** chia dữ liệu dựa trên hàm băm của giá trị cột. Nó lý tưởng để **cân bằng tải I/O** trên các đĩa và được sử dụng khi truy cập dữ liệu là ngẫu nhiên hoặc phạm vi khóa không xác định."
            }
        }
    },
    {
        _id: "rdbms-s-019",
        difficulty: "senior",
        tags: ["sql", "performance", "join", "filter"],
        content: {
            en: {
                title: "In a query that involves multiple joins, explain the 'rule of thumb' regarding the placement of **filtering conditions** (in the `WHERE` clause) to maximize performance.",
                body: "Should you filter early or late in the query execution plan?",
                solution: "The rule of thumb is to apply filtering conditions **as early as possible** in the query execution plan, ideally on the **largest table being accessed**. This is called **Predicate Pushdown**. Reducing the row count early drastically minimizes the number of rows that must be processed, joined, and sorted in subsequent, more expensive steps."
            },
            jp: {
                title: "複数の結合を含むクエリにおいて、パフォーマンスを最大化するための**フィルタリング条件**（`WHERE`句内）の配置に関する「経験則」を説明してください。",
                body: "クエリ実行計画の早い段階でフィルタリングする必要がありますか、それとも遅い段階でフィルタリングする必要がありますか？",
                solution: "経験則として、フィルタリング条件は、クエリ実行計画の**できるだけ早い段階**で、理想的には**アクセスされている最大のテーブル**に対して適用する必要があります。これは**述語プッシュダウン**と呼ばれます。行数を早期に減らすことで、後続のよりコストのかかるステップで処理、結合、ソートする必要がある行の数が劇的に最小限に抑えられます。"
            },
            vi: {
                title: "Trong một truy vấn liên quan đến nhiều phép join, hãy giải thích 'quy tắc ngón tay cái' liên quan đến việc đặt **các điều kiện lọc** (trong mệnh đề `WHERE`) để tối đa hóa hiệu suất.",
                body: "Bạn nên lọc sớm hay muộn trong kế hoạch thực thi truy vấn?",
                solution: "Quy tắc ngón tay cái là áp dụng các điều kiện lọc **càng sớm càng tốt** trong kế hoạch thực thi truy vấn, lý tưởng nhất là trên **bảng lớn nhất đang được truy cập**. Điều này được gọi là **Predicate Pushdown**. Việc giảm số lượng hàng sớm sẽ giảm đáng kể số lượng hàng phải được xử lý, join và sắp xếp trong các bước tiếp theo, tốn kém hơn."
            }
        }
    },
    {
        _id: "rdbms-s-020",
        difficulty: "senior",
        tags: ["data modeling", "erd", "nosql", "join"],
        content: {
            en: {
                title: "How does the common NoSQL practice of **Data Embedding** (storing related data within a single document) relate to the concept of **Denormalization** in RDBMS?",
                body: "What is the primary trade-off being made in both cases?",
                solution: "Data Embedding in NoSQL is a form of Denormalization. Both techniques aim to **reduce or eliminate JOIN operations** required to retrieve connected data, thereby improving read performance (latency). The primary trade-off in both is accepting **data redundancy** and increased complexity/overhead on write/update operations to gain faster reads."
            },
            jp: {
                title: "NoSQLの一般的な手法である**データ埋め込み**（関連データを単一のドキュメント内に格納する）は、RDBMSの**非正規化**の概念とどのように関連していますか？",
                body: "どちらの場合でも行われている主要なトレードオフは何ですか？",
                solution: "NoSQLのデータ埋め込みは、非正規化の一形態です。どちらの手法も、接続されたデータを取得するために必要な**JOIN操作を削減または排除**することを目的としており、それによって読み取りパフォーマンス（レイテンシ）を向上させます。どちらの主要なトレードオフも、より高速な読み取りを得るために**データ冗長性**と書き込み/更新操作の複雑さ/オーバーヘッドの増加を受け入れることです。"
            },
            vi: {
                title: "Thực tiễn phổ biến của NoSQL là **Data Embedding** (Nhúng Dữ liệu) (lưu trữ dữ liệu liên quan trong một tài liệu duy nhất) liên quan đến khái niệm **Denormalization** (Phi chuẩn hóa) trong RDBMS như thế nào?",
                body: "Sự đánh đổi chính đang được thực hiện trong cả hai trường hợp là gì?",
                solution: "Nhúng Dữ liệu trong NoSQL là một hình thức của Phi chuẩn hóa. Cả hai kỹ thuật đều nhằm mục đích **giảm hoặc loại bỏ các thao tác JOIN** cần thiết để truy xuất dữ liệu được kết nối, qua đó cải thiện hiệu suất đọc (độ trễ). Sự đánh đổi chính trong cả hai là chấp nhận **tính dư thừa dữ liệu** và tăng độ phức tạp/chi phí trong các thao tác ghi/cập nhật để có được tốc độ đọc nhanh hơn."
            }
        }
    },
    {
        _id: "rdbms-s-021",
        difficulty: "senior",
        tags: ["sql", "dml", "lateral join", "performance"],
        content: {
            en: {
                title: "What is the primary use case and functional benefit of using a **`LATERAL JOIN`** (or `APPLY` in SQL Server) compared to a standard `INNER JOIN`?",
                body: "How does the Lateral Join allow column references?",
                solution: "A `LATERAL JOIN` allows the subquery on the right side of the join to **reference columns from the table on the left side** of the join, row by row. This is highly useful for finding the 'top N' rows per group, running a function for each row, or optimizing queries that would otherwise require correlated subqueries." 
            },
            jp: {
                title: "**`LATERAL JOIN`**（またはSQL Serverの`APPLY`）を使用することの、標準の`INNER JOIN`と比較した主な使用例と機能的な利点は何ですか？",
                body: "Lateral Joinはどのように列参照を許可しますか？",
                solution: "`LATERAL JOIN`は、結合の右側にあるサブクエリが、結合の左側にあるテーブルの**列を、行ごとに参照する**ことを可能にします。これは、グループごとの「上位N」行を見つけたり、各行に対して関数を実行したり、相関サブクエリが必要となるクエリを最適化したりするのに非常に役立ちます。" 
            },
            vi: {
                title: "Trường hợp sử dụng chính và lợi ích chức năng của việc sử dụng **`LATERAL JOIN`** (hoặc `APPLY` trong SQL Server) so với `INNER JOIN` tiêu chuẩn là gì?",
                body: "Lateral Join cho phép tham chiếu cột như thế nào?",
                solution: "`LATERAL JOIN` cho phép truy vấn con ở phía bên phải của join **tham chiếu các cột từ bảng ở phía bên trái** của join, từng hàng một. Điều này rất hữu ích để tìm 'N hàng đầu' trên mỗi nhóm, chạy một hàm cho mỗi hàng hoặc tối ưu hóa các truy vấn mà nếu không sẽ yêu cầu correlated subqueries." 
            }
        }
    },
    {
        _id: "rdbms-s-022",
        difficulty: "senior",
        tags: ["database", "storage", "io", "row store", "column store"],
        content: {
            en: {
                title: "Differentiate between a **Row-Oriented Storage** model (used by traditional RDBMS) and a **Column-Oriented Storage** model.",
                body: "Which model is better for OLAP/Analytical workloads, and why?",
                solution: "**Row-Oriented** stores all data for a single row contiguously. **Column-Oriented** stores all data for a single column contiguously. Column-Oriented storage is much better for **OLAP/Analytical workloads** because analytical queries often only need a few columns, allowing the system to **read only the required columns** and benefit greatly from data compression (due to similar column values)." 
            },
            jp: {
                title: "**行指向ストレージ**モデル（従来のRDBMSで使用）と**列指向ストレージ**モデルの違いを区別してください。",
                body: "どちらのモデルがOLAP/分析ワークロードに適しており、なぜですか？",
                solution: "**行指向**は、単一の行のすべてのデータを連続して格納します。**列指向**は、単一の列のすべてのデータを連続して格納します。列指向ストレージは**OLAP/分析ワークロード**にはるかに適しています。なぜなら、分析クエリはしばしば少数の列しか必要としないため、システムは**必要な列のみを読み取る**ことができ、（類似の列値のために）データ圧縮から大きな恩恵を受けることができるからです。" 
            },
            vi: {
                title: "Phân biệt giữa mô hình **Row-Oriented Storage** (Lưu trữ hướng Hàng) (được sử dụng bởi RDBMS truyền thống) và mô hình **Column-Oriented Storage** (Lưu trữ hướng Cột).",
                body: "Mô hình nào tốt hơn cho khối lượng công việc OLAP/Phân tích, và tại sao?",
                solution: "**Row-Oriented** lưu trữ tất cả dữ liệu cho một hàng duy nhất một cách liền kề. **Column-Oriented** lưu trữ tất cả dữ liệu cho một cột duy nhất một cách liền kề. Lưu trữ hướng Cột tốt hơn nhiều cho **khối lượng công việc OLAP/Phân tích** vì các truy vấn phân tích thường chỉ cần một vài cột, cho phép hệ thống **chỉ đọc các cột được yêu cầu** và hưởng lợi rất nhiều từ việc nén dữ liệu (do các giá trị cột tương tự)." 
            }
        }
    },
    {
        _id: "rdbms-s-023",
        difficulty: "senior",
        tags: ["security", "injection", "principle", "least privilege"],
        content: {
            en: {
                title: "From a security standpoint, what is the **Principle of Least Privilege (PoLP)**, and how should database application accounts adhere to it?",
                body: "What permissions should the application account NOT have?",
                solution: "PoLP dictates that a user or application should only have the **minimum set of permissions necessary** to perform its job. Application database accounts should only have **`SELECT`, `INSERT`, `UPDATE`, `DELETE`** on the tables they need, and **NOT** have global administrative privileges, DDL permissions (like `CREATE TABLE`), or unnecessary access to system/sensitive tables, minimizing the damage from a potential SQL Injection exploit."
            },
            jp: {
                title: "セキュリティの観点から、**最小特権の原則（PoLP）**とは何ですか、そしてデータベースアプリケーションアカウントはそれにどのように従うべきですか？",
                body: "アプリケーションアカウントが持つべきではない権限は何ですか？",
                solution: "PoLPは、ユーザーまたはアプリケーションがそのジョブを実行するために**必要な最小限の権限セットのみ**を持つべきであると規定しています。アプリケーションデータベースアカウントは、必要なテーブルに対して**`SELECT`、`INSERT`、`UPDATE`、`DELETE`**のみを持つべきであり、グローバルな管理者権限、DDL権限（`CREATE TABLE`など）、またはシステム/機密テーブルへの不要なアクセスを**持つべきではありません**。これにより、潜在的なSQLインジェクション悪用による損害を最小限に抑えます。"
            },
            vi: {
                title: "Từ góc độ bảo mật, **Principle of Least Privilege (PoLP)** (Nguyên tắc Đặc quyền Tối thiểu) là gì, và các tài khoản ứng dụng cơ sở dữ liệu nên tuân thủ nó như thế nào?",
                body: "Những quyền nào mà tài khoản ứng dụng KHÔNG nên có?",
                solution: "PoLP quy định rằng người dùng hoặc ứng dụng chỉ nên có **tập hợp các quyền tối thiểu cần thiết** để thực hiện công việc của mình. Các tài khoản cơ sở dữ liệu ứng dụng chỉ nên có quyền **`SELECT`, `INSERT`, `UPDATE`, `DELETE`** trên các bảng mà chúng cần, và **KHÔNG** nên có đặc quyền quản trị toàn cầu, quyền DDL (như `CREATE TABLE`), hoặc quyền truy cập không cần thiết vào các bảng hệ thống/nhạy cảm, giảm thiểu thiệt hại từ một lỗ hổng SQL Injection tiềm ẩn."
            }
        }
    },
    {
        _id: "rdbms-s-024",
        difficulty: "senior",
        tags: ["transaction", "locking", "deadlock", "timeout"],
        content: {
            en: {
                title: "Beyond detection and rollback, what is the 'wait-for' strategy (Wait-Die or Wound-Wait) commonly used in RDBMS deadlock prevention/avoidance?",
                body: "Which strategy prioritizes older transactions, and how is that achieved?",
                solution: "**Wait-Die** (Non-Preemptive): An older transaction (higher priority) waiting for a lock held by a younger transaction will wait. A younger transaction waiting for a lock held by an older transaction will **Die (Rollback)** immediately. This prioritizes older transactions and prevents starvation of long-running processes." 
            },
            jp: {
                title: "検出とロールバックに加えて、RDBMSのデッドロック防止/回避で一般的に使用される「待機」戦略（Wait-DieまたはWound-Wait）は何ですか？",
                body: "どの戦略が古いトランザクションを優先し、それはどのように達成されますか？",
                solution: "**Wait-Die**（非先制）：より古いトランザクション（優先度が高い）がより新しいトランザクションが保持しているロックを待っている場合は待機します。より新しいトランザクションがより古いトランザクションが保持しているロックを待っている場合は、直ちに**終了（ロールバック）**します。これにより、古いトランザクションが優先され、長時間実行されるプロセスのスタベーションが防止されます。" 
            },
            vi: {
                title: "Ngoài việc phát hiện và hoàn tác, chiến lược 'chờ đợi' (Wait-Die hoặc Wound-Wait) thường được sử dụng trong việc phòng ngừa/tránh Deadlock (Khóa chết) của RDBMS là gì?",
                body: "Chiến lược nào ưu tiên các giao dịch cũ hơn, và điều đó được thực hiện như thế nào?",
                solution: "**Wait-Die** (Không Ưu tiên): Một giao dịch cũ hơn (ưu tiên cao hơn) đang chờ khóa do một giao dịch trẻ hơn nắm giữ sẽ chờ. Một giao dịch trẻ hơn đang chờ khóa do một giao dịch cũ hơn nắm giữ sẽ **Chết (Rollback)** ngay lập tức. Điều này ưu tiên các giao dịch cũ hơn và ngăn chặn tình trạng đói (starvation) của các quy trình chạy dài." 
            }
        }
    },
    {
        _id: "rdbms-s-025",
        difficulty: "senior",
        tags: ["sql", "dml", "update", "performance", "self join"],
        content: {
            en: {
                title: "Why is an **`UPDATE` statement with a correlated subquery** often much slower than restructuring the same logic using an **`UPDATE` with a `JOIN`** (or CTE)?",
                body: "Which statement is forced to re-execute for every row being updated?",
                solution: "A correlated subquery must be **re-executed for every row** processed by the outer `UPDATE` statement, leading to $O(N^2)$ complexity in the worst case. Restructuring the logic to use a **`JOIN`** allows the Optimizer to process the matching logic once (e.g., using Hash Join or Sort-Merge Join) and then perform the update on the resulting set of rows, greatly reducing execution time."
            },
            jp: {
                title: "**相関サブクエリを使用した`UPDATE`ステートメント**が、同じロジックを**`JOIN`を使用した`UPDATE`**（またはCTE）で再構築するよりもはるかに遅くなることが多いのはなぜですか？",
                body: "どのステートメントが、更新されているすべての行に対して再実行を強制されますか？",
                solution: "相関サブクエリは、外側の`UPDATE`ステートメントによって処理される**すべての行に対して再実行**される必要があり、最悪の場合、$O(N^2)$の複雑さにつながります。ロジックを**`JOIN`**を使用するように再構築すると、オプティマイザーが一致するロジックを1回処理し（例: ハッシュ結合またはソートマージ結合を使用）、結果として得られる行のセットに対して更新を実行できるため、実行時間が大幅に短縮されます。"
            },
            vi: {
                title: "Tại sao **câu lệnh `UPDATE` với correlated subquery** thường chậm hơn nhiều so với việc tái cấu trúc cùng một logic bằng cách sử dụng **`UPDATE` với `JOIN`** (hoặc CTE)?",
                body: "Câu lệnh nào bị buộc phải thực thi lại cho mọi hàng đang được cập nhật?",
                solution: "Một correlated subquery phải được **thực thi lại cho mọi hàng** được xử lý bởi câu lệnh `UPDATE` bên ngoài, dẫn đến độ phức tạp $O(N^2)$ trong trường hợp xấu nhất. Việc tái cấu trúc logic để sử dụng **`JOIN`** cho phép Optimizer xử lý logic khớp một lần (ví dụ: sử dụng Hash Join hoặc Sort-Merge Join) và sau đó thực hiện cập nhật trên tập hợp các hàng kết quả, giảm đáng kể thời gian thực thi."
            }
        }
    },
    {
        _id: "rdbms-s-026",
        difficulty: "senior",
        tags: ["database", "schema", "versioning", "migration"],
        content: {
            en: {
                title: "In large-scale application development, why is database **Schema Versioning/Migration** essential, and what are the two main types of migration strategies?",
                body: "What problem does this process solve during application deployment?",
                solution: "Schema Versioning is essential to manage changes to the database structure (DDL) reliably, especially when coordinating with application code deployment. The two main strategies are: 1) **Version-based:** Migrations are sequentially numbered files (V1.0.1, V1.0.2) applied in order. 2) **Timestamp/Hash-based:** Migrations are applied based on a time or hash to ensure no migration is missed or applied twice. This solves the problem of **Schema Drift** and ensures consistency across environments."
            },
            jp: {
                title: "大規模なアプリケーション開発において、データベースの**スキーマバージョン管理/マイグレーション**が不可欠であるのはなぜですか、そしてマイグレーション戦略の主な2つのタイプは何ですか？",
                body: "このプロセスはアプリケーションのデプロイ中にどのような問題を解決しますか？",
                solution: "スキーマバージョン管理は、特にアプリケーションコードのデプロイとの調整を行う際に、データベース構造への変更（DDL）を確実に管理するために不可欠です。主な2つの戦略は次のとおりです。1) **バージョンベース:** マイグレーションは順序付けられた番号付きファイル（V1.0.1、V1.0.2）であり、順番に適用されます。2) **タイムスタンプ/ハッシュベース:** マイグレーションは、マイグレーションが見逃されたり2回適用されたりしないように、時間またはハッシュに基づいて適用されます。これにより、**スキーマの漂流（Schema Drift）**の問題が解決され、環境間の一貫性が確保されます。"
            },
            vi: {
                title: "Trong phát triển ứng dụng quy mô lớn, tại sao **Schema Versioning/Migration** (Phiên bản hóa/Di chuyển Lược đồ) cơ sở dữ liệu lại cần thiết, và hai loại chiến lược di chuyển chính là gì?",
                body: "Quá trình này giải quyết vấn đề gì trong quá trình triển khai ứng dụng?",
                solution: "Schema Versioning là điều cần thiết để quản lý các thay đổi đối với cấu trúc cơ sở dữ liệu (DDL) một cách đáng tin cậy, đặc biệt khi phối hợp với việc triển khai mã ứng dụng. Hai chiến lược chính là: 1) **Dựa trên Phiên bản (Version-based):** Các di chuyển là các tệp được đánh số tuần tự (V1.0.1, V1.0.2) được áp dụng theo thứ tự. 2) **Dựa trên Dấu thời gian/Băm (Timestamp/Hash-based):** Các di chuyển được áp dụng dựa trên thời gian hoặc băm để đảm bảo không có di chuyển nào bị bỏ lỡ hoặc được áp dụng hai lần. Điều này giải quyết vấn đề **Schema Drift** và đảm bảo tính nhất quán giữa các môi trường."
            }
        }
    },
    {
        _id: "rdbms-s-027",
        difficulty: "senior",
        tags: ["sql", "dml", "delete", "cleanup", "performance"],
        content: {
            en: {
                title: "When dealing with massive table cleanup, why is it often necessary to use **soft deletes** (setting a `is_deleted` flag) or a **background archiving process** instead of immediate, large `DELETE` operations?",
                body: "What performance and operational risks does a large DELETE cause?",
                solution: "A large `DELETE` operation holds locks on affected rows for a long time, leading to high **concurrency contention** and blocking other transactions. It also generates a huge amount of **transaction log volume** and can overwhelm the system's ability to roll back the operation. Soft deletes or background archiving allow the cleanup to occur gradually, minimizing contention and resource strain."
            },
            jp: {
                title: "大規模なテーブルのクリーンアップを扱う場合、即時で大規模な`DELETE`操作の代わりに、**ソフトデリート**（`is_deleted`フラグの設定）または**バックグラウンドアーカイブプロセス**を使用することがしばしば必要なのはなぜですか？",
                body: "大規模なDELETEはどのようなパフォーマンス上および運用上のリスクを引き起こしますか？",
                solution: "大規模な`DELETE`操作は、影響を受ける行のロックを長時間保持し、高い**同時実行性の競合**を引き起こし、他のトランザクションをブロックします。また、膨大な量の**トランザクションログボリューム**を生成し、操作をロールバックするシステムの能力を圧倒する可能性があります。ソフトデリートまたはバックグラウンドアーカイブは、クリーンアップを段階的に行うことを可能にし、競合とリソースの負担を最小限に抑えます。"
            },
            vi: {
                title: "Khi xử lý việc dọn dẹp bảng lớn, tại sao thường cần phải sử dụng **soft deletes** (đặt cờ `is_deleted`) hoặc một **quá trình lưu trữ nền** thay vì các thao tác `DELETE` lớn, ngay lập tức?",
                body: "Một thao tác DELETE lớn gây ra những rủi ro nào về hiệu suất và hoạt động?",
                solution: "Một thao tác `DELETE` lớn giữ khóa trên các hàng bị ảnh hưởng trong một thời gian dài, dẫn đến **tranh chấp đồng thời** cao và chặn các giao dịch khác. Nó cũng tạo ra một lượng lớn **khối lượng nhật ký giao dịch** và có thể làm quá tải khả năng hoàn tác thao tác của hệ thống. Soft deletes hoặc lưu trữ nền cho phép việc dọn dẹp diễn ra dần dần, giảm thiểu tranh chấp và căng thẳng tài nguyên."
            }
        }
    },
    {
        _id: "rdbms-s-028",
        difficulty: "senior",
        tags: ["query optimization", "parameter sniffing", "staleness"],
        content: {
            en: {
                title: "Define **Parameter Sniffing**, and explain how it can lead to a highly suboptimal execution plan for stored procedures.",
                body: "What is the key difference between the first time a procedure is compiled and subsequent executions?",
                solution: "Parameter Sniffing occurs when the RDBMS compiles a stored procedure's execution plan based on the **specific parameter values passed during the *first* execution**. If those 'sniffed' values are highly unrepresentative (e.g., an extremely rare value was used first), the generated plan will be inefficient for subsequent, more typical parameter values, causing severe performance degradation for common calls."
            },
            jp: {
                title: "**パラメーター・スニッフィング**を定義し、それがストアドプロシージャにとって非常に最適ではない実行計画につながる可能性がある理由を説明してください。",
                body: "プロシージャが最初にコンパイルされたときと、その後の実行との主な違いは何ですか？",
                solution: "パラメーター・スニッフィングは、RDBMSが、*最初*の実行時に渡された**特定のパラメーター値**に基づいてストアドプロシージャの実行計画をコンパイルするときに発生します。それらの「スニッフィングされた」値が非常に代表的でない場合（例: 非常にまれな値が最初に使われた）、生成された計画は、その後のより一般的なパラメーター値に対して非効率的になり、一般的な呼び出しで深刻なパフォーマンス低下を引き起こします。"
            },
            vi: {
                title: "Định nghĩa **Parameter Sniffing** (Ngửi Tham số), và giải thích làm thế nào nó có thể dẫn đến một kế hoạch thực thi không tối ưu cho các stored procedure.",
                body: "Sự khác biệt chính giữa lần đầu tiên một thủ tục được biên dịch và các lần thực thi tiếp theo là gì?",
                solution: "Parameter Sniffing xảy ra khi RDBMS biên dịch kế hoạch thực thi của một stored procedure dựa trên **các giá trị tham số cụ thể được truyền trong lần thực thi *đầu tiên***. Nếu các giá trị 'được ngửi' đó không đại diện (ví dụ: một giá trị cực kỳ hiếm đã được sử dụng trước tiên), kế hoạch được tạo ra sẽ không hiệu quả đối với các giá trị tham số điển hình hơn sau đó, gây ra suy giảm hiệu suất nghiêm trọng cho các lần gọi phổ biến."
            }
        }
    },
    {
        _id: "rdbms-s-029",
        difficulty: "senior",
        tags: ["data modeling", "erd", "multi-valued attribute"],
        content: {
            en: {
                title: "In relational data modeling, how do you resolve a **Multi-Valued Attribute** (e.g., a customer having multiple phone numbers) to adhere to First Normal Form (1NF)?",
                body: "What is the minimum number of tables required to store this relationship?",
                solution: "A Multi-Valued Attribute must be resolved by **creating a new, separate table** for that attribute. This new table requires the **Primary Key of the original entity** as a Foreign Key and the **attribute value itself**. The Primary Key of the new table is typically the combination of both (a Composite Key). This requires a minimum of **two** tables." 
            },
            jp: {
                title: "リレーショナルデータモデリングにおいて、**多値属性**（例: 顧客が複数の電話番号を持つ）を**第一正規形（1NF）**に準拠させるためにどのように解決しますか？",
                body: "このリレーションシップを格納するために必要なテーブルの最小数はいくつですか？",
                solution: "多値属性は、その属性のために**新しい、別個のテーブルを作成する**ことによって解決される必要があります。この新しいテーブルには、**元のエンティティの主キー**を外部キーとして、そして**属性値自体**が必要です。新しいテーブルの主キーは通常、両方の組み合わせ（複合キー）です。これには最低**2つ**のテーブルが必要です。" 
            },
            vi: {
                title: "Trong mô hình hóa dữ liệu quan hệ, làm thế nào bạn giải quyết một **Multi-Valued Attribute** (Thuộc tính Đa trị) (ví dụ: một khách hàng có nhiều số điện thoại) để tuân thủ Dạng Chuẩn Thứ nhất (1NF)?",
                body: "Số lượng bảng tối thiểu cần thiết để lưu trữ mối quan hệ này là bao nhiêu?",
                solution: "Multi-Valued Attribute phải được giải quyết bằng cách **tạo một bảng mới, riêng biệt** cho thuộc tính đó. Bảng mới này yêu cầu **Khóa Chính của thực thể gốc** làm Khóa Ngoại và **giá trị thuộc tính đó**. Khóa Chính của bảng mới thường là sự kết hợp của cả hai (Khóa Tổng hợp). Điều này yêu cầu tối thiểu **hai** bảng." 
            }
        }
    },
    {
        _id: "rdbms-s-030",
        difficulty: "senior",
        tags: ["database", "nosql", "polyglot persistence", "architecture"],
        content: {
            en: {
                title: "What is the architectural concept of **Polyglot Persistence**, and why is it increasingly common in large-scale system design?",
                body: "What principle does it apply to data storage decisions?",
                solution: "Polyglot Persistence is the practice of **using different types of data storage technologies** (e.g., RDBMS for transactional data, NoSQL Document Store for catalogs, Graph DB for social connections) for different purposes within a single application or system. It applies the principle of **'Right Tool for the Job'** to data storage, optimizing performance, scalability, and flexibility for each specific data domain." 

            },
            jp: {
                title: "**ポリグロットパーシステンス**のアーキテクチャ上の概念は何ですか、そしてなぜそれが大規模なシステム設計でますます一般的になっているのですか？",
                body: "データストレージの決定にどのような原則を適用しますか？",
                solution: "ポリグロットパーシステンスは、単一のアプリケーションまたはシステム内で異なる目的のために**異なる種類のデータストレージ技術を使用する**慣行です（例: トランザクションデータにはRDBMS、カタログにはNoSQLドキュメントストア、ソーシャル接続にはグラフDB）。これは、データストレージに**「仕事に合った適切なツール」**の原則を適用し、特定のデータドメインごとにパフォーマンス、スケーラビリティ、および柔軟性を最適化します。" 

            },
            vi: {
                title: "Khái niệm kiến trúc **Polyglot Persistence** (Tính bền vững Đa ngôn ngữ) là gì, và tại sao nó ngày càng phổ biến trong thiết kế hệ thống quy mô lớn?",
                body: "Nguyên tắc nào nó áp dụng cho các quyết định lưu trữ dữ liệu?",
            }
        }
    },
    {
        _id: "rdbms-s-031",
        difficulty: "senior",
        tags: ["index", "storage", "io", "heap table"],
        content: {
            en: {
                title: "What is a **Heap Table** in RDBMS terminology, and what is its primary disadvantage compared to a table with a Clustered Index?",
                body: "How are the data rows arranged physically?",
                solution: "A Heap Table is a table that **does not have a Clustered Index**. Data rows are stored in an **unspecified or random order** (the order of insertion), and no physical sort order is maintained. The primary disadvantage is that retrieving data by a non-indexed column or range requires a full table scan, as the system has no knowledge of where the data might reside."
            },
            jp: {
                title: "RDBMSの用語で**ヒープテーブル**とは何ですか、そしてクラスター化インデックスを持つテーブルと比較した場合の主な欠点は何ですか？",
                body: "データ行は物理的にどのように配置されますか？",
                solution: "ヒープテーブルは**クラスター化インデックスを持たない**テーブルです。データ行は**未指定またはランダムな順序**（挿入順序）で格納され、物理的なソート順序は維持されません。主な欠点は、非インデックス付きの列または範囲でデータを取得するには、システムがデータがどこに存在するかわからないため、フルテーブルスキャンが必要になることです。"
            },
            vi: {
                title: "**Heap Table** (Bảng Heap) trong thuật ngữ RDBMS là gì, và nhược điểm chính của nó so với một bảng có Clustered Index là gì?",
                body: "Các hàng dữ liệu được sắp xếp vật lý như thế nào?",
                solution: "Heap Table là một bảng **không có Clustered Index**. Các hàng dữ liệu được lưu trữ theo **thứ tự không xác định hoặc ngẫu nhiên** (thứ tự chèn), và không có thứ tự sắp xếp vật lý nào được duy trì. Nhược điểm chính là việc truy xuất dữ liệu bằng một cột hoặc phạm vi không được lập chỉ mục yêu cầu quét toàn bộ bảng, vì hệ thống không biết dữ liệu có thể nằm ở đâu."
            }
        }
    },
    {
        _id: "rdbms-s-032",
        difficulty: "senior",
        tags: ["sql", "dml", "group by", "query plan", "memory"],
        content: {
            en: {
                title: "In a query execution plan, a **`GROUP BY`** operation can be executed using either a **Hash Aggregate** or a **Sort Aggregate**. Explain the primary trade-off between the two.",
                body: "Which technique is usually faster but consumes more memory?",
                solution: "A **Hash Aggregate** builds a hash table in memory to group the rows. It is generally **faster** if the data set fits in memory but risks spilling to disk (slowing down significantly) if the memory is insufficient. A **Sort Aggregate** requires sorting all data first. It is less sensitive to memory limits but is often **slower** due to the sorting overhead."
            },
            jp: {
                title: "クエリ実行計画において、**`GROUP BY`**操作は**ハッシュ集約**または**ソート集約**のいずれかを使用して実行できます。この2つの主なトレードオフを説明してください。",
                body: "どちらの技術が通常高速ですが、より多くのメモリを消費しますか？",
                solution: "**ハッシュ集約**は、行をグループ化するためにメモリ内にハッシュテーブルを構築します。データセットがメモリに収まる場合は通常**高速**ですが、メモリが不足している場合はディスクにスピルするリスクがあります（著しく遅くなります）。**ソート集約**は、最初にすべてのデータをソートする必要があります。メモリ制限にはあまり影響されませんが、ソートのオーバーヘッドのためにしばしば**遅く**なります。"
            },
            vi: {
                title: "Trong kế hoạch thực thi truy vấn, thao tác **`GROUP BY`** có thể được thực thi bằng cách sử dụng **Hash Aggregate** (Tổng hợp Băm) hoặc **Sort Aggregate** (Tổng hợp Sắp xếp). Giải thích sự đánh đổi chính giữa hai loại này.",
                body: "Kỹ thuật nào thường nhanh hơn nhưng tiêu thụ nhiều bộ nhớ hơn?",
                solution: "**Hash Aggregate** xây dựng một bảng băm trong bộ nhớ để nhóm các hàng. Nó thường **nhanh hơn** nếu tập dữ liệu vừa với bộ nhớ nhưng có nguy cơ tràn ra đĩa (chậm đi đáng kể) nếu bộ nhớ không đủ. **Sort Aggregate** yêu cầu sắp xếp tất cả dữ liệu trước. Nó ít nhạy cảm với giới hạn bộ nhớ hơn nhưng thường **chậm hơn** do chi phí sắp xếp."
            }
        }
    },
    {
        _id: "rdbms-s-033",
        difficulty: "senior",
        tags: ["data modeling", "erd", "temporal data", "event sourcing"],
        content: {
            en: {
                title: "How does the **Event Sourcing** architectural pattern relate to the RDBMS concept of auditing and temporal data? ",
                body: "What does the main 'Fact' table store instead of the current state?",
                solution: "Event Sourcing is an architectural pattern where all changes to the application state are stored as a **sequence of immutable events** in an append-only log. This log is essentially a granular audit trail and a complete form of temporal data. The main 'Fact' table (the event log) stores the **history of *what happened*** rather than the current state, which is computed by replaying the events." 
            },
            jp: {
                title: "**イベントソーシング**のアーキテクチャパターンは、RDBMSの監査および時間的データの概念とどのように関連していますか？",
                body: "メインの「ファクト」テーブルは、現在の状態の代わりに何を格納しますか？",
                solution: "イベントソーシングは、アプリケーションの状態へのすべての変更が、追記専用ログ内の**不変なイベントのシーケンス**として格納されるアーキテクチャパターンです。このログは、基本的に粒度の高い監査証跡であり、時間的データの完全な形式です。メインの「ファクト」テーブル（イベントログ）は、現在の状態ではなく、イベントを再生することによって計算される**何が起こったかの履歴**を格納します。" 

            },
            vi: {
                title: "Mô hình kiến trúc **Event Sourcing** (Nguồn sự kiện) liên quan đến khái niệm kiểm toán và dữ liệu thời gian của RDBMS như thế nào?",
                body: "Bảng 'Fact' chính lưu trữ gì thay vì trạng thái hiện tại?",
                solution: "Event Sourcing là một mô hình kiến trúc, nơi tất cả các thay đổi đối với trạng thái ứng dụng được lưu trữ dưới dạng **một chuỗi các sự kiện bất biến** trong một nhật ký chỉ được thêm vào. Nhật ký này về cơ bản là một dấu vết kiểm toán chi tiết và là một dạng dữ liệu thời gian hoàn chỉnh. Bảng 'Fact' chính (nhật ký sự kiện) lưu trữ **lịch sử về *những gì đã xảy ra*** thay vì trạng thái hiện tại, trạng thái này được tính toán bằng cách phát lại các sự kiện." 

            }
        }
    },
    {
        _id: "rdbms-s-034",
        difficulty: "senior",
        tags: ["database", "replication", "consistency", "conflict"],
        content: {
            en: {
                title: "In **Multi-Master Replication** (or Multi-Active), what is a **Write Conflict**, and what mechanisms must the RDBMS employ to resolve it?",
                body: "Give an example of a conflict resolution rule.",
                solution: "A Write Conflict occurs when **two different Master nodes simultaneously attempt to update the same row** in a way that creates an inconsistent state. The RDBMS must employ **Conflict Resolution Mechanisms**, such as: **Last-Writer-Wins** (using a timestamp to choose the most recent change), **Site Priority** (giving precedence to one node), or **Custom Conflict Handlers** (allowing application-defined logic to merge the changes)." 
            },
            jp: {
                title: "**マルチマスターレプリケーション**（またはマルチアクティブ）において、**書き込み競合**とは何ですか、そしてそれを解決するためにRDBMSが採用しなければならないメカニズムは何ですか？",
                body: "競合解決ルールの例を挙げてください。",
                solution: "書き込み競合は、**2つの異なるマスターノードが同時に同じ行を更新しようとする**ことで、一貫性のない状態が生じるときに発生します。RDBMSは、**競合解決メカニズム**を採用する必要があります。例: **Last-Writer-Wins**（タイムスタンプを使用して最も最近の変更を選択する）、**サイト優先度**（1つのノードに優先順位を付ける）、または**カスタム競合ハンドラー**（アプリケーション定義のロジックで変更をマージできるようにする）。" 
            },
            vi: {
                title: "Trong **Multi-Master Replication** (Nhân bản Đa Chủ) (hoặc Đa Hoạt động), **Write Conflict** (Xung đột Ghi) là gì, và cơ chế nào mà RDBMS phải sử dụng để giải quyết nó?",
                body: "Đưa ra một ví dụ về quy tắc giải quyết xung đột.",
                solution: "Write Conflict xảy ra khi **hai nút Master khác nhau đồng thời cố gắng cập nhật cùng một hàng** theo cách tạo ra trạng thái không nhất quán. RDBMS phải sử dụng **Cơ chế Giải quyết Xung đột**, chẳng hạn như: **Last-Writer-Wins** (Sử dụng dấu thời gian để chọn thay đổi gần nhất), **Site Priority** (Ưu tiên một nút), hoặc **Custom Conflict Handlers** (Cho phép logic do ứng dụng định nghĩa để hợp nhất các thay đổi)." 
            }
        }
    },
    {
        _id: "rdbms-s-035",
        difficulty: "senior",
        tags: ["sql", "performance", "join", "optimization"],
        content: {
            en: {
                title: "In complex queries, explain why using **`UNION ALL`** is almost always preferred over **`UNION`** when duplicate elimination is not strictly required.",
                body: "What expensive operation does `UNION ALL` skip?",
                solution: "`UNION` includes an implicit and very expensive operation: a **DISTINCT Sort** (or Hash Aggregate) across the entire final result set to remove duplicate rows. **`UNION ALL`** skips this duplicate elimination step, which often requires significant CPU and memory resources, resulting in much faster execution, especially when combining already unique result sets."
            },
            jp: {
                title: "複雑なクエリにおいて、重複排除が厳密に必要とされない場合、**`UNION`**よりも**`UNION ALL`**がほとんど常に好まれるのはなぜですか？",
                body: "`UNION ALL`がスキップする高コストな操作は何ですか？",
                solution: "`UNION`には、暗黙的で非常に高コストな操作が含まれます。それは、重複行を削除するための最終結果セット全体にわたる**DISTINCTソート**（またはハッシュ集約）です。**`UNION ALL`** は、この重複排除ステップをスキップします。これは、多くの場合、大量のCPUとメモリリソースを必要とし、特にすでに一意な結果セットを結合する場合に、はるかに高速な実行をもたらします。"
            },
            vi: {
                title: "Trong các truy vấn phức tạp, giải thích tại sao **`UNION ALL`** hầu như luôn được ưu tiên hơn **`UNION`** khi việc loại bỏ trùng lặp không được yêu cầu nghiêm ngặt.",
                body: "Thao tác tốn kém nào mà `UNION ALL` bỏ qua?",
                solution: "`UNION` bao gồm một thao tác ngầm định và rất tốn kém: **Sắp xếp DISTINCT** (hoặc Tổng hợp Băm) trên toàn bộ tập hợp kết quả cuối cùng để loại bỏ các hàng trùng lặp. **`UNION ALL`** bỏ qua bước loại bỏ trùng lặp này, vốn thường yêu cầu tài nguyên CPU và bộ nhớ đáng kể, dẫn đến việc thực thi nhanh hơn nhiều, đặc biệt là khi kết hợp các tập hợp kết quả đã là duy nhất."
            }
        }
    },
    {
        _id: "rdbms-s-036",
        difficulty: "senior",
        tags: ["database", "io", "buffer pool", "page"],
        content: {
            en: {
                title: "What is the function of the **Buffer Pool** (or Buffer Cache) in an RDBMS, and why is the **cache hit ratio** a critical performance metric?",
                body: "What does a low cache hit ratio imply about disk I/O?",
                solution: "The Buffer Pool is the main memory area where the RDBMS temporarily stores copies of **data pages** and **index pages** read from disk. The cache hit ratio is the percentage of requests satisfied directly from the pool. A **low cache hit ratio** implies the RDBMS is frequently forced to perform **physical disk I/O** (disk reads), which is orders of magnitude slower than reading from memory, severely degrading performance." 
            },
            jp: {
                title: "RDBMSにおける**バッファプール**（またはバッファキャッシュ）の機能は何ですか、そして**キャッシュヒット率**が重要なパフォーマンスメトリックであるのはなぜですか？",
                body: "キャッシュヒット率が低いことは、ディスクI/Oについて何を意味しますか？",
                solution: "バッファプールは、RDBMSがディスクから読み取られた**データページ**および**インデックスページ**のコピーを一時的に格納する主要なメモリ領域です。キャッシュヒット率は、プールから直接満たされたリクエストの割合です。**キャッシュヒット率が低い**ことは、RDBMSが頻繁に**物理ディスクI/O**（ディスク読み取り）を実行することを余儀なくされていることを意味し、これはメモリからの読み取りよりも桁違いに遅く、パフォーマンスを著しく低下させます。" 
            },
            vi: {
                title: "Chức năng của **Buffer Pool** (Vùng Bộ đệm) (hoặc Buffer Cache) trong RDBMS là gì, và tại sao **tỷ lệ trúng bộ đệm (cache hit ratio)** là một chỉ số hiệu suất quan trọng?",
                body: "Tỷ lệ trúng bộ đệm thấp ngụ ý gì về I/O đĩa?",
                solution: "Buffer Pool là khu vực bộ nhớ chính nơi RDBMS tạm thời lưu trữ các bản sao của **các trang dữ liệu** và **các trang chỉ mục** được đọc từ đĩa. Tỷ lệ trúng bộ đệm là tỷ lệ phần trăm yêu cầu được đáp ứng trực tiếp từ vùng. **Tỷ lệ trúng bộ đệm thấp** ngụ ý rằng RDBMS thường xuyên bị buộc phải thực hiện **I/O đĩa vật lý** (đọc đĩa), vốn chậm hơn nhiều lần so với đọc từ bộ nhớ, làm giảm hiệu suất nghiêm trọng." 
            }
        }
    },
    {
        _id: "rdbms-s-037",
        difficulty: "senior",
        tags: ["database", "transaction", "snapshot isolation", "conflict"],
        content: {
            en: {
                title: "In modern RDBMS (like PostgreSQL/Oracle), why is **Snapshot Isolation** often preferred over Repeatable Read, and what specific conflict does it introduce?",
                body: "What is the name of the conflict that can occur on commit?",
                solution: "Snapshot Isolation offers better concurrency because reads never block writes (readers read a consistent snapshot of the data) and writes never block reads. It is typically faster than Repeatable Read. However, it introduces the **First-Updater-Wins** conflict, known as a **Serialization Failure** (or Update Conflict), where two transactions that modify the same data concurrently will cause the second transaction to fail upon commit, preventing non-serializable execution."
            },
            jp: {
                title: "最新のRDBMS（PostgreSQL/Oracleなど）では、**スナップショット隔離**がRepeatable Readよりも好まれることが多いのはなぜですか、そしてそれはどのような特定の競合を引き起こしますか？",
                body: "コミット時に発生する可能性がある競合の名前は何ですか？",
                solution: "スナップショット隔離は、読み取りが書き込みをブロックせず（リーダーはデータの一貫したスナップショットを読み取る）、書き込みが読み取りをブロックしないため、より良い同時実行性を提供します。通常、Repeatable Readよりも高速です。ただし、**First-Updater-Wins**の競合、つまり**シリアル化失敗**（または更新競合）と呼ばれる競合を引き起こします。これは、同じデータを同時に変更する2つのトランザクションが、コミット時に2番目のトランザクションを失敗させ、非シリアル化可能な実行を防ぎます。"
            },
            vi: {
                title: "Trong RDBMS hiện đại (như PostgreSQL/Oracle), tại sao **Snapshot Isolation** (Cô lập Ảnh chụp) thường được ưu tiên hơn Repeatable Read, và xung đột cụ thể nào nó gây ra?",
                body: "Tên của xung đột có thể xảy ra khi commit là gì?",
                solution: "Snapshot Isolation cung cấp tính đồng thời tốt hơn vì các thao tác đọc không bao giờ chặn các thao tác ghi (người đọc đọc một ảnh chụp nhất quán của dữ liệu) và các thao tác ghi không bao giờ chặn các thao tác đọc. Nó thường nhanh hơn Repeatable Read. Tuy nhiên, nó gây ra xung đột **First-Updater-Wins** (Người cập nhật đầu tiên thắng), được gọi là **Serialization Failure** (Lỗi Tuần tự hóa) (hoặc Xung đột Cập nhật), nơi hai giao dịch sửa đổi cùng một dữ liệu đồng thời sẽ khiến giao dịch thứ hai thất bại khi commit, ngăn chặn việc thực thi không tuần tự hóa được."
            }
        }
    },
    {
        _id: "rdbms-s-038",
        difficulty: "senior",
        tags: ["index", "b-tree", "structure", "height"],
        content: {
            en: {
                title: "Why is the **height** of a B-Tree index structure a crucial factor in the performance of RDBMS lookups, especially on very large tables?",
                body: "What physical operation does each level of height typically represent?",
                solution: "The height of the B-Tree determines the **maximum number of disk I/O operations (page reads)** required to locate a single data row. For very large tables, keeping the height low (e.g., 3-4 levels) is vital, as each level often represents one costly disk read needed to traverse from the root page to the leaf page." 

            },
            jp: {
                title: "B-Treeインデックス構造の**高さ**は、特に非常に大きなテーブルでのRDBMSルックアップのパフォーマンスにおいて、なぜ重要な要素なのですか？",
                body: "高さの各レベルは、通常、どの物理操作を表しますか？",
                solution: "B-Treeの高さは、単一のデータ行を見つけるために必要な**ディスクI/O操作（ページ読み取り）の最大数**を決定します。非常に大きなテーブルの場合、ルートページからリーフページに移動するために必要な1つの高コストなディスク読み取りを各レベルが表すことが多いため、高さを低く保つこと（例: 3〜4レベル）が不可欠です。" 

            },
            vi: {
                title: "**Chiều cao** của cấu trúc chỉ mục B-Tree là một yếu tố quan trọng trong hiệu suất của việc tra cứu RDBMS, đặc biệt đối với các bảng rất lớn, tại sao?",
                body: "Mỗi cấp độ chiều cao thường đại diện cho thao tác vật lý nào?",
                solution: "Chiều cao của B-Tree xác định **số lượng tối đa các thao tác I/O đĩa (đọc trang)** cần thiết để định vị một hàng dữ liệu duy nhất. Đối với các bảng rất lớn, việc giữ chiều cao thấp (ví dụ: 3-4 cấp độ) là rất quan trọng, vì mỗi cấp độ thường đại diện cho một lần đọc đĩa tốn kém cần thiết để đi từ trang gốc đến trang lá." 
            }
        }
    },
    {
        _id: "rdbms-s-039",
        difficulty: "senior",
        tags: ["sql", "analytic function", "time series", "lead lag"],
        content: {
            en: {
                title: "Write an SQL query snippet using a Window Function that calculates the **percentage change** in `StockPrice` from the **previous day's** price, partitioned by `TickerSymbol`.",
                body: "Which Window function is necessary for accessing the previous row?",
                solution: "`StockPrice / LAG(StockPrice, 1, StockPrice) OVER (PARTITION BY TickerSymbol ORDER BY TradeDate) - 1` (The `LAG` function fetches the previous day's price, or the current price if no previous day exists.)"
            },
            jp: {
                title: "ウィンドウ関数を使用して、`TickerSymbol`でパーティション化された、**前日**の価格からの`StockPrice`の**変化率**を計算するSQLクエリのスニペットを作成してください。",
                body: "前の行にアクセスするために必要なウィンドウ関数は何ですか？",
                solution: "`StockPrice / LAG(StockPrice, 1, StockPrice) OVER (PARTITION BY TickerSymbol ORDER BY TradeDate) - 1`（`LAG`関数は、前日の価格を取得します。前の日が存在しない場合は現在の価格を取得します。）"
            },
            vi: {
                title: "Viết một đoạn mã truy vấn SQL sử dụng Window Function tính toán **phần trăm thay đổi** của `StockPrice` so với giá **ngày hôm trước**, được phân vùng theo `TickerSymbol`.",
                body: "Hàm Cửa sổ nào là cần thiết để truy cập hàng trước đó?",
                solution: "`StockPrice / LAG(StockPrice, 1, StockPrice) OVER (PARTITION BY TickerSymbol ORDER BY TradeDate) - 1` (Hàm `LAG` tìm nạp giá ngày hôm trước, hoặc giá hiện tại nếu không có ngày hôm trước.)"
            }
        }
    },
    {
        _id: "rdbms-s-040",
        difficulty: "senior",
        tags: ["security", "injection", "prepared statement", "client side"],
        content: {
            en: {
                title: "If a web application uses **Parameterized Queries** (Prepared Statements), can it still be vulnerable to SQL Injection if the attacker gains control over the **database credentials** or the connection string?",
                body: "What is the scope of control required for this type of attack?",
                solution: "No, the prepared statement mechanism itself remains effective because it separates code from data. However, if an attacker gains control over the **database credentials** (e.g., via a configuration file vulnerability), they bypass the application layer entirely and can execute **arbitrary DDL/DML** directly against the database using those compromised credentials, rendering the prepared statements defense useless."
            },
            jp: {
                title: "Webアプリケーションが**パラメーター化クエリ**（プリペアドステートメント）を使用している場合でも、攻撃者が**データベース資格情報**または接続文字列を制御下に置いた場合、SQLインジェクションに対して脆弱である可能性がありますか？",
                body: "この種の攻撃に必要な制御の範囲は何ですか？",
                solution: "いいえ、プリペアドステートメントメカニズム自体は、コードとデータを分離するため、引き続き効果的です。ただし、攻撃者が**データベース資格情報**を制御下に置いた場合（例: 構成ファイルの脆弱性を介して）、アプリケーション層全体をバイパスし、それらの侵害された資格情報を使用してデータベースに対して**任意のDDL/DML**を直接実行できるため、プリペアドステートメントによる防御は役に立たなくなります。"
            },
            vi: {
                title: "Nếu một ứng dụng web sử dụng **Parameterized Queries** (Truy vấn Tham số hóa) (Prepared Statements), liệu nó vẫn có thể dễ bị tấn công SQL Injection nếu kẻ tấn công giành quyền kiểm soát **thông tin đăng nhập cơ sở dữ liệu** hoặc chuỗi kết nối?",
                body: "Phạm vi kiểm soát cần thiết cho loại tấn công này là gì?",
                solution: "Không, cơ chế prepared statement tự nó vẫn hiệu quả vì nó tách mã khỏi dữ liệu. Tuy nhiên, nếu kẻ tấn công giành quyền kiểm soát **thông tin đăng nhập cơ sở dữ liệu** (ví dụ: thông qua lỗ hổng tệp cấu hình), chúng sẽ bỏ qua hoàn toàn lớp ứng dụng và có thể thực thi **DDL/DML tùy ý** trực tiếp chống lại cơ sở dữ liệu bằng cách sử dụng các thông tin đăng nhập bị xâm phạm đó, làm cho biện pháp phòng thủ bằng prepared statements trở nên vô dụng."
            }
        }
    },
    {
        _id: "rdbms-s-041",
        difficulty: "senior",
        tags: ["sql", "dml", "delete", "lock escalation"],
        content: {
            en: {
                title: "Explain the mechanism of **Lock Escalation**, and why it is a common cause of blocking in high-concurrency environments when a transaction updates too many rows.",
                body: "What type of locks replace the fine-grained locks?",
                solution: "Lock Escalation is the process where the RDBMS automatically converts many fine-grained locks (like **Row Locks** or **Page Locks**) into a single, coarser-grained lock (like a **Table Lock**). This is done to reduce the system overhead of managing thousands of individual locks. It causes blocking because a single transaction's large operation can suddenly acquire an exclusive lock on the entire table, blocking all other transactions, even those only needing a few rows."
            },
            jp: {
                title: "**ロックエスカレーション**のメカニズムを説明し、トランザクションが更新する行が多すぎる場合に、なぜそれが高同時実行環境でブロッキングの一般的な原因となるのかを説明してください。",
                body: "どのタイプのロックが、きめ細かなロックに取って代わりますか？",
                solution: "ロックエスカレーションは、RDBMSが多くのきめ細かなロック（**行ロック**や**ページロック**など）を単一の、より粗い粒度のロック（**テーブルロック**など）に自動的に変換するプロセスです。これは、何千もの個々のロックを管理するシステムオーバーヘッドを削減するために行われます。単一のトランザクションの大規模な操作が突然テーブル全体に対する排他ロックを取得し、他のすべてのトランザクション（数行しか必要としないトランザクションでさえ）をブロックするため、ブロッキングを引き起こします。"
            },
            vi: {
                title: "Giải thích cơ chế của **Lock Escalation** (Leo thang Khóa), và tại sao nó là một nguyên nhân phổ biến gây ra tắc nghẽn trong các môi trường đồng thời cao khi một giao dịch cập nhật quá nhiều hàng.",
                body: "Loại khóa nào thay thế các khóa chi tiết?",
                solution: "Lock Escalation là quá trình RDBMS tự động chuyển đổi nhiều khóa chi tiết (như **Khóa Hàng** hoặc **Khóa Trang**) thành một khóa đơn lẻ, thô hơn (như **Khóa Bảng**). Điều này được thực hiện để giảm chi phí hệ thống khi quản lý hàng nghìn khóa riêng lẻ. Nó gây ra tắc nghẽn vì thao tác lớn của một giao dịch duy nhất có thể đột ngột giành được khóa độc quyền trên toàn bộ bảng, chặn tất cả các giao dịch khác, ngay cả những giao dịch chỉ cần một vài hàng."
            }
        }
    },
    {
        _id: "rdbms-s-042",
        difficulty: "senior",
        tags: ["database", "nosql", "difference", "consistency"],
        content: {
            en: {
                title: "How does the concept of **Eventual Consistency** (common in NoSQL and distributed RDBMS) fundamentally differ from **Strong Consistency** (ACID)?",
                body: "Which property is sacrificed to improve availability/latency?",
                solution: "With **Strong Consistency** (ACID), a read operation is guaranteed to return the latest committed write immediately. **Eventual Consistency** guarantees that if no new updates occur, all reads will eventually return the same, latest value, but there is an indefinite period (replication lag) where reads may return stale data. **Immediate Consistency** is sacrificed to improve **Availability** and **Latency**."
            },
            jp: {
                title: "**結果整合性**の概念（NoSQLおよび分散RDBMSで一般的）は、**強力な一貫性**（ACID）とどのように根本的に異なりますか？",
                body: "可用性/レイテンシを向上させるために犠牲にされるプロパティは何ですか？",
                solution: "**強力な一貫性**（ACID）では、読み取り操作は最新のコミットされた書き込みを即座に返すことが保証されます。**結果整合性**は、新しい更新が発生しない場合、すべての読み取りがいずれは同じ、最新の値を返すことを保証しますが、読み取りが古いデータを返す可能性がある不確定な期間（レプリケーションラグ）があります。**即時の一貫性**は、**可用性**と**レイテンシ**を向上させるために犠牲にされます。"
            },
            vi: {
                title: "Khái niệm về **Eventual Consistency** (Tính nhất quán Cuối cùng) (phổ biến trong NoSQL và RDBMS phân tán) khác biệt cơ bản với **Strong Consistency** (Tính nhất quán Mạnh) (ACID) như thế nào?",
                body: "Thuộc tính nào bị hy sinh để cải thiện tính khả dụng/độ trễ?",
                solution: "Với **Strong Consistency** (ACID), một thao tác đọc được đảm bảo trả về lần ghi đã commit mới nhất ngay lập tức. **Eventual Consistency** đảm bảo rằng nếu không có bản cập nhật mới nào xảy ra, tất cả các lần đọc cuối cùng sẽ trả về cùng một giá trị mới nhất, nhưng có một khoảng thời gian không xác định (độ trễ nhân bản) mà các lần đọc có thể trả về dữ liệu cũ. **Tính nhất quán Tức thì** bị hy sinh để cải thiện **Tính khả dụng** và **Độ trễ**."
            }
        }
    },
    {
        _id: "rdbms-s-043",
        difficulty: "senior",
        tags: ["query optimization", "index", "function", "sargable"],
        content: {
            en: {
                title: "In query optimization, what does it mean for a query predicate to be **SARGable** (Search ARGumentable)?",
                body: "Give an example of a non-SARGable predicate that prevents index usage.",
                solution: "A predicate is SARGable if the RDBMS can use an **index seek or scan** to efficiently retrieve data, meaning the filtering condition is applied directly to the indexed column. A non-SARGable predicate applies a function to the indexed column, like `WHERE YEAR(OrderDate) = 2024`. This forces the database to evaluate the function for *every row* before filtering, preventing index usage."
            },
            jp: {
                title: "クエリ最適化において、クエリ述語が**SARGable**（検索引数可能）であるとはどういう意味ですか？",
                body: "インデックスの使用を妨げる、非SARGableな述語の例を挙げてください。",
                solution: "述語がSARGableであるとは、RDBMSがデータを効率的に取得するために**インデックスシークまたはスキャン**を使用できることを意味します。つまり、フィルタリング条件がインデックス付きの列に直接適用されます。非SARGableな述語は、インデックス付きの列に関数を適用します。例: `WHERE YEAR(OrderDate) = 2024`。これにより、データベースはフィルタリングの前に*すべての行*に対して関数を評価することを余儀なくされ、インデックスの使用が妨げられます。"
            },
            vi: {
                title: "Trong tối ưu hóa truy vấn, một vị từ truy vấn **SARGable** (Có thể dùng đối số Tìm kiếm) có nghĩa là gì?",
                body: "Đưa ra một ví dụ về một vị từ không SARGable ngăn chặn việc sử dụng chỉ mục.",
                solution: "Một vị từ là SARGable nếu RDBMS có thể sử dụng **tìm kiếm hoặc quét chỉ mục** để truy xuất dữ liệu một cách hiệu quả, nghĩa là điều kiện lọc được áp dụng trực tiếp cho cột được lập chỉ mục. Một vị từ không SARGable áp dụng một hàm cho cột được lập chỉ mục, như `WHERE YEAR(OrderDate) = 2024`. Điều này buộc cơ sở dữ liệu phải đánh giá hàm cho *mọi hàng* trước khi lọc, ngăn chặn việc sử dụng chỉ mục."
            }
        }
    },
    {
        _id: "rdbms-s-044",
        difficulty: "senior",
        tags: ["sql", "dml", "delete", "subquery", "performance"],
        content: {
            en: {
                title: "Explain the performance risk of using **`NOT IN`** with a subquery, especially if the subquery's result set contains **NULL** values.",
                body: "What is the logical result when comparing a value to NULL using `NOT IN`?",
                solution: "If the subquery for `NOT IN` returns even a single **NULL** value, the entire outer `WHERE` clause condition involving `NOT IN` will evaluate to **UNKNOWN** for every row. Since SQL only returns rows where the condition is TRUE, **zero rows** will be returned, which is logically incorrect and may also force a slow full table scan instead of an index seek, as the optimizer cannot trust the result."
            },
            jp: {
                title: "サブクエリで**`NOT IN`**を使用することのパフォーマンス上のリスク、特にサブクエリの結果セットに**NULL**値が含まれている場合のリスクを説明してください。",
                body: "`NOT IN`を使用して値をNULLと比較する場合の論理的な結果は何ですか？",
                solution: "`NOT IN`のサブクエリが単一の**NULL**値でも返した場合、`NOT IN`を含む外側の`WHERE`句の条件全体がすべての行に対して**UNKNOWN**と評価されます。SQLは条件がTRUEの行のみを返すため、**ゼロ行**が返されます。これは論理的に正しくなく、オプティマイザーが結果を信頼できないため、インデックスシークの代わりに遅いフルテーブルスキャンを強制する可能性もあります。"
            },
            vi: {
                title: "Giải thích rủi ro hiệu suất của việc sử dụng **`NOT IN`** với một subquery, đặc biệt nếu tập hợp kết quả của subquery chứa các giá trị **NULL**.",
                body: "Kết quả logic khi so sánh một giá trị với NULL bằng cách sử dụng `NOT IN` là gì?",
                solution: "Nếu subquery cho `NOT IN` trả về dù chỉ một giá trị **NULL**, toàn bộ điều kiện mệnh đề `WHERE` bên ngoài liên quan đến `NOT IN` sẽ được đánh giá là **UNKNOWN** cho mọi hàng. Vì SQL chỉ trả về các hàng mà điều kiện là TRUE, **không có hàng nào** sẽ được trả về, điều này không đúng về mặt logic và cũng có thể buộc quét toàn bộ bảng chậm thay vì tìm kiếm chỉ mục, vì bộ tối ưu hóa không thể tin tưởng vào kết quả."
            }
        }
    },
    {
        _id: "rdbms-s-045",
        difficulty: "senior",
        tags: ["data modeling", "erd", "temporal data", "system versioned"],
        content: {
            en: {
                title: "Describe the concept of a **System-Versioned Temporal Table** (as implemented in SQL standards or specific RDBMS like SQL Server/MariaDB).",
                body: "What two fields are automatically maintained by the system, and what is the key benefit?",
                solution: "A System-Versioned Temporal Table automatically maintains a history of all data changes. The RDBMS implicitly maintains two columns: **`ValidFrom`** and **`ValidTo`** (or similar), storing the period for which a row was active. The key benefit is that it allows developers to query data **'AS OF'** a specific historical point in time using simple query syntax, without managing complex history tables manually." 
            },
            jp: {
                title: "**システムバージョン管理されたテンポラルテーブル**の概念（SQL標準またはSQL Server/MariaDBなどの特定のRDBMSで実装されている）を説明してください。",
                body: "どの2つのフィールドがシステムによって自動的に維持され、主な利点は何ですか？",
                solution: "システムバージョン管理されたテンポラルテーブルは、すべてのデータ変更の履歴を自動的に維持します。RDBMSは暗黙的に2つの列、**`ValidFrom`** と **`ValidTo`**（または類似のもの）を維持し、行がアクティブであった期間を格納します。主な利点は、開発者が複雑な履歴テーブルを手動で管理することなく、単純なクエリ構文を使用して特定の過去の時点の**「AS OF」**データをクエリできることです。" 
            },
            vi: {
                title: "Mô tả khái niệm về **System-Versioned Temporal Table** (Bảng Thời gian được Phiên bản hóa theo Hệ thống) (như được triển khai trong các tiêu chuẩn SQL hoặc RDBMS cụ thể như SQL Server/MariaDB).",
                body: "Hai trường nào được hệ thống tự động duy trì, và lợi ích chính là gì?",
                solution: "System-Versioned Temporal Table tự động duy trì lịch sử của tất cả các thay đổi dữ liệu. RDBMS ngầm định duy trì hai cột: **`ValidFrom`** và **`ValidTo`** (hoặc tương tự), lưu trữ khoảng thời gian mà một hàng hoạt động. Lợi ích chính là nó cho phép nhà phát triển truy vấn dữ liệu **'TÍNH ĐẾN'** một điểm thời gian lịch sử cụ thể bằng cách sử dụng cú pháp truy vấn đơn giản, mà không cần quản lý các bảng lịch sử phức tạp theo cách thủ công." 
            }
        }
    },
    {
        _id: "rdbms-s-046",
        difficulty: "senior",
        tags: ["database", "nosql", "graph db", "relationship"],
        content: {
            en: {
                title: "What is the primary strength of a **Graph Database** (like Neo4j) over an RDBMS for certain types of data, and what is the fundamental unit of storage?",
                body: "What problem does it solve regarding many-to-many relationships and performance?",
                solution: "The primary strength is the efficient storage and traversal of **relationships** between entities. The fundamental units are **Nodes** (entities) and **Edges** (relationships). It solves the performance problem of complex, multi-level joins (needed for M:N relationships in RDBMS) by storing relationships as explicit, indexed pointers, making deep traversals extremely fast." 

            },
            jp: {
                title: "特定の種類のデータについて、**グラフデータベース**（Neo4jなど）がRDBMSに対して持つ主な強みは何ですか、そしてストレージの基本的な単位は何ですか？",
                body: "多対多のリレーションシップとパフォーマンスに関して、どのような問題を解決しますか？",
                solution: "主な強みは、エンティティ間の**リレーションシップ**の効率的な格納とトラバーサルです。基本的な単位は**ノード**（エンティティ）と**エッジ**（リレーションシップ）です。これは、リレーションシップを明示的なインデックス付きポインターとして格納することで、複雑な、多層的な結合（RDBMSのM:Nリレーションシップに必要）のパフォーマンスの問題を解決し、深いトラバーサルを非常に高速にします。" 

            },
            vi: {
                title: "Điểm mạnh chính của **Graph Database** (Cơ sở dữ liệu Đồ thị) (như Neo4j) so với RDBMS đối với một số loại dữ liệu nhất định là gì, và đơn vị lưu trữ cơ bản là gì?",
                body: "Nó giải quyết vấn đề gì liên quan đến mối quan hệ nhiều-nhiều và hiệu suất?",
                solution: "Điểm mạnh chính là việc lưu trữ và duyệt **các mối quan hệ** giữa các thực thể một cách hiệu quả. Các đơn vị cơ bản là **Nodes** (thực thể) và **Edges** (mối quan hệ). Nó giải quyết vấn đề hiệu suất của các phép join phức tạp, đa cấp (cần thiết cho các mối quan hệ M:N trong RDBMS) bằng cách lưu trữ các mối quan hệ dưới dạng các con trỏ được lập chỉ mục, khiến việc duyệt sâu trở nên cực kỳ nhanh chóng." 
            }
        }
    },
    {
        _id: "rdbms-s-047",
        difficulty: "senior",
        tags: ["sql", "dml", "dynamic sql", "security"],
        content: {
            en: {
                title: "What is **Dynamic SQL**, and what is the *only* safe way to include user input variables in a Dynamic SQL statement?",
                body: "What command or mechanism should be used instead of string concatenation?",
                solution: "Dynamic SQL is SQL code constructed as a **string** at runtime and then executed. It's unsafe because it easily enables SQL Injection if user input is concatenated. The only safe way to include user input is by using **Parameterized Execution** or **Binding Variables** (e.g., using `sp_executesql` in SQL Server, or prepared statements via the connector), where the user input is passed as a data parameter, not as part of the executable command string."
            },
            jp: {
                title: "**動的SQL**とは何ですか、そして動的SQLステートメントにユーザー入力変数を含めるための*唯一*安全な方法は何ですか？",
                body: "文字列連結の代わりにどのコマンドまたはメカニズムを使用すべきですか？",
                solution: "動的SQLは、実行時に**文字列**として構築され、その後実行されるSQLコードです。ユーザー入力が連結されるとSQLインジェクションを容易にするため、安全ではありません。ユーザー入力を含めるための唯一の安全な方法は、**パラメーター化実行**または**バインド変数**を使用することです（例: SQL Serverの`sp_executesql`、またはコネクタを介したプリペアドステートメント）。この場合、ユーザー入力は実行可能なコマンド文字列の一部としてではなく、データパラメーターとして渡されます。"
            },
            vi: {
                title: "**Dynamic SQL** (SQL Động) là gì, và cách *duy nhất* an toàn để đưa các biến đầu vào của người dùng vào một câu lệnh SQL Động là gì?",
                body: "Nên sử dụng lệnh hoặc cơ chế nào thay vì nối chuỗi?",
                solution: "Dynamic SQL là mã SQL được xây dựng dưới dạng **chuỗi** tại thời điểm chạy và sau đó được thực thi. Nó không an toàn vì nó dễ dàng kích hoạt SQL Injection nếu đầu vào của người dùng được nối. Cách duy nhất an toàn để đưa đầu vào của người dùng vào là bằng cách sử dụng **Thực thi Tham số hóa (Parameterized Execution)** hoặc **Biến Liên kết (Binding Variables)** (ví dụ: sử dụng `sp_executesql` trong SQL Server, hoặc prepared statements thông qua trình kết nối), trong đó đầu vào của người dùng được truyền dưới dạng tham số dữ liệu, không phải là một phần của chuỗi lệnh có thể thực thi."
            }
        }
    },
    {
        _id: "rdbms-s-048",
        difficulty: "senior",
        tags: ["database", "io", "raid", "write performance"],
        content: {
            en: {
                title: "In the context of database storage, what is the trade-off between using **RAID 1 (Mirroring)** and **RAID 5 (Striping with Parity)**?",
                body: "Which RAID level offers better read performance, and which offers better write performance (ignoring parity overhead)?",
                solution: "**RAID 1** (Mirroring) offers redundancy and **excellent read performance** (can read from either mirrored disk) but requires 50% storage overhead. **RAID 5** (Striping with Parity) offers better **storage efficiency** and reasonable read performance, but **write performance is significantly slower** due to the overhead of calculating and writing the parity block for every write operation." 
            },
            jp: {
                title: "データベースストレージの文脈で、**RAID 1（ミラーリング）**と**RAID 5（パリティ付きストライピング）**を使用することのトレードオフは何ですか？",
                body: "どちらのRAIDレベルがより良い読み取りパフォーマンスを提供し、どちらがより良い書き込みパフォーマンスを提供しますか（パリティのオーバーヘッドを無視して）？",
                solution: "**RAID 1**（ミラーリング）は冗長性を提供し、**優れた読み取りパフォーマンス**を提供しますが（ミラーリングされたディスクのどちらからでも読み取ることができます）、50%のストレージオーバーヘッドが必要です。**RAID 5**（パリティ付きストライピング）は、より良い**ストレージ効率**と妥当な読み取りパフォーマンスを提供しますが、すべての書き込み操作でパリティブロックを計算して書き込むオーバーヘッドがあるため、**書き込みパフォーマンスは著しく遅くなります**。" 
            },
            vi: {
                title: "Trong bối cảnh lưu trữ cơ sở dữ liệu, sự đánh đổi giữa việc sử dụng **RAID 1 (Mirroring - Nhân bản)** và **RAID 5 (Striping with Parity - Phân đoạn với Chẵn lẻ)** là gì?",
                body: "Cấp độ RAID nào cung cấp hiệu suất đọc tốt hơn, và cấp độ nào cung cấp hiệu suất ghi tốt hơn (bỏ qua chi phí chẵn lẻ)?",
                solution: "**RAID 1** (Nhân bản) cung cấp tính dư thừa và **hiệu suất đọc tuyệt vời** (có thể đọc từ bất kỳ đĩa được nhân bản nào) nhưng yêu cầu 50% chi phí lưu trữ. **RAID 5** (Phân đoạn với Chẵn lẻ) cung cấp **hiệu quả lưu trữ** tốt hơn và hiệu suất đọc hợp lý, nhưng **hiệu suất ghi chậm hơn đáng kể** do chi phí tính toán và ghi khối chẵn lẻ cho mọi thao tác ghi." 
            }
        }
    },
    {
        _id: "rdbms-s-049",
        difficulty: "senior",
        tags: ["sql", "dml", "merge", "locking", "concurrency"],
        content: {
            en: {
                title: "When using the SQL **`MERGE`** statement for complex UPSERT logic, why is it critical to explicitly use **Table Hints** or appropriate **Isolation Levels** in high-concurrency scenarios?",
                body: "What specific transaction phenomena are you trying to mitigate with these controls?",
                solution: "It's critical to mitigate **Merge Race Conditions** (Non-Repeatable Reads/Serialization Failures). Without control, a transaction checking the `WHEN NOT MATCHED` condition can be interrupted by another transaction inserting the row, leading to an incorrect decision or constraint violation. Explicit hints (e.g., `SERIALIZABLE` or `HOLDLOCK`) force stronger locking, ensuring the row/range checked remains stable until the transaction commits."
            },
            jp: {
                title: "複雑なUPSERTロジックにSQLの**`MERGE`**ステートメントを使用する場合、高同時実行性のシナリオで**テーブルヒント**または適切な**隔離レベル**を明示的に使用することがなぜ重要ですか？",
                body: "これらの制御で軽減しようとしている特定のトランザクション現象は何ですか？",
                solution: "**マージ競合状態**（反復不可能な読み取り/シリアル化失敗）を軽減することが重要です。制御がないと、`WHEN NOT MATCHED`条件をチェックしているトランザクションが、別のトランザクションによる行の挿入によって中断され、誤った決定や制約違反につながる可能性があります。明示的なヒント（例: `SERIALIZABLE`や`HOLDLOCK`）は、より強力なロックを強制し、チェックされた行/範囲がトランザクションがコミットされるまで安定していることを保証します。"
            },
            vi: {
                title: "Khi sử dụng câu lệnh SQL **`MERGE`** cho logic UPSERT phức tạp, tại sao việc sử dụng rõ ràng **Table Hints** (Gợi ý Bảng) hoặc **Isolation Levels** (Mức độ Cô lập) thích hợp trong các kịch bản đồng thời cao lại rất quan trọng?",
                body: "Bạn đang cố gắng giảm thiểu hiện tượng giao dịch cụ thể nào bằng các kiểm soát này?",
                solution: "Điều quan trọng là phải giảm thiểu **Merge Race Conditions** (Điều kiện Tranh chấp Merge) (Non-Repeatable Reads/Serialization Failures). Nếu không có kiểm soát, một giao dịch kiểm tra điều kiện `WHEN NOT MATCHED` có thể bị gián đoạn bởi một giao dịch khác chèn hàng, dẫn đến quyết định không chính xác hoặc vi phạm ràng buộc. Các gợi ý rõ ràng (ví dụ: `SERIALIZABLE` hoặc `HOLDLOCK`) buộc phải khóa mạnh hơn, đảm bảo hàng/phạm vi được kiểm tra vẫn ổn định cho đến khi giao dịch commit."
            }
        }
    },
    {
        _id: "rdbms-s-050",
        difficulty: "senior",
        tags: ["database", "io", "system design", "connection pooling"],
        content: {
            en: {
                title: "In large-scale web applications, explain why **Connection Pooling** is a vital component for RDBMS efficiency and scalability, rather than opening and closing connections per request.",
                body: "What resource overhead does pooling eliminate, and what is its main function?",
                solution: "Opening a new database connection is an **expensive** process involving resource allocation, authentication, and network handshakes. Connection Pooling maintains a **reusable set of open connections** to the database. This eliminates the overhead of constantly opening and closing connections, dramatically reducing latency, saving CPU resources on both the application and database servers, and allowing the system to handle a much higher volume of requests." 
            },
            jp: {
                title: "大規模なWebアプリケーションにおいて、リクエストごとに接続を開閉するのではなく、**接続プール**がRDBMSの効率とスケーラビリティにとって不可欠なコンポーネントである理由を説明してください。",
                body: "プーリングが排除するリソースオーバーヘッドは何ですか、そしてその主な機能は何ですか？",
                solution: "新しいデータベース接続を開くことは、リソースの割り当て、認証、およびネットワークハンドシェイクを含む**高コスト**なプロセスです。接続プールは、データベースへの**再利用可能なオープン接続のセット**を維持します。これにより、接続を絶えず開閉するオーバーヘッドが排除され、レイテンシが劇的に短縮され、アプリケーションサーバーとデータベースサーバーの両方でCPUリソースが節約され、システムがはるかに大量のリクエストを処理できるようになります。" 
            },
            vi: {
                title: "Trong các ứng dụng web quy mô lớn, giải thích tại sao **Connection Pooling** (Gộp Kết nối) là một thành phần quan trọng đối với hiệu quả và khả năng mở rộng của RDBMS, thay vì mở và đóng kết nối cho mỗi yêu cầu.",
                body: "Gộp kết nối loại bỏ chi phí tài nguyên nào, và chức năng chính của nó là gì?",
                solution: "Mở một kết nối cơ sở dữ liệu mới là một quá trình **tốn kém** liên quan đến phân bổ tài nguyên, xác thực và bắt tay mạng. Connection Pooling duy trì một **tập hợp các kết nối mở có thể tái sử dụng** đến cơ sở dữ liệu. Điều này loại bỏ chi phí liên tục mở và đóng kết nối, giảm đáng kể độ trễ, tiết kiệm tài nguyên CPU trên cả máy chủ ứng dụng và cơ sở dữ liệu, và cho phép hệ thống xử lý khối lượng yêu cầu cao hơn nhiều." 
            }
        }
    }
];