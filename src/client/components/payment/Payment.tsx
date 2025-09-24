import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import gpay from "@/assets/gpay.jpg";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CreditCard,
  Smartphone,
  Wallet,
  Shield,
  Lock,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  QrCode,
  Timer,
} from "lucide-react";

export function Payment() {
  const [currentStep, setCurrentStep] = useState("amount"); // "amount", "payment", "success"
  const [paymentAmount, setPaymentAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showUpiQr, setShowUpiQr] = useState(false);
  const [selectedUpiApp, setSelectedUpiApp] = useState("");
  const [qrTimer, setQrTimer] = useState(300); // 5 minutes in seconds

  const handleUpiAppSelect = (appName: string) => {
    setSelectedUpiApp(appName);
    setShowUpiQr(true);
    setQrTimer(300);

    const timer = setInterval(() => {
      setQrTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowUpiQr(false);
          return 300;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAmountSubmit = () => {
    if (paymentAmount && Number.parseFloat(paymentAmount) > 0) {
      setCurrentStep("payment");
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setCurrentStep("success");
  };

  const resetPayment = () => {
    setCurrentStep("amount");
    setPaymentAmount("");
    setSelectedMethod("card");
    setIsProcessing(false);
    setShowUpiQr(false);
    setSelectedUpiApp("");
    setQrTimer(300);
  };

  if (currentStep === "amount") {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <Card
          className="w-full max-w-md"
          style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <CardHeader style={{ backgroundColor: "#059669", color: "white" }}>
            <CardTitle className="text-center text-xl">
              Enter Payment Amount
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="amount"
                className="text-lg font-medium"
                style={{ color: "#374151" }}
              >
                Amount (₹)
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className="text-2xl font-bold text-center h-16"
                style={{
                  borderColor: "#059669",
                  fontSize: "2rem",
                  color: "#059669",
                }}
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm" style={{ color: "#6b7280" }}>
                Quick amounts:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {["500", "1000", "2500"].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    onClick={() => setPaymentAmount(amount)}
                    style={{
                      borderColor: "#059669",
                      color: "#059669",
                      backgroundColor: "transparent",
                    }}
                    className="hover:bg-emerald-50"
                  >
                    ₹{amount}
                  </Button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleAmountSubmit}
              disabled={!paymentAmount || Number.parseFloat(paymentAmount) <= 0}
              className="w-full h-12 text-lg font-semibold"
              style={{
                backgroundColor: "#059669",
                color: "white",
                border: "none",
              }}
            >
              Continue to Payment
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>

            <div className="text-center">
              <div
                className="flex items-center justify-center gap-2 text-sm"
                style={{ color: "#6b7280" }}
              >
                <Shield className="h-4 w-4" />
                <span>Secure Payment Gateway</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentStep === "success") {
    return (
      <div className="flex items-center justify-center min-h-[200px] pt-28">
        <Card
          className="w-full max-w-md text-center"
          style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16" style={{ color: "#059669" }} />
            </div>
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "#111827" }}
            >
              Payment Successful!
            </h2>
            <div className="mb-6">
              <p style={{ color: "#6b7280" }}>Amount Paid</p>
              <p className="text-3xl font-bold" style={{ color: "#059669" }}>
                ₹{paymentAmount}
              </p>
              <p className="text-sm mt-2" style={{ color: "#6b7280" }}>
                Transaction completed successfully
              </p>
            </div>
            <Button
              onClick={resetPayment}
              variant="outline"
              className="w-full bg-transparent"
              style={{
                borderColor: "#059669",
                color: "#059669",
                backgroundColor: "transparent",
              }}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Make Another Payment
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6 max-w-[1900px] mx-auto py-10">
      <div className="lg:col-span-1">
        <Card
          style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" style={{ color: "#059669" }} />
              <span style={{ color: "#111827" }}>Payment Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span style={{ color: "#6b7280" }}>Amount</span>
              <span className="font-medium" style={{ color: "#111827" }}>
                ₹{paymentAmount}
              </span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: "#6b7280" }}>Processing Fee</span>
              <span className="font-medium" style={{ color: "#111827" }}>
                ₹0.00
              </span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span style={{ color: "#111827" }}>Total Amount</span>
              <span style={{ color: "#059669" }}>₹{paymentAmount}</span>
            </div>

            <div
              className="mt-6 p-3 rounded-lg"
              style={{ backgroundColor: "#f3f4f6" }}
            >
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: "#6b7280" }}
              >
                <Lock className="h-4 w-4" />
                <span>Secured by 256-bit SSL encryption</span>
              </div>
            </div>

            <Button
              onClick={() => setCurrentStep("amount")}
              variant="outline"
              className="w-full"
              style={{
                borderColor: "#059669",
                color: "#059669",
                backgroundColor: "transparent",
              }}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Change Amount
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <Card
          style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
        >
          <CardHeader>
            <CardTitle style={{ color: "#111827" }}>
              Choose Payment Method
            </CardTitle>
            <p style={{ color: "#6b7280" }}>
              Select your preferred payment method to complete the transaction
            </p>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedMethod} onValueChange={setSelectedMethod}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="card" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Card
                </TabsTrigger>
                <TabsTrigger value="upi" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  UPI
                </TabsTrigger>
                <TabsTrigger value="wallet" className="flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  Wallet
                </TabsTrigger>
              </TabsList>

              <TabsContent value="card" className="space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input id="cardName" placeholder="John Doe" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" type="password" />
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Badge variant="outline">Visa</Badge>
                  <Badge variant="outline">Mastercard</Badge>
                  <Badge variant="outline">RuPay</Badge>
                  <Badge variant="outline">American Express</Badge>
                </div>
              </TabsContent>

              <TabsContent value="upi" className="space-y-4 mt-6">
                {!showUpiQr ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input
                        id="upiId"
                        placeholder="yourname@paytm"
                        className="font-mono"
                      />
                    </div>

                    <div
                      className="p-4 border rounded-lg"
                      style={{ backgroundColor: "#f9fafb" }}
                    >
                      <h4
                        className="font-medium mb-3"
                        style={{ color: "#111827" }}
                      >
                        Quick UPI Options
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpiAppSelect("Google Pay")}
                          className="h-12 justify-start"
                          style={{ borderColor: "#d1d5db" }}
                        >
                          <img src={gpay} alt="GPay" className="h-6 w-6 mr-2" />
                          Google Pay
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpiAppSelect("PhonePe")}
                          className="h-12 justify-start"
                          style={{ borderColor: "#d1d5db" }}
                        >
                          <img
                            src={gpay}
                            alt="PhonePe"
                            className="h-6 w-6 mr-2"
                          />
                          PhonePe
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpiAppSelect("Paytm")}
                          className="h-12 justify-start"
                          style={{ borderColor: "#d1d5db" }}
                        >
                          <img
                            src={gpay}
                            alt="Paytm"
                            className="h-6 w-6 mr-2"
                          />
                          Paytm
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpiAppSelect("BHIM")}
                          className="h-12 justify-start"
                          style={{ borderColor: "#d1d5db" }}
                        >
                          <img src={gpay} alt="BHIM" className="h-6 w-6 mr-2" />
                          BHIM
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div
                      className="text-center p-6 border rounded-lg"
                      style={{ backgroundColor: "#f9fafb" }}
                    >
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <QrCode
                          className="h-5 w-5"
                          style={{ color: "#059669" }}
                        />
                        <span
                          className="font-medium"
                          style={{ color: "#111827" }}
                        >
                          Scan QR Code with {selectedUpiApp}
                        </span>
                      </div>

                      <div
                        className="mx-auto mb-4 flex items-center justify-center border-2 border-dashed rounded-lg"
                        style={{
                          width: "200px",
                          height: "200px",
                          borderColor: "#059669",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <img
                          src={gpay}
                          alt={`${selectedUpiApp} QR Code for ₹${paymentAmount}`}
                          className="w-full h-full object-contain rounded"
                        />
                      </div>

                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Timer
                          className="h-4 w-4"
                          style={{ color: "#dc2626" }}
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: "#dc2626" }}
                        >
                          Expires in {formatTime(qrTimer)}
                        </span>
                      </div>

                      <div
                        className="text-sm space-y-2"
                        style={{ color: "#6b7280" }}
                      >
                        <p>1. Open {selectedUpiApp} app on your phone</p>
                        <p>2. Scan this QR code</p>
                        <p>3. Verify amount ₹{paymentAmount} and pay</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setShowUpiQr(false)}
                        className="flex-1"
                        style={{
                          borderColor: "#d1d5db",
                          color: "#6b7280",
                        }}
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to UPI Options
                      </Button>
                      <Button
                        onClick={() => handleUpiAppSelect(selectedUpiApp)}
                        variant="outline"
                        style={{
                          borderColor: "#059669",
                          color: "#059669",
                        }}
                      >
                        Refresh QR
                      </Button>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="wallet" className="space-y-4 mt-6">
                <div className="grid gap-3">
                  <Button
                    variant="outline"
                    className="justify-start h-12 bg-transparent"
                  >
                    <img
                      src="/paytm-wallet-logo.jpg"
                      alt="Paytm"
                      className="h-6 w-6 mr-3"
                    />
                    <div className="text-left">
                      <div className="font-medium">Paytm Wallet</div>
                      <div className="text-sm text-muted-foreground">
                        Balance: ₹1,250.00
                      </div>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start h-12 bg-transparent"
                  >
                    <img
                      src="/amazon-pay-logo.png"
                      alt="Amazon Pay"
                      className="h-6 w-6 mr-3"
                    />
                    <div className="text-left">
                      <div className="font-medium">Amazon Pay</div>
                      <div className="text-sm text-muted-foreground">
                        Balance: ₹3,450.00
                      </div>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start h-12 bg-transparent"
                  >
                    <img
                      src="/phonepe-wallet-logo.jpg"
                      alt="PhonePe"
                      className="h-6 w-6 mr-3"
                    />
                    <div className="text-left">
                      <div className="font-medium">PhonePe Wallet</div>
                      <div className="text-sm text-muted-foreground">
                        Balance: ₹890.00
                      </div>
                    </div>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            <div
              className="mt-6 p-4 rounded-lg"
              style={{
                backgroundColor: "#fef3c7",
                border: "1px solid #fbbf24",
              }}
            >
              <div className="flex items-start gap-3">
                <AlertCircle
                  className="h-5 w-5 mt-0.5"
                  style={{ color: "#d97706" }}
                />
                <div className="text-sm">
                  <p className="font-medium" style={{ color: "#92400e" }}>
                    Secure Payment Notice
                  </p>
                  <p style={{ color: "#a16207" }} className="mt-1">
                    Your payment information is encrypted and secure. We never
                    store your card details.
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={handlePayment}
              disabled={isProcessing || (selectedMethod === "upi" && showUpiQr)}
              className="w-full mt-6 h-12 text-lg font-semibold"
              style={{
                backgroundColor:
                  selectedMethod === "upi" && showUpiQr ? "#9ca3af" : "#059669",
                color: "white",
                border: "none",
              }}
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing Payment...
                </>
              ) : selectedMethod === "upi" && showUpiQr ? (
                <>
                  <QrCode className="h-5 w-5 mr-2" />
                  Waiting for QR Payment...
                </>
              ) : (
                <>
                  <Lock className="h-5 w-5 mr-2" />
                  Pay ₹{paymentAmount} Securely
                </>
              )}
            </Button>

            <div
              className="flex items-center justify-center gap-4 mt-4 text-sm"
              style={{ color: "#6b7280" }}
            >
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="h-4 w-4" />
                <span>PCI Compliant</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
