function BasicLayout(props) {
  return (
    <div style={{
      maxWidth: "600px",
      margin: "0 auto"
    }}>
    {props.children}
    </div>
  );
}

export default BasicLayout;
