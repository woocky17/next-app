import React from "react";

type Params = Promise<{ slug: string[] }>;
type SearchParams = Promise<{ sortOrder: string }>;

interface Props {
  params: Params;
  searchParams: SearchParams;
}

const ProductPage = async ({ params, searchParams }: Props) => {
  const { slug } = await params;
  const { sortOrder } = await searchParams;

  return (
    <div>
      ProductPage {slug.join(", ")} {sortOrder}
    </div>
  );
};

export default ProductPage;
