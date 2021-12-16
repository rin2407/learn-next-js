import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function BlogDetail({ postDetail }: any) {
  const [detail, setDetail] = useState<any>([]);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const data = [
      {
        name: 'name 1',
      },
      {
        name: 'name 2',
      },
    ];
    setDetail(data);
  }, []);
  return (
    <div>
      {detail?.map((item: any) => (
        <div>{item?.name}</div>
      ))}
    </div>
  );
}

export default BlogDetail;
