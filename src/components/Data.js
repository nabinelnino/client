import {
  useGetAllpsetsQuery,
  useGetPsetsDatabaseQuery,
} from "../features/apiSlice";
export const Data = () => {
  //   const { data: allPsetData } = useGetAllpsetsQuery();
  //   const { data: psetDatabaseData } = useGetPsetsDatabaseQuery();
  const { data } = useGetAllpsetsQuery();
  const { data1 } = useGetPsetsDatabaseQuery();

  console.log(data);
  console.log(data1);
  return <div>Data:</div>;
};
