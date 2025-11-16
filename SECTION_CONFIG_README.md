# Hướng dẫn cấu hình thứ tự sections trang chủ

## Mô tả
File `src/config/sectionOrder.ts` cho phép bạn dễ dàng quản lý và tùy chỉnh thứ tự hiển thị các sections trên trang chủ.

## Cách sử dụng

### 1. Thay đổi thứ tự sections
Để thay đổi thứ tự hiển thị, chỉ cần sắp xếp lại các object trong array `homepageSections`:

```typescript
export const homepageSections: SectionConfig[] = [
  {
    id: 'hero',
    component: 'Hero',
    enabled: true
  },
  // Di chuyển section này lên/xuống để thay đổi vị trí
  {
    id: 'about',
    component: 'About', 
    enabled: true
  },
  // ...
];
```

### 2. Ẩn/hiện sections
Để ẩn một section mà không xóa nó, đặt `enabled: false`:

```typescript
{
  id: 'testimonials',
  component: 'Testimonials',
  enabled: false // Section này sẽ bị ẩn
}
```

### 3. Thêm props cho component
Nếu cần truyền props đặc biệt cho component:

```typescript
{
  id: 'about',
  component: 'About',
  enabled: true,
  props: {
    variant: 'compact',
    showCTA: false
  }
}
```

## Các sections hiện có

| ID | Component | Mô tả |
|----|-----------|-------|
| hero | Hero | Section giới thiệu chính |
| about | About | Về công ty |
| projectShowcase | ProjectShowcase | Showcase dự án |
| services | Services | Dịch vụ |
| testimonials | Testimonials | Đánh giá khách hàng |
| contactInfo | ContactInfo | Thông tin liên hệ |
| leadershipQuotes | LeadershipQuotes | Trích dẫn lãnh đạo |
| post | Post | Tin tức |
| partners | Partners | Đối tác |
| cta | CTA | Call to action |

## Lưu ý
- Mọi thay đổi trong file `sectionOrder.ts` sẽ có hiệu lực ngay lập tức
- Đảm bảo component được import trong `App.tsx` và có trong `componentMap`
- Section Hero nên luôn ở đầu trang