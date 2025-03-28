"use client"

import { useState } from "react"
import { motion, useDragControls } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Image,
  Type,
  Square,
  Play,
  Save,
  Share2,
  Plus,
  ChevronLeft,
  ChevronRight,
  Undo,
  Redo,
  PanelLeft,
  PanelRight,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

// Mock data for slides
const initialSlides = [
  {
    id: 1,
    title: "Title Slide",
    elements: [
      {
        id: "title-1",
        type: "text",
        content: "Presentation Title",
        x: 200,
        y: 150,
        width: 600,
        height: 80,
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
      },
      {
        id: "subtitle-1",
        type: "text",
        content: "Subtitle or tagline goes here",
        x: 250,
        y: 250,
        width: 500,
        height: 50,
        fontSize: 24,
        fontWeight: "normal",
        textAlign: "center",
      },
    ],
  },
  {
    id: 2,
    title: "Content Slide",
    elements: [
      {
        id: "title-2",
        type: "text",
        content: "Section Title",
        x: 100,
        y: 80,
        width: 800,
        height: 60,
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "left",
      },
      {
        id: "content-2",
        type: "text",
        content: "• Point 1\n• Point 2\n• Point 3",
        x: 120,
        y: 180,
        width: 700,
        height: 300,
        fontSize: 24,
        fontWeight: "normal",
        textAlign: "left",
      },
    ],
  },
  {
    id: 3,
    title: "Image Slide",
    elements: [
      {
        id: "title-3",
        type: "text",
        content: "Image Title",
        x: 100,
        y: 80,
        width: 800,
        height: 60,
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "left",
      },
      {
        id: "image-1",
        type: "image",
        content: "/placeholder.svg?height=300&width=500",
        x: 250,
        y: 180,
        width: 500,
        height: 300,
      },
    ],
  },
]

