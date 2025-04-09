interface ExampleTableProps {
  textStart: string;
  tableData: string[][];
  textEnd: string;
}

const ExampleTable = ({ textStart, tableData, textEnd }: ExampleTableProps) => {
  return (
    <div className="my-8 bg-[#c9cdce] border border-[#CBD5E1] rounded-sm p-4 shadow-sm">
      <p className="mb-4">{textStart}</p>

      <div className="overflow-x-auto rounded-md">
        <table className="table-auto w-full text-left border-collapse bg-white/70 rounded-md shadow-sm">
          <thead>
            <tr className="bg-[var(--primary-color)] text-sm sm:text-base font-semibold text-gray-800">
              {tableData[0].map((header, index) => (
                <th key={index} className="px-4 py-2 border-l first:border-l-0 text-white border-gray-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.slice(1).map((row: string[], rowIndex: number) => (
              <tr key={rowIndex} className="border-b border-gray-200 last:border-b-0">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-2 text-sm sm:text-base border-l first:border-l-0 border-gray-200"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4">{textEnd}</p>
    </div>
  )
}

export default ExampleTable