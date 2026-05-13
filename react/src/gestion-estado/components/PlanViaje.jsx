import { useState } from 'react';

const planViajeInicial = {
  id: 0,
  titulo: '(Root)',
  lugaresHijos: [{
    id: 1,
    titulo: 'Andalucía',
    lugaresHijos: [{
      id: 2,
      titulo: 'Cádiz',
      lugaresHijos: [{
        id: 3,
        titulo: 'Arcos de la Frontera',
        lugaresHijos: []
      }, {
        id: 4,
        titulo: 'Tarifa',
        lugaresHijos: []
      }]
    }, {
      id: 5,
      titulo: 'Jaén',
      lugaresHijos: [{
        id: 6,
        titulo: 'Baeza',
        lugaresHijos: []
      }, {
        id: 7,
        titulo: 'Úbeda',
        lugaresHijos: []
      }]
    }]
  }, {
    id: 8,
    titulo: 'Aragón',
    lugaresHijos: [{
      id: 9,
      titulo: 'Teruel',
      lugaresHijos: [{
        id: 10,
        titulo: 'Albarracín',
        lugaresHijos: []
      }, {
        id: 11,
        titulo: 'Beceite',
        lugaresHijos: []
      }]
    }, {
      id: 12,
      titulo: 'Huesca',
      lugaresHijos: [{
        id: 14,
        titulo: 'Ordesa',
        lugaresHijos: []
      }, {
        id: 15,
        titulo: 'Aínsa',
        lugaresHijos: []
      }]
    }]
  }]
};

function ArbolLugares({ lugar }) {
  const lugaresHijos = lugar.lugaresHijos;
  return (
    <li>
      {lugar.titulo}
      {lugaresHijos.length > 0 && (
        <ol>
          {lugaresHijos.map(lugar => (
            <ArbolLugares key={lugar.id} lugar={lugar} />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function PlanViaje() {
  const [plan, setPlan] = useState(planViajeInicial);
  const lugaresHijos = plan.lugaresHijos;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {lugaresHijos.map(lugar => (
          <ArbolLugares key={lugar.id} lugar={lugar} />
        ))}
      </ol>
    </>
  );
}
