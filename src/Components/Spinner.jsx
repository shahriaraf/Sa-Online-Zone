

const Spinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-white border-t-indigo-600 rounded-full animate-spin" />
    </div>
  );
};

export default Spinner;
