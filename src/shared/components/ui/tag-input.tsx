import { useState, type KeyboardEvent } from "react"
import { X } from "lucide-react"
import { Badge } from "@/shared/components/ui/badge"
import { Input } from "@/shared/components/ui/input"
import { cn } from "@/shared/lib/utils"

interface TagInputProps {
  value?: string[]
  onChange?: (tags: string[]) => void
  placeholder?: string
  className?: string
}

export function TagInput({
  value = [],
  onChange,
  placeholder = "Escribe y presiona Enter...",
  className
}: TagInputProps) {
  const [inputValue, setInputValue] = useState("")
  const [tags, setTags] = useState<string[]>(value)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()

      const trimmedValue = inputValue.trim()

      if (trimmedValue && !tags.includes(trimmedValue)) {
        const newTags = [...tags, trimmedValue]
        setTags(newTags)
        onChange?.(newTags)
        setInputValue("")
      }
    }
  }

  const removeTag = (indexToRemove: number) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove)
    setTags(newTags)
    onChange?.(newTags)
  }

  return (
    <div className={cn("space-y-2", className)}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="h-8 text-xs"
      />

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              // variant="secondary"
              className="pl-2 pr-1 py-1 text-xs flex items-center gap-1"
            >
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => removeTag(index)}
                className="ml-1 hover:bg-secondary-foreground/20 rounded-full p-0.5 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
