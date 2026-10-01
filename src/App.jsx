import './App.css'

function velocidadeFinal(vel){
  if(vel < 100){
    return 'Velocidade baixa'
  }else if(vel < 200){
    return 'Velocidade média'
  }else{
    return 'Velocidade muito alta!'
  }
}

function App() {
  const cor = 'Preto'
  const modelo = 'Mercedes'
  const velocidade = 320
  const placa = 'BRA2E19'
  const preco = 450000
  const motor = 'V12 Biturbo'
  const radar = 'Sim, com piloto automático'

  return (
    <>
      <h1>Carro esportivo</h1>
      <p><b>Cor:</b> {cor}</p>
      <p><b>Modelo:</b> {modelo}</p>
      <p><b>Velocidade:</b> {velocidade} km/h - {velocidadeFinal(velocidade)}</p>
      <p><b>Placa:</b> {placa}</p>
      <p><b>Preço:</b> R$ {preco}</p>
      <p><b>Motor:</b> {motor}</p>
      <p><b>Radar:</b> {radar}</p>
    </>
  )
}

export default App


