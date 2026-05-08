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
    title: "Mẹo đọc tài liệu 50 trang trong 1 phút",
    excerpt: "Dùng kỹ thuật 'Tóm tắt phân mảnh' để nắm bắt kiến thức khổng lồ.",
    readTime: "5 phút",
    content: "Thay vì yêu cầu AI tóm tắt cả cuốn sách (dễ bị mất chi tiết), hãy dùng mẹo 'Tóm tắt theo mục lục'. Bạn gửi mục lục trước, yêu cầu AI giải thích cấu trúc, sau đó yêu cầu tóm tắt từng chương một. Cách này giúp bạn không bỏ lỡ những điểm then chốt và có cái nhìn sâu sắc hơn là một bản tóm tắt hời hợt."
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
    title: "Kỹ thuật 'Few-shot': Dạy AI bằng ví dụ",
    excerpt: "Đừng chỉ ra lệnh, hãy đưa cho AI 2-3 ví dụ mẫu để nó làm theo.",
    readTime: "4 phút",
    content: "Nếu bạn muốn AI viết văn theo phong cách của bạn, đừng chỉ bảo 'hãy viết vui vẻ'. Hãy đưa cho nó 2 đoạn văn bạn đã viết trước đó và bảo: 'Đây là phong cách của tôi. Hãy dùng phong cách này để viết tiếp về chủ đề...'. AI sẽ bắt chước giọng văn, nhịp điệu và cách dùng từ của bạn chính xác hơn rất nhiều."
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
    title: "Biến AI thành 'Gia sư tranh biện'",
    excerpt: "Mẹo nâng cao tư duy phản biện bằng cách 'ép' AI cãi lại mình.",
    readTime: "5 phút",
    content: "Hãy thử dùng Prompt này: 'Tôi đang chuẩn bị luận điểm cho chủ đề 'AI có thay thế giáo viên hay không?'. Hãy đóng vai một người phản đối kịch liệt quan điểm của tôi. Cứ mỗi khi tôi đưa ra một lý lẽ, bạn hãy tìm ra kẽ hở và đưa ra dẫn chứng phản bác lại.' Cách này giúp bạn chuẩn bị tâm lý và rèn luyện tư duy sắc bén cho các bài thuyết trình."
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
  },
  {
    id: "15",
    category: "meo",
    title: "Mẹo 'Reverse Prompting' (Prompt ngược)",
    excerpt: "Yêu cầu AI viết hộ bạn bộ câu hỏi để đạt được kết quả mong muốn.",
    readTime: "4 phút",
    content: "Đôi khi bạn không biết phải hỏi gì để AI làm tốt nhất. Hãy thử: 'Tôi muốn bạn tạo ra một bản kế hoạch học tập 30 ngày cho kỳ thi IELTS. Trước khi bắt đầu, hãy đặt cho tôi 5 câu hỏi quan trọng nhất để bạn có đủ thông tin tạo ra kết quả tốt nhất.' Lúc này, AI sẽ là người chủ động 'phỏng vấn' bạn."
  }
];
