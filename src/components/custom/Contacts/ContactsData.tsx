import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Teams = [
  {
    ID: "1",
    RegisterId: "123512",
    Name: "John Doe",
    Email: "johndoe@example.com",
    Age: "25",
    Phone: "(555) 104-1234",
    City: "New York",
    Zip_code: "123456",
  },
  {
    ID: "2",
    RegisterId: "123512",
    Name: "Carsel Lee",
    Email: "carsellee@example.com",
    Age: "28",
    Phone: "(777) 456-7890",
    City: "New York",
    Zip_code: "123456",
  },
  {
    ID: "3",
    RegisterId: "123512",
    Name: "James Smith",
    Email: "jamessmith@example.com",
    Age: "30",
    Phone: "(333) 875-4321",
    City: "New York",
    Zip_code: "123456",
  },
  {
    ID: "4",
    RegisterId: "123512",
    Name: "Anya Stark",
    Email: "anyastark@example.com",
    Age: "32",
    Phone: "(444) 786-1234",
    City: "New York",
    Zip_code: "123456",
  },
  {
    ID: "5",
    RegisterId: "123512",
    Name: "Asmhan Ali",
    Email: "asmhanali@example.com",
    Age: "35",
    Phone: "(555) 555-5555",
    City: "New York",
    Zip_code: "123456",
  },
  {
    ID: "6",
    RegisterId: "123512",
    Name: "Bojan Kovacevic",
    Email: "bojankovacevic@example.com",
    Age: "38",
    Phone: "(666) 666-6666",
    City: "New York",
    Zip_code: "123456",
  },
  {
    ID: "7",
    RegisterId: "123512",
    Name: "Ferran Del Olmo",
    Email: "ferrandelolmo@example.com",
    Age: "40",
    Phone: "(777) 777-7777",
    City: "New York",
    Zip_code: "123456",
  },
  {
    ID: "8",
    RegisterId: "123512",
    Name: "Rossini Roy",
    Email: "rossiniroy@example.com",
    Age: "45",
    Phone: "(888) 888-8888",
    City: "New York",
    Zip_code: "123456",
  },
  {
    ID: "9",
    RegisterId: "123512",
    Name: "Harry Potter",
    Email: "harrypotter@example.com",
    Age: "50",
    Phone: "(999) 999-9999",
    City: "New York",
    Zip_code: "123456",
  },
];

function ContactsData() {
  return (
    <main className="h-screen">
      <div>
        <h1 className="text-3xl font-bold">Contacts</h1>
      </div>
      <div className="mt-4 text-gray-500">
        <p>List of Contacts for Future Reference</p>
      </div>
      <div className="mt-4">
        <Table className="border-2 border-[var(--border)] rounded-lg">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">ID</TableHead>
              <TableHead className="text-center">RegisterId</TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Age</TableHead>
              <TableHead className="text-center">Phone</TableHead>
              <TableHead className="text-center">City</TableHead>
              <TableHead className="text-center">Zip code</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-sm">
            {Teams.map((team) => (
              <TableRow className="text-center text-sm" key={team.ID}>
                <TableCell className="text-xl h-20">{team.ID}</TableCell>
                <TableCell className="text-xl">{team.RegisterId}</TableCell>
                <TableCell className="text-xl">{team.Name}</TableCell>
                <TableCell className="text-xl">{team.Email}</TableCell>
                <TableCell className="text-xl">{team.Age}</TableCell>
                <TableCell className="text-xl">{team.Phone}</TableCell>
                <TableCell className="text-xl">{team.City}</TableCell>
                <TableCell className="text-xl">{team.Zip_code}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

export default ContactsData;
