import PageHeader from "@/components/PageHeader"

function DashboardLayout({children}) {
  return (
    <>
      <PageHeader className='my-8'/>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default DashboardLayout