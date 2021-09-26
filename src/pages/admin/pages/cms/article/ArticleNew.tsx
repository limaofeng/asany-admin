function ArticleNew(props: any) {
  console.log('ArticleNew location', props.location.state);

  props.location.state = { layout: false };

  console.log('ArticleNew location', props.location.state.layout);

  return (
    <div className="art-editor modal-fullscreen">
      <div className="art-editor-header">
        <div />
      </div>
      <div className="art-editor-body" />
    </div>
  );
}

export default ArticleNew;
