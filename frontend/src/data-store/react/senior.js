export const reactSeniorQuestions = [
    {
        _id: "react-s-001",
        difficulty: "senior",
        tags: ["react", "concurrent mode", "architecture", "scheduling"],
        content: {
            en: {
                title: "Explain the core problem that React's Concurrent Mode solves.",
                body: "How does Concurrent Mode utilize time-slicing and interruptible rendering to keep the UI responsive?",
                solution: "Concurrent Mode makes rendering **interruptible**. It solves the problem of long, blocking renders that cause the UI to freeze (jank). By using **time-slicing**, React can pause rendering an expensive update to process an urgent user input (like a keystroke), ensuring the application remains responsive."
            },
            jp: {
                title: "Reactのコンカレントモードが解決するコアな問題を説明してください。",
                body: "コンカレントモードは、タイムスライシングと中断可能なレンダリングをどのように利用して、UIの応答性を維持しますか？",
                solution: "コンカレントモードはレンダリングを**中断可能**にします。これにより、UIをフリーズさせる長いブロッキングレンダリングの問題（ジャンク）を解決します。**タイムスライシング**を使用することで、Reactは高コストな更新のレンダリングを一時停止して、緊急のユーザー入力（キーストロークなど）を処理し、アプリケーションが応答性を維持できるようにします。"
            },
            vi: {
                title: "Giải thích vấn đề cốt lõi mà Concurrent Mode của React giải quyết.",
                body: "Concurrent Mode sử dụng time-slicing và interruptible rendering như thế nào để giữ cho UI phản hồi?",
                solution: "Concurrent Mode làm cho quá trình rendering có thể **bị gián đoạn**. Nó giải quyết vấn đề các lần render dài, chặn (blocking) gây ra hiện tượng UI bị đơ (jank). Bằng cách sử dụng **time-slicing**, React có thể tạm dừng render một bản cập nhật tốn kém để xử lý một đầu vào khẩn cấp của người dùng (như một lần gõ phím), đảm bảo ứng dụng vẫn phản hồi."
            }
        }
    },
    {
        _id: "react-s-002",
        difficulty: "senior",
        tags: ["react", "optimization", "usecallback", "closure"],
        content: {
            en: {
                title: "What is the primary use case for `useCallback` when optimizing a component tree?",
                body: "Explain how it interacts with the dependency array of a child component using `React.memo`.",
                solution: "`useCallback` is used to **memoize function definitions**, preventing them from being recreated on every render. When passed as a prop to a child component wrapped in `React.memo`, it prevents the child from re-rendering, since the function reference in the props remains stable."
            },
            jp: {
                title: "コンポーネントツリーを最適化する際、`useCallback`の主な使用例は何ですか？",
                body: "これは、`React.memo`を使用する子コンポーネントの依存配列とどのように連携しますか？",
                solution: "`useCallback`は、**関数定義をメモ化**し、レンダリングごとに再作成されるのを防ぐために使用されます。`React.memo`でラップされた子コンポーネントにpropsとして渡されると、props内の関数参照が安定しているため、子が再レンダリングされるのを防ぎます。"
            },
            vi: {
                title: "Trường hợp sử dụng chính của `useCallback` khi tối ưu hóa một component tree là gì?",
                body: "Giải thích cách nó tương tác với mảng dependency của một component con sử dụng `React.memo`.",
                solution: "`useCallback` được sử dụng để **memoize các định nghĩa hàm**, ngăn chúng không bị tạo lại trong mỗi lần render. Khi được truyền dưới dạng prop cho một component con được bọc trong `React.memo`, nó ngăn component con re-render, vì tham chiếu hàm trong props vẫn ổn định."
            }
        }
    },
    {
        _id: "react-s-003",
        difficulty: "senior",
        tags: ["react", "state management", "selector", "performance"],
        content: {
            en: {
                title: "In state management libraries (like Redux, Zustand), why is using a 'selector' crucial for performance?",
                body: "How does a selector prevent unnecessary component re-renders?",
                solution: "A selector allows a component to **subscribe only to the specific slices of state it needs**. If the entire state tree changes, but the selected slice remains referentially equal, the selector returns the old reference, preventing the component from re-rendering."
            },
            jp: {
                title: "状態管理ライブラリ（Redux、Zustandなど）において、「セレクター」の使用がパフォーマンスにとって重要であるのはなぜですか？",
                body: "セレクターは、不必要なコンポーネントの再レンダリングをどのように防ぎますか？",
                solution: "セレクターにより、コンポーネントは**必要な特定の状態スライスにのみサブスクライブ**できます。状態ツリー全体が変更されても、選択されたスライスが参照的に等しいままであれば、セレクターは古い参照を返し、コンポーネントが再レンダリングされるのを防ぎます。"
            },
            vi: {
                title: "Trong các thư viện quản lý state (như Redux, Zustand), tại sao việc sử dụng 'selector' lại quan trọng đối với hiệu suất?",
                body: "Một selector ngăn chặn re-render component không cần thiết như thế nào?",
                solution: "Một selector cho phép component **chỉ subscribe vào các phần (slice) state cụ thể mà nó cần**. Nếu toàn bộ cây state thay đổi, nhưng phần đã chọn vẫn bằng nhau về mặt tham chiếu, selector sẽ trả về tham chiếu cũ, ngăn component re-render."
            }
        }
    },
    {
        _id: "react-s-004",
        difficulty: "senior",
        tags: ["react", "error boundary", "getderivedstatefromerror", "limitation"],
        content: {
            en: {
                title: "What are the limitations of React Error Boundaries? Where do they NOT catch errors?",
                body: "Name two categories of errors that fall outside the scope of Error Boundaries.",
                solution: "Error Boundaries only catch errors in the rendering lifecycle. They do **NOT** catch: 1. **Asynchronous code** (e.g., `setTimeout`, `Promise.then/catch`). 2. **Event Handlers** (they must use `try/catch` manually). 3. Errors thrown inside the Error Boundary itself."
            },
            jp: {
                title: "Reactのエラー境界の制限は何ですか？エラーをキャッチしないのはどこですか？",
                body: "エラー境界の範囲外にあるエラーのカテゴリを2つ挙げてください。",
                solution: "エラー境界は、レンダリングのライフサイクル内のエラーのみをキャッチします。それらは**キャッチしない**のは: 1. **非同期コード**（例: `setTimeout`、`Promise.then/catch`）。 2. **イベントハンドラー**（手動で`try/catch`を使用する必要があります）。 3. エラー境界自体の中でスローされたエラー。"
            },
            vi: {
                title: "Những hạn chế của React Error Boundaries là gì? Chúng KHÔNG bắt lỗi ở đâu?",
                body: "Nêu tên hai loại lỗi nằm ngoài phạm vi của Error Boundaries.",
                solution: "Error Boundaries chỉ bắt các lỗi trong vòng đời render. Chúng **KHÔNG** bắt các lỗi: 1. **Mã bất đồng bộ** (ví dụ: `setTimeout`, `Promise.then/catch`). 2. **Event Handlers** (chúng phải sử dụng `try/catch` thủ công). 3. Các lỗi được ném ra bên trong chính Error Boundary."
            }
        }
    },
    {
        _id: "react-s-005",
        difficulty: "senior",
        tags: ["react", "hook", "usememo", "cost"],
        content: {
            en: {
                title: "Is it always a good idea to wrap every complex calculation in `useMemo` for performance?",
                body: "Explain the trade-off (the cost) associated with using `useMemo`.",
                solution: "No. **Memoization is not free**. `useMemo` itself adds overhead because React must store the previous result and run the comparison logic on dependencies during every render. If the calculation cost is lower than the memoization overhead, it harms performance."
            },
            jp: {
                title: "パフォーマンスのために、すべての複雑な計算を`useMemo`でラップするのは常に良い考えですか？",
                body: "`useMemo`を使用することに伴うトレードオフ（コスト）を説明してください。",
                solution: "いいえ、**メモ化は無料ではありません**。`useMemo`自体は、Reactが以前の結果を保存し、レンダリングごとに依存関係に対して比較ロジックを実行する必要があるため、オーバーヘッドを追加します。計算コストがメモ化のオーバーヘッドよりも低い場合、パフォーマンスを損ないます。"
            },
            vi: {
                title: "Liệu việc bọc mọi phép tính phức tạp trong `useMemo` để tối ưu hiệu suất có phải luôn là ý tưởng hay không?",
                body: "Giải thích sự đánh đổi (chi phí) liên quan đến việc sử dụng `useMemo`.",
                solution: "Không. **Memoization không miễn phí**. Bản thân `useMemo` thêm chi phí overhead vì React phải lưu trữ kết quả trước đó và chạy logic so sánh trên các dependencies trong mỗi lần render. Nếu chi phí tính toán thấp hơn chi phí overhead của memoization, nó sẽ gây hại cho hiệu suất."
            }
        }
    },
    {
        _id: "react-s-006",
        difficulty: "senior",
        tags: ["react", "testing", "msw", "e2e"],
        content: {
            en: {
                title: "What is the purpose of using a tool like Mock Service Worker (MSW) in React testing?",
                body: "How does it improve upon traditional mocking of fetch or axios in unit tests?",
                solution: "MSW intercepts network requests **at the service worker level** (browser) or Node.js level. It allows tests (unit/integration) to run against a real API layer, mocking the *response* based on the *request*, rather than mocking the entire `fetch` function, making tests more realistic and robust."
            },
            jp: {
                title: "ReactテストでMock Service Worker (MSW)のようなツールを使用する目的は何ですか？",
                body: "ユニットテストでfetchやaxiosを従来のモック化する方法と比較して、どのように改善されますか？",
                solution: "MSWは、ネットワークリクエストを**サービスワーカーレベル**（ブラウザ）またはNode.jsレベルで傍受します。これにより、テスト（ユニット/インテグレーション）を実際のAPIレイヤーに対して実行でき、`fetch`関数全体をモック化するのではなく、**リクエスト**に基づいて**応答**をモック化するため、テストがより現実的で堅牢になります。"
            },
            vi: {
                title: "Mục đích của việc sử dụng một công cụ như Mock Service Worker (MSW) trong React testing là gì?",
                body: "Nó cải thiện như thế nào so với việc mocking truyền thống `fetch` hoặc `axios` trong các bài unit test?",
                solution: "MSW chặn các yêu cầu mạng **ở cấp độ service worker** (trình duyệt) hoặc cấp độ Node.js. Nó cho phép các bài test (unit/integration) chạy dựa trên một lớp API thực, mocking *phản hồi* dựa trên *yêu cầu*, thay vì mocking toàn bộ hàm `fetch`, làm cho các bài test trở nên thực tế và mạnh mẽ hơn."
            }
        }
    },
    {
        _id: "react-s-007",
        difficulty: "senior",
        tags: ["react", "hook", "usecontext", "architecture"],
        content: {
            en: {
                title: "In large applications, why is it considered a bad practice to pass setter functions (dispatch) and state data through a single context?",
                body: "How does the 'Split Context' pattern solve this issue?",
                solution: "A single context causes all consumer components to re-render whenever *any* part of the context value changes. **Split Context** creates two contexts: one for **state/value** and one for **dispatch/actions**. Components consuming only dispatch can use `useContext(DispatchContext)` and avoid re-rendering when the state changes."
            },
            jp: {
                title: "大規模なアプリケーションでは、セッター関数（dispatch）と状態データを単一のコンテキストを介して渡すことが悪い習慣と見なされるのはなぜですか？",
                body: "「コンテキストの分割」（Split Context）パターンはこの問題をどのように解決しますか？",
                solution: "単一のコンテキストは、コンテキスト値の*いずれかの*部分が変更されるたびに、すべてのコンシューマーコンポーネントを再レンダリングさせます。**コンテキストの分割**は、**状態/値**用と**ディスパッチ/アクション**用の2つのコンテキストを作成します。ディスパッチのみを消費するコンポーネントは`useContext(DispatchContext)`を使用でき、状態が変更されたときに再レンダリングを回避できます。"
            },
            vi: {
                title: "Trong các ứng dụng lớn, tại sao việc truyền các hàm setter (dispatch) và dữ liệu state qua một context duy nhất lại bị coi là một anti-pattern?",
                body: "Pattern 'Split Context' giải quyết vấn đề này như thế nào?",
                solution: "Một context duy nhất khiến tất cả các component tiêu thụ phải re-render bất cứ khi nào *bất kỳ* phần nào của giá trị context thay đổi. **Split Context** tạo ra hai context: một cho **state/value** và một cho **dispatch/actions**. Các component chỉ tiêu thụ dispatch có thể sử dụng `useContext(DispatchContext)` và tránh re-render khi state thay đổi."
            }
        }
    },
    {
        _id: "react-s-008",
        difficulty: "senior",
        tags: ["react", "component", "render props", "type"],
        content: {
            en: {
                title: "Explain the difference between a Render Prop and the `children` prop being used as a function.",
                body: "Are there any functional differences, or is it mostly a matter of convention?",
                solution: "Functionally, they are identical: both pass a function as a prop that the component calls to render content. It is mostly a **convention**. Using `children` as a function is often preferred when the component's sole purpose is controlling the rendering logic (Inversion of Control)."
            },
            jp: {
                title: "Render Propと、関数として使用される`children` propsの違いを説明してください。",
                body: "機能的な違いはありますか、それともほとんど慣例の問題ですか？",
                solution: "機能的には、それらは同じです。どちらも、コンポーネントがコンテンツをレンダリングするために呼び出す関数をpropsとして渡します。これはほとんど**慣例**の問題です。コンポーネントの唯一の目的がレンダリングロジックを制御することである場合（制御の反転）、関数として`children`を使用することが好まれます。"
            },
            vi: {
                title: "Giải thích sự khác biệt giữa Render Prop và prop `children` được sử dụng như một hàm.",
                body: "Có bất kỳ sự khác biệt chức năng nào không, hay chủ yếu là vấn đề quy ước?",
                solution: "Về mặt chức năng, chúng giống hệt nhau: cả hai đều truyền một hàm dưới dạng prop mà component gọi để render nội dung. Nó chủ yếu là một **quy ước**. Sử dụng `children` như một hàm thường được ưu tiên khi mục đích duy nhất của component là kiểm soát logic render (Inversion of Control)."
            }
        }
    },
    {
        _id: "react-s-009",
        difficulty: "senior",
        tags: ["react", "hook", "useeffect", "sync"],
        content: {
            en: {
                title: "Why does React provide the `useLayoutEffect` hook, and when is it necessary over `useEffect`?",
                body: "What is the crucial difference in when each hook's callback runs?",
                solution: "`useLayoutEffect` is for effects that must run **synchronously after the DOM mutations** but *before* the browser paints the screen. It is necessary when you need to read layout from the DOM (e.g., measuring an element) and re-render synchronously based on that measurement to avoid a visual flicker."
            },
            jp: {
                title: "Reactが`useLayoutEffect`フックを提供する理由と、`useEffect`よりもいつ必要になりますか？",
                body: "各フックのコールバックが実行されるタイミングの決定的な違いは何ですか？",
                solution: "`useLayoutEffect`は、DOMの変更**後**、ブラウザが画面をペイントする**前**に**同期的に**実行する必要があるエフェクト用です。DOMからレイアウトを読み取り（要素の測定など）、その測定に基づいて同期的に再レンダリングして視覚的なちらつきを防ぐ必要がある場合に必要です。"
            },
            vi: {
                title: "Tại sao React cung cấp hook `useLayoutEffect`, và khi nào nó cần thiết hơn `useEffect`?",
                body: "Sự khác biệt quan trọng về thời điểm callback của mỗi hook chạy là gì?",
                solution: "`useLayoutEffect` dành cho các effect phải chạy **đồng bộ sau các đột biến DOM** nhưng *trước khi* trình duyệt vẽ màn hình. Nó cần thiết khi bạn cần đọc layout từ DOM (ví dụ: đo một phần tử) và re-render đồng bộ dựa trên phép đo đó để tránh hiện tượng nhấp nháy thị giác (visual flicker)."
            }
        }
    },
    {
        _id: "react-s-010",
        difficulty: "senior",
        tags: ["react", "suspense", "data fetch", "library"],
        content: {
            en: {
                title: "How does data fetching with Suspense (e.g., using React Query or SWR) change the way we handle loading states?",
                body: "What is the term for 'throwing a Promise' in the render phase?",
                solution: "It allows components to **declare their data dependencies during render**. Instead of managing `isLoading` state inside every component, a component **'throws a Promise'** (the fetch request). The nearest `<Suspense>` boundary catches it and shows a fallback UI automatically, centralizing loading state handling."
            },
            jp: {
                title: "Suspenseを使用したデータ取得（例: React QueryやSWRを使用）は、ローディング状態の処理方法をどのように変えますか？",
                body: "レンダリングフェーズで「Promiseをスローする」という用語は何ですか？",
                solution: "これにより、コンポーネントは**レンダリング中にデータ依存関係を宣言**できます。すべてのコンポーネント内で`isLoading`状態を管理する代わりに、コンポーネントは（フェッチリクエストの）**「Promiseをスロー」**します。最も近い`<Suspense>`境界がそれをキャッチし、フォールバックUIを自動的に表示し、ローディング状態の処理を一元化します。"
            },
            vi: {
                title: "Việc tìm nạp dữ liệu với Suspense (ví dụ: sử dụng React Query hoặc SWR) thay đổi cách chúng ta xử lý trạng thái loading như thế nào?",
                body: "Thuật ngữ 'throwing a Promise' trong giai đoạn render là gì?",
                solution: "Nó cho phép các component **khai báo các dependencies dữ liệu của chúng trong quá trình render**. Thay vì quản lý state `isLoading` bên trong mỗi component, một component **'ném ra một Promise'** (yêu cầu tìm nạp). Ranh giới `<Suspense>` gần nhất bắt nó và hiển thị một fallback UI tự động, tập trung hóa việc xử lý trạng thái loading."
            }
        }
    },
    {
        _id: "react-s-011",
        difficulty: "senior",
        tags: ["react", "typescript", "hoc", "typing"],
        content: {
            en: {
                title: "How do you correctly type a Higher-Order Component (HOC) in TypeScript to ensure it preserves the wrapped component's props?",
                body: "What utility types are commonly used to handle the prop exclusion/intersection?",
                solution: "The HOC should use the `Omit` or `Exclude` utility types to define its own injected props, and then intersect the original component's props with the HOC's props. The resulting type ensures the original props, minus the injected ones, are required by the wrapper."
            },
            jp: {
                title: "ラップされたコンポーネントのpropsが保持されるように、Higher-Order Component (HOC) をTypeScriptで正しく型付けするにはどうすればよいですか？",
                body: "propsの除外/交差を処理するために一般的に使用されるユーティリティ型は何ですか？",
                solution: "HOCは、`Omit`または`Exclude`ユーティリティ型を使用して独自の注入されたpropsを定義し、元のコンポーネントのpropsをHOCのpropsと交差させる必要があります。結果の型は、注入されたpropsを差し引いた元のpropsがラッパーによって要求されることを保証します。"
            },
            vi: {
                title: "Làm thế nào bạn gán kiểu đúng cho một Higher-Order Component (HOC) trong TypeScript để đảm bảo nó giữ lại các prop của component được bọc?",
                body: "Các kiểu tiện ích nào thường được sử dụng để xử lý việc loại trừ/giao nhau của prop?",
                solution: "HOC nên sử dụng các kiểu tiện ích `Omit` hoặc `Exclude` để định nghĩa các prop được inject của riêng nó, sau đó giao các prop của component gốc với các prop của HOC. Kiểu kết quả đảm bảo các prop gốc, trừ đi các prop được inject, là bắt buộc đối với wrapper."
            }
        }
    },
    {
        _id: "react-s-012",
        difficulty: "senior",
        tags: ["react", "a11y", "focus management", "trap"],
        content: {
            en: {
                title: "In the context of accessibility, what is 'Focus Trapping', and why is it essential for modal dialogs?",
                body: "What happens if focus trapping is not implemented correctly in a modal?",
                solution: "Focus trapping ensures that keyboard focus remains **inside a specific UI element** (the modal) until it is closed. It's essential because it prevents users relying on keyboards/screen readers from accidentally navigating to the background content, which provides a broken experience and violates a11y standards."
            },
            jp: {
                title: "アクセシビリティの文脈で、「フォーカストラップ」（Focus Trapping）とは何ですか、そしてモーダルダイアログにとってなぜ不可欠なのですか？",
                body: "モーダルでフォーカストラップが正しく実装されていない場合、何が起こりますか？",
                solution: "フォーカストラップは、キーボードのフォーカスが閉じられるまで**特定のUI要素内**（モーダル）に留まることを保証します。キーボード/スクリーンリーダーに頼っているユーザーが誤って背景のコンテンツに移動するのを防ぎ、壊れたエクスペリエンスを提供し、a11y標準に違反するため、不可欠です。"
            },
            vi: {
                title: "Trong bối cảnh khả năng tiếp cận, 'Focus Trapping' là gì, và tại sao nó cần thiết cho các modal dialog?",
                body: "Điều gì xảy ra nếu focus trapping không được triển khai đúng cách trong một modal?",
                solution: "Focus trapping đảm bảo rằng focus của bàn phím vẫn còn **bên trong một phần tử UI cụ thể** (modal) cho đến khi nó được đóng. Nó cần thiết vì nó ngăn người dùng dựa vào bàn phím/trình đọc màn hình vô tình điều hướng đến nội dung nền, điều này mang lại trải nghiệm bị hỏng và vi phạm các tiêu chuẩn a11y."
            }
        }
    },
    {
        _id: "react-s-013",
        difficulty: "senior",
        tags: ["react", "virtual dom", "reconciliation", "fiber"],
        content: {
            en: {
                title: "How does the Fiber architecture fundamentally change React's reconciliation model compared to the previous stack reconciler?",
                body: "What key feature of Fiber enables concurrent and interruptible work?",
                solution: "Fiber allows React to break the reconciliation work into **small, manageable units (Fibers)** and pause/resume work. The previous stack model processed the entire component tree synchronously. Fiber enables the work to be prioritized, interrupted, and scheduled across multiple frames (time-slicing)."
            },
            jp: {
                title: "Fiberアーキテクチャは、以前のスタックリコンサイラーと比較して、Reactの調整モデルをどのように根本的に変えましたか？",
                body: "Fiberのどの主要な機能が、コンカレントで中断可能な作業を可能にしますか？",
                solution: "Fiberにより、Reactは調整作業を**小さく、管理しやすい単位（Fibers）**に分割し、作業を一時停止/再開できます。以前のスタックモデルは、コンポーネントツリー全体を同期的に処理していました。Fiberは、作業に優先順位を付け、中断し、複数のフレーム（タイムスライシング）にわたってスケジュールできるようにします。"
            },
            vi: {
                title: "Kiến trúc Fiber thay đổi mô hình reconciliation của React như thế nào so với reconciler stack trước đó?",
                body: "Tính năng chính nào của Fiber cho phép công việc đồng thời (concurrent) và có thể bị gián đoạn?",
                solution: "Fiber cho phép React chia công việc reconciliation thành **các đơn vị nhỏ, dễ quản lý (Fibers)** và tạm dừng/tiếp tục công việc. Mô hình stack trước đó xử lý toàn bộ cây component một cách đồng bộ. Fiber cho phép công việc được ưu tiên, bị gián đoạn và được lên lịch trên nhiều frame (time-slicing)."
            }
        }
    },
    {
        _id: "react-s-014",
        difficulty: "senior",
        tags: ["react", "performance", "keys", "list"],
        content: {
            en: {
                title: "When rendering a dynamic list, why is using the array `index` as the `key` prop an anti-pattern when the list order can change?",
                body: "What bug does an unstable key cause during reconciliation?",
                solution: "If the list items are sorted, added, or removed, using the index as the key causes React to mistakenly believe that the component's identity remains the same (because the index stays the same for that slot). This results in **incorrect state or prop values** being associated with the wrong visual element, leading to UI bugs."
            },
            jp: {
                title: "動的なリストをレンダリングする際、リストの順序が変更される可能性があるのに、配列の`index`を`key` propsとして使用することがアンチパターンであるのはなぜですか？",
                body: "不安定なキーは、調整中にどのようなバグを引き起こしますか？",
                solution: "リストアイテムがソート、追加、または削除された場合、indexをキーとして使用すると、ReactはコンポーネントのIDが同じままであると誤って信じます（そのスロットのindexは同じままであるため）。これにより、**正しくない状態またはpropsの値**が間違った視覚要素に関連付けられ、UIバグにつながります。"
            },
            vi: {
                title: "Khi render một danh sách động, tại sao việc sử dụng `index` của mảng làm prop `key` lại là một anti-pattern khi thứ tự danh sách có thể thay đổi?",
                body: "Key không ổn định gây ra lỗi gì trong quá trình reconciliation?",
                solution: "Nếu các mục trong danh sách được sắp xếp, thêm hoặc xóa, việc sử dụng index làm key khiến React nhầm lẫn rằng danh tính của component vẫn giữ nguyên (vì index vẫn giữ nguyên cho vị trí đó). Điều này dẫn đến **state hoặc giá trị prop không chính xác** được liên kết với phần tử trực quan sai, gây ra lỗi UI."
            }
        }
    },
    {
        _id: "react-s-015",
        difficulty: "senior",
        tags: ["react", "ssr", "hydration", "nextjs"],
        content: {
            en: {
                title: "In Server-Side Rendering (SSR), what is the 'Hydration' process?",
                body: "What is a 'Hydration Mismatch' and why is it problematic?",
                solution: "Hydration is the process where React attaches the client-side JavaScript to the pre-rendered HTML (from the server) to make it interactive. A **Mismatch** occurs if the server-rendered HTML structure is different from the structure generated by the client-side React code. This causes React to discard the server-rendered tree and re-render from scratch, severely impacting performance and SEO."
            },
            jp: {
                title: "サーバーサイドレンダリング (SSR) における「ハイドレーション」（Hydration）プロセスとは何ですか？",
                body: "「ハイドレーションの不一致」（Hydration Mismatch）とは何ですか、そしてなぜ問題になるのですか？",
                solution: "ハイドレーションは、Reactがクライアント側のJavaScriptを（サーバーからの）事前レンダリングされたHTMLにアタッチして、インタラクティブにするプロセスです。**不一致**は、サーバーでレンダリングされたHTML構造がクライアント側のReactコードによって生成された構造と異なる場合に発生します。これにより、Reactはサーバーでレンダリングされたツリーを破棄して最初から再レンダリングするため、パフォーマンスとSEOに深刻な影響を与えます。"
            },
            vi: {
                title: "Trong Server-Side Rendering (SSR), quá trình 'Hydration' là gì?",
                body: "'Hydration Mismatch' là gì và tại sao nó lại có vấn đề?",
                solution: "Hydration là quá trình React đính kèm JavaScript phía client vào HTML đã được pre-rendered (từ server) để làm cho nó tương tác. **Mismatch** xảy ra nếu cấu trúc HTML được render trên server khác với cấu trúc được tạo bởi mã React phía client. Điều này khiến React loại bỏ cây đã được render trên server và re-render lại từ đầu, ảnh hưởng nghiêm trọng đến hiệu suất và SEO."
            }
        }
    },
    {
        _id: "react-s-016",
        difficulty: "senior",
        tags: ["react", "hook", "useeffect", "dependency"],
        content: {
            en: {
                title: "When should you use `useRef` to store a value used inside `useEffect` instead of including it in the dependency array?",
                body: "Explain the scenario where the value is used but should NOT trigger a re-run of the effect.",
                solution: "Use `useRef` when the value is required for the effect's logic (e.g., a function, or a mutable state value), but changes to that value **should not cause the effect to re-run**. This is typically used for mutable objects like timers, subscription handles, or certain configuration objects."
            },
            jp: {
                title: "依存配列に含める代わりに、`useEffect`内で使用される値を格納するために`useRef`を使用すべきなのはいつですか？",
                body: "値が使用されているが、エフェクトの再実行を**トリガーすべきではない**シナリオを説明してください。",
                solution: "値がエフェクトのロジックに必要であるが（例: 関数、または変更可能な状態値）、その値の変更が**エフェクトの再実行を引き起こすべきではない**場合に`useRef`を使用します。これは通常、タイマー、サブスクリプションハンドル、または特定の構成オブジェクトなどの変更可能なオブジェクトに使用されます。"
            },
            vi: {
                title: "Khi nào bạn nên sử dụng `useRef` để lưu trữ một giá trị được sử dụng bên trong `useEffect` thay vì đưa nó vào mảng dependency?",
                body: "Giải thích kịch bản mà giá trị được sử dụng nhưng **KHÔNG** nên kích hoạt việc chạy lại effect.",
                solution: "Sử dụng `useRef` khi giá trị là cần thiết cho logic của effect (ví dụ: một hàm, hoặc một giá trị state có thể thay đổi), nhưng những thay đổi đối với giá trị đó **không nên khiến effect chạy lại**. Điều này thường được sử dụng cho các đối tượng có thể thay đổi như timer, handle subscription, hoặc các đối tượng cấu hình nhất định."
            }
        }
    },
    {
        _id: "react-s-017",
        difficulty: "senior",
        tags: ["react", "data fetch", "cache", "deduplication"],
        content: {
            en: {
                title: "Beyond just showing loading states, name two crucial architectural benefits of client-side data fetching libraries (like React Query/SWR).",
                body: "How do they handle duplicate requests for the same data?",
                solution: "1. **Automatic Caching and Revalidation (Stale-While-Revalidate)**: They manage the cache, showing stale data quickly while fetching fresh data in the background. 2. **Request Deduplication**: They prevent multiple identical requests for the same data from being sent to the server simultaneously, reducing load and improving speed."
            },
            jp: {
                title: "ローディング状態を表示するだけでなく、クライアント側のデータ取得ライブラリ（React Query/SWRなど）の2つの重要なアーキテクチャ上の利点を挙げてください。",
                body: "同じデータに対する重複したリクエストをどのように処理しますか？",
                solution: "1. **自動キャッシュと再検証（Stale-While-Revalidate）**: キャッシュを管理し、新鮮なデータをバックグラウンドで取得しながら古いデータをすばやく表示します。 2. **リクエストの重複排除**: 同じデータに対する複数の同一のリクエストがサーバーに同時に送信されるのを防ぎ、負荷を軽減し、速度を向上させます。"
            },
            vi: {
                title: "Ngoài việc chỉ hiển thị trạng thái loading, hãy nêu hai lợi ích kiến trúc quan trọng của các thư viện tìm nạp dữ liệu phía client (như React Query/SWR).",
                body: "Chúng xử lý các yêu cầu trùng lặp cho cùng một dữ liệu như thế nào?",
                solution: "1. **Tự động Caching và Revalidation (Stale-While-Revalidate)**: Chúng quản lý cache, hiển thị dữ liệu cũ nhanh chóng trong khi tìm nạp dữ liệu mới trong nền. 2. **Request Deduplication**: Chúng ngăn nhiều yêu cầu giống hệt nhau cho cùng một dữ liệu được gửi đến server cùng một lúc, giảm tải và cải thiện tốc độ."
            }
        }
    },
    {
        _id: "react-s-018",
        difficulty: "senior",
        tags: ["react", "portals", "a11y", "dom"],
        content: {
            en: {
                title: "When using a React Portal for a component like a tooltip or dropdown, what is the trade-off concerning CSS positioning and context?",
                body: "How does the Portal's physical DOM location affect its styling relative to the component?",
                solution: "The component's children are rendered into a different location in the DOM tree. This is an advantage for styling (avoiding `overflow: hidden` issues) but a disadvantage because the Portal element **loses the CSS context** (like inherited fonts or theme variables) and cannot be positioned relative to its parent *component* using standard CSS relative/absolute positioning."
            },
            jp: {
                title: "ツールチップやドロップダウンのようなコンポーネントにReact Portalを使用する場合、CSSの配置とコンテキストに関してトレードオフは何ですか？",
                body: "Portalの物理的なDOMの位置は、コンポーネントに対するスタイリングにどのように影響しますか？",
                solution: "コンポーネントの子は、DOMツリー内の異なる場所にレンダリングされます。これはスタイリングの利点（`overflow: hidden`の問題を回避）ですが、Portal要素が（継承されたフォントやテーマ変数などの）**CSSコンテキストを失う**ため、標準のCSS relative/absolute配置を使用して親*コンポーネント*に対して相対的に配置できないという欠点があります。"
            },
            vi: {
                title: "Khi sử dụng React Portal cho một component như tooltip hoặc dropdown, sự đánh đổi liên quan đến định vị CSS và context là gì?",
                body: "Vị trí DOM vật lý của Portal ảnh hưởng đến styling của nó so với component như thế nào?",
                solution: "Các phần tử con của component được render vào một vị trí khác trong cây DOM. Đây là một lợi thế cho styling (tránh các vấn đề `overflow: hidden`) nhưng là một bất lợi vì phần tử Portal **mất ngữ cảnh CSS** (như phông chữ kế thừa hoặc biến theme) và không thể được định vị tương đối với *component* cha của nó bằng cách sử dụng định vị relative/absolute CSS tiêu chuẩn."
            }
        }
    },
    {
        _id: "react-s-019",
        difficulty: "senior",
        tags: ["react", "typescript", "children", "typing"],
        content: {
            en: {
                title: "In TypeScript, what is the preferred way to type the `children` prop in a functional component?",
                body: "What is the recommended React utility type, and why is `React.FC` discouraged?",
                solution: "The preferred way is to explicitly define `children: React.ReactNode` in the props interface. `React.FC` is discouraged because it implicitly makes `children` optional, which can hide bugs, and adds unnecessary generics/complexity."
            },
            jp: {
                title: "TypeScriptでは、関数コンポーネントで`children` propsを型付けする好ましい方法は何ですか？",
                body: "推奨されるReactユーティリティ型は何ですか、そして`React.FC`が推奨されないのはなぜですか？",
                solution: "好ましい方法は、propsインターフェースで`children: React.ReactNode`を明示的に定義することです。`React.FC`は、`children`を暗黙的にオプションにし、バグを隠す可能性があり、不必要なジェネリック/複雑さを追加するため、推奨されません。"
            },
            vi: {
                title: "Trong TypeScript, cách ưu tiên để gán kiểu cho prop `children` trong một functional component là gì?",
                body: "Kiểu tiện ích React được khuyến nghị là gì, và tại sao `React.FC` lại không được khuyến khích?",
                solution: "Cách ưu tiên là định nghĩa rõ ràng `children: React.ReactNode` trong interface props. `React.FC` không được khuyến khích vì nó ngầm định làm cho `children` là tùy chọn, điều này có thể che giấu lỗi, và thêm vào các generic/sự phức tạp không cần thiết."
            }
        }
    },
    {
        _id: "react-s-020",
        difficulty: "senior",
        tags: ["react", "component", "design", "container", "presentational"],
        content: {
            en: {
                title: "Describe the 'Container/Presentational' component pattern (or Smart/Dumb pattern).",
                body: "What is the primary role of the Presentational (Dumb) component in this pattern?",
                solution: "This pattern separates concerns: **Container (Smart)** components handle logic, data fetching, and state management (how things work). **Presentational (Dumb)** components receive data and callbacks via props and focus solely on rendering (how things look), making them reusable and easily testable."
            },
            jp: {
                title: "「コンテナー/プレゼンテーション」（Container/Presentational）コンポーネントパターン（またはSmart/Dumbパターン）を説明してください。",
                body: "このパターンにおけるプレゼンテーション（Dumb）コンポーネントの主な役割は何ですか？",
                solution: "このパターンは関心を分離します:**コンテナー（Smart）**コンポーネントはロジック、データ取得、状態管理（どのように機能するか）を処理します。**プレゼンテーション（Dumb）**コンポーネントは、propsを介してデータとコールバックを受け取り、レンダリング（どのように見えるか）のみに焦点を当て、再利用可能でテストを容易にします。"
            },
            vi: {
                title: "Mô tả pattern component 'Container/Presentational' (hoặc Smart/Dumb pattern).",
                body: "Vai trò chính của component Presentational (Dumb) trong pattern này là gì?",
                solution: "Pattern này tách biệt các mối quan tâm: component **Container (Smart)** xử lý logic, tìm nạp dữ liệu và quản lý state (cách mọi thứ hoạt động). component **Presentational (Dumb)** nhận dữ liệu và callback thông qua props và chỉ tập trung vào việc render (cách mọi thứ trông như thế nào), làm cho chúng có thể tái sử dụng và dễ dàng kiểm thử."
            }
        }
    },
    {
        _id: "react-s-021",
        difficulty: "senior",
        tags: ["react", "hook", "usereducer", "optimization"],
        content: {
            en: {
                title: "How can `useReducer` be used to optimize a component that receives many unrelated boolean props, each managed by `useState`?",
                body: "What is the key benefit of combining state updates under one dispatch function?",
                solution: "Combining the boolean state into a single object managed by `useReducer` allows the parent to pass only a single `dispatch` function down. Since functions are referentially stable, this stabilizes props, preventing unnecessary re-renders in optimized child components that only need the dispatch function."
            },
            jp: {
                title: "それぞれが`useState`によって管理されている多くの無関係なブール値propsを受け取るコンポーネントを最適化するために、`useReducer`をどのように使用できますか？",
                body: "単一のディスパッチ関数の下で状態の更新を結合する主な利点は何ですか？",
                solution: "ブール値の状態を`useReducer`によって管理される単一のオブジェクトに結合すると、親は単一の`dispatch`関数のみを渡すことができます。関数は参照的に安定しているため、これによりpropsが安定し、ディスパッチ関数のみを必要とする最適化された子コンポーネントでの不必要な再レンダリングを防ぎます。"
            },
            vi: {
                title: "Làm thế nào có thể sử dụng `useReducer` để tối ưu hóa một component nhận nhiều prop boolean không liên quan, mỗi prop được quản lý bằng `useState`?",
                body: "Lợi ích chính của việc kết hợp các cập nhật state dưới một hàm dispatch duy nhất là gì?",
                solution: "Việc kết hợp trạng thái boolean thành một đối tượng duy nhất được quản lý bởi `useReducer` cho phép component cha chỉ truyền xuống một hàm `dispatch` duy nhất. Vì các hàm ổn định về mặt tham chiếu, điều này làm ổn định props, ngăn chặn re-render không cần thiết trong các component con đã được tối ưu hóa chỉ cần hàm dispatch."
            }
        }
    },
    {
        _id: "react-s-022",
        difficulty: "senior",
        tags: ["react", "testing", "async", "act"],
        content: {
            en: {
                title: "In RTL, why is the `act()` wrapper necessary when testing state updates, especially with asynchronous code?",
                body: "What warning does React issue if `act()` is omitted around state changes?",
                solution: "`act()` ensures that all updates related to a simulated user action (including data fetching and subsequent state changes) are processed and applied to the DOM **before** the test asserts the final outcome. Omitting it leads to a warning: 'An update was not wrapped in `act(...)`'."
            },
            jp: {
                title: "RTLで、特に非同期コードで状態の更新をテストする際に、`act()`ラッパーが必要なのはなぜですか？",
                body: "状態の変更の周りで`act()`が省略された場合、Reactはどのような警告を発しますか？",
                solution: "`act()`は、シミュレートされたユーザーアクションに関連するすべての更新（データ取得とその後の状態変更を含む）が、テストが最終的な結果をアサートする**前**に処理され、DOMに適用されることを保証します。それを省略すると、「An update was not wrapped in `act(...)`」という警告につながります。"
            },
            vi: {
                title: "Trong RTL, tại sao wrapper `act()` lại cần thiết khi kiểm thử các cập nhật state, đặc biệt là với mã bất đồng bộ?",
                body: "React đưa ra cảnh báo gì nếu `act()` bị bỏ qua xung quanh các thay đổi state?",
                solution: "`act()` đảm bảo rằng tất cả các cập nhật liên quan đến một hành động người dùng mô phỏng (bao gồm tìm nạp dữ liệu và các thay đổi state sau đó) được xử lý và áp dụng cho DOM **trước khi** bài test xác nhận kết quả cuối cùng. Việc bỏ qua nó dẫn đến cảnh báo: 'An update was not wrapped in `act(...)`'."
            }
        }
    },
    {
        _id: "react-s-023",
        difficulty: "senior",
        tags: ["react", "hook", "usestate", "functional update"],
        content: {
            en: {
                title: "Why should you never rely on the immediate value of state after calling a setter function (e.g., `setState(value)`)?",
                body: "What does React guarantee about state updates?",
                solution: "State updates in React are **asynchronous and batched**. React does not guarantee that the value will be updated immediately. The setter only *schedules* the update. You must use the functional update form (`setCount(prev => prev + 1)`) or a subsequent `useEffect` to reliably access the updated state value."
            },
            jp: {
                title: "セッター関数（例: `setState(value)`）を呼び出した後、状態の即時の値に頼るべきではないのはなぜですか？",
                body: "状態の更新についてReactが保証することは何ですか？",
                solution: "Reactの状態更新は**非同期でバッチ処理**されます。Reactは、値がすぐに更新されることを保証しません。セッターは更新を*スケジュール*するだけです。更新された状態の値に確実にアクセスするには、関数更新形式（`setCount(prev => prev + 1)`）または後続の`useEffect`を使用する必要があります。"
            },
            vi: {
                title: "Tại sao bạn không bao giờ nên dựa vào giá trị tức thời của state sau khi gọi hàm setter (ví dụ: `setState(value)`)?",
                body: "React đảm bảo điều gì về các cập nhật state?",
                solution: "Các cập nhật state trong React là **bất đồng bộ và được gom nhóm (batched)**. React không đảm bảo rằng giá trị sẽ được cập nhật ngay lập tức. Hàm setter chỉ *lên lịch* cho việc cập nhật. Bạn phải sử dụng dạng functional update (`setCount(prev => prev + 1)`) hoặc một `useEffect` sau đó để truy cập một cách đáng tin cậy vào giá trị state đã được cập nhật."
            }
        }
    },
    {
        _id: "react-s-024",
        difficulty: "senior",
        tags: ["react", "typescript", "props", "type inference"],
        content: {
            en: {
                title: "When defining component props in TypeScript, how can you extract the Props type from a component already defined using `React.FC` or a function?",
                body: "What is the specific utility type needed to achieve this type inference?",
                solution: "Use the `React.ComponentProps<T>` utility type, where `T` is the component reference. This allows you to infer the required props type for wrapping or extending the component, promoting type safety and reducing duplication."
            },
            jp: {
                title: "TypeScriptでコンポーネントのpropsを定義する際、`React.FC`または関数を使用してすでに定義されているコンポーネントからProps型を抽出するにはどうすればよいですか？",
                body: "この型の推論を達成するために必要な特定のユーティリティ型は何ですか？",
                solution: "`React.ComponentProps<T>`ユーティリティ型を使用します。ここで`T`はコンポーネント参照です。これにより、コンポーネントをラップまたは拡張するために必要なprops型を推論でき、型安全性を促進し、重複を減らすことができます。"
            },
            vi: {
                title: "Khi định nghĩa component props trong TypeScript, làm thế nào bạn có thể trích xuất kiểu Props từ một component đã được định nghĩa bằng `React.FC` hoặc một hàm?",
                body: "Kiểu tiện ích cụ thể nào cần thiết để đạt được suy luận kiểu này?",
                solution: "Sử dụng kiểu tiện ích `React.ComponentProps<T>`, trong đó `T` là tham chiếu component. Điều này cho phép bạn suy luận kiểu props cần thiết để bọc hoặc mở rộng component, thúc đẩy an toàn kiểu và giảm sự trùng lặp."
            }
        }
    },
    {
        _id: "react-s-025",
        difficulty: "senior",
        tags: ["react", "hook", "custom hook", "pattern"],
        content: {
            en: {
                title: "Describe the 'Hook Composition' pattern in React.",
                body: "How does it improve upon the older HOC or Render Props patterns?",
                solution: "Hook Composition is the practice of combining multiple custom hooks to share non-visual, stateful logic between components. It improves upon HOCs and Render Props by avoiding **'Wrapper Hell'** and **props collision**, keeping the component tree flat and making the code cleaner and easier to read."
            },
            jp: {
                title: "Reactの「フックコンポジション」（Hook Composition）パターンを説明してください。",
                body: "これは、古いHOCまたはRender Propsパターンと比較して、どのように改善されますか？",
                solution: "フックコンポジションは、複数のカスタムフックを組み合わせて、コンポーネント間で非視覚的で状態を持つロジックを共有する手法です。**「ラッパー地獄」**や**propsの衝突**を回避し、コンポーネントツリーを平坦に保ち、コードをよりクリーンで読みやすくすることで、HOCやRender Propsを改善します。"
            },
            vi: {
                title: "Mô tả pattern 'Hook Composition' trong React.",
                body: "Nó cải thiện như thế nào so với các pattern HOC hoặc Render Props cũ hơn?",
                solution: "Hook Composition là thực hành kết hợp nhiều custom hook để chia sẻ logic stateful, phi hình ảnh giữa các component. Nó cải thiện so với HOC và Render Props bằng cách tránh **'Wrapper Hell'** và **xung đột prop**, giữ cho cây component phẳng và làm cho mã sạch hơn, dễ đọc hơn."
            }
        }
    },
    {
        _id: "react-s-026",
        difficulty: "senior",
        tags: ["react", "nextjs", "ssr", "optimization"],
        content: {
            en: {
                title: "In Next.js, what is the trade-off between using Server-Side Rendering (SSR) and Static Site Generation (SSG)?",
                body: "Which approach is better for frequently changing personalized data?",
                solution: "SSG builds HTML at **build time**, offering excellent performance and CDN caching (best for static data). SSR builds HTML **on every request**, which is necessary for data that is **frequently changing or highly personalized**, ensuring the user always sees fresh data."
            },
            jp: {
                title: "Next.jsで、サーバーサイドレンダリング (SSR) と静的サイト生成 (SSG) を使用することのトレードオフは何ですか？",
                body: "頻繁に変更されるパーソナライズされたデータには、どちらのアプローチが優れていますか？",
                solution: "SSGは**ビルド時**にHTMLを構築し、優れたパフォーマンスとCDNキャッシングを提供します（静的データに最適）。SSRは**リクエストごと**にHTMLを構築します。これは、**頻繁に変更される**または**高度にパーソナライズされた**データに必要であり、ユーザーが常に新鮮なデータを確認できるようにします。"
            },
            vi: {
                title: "Trong Next.js, sự đánh đổi giữa việc sử dụng Server-Side Rendering (SSR) và Static Site Generation (SSG) là gì?",
                body: "Cách tiếp cận nào tốt hơn cho dữ liệu được cá nhân hóa thay đổi thường xuyên?",
                solution: "SSG xây dựng HTML tại **thời điểm build**, mang lại hiệu suất tuyệt vời và khả năng caching CDN (tốt nhất cho dữ liệu tĩnh). SSR xây dựng HTML **trong mỗi request**, điều này cần thiết cho dữ liệu **thay đổi thường xuyên hoặc được cá nhân hóa cao**, đảm bảo người dùng luôn thấy dữ liệu mới."
            }
        }
    },
    {
        _id: "react-s-027",
        difficulty: "senior",
        tags: ["react", "performance", "profiling", "interaction"],
        content: {
            en: {
                title: "When using the React DevTools Profiler, what does the 'Interaction' tab measure and why is it more representative of user experience than just render time?",
                body: "How does it help diagnose perceived performance bottlenecks?",
                solution: "The 'Interaction' tab tracks a specific user-initiated event (like a click) and all subsequent work (rendering, state updates, effects) that results from it. It measures the **total time** from user input to the final UI update, giving a true picture of the user's perceived latency, not just the rendering cost of one component."
            },
            jp: {
                title: "React DevTools Profilerを使用する際、「インタラクション」（Interaction）タブは何を測定し、なぜ単なるレンダリング時間よりもユーザーエクスペリエンスをよりよく表すのですか？",
                body: "体感的なパフォーマンスのボトルネックを診断するのにどのように役立ちますか？",
                solution: "「インタラクション」タブは、ユーザーが開始した特定のイベント（クリックなど）と、それによって生じるすべての後続の作業（レンダリング、状態更新、エフェクト）を追跡します。ユーザー入力から最終的なUI更新までの**合計時間**を測定し、単一のコンポーネントのレンダリングコストだけでなく、ユーザーが体感するレイテンシの真の全体像を提供します。"
            },
            vi: {
                title: "Khi sử dụng React DevTools Profiler, tab 'Interaction' đo lường gì và tại sao nó đại diện cho trải nghiệm người dùng hơn là chỉ thời gian render?",
                body: "Nó giúp chẩn đoán các tắc nghẽn hiệu suất cảm nhận được như thế nào?",
                solution: "Tab 'Interaction' theo dõi một sự kiện cụ thể do người dùng khởi xướng (như một lần nhấp) và tất cả công việc tiếp theo (rendering, cập nhật state, effects) là kết quả của nó. Nó đo lường **tổng thời gian** từ đầu vào của người dùng đến cập nhật UI cuối cùng, đưa ra một bức tranh chân thực về độ trễ mà người dùng cảm nhận, chứ không chỉ chi phí rendering của một component."
            }
        }
    },
    {
        _id: "react-s-028",
        difficulty: "senior",
        tags: ["react", "typescript", "generic", "component"],
        content: {
            en: {
                title: "How do you handle type safety when a generic component needs to call a function or method on its children (e.g., using `React.cloneElement`)?",
                body: "What is the limitation of `React.cloneElement` in this context, and how is it usually worked around?",
                solution: "It's difficult because `React.cloneElement` loses type information. You must rely on type narrowing and explicit casting, often by ensuring the children are of a predictable component type (e.g., using a discriminated union type) or by using patterns like **Render Props** or **Hook Composition** that inherently avoid cloning."
            },
            jp: {
                title: "ジェネリックコンポーネントがその子に対して関数やメソッドを呼び出す必要がある場合（例: `React.cloneElement`を使用）、型安全性をどのように処理しますか？",
                body: "この文脈での`React.cloneElement`の制限は何ですか、そして通常どのように回避されますか？",
                solution: "`React.cloneElement`は型情報を失うため、困難です。型を絞り込むことと明示的なキャストに頼る必要があり、多くの場合、子が予測可能なコンポーネント型であることを保証する（例: 識別されたユニオン型を使用）か、クローン作成を本質的に回避する**Render Props**または**Hook Composition**のようなパターンを使用します。"
            },
            vi: {
                title: "Làm thế nào bạn xử lý an toàn kiểu khi một component generic cần gọi một hàm hoặc phương thức trên các phần tử con của nó (ví dụ: sử dụng `React.cloneElement`)?",
                body: "Hạn chế của `React.cloneElement` trong ngữ cảnh này là gì, và nó thường được giải quyết như thế nào?",
                solution: "Điều này khó khăn vì `React.cloneElement` làm mất thông tin kiểu. Bạn phải dựa vào việc thu hẹp kiểu (type narrowing) và ép kiểu rõ ràng, thường bằng cách đảm bảo các phần tử con thuộc một kiểu component có thể dự đoán được (ví dụ: sử dụng kiểu union phân biệt) hoặc bằng cách sử dụng các pattern như **Render Props** hoặc **Hook Composition** vốn dĩ tránh việc cloning."
            }
        }
    },
    {
        _id: "react-s-029",
        difficulty: "senior",
        tags: ["react", "networking", "caching", "etag"],
        content: {
            en: {
                title: "How can HTTP Caching headers like `ETag` and `If-None-Match` be utilized to optimize repeated data fetches in a React application?",
                body: "Describe the interaction between the client and server when using ETag.",
                solution: "When the server responds, it includes an `ETag` (a unique identifier for the response version). On the next request, the React app sends this tag back in the `If-None-Match` header. If the data hasn't changed, the server responds with a **304 Not Modified**, saving bandwidth and speeding up perceived load time, since no data transfer occurs."
            },
            jp: {
                title: "`ETag`や`If-None-Match`のようなHTTPキャッシュヘッダーを、Reactアプリケーションでの繰り返しのデータ取得を最適化するためにどのように利用できますか？",
                body: "ETagを使用する際のクライアントとサーバー間の相互作用を説明してください。",
                solution: "サーバーが応答するとき、それは`ETag`（応答バージョンのユニークな識別子）を含みます。次のリクエストで、Reactアプリはこのタグを`If-None-Match`ヘッダーで送り返します。データが変更されていない場合、サーバーは**304 Not Modified**で応答し、データ転送が発生しないため、帯域幅を節約し、体感的なロード時間を短縮します。"
            },
            vi: {
                title: "Các header HTTP Caching như `ETag` và `If-None-Match` có thể được sử dụng như thế nào để tối ưu hóa việc tìm nạp dữ liệu lặp lại trong một ứng dụng React?",
                body: "Mô tả sự tương tác giữa client và server khi sử dụng ETag.",
                solution: "Khi server phản hồi, nó bao gồm một `ETag` (một định danh duy nhất cho phiên bản phản hồi). Trong yêu cầu tiếp theo, ứng dụng React gửi lại thẻ này trong header `If-None-Match`. Nếu dữ liệu không thay đổi, server phản hồi bằng **304 Not Modified**, tiết kiệm băng thông và tăng tốc thời gian tải cảm nhận được, vì không có dữ liệu nào được truyền."
            }
        }
    },
    {
        _id: "react-s-030",
        difficulty: "senior",
        tags: ["react", "component", "design", "flexibility"],
        content: {
            en: {
                title: "Explain the concept of 'Compound Components' in React component design.",
                body: "How does this pattern improve flexibility and encapsulation compared to passing many individual props?",
                solution: "Compound Components (e.g., `<Tabs><TabList /><TabPanel /></Tabs>`) share implicit state using **React Context** (or `cloneElement` with HOCs/hooks). This pattern gives the user control over the structure and presentation while maintaining the internal state logic, offering high flexibility without prop drilling."
            },
            jp: {
                title: "Reactコンポーネント設計における「複合コンポーネント」（Compound Components）の概念を説明してください。",
                body: "このパターンは、多くの個別のpropsを渡すのと比較して、柔軟性とカプセル化をどのように改善しますか？",
                solution: "複合コンポーネント（例: `<Tabs><TabList /><TabPanel /></Tabs>`) は、**React Context**（またはHOC/フックを使用した`cloneElement`）を使用して暗黙的な状態を共有します。このパターンは、内部の状態ロジックを維持しながら、ユーザーに構造とプレゼンテーションの制御を提供し、props drillingなしで高い柔軟性を提供します。"
            },
            vi: {
                title: "Giải thích khái niệm 'Compound Components' trong thiết kế component React.",
                body: "Pattern này cải thiện tính linh hoạt và đóng gói như thế nào so với việc truyền nhiều prop riêng lẻ?",
                solution: "Compound Components (ví dụ: `<Tabs><TabList /><TabPanel /></Tabs>`) chia sẻ state ngầm bằng cách sử dụng **React Context** (hoặc `cloneElement` với HOCs/hooks). Pattern này cung cấp cho người dùng quyền kiểm soát cấu trúc và trình bày trong khi vẫn duy trì logic state nội bộ, mang lại tính linh hoạt cao mà không cần prop drilling."
            }
        }
    },
    {
        _id: "react-s-031",
        difficulty: "senior",
        tags: ["react", "concurrent mode", "usetransition", "ux"],
        content: {
            en: {
                title: "In React 18, what is the role of `useTransition` in improving user experience (UX)?",
                body: "How does it differentiate between 'urgent' and 'transition' updates?",
                solution: "`useTransition` allows developers to mark state updates as **'transitions' (non-urgent)**. React can interrupt and defer these non-urgent updates to prioritize and render **'urgent'** updates (like user input/typing) immediately, keeping the UI responsive while rendering expensive, less critical views in the background."
            },
            jp: {
                title: "React 18で、`useTransition`がユーザーエクスペリエンス（UX）を向上させる上での役割は何ですか？",
                body: "「緊急」更新と「トランジション」更新をどのように区別しますか？",
                solution: "`useTransition`により、開発者は状態の更新を**「トランジション」（非緊急）**としてマークできます。Reactは、これらの非緊急の更新を中断および延期して、**「緊急」**更新（ユーザー入力/タイピングなど）を直ちに優先しレンダリングし、バックグラウンドで高コストで重要度の低いビューをレンダリングしながらUIの応答性を維持できます。"
            },
            vi: {
                title: "Trong React 18, vai trò của `useTransition` trong việc cải thiện trải nghiệm người dùng (UX) là gì?",
                body: "Nó phân biệt giữa các cập nhật 'urgent' và 'transition' như thế nào?",
                solution: "`useTransition` cho phép các nhà phát triển đánh dấu các cập nhật state là **'transitions' (không khẩn cấp)**. React có thể gián đoạn và hoãn các cập nhật không khẩn cấp này để ưu tiên và render các cập nhật **'urgent'** (như nhập liệu/gõ phím của người dùng) ngay lập tức, giữ cho UI phản hồi trong khi render các view tốn kém, ít quan trọng hơn trong nền."
            }
        }
    },
    {
        _id: "react-s-032",
        difficulty: "senior",
        tags: ["react", "optimization", "immutable", "performance"],
        content: {
            en: {
                title: "Why is it important for components to avoid deep prop spreading (e.g., `<Child {...props.data} />`) when optimizing rendering?",
                body: "How does this practice hinder memoization?",
                solution: "Deep prop spreading hinders memoization because it creates an implicit dependency on *all* sub-properties of `props.data`. If only one small, irrelevant property changes, the spread operation creates a new object, causing `Child` (even if memoized) to re-render because its props object reference is new."
            },
            jp: {
                title: "レンダリングを最適化する際に、コンポーネントがディープなpropsの展開（例: `<Child {...props.data} />`）を避けることが重要であるのはなぜですか？",
                body: "この習慣はメモ化をどのように妨げますか？",
                solution: "ディープなpropsの展開は、`props.data`の*すべて*のサブプロパティへの暗黙的な依存関係を作成するため、メモ化を妨げます。関連性のない小さなプロパティが1つだけ変更された場合でも、展開操作により新しいオブジェクトが作成され、`Child`（メモ化されている場合でも）はpropsオブジェクトの参照が新しいため、再レンダリングされます。"
            },
            vi: {
                title: "Tại sao việc các component tránh prop spreading sâu (ví dụ: `<Child {...props.data} />`) lại quan trọng khi tối ưu hóa rendering?",
                body: "Thực hành này cản trở memoization như thế nào?",
                solution: "Prop spreading sâu cản trở memoization vì nó tạo ra một dependency ngầm đối với *tất cả* các thuộc tính con của `props.data`. Nếu chỉ một thuộc tính nhỏ, không liên quan thay đổi, thao tác spread sẽ tạo ra một đối tượng mới, khiến `Child` (ngay cả khi đã được memoize) phải re-render vì tham chiếu đối tượng props của nó là mới."
            }
        }
    },
    {
        _id: "react-s-033",
        difficulty: "senior",
        tags: ["react", "ssr", "streaming", "performance"],
        content: {
            en: {
                title: "What is 'Streaming SSR' (introduced in React 18), and how does it improve the loading experience compared to traditional SSR?",
                body: "How does it handle slow-to-fetch components?",
                solution: "Streaming SSR allows the server to send the HTML in multiple chunks. It sends the static shell first, then streams the HTML for content as it becomes ready. It uses `<Suspense>` to handle slow components, sending a loading placeholder first, and then streaming the actual component HTML into the document when the data is ready."
            },
            jp: {
                title: "「ストリーミングSSR」（React 18で導入）とは何ですか、そして従来のSSRと比較してローディングエクスペリエンスをどのように改善しますか？",
                body: "取得が遅いコンポーネントをどのように処理しますか？",
                solution: "ストリーミングSSRにより、サーバーはHTMLを複数のチャンクで送信できます。最初に静的なシェルを送信し、次にコンテンツのHTMLが準備されるにつれてストリーミングします。`<Suspense>`を使用して遅いコンポーネントを処理し、最初にローディングプレースホルダーを送信してから、データが準備されたときに実際のコンポーネントHTMLをドキュメントにストリーミングします。"
            },
            vi: {
                title: "'Streaming SSR' (được giới thiệu trong React 18) là gì, và nó cải thiện trải nghiệm tải như thế nào so với SSR truyền thống?",
                body: "Nó xử lý các component tìm nạp chậm như thế nào?",
                solution: "Streaming SSR cho phép server gửi HTML theo nhiều phần (chunk). Nó gửi shell tĩnh trước, sau đó stream HTML cho nội dung khi nó sẵn sàng. Nó sử dụng `<Suspense>` để xử lý các component chậm, gửi placeholder loading trước, sau đó stream HTML component thực tế vào tài liệu khi dữ liệu sẵn sàng."
            }
        }
    },
    {
        _id: "react-s-034",
        difficulty: "senior",
        tags: ["react", "typescript", "hooks", "overload"],
        content: {
            en: {
                title: "How can function overloading be used to enhance type safety and developer experience when creating a generic custom hook in TypeScript?",
                body: "Give an example of a built-in hook that uses function overloading for typing.",
                solution: "Function overloading allows you to define multiple function signatures (inputs/outputs) based on the specific arguments passed. For custom hooks, this enables the return type to be precisely narrowed (e.g., returning `T | undefined` or `T` based on whether an initial value was provided). The built-in `useState` hook uses this pattern."
            },
            jp: {
                title: "TypeScriptでジェネリックカスタムフックを作成する際に、関数オーバーロードを使用して型安全性と開発者エクスペリエンスを向上させるにはどうすればよいですか？",
                body: "型付けに関数オーバーロードを使用する組み込みフックの例を挙げてください。",
                solution: "関数オーバーロードにより、渡された特定の引数に基づいて複数の関数シグネチャ（入力/出力）を定義できます。カスタムフックの場合、これにより、戻り値の型を正確に絞り込むことができます（例: 初期値が提供されたかどうかに基づいて`T | undefined`または`T`を返す）。組み込みの`useState`フックはこのパターンを使用します。"
            },
            vi: {
                title: "Làm thế nào có thể sử dụng function overloading để nâng cao an toàn kiểu và trải nghiệm nhà phát triển khi tạo một custom hook generic trong TypeScript?",
                body: "Đưa ra một ví dụ về một hook tích hợp sử dụng function overloading để gán kiểu.",
                solution: "Function overloading cho phép bạn định nghĩa nhiều chữ ký hàm (đầu vào/đầu ra) dựa trên các đối số cụ thể được truyền vào. Đối với các custom hook, điều này cho phép kiểu trả về được thu hẹp chính xác (ví dụ: trả về `T | undefined` hoặc `T` dựa trên việc có cung cấp giá trị ban đầu hay không). Hook tích hợp `useState` sử dụng pattern này."
            }
        }
    },
    {
        _id: "react-s-035",
        difficulty: "senior",
        tags: ["react", "component", "design", "inversion of control"],
        content: {
            en: {
                title: "Explain the concept of 'Inversion of Control' as it relates to React component design patterns.",
                body: "How is this concept applied in a custom `Dropdown` component?",
                solution: "Inversion of Control means a component (e.g., `Dropdown`) delegates decision-making or rendering responsibilities to its consumer (the parent). For a `Dropdown`, this is applied by having the parent pass in the rendering logic for the button and the list items (via Render Props or children as function), rather than the `Dropdown` hardcoding the appearance."
            },
            jp: {
                title: "Reactコンポーネント設計パターンに関連する「制御の反転」（Inversion of Control）の概念を説明してください。",
                body: "この概念は、カスタム`Dropdown`コンポーネントにどのように適用されますか？",
                solution: "制御の反転とは、コンポーネント（例: `Dropdown`）が意思決定またはレンダリングの責任をそのコンシューマー（親）に委譲することを意味します。`Dropdown`の場合、これは、`Dropdown`が見た目をハードコーディングするのではなく、親がボタンとリストアイテムのレンダリングロジックを（Render Propsまたは関数としての子を介して）渡すことによって適用されます。"
            },
            vi: {
                title: "Giải thích khái niệm 'Inversion of Control' liên quan đến các pattern thiết kế component React.",
                body: "Khái niệm này được áp dụng như thế nào trong một component `Dropdown` tùy chỉnh?",
                solution: "Inversion of Control có nghĩa là một component (ví dụ: `Dropdown`) ủy quyền trách nhiệm ra quyết định hoặc render cho người tiêu thụ nó (component cha). Đối với một `Dropdown`, điều này được áp dụng bằng cách để component cha truyền vào logic render cho nút và các mục danh sách (thông qua Render Props hoặc children dưới dạng hàm), thay vì `Dropdown` tự mã hóa cứng giao diện."
            }
        }
    },
    {
        _id: "react-s-036",
        difficulty: "senior",
        tags: ["react", "testing", "rtl", "mocking"],
        content: {
            en: {
                title: "Why should you avoid mocking component functions (like setting state) and instead focus on testing the effects of user interaction in React Testing Library (RTL)?",
                body: "What is the RTL philosophy regarding implementation details?",
                solution: "RTL's philosophy is to test the application **as a user would use it**. Testing implementation details (like the internal state setter) makes tests brittle and resistant to refactoring. By testing the outcome of user interaction on the UI, the tests remain robust even when internal state logic changes."
            },
            jp: {
                title: "状態の設定などのコンポーネント関数をモックすることを避け、代わりにReact Testing Library (RTL) でのユーザーインタラクションの影響をテストすることに集中すべきなのはなぜですか？",
                body: "実装の詳細に関するRTLの哲学は何ですか？",
                solution: "RTLの哲学は、アプリケーションを**ユーザーが使用するように**テストすることです。実装の詳細（内部の状態セッターなど）をテストすると、テストが脆くなり、リファクタリングに耐性がなくなります。UIでのユーザーインタラクションの結果をテストすることで、内部の状態ロジックが変更されてもテストは堅牢なままです。"
            },
            vi: {
                title: "Tại sao bạn nên tránh mocking các hàm component (như thiết lập state) và thay vào đó tập trung vào việc kiểm thử các ảnh hưởng của tương tác người dùng trong React Testing Library (RTL)?",
                body: "Triết lý của RTL liên quan đến các chi tiết triển khai là gì?",
                solution: "Triết lý của RTL là kiểm thử ứng dụng **như một người dùng sẽ sử dụng nó**. Kiểm thử các chi tiết triển khai (như internal state setter) làm cho các bài test dễ vỡ và chống lại việc refactoring. Bằng cách kiểm thử kết quả của tương tác người dùng trên UI, các bài test vẫn mạnh mẽ ngay cả khi logic state nội bộ thay đổi."
            }
        }
    },
    {
        _id: "react-s-037",
        difficulty: "senior",
        tags: ["react", "hook", "useid", "a11y"],
        content: {
            en: {
                title: "What problem does the `useId` hook solve, and why is it particularly important in a concurrent and SSR environment?",
                body: "Why can't a simple random ID generator be used instead of `useId`?",
                solution: "`useId` generates a **stable, unique ID** across the client and server. In SSR/Concurrent Mode, a simple random generator would produce different IDs on the server and client, causing a **Hydration Mismatch**. `useId` guarantees consistency, which is vital for accessibility attributes like `aria-labelledby`."
            },
            jp: {
                title: "`useId`フックが解決する問題は何ですか、そしてコンカレントおよびSSR環境で特に重要であるのはなぜですか？",
                body: "`useId`の代わりに単純なランダムIDジェネレーターを使用できないのはなぜですか？",
                solution: "`useId`は、クライアントとサーバー間で**安定した一意のID**を生成します。SSR/コンカレントモードでは、単純なランダムジェネレーターはサーバーとクライアントで異なるIDを生成し、**ハイドレーションの不一致**を引き起こします。`useId`は一貫性を保証し、`aria-labelledby`などのアクセシビリティ属性にとって不可欠です。"
            },
            vi: {
                title: "Hook `useId` giải quyết vấn đề gì, và tại sao nó đặc biệt quan trọng trong môi trường concurrent và SSR?",
                body: "Tại sao không thể sử dụng một bộ tạo ID ngẫu nhiên đơn giản thay vì `useId`?",
                solution: "`useId` tạo ra một **ID duy nhất, ổn định** trên client và server. Trong SSR/Concurrent Mode, một bộ tạo ngẫu nhiên đơn giản sẽ tạo ra các ID khác nhau trên server và client, gây ra **Hydration Mismatch**. `useId` đảm bảo tính nhất quán, điều này rất quan trọng đối với các thuộc tính khả năng tiếp cận như `aria-labelledby`."
            }
        }
    },
    {
        _id: "react-s-038",
        difficulty: "senior",
        tags: ["react", "global state", "zustand", "subscription"],
        content: {
            en: {
                title: "In state management tools like Zustand, how does shallow state subscription (using a selector) avoid the Context API's performance pitfall?",
                body: "How does the library bypass the React render process to update a subscriber?",
                solution: "Libraries like Zustand operate outside the React component tree and use an internal **subscription mechanism** (observer pattern). When a change occurs, they use a selector to compare the previous and next slice of state. If they are shallowly equal, the library only updates the specific component that consumes that slice, bypassing the Context API's forced re-render on all consumers."
            },
            jp: {
                title: "Zustandのような状態管理ツールでは、シャローな状態サブスクリプション（セレクターの使用）は、Context APIのパフォーマンス上の落とし穴をどのように回避しますか？",
                body: "ライブラリは、Reactのレンダリングプロセスをバイパスしてサブスクライバーを更新するにはどうすればよいですか？",
                solution: "Zustandのようなライブラリは、Reactコンポーネントツリーの外で動作し、内部の**サブスクリプションメカニズム**（オブザーバーパターン）を使用します。変更が発生すると、セレクターを使用して状態の以前と次のスライスを比較します。それらが浅く等しい場合、ライブラリはそのスライスを消費する特定のコンポーネントのみを更新し、すべてのコンシューマーに対するContext APIの強制再レンダリングをバイパスします。"
            },
            vi: {
                title: "Trong các công cụ quản lý state như Zustand, việc subscription state nông (sử dụng selector) tránh được cạm bẫy hiệu suất của Context API như thế nào?",
                body: "Thư viện bỏ qua quá trình render của React để cập nhật một subscriber như thế nào?",
                solution: "Các thư viện như Zustand hoạt động bên ngoài cây component React và sử dụng một **cơ chế subscription** nội bộ (mô hình observer). Khi có thay đổi xảy ra, chúng sử dụng selector để so sánh phần state trước và sau. Nếu chúng bằng nhau về mặt nông, thư viện chỉ cập nhật component cụ thể tiêu thụ phần đó, bỏ qua việc Context API buộc re-render tất cả người tiêu thụ."
            }
        }
    },
    {
        _id: "react-s-039",
        difficulty: "senior",
        tags: ["react", "testing", "e2e", "jest"],
        content: {
            en: {
                title: "When designing unit tests for custom hooks, why is the `renderHook` utility (from RTL or a similar tool) generally preferred over rendering a dummy component?",
                body: "What is the key benefit in terms of code isolation and maintenance?",
                solution: "`renderHook` provides a dedicated environment for testing the hook's return values and effects **in isolation**, without needing to write a wrapper component boilerplate. This makes the test code cleaner, directly focuses on the hook's logic, and improves maintenance since changes to the hook don't require updating a dummy component's structure."
            },
            jp: {
                title: "カスタムフックのユニットテストを設計する際、ダミーコンポーネントをレンダリングするよりも、`renderHook`ユーティリティ（RTLまたは同様のツールから）が一般的に好まれるのはなぜですか？",
                body: "コードの分離と保守の観点から、主な利点は何ですか？",
                solution: "`renderHook`は、ラッパーコンポーネントのボイラープレートを作成することなく、フックの戻り値とエフェクトを**分離して**テストするための専用の環境を提供します。これにより、テストコードがよりクリーンになり、フックのロジックに直接焦点を当て、フックの変更がダミーコンポーネントの構造の更新を必要としないため、保守が向上します。"
            },
            vi: {
                title: "Khi thiết kế unit test cho custom hook, tại sao tiện ích `renderHook` (từ RTL hoặc công cụ tương tự) thường được ưu tiên hơn so với việc render một component giả (dummy component)?",
                body: "Lợi ích chính về mặt cô lập mã và bảo trì là gì?",
                solution: "`renderHook` cung cấp một môi trường chuyên dụng để kiểm thử giá trị trả về và effects của hook **một cách độc lập**, mà không cần viết boilerplate component wrapper. Điều này làm cho mã kiểm thử sạch hơn, tập trung trực tiếp vào logic của hook và cải thiện việc bảo trì vì các thay đổi đối với hook không yêu cầu cập nhật cấu trúc của component giả."
            }
        }
    },
    {
        _id: "react-s-040",
        difficulty: "senior",
        tags: ["react", "typescript", "generics", "ref"],
        content: {
            en: {
                title: "How do you correctly define the types for a `forwardRef` component that also needs to be generic (e.g., a generic `Button` that forwards a ref to an HTML element)?",
                body: "What is the order of the generic parameters in the `forwardRef` type declaration?",
                solution: "Use `React.forwardRef` with two generic parameters: the first is the type for the **ref handle** (`T` for HTML element or custom handle), and the second is the type for the **props** (`P`). The component function then uses these types. Example: `React.forwardRef<HTMLButtonElement, Props<T>>((props, ref) => ...)`."
            },
            jp: {
                title: "ジェネリックである必要がある`forwardRef`コンポーネント（例: HTML要素にrefを転送するジェネリックな`Button`）の型を正しく定義するにはどうすればよいですか？",
                body: "`forwardRef`の型宣言におけるジェネリックパラメーターの順序は何ですか？",
                solution: "`React.forwardRef`を2つのジェネリックパラメーターで使用します。最初のパラメーターは**refハンドル**の型（HTML要素またはカスタムハンドル用の`T`）、2番目のパラメーターは**props**の型（`P`）です。コンポーネント関数はこれらの型を使用します。例: `React.forwardRef<HTMLButtonElement, Props<T>>((props, ref) => ...)`。"
            },
            vi: {
                title: "Làm thế nào bạn định nghĩa đúng các kiểu cho một component `forwardRef` cũng cần phải là generic (ví dụ: một `Button` generic chuyển tiếp ref đến một phần tử HTML)?",
                body: "Thứ tự của các tham số generic trong khai báo kiểu `forwardRef` là gì?",
                solution: "Sử dụng `React.forwardRef` với hai tham số generic: tham số đầu tiên là kiểu cho **ref handle** (`T` cho phần tử HTML hoặc handle tùy chỉnh), và tham số thứ hai là kiểu cho **props** (`P`). Hàm component sau đó sử dụng các kiểu này. Ví dụ: `React.forwardRef<HTMLButtonElement, Props<T>>((props, ref) => ...)`."
            }
        }
    },
    {
        _id: "react-s-041",
        difficulty: "senior",
        tags: ["react", "performance", "optimization", "dom"],
        content: {
            en: {
                title: "Why is frequently calling methods that read layout properties from the DOM (e.g., `element.getBoundingClientRect()`) within a high-frequency event handler (like `onScroll`) a significant performance risk?",
                body: "What technique is used to mitigate this risk, and what does it prevent?",
                solution: "Reading layout properties forces the browser to **synchronously recalculate the layout** (a reflow/re-layout), which is extremely slow. The technique used to mitigate this is **Throttling or Debouncing**, which limits the frequency of the function calls, preventing excessive, unnecessary reflows."
            },
            jp: {
                title: "高頻度のイベントハンドラー（`onScroll`など）内でDOMからレイアウトプロパティを読み取るメソッド（例: `element.getBoundingClientRect()`）を頻繁に呼び出すことが、重大なパフォーマンスリスクとなるのはなぜですか？",
                body: "このリスクを軽減するために使用されるテクニックは何ですか、そしてそれは何を防止しますか？",
                solution: "レイアウトプロパティを読み取ると、ブラウザは**レイアウトを同期的に再計算**する（リフロー/再レイアウト）ことを強制され、これは非常に遅いです。このリスクを軽減するために使用されるテクニックは**スロットリングまたはデバウンス**であり、関数の呼び出し頻度を制限し、過度で不必要なリフローを防ぎます。"
            },
            vi: {
                title: "Tại sao việc thường xuyên gọi các phương thức đọc thuộc tính layout từ DOM (ví dụ: `element.getBoundingClientRect()`) bên trong một trình xử lý sự kiện tần suất cao (như `onScroll`) lại là một rủi ro hiệu suất đáng kể?",
                body: "Kỹ thuật nào được sử dụng để giảm thiểu rủi ro này, và nó ngăn chặn điều gì?",
                solution: "Việc đọc thuộc tính layout buộc trình duyệt phải **tính toán lại layout một cách đồng bộ** (reflow/re-layout), điều này cực kỳ chậm. Kỹ thuật được sử dụng để giảm thiểu rủi ro này là **Throttling hoặc Debouncing**, giới hạn tần suất gọi hàm, ngăn chặn các reflow quá mức, không cần thiết."
            }
        }
    },
    {
        _id: "react-s-042",
        difficulty: "senior",
        tags: ["react", "hook", "usememo", "complex object"],
        content: {
            en: {
                title: "Why might `useMemo` fail to prevent re-rendering when the computed value is a complex object (like an array of objects) whose contents haven't changed?",
                body: "What specific comparison behavior in JavaScript causes this issue?",
                solution: "It fails because JavaScript compares non-primitive types (objects/arrays) by **reference**. Even if the contents are identical, `useMemo` will return a new object reference every time the memoization function runs, making React's shallow prop comparison see a change, thus triggering a re-render."
            },
            jp: {
                title: "計算された値が、内容が変更されていない複雑なオブジェクト（オブジェクトの配列など）である場合、`useMemo`が再レンダリングを防げないのはなぜですか？",
                body: "JavaScriptのどの特定の比較動作がこの問題を引き起こしますか？",
                solution: "JavaScriptは非プリミティブ型（オブジェクト/配列）を**参照**で比較するため、失敗します。内容が同一であっても、メモ化関数が実行されるたびに`useMemo`は新しいオブジェクト参照を返し、Reactの浅いprops比較は変更を認識し、再レンダリングをトリガーします。"
            },
            vi: {
                title: "Tại sao `useMemo` có thể thất bại trong việc ngăn chặn re-render khi giá trị được tính toán là một đối tượng phức tạp (như một mảng các đối tượng) mà nội dung của nó không thay đổi?",
                body: "Hành vi so sánh cụ thể nào trong JavaScript gây ra vấn đề này?",
                solution: "Nó thất bại vì JavaScript so sánh các kiểu không nguyên thủy (đối tượng/mảng) bằng **tham chiếu**. Ngay cả khi nội dung giống hệt nhau, `useMemo` sẽ trả về một tham chiếu đối tượng mới mỗi khi hàm memoization chạy, khiến việc so sánh prop nông của React nhận thấy một thay đổi, do đó kích hoạt re-render."
            }
        }
    },
    {
        _id: "react-s-043",
        difficulty: "senior",
        tags: ["react", "typescript", "custom hook", "type guard"],
        content: {
            en: {
                title: "In a TypeScript custom hook that can return different types based on input (e.g., `useFetch`), how can you ensure the consuming component has the correct narrowed type without explicit casting?",
                body: "What advanced TypeScript feature allows you to 'teach' the compiler about the hook's return value?",
                solution: "Use **Function Overloading** combined with **Type Guard** functions or union types with discriminated properties. By providing specific overloads, you tell the TypeScript compiler exactly what the return type will be for a specific set of input arguments, allowing it to infer the narrowed type without manual casting."
            },
            jp: {
                title: "入力に基づいて異なる型を返すことができるTypeScriptカスタムフック（例: `useFetch`）で、明示的なキャストなしで、消費するコンポーネントが正しい絞り込まれた型を持つことをどのように保証できますか？",
                body: "フックの戻り値についてコンパイラに「教える」ことができる高度なTypeScript機能は何ですか？",
                solution: "**関数オーバーロード**を**型ガード**関数または識別されたプロパティを持つユニオン型と組み合わせて使用します。特定のオーバーロードを提供することで、特定の入力引数のセットに対して戻り値の型がどうなるかをTypeScriptコンパイラに正確に伝え、手動キャストなしで絞り込まれた型を推論できるようにします。"
            },
            vi: {
                title: "Trong một custom hook TypeScript có thể trả về các kiểu khác nhau dựa trên đầu vào (ví dụ: `useFetch`), làm thế nào bạn có thể đảm bảo component tiêu thụ có kiểu được thu hẹp chính xác mà không cần ép kiểu rõ ràng?",
                body: "Tính năng TypeScript nâng cao nào cho phép bạn 'dạy' compiler về giá trị trả về của hook?",
                solution: "Sử dụng **Function Overloading** kết hợp với các hàm **Type Guard** hoặc kiểu union với các thuộc tính phân biệt. Bằng cách cung cấp các overloads cụ thể, bạn cho trình biên dịch TypeScript biết chính xác kiểu trả về sẽ là gì đối với một tập hợp đối số đầu vào cụ thể, cho phép nó suy luận kiểu được thu hẹp mà không cần ép kiểu thủ công."
            }
        }
    },
    {
        _id: "react-s-044",
        difficulty: "senior",
        tags: ["react", "router", "prefetching", "ux"],
        content: {
            en: {
                title: "How does Route Prefetching (e.g., in Next.js/Gatsby/Remix) improve user experience without increasing initial page load time?",
                body: "What event typically triggers the prefetching of a linked resource?",
                solution: "Prefetching allows the application to download the JavaScript and data for a linked route **in the background** before the user clicks on it. This is typically triggered by the user's **hover** event over a link, ensuring that when the user does click, the navigation is instant (zero-latency)."
            },
            jp: {
                title: "ルートのプリフェッチ（例: Next.js/Gatsby/Remix）は、初期ページロード時間を増加させることなく、ユーザーエクスペリエンスをどのように改善しますか？",
                body: "リンクされたリソースのプリフェッチをトリガーするイベントは通常何ですか？",
                solution: "プリフェッチにより、アプリケーションはユーザーがクリックする**前**に、リンクされたルートのJavaScriptとデータを**バックグラウンドで**ダウンロードできます。これは通常、ユーザーがリンクの上に**ホバー**したイベントによってトリガーされ、ユーザーがクリックしたときにナビゲーションが即座に行われるようにします（ゼロレイテンシ）。"
            },
            vi: {
                title: "Route Prefetching (ví dụ: trong Next.js/Gatsby/Remix) cải thiện trải nghiệm người dùng như thế nào mà không làm tăng thời gian tải trang ban đầu?",
                body: "Sự kiện nào thường kích hoạt việc prefetching một tài nguyên đã được liên kết?",
                solution: "Prefetching cho phép ứng dụng tải xuống JavaScript và dữ liệu cho một route đã được liên kết **trong nền** trước khi người dùng nhấp vào nó. Điều này thường được kích hoạt bởi sự kiện **hover** của người dùng trên một liên kết, đảm bảo rằng khi người dùng nhấp, việc điều hướng diễn ra tức thì (độ trễ bằng không)."
            }
        }
    },
    {
        _id: "react-s-045",
        difficulty: "senior",
        tags: ["react", "testing", "custom hook", "return type"],
        content: {
            en: {
                title: "When testing a custom hook that returns an array (e.g., `[value, setValue]`), why is array destructuring considered fragile in tests?",
                body: "What is the more robust approach to accessing the return values in tests, and why?",
                solution: "Array destructuring in tests (e.g., `const [value] = result.current;`) is fragile because adding or reordering elements in the hook's returned array will break the test. The robust approach is to return an **object** from the hook or to access the values by **index** and assign descriptive names (e.g., `const value = result.current[0];`), making the test less brittle."
            },
            jp: {
                title: "配列を返すカスタムフック（例: `[value, setValue]`）をテストする際、配列の分割代入がテストで壊れやすいと見なされるのはなぜですか？",
                body: "テストで戻り値にアクセスするためのより堅牢なアプローチは何ですか、そしてその理由は何ですか？",
                solution: "テストでの配列の分割代入（例: `const [value] = result.current;`）は、フックの戻り値の配列に要素を追加したり、順序を変更したりするとテストが壊れるため、壊れやすいです。より堅牢なアプローチは、フックから**オブジェクト**を返すか、**インデックス**で値にアクセスして説明的な名前を割り当てることです（例: `const value = result.current[0];`）。これにより、テストの脆さが軽減されます。"
            },
            vi: {
                title: "Khi kiểm thử một custom hook trả về một mảng (ví dụ: `[value, setValue]`), tại sao việc destructuring mảng lại được coi là dễ vỡ trong các bài test?",
                body: "Cách tiếp cận mạnh mẽ hơn để truy cập các giá trị trả về trong các bài test là gì, và tại sao?",
                solution: "Việc destructuring mảng trong các bài test (ví dụ: `const [value] = result.current;`) dễ vỡ vì việc thêm hoặc sắp xếp lại các phần tử trong mảng trả về của hook sẽ làm hỏng bài test. Cách tiếp cận mạnh mẽ hơn là trả về một **đối tượng** từ hook hoặc truy cập các giá trị bằng **index** và gán tên mô tả (ví dụ: `const value = result.current[0];`), làm cho bài test ít dễ vỡ hơn."
            }
        }
    },
    {
        _id: "react-s-046",
        difficulty: "senior",
        tags: ["react", "networking", "graphql", "client"],
        content: {
            en: {
                title: "When using a GraphQL client (like Apollo or Relay) in React, how does it inherently solve the problem of 'over-fetching' data?",
                body: "How does the client use the component's data requirements to construct the network request?",
                solution: "GraphQL inherently solves over-fetching because the client **only requests the specific fields it needs**. The client library reads the data requirements declared by the consuming components (via fragments/queries) and sends a single, precise payload request to the server, rather than receiving a large, fixed data structure."
            },
            jp: {
                title: "ReactでGraphQLクライアント（ApolloやRelayなど）を使用する場合、「オーバーフェッチ」（over-fetching）の問題をどのように本質的に解決しますか？",
                body: "クライアントは、コンポーネントのデータ要件を使用してネットワークリクエストをどのように構築しますか？",
                solution: "GraphQLは、クライアントが**必要な特定のフィールドのみをリクエスト**するため、オーバーフェッチを本質的に解決します。クライアントライブラリは、消費するコンポーネントによって宣言されたデータ要件（フラグメント/クエリを介して）を読み取り、単一の正確なペイロードリクエストをサーバーに送信し、大きくて固定されたデータ構造を受け取るのを避けます。"
            },
            vi: {
                title: "Khi sử dụng GraphQL client (như Apollo hoặc Relay) trong React, nó giải quyết vấn đề 'over-fetching' dữ liệu như thế nào?",
                body: "Client sử dụng các yêu cầu dữ liệu của component để xây dựng yêu cầu mạng như thế nào?",
                solution: "GraphQL vốn dĩ giải quyết vấn đề over-fetching vì client **chỉ yêu cầu các trường cụ thể mà nó cần**. Thư viện client đọc các yêu cầu dữ liệu được khai báo bởi các component tiêu thụ (thông qua fragments/queries) và gửi một yêu cầu payload duy nhất, chính xác đến server, thay vì nhận một cấu trúc dữ liệu lớn, cố định."
            }
        }
    },
    {
        _id: "react-s-047",
        difficulty: "senior",
        tags: ["react", "component", "design", "polymorphism"],
        content: {
            en: {
                title: "Describe the 'Polymorphic Component' pattern in React design, and why it's useful.",
                body: "How does the `as` prop (or similar convention) enable polymorphism?",
                solution: "A Polymorphic Component is a single component (e.g., `<Text as='h1'>`) that can render itself as different underlying HTML elements based on a prop, typically called `as` or `component`. This is useful for maintaining consistent styling and logic while rendering the most **semantically appropriate** element (e.g., an `h1` for SEO) for a given context."
            },
            jp: {
                title: "React設計における「ポリモーフィックコンポーネント」（Polymorphic Component）パターンを説明し、なぜそれが有用なのですか？",
                body: "`as` props（または同様の慣例）は、ポリモーフィズムをどのように可能にしますか？",
                solution: "ポリモーフィックコンポーネントは、props（通常`as`または`component`と呼ばれる）に基づいて、異なる基になるHTML要素として自身をレンダリングできる単一のコンポーネント（例: `<Text as='h1'>`）です。これは、特定のコンテキストに対して最も**セマンティックに適切な**要素（例: SEOのための`h1`）をレンダリングしながら、一貫したスタイリングとロジックを維持するために有用です。"
            },
            vi: {
                title: "Mô tả pattern 'Polymorphic Component' trong thiết kế React, và tại sao nó hữu ích.",
                body: "Prop `as` (hoặc quy ước tương tự) cho phép tính đa hình (polymorphism) như thế nào?",
                solution: "Một Polymorphic Component là một component duy nhất (ví dụ: `<Text as='h1'>`) có thể tự render dưới dạng các phần tử HTML cơ bản khác nhau dựa trên một prop, thường được gọi là `as` hoặc `component`. Điều này hữu ích để duy trì styling và logic nhất quán trong khi render phần tử **ngữ nghĩa phù hợp nhất** (ví dụ: một thẻ `h1` cho SEO) cho một ngữ cảnh nhất định."
            }
        }
    },
    {
        _id: "react-s-048",
        difficulty: "senior",
        tags: ["react", "testing", "dom", "query"],
        content: {
            en: {
                title: "Why is querying by `role` often the most preferred method in React Testing Library (RTL)?",
                body: "What critical user group does querying by `role` implicitly test for?",
                solution: "Querying by `role` is preferred because it simulates how **assistive technologies** (like screen readers) perceive the UI. It implicitly forces developers to use correct semantic HTML or WAI-ARIA roles, ensuring the component is accessible and stable for the most critical user group: those relying on accessibility tools."
            },
            jp: {
                title: "React Testing Library (RTL) で、`role`によるクエリが最も好まれる方法であるのはなぜですか？",
                body: "`role`によるクエリは、どの重要なユーザーグループに対して暗黙的にテストを行いますか？",
                solution: "`role`によるクエリは、**支援技術**（スクリーンリーダーなど）がUIをどのように認識するかをシミュレートするため、好まれます。これは、開発者に正しいセマンティックHTMLまたはWAI-ARIAロールの使用を暗黙的に強制し、最も重要なユーザーグループ、つまりアクセシビリティツールに頼っているユーザーに対してコンポーネントがアクセス可能で安定していることを保証します。"
            },
            vi: {
                title: "Tại sao truy vấn bằng `role` thường là phương pháp được ưu tiên nhất trong React Testing Library (RTL)?",
                body: "Truy vấn bằng `role` ngầm kiểm thử cho nhóm người dùng quan trọng nào?",
                solution: "Truy vấn bằng `role` được ưu tiên vì nó mô phỏng cách **các công nghệ hỗ trợ** (như trình đọc màn hình) nhận thức UI. Nó ngầm buộc các nhà phát triển phải sử dụng HTML ngữ nghĩa hoặc vai trò WAI-ARIA chính xác, đảm bảo component có thể truy cập được và ổn định cho nhóm người dùng quan trọng nhất: những người dựa vào các công cụ hỗ trợ tiếp cận."
            }
        }
    },
    {
        _id: "react-s-049",
        difficulty: "senior",
        tags: ["react", "hook", "useinsertmenteffect", "css-in-js"],
        content: {
            en: {
                title: "What is the specialized purpose of the `useInsertionEffect` hook, and which libraries primarily use it?",
                body: "How does it help solve performance issues in CSS-in-JS libraries?",
                solution: "`useInsertionEffect` runs **synchronously after the DOM mutations** but *before* `useLayoutEffect` and *before* React reads the new layout. It is primarily used by **CSS-in-JS libraries** (like styled-components) to inject dynamic styles into the DOM at the exact moment needed, preventing synchronous layout recalculations and avoiding visual flickers (FOUC)."
            },
            jp: {
                title: "`useInsertionEffect`フックの特殊な目的は何ですか、そして主にどのライブラリがそれを使用しますか？",
                body: "CSS-in-JSライブラリのパフォーマンスの問題を解決するのにどのように役立ちますか？",
                solution: "`useInsertionEffect`は、DOMの変更**後**、`useLayoutEffect`の**前**、およびReactが新しいレイアウトを読み取る**前**に**同期的に**実行されます。主に**CSS-in-JSライブラリ**（styled-componentsなど）によって使用され、動的なスタイルを必要な正確な瞬間にDOMに注入し、同期的なレイアウト再計算を防ぎ、視覚的なちらつき（FOUC）を回避します。"
            },
            vi: {
                title: "Mục đích chuyên biệt của hook `useInsertionEffect` là gì, và thư viện nào chủ yếu sử dụng nó?",
                body: "Nó giúp giải quyết các vấn đề hiệu suất trong các thư viện CSS-in-JS như thế nào?",
                solution: "`useInsertionEffect` chạy **đồng bộ sau các đột biến DOM** nhưng *trước* `useLayoutEffect` và *trước khi* React đọc layout mới. Nó chủ yếu được sử dụng bởi **các thư viện CSS-in-JS** (như styled-components) để inject các style động vào DOM vào đúng thời điểm cần thiết, ngăn chặn việc tính toán lại layout đồng bộ và tránh hiện tượng nhấp nháy thị giác (FOUC)."
            }
        }
    },
    {
        _id: "react-s-050",
        difficulty: "senior",
        tags: ["react", "architecture", "monorepo", "lerna"],
        content: {
            en: {
                title: "In large-scale React development, what is a 'Monorepo' structure, and what is its main benefit for sharing components?",
                body: "Name a tool commonly used to manage dependencies and publishing in a JavaScript Monorepo.",
                solution: "A Monorepo is a single repository containing code for **many distinct projects or libraries**. Its main benefit is **simplified component/code sharing** (no need for publishing to NPM for internal use) and unified tooling/dependencies across the entire organization. Tools like **Lerna** or **Nx** are commonly used for management."
            },
            jp: {
                title: "大規模なReact開発において、「モノレポ」（Monorepo）構造とは何ですか、そしてコンポーネントを共有するための主な利点は何ですか？",
                body: "JavaScriptモノレポでの依存関係と公開を管理するために一般的に使用されるツールを挙げてください。",
                solution: "モノレポは、**多くの異なるプロジェクトやライブラリ**のコードを含む単一のリポジトリです。その主な利点は、**コンポーネント/コードの共有の簡素化**（内部使用のためにNPMに公開する必要がない）と、組織全体での統一されたツール/依存関係です。**Lerna**や**Nx**のようなツールが管理に一般的に使用されます。"
            },
            vi: {
                title: "Trong phát triển React quy mô lớn, 'Monorepo' structure là gì, và lợi ích chính của nó đối với việc chia sẻ component là gì?",
                body: "Nêu tên một công cụ thường được sử dụng để quản lý dependencies và publishing trong một JavaScript Monorepo.",
                solution: "Monorepo là một repository duy nhất chứa mã cho **nhiều dự án hoặc thư viện riêng biệt**. Lợi ích chính của nó là **chia sẻ component/mã đơn giản hóa** (không cần publish lên NPM cho mục đích nội bộ) và công cụ/dependencies thống nhất trên toàn bộ tổ chức. Các công cụ như **Lerna** hoặc **Nx** thường được sử dụng để quản lý."
            }
        }
    }
];