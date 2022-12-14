import { useRouter } from "next/router";

export default function singleNews() {
  const router = useRouter();

  return (
    <div>
      singleNews
      <p>{router.query.slug}</p>
    </div>
  );
}
