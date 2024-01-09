import Image from "next/image";

export default function Page({ params }: { params: { service_type: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Services {params.service_type}
    </main>
  );
}
