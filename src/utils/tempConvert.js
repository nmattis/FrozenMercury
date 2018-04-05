export default function tempConvert(temp) {
    // Fahrenheit to Celsius
    var celsius = (temp - 32.0) * (5.0 / 9.0);

    return celsius.toFixed(2);
}