export default function EditorPage() {
  const [slides, setSlides] = useState(initialSlides)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [selectedElement, setSelectedElement] = useState<string | null>(null)
  const [showLeftPanel, setShowLeftPanel] = useState(true)
  const [showRightPanel, setShowRightPanel] = useState(true)
  const [zoom, setZoom] = useState(100)

  const currentSlide = slides[currentSlideIndex]
  const dragControls = useDragControls()

  const handleElementSelect = (elementId: string) => {
    setSelectedElement(elementId)
  }

  const handleElementDrag = (elementId: string, x: number, y: number) => {
    setSlides(
      slides.map((slide) => {
        if (slide.id === currentSlide.id) {
          return {
            ...slide,
            elements: slide.elements.map((element) => {
              if (element.id === elementId) {
                return {
                  ...element,
                  x,
                  y,
                }
              }
              return element
            }),
          }
        }
        return slide
      }),
    )
  }

  const handleElementResize = (elementId: string, width: number, height: number) => {
    setSlides(
      slides.map((slide) => {
        if (slide.id === currentSlide.id) {
          return {
            ...slide,
            elements: slide.elements.map((element) => {
              if (element.id === elementId) {
                return {
                  ...element,
                  width,
                  height,
                }
              }
              return element
            }),
          }
        }
        return slide
      }),
    )
  }

  const handleTextChange = (elementId: string, content: string) => {
    setSlides(
      slides.map((slide) => {
        if (slide.id === currentSlide.id) {
          return {
            ...slide,
            elements: slide.elements.map((element) => {
              if (element.id === elementId) {
                return {
                  ...element,
                  content,
                }
              }
              return element
            }),
          }
        }
        return slide
      }),
    )
  }

  const handleStyleChange = (elementId: string, property: string, value: any) => {
    setSlides(
      slides.map((slide) => {
        if (slide.id === currentSlide.id) {
          return {
            ...slide,
            elements: slide.elements.map((element) => {
              if (element.id === elementId) {
                return {
                  ...element,
                  [property]: value,
                }
              }
              return element
            }),
          }
        }
        return slide
      }),
    )
  }

  const addNewSlide = () => {
    const newSlide = {
      id: slides.length + 1,
      title: `Slide ${slides.length + 1}`,
      elements: [
        {
          id: `title-${slides.length + 1}`,
          type: "text",
          content: "New Slide Title",
          x: 100,
          y: 80,
          width: 800,
          height: 60,
          fontSize: 36,
          fontWeight: "bold",
          textAlign: "left",
        },
      ],
    }

    setSlides([...slides, newSlide])
    setCurrentSlideIndex(slides.length)
  }

  const addElement = (type: string) => {
    const newElement = {
      id: `${type}-${Date.now()}`,
      type,
      content: type === "text" ? "New Text" : "/placeholder.svg?height=200&width=300",
      x: 200,
      y: 200,
      width: type === "text" ? 400 : 300,
      height: type === "text" ? 100 : 200,
      fontSize: 24,
      fontWeight: "normal",
      textAlign: "left",
    }

    setSlides(
      slides.map((slide) => {
        if (slide.id === currentSlide.id) {
          return {
            ...slide,
            elements: [...slide.elements, newElement],
          }
        }
        return slide
      }),
    )

    setSelectedElement(newElement.id)
  }

  const getSelectedElement = () => {
    if (!selectedElement) return null
    return currentSlide.elements.find((element) => element.id === selectedElement) || null
  }

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1)
      setSelectedElement(null)
    }
  }

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1)
      setSelectedElement(null)
    }
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200 p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Input
                value={currentSlide.title}
                className="w-48 h-8"
                onChange={(e) => {
                  setSlides(
                    slides.map((slide) => (slide.id === currentSlide.id ? { ...slide, title: e.target.value } : slide)),
                  )
                }}
              />
              <Separator orientation="vertical" className="h-6" />
              <Button variant="ghost" size="icon">
                <Undo className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Redo className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="flex items-center">
                <Save className="h-4 w-4 mr-1" /> Save
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center">
                <Share2 className="h-4 w-4 mr-1" /> Share
              </Button>
              <Button size="sm" className="flex items-center">
                <Play className="h-4 w-4 mr-1" /> Present
              </Button>
            </div>
          </div>

          <Separator className="my-2" />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="icon" onClick={() => setShowLeftPanel(!showLeftPanel)}>
                <PanelLeft className="h-4 w-4" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4 mr-1" /> Add
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => addElement("text")}>
                    <Type className="h-4 w-4 mr-2" /> Text
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => addElement("image")}>
                    <Image className="h-4 w-4 mr-2" /> Image
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => addElement("shape")}>
                    <Square className="h-4 w-4 mr-2" /> Shape
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Separator orientation="vertical" className="h-6" />

              <Button variant="ghost" size="icon">
                <Bold className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Italic className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Underline className="h-4 w-4" />
              </Button>

              <Separator orientation="vertical" className="h-6" />

              <Button variant="ghost" size="icon">
                <AlignLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <AlignCenter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <AlignRight className="h-4 w-4" />
              </Button>

              <Separator orientation="vertical" className="h-6" />

              <Select defaultValue="arial">
                <SelectTrigger className="w-32 h-8">
                  <SelectValue placeholder="Font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="arial">Arial</SelectItem>
                  <SelectItem value="helvetica">Helvetica</SelectItem>
                  <SelectItem value="times">Times New Roman</SelectItem>
                  <SelectItem value="georgia">Georgia</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="24">
                <SelectTrigger className="w-20 h-8">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="14">14</SelectItem>
                  <SelectItem value="18">18</SelectItem>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="36">36</SelectItem>
                  <SelectItem value="48">48</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="icon" onClick={() => setShowRightPanel(!showRightPanel)}>
                <PanelRight className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" onClick={prevSlide} disabled={currentSlideIndex === 0}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm">
                  {currentSlideIndex + 1} / {slides.length}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  disabled={currentSlideIndex === slides.length - 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">{zoom}%</span>
                <Slider
                  value={[zoom]}
                  min={50}
                  max={200}
                  step={10}
                  className="w-24"
                  onValueChange={(value) => setZoom(value[0])}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Panel - Slides */}
          {showLeftPanel && (
            <div className="w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto p-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Slides</h3>
                <Button size="sm" variant="ghost" onClick={addNewSlide}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={cn(
                      "p-2 rounded-md cursor-pointer hover:bg-gray-200 transition-colors",
                      currentSlideIndex === index ? "bg-gray-200" : "",
                    )}
                    onClick={() => {
                      setCurrentSlideIndex(index)
                      setSelectedElement(null)
                    }}
                  >
                    <div className="aspect-video bg-white border border-gray-300 rounded-md mb-1 overflow-hidden relative">
                      {/* Slide thumbnail preview */}
                      <div className="absolute inset-0 p-1 transform scale-[0.2] origin-top-left">
                        {slide.elements.map((element) => {
                          if (element.type === "text") {
                            return (
                              <div
                                key={element.id}
                                style={{
                                  position: "absolute",
                                  left: element.x,
                                  top: element.y,
                                  width: element.width,
                                  height: element.height,
                                  fontSize: element.fontSize,
                                  fontWeight: element.fontWeight,
                                  textAlign: element.textAlign as any,
                                }}
                              >
                                {element.content}
                              </div>
                            )
                          } else if (element.type === "image") {
                            return (
                              <img
                                key={element.id}
                                src={element.content || "/placeholder.svg"}
                                alt="Slide element"
                                style={{
                                  position: "absolute",
                                  left: element.x,
                                  top: element.y,
                                  width: element.width,
                                  height: element.height,
                                  objectFit: "cover",
                                }}
                              />
                            )
                          }
                          return null
                        })}
                      </div>
                    </div>
                    <p className="text-xs truncate">{slide.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Canvas */}
          <div className="flex-1 bg-gray-100 overflow-auto flex items-center justify-center p-8">
            <div
              className="editor-canvas bg-white shadow-lg"
              style={{
                transform: `scale(${zoom / 100})`,
                transformOrigin: "center center",
                width: "1000px",
                height: "562.5px", // 16:9 aspect ratio
                position: "relative",
              }}
            >
              {currentSlide.elements.map((element) => {
                const isSelected = selectedElement === element.id

                if (element.type === "text") {
                  return (
                    <motion.div
                      key={element.id}
                      className={cn("editor-element", isSelected ? "selected" : "")}
                      style={{
                        left: element.x,
                        top: element.y,
                        width: element.width,
                        height: element.height,
                      }}
                      drag
                      dragControls={dragControls}
                      onDragStart={() => handleElementSelect(element.id)}
                      onDragEnd={(_, info) => {
                        handleElementDrag(element.id, element.x + info.offset.x, element.y + info.offset.y)
                      }}
                      onClick={() => handleElementSelect(element.id)}
                    >
                      <div
                        contentEditable
                        suppressContentEditableWarning
                        style={{
                          width: "100%",
                          height: "100%",
                          fontSize: `${element.fontSize}px`,
                          fontWeight: element.fontWeight,
                          textAlign: element.textAlign as any,
                          outline: "none",
                        }}
                        onBlur={(e) => handleTextChange(element.id, e.currentTarget.textContent || "")}
                      >
                        {element.content}
                      </div>

                      {isSelected && (
                        <>
                          <div className="resize-handle top-left" />
                          <div className="resize-handle top-right" />
                          <div className="resize-handle bottom-left" />
                          <div className="resize-handle bottom-right" />
                        </>
                      )}
                    </motion.div>
                  )
                } else if (element.type === "image") {
                  return (
                    <motion.div
                      key={element.id}
                      className={cn("editor-element", isSelected ? "selected" : "")}
                      style={{
                        left: element.x,
                        top: element.y,
                        width: element.width,
                        height: element.height,
                      }}
                      drag
                      dragControls={dragControls}
                      onDragStart={() => handleElementSelect(element.id)}
                      onDragEnd={(_, info) => {
                        handleElementDrag(element.id, element.x + info.offset.x, element.y + info.offset.y)
                      }}
                      onClick={() => handleElementSelect(element.id)}
                    >
                      <img
                        src={element.content || "/placeholder.svg"}
                        alt="Slide element"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />

                      {isSelected && (
                        <>
                          <div className="resize-handle top-left" />
                          <div className="resize-handle top-right" />
                          <div className="resize-handle bottom-left" />
                          <div className="resize-handle bottom-right" />
                        </>
                      )}
                    </motion.div>
                  )
                }

                return null
              })}
            </div>
          </div>

          {/* Right Panel - Properties */}
          {showRightPanel && (
            <div className="w-64 bg-gray-50 border-l border-gray-200 overflow-y-auto p-4">
              <h3 className="font-medium mb-4">Properties</h3>

              {selectedElement ? (
                <div className="space-y-4">
                  {getSelectedElement()?.type === "text" && (
                    <>
                      <div>
                        <Label htmlFor="fontSize">Font Size</Label>
                        <Select
                          value={getSelectedElement()?.fontSize.toString()}
                          onValueChange={(value) =>
                            handleStyleChange(selectedElement, "fontSize", Number.parseInt(value))
                          }
                        >
                          <SelectTrigger id="fontSize">
                            <SelectValue placeholder="Font Size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="12">12</SelectItem>
                            <SelectItem value="14">14</SelectItem>
                            <SelectItem value="18">18</SelectItem>
                            <SelectItem value="24">24</SelectItem>
                            <SelectItem value="36">36</SelectItem>
                            <SelectItem value="48">48</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="fontWeight">Font Weight</Label>
                        <Select
                          value={getSelectedElement()?.fontWeight.toString()}
                          onValueChange={(value) => handleStyleChange(selectedElement, "fontWeight", value)}
                        >
                          <SelectTrigger id="fontWeight">
                            <SelectValue placeholder="Font Weight" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="bold">Bold</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="textAlign">Text Align</Label>
                        <Select
                          value={getSelectedElement()?.textAlign.toString()}
                          onValueChange={(value) => handleStyleChange(selectedElement, "textAlign", value)}
                        >
                          <SelectTrigger id="textAlign">
                            <SelectValue placeholder="Text Align" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="left">Left</SelectItem>
                            <SelectItem value="center">Center</SelectItem>
                            <SelectItem value="right">Right</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  <div>
                    <Label htmlFor="position">Position</Label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <div>
                        <Label htmlFor="posX" className="text-xs">
                          X
                        </Label>
                        <Input
                          id="posX"
                          type="number"
                          value={getSelectedElement()?.x}
                          onChange={(e) =>
                            handleElementDrag(
                              selectedElement,
                              Number.parseInt(e.target.value),
                              getSelectedElement()?.y || 0,
                            )
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="posY" className="text-xs">
                          Y
                        </Label>
                        <Input
                          id="posY"
                          type="number"
                          value={getSelectedElement()?.y}
                          onChange={(e) =>
                            handleElementDrag(
                              selectedElement,
                              getSelectedElement()?.x || 0,
                              Number.parseInt(e.target.value),
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="size">Size</Label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <div>
                        <Label htmlFor="width" className="text-xs">
                          Width
                        </Label>
                        <Input
                          id="width"
                          type="number"
                          value={getSelectedElement()?.width}
                          onChange={(e) =>
                            handleElementResize(
                              selectedElement,
                              Number.parseInt(e.target.value),
                              getSelectedElement()?.height || 0,
                            )
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="height" className="text-xs">
                          Height
                        </Label>
                        <Input
                          id="height"
                          type="number"
                          value={getSelectedElement()?.height}
                          onChange={(e) =>
                            handleElementResize(
                              selectedElement,
                              getSelectedElement()?.width || 0,
                              Number.parseInt(e.target.value),
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="destructive"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setSlides(
                        slides.map((slide) => {
                          if (slide.id === currentSlide.id) {
                            return {
                              ...slide,
                              elements: slide.elements.filter((element) => element.id !== selectedElement),
                            }
                          }
                          return slide
                        }),
                      )
                      setSelectedElement(null)
                    }}
                  >
                    Delete Element
                  </Button>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <p>Select an element to edit its properties</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

