"use client";
import { createUser } from "@/server/users";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers } from "@/client/userss";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface dataType {
  id: number;
  name: string;
}
export default function Home() {
  const query = useQuery({ queryKey: ["todos"], queryFn: getUsers });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      //invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (query.isLoading) return <div>Loading...</div>;
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <button
            onClick={() => mutation.mutate({ id: 1, name: "Borna Miljkovic" })}
          >
            CreateUser
          </button>
          {query.data?.map((user: dataType) => (
            <div key={user.id}> {user.name}</div>
          ))}
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
