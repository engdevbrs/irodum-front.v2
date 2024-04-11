export default function GoogleMap() {
  return (
    <>
      <section className="p-0 wow fadeInUp" data-wow-delay="300ms">
        <div className="mx-auto maxw1700 bdrs16 position-relative mx20-lg">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.610255518923!2d-73.04994532344033!3d-36.82785827833972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5d1679f5929%3A0xc3c4274a0885e4f8!2zU2FuIE1hcnTDrW4sIENvbmNlcGNpw7NuLCBCw61vIELDrW8sIENoaWxl!5e0!3m2!1ses-419!2snz!4v1703633405351!5m2!1ses-419!2snz" 
          width="800" 
          height="600" 
          style={{border:'0'}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  );
}
