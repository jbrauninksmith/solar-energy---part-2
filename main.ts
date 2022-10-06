servos.resetServos(servos.ServoPin.P8)
servos.motorPinPower(servos.MotorPin.Right, servos.Power.On)
basic.forever(function () {
    light.displayLuminance(light.LightPin.P1)
    if (light.ifLuminance(light.LightPin.P1, light.Luminance.Lit)) {
        servos.turnServo(servos.ServoPin.P8, 90)
    } else if (light.ifLuminance(light.LightPin.P1, light.Luminance.Shaded)) {
        servos.turnServo(servos.ServoPin.P8, 0)
    } else if (light.ifLuminance(light.LightPin.P1, light.Luminance.Dark)) {
        servos.turnServo(servos.ServoPin.P8, -90)
    }
})
