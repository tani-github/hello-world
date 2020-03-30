import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '5px solid #DDD'
};

export default function Layout(props: any) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
      {props.content}
    </div>
  )
}