function PredictionResult({ result }) {
  return (
    <div>
      <h2>Prediction Result</h2>

      <p>Prediction: {result.prediction}</p>
      <p>Confidence: {result.confidence}</p>
    </div>
  );
}

export default PredictionResult;