import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import {CartApi} from "@/services";
import {ICartResponse} from "@/models";

type QueryOptions = Omit<UseQueryOptions<ICartResponse, Error>, 'queryKey'>;

export const useGetCart = (queryOptions: QueryOptions = {}) =>
  useQuery<ICartResponse>({
    queryKey: ['useGetCart'],
    queryFn: () => CartApi.get(),
    ...queryOptions
  })
