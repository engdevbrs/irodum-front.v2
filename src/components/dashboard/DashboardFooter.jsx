
export default function DashboardFooter() {
  const date = new Date()
  return (
    <>
      <footer className="dashboard_footer pt30 pb30">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-md-between">
            <div className="col-auto">
              <div className="copyright-widget">
                <p className="mb-md-0">
                  © Irodum. {date.getFullYear()} engdevbrs. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
