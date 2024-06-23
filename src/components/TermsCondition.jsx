"use client";
import { useState } from "react";

const tab = [
  "General",
  "Devolución y/o Reembolsos",
];

const TermsCondition1 = () => {
  const [currentTab, setCurrentTab] = useState("General");

  return (
    <>
      <section className="our-terms">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-title">
                <h2>Términos y Condiciones de Uso</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-2">
              <div className="terms_condition_widget mb30-sm">
                <div className="widget_list">
                  <nav>
                    <div className="nav nav-tabs text-start">
                      {tab.map((item, i) => (
                        <button
                          onClick={() => setCurrentTab(item)}
                          key={i}
                          className={`nav-link text-start ${
                            currentTab === item ? "active" : ""
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-9 col-xl-9 offset-xl-1">
              <div className="terms_condition_grid text-start">
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${
                      tab.indexOf(currentTab) === 0 ? "show active" : ""
                    }`}
                  >
                    <div className="grids mb50 mb40-md">
                      <h4 className="title">1. Introducción</h4>
                      <p className="mb25 text fz15">
                      Bienvenido a Irodum. Estos términos y condiciones rigen el uso de nuestra aplicación web,
                       que permite a las personas que ejercen un oficio aumentar sus oportunidades laborales y sus ingresos.
                      Al registrarte y utilizar Irodum, aceptas estos términos en su totalidad. 
                      Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestra plataforma.
                      </p>
                    </div>
                    <div className="grids mb50 mb40-md">
                      <h4 className="title">2. Definiciones</h4>
                      <p className="text fz15">
                      <ul>
                          <li><strong>Usuario</strong>: Toda persona que se registre y utilice la plataforma Irodum.</li>
                          <li><strong>Irodum</strong>: La aplicación web destinada a conectar profesionales de oficios con oportunidades laborales.</li>
                          <li><strong>Servicios</strong>: Todas las funcionalidades y servicios ofrecidos a través de la plataforma Irodum.</li>
                      </ul>
                      </p>
                    </div>
                    <div className="grids mb50 mb40-md">
                        <h4 className="title">3. Registro y Uso de la Cuenta</h4>
                        <p className="mb25 text fz15">
                        <ul>
                          <li>Para utilizar Irodum, es necesario registrarse proporcionando información veraz y completa.</li>
                          <li>Los usuarios son responsables de mantener la confidencialidad de su información de inicio de sesión.</li>
                          <li>No se permite el uso de la cuenta de otro usuario sin permiso explícito.</li>
                        </ul>
                        </p>
                    </div>
                    <div className="grids mb50 mb40-md">
                        <h4 className="title">4. Servicios Ofrecidos</h4>
                        <p className="mb25 text fz15">
                        <ul>
                            <li>Irodum facilita la conexión entre profesionales de oficios y clientes potenciales.</li>
                            <li>La plataforma permite a los usuarios crear perfiles, postular a trabajos, recibir valoraciones y gestionar sus servicios.</li>
                        </ul>
                        </p>
                    </div>
                    <div className="grids mb50 mb40-md">
                        <h4 className="title">5. Obligaciones del Usuario</h4>
                        <p className="mb25 text fz15">
                        <ul>
                            <li>Proveer información exacta y actualizada en su perfil.</li>
                            <li>Actuar de manera profesional y ética en todas las interacciones a través de la plataforma.</li>
                            <li>Cumplir con las leyes y regulaciones aplicables a su actividad profesional.</li>
                        </ul>
                        </p>
                    </div>
                    <div className="grids mb50 mb40-md">
                        <h4 className="title">6. Tarifas y Pagos</h4>
                        <p className="mb25 text fz15">
                        <ul>
                            <li>La inscripción en Irodum puede estar sujeta a tarifas, las cuales serán claramente indicadas en el proceso de registro.</li>
                            <li>Los pagos por los servicios contratados a través de Irodum deben realizarse de acuerdo con los términos acordados entre el usuario y su cliente.</li>
                        </ul>
                        </p>
                    </div>
                    <div className="grids mb50 mb40-md">
                        <h4 className="title">7. Privacidad y Protección de Datos</h4>
                        <p className="mb25 text fz15">Irodum se compromete a proteger la privacidad de sus usuarios. <br />
                          La información personal se manejará de acuerdo con nuestra Política de Privacidad.</p>
                    </div>
                    <div className="grids mb50 mb40-md">
                        <h4 className="title">8. Propiedad Intelectual</h4>
                        <p className="mb25 text fz15">Todos los contenidos y materiales en Irodum, incluidos textos, gráficos, logos y software, <br />
                          son propiedad de Irodum o de sus licenciantes y están protegidos por las leyes de propiedad intelectual.</p>
                    </div>
                    <div className="grids mb50 mb40-md">
                        <h4 className="title">9. Limitación de Responsabilidad</h4>
                        <p className="mb25 text fz15">Irodum no garantiza la obtención de empleo ni el incremento de ingresos de los usuarios. <br />
                          Irodum no se hace responsable por las interacciones, acuerdos o disputas entre usuarios y clientes.</p>
                    </div>
                    <div className="grids mb50 mb40-md">
                        <h4 className="title">10. Modificaciones de los Términos</h4>
                        <p className="mb25 text fz15">Irodum se reserva el derecho de modificar estos términos en cualquier momento. <br />
                          Los cambios serán notificados a los usuarios 
                          y se considerará que aceptan las modificaciones al continuar utilizando la plataforma.</p>
                    </div>
                    <div className="grids mb50 mb40-md">
                        <h4 className="title">11. Terminación de la Cuenta</h4>
                        <p className="mb25 text fz15">Irodum puede suspender o terminar el acceso de un usuario a la plataforma en caso de 
                          incumplimiento de estos términos o por cualquier otra razón justificada.</p>
                    </div>
                    <div className="grids mb50 mb40-md">
                        <h4 className="title">12. Ley Aplicable</h4>
                        <p className="mb25 text fz15">Estos términos y condiciones se rigen por las leyes de Chile. <br />
                          Cualquier disputa relacionada con estos términos será resuelta en los tribunales competentes de Chile.</p>
                    </div>
                    <div className="grids mb50 mb40-md">
                        <h4 className="title">13. Contacto</h4>
                        <p className="mb25 text fz15">Para cualquier consulta o más información sobre estos términos y condiciones, 
                          por favor, contáctanos a través de soporte@irodum.com.</p>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      tab.indexOf(currentTab) === 1 ? "show active" : ""
                    }`}
                  >
                    <div className="grids mb90 mb40-md">
                      <h3 className="title mb40">Devoluciones y Reembolsos</h3>
                      <p className="mb25 text fz15">Irodum no se hace responsable de la gestión de devoluciones o reembolsos. Es expresamente deber de las partes involucradas – el profesional de oficio y el cliente – ser precavidos y cuidadosos en todas las transacciones y acuerdos realizados a través de la plataforma.</p>
                      <p className="mb25 text fz15">Los usuarios deben asegurarse de definir claramente los términos y condiciones de sus servicios y pagos, incluyendo cualquier política de devoluciones o reembolsos, antes de iniciar cualquier trabajo. Se recomienda a los usuarios establecer acuerdos escritos y detallados para evitar malentendidos y asegurar que ambas partes comprendan y acepten los términos de la transacción.</p>
                      <p className="mb25 text fz15">Cualquier disputa que surja en relación con devoluciones o reembolsos debe ser resuelta directamente entre las partes involucradas, sin la intervención de Irodum. La plataforma no mediará ni intervendrá en conflictos relacionados con estos aspectos.</p>
                    </div>
                  </div>
                  <section className="our-terms">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="main-title">
                                <h2>LICENCIA</h2>
                                <p className="text">
                                Irodum, a través de su sitio web concede una licencia para que los usuarios utilicen las
                                herramientas desarrolladas en este sitio web de acuerdo a los 
                                Términos y Condiciones que se describen en este documento.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <q>Éste documento ha sido redactado por un ente certificado.</q>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default TermsCondition1;