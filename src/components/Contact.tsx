
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hola Fabián, mi nombre es ${formData.name}.

📧 Email: ${formData.email}
📞 Teléfono: ${formData.phone}
🔧 Servicio de interés: ${formData.service}

Mensaje:
${formData.message}

¡Espero tu respuesta!`;
    
    const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "¡Mensaje preparado!",
      description: "Te redirigimos a WhatsApp para enviar tu consulta.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const coverageAreas = [
    'Vilcún (Base de operaciones)',
    'Temuco',
    'Padre Las Casas',
    'Lautaro',
    'Perquenco',
    'Galvarino',
    'Cholchol',
    'Nueva Imperial',
    'Carahue',
    'Angol'
  ];

  const contactInfo = [
    {
      icon: '📱',
      title: 'WhatsApp',
      info: '+56 9 1234 5678',
      link: 'https://wa.me/56912345678'
    },
    {
      icon: '📧',
      title: 'Email',
      info: 'contacto@solucionesfarias.cl',
      link: 'mailto:contacto@solucionesfarias.cl'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      info: 'Vilcún, Región de La Araucanía',
      link: '#'
    },
    {
      icon: '🕒',
      title: 'Horario',
      info: 'Lun - Sáb: 8:00 - 18:00',
      link: '#'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-900 mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-warm-700 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Contáctanos para una evaluación gratuita. 
            Responderemos todas tus consultas y te ayudaremos a encontrar la mejor solución.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-warm-900">
                Solicita tu Presupuesto
              </CardTitle>
              <p className="text-warm-700">
                Completa el formulario y te contactaremos a la brevedad
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-warm-900 mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      className="border-warm-300 focus:border-fire"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-warm-900 mb-2">
                      Teléfono *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+56 9 XXXX XXXX"
                      className="border-warm-300 focus:border-fire"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-warm-900 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="border-warm-300 focus:border-fire"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-warm-900 mb-2">
                    Servicio de interés *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-warm-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fire focus:border-fire"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="instalacion">Instalación de estufa/cañón</option>
                    <option value="mantencion">Mantención y limpieza</option>
                    <option value="reparacion">Reparación</option>
                    <option value="asesoria">Asesoría técnica</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-warm-900 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto, tipo de calefactor, ubicación, etc."
                    rows={4}
                    className="border-warm-300 focus:border-fire"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-fire hover:bg-fire-600 text-white py-3"
                >
                  📱 Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info and Coverage */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-warm-900">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <div className="font-semibold text-warm-900">{info.title}</div>
                      {info.link.startsWith('http') || info.link.startsWith('mailto') ? (
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fire hover:text-fire-600 transition-colors"
                        >
                          {info.info}
                        </a>
                      ) : (
                        <div className="text-warm-700">{info.info}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Coverage Areas */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-warm-900">
                  Áreas de Cobertura
                </CardTitle>
                <p className="text-warm-700">
                  Atendemos en las siguientes comunas:
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {coverageAreas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-fire rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-warm-700 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-fire/10 rounded-lg">
                  <p className="text-sm text-warm-800">
                    <strong>¿Tu comuna no está en la lista?</strong> ¡Contáctanos igual! 
                    Evaluamos cada caso y podemos extender nuestro servicio según la distancia.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="shadow-lg border-0 bg-gradient-fire text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">¿Necesitas ayuda urgente?</h3>
                <p className="mb-4 text-fire-100">
                  Para emergencias o consultas rápidas, contáctanos directamente por WhatsApp
                </p>
                <a 
                  href="https://wa.me/56912345678?text=Hola%2C%20necesito%20ayuda%20urgente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-fire hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                >
                  🚨 WhatsApp Urgente
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
