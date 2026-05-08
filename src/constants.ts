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
    content: "Trí tuệ nhân tạo (AI) là lĩnh vực khoa học máy tính tập trung vào việc tạo ra các hệ thống có khả năng thực hiện các nhiệm vụ đòi hỏi trí thông minh của con người..."
  },
  {
    id: "2",
    category: "meo",
    title: "Cách viết Prompt 'thần thánh' cho ChatGPT",
    excerpt: "Công thức CLEAR giúp bạn nhận được kết quả chính xác 99%.",
    readTime: "5 phút",
    content: "Để AI hiểu bạn muốn gì, hãy sử dụng công thức CLEAR: Context (Ngữ cảnh), Limit (Giới hạn), Example (Ví dụ), Action (Hành động), Result (Kết quả)..."
  },
  {
    id: "3",
    category: "daoduc",
    title: "Đừng để AI 'học hộ' bạn",
    excerpt: "Sử dụng AI để hỗ trợ tư duy, không phải để thay thế hoàn toàn việc học.",
    readTime: "4 phút",
    content: "Đạo đức trong sử dụng AI bắt đầu từ sự trung thực của chính bạn. Hãy dùng AI để giải thích khái niệm khó, thay vì nhờ nó viết bài văn từ đầu đến cuối..."
  },
  {
    id: "4",
    category: "congcu",
    title: "Top 5 công cụ AI cho học sinh 2026",
    excerpt: "Từ giải bài tập đến vẽ tranh, đây là những trợ lý đắc lực nhất.",
    readTime: "6 phút",
    content: "Năm 2026, thế giới AI không chỉ có ChatGPT. Hãy thử qua Claude 4, Gemini 2.0 Ultra, Midjourney v7 và các công cụ chuyên biệt cho toán học..."
  },
  {
    id: "5",
    category: "coban",
    title: "Lịch sử AI: Từ ước mơ đến hiện thực",
    excerpt: "Hành trình từ những năm 1950 đến cuộc cách mạng Generative AI.",
    readTime: "5 phút",
    content: "AI không mới. Nó đã bắt đầu từ hội nghị Dartmouth năm 1956. Tuy nhiên, chỉ đến khi có sự bùng nổ về sức mạnh tính toán và dữ liệu lớn..."
  },
  {
    id: "6",
    category: "meo",
    title: "Kiểm chứng thông tin từ AI",
    excerpt: "AI có thể 'ảo tưởng'. Đây là cách để bạn không bị lừa.",
    readTime: "4 phút",
    content: "Hiện tượng 'Hallucination' (ảo tưởng) là khi AI tạo ra thông tin nghe có vẻ hợp lý nhưng hoàn toàn sai sự thật. Luôn so sánh kết quả với ít nhất 2 nguồn tin cậy..."
  },
  {
    id: "7",
    category: "daoduc",
    title: "Bản quyền hình ảnh trong kỷ nguyên AI",
    excerpt: "Ai sở hữu bức tranh do AI vẽ? Câu hỏi pháp lý lớn nhất hiện nay.",
    readTime: "7 phút",
    content: "Khi bạn tạo ra một tác phẩm bằng Midjourney, quyền sở hữu thuộc về bạn hay nhà phát triển AI? Các quốc gia đang có những quy định khác nhau..."
  },
  {
    id: "8",
    category: "congcu",
    title: "Sử dụng Gemini Code Assist hiệu quả",
    excerpt: "Lập trình nhanh hơn gấp 10 lần với trợ lý AI chuyên nghiệp.",
    readTime: "5 phút",
    content: "Gemini Code Assist giúp bạn viết code, debug và giải thích các đoạn mã phức tạp ngay trong môi trường làm việc của mình..."
  }
];
