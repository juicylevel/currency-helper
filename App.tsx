import Index from 'index';

// app.json "entryPoint": "src/views/App/App.tsx" don't working:
// the project builds successfully, but does not start (white screen in expo)
export default () => {
    return <Index />;
};
