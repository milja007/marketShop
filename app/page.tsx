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
    <div>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col items-center justify-center ">
            <button
              onClick={() =>
                mutation.mutate({ id: 1, name: "Borna Miljkovic" })
              }
            >
              CreateUser
            </button>
            {query.data?.map((user: dataType) => (
              <div key={user.id}> {user.name}</div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
