import { Article, Category } from "./types";

export const CATEGORIES: Category[] = [
  { id: "coban", label: "CƠ BẢN", color: "bg-blue-400", icon: "BookOpen" },
  { id: "meo", label: "MẸO DÙNG", color: "bg-lime-400", icon: "Sparkles" },
  { id: "daoduc", label: "ĐẠO ĐỨC", color: "bg-amber-400", icon: "ShieldCheck" },
  { id: "congcu", label: "CÔNG CỤ", color: "bg-purple-400", icon: "Wrench" },
  { id: "tuonglai", label: "TƯƠNG LAI", color: "bg-rose-400", icon: "Rocket" },
];

export const ARTICLES: Article[] = [
  {
    id: "1",
    category: "coban",
    title: "AI là gì? Hiểu đúng trong 5 phút",
    excerpt: "Trí tuệ nhân tạo không phải là phép thuật. Nó là toán học và dữ liệu.",
    readTime: "3 phút",
    content: "Trí tuệ nhân tạo (AI) là lĩnh vực khoa học máy tính tập trung vào việc tạo ra các hệ thống có khả năng thực hiện các nhiệm vụ đòi hỏi trí thông minh của con người. Hiện nay, phổ biến nhất là AI tạo sinh (Generative AI) như ChatGPT hay Gemini. Chúng hoạt động dựa trên việc dự đoán từ tiếp theo trong một chuỗi dựa trên hàng tỷ dữ liệu đã được học. Hiểu đơn giản, AI giống như một trợ lý cực kỳ thông minh nhưng đôi khi có thể nhầm lẫn nếu không được hướng dẫn kỹ."
  },
  {
    id: "2",
    category: "meo",
    title: "Công thức CLEAR cho Prompt 'thần thánh'",
    excerpt: "Công thức giúp bạn nhận được kết quả chính xác 99% từ mọi AI.",
    readTime: "5 phút",
    content: "Để AI hiểu bạn muốn gì, hãy sử dụng công thức CLEAR:\n- Context (Ngữ cảnh): Bạn là ai? AI đóng vai gì?\n- Limit (Giới hạn): Độ dài bao nhiêu? Định dạng gì?\n- Example (Ví dụ): Đưa ra một ví dụ mẫu nếu có thể.\n- Action (Hành động): Yêu cầu AI làm gì cụ thể (Viết, sửa, tóm tắt...).\n- Result (Kết quả): Kết quả mong muốn cuối cùng là gì?"
  },
  {
    id: "3",
    category: "daoduc",
    title: "Đừng để AI 'học hộ' bạn",
    excerpt: "Sử dụng AI để hỗ trợ tư duy, không phải để thay thế hoàn toàn việc học.",
    readTime: "4 phút",
    content: "Sử dụng AI để làm bài tập về nhà từ A đến Z là cách nhanh nhất để làm yếu đi tư duy của chính mình. Hãy sử dụng AI theo cách 'đối thoại': Yêu cầu nó giải thích các khái niệm khó bằng nhiều cách khác nhau, yêu cầu nó đưa ra các câu hỏi để kiểm tra kiến thức của bạn, hoặc dùng nó để lên dàn ý cho bài viết. Bạn vẫn là người cầm lái, AI chỉ là động cơ hỗ trợ."
  },
  {
    id: "4",
    category: "congcu",
    title: "Hệ sinh thái AI cho học sinh 2026",
    excerpt: "Những công cụ không thể thiếu trong balo kỹ thuật số của bạn.",
    readTime: "6 phút",
    content: "Năm 2026, thế giới AI đa dạng hơn bao giờ hết:\n- Claude 4: Khả năng lập luận và viết văn bản tự nhiên, giàu cảm xúc.\n- Gemini 2.0: Tích hợp sâu vào Google Docs, giúp bạn soạn thảo báo cáo thần tốc.\n- Perplexity: Công cụ tìm kiếm AI có nguồn dẫn chứng cực kỳ uy tín.\n- Gamma: Tạo slide thuyết trình đẹp mắt chỉ từ một dòng văn bản."
  },
  {
    id: "9",
    category: "meo",
    title: "Kỹ thuật Chain-of-Thought (Chuỗi tư duy)",
    excerpt: "Yêu cầu AI 'suy nghĩ từng bước' để có kết quả logic hơn.",
    readTime: "4 phút",
    content: "Một trong những mẹo lớn nhất khi dùng AI cho Toán học hoặc Lập luận là yêu cầu nó: 'Hãy suy nghĩ từng bước một' (Let's think step by step). Khi làm vậy, AI sẽ kích hoạt chuỗi tư duy logic thay vì đưa ra câu trả lời ngay lập tức, điều này giúp giảm thiểu sai sót đáng kể và bạn cũng có thể theo dõi được logic của nó."
  },
  {
    id: "10",
    category: "coban",
    title: "LLM hoạt động như thế nào? (Dễ hiểu)",
    excerpt: "Khám phá 'não bộ' đằng sau các chatbot AI lớn nhất.",
    readTime: "7 phút",
    content: "Large Language Models (LLM) không thực sự 'hiểu' nghĩa của từ như con người. Chúng chuyển đổi ngôn ngữ thành các con số (vector) và tính toán xác suất. Mỗi từ bạn gõ vào được chia thành các 'token'. AI sẽ quét toàn bộ ngữ cảnh và chọn ra token tiếp theo có xác suất cao nhất. Đó là lý do tại sao AI có thể viết rất lưu loát nhưng đôi khi lại bị sai kiến thức cơ bản."
  },
  {
    id: "11",
    category: "meo",
    title: "Dùng AI học Ngoại ngữ hiệu quả",
    excerpt: "Biến ChatGPT thành người bạn bản xứ thực thụ.",
    readTime: "5 phút",
    content: "Thay vì chỉ bảo nó dịch, hãy thử dùng Prompt này: 'Tôi muốn luyện giao tiếp tiếng Anh về chủ đề du lịch. Hãy đóng vai một người bạn bản xứ, nói chuyện với tôi một cách thân mật. Sau mỗi lượt tôi nói, hãy sửa lỗi ngữ pháp giúp tôi và gợi ý cách diễn đạt tự nhiên hơn.' Bạn sẽ thấy trình độ ngoại ngữ lên hương rõ rệt."
  },
  {
    id: "12",
    category: "tuonglai",
    title: "Sống sót trong kỷ nguyên AI",
    excerpt: "Những kỹ năng con người không bao giờ bị thay thế.",
    readTime: "6 phút",
    content: "Dù AI rất mạnh, nhưng có 3 kỹ năng cốt lõi con người vẫn đứng đầu:\n1. Tư duy phản biện (Critical Thinking): Kiểm chứng xem AI nói đúng hay sai.\n2. Sự thấu cảm (Empathy): Sự kết nối giữa người với người trong giao tiếp.\n3. Khả năng đặt câu hỏi (Problem Framing): AI chỉ trả lời tốt khi bạn đặt câu hỏi đúng. Hãy tập trung phát triển những kỹ năng này!"
  },
  {
    id: "13",
    category: "congcu",
    title: "Canvas & Mindmap AI",
    excerpt: "Trực quan hóa ý tưởng với sức mạnh của trí tuệ nhân tạo.",
    readTime: "4 phút",
    content: "Các công cụ như Miro AI hay Whimsical AI cho phép bạn tạo ra những bản đồ tư duy (mindmap) khổng lồ chỉ từ một chủ đề. Chúng giúp bạn tìm thấy những mối liên hệ ẩn giấu giữa các kiến thức, cực kỳ hữu ích khi bạn phải ôn tập cho một kỳ thi lớn hoặc lên kế hoạch cho một dự án cá nhân."
  },
  {
    id: "14",
    category: "daoduc",
    title: "Phân biệt nội dung Real vs AI",
    excerpt: "Làm sao để nhận biết một bức ảnh hay bài viết là sản phẩm của AI?",
    readTime: "5 phút",
    content: "Trong một thế giới đầy 'Deepfake', kỹ năng phân biệt là sống còn. Với hình ảnh, hãy chú ý vào các chi tiết nhỏ như ngón tay, vành tai hoặc sự bất hợp lý trong ánh sáng. Với văn bản, AI thường có xu hướng dùng các từ ngữ quá trau chuốt, lặp cấu trúc hoặc thiếu những cảm xúc cá nhân sâu sắc. Luôn đặt câu hỏi 'Tại sao nội dung này xuất hiện?' trước khi tin tưởng."
  }
];
